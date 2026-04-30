import React from 'react';
import { useAuth } from '../store/useAuth';
import QRCode from 'react-qr-code';
import { Link } from 'react-router-dom';

export default function Invite() {
  const { user } = useAuth();
  
  if (!user) return null;

  const inviteLink = `${window.location.origin}/?ref=${user.walletAddress}`;

  return (
    <div className="min-h-screen bg-surface-container-lowest text-charcoal-ink">
      <header className="border-b border-parchment-border bg-white px-8 py-4 flex items-center justify-between">
        <div className="flex gap-6 items-center">
          <Link to="/" className="text-xl font-bold uppercase tracking-wide mr-4">Block Matrix</Link>
          <Link to="/dashboard" className="text-charcoal-ink/60 hover:text-charcoal-ink font-semibold">Dashboard</Link>
          <Link to="/invite" className="text-amethyst-link font-semibold border-b-2 border-amethyst-link pb-1">Invite</Link>
        </div>
      </header>
      <main className="max-w-[800px] mx-auto p-8 mt-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Invite Friends</h1>
        <div className="bg-white p-8 rounded-[16px] border border-parchment-border shadow-sm flex flex-col items-center">
          <div className="mb-8 p-4 bg-white border border-gray-100 shadow-md rounded-xl">
             <QRCode value={inviteLink} size={200} />
          </div>
          <div className="w-full">
            <label className="block text-sm font-semibold mb-2">Your Referral Link:</label>
            <div className="flex gap-2">
              <input type="text" readOnly value={inviteLink} className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none font-mono text-sm" />
              <button 
                onClick={() => navigator.clipboard.writeText(inviteLink)}
                className="bg-mysteria-purple text-white px-6 py-3 rounded-lg hover:bg-opacity-90 font-semibold"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
