"use client";

import { useState } from "react";
import Link from "next/link";
import { PLANS, PlanType } from "@/types";
import { calculateBilling, formatCurrency, validateDailyUsage } from "@/lib/billing";

export default function SimulatorPage() {
  const [dailyUsage, setDailyUsage] = useState("45");
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("basic");
  const [validationError, setValidationError] = useState<string>("");
  const [validationWarning, setValidationWarning] = useState<string>("");
  
  const plan = PLANS[selectedPlan];
  
  const handleUsageChange = (value: string) => {
    setDailyUsage(value);
    
    const validation = validateDailyUsage(value);
    if (!validation.isValid) {
      setValidationError(validation.error || "");
      setValidationWarning("");
    } else {
      setValidationError("");
      setValidationWarning(validation.warning || "");
    }
  };

  const usageNumber = parseFloat(dailyUsage) || 0;
  const billing = calculateBilling(usageNumber, plan);

  const getUsageLevel = () => {
    if (usageNumber < 30) return "ECO";
    if (usageNumber < 70) return "STANDARD";
    return "HIGH";
  };

  const getUsageLevelColor = () => {
    if (usageNumber < 30) return "text-green-600 bg-green-100";
    if (usageNumber < 70) return "text-blue-600 bg-blue-100";
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
              <span className="text-white font-bold">A</span>
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
            {/* Plan Selection */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h2 className="text-xl font-bold mb-6">Select Your Plan</h2>
              <div className="grid grid-cols-3 gap-3">
                {(Object.keys(PLANS) as PlanType[]).map((planKey) => (
                  <button
                    key={planKey}
                    onClick={() => setSelectedPlan(planKey)}
                    className={`py-3 px-4 rounded-lg text-sm font-medium transition ${
                      selectedPlan === planKey
                        ? "bg-green-600 text-white"
                        : "bg-gray-50 border border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    {PLANS[planKey].name}
                  </button>
                ))}
              </div>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Plan Details:</div>
                <div className="font-bold">{formatCurrency(plan.basePrice)}/month</div>
                <div className="text-sm text-gray-600">{plan.monthlyLimit} kWh limit • ₦{plan.extraRate}/kWh extra</div>
              </div>
            </div>

            {/* Daily Usage Card */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h2 className="text-xl font-bold mb-6">Daily Usage (kWh)</h2>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <input
                    type="number"
                    value={dailyUsage}
                    onChange={(e) => handleUsageChange(e.target.value)}
                    className="text-5xl font-bold w-32 border-b-2 border-gray-300 focus:border-green-600 outline-none"
                    min="0"
                  />
                  <span className="text-gray-500">kWh / day</span>
                </div>
                {validationError && (
                  <div className="text-red-600 text-sm mt-2">⚠️ {validationError}</div>
                )}
                {validationWarning && (
                  <div className="text-yellow-600 text-sm mt-2">⚠️ {validationWarning}</div>
                )}
              </div>

              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium">Adjust Consumption Level</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getUsageLevelColor()}`}>
                    {getUsageLevel()}
                  </span>
                </div>
                
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={usageNumber}
                    onChange={(e) => handleUsageChange(e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                    style={{
                      background: `linear-gradient(to right, #10b981 0%, #10b981 ${usageNumber}%, #e5e7eb ${usageNumber}%, #e5e7eb 100%)`
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
                    onClick={() => handleUsageChange("15")}
                    className="py-2 px-4 bg-gray-50 border border-gray-200 rounded-lg text-sm hover:bg-gray-100 transition"
                  >
                    Low Usage
                  </button>
                  <button
                    onClick={() => handleUsageChange("20")}
                    className="py-2 px-4 bg-gray-50 border border-gray-200 rounded-lg text-sm hover:bg-gray-100 transition"
                  >
                    At Limit
                  </button>
                  <button
                    onClick={() => handleUsageChange("50")}
                    className="py-2 px-4 bg-gray-50 border border-gray-200 rounded-lg text-sm hover:bg-gray-100 transition"
                  >
                    High Usage
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Live Calculation */}
          <div className="space-y-6">
            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold">LIVE CALCULATION</h2>
                <div className="text-sm text-gray-400">{plan.name} Plan</div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-gray-400">Daily Usage</span>
                  <span className="font-bold">{usageNumber} kWh</span>
                </div>

                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-gray-400">Monthly Usage (30 days)</span>
                  <span className="font-bold">{billing.monthlyUsage.toLocaleString()} kWh</span>
                </div>

                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-gray-400">Plan Limit</span>
                  <span className="font-bold">{plan.monthlyLimit} kWh</span>
                </div>

                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-gray-400">Base Price</span>
                  <span className="font-bold">{formatCurrency(plan.basePrice)}</span>
                </div>

                {billing.extraUnits > 0 && (
                  <>
                    <div className="flex justify-between py-3 border-b border-gray-700">
                      <span className="text-gray-400">Extra Units</span>
                      <span className="font-bold text-yellow-400">{billing.extraUnits} kWh</span>
                    </div>

                    <div className="flex justify-between py-3 border-b border-gray-700">
                      <span className="text-gray-400">Extra Charges (₦{plan.extraRate}/kWh)</span>
                      <span className="font-bold text-yellow-400">{formatCurrency(billing.extraCharges)}</span>
                    </div>
                  </>
                )}
              </div>

              <div className="mb-6">
                <div className="text-sm text-gray-400 mb-2">ESTIMATED MONTHLY BILL</div>
                <div className="text-5xl font-bold text-green-400 mb-4">
                  {formatCurrency(billing.monthlyBill)}
                </div>
                {billing.extraUnits > 0 && (
                  <div className="text-sm text-yellow-400">
                    ⚠️ You exceeded your plan limit by {billing.extraUnits} kWh
                  </div>
                )}
              </div>

              <button className="w-full py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition">
                Save Projection
              </button>
            </div>

            {/* Test Cases */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold mb-4">Test Cases (Basic Plan)</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="font-medium mb-1">Case A: Below Limit</div>
                  <div className="text-gray-600">15 kWh/day = 450 kWh/month = ₦15,000</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="font-medium mb-1">Case B: At Limit</div>
                  <div className="text-gray-600">20 kWh/day = 600 kWh/month = ₦15,000</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="font-medium mb-1">Case C: Above Limit</div>
                  <div className="text-gray-600">50 kWh/day = 1,500 kWh/month = ₦60,000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
