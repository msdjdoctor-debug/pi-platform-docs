// app/page.tsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [balance, setBalance] = useState("0");

  useEffect(() => {
    if (window.Pi) window.Pi.init({ version: "2.0" });
  }, []);

  const login = async () => {
    const auth = await Pi.authenticate(["payments"], () => {});
    setUser(auth.user);
    setBalance("31,415.926"); // example balance from Pi Chain
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black text-white">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-6xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            PIYRA
          </h1>
          {!user ? (
            <button onClick={login} className="bg-yellow-500 text-black px-10 py-5 rounded-full text-2xl font-bold shadow-2xl">
              Sign in with Pi
            </button>
          ) : (
            <div className="text-right">
              <p className="text-sm opacity-70">Welcome back</p>
              <p className="text-2xl font-bold">Pioneer</p>
            </div>
          )}
        </div>

        {/* Balance Card */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded-3xl p-8 text-center shadow-2xl">
          <p className="text-2xl opacity-90">Total Balance</p>
          <p className="text-7xl font-black mt-3">π {balance}</p>
          <p className="text-3xl mt-3">≈ $9,869,420.18</p>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-2 gap-6 mt-12">
          <Link href="/pay" className="bg-green-600 p-10 rounded-3xl text-center shadow-2xl hover:scale-105 transition">
            <div className="text-7xl mb-2">Pay</div>
            <p className="text-2xl font-bold">Pay with PI</p>
          </Link>

          <Link href="/swap" className="bg-blue-600 p-10 rounded-3xl text-center shadow-2xl hover:scale-105 transition">
            <div className="text-7xl mb-2">Swap</div>
            <p className="text-2xl font-bold">PI ↔ USDC</p>
          </Link>

          <Link href="/pifest" className="bg-red-600 p-10 rounded-3xl text-center shadow-2xl hover:scale-105 transition">
            <div className="text-6xl mb-2">PiFest</div>
            <p className="text-2xl font-bold">Earn Free PI</p>
          </Link>

          <Link href="/vault" className="bg-purple-600 p-10 rounded-3xl text-center shadow-2xl hover:scale-105 transition">
            <div className="text-5xl mb-2">VAULT</div>
            <p className="text-2xl font-bold">31.4% APY</p>
          </Link>
        </div>

        <p className="text-center mt-16 text-gray-400">
          The #1 Pi super app used by 60+ million Pioneers · 2025
        </p>
      </div>
    </div>
  );
}
