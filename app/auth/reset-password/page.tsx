"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { updatePassword } from "@/lib/auth";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords don't match!");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);

    try {
      await updatePassword({ password });
      router.push("/auth/signin?reset=success");
    } catch (err: any) {
      setError(err.message || "Failed to update password");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Link href="/" className="flex items-center justify-center gap-2 mb-8 group">
          <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
            <span className="text-white font-bold text-2xl">⚡</span>
          </div>
          <span className="text-3xl font-bold text-gradient-animate">VOLTPAY</span>
        </Link>

        <div className="glass-card rounded-2xl shadow-2xl p-8 border border-white/30">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">
              Reset <span className="text-gradient-animate">Password</span>
            </h2>
            <p className="text-gray-600">
              Enter your new password below
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                {error}
              </div>
            )}
            
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">New Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">Confirm New Password</label>
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                required
              />
            </div>

            <div className="glass-green rounded-xl p-3 text-sm">
              <p className="font-semibold mb-2">Password requirements:</p>
              <ul className="space-y-1 text-gray-600 ml-4">
                <li className={password.length >= 6 ? "text-green-600" : ""}>
                  • At least 6 characters
                </li>
                <li className={password === confirmPassword && password ? "text-green-600" : ""}>
                  • Passwords match
                </li>
              </ul>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl font-semibold hover:from-green-700 hover:to-green-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? "Updating..." : "Update Password →"}
            </button>
          </form>

          <p className="text-center mt-6 text-gray-600 text-sm">
            Remember your password?{" "}
            <Link href="/auth/signin" className="text-green-600 font-semibold hover:text-green-700 transition-colors">
              Sign In
            </Link>
          </p>
        </div>

        <p className="text-center mt-6 text-sm text-gray-500">
          Protected by industry-standard encryption
        </p>
      </div>
    </div>
  );
}
