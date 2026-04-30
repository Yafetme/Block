import React from 'react';
import { useAuth } from '../store/useAuth';
import { Link } from 'react-router-dom';

export default function Transactions() {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-surface-container-lowest text-charcoal-ink">
      <header className="border-b border-parchment-border bg-white px-8 py-4 flex items-center justify-between">
        <div className="flex gap-6 items-center">
          <Link to="/" className="text-xl font-bold uppercase tracking-wide mr-4">Block Matrix</Link>
          <Link to="/dashboard" className="text-charcoal-ink/60 hover:text-charcoal-ink font-semibold">Dashboard</Link>
          <Link to="/earnings" className="text-charcoal-ink/60 hover:text-charcoal-ink font-semibold">Earnings</Link>
          <Link to="/transactions" className="text-amethyst-link font-semibold border-b-2 border-amethyst-link pb-1">Transactions</Link>
          <Link to="/invite" className="text-charcoal-ink/60 hover:text-charcoal-ink font-semibold">Invite</Link>
        </div>
      </header>
      <main className="max-w-[1000px] mx-auto p-8 mt-8">
        <h1 className="text-3xl font-bold mb-8">Transactions</h1>
        <div className="bg-white p-6 rounded-[16px] border border-parchment-border shadow-sm">
          <p className="text-charcoal-ink/70">Deposit, withdrawal, and wallet activities.</p>
        </div>
      </main>
    </div>
  );
}
