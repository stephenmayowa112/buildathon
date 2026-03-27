"use client";

import { useState } from "react";
import { PLANS, PlanType } from "@/types";
import { calculateBilling, formatCurrency } from "@/lib/billing";

export default function EnergyPage() {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("standard");
  const [dailyUsage, setDailyUsage] = useState(52.4);

  const plan = PLANS[selectedPlan];
  const billing = calculateBilling(dailyUsage, plan);
  const usagePercentage = (billing.monthlyUsage / plan.monthlyLimit) * 100;

  return (
    <div className="animate-fadeInUp">
      <div className="mb-6 animate-fadeInDown">
        <h1 className="text-3xl font-bold mb-2">Energy <span className="text-gradient-animate">Simulator</span></h1>
        <p className="text-gray-600">
          Adjust your expected daily solar consumption to forecast your monthly billing
          and optimize your energy usage patterns.
        </p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="glass-card rounded-xl p-6 hover:shadow-lg transition-all animate-fadeInUp delay-100 hover-lift">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Daily Energy Usage</span>
            <span className="text-xl animate-bounce-subtle">⚡</span>
          </div>
          <div className="text-3xl font-bold mb-1 text-shimmer">{dailyUsage} kWh</div>
          <div className="text-sm text-red-600">12% ↑</div>
        </div>

        <div className="glass-card rounded-xl p-6 hover:shadow-lg transition-all animate-fadeInUp delay-200 hover-lift">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Monthly Usage</span>
            <span className="text-xl animate-bounce-subtle" style={{ animationDelay: '0.2s' }}>📊</span>
          </div>
          <div className="text-3xl font-bold mb-1 text-shimmer">{billing.monthlyUsage.toFixed(0)} kWh</div>
          <div className="text-sm text-gray-600">4% ↑</div>
        </div>

        <div className="glass-card rounded-xl p-6 hover:shadow-lg transition-all animate-fadeInUp delay-300 hover-lift">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Current Bill</span>
            <span className="text-xl animate-bounce-subtle" style={{ animationDelay: '0.4s' }}>💰</span>
          </div>
          <div className="text-3xl font-bold mb-1 text-shimmer">{formatCurrency(billing.monthlyBill)}</div>
        </div>

        <div className="glass-card rounded-xl p-6 hover:shadow-lg transition-all animate-fadeInUp delay-400 hover-lift">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Next Payment</span>
            <span className="text-xl animate-bounce-subtle" style={{ animationDelay: '0.6s' }}>📅</span>
          </div>
          <div className="text-3xl font-bold mb-1">Feb12</div>
          <div className="text-sm text-green-600 font-medium">Paid</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Charts */}
        <div className="col-span-2 space-y-6">
          {/* Energy Usage Trend */}
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold">Energy Usage Trend</h2>
                <p className="text-sm text-gray-600">Daily consumption over the last 7 days</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Real time Data
              </span>
            </div>
            <div className="h-64 bg-gradient-to-b from-green-50 to-white rounded-lg flex items-center justify-center text-gray-400 border border-gray-100">
              Usage Trend Chart (7 days)
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Payment Status</span>
                <span className="text-xl">💳</span>
              </div>
              <div className="text-2xl font-bold mb-1">Cleared</div>
              <button className="text-sm text-green-600 hover:underline">
                View Transaction History
              </button>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Forecasted Usage</span>
                <span className="text-xl">📈</span>
              </div>
              <div className="text-2xl font-bold mb-1">1,150 kWh</div>
              <div className="text-sm text-gray-600">Est. Total</div>
              <p className="text-xs text-gray-500 mt-2">
                Based on current trends, you are likely to exceed your plan limit by 450 kWh.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Active Alerts</span>
                <span className="text-xl">🔔</span>
              </div>
              <div className="text-2xl font-bold mb-1">2 Notifications</div>
              <button className="text-sm text-green-600 hover:underline">
                Review Alerts
              </button>
            </div>
          </div>

          {/* Recent Usage Logs */}
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Recent Usage Logs</h2>
              <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                Export Report
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-green-50 text-left">
                    <th className="px-4 py-3 text-sm font-medium text-gray-700">DATE</th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-700">PEAK USAGE</th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-700">OFF PEAK</th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-700">TOTAL DAILY</th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-700">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 text-sm">Mar 17, 2026</td>
                    <td className="px-4 py-3 text-sm font-medium">32 kWh</td>
                    <td className="px-4 py-3 text-sm">20kWh</td>
                    <td className="px-4 py-3 text-sm font-bold">52 kWh</td>
                    <td className="px-4 py-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                        Stable
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">Mar 20, 2026</td>
                    <td className="px-4 py-3 text-sm font-medium">28 kWh</td>
                    <td className="px-4 py-3 text-sm">18kWh</td>
                    <td className="px-4 py-3 text-sm font-bold">45 kWh</td>
                    <td className="px-4 py-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                        Stable
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">Mar 25, 2026</td>
                    <td className="px-4 py-3 text-sm font-medium">45 kWh</td>
                    <td className="px-4 py-3 text-sm">25kWh</td>
                    <td className="px-4 py-3 text-sm font-bold">70 kWh</td>
                    <td className="px-4 py-3">
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                        High
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">Apr 2, 2026</td>
                    <td className="px-4 py-3 text-sm font-medium">30 kWh</td>
                    <td className="px-4 py-3 text-sm">22kWh</td>
                    <td className="px-4 py-3 text-sm font-bold">52 kWh</td>
                    <td className="px-4 py-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                        Stable
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column - Plan Card */}
        <div>
          <div className="glass-card rounded-xl p-6 border-2 border-green-600 sticky top-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">{plan.name} Plan</h3>
              <span className="px-3 py-1 bg-green-600 text-white rounded-full text-xs font-medium">
                Active
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">Renewing on Feb 01, 2026</p>

            {/* Usage Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Usage Limit</span>
                <span className="text-sm font-medium">{plan.monthlyLimit} kWh</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div
                  className="bg-green-600 h-3 rounded-full transition-all"
                  style={{ width: `${Math.min(usagePercentage, 100)}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-600">
                {billing.monthlyUsage.toFixed(0)} kWh consumed ({usagePercentage.toFixed(0)}% of monthly limit)
              </p>
            </div>

            {/* Plan Details */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">Base Price</span>
                <span className="text-sm font-medium">{formatCurrency(plan.basePrice)}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">Extra Unit Rate</span>
                <span className="text-sm font-medium">₦{plan.extraRate}/kWh</span>
              </div>
            </div>

            {/* Usage Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Adjust Daily Usage (kWh)</label>
              <input
                type="number"
                value={dailyUsage}
                onChange={(e) => setDailyUsage(parseFloat(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                step="0.1"
              />
              <p className="text-xs text-gray-500 mt-1">
                Monthly: {billing.monthlyUsage.toFixed(0)} kWh
              </p>
            </div>

            {/* Billing Summary */}
            <div className="bg-green-50 rounded-lg p-4 mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-700">Base Price</span>
                <span className="text-sm font-medium">{formatCurrency(plan.basePrice)}</span>
              </div>
              {billing.extraCharges > 0 && (
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-yellow-700">Extra Charges</span>
                  <span className="text-sm font-medium text-yellow-700">
                    +{formatCurrency(billing.extraCharges)}
                  </span>
                </div>
              )}
              <div className="flex justify-between pt-2 border-t border-green-200">
                <span className="font-bold text-green-900">Estimated Bill</span>
                <span className="font-bold text-xl text-green-900">
                  {formatCurrency(billing.monthlyBill)}
                </span>
              </div>
            </div>

            <button className="w-full py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition flex items-center justify-between px-4">
              <span>Manage Subscription</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
