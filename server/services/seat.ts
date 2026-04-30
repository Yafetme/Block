import { prisma } from '../lib/prisma.js';

export async function processNewSeatOrder(userId: string, amount: number, sponsorSeatId?: string | null) {
  return await prisma.$transaction(async (tx) => {
    // 1. Create a new seat for the user
    const seat = await tx.seat.create({
      data: {
        ownerUserId: userId,
        sponsorSeatId: sponsorSeatId || null,
        currentLevel: 'V0',
      }
    });

    // 2. Create the associated order
    const order = await tx.order.create({
      data: {
        seatId: seat.id,
        amount,
        orderType: 'initial_purchase',
        status: 'PAID',
      }
    });

    // 3. Create a Ledger Entry for Membership Payment
    await tx.walletLedger.create({
      data: {
        userId,
        seatId: seat.id,
        amount: -amount,
        direction: 'DEBIT',
        ledgerType: 'membership_payment',
        relatedOrderId: order.id,
      }
    });

    // 4. Update Sponsor's status & Check V1 qualification recursively
    if (sponsorSeatId) {
      await checkAndUpgradeSeatLevel(tx, sponsorSeatId);
    }

    // Attempt Matrix placement for V2/V3
    // await placeInMatrixQueue(tx, seat.id);

    return { seat, order };
  });
}

// Check Level qualifications
export async function checkAndUpgradeSeatLevel(tx: any, seatId: string) {
  const seat = await tx.seat.findUnique({
    where: { id: seatId },
    include: {
      directReferrals: true,
      orders: true,
    }
  });
  if (!seat) return;

  const validDirects = seat.directReferrals.filter((s: any) => s.currentLevel !== 'V0').length;
  
  // Example for V1
  if (seat.currentLevel === 'V0' && validDirects >= 3) {
    // Upgrade to V1
    await tx.seat.update({
      where: { id: seatId },
      data: { currentLevel: 'V1' }
    });

    // Release V1 Reward
    // Load V1 config
    const v1Config = await tx.levelConfig.findFirst({ where: { levelCode: 'V1', isActive: true } });
    if (v1Config) {
      await tx.rewardSettlement.create({
        data: {
          userId: seat.ownerUserId,
          seatId: seat.id,
          levelCode: 'V1',
          rewardAmount: v1Config.rewardAmount,
          defaultSettlementTime: new Date(Date.now() + (v1Config.rewardSettlementDays * 24 * 60 * 60 * 1000)),
          settlementDays: v1Config.rewardSettlementDays,
          settlementStatus: v1Config.rewardSettlementDays === 0 ? 'settled' : 'pending',
          configVersion: v1Config.version,
        }
      });

      if (v1Config.rewardSettlementDays === 0) {
        await tx.walletLedger.create({
          data: {
            userId: seat.ownerUserId,
            seatId: seat.id,
            amount: v1Config.rewardAmount,
            direction: 'CREDIT',
            ledgerType: 'promotion_reward',
            relatedLevel: 'V1',
          }
        });
      }
    }
  }
}
