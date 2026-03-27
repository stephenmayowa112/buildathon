"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { PLANS } from "@/types";
import { formatCurrency } from "@/lib/billing";

export default function PlansPage() {
  const router = useRouter();

  const handleSelectPlan = (planId: string) => {
    router.push(`/dashboard?plan=${planId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-700 transition">
                <span className="text-white font-bold">⚡</span>
              </div>
              <span className="text-xl font-bold">VOLTPAY</span>
            </Link>
            <div>
              <div className="text-sm text-gray-600">Plans</div>
              <div className="text-sm text-gray-500">Thursday, March 5, 2026</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <span className="text-xl">🔔</span>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <span className="font-medium">Alex</span>
              <span className="text-gray-400">▼</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Energy Plan</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pick the plan that fits your business. All plans include clean solar energy.
            Real- time monitoring, and no setup fees
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                Starter
              </span>
            </div>

            <div className="mb-6">
              <div className="text-4xl font-bold mb-1">₦15k</div>
              <div className="text-gray-600">/ month</div>
              <div className="text-sm text-gray-500 mt-2">
                Includes 600 kWh ~ ₦50/extra kWh
              </div>
            </div>

            <ul className="space-y-3 mb-8 text-sm">
              <li>Up to 600 kWh/month included</li>
              <li>₦50 per extra kWh</li>
              <li>Standard support (48h response)</li>
              <li>Monthly usage reports</li>
              <li>Basic monitoring dashboard</li>
              <li>1 business location</li>
            </ul>

            <button
              onClick={() => handleSelectPlan("basic")}
              className="w-full py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Select Plan
            </button>
          </div>

          {/* Standard Plan - Most Popular */}
          <div className="bg-green-900 text-white rounded-2xl p-8 relative hover:shadow-xl transition transform scale-105">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-400 text-green-900 px-4 py-1 rounded-full text-xs font-bold">
              MOST POPULAR
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Standard</h3>
              <span className="inline-block px-3 py-1 bg-green-800 text-green-100 rounded-full text-sm">
                Recommended
              </span>
            </div>

            <div className="mb-6">
              <div className="text-4xl font-bold mb-1">₦25K</div>
              <div className="text-green-100">/ month</div>
              <div className="text-sm text-green-200 mt-2">
                Includes 1200 kWh ~ ₦40/extra kWh
              </div>
            </div>

            <ul className="space-y-3 mb-8 text-sm text-green-50">
              <li>Up to 1200 kWh/month included</li>
              <li>₦40 per extra kWh</li>
              <li>Priority support (24h response)</li>
              <li>Real time usage analytics</li>
              <li>Advanced monitoring dashboard</li>
              <li>Up to 3 business Locations</li>
              <li>Payment Scheduling</li>
            </ul>

            <button
              onClick={() => handleSelectPlan("standard")}
              className="w-full py-3 bg-green-400 text-green-900 rounded-lg font-bold hover:bg-green-300 transition"
            >
              Current Plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-green-50 rounded-2xl p-8 border border-green-200 hover:shadow-lg transition">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <span className="inline-block px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm">
                Enterprise
              </span>
            </div>

            <div className="mb-6">
              <div className="text-4xl font-bold mb-1">₦45k</div>
              <div className="text-gray-600">/ month</div>
              <div className="text-sm text-gray-500 mt-2">
                Includes 2500 kWh ~ ₦30/extra kWh
              </div>
            </div>

            <ul className="space-y-3 mb-8 text-sm">
              <li>Up to 2500 kWh/month included</li>
              <li>₦30 per extra kWh</li>
              <li>Dedicated support (4h response)</li>
              <li>Full analytics suite</li>
              <li>Advanced monitoring dashboard</li>
              <li>Unlimited business locations</li>
            </ul>

            <button
              onClick={() => handleSelectPlan("premium")}
              className="w-full py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition"
            >
              Select Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
