/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';

import Home from './pages/Home';
import SystemFlow from './pages/SystemFlow';
import Dashboard from './pages/Dashboard';
import MySeats from './pages/MySeats';
import Team from './pages/Team';
import Earnings from './pages/Earnings';
import Transactions from './pages/Transactions';
import Invite from './pages/Invite';
import Admin from './pages/Admin';
import { LanguageProvider } from './contexts/LanguageContext';

const config = createConfig(
  getDefaultConfig({
    chains: [mainnet],
    transports: { [mainnet.id]: http() },
    walletConnectProjectId: import.meta.env.VITE_WC_PROJECT_ID || 'dummy_project_id',
    appName: 'Block Matrix',
  })
);

const queryClient = new QueryClient();

export default function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>
          <LanguageProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/system/flow" element={<SystemFlow />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/my" element={<MySeats />} />
                <Route path="/team" element={<Team />} />
                <Route path="/earnings" element={<Earnings />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/invite" element={<Invite />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </Router>
          </LanguageProvider>
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

