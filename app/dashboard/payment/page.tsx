"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/AuthProvider";
import { 
  initializeInlinePayment, 
  generateTransactionReference,
} from "@/lib/interswitch";
import { formatCurrency } from "@/lib/billing";
import { getCurrentPayment, updatePaymentData } from "@/lib/database";
import { getProfile } from "@/lib/auth";

export default function PaymentPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "bank">("card");
  const [paymentData, setPaymentData] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    async function loadData() {
      if (!user) {
        router.push("/auth/signin");
        return;
      }

      try {
        const [userProfile, currentPayment] = await Promise.all([
          getProfile(user.id),
          getCurrentPayment(user.id),
        ]);

        setProfile(userProfile);
        setPaymentData(currentPayment);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [user, router]);

  const handlePayment = () => {
    if (!user || !paymentData || !profile) return;

    setIsProcessing(true);

    const transactionRef = generateTransactionReference();
    const amount = paymentData.remaining_balance || paymentData.total_bill;

    const paymentConfig = {
      amount: amount,
      customerId: user.id,
      customerEmail: user.email || "",
      customerName: profile.full_name || profile.business_name || "Customer",
      transactionReference: transactionRef,
      currency: "566",
      payItemId: process.env.NEXT_PUBLIC_INTERSWITCH_PAY_ITEM_ID || "Default_Payable_MX26070",
      merchantCode: process.env.NEXT_PUBLIC_INTERSWITCH_MERCHANT_CODE || "MX26070",
    };

    initializeInlinePayment(
      paymentConfig,
      async (response) => {
        try {
          await updatePaymentData(paymentData.id, {
            amountPaid: paymentData.amountPaid + amount,
            remainingBalance: 0,
            status: "paid",
          });

          router.push(`/payment/success?ref=${transactionRef}`);
        } catch (error) {
          console.error("Error updating payment:", error);
          alert("Payment successful but failed to update records. Please contact support.");
        } finally {
          setIsProcessing(false);
        }
      },
      (error) => {
        console.error("Payment failed:", error);
        setIsProcessing(false);
        alert("Payment failed. Please try again.");
      }
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin text-4xl mb-4">⏳</div>
          <div className="text-gray-600">Loading payment details...</div>
        </div>
      </div>
    );
  }

  if (!paymentData) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h2 className="font-bold mb-2">No Pending Payment</h2>
          <p className="text-gray-700">You don't have any pending payments at the moment.</p>
          <button
            onClick={() => router.push("/dashboard")}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const amountToPay = paymentData.remainingBalance || paymentData.totalBill;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Complete Payment</h1>
        <p className="text-gray-600">
          Secure payment powered by Interswitch
        </p>
      </div>

      {/* Payment Summary */}
      <div className="glass-card rounded-2xl p-8 mb-6">
        <h2 className="text-xl font-bold mb-6">Payment Summary</h2>
        
        <div className="space-y-4 mb-6">
          <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-600">Customer</span>
            <span className="font-semibold">{profile?.business_name || profile?.full_name}</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-600">Total Bill</span>
            <span className="font-semibold">{formatCurrency(paymentData.totalBill)}</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-600">Amount Paid</span>
            <span className="font-semibold text-green-600">{formatCurrency(paymentData.amountPaid)}</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-600">Due Date</span>
            <span className="font-semibold">{new Date(paymentData.dueDate).toLocaleDateString()}</span>
          </div>
          <div className="flex justify-between py-4 pt-6">
            <span className="text-xl font-bold">Amount to Pay</span>
            <span className="text-2xl font-bold text-green-600">
              {formatCurrency(amountToPay)}
            </span>
          </div>
        </div>
      </div>

      {/* Payment Method Selection */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200 mb-6">
        <h2 className="text-xl font-bold mb-6">Payment Method</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => setPaymentMethod("card")}
            className={`p-4 border-2 rounded-xl transition ${
              paymentMethod === "card"
                ? "border-green-600 bg-green-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="text-3xl mb-2">💳</div>
            <div className="font-semibold">Card Payment</div>
            <div className="text-sm text-gray-600">Visa, Mastercard, Verve</div>
          </button>

          <button
            onClick={() => setPaymentMethod("bank")}
            className={`p-4 border-2 rounded-xl transition ${
              paymentMethod === "bank"
                ? "border-green-600 bg-green-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="text-3xl mb-2">🏦</div>
            <div className="font-semibold">Bank Transfer</div>
            <div className="text-sm text-gray-600">Direct bank payment</div>
          </button>
        </div>

        <button
          onClick={handlePayment}
          disabled={isProcessing}
          className="w-full py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isProcessing ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-spin">⏳</span>
              Processing...
            </span>
          ) : (
            `Pay ${formatCurrency(amountToPay)} with Interswitch`
          )}
        </button>

        <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500">
          <span>🔒 Secured by Interswitch</span>
          <span>•</span>
          <span>256-bit SSL Encryption</span>
        </div>
      </div>

      {/* Test Card Info (Remove in production) */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💳</span>
          <div>
            <h3 className="font-bold mb-2">Test Card (Sandbox Mode)</h3>
            <p className="text-sm text-gray-700 mb-2">
              Use this test card for demo:
            </p>
            <div className="text-sm font-mono bg-white p-3 rounded border">
              <div>Card: 5060990580000217499</div>
              <div>Expiry: 12/25</div>
              <div>CVV: 111</div>
              <div>PIN: 1111</div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Info */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🛡️</span>
          <div>
            <h3 className="font-bold mb-2">Secure Payment</h3>
            <p className="text-sm text-gray-700">
              Your payment is processed securely through Interswitch, Nigeria's leading payment gateway. 
              We never store your card details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
