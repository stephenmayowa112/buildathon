"use client";

import { useState } from "react";
import Link from "next/link";

export default function SimulatorPage() {
  const [dailyUsage, setDailyUsage] = useState(45);
  
  const monthlyUsage = dailyUsage * 30;
  const baseRate = 0.12; // $0.12 per kWh
  const distributionCharges = 24.50;
  const taxRate = 0.08;
  
  const baseAmount = monthlyUsage * baseRate;
  const taxes = baseAmount * taxRate;
  const estimatedBill = baseAmount + distributionCharges + taxes;
  
  const savingsPerMonth = 18.60;

  const getUsageLevel = () => {
    if (dailyUsage < 30) return "ECO";
    if (dailyUsage < 70) return "STANDARD";
    return "HIGH";
  };

  const getUsageLevelColor = () => {
    if (dailyUsage < 30) return "text-green-600 bg-green-100";
    if (dailyUsage < 70) return "text-blue-600 bg-blue-100";
    return "text-red-600 bg-red-100";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">⚡</span>
            </div>
            <span className="text-xl font-bold">VOLTPAY</span>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/dashboard" className="text-gray-700 hover:text-gray-900">Dashboard</Link>
            <Link href="/dashboard/billing" className="text-gray-700 hover:text-gray-900">History</Link>
            <Link href="/dashboard/settings" className="text-gray-700 hover:text-gray-900">Settings</Link>
            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <span className="text-xl">🔔</span>
            </button>
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <img src="/api/placeholder/40/40" alt="User" className="rounded-full" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            ⚡ SIMULATOR
          </div>
          <h1 className="text-4xl font-bold mb-4">Energy Usage Simulator</h1>
          <p className="text-gray-600 max-w-2xl">
            Take control of your utility costs. Adjust your daily consumption levels to see
            an instant projection of your next monthly statement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Controls */}
          <div className="space-y-6">
            {/* Daily Usage Card */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h2 className="text-xl font-bold mb-6">Daily Usage (kWh)</h2>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold">{dailyUsage}</span>
                  <span className="text-gray-500">kWh / day</span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium">Adjust Consumption Level</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getUsageLevelColor()}`}>
                    {getUsageLevel() === "ECO" ? "Moderate Usage" : getUsageLevel()}
                  </span>
                </div>
                
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={dailyUsage}
                    onChange={(e) => setDailyUsage(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                    style={{
                      background: `linear-gradient(to right, #10b981 0%, #10b981 ${dailyUsage}%, #e5e7eb ${dailyUsage}%, #e5e7eb 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>ECO (0 kWh)</span>
                    <span>STANDARD (50 kWh)</span>
                    <span>HIGH (100+ kWh)</span>
                  </div>
                </div>
              </div>

              {/* Quick Adjustments */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-green-600">💡</span>
                  <span className="font-medium">Quick Adjustments</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setDailyUsage(20)}
                    className="py-2 px-4 bg-gray-50 border border-gray-200 rounded-lg text-sm hover:bg-gray-100 transition"
                  >
                    Vacation Mode
                  </button>
                  <button
                    onClick={() => setDailyUsage(45)}
                    className="py-2 px-4 bg-gray-50 border border-gray-200 rounded-lg text-sm hover:bg-gray-100 transition"
                  >
                    Typical Day
                  </button>
                  <button
                    onClick={() => setDailyUsage(75)}
                    className="py-2 px-4 bg-gray-50 border border-gray-200 rounded-lg text-sm hover:bg-gray-100 transition"
                  >
                    Heavy Load
                  </button>
                </div>
              </div>
            </div>

            {/* Usage Breakdown */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xl">⚙️</span>
                <h2 className="text-xl font-bold">Usage Breakdown</h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">HVAC</div>
                  <div className="text-3xl font-bold mb-1">42%</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "42%" }}></div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">APPLIANCES</div>
                  <div className="text-3xl font-bold mb-1">28%</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "28%" }}></div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">LIGHTING</div>
                  <div className="text-3xl font-bold mb-1">15%</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: "15%" }}></div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">PHANTOM LOAD</div>
                  <div className="text-3xl font-bold mb-1">15%</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: "15%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Live Calculation */}
          <div className="space-y-6">
            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold">LIVE CALCULATION</h2>
                <button className="p-2 hover:bg-gray-800 rounded-lg">
                  <span className="text-xl">🔄</span>
                </button>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-gray-400">Monthly Usage (30 days)</span>
                  <span className="font-bold">{monthlyUsage.toLocaleString()} kWh</span>
                </div>

                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-gray-400">Base Rate (₦{baseRate}/kWh)</span>
                  <span className="font-bold">₦{baseAmount.toFixed(2)}</span>
                </div>

                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-gray-400">Distribution Charges</span>
                  <span className="font-bold">₦{distributionCharges.toFixed(2)}</span>
                </div>

                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-gray-400">Taxes & Fees (8%)</span>
                  <span className="font-bold">₦{taxes.toFixed(2)}</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-sm text-gray-400 mb-2">ESTIMATED MONTHLY BILL</div>
                <div className="text-5xl font-bold text-green-400 mb-4">
                  ₦{estimatedBill.toFixed(2)}
                </div>
              </div>

              <button className="w-full py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition">
                Save Projection
              </button>
            </div>

            {/* Did You Know */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white">💡</span>
                </div>
                <div>
                  <div className="font-bold mb-2">Did you know?</div>
                  <p className="text-sm text-gray-700">
                    Reducing your daily usage by just 5 kWh could save you approximately{" "}
                    <span className="font-bold text-green-700">₦{savingsPerMonth.toFixed(2)}</span> every month.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
              <span className="text-white text-xs">⚡</span>
            </div>
            <span className="font-bold">VOLTPAY © 2024</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-600">
            <Link href="#" className="hover:text-gray-900">Terms of Service</Link>
            <Link href="#" className="hover:text-gray-900">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-900">Contact Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
