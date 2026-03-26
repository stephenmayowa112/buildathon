"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PLANS, PlanType } from "@/types";
import { calculateBilling, formatCurrency } from "@/lib/billing";
import Link from "next/link";
import { 
  DollarSign, 
  Zap, 
  CheckCircle, 
  CreditCard, 
  AlertTriangle,
  TrendingUp,
  ArrowRight
} from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("standard");
  const [dailyUsage, setDailyUsage] = useState(7);
  const [amountPaid, setAmountPaid] = useState(0);
  const [dueDate] = useState(new Date("2025-12-10"));

  const plan = PLANS[selectedPlan];
  const billing = calculateBilling(dailyUsage, plan);
  const remainingBalance = billing.monthlyBill - amountPaid;
  const isOverdue = new Date() > dueDate && remainingBalance > 0;
  
  const paymentStatus = remainingBalance === 0 ? "paid" : isOverdue ? "overdue" : "pending";

  const handleMakePayment = () => {
    setAmountPaid(billing.monthlyBill);
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-600">Thursday, March 5, 2026</p>
      </div>

      {/* Overdue Alert */}
      {isOverdue && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-red-600 text-xl">⚠️</span>
            <div>
              <div className="font-bold text-red-900">Payment Overdue - Action Required</div>
              <div className="text-sm text-red-700">
                Invoice INV - 2025 - 012 of {formatCurrency(billing.monthlyBill)} was due on 2025 - 12 -10. 
                Please make payment to avoid service interruption.
              </div>
            </div>
          </div>
          <button
            onClick={handleMakePayment}
            className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition flex items-center gap-2"
          >
            Pay Now →
          </button>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
        <div className="bg-green-600 text-white rounded-xl p-4 sm:p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs sm:text-sm opacity-90">Monthly Bill</span>
            <DollarSign className="w-5 h-5 opacity-90" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold mb-1">{formatCurrency(billing.monthlyBill)}</div>
          <div className="text-xs sm:text-sm opacity-90">📅 Due March 31,2026</div>
        </div>

        <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs sm:text-sm text-gray-600">Daily Usage</span>
            <Zap className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold mb-1">{dailyUsage} kWh</div>
          <div className="text-xs sm:text-sm text-gray-600 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            8% vs last week
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs sm:text-sm text-gray-600">Active Plan</span>
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold mb-1">{plan.name}</div>
          <div className="text-xs sm:text-sm text-gray-600">{plan.monthlyLimit} kWh/mo ≈ ₦{plan.extraRate}/extra kWh</div>
        </div>

        <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs sm:text-sm text-gray-600">Payment Status</span>
            <CreditCard className={`w-5 h-5 ${
              paymentStatus === "paid" ? "text-green-600" : 
              paymentStatus === "overdue" ? "text-red-600" : "text-yellow-600"
            }`} />
          </div>
          <div className={`text-2xl sm:text-3xl font-bold mb-1 ${
            paymentStatus === "paid" ? "text-green-600" : 
            paymentStatus === "overdue" ? "text-red-600" : "text-yellow-600"
          }`}>
            {paymentStatus === "paid" ? "Paid" : paymentStatus === "overdue" ? "Overdue" : "Pending"}
          </div>
          <div className="text-xs sm:text-sm text-gray-600">
            {remainingBalance > 0 ? `${formatCurrency(remainingBalance)} invoice` : "All cleared"}
          </div>
        </div>
      </div>

      {/* Overdue Alert - Mobile Optimized */}
      {isOverdue && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-red-900 mb-1">Payment Overdue - Action Required</div>
              <div className="text-sm text-red-700">
                Invoice INV - 2025 - 012 of {formatCurrency(billing.monthlyBill)} was due on 2025 - 12 -10. 
                Please make payment to avoid service interruption.
              </div>
            </div>
          </div>
          <button
            onClick={handleMakePayment}
            className="w-full sm:w-auto px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition flex items-center justify-center gap-2 whitespace-nowrap"
          >
            Pay Now <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Energy Usage Analytics */}
      <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-lg sm:text-xl font-bold">Energy Usage Analytics</h2>
            <p className="text-xs sm:text-sm text-gray-600">This week VS daily limit</p>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 sm:flex-none px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm">Weekly</button>
            <button className="flex-1 sm:flex-none px-4 py-2 bg-gray-900 text-white rounded-lg text-sm">Monthly</button>
          </div>
        </div>
        <div className="h-48 sm:h-64 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 text-sm">
          Chart Placeholder - Usage Trend
        </div>
      </div>

      {/* Current Plan Details */}
      <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base sm:text-lg font-bold text-green-600">Current Plan</h2>
          <button className="text-green-600 hover:text-green-700">→</button>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold mb-4">{plan.name} Plan</h3>
        
        <div className="space-y-3 text-sm">
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Base Price</span>
            <span className="font-medium">{formatCurrency(plan.basePrice)}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Included kWh</span>
            <span className="font-medium">{plan.monthlyLimit} kWh</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Extra Rate</span>
            <span className="font-medium">₦{plan.extraRate}/kWh</span>
          </div>
          {billing.extraCharges > 0 && (
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-yellow-600">Extra Charges</span>
              <span className="font-medium text-yellow-600">+{formatCurrency(billing.extraCharges)}</span>
            </div>
          )}
          <div className="flex justify-between py-3 pt-4">
            <span className="font-bold text-green-600">Total This Month</span>
            <span className="font-bold text-lg sm:text-xl">{formatCurrency(billing.monthlyBill)}</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 mb-6">
        <h2 className="text-lg sm:text-xl font-bold mb-4">Quick Action</h2>
        <div className="space-y-3">
          <button
            onClick={handleMakePayment}
            className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-green-600" />
              <span className="font-medium">Make Payment</span>
            </div>
            <ArrowRight className="w-5 h-5 text-green-600" />
          </button>
          <Link
            href="/dashboard/energy"
            className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span className="font-medium">Stimulate Usage</span>
            </div>
            <ArrowRight className="w-5 h-5 text-green-600" />
          </Link>
          <Link
            href="/onboarding/plans"
            className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span className="font-medium">Upgrade Plan</span>
            </div>
            <ArrowRight className="w-5 h-5 text-green-600" />
          </Link>
        </div>
      </div>

      {/* Recent Payments */}
      <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg sm:text-xl font-bold">Recent Payment</h2>
          <button className="text-green-600 hover:text-green-700 text-sm flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-3">
          {[
            { id: "INV-2026-001", date: "2026-01-10", amount: 25000, status: "Paid" },
            { id: "INV-2026-001", date: "2026-01-10", amount: 25000, status: "Paid" },
            { id: "INV-2026-001", date: "2026-01-10", amount: 25000, status: "Paid" },
            { id: "INV-2026-001", date: "2026-01-10", amount: 25000, status: "Pending" },
          ].map((payment, idx) => (
            <div
              key={idx}
              className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg gap-3 ${
                payment.status === "Pending" ? "bg-yellow-50" : "bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <CreditCard className={`w-5 h-5 ${
                  payment.status === "Paid" ? "text-green-600" : "text-yellow-600"
                }`} />
                <div>
                  <div className="font-medium text-sm">{payment.id}</div>
                  <div className="text-xs text-gray-600">Date: {payment.date}</div>
                </div>
              </div>
              <div className="text-right sm:text-left">
                <div className="font-bold">{formatCurrency(payment.amount)}</div>
                <div className={`text-xs sm:text-sm ${
                  payment.status === "Paid" ? "text-green-600" : "text-yellow-600"
                }`}>
                  {payment.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
