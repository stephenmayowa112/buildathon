"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock sign in - redirect to dashboard
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">VOLTPAY</h1>
          <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
          <p className="text-gray-600">Sign in to manage solar energy subscription</p>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2 mb-8 bg-gray-100 p-1 rounded-lg">
          <div className="flex-1 py-3 bg-white rounded-lg text-center font-medium shadow-sm">
            Sign in
          </div>
          <Link href="/auth/signup" className="flex-1 py-3 text-center text-gray-600">
            Create Account
          </Link>
        </div>

        <form onSubmit={handleSignIn} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Alex@brighforge.com"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium">Password</label>
              <Link href="/auth/forgot-password" className="text-sm text-green-600 hover:underline">
                Forget Password ?
              </Link>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password123"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition flex items-center justify-center gap-2"
          >
            Sign in →
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link href="/auth/signup" className="text-green-600 font-medium hover:underline">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}
