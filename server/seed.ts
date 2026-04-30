import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const levelConfigs = [
  { levelRank: 1, levelCode: 'V1', levelName: 'V1 Member', entryAmount: 80, rewardAmount: 80, rewardSettlementDays: 0, minOrderCount: 3, directV1Required: 3 },
  { levelRank: 2, levelCode: 'V2', levelName: 'V2 Member', entryAmount: 80, rewardAmount: 160, rewardSettlementDays: 1, minOrderCount: 0, matrixEnabled: true },
  { levelRank: 3, levelCode: 'V3', levelName: 'V3 Member', entryAmount: 80, rewardAmount: 400, rewardSettlementDays: 3, minOrderCount: 0, matrixEnabled: true },
  { levelRank: 4, levelCode: 'V4', levelName: 'V4 Member', entryAmount: 80, rewardAmount: 800, rewardSettlementDays: 5, minOrderCount: 0, directV1Required: 4, matrixEnabled: true },
  { levelRank: 5, levelCode: 'V5', levelName: 'V5 Member', entryAmount: 80, rewardAmount: 1600, rewardSettlementDays: 7, minOrderCount: 0, directV1Required: 6, directV4Required: 1, performanceRewardRate: 5, matrixEnabled: true },
  { levelRank: 6, levelCode: 'V6', levelName: 'V6 Member', entryAmount: 80, rewardAmount: 3200, rewardSettlementDays: 7, minOrderCount: 0, directV1Required: 6, directV4Required: 3, performanceRewardRate: 6, matrixEnabled: true },
  { levelRank: 7, levelCode: 'V7', levelName: 'V7 Member', entryAmount: 80, rewardAmount: 8000, rewardSettlementDays: 7, minOrderCount: 0, directV1Required: 12, directV5Required: 1, performanceRewardRate: 7, matrixEnabled: true },
  { levelRank: 8, levelCode: 'V8', levelName: 'V8 Member', entryAmount: 80, rewardAmount: 16000, rewardSettlementDays: 7, minOrderCount: 0, directV1Required: 15, directV5Required: 3, performanceRewardRate: 8, matrixEnabled: true },
  { levelRank: 9, levelCode: 'V9', levelName: 'V9 Member', entryAmount: 80, rewardAmount: 144000, rewardSettlementDays: 7, minOrderCount: 0, directV1Required: 18, directV8Required: 2, performanceRewardRate: 9, matrixEnabled: true },
  { levelRank: 10, levelCode: 'V10', levelName: 'V10 Member', entryAmount: 80, rewardAmount: 1440000, rewardSettlementDays: 7, minOrderCount: 0, directV1Required: 18, directV9Required: 2, performanceRewardRate: 10, matrixEnabled: true },
];

async function main() {
  const existingConfig = await prisma.levelConfig.count();
  if (existingConfig === 0) {
    for (const conf of levelConfigs) {
      await prisma.levelConfig.create({
        data: conf,
      });
    }
    console.log('Seed: Level Configs created');
  }

  const adminAddress = '0x1000000000000000000000000000000000000000'; 
  let admin = await prisma.user.findUnique({ where: { walletAddress: adminAddress } });
  if (!admin) {
    admin = await prisma.user.create({
      data: {
        walletAddress: adminAddress,
        role: 'SUPER_ADMIN',
      }
    });
    console.log('Seed: Admin user created');
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
