import { Router, Request, Response } from 'express';
import { generateNonce, SiweMessage } from 'siwe';
import jwt from 'jsonwebtoken';
import { prisma } from '../lib/prisma.js';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-jwt-key';

router.get('/nonce', async (req: Request, res: Response) => {
  try {
    const nonce = generateNonce();
    res.setHeader('Content-Type', 'text/plain');
    res.end(nonce);
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate nonce' });
  }
});

router.post('/verify', async (req: Request, res: Response) => {
  try {
    const { message, signature } = req.body;
    
    try {
      const siweMessage = new SiweMessage(message);
      const fields = await siweMessage.verify({ signature });
      
      const { address: walletAddress } = fields.data;
      
      let user = await prisma.user.findUnique({
        where: { walletAddress: walletAddress.toLowerCase() }
      });
      
      if (!user) {
        user = await prisma.user.create({
          data: {
            walletAddress: walletAddress.toLowerCase(),
            role: 'USER',
          }
        });
      }
      
      const token = jwt.sign(
        { id: user.id, walletAddress: user.walletAddress, role: user.role },
        JWT_SECRET,
        { expiresIn: '7d' }
      );
      
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      
      res.json({ success: true, user });
    } catch (siweErr) {
      if (typeof siweErr === 'object' && siweErr !== null && 'error' in siweErr) {
         res.status(422).json({ error: (siweErr as any).error.type });
         return;
      }
      res.status(422).json({ error: 'Invalid signature' });
      return;
    }
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/logout', (req: Request, res: Response) => {
  res.clearCookie('token');
  res.json({ success: true });
});

export default router;
