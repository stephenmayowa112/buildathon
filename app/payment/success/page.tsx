"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function PaymentSuccessPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-5xl">✅</span>
          </div>

          <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
          
          <p className="text-gray-600 mb-6">
            Your payment has been processed successfully. Thank you for your subscription!
          </p>

          {/* Transaction Details */}
          <div className="bg-gray-50 rounded-xl p-6 mb-6 text-left">
            <h3 className="font-bold mb-4">Transaction Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Transaction Ref:</span>
                <span className="font-mono font-semibold">{transactionRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Amount:</span>
                <span className="font-semibold">₦90,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="text-green-600 font-semibold">Completed</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-semibold">{new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <Link
              href="/dashboard"
              className="block w-full py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition"
            >
              Go to Dashboard
            </Link>
            
            <button
              onClick={() => window.print()}
              className="block w-full py-3 border-2 border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition"
            >
              Print Receipt
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Redirecting to dashboard in {countdown} seconds...
          </p>
        </div>

        {/* Support */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Need help? Contact support at support@voltpay.com</p>
        </div>
      </div>
    </div>
  );
}
