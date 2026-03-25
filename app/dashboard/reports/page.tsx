"use client";

import { formatCurrency } from "@/lib/billing";

export default function ReportsPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Analytics Reports</h1>
        <p className="text-gray-600">
          Insightful data performance and cost saving metrics.
        </p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Total Energy Used</span>
            <span className="text-xl">⚡</span>
          </div>
          <div className="text-3xl font-bold mb-1">4,280 kWh</div>
          <div className="text-sm text-green-600">+12% vs last month</div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Solar Utilization</span>
            <span className="text-xl">☀️</span>
          </div>
          <div className="text-3xl font-bold mb-1">94.2%</div>
          <div className="text-sm text-green-600">+2.4% of total load</div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Total Savings</span>
            <span className="text-xl">💰</span>
          </div>
          <div className="text-3xl font-bold mb-1">₦1,245,000</div>
          <div className="text-sm text-green-600">+₦85k vs last year</div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">CO2 Offset</span>
            <span className="text-xl">🌱</span>
          </div>
          <div className="text-3xl font-bold mb-1">-</div>
          <div className="text-sm text-green-600">+0.3 carbon reduced</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Solar vs Generator Costs */}
        <div className="col-span-2 bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold">Solar vs Generator Costs</h2>
              <p className="text-sm text-gray-600">
                Financial comparison showing monthly savings against estimated alternative costs.
              </p>
            </div>
            <button className="px-4 py-2 border border-green-600 text-green-600 rounded-lg text-sm hover:bg-green-50">
              Export
            </button>
          </div>
          <div className="h-80 bg-gradient-to-b from-green-50 to-white rounded-lg flex items-center justify-center text-gray-400 border border-gray-100">
            Solar vs Generator Cost Comparison Chart
          </div>
        </div>

        {/* Monthly Insight */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold mb-4">Monthly insight</h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="font-medium mb-1">Efficiency Rate</div>
              <p className="text-sm text-gray-600 mb-2">
                Your solar yield was 16% higher than average 349 month due to clear weather.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Avg. Gen Price/kWh</span>
                <span className="font-bold">₦485</span>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Your Plan Price/kWh</span>
                <span className="font-bold">₦180</span>
              </div>
            </div>

            <div className="p-4 bg-green-600 text-white rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm">Monthly Net Benefit</span>
                <span className="font-bold text-xl">₦138,000</span>
              </div>
            </div>

            <button className="w-full py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
              Saved
            </button>
          </div>
        </div>
      </div>

      {/* Energy Consumption Breakdown */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold">Energy Consumption Breakdown</h2>
            <p className="text-sm text-gray-600">
              Daily kWh usage split between solar and supplemental grid support
            </p>
          </div>
          <button className="px-4 py-2 border border-green-600 text-green-600 rounded-lg text-sm hover:bg-green-50">
            Export
          </button>
        </div>
        <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
          Energy Consumption Breakdown Chart (Stacked Bar)
        </div>
      </div>

      {/* Peak Saving Days */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold">Peak Saving Days</h2>
            <p className="text-sm text-gray-600">
              The 5 days with highest solar production this month.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-green-50 text-left">
                <th className="px-4 py-3 text-sm font-medium text-gray-700">Date</th>
                <th className="px-4 py-3 text-sm font-medium text-gray-700">Total Usage</th>
                <th className="px-4 py-3 text-sm font-medium text-gray-700">Solar Yield</th>
                <th className="px-4 py-3 text-sm font-medium text-gray-700">Savings (₦)</th>
                <th className="px-4 py-3 text-sm font-medium text-gray-700">Efficiency Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-4 text-sm">Mar 17, 2026</td>
                <td className="px-4 py-4 text-sm font-medium">158 kWh</td>
                <td className="px-4 py-4 text-sm">20kWh</td>
                <td className="px-4 py-4 text-sm font-bold">12,400</td>
                <td className="px-4 py-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    perfect
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-sm">Mar 20, 2026</td>
                <td className="px-4 py-4 text-sm font-medium">142 kWh</td>
                <td className="px-4 py-4 text-sm">144kWh</td>
                <td className="px-4 py-4 text-sm font-bold">₦11,800</td>
                <td className="px-4 py-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    perfect
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-sm">Mar 25, 2026</td>
                <td className="px-4 py-4 text-sm font-medium">165 kWh</td>
                <td className="px-4 py-4 text-sm">160kWh</td>
                <td className="px-4 py-4 text-sm font-bold">₦9,900</td>
                <td className="px-4 py-4">
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                    High
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-sm">Apr 2, 2026</td>
                <td className="px-4 py-4 text-sm font-medium">130 kWh</td>
                <td className="px-4 py-4 text-sm">160kWh</td>
                <td className="px-4 py-4 text-sm font-bold">₦10,500</td>
                <td className="px-4 py-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    perfect
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-sm">Mar 28, 2026</td>
                <td className="px-4 py-4 text-sm font-medium">145 kWh</td>
                <td className="px-4 py-4 text-sm">140kWh</td>
                <td className="px-4 py-4 text-sm font-bold">11,200</td>
                <td className="px-4 py-4">
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                    High
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
