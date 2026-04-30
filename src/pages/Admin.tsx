import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/useAuth';
import { Link, useNavigate } from 'react-router-dom';

export default function Admin() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [configs, setConfigs] = useState([]);

  useEffect(() => {
    if (user && user.role !== 'SUPER_ADMIN') {
      navigate('/dashboard');
    } else if (user) {
      fetch('/api/admin/config')
        .then(res => res.json())
        .then(data => setConfigs(data.configs || []))
        .catch(console.error);
    }
  }, [user, navigate]);

  if (!user || user.role !== 'SUPER_ADMIN') return null;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="border-b bg-white px-8 py-4 flex items-center justify-between shadow-sm">
        <div className="flex gap-6 items-center">
          <Link to="/" className="text-xl font-bold uppercase tracking-wide mr-4">Admin Panel</Link>
          <Link to="/dashboard" className="text-gray-500 hover:text-gray-900 font-medium">Exit Admin</Link>
        </div>
      </header>
      <main className="max-w-7xl mx-auto p-8 mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1 space-y-2">
          <button className="w-full text-left bg-indigo-50 text-indigo-700 px-4 py-3 rounded-lg font-semibold">Level Configs</button>
          <button className="w-full text-left text-gray-600 hover:bg-gray-100 px-4 py-3 rounded-lg font-medium">Reward Settlements</button>
          <button className="w-full text-left text-gray-600 hover:bg-gray-100 px-4 py-3 rounded-lg font-medium">Internal Accounts</button>
        </div>
        <div className="md:col-span-3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-bold">Level Rules</h2>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700">Add New Rule</button>
            </div>
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-500">
                <tr>
                  <th className="px-6 py-3 font-semibold">Level</th>
                  <th className="px-6 py-3 font-semibold">Reward Amount</th>
                  <th className="px-6 py-3 font-semibold">Settlement Days</th>
                  <th className="px-6 py-3 font-semibold">Direct V1 Req</th>
                  <th className="px-6 py-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {configs.map((config: any) => (
                  <tr key={config.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold">{config.levelCode}</td>
                    <td className="px-6 py-4">{config.rewardAmount} USDT</td>
                    <td className="px-6 py-4">{config.rewardSettlementDays} Days</td>
                    <td className="px-6 py-4">{config.directV1Required}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-indigo-600 font-medium hover:underline">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
