import { Router, Response } from 'express';
import { requireAuth, AuthRequest } from '../middleware/auth.js';
import { prisma } from '../lib/prisma.js';

const router = Router();

router.get('/me', requireAuth, async (req: AuthRequest, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      include: {
        seats: true,
      }
    });
    res.json({ user });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/activate', requireAuth, async (req: AuthRequest, res: Response) => {
  try {
    const { sponsorSeatId } = req.body;
    let sponsorSeat = null;
    if (sponsorSeatId) {
      sponsorSeat = await prisma.seat.findUnique({ where: { id: sponsorSeatId } });
    }
    
    // Create Seat
    const newSeat = await prisma.seat.create({
      data: {
        ownerUserId: req.user.id,
        sponsorSeatId: sponsorSeat ? sponsorSeat.id : null,
      }
    });
    
    // Create Order
    const order = await prisma.order.create({
      data: {
        seatId: newSeat.id,
        amount: 80, // Default to 80U
        orderType: 'initial_purchase',
      }
    });

    res.json({ success: true, seat: newSeat, order });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
