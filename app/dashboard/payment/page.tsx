"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  initializeInlinePayment, 
  generateTransactionReference,
  formatAmount 
} from "@/lib/interswitch";
import { formatCurrency } from "@/lib/billing";

export default function PaymentPage() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "bank">("card");
  
  // Mock data - in production, get from state/props
  const monthlyBill = 90000;
  const userEmail = "demo@voltpay.com";
  const userName = "Alex Bright";

  const handlePayment = () => {
    setIsProcessing(true);

    const transactionRef = generateTransactionReference();

    const paymentData = {
      amount: monthlyBill,
      customerId: "CUST_001",
      customerEmail: userEmail,
      customerName: userName,
      transactionReference: transactionRef,
      currency: "566", // NGN
      payItemId: process.env.NEXT_PUBLIC_PAY_ITEM_ID || "",
      merchantCode: process.env.NEXT_PUBLIC_MERCHANT_CODE || "",
    };

    initializeInlinePayment(
      paymentData,
      (response) => {
        console.log("Payment successful:", response);
        setIsProcessing(false);
        // Redirect to success page
        router.push(`/payment/success?ref=${transactionRef}`);
      },
      (error) => {
        console.error("Payment failed:", error);
        setIsProcessing(false);
        alert("Payment failed. Please try again.");
      }
    );
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Complete Payment</h1>
        <p className="text-gray-600">
          Secure payment powered by Interswitch
        </p>
      </div>

      {/* Payment Summary */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200 mb-6">
        <h2 className="text-xl font-bold mb-6">Payment Summary</h2>
        
        <div className="space-y-4 mb-6">
          <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-600">Subscription Plan</span>
            <span className="font-semibold">Standard Plan</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-600">Billing Period</span>
            <span className="font-semibold">March 2026</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-600">Base Price</span>
            <span className="font-semibold">{formatCurrency(90000)}</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-600">Extra Charges</span>
            <span className="font-semibold">{formatCurrency(0)}</span>
          </div>
          <div className="flex justify-between py-4 pt-6">
            <span className="text-xl font-bold">Total Amount</span>
            <span className="text-2xl font-bold text-green-600">
              {formatCurrency(monthlyBill)}
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
            `Pay ${formatCurrency(monthlyBill)} with Interswitch`
          )}
        </button>

        <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500">
          <span>🔒 Secured by Interswitch</span>
          <span>•</span>
          <span>256-bit SSL Encryption</span>
        </div>
      </div>

      {/* Security Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
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
