import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-surface-container-lowest text-charcoal-ink">
      <header className="border-b border-parchment-border bg-white px-8 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold uppercase tracking-wide flex items-center gap-2">
          <img src="/logo.png" className="w-8 h-8 object-contain" alt="Logo" />
          BLOCK MATRIX
        </Link>
      </header>
      <main className="max-w-[1200px] mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        <div className="bg-white p-6 rounded-[16px] border border-parchment-border shadow-sm">
           <p className="text-charcoal-ink/70">Welcome to your dashboard.</p>
        </div>
      </main>
    </div>
  );
}
