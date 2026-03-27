"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Zap } from "lucide-react";

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);
  
  const transactionRef = searchParams.get("ref");

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push("/dashboard");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated celebration orbs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed"></div>
      
      {/* Confetti effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-3 h-3 bg-green-500 rounded-full animate-float"></div>
        <div className="absolute top-40 right-1/4 w-2 h-2 bg-yellow-500 rounded-full animate-float-delayed"></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-blue-500 rounded-full animate-float"></div>
        <div className="absolute top-32 right-1/3 w-3 h-3 bg-pink-500 rounded-full animate-float-delayed"></div>
      </div>
      
      <div className="max-w-md w-full relative z-10">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8 group animate-fadeInDown">
          <div className="w-9 h-9 bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg glow-pulse">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold text-gradient-animate">VOLTPAY</span>
        </Link>

        <div className="glass-card rounded-2xl shadow-2xl p-8 border border-white/30 text-center animate-scaleIn delay-100">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mx-auto mb-6 animate-scaleIn delay-200 glow-pulse">
            <span className="text-5xl animate-bounce-subtle">✅</span>
          </div>

          <h1 className="text-3xl font-bold mb-4 animate-fadeInUp delay-300">
            Payment <span className="text-gradient-animate">Successful!</span>
          </h1>
          
          <p className="text-gray-600 mb-6 animate-fadeInUp delay-400">
            Your payment has been processed successfully. Thank you for your subscription!
          </p>

          {/* Transaction Details */}
          <div className="glass-green rounded-xl p-6 mb-6 text-left animate-fadeInUp delay-500">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <span className="animate-bounce-subtle">📋</span>
              Transaction Details
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between hover:translate-x-1 transition-transform">
                <span className="text-gray-600">Transaction Ref:</span>
                <span className="font-mono font-semibold text-shimmer">{transactionRef}</span>
              </div>
              <div className="flex justify-between hover:translate-x-1 transition-transform">
                <span className="text-gray-600">Amount:</span>
                <span className="font-semibold text-shimmer">₦90,000</span>
              </div>
              <div className="flex justify-between hover:translate-x-1 transition-transform">
                <span className="text-gray-600">Status:</span>
                <span className="text-green-600 font-semibold flex items-center gap-1">
                  <span className="animate-bounce-subtle">✓</span>
                  Completed
                </span>
              </div>
              <div className="flex justify-between hover:translate-x-1 transition-transform">
                <span className="text-gray-600">Date:</span>
                <span className="font-semibold">{new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3 animate-fadeInUp delay-600">
            <Link
              href="/dashboard"
              className="block w-full py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl font-semibold hover:from-green-700 hover:to-green-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Go to Dashboard →
            </Link>
            
            <button
              onClick={() => window.print()}
              className="block w-full py-3 glass-card rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              Print Receipt 🖨️
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-6 animate-fadeInUp delay-700">
            Redirecting to dashboard in <span className="font-bold text-shimmer">{countdown}</span> seconds...
          </p>
        </div>

        {/* Support */}
        <div className="mt-6 text-center text-sm text-gray-600 animate-fadeInUp delay-800">
          <p>Need help? Contact support at <span className="text-green-600 font-medium">support@voltpay.com</span></p>
          <Link href="/" className="inline-block mt-3 text-green-600 font-medium hover:text-green-700 transition-all hover:translate-x-1">
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
        <div className="text-center">
          <div className="animate-spin text-4xl mb-4">⏳</div>
          <div className="text-gray-600 animate-pulse">Loading...</div>
        </div>
      </div>
    }>
      <PaymentSuccessContent />
    </Suspense>
  );
}
