import { Router, Response } from 'express';
import { requireAdmin, AuthRequest } from '../middleware/auth.js';
import { prisma } from '../lib/prisma.js';

const router = Router();

router.get('/config', requireAdmin, async (req: AuthRequest, res: Response) => {
  try {
    const configs = await prisma.levelConfig.findMany({
      orderBy: { levelRank: 'asc' }
    });
    res.json({ configs });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
