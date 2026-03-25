"use client";

import { useState } from "react";
import { formatCurrency } from "@/lib/billing";

export default function BillingPage() {
  const [totalBill] = useState(345000);
  const [amountPaid, setAmountPaid] = useState(195000);
  const outstandingBalance = totalBill - amountPaid;

  const handlePayment = () => {
    setAmountPaid(totalBill);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Billing & Payments</h1>
          <p className="text-gray-600">
            Manage your subscriptions, view invoices, and track your solar energy expenses.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-green-600 text-green-600 rounded-lg font-medium hover:bg-green-50 transition">
            Download Statement
          </button>
          <button
            onClick={handlePayment}
            className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
          >
            Make Payment
          </button>
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Total Monthly Bill</span>
            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Current Cycle</span>
          </div>
          <div className="text-3xl font-bold mb-1">{formatCurrency(totalBill)}</div>
          <p className="text-sm text-gray-600">Aggregated Total for the december billing cycle</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Amount Paid</span>
            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Current Cycle</span>
          </div>
          <div className="text-3xl font-bold mb-1">{formatCurrency(amountPaid)}</div>
          <p className="text-sm text-gray-600">Total successfully processed payment this month</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Outstanding Balance</span>
            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Current Cycle</span>
          </div>
          <div className="text-3xl font-bold mb-1">{formatCurrency(outstandingBalance)}</div>
          <p className="text-sm text-gray-600">Remaining balance due by December 31, 2026</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Default Payment Method */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold mb-2">Default Payment Method</h3>
          <p className="text-sm text-gray-600 mb-4">Primary card used for automatic renewals</p>
          
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg mb-3">
            <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
              VISA
            </div>
            <div className="flex-1">
              <div className="font-medium">Visa Ending in 4242</div>
              <div className="text-sm text-gray-600">Expires 12/26</div>
            </div>
          </div>
          <button className="text-sm text-green-600 hover:underline">Edit</button>
        </div>

        {/* Next Auto Pay */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold mb-2">Next Auto Pay</h3>
          <p className="text-sm text-gray-600 mb-4">Automated deduction Schedule</p>
          
          <div className="text-3xl font-bold mb-2">Jan 01</div>
          <p className="text-sm text-gray-600 mb-4">Automated deduction Schedule</p>
          <button className="text-sm text-green-600 hover:underline">Manage Auto Pay</button>
        </div>

        {/* Quick Settlement */}
        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
          <h3 className="font-bold mb-2">Quick Settlement</h3>
          <p className="text-sm text-gray-600 mb-4">
            Pay your outstanding {formatCurrency(outstandingBalance)} balance in one click to avoid service interruption.
          </p>
          <button
            onClick={handlePayment}
            className="w-full py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
          >
            Pay {formatCurrency(outstandingBalance)} Now
          </button>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Transaction History</h2>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
              Filter
            </button>
            <button className="px-4 py-2 text-green-600 text-sm hover:underline">
              View All
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-green-50 text-left">
                <th className="px-4 py-3 text-sm font-medium text-gray-700">Invoice ID</th>
                <th className="px-4 py-3 text-sm font-medium text-gray-700">Billing Date</th>
                <th className="px-4 py-3 text-sm font-medium text-gray-700">Payment Method</th>
                <th className="px-4 py-3 text-sm font-medium text-gray-700">Amount</th>
                <th className="px-4 py-3 text-sm font-medium text-gray-700">Status</th>
                <th className="px-4 py-3 text-sm font-medium text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-4 text-sm font-medium">INV-2026-005</td>
                <td className="px-4 py-4 text-sm">Feb 12, 2026</td>
                <td className="px-4 py-4 text-sm">Mastercard ····· 4242</td>
                <td className="px-4 py-4 text-sm font-bold">150,000</td>
                <td className="px-4 py-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    Paid
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">Stable</td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-sm font-medium">INV-2026-005</td>
                <td className="px-4 py-4 text-sm">Feb 22, 2026</td>
                <td className="px-4 py-4 text-sm">Direct Bank</td>
                <td className="px-4 py-4 text-sm font-bold">150,000</td>
                <td className="px-4 py-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    Paid
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">Stable</td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-sm font-medium">INV-2026-005</td>
                <td className="px-4 py-4 text-sm">Mar 02, 2026</td>
                <td className="px-4 py-4 text-sm">Mastercard ····· 4242</td>
                <td className="px-4 py-4 text-sm font-bold">150,000</td>
                <td className="px-4 py-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    Paid
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">Stable</td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-sm font-medium">INV-2026-005</td>
                <td className="px-4 py-4 text-sm">Mar 12, 2026</td>
                <td className="px-4 py-4 text-sm">Visa ····· 4242</td>
                <td className="px-4 py-4 text-sm font-bold">150,000</td>
                <td className="px-4 py-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    Paid
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">Stable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
