"use client";

import { useState } from "react";
import Link from "next/link";
import { resetPassword } from "@/lib/auth";
import { ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      await resetPassword({ email });
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Failed to send reset email");
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <Link href="/" className="flex items-center justify-center gap-2 mb-8 group">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-white font-bold text-2xl">⚡</span>
            </div>
            <span className="text-3xl font-bold text-gradient-animate">VOLTPAY</span>
          </Link>

          <div className="glass-card rounded-2xl shadow-2xl p-8 border border-white/30 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-5xl">📧</span>
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Check Your <span className="text-gradient-animate">Email</span>
            </h2>
            
            <p className="text-gray-600 mb-6">
              We've sent a password reset link to <span className="font-semibold text-green-600">{email}</span>
            </p>

            <div className="glass-green rounded-xl p-4 mb-6 text-left text-sm">
              <p className="mb-2 font-semibold">📌 Didn't receive the email?</p>
              <ul className="space-y-1 text-gray-600 ml-4">
                <li>• Check your spam folder</li>
                <li>• Make sure the email address is correct</li>
                <li>• Wait a few minutes and try again</li>
              </ul>
            </div>

            <Link
              href="/auth/signin"
              className="block w-full py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl font-semibold hover:from-green-700 hover:to-green-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
          <Link 
            href="/auth/signin" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 transition-all mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Sign In
          </Link>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">
              Forgot <span className="text-gradient-animate">Password?</span>
            </h2>
            <p className="text-gray-600">
              No worries! Enter your email and we'll send you reset instructions
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                {error}
              </div>
            )}
            
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@business.com"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl font-semibold hover:from-green-700 hover:to-green-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? "Sending..." : "Send Reset Link →"}
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
