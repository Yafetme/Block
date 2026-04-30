import React from 'react';
import { ConnectKitButton } from 'connectkit';
import { useAccount, useSignMessage } from 'wagmi';
import { useAuth } from '../store/useAuth';
import { SiweMessage } from 'siwe';

export function WalletConnectButton() {
  const { isConnected, address, chainId } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { user, login, logout } = useAuth();

  const handleSignIn = async () => {
    try {
      const nonceRes = await fetch('/api/auth/nonce');
      const nonce = await nonceRes.text();

      const message = new SiweMessage({
        domain: window.location.host,
        address,
        statement: 'Sign in with Ethereum to the app.',
        uri: window.location.origin,
        version: '1',
        chainId,
        nonce,
      });

      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      });

      const verifyRes = await fetch('/api/auth/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, signature }),
      });

      if (verifyRes.ok) {
        const data = await verifyRes.json();
        login(data.user);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <ConnectKitButton />
      {isConnected && !user && (
        <button
          onClick={handleSignIn}
          className="bg-mysteria-purple text-white px-4 py-2 rounded"
        >
          Sign In (SIWE)
        </button>
      )}
      {user && (
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      )}
    </div>
  );
}
