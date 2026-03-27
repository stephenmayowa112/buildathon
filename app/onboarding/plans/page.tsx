"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { Zap } from "lucide-react";
import { useAuth } from "@/lib/AuthProvider";
import { PLANS } from "@/types";
import { formatCurrency } from "@/lib/billing";

export default function PlansPage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/signin");
    }
  }, [user, loading, router]);

  const userName = user?.user_metadata?.full_name || "User";
  const userInitials = userName.substring(0, 2).toUpperCase() || "U";
  const firstName = userName.split(" ")[0] || userName;

  const handleSelectPlan = (planId: string) => {
    router.push(`/dashboard?plan=${planId}`);
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500 animate-pulse">Loading plans...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed"></div>
      
      {/* Header */}
      <header className="glass border-b border-white/20 px-8 py-4 sticky top-0 z-50 backdrop-blur-xl shadow-lg animate-fadeInDown">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg glow-pulse">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient-animate">VOLTPAY</span>
            </Link>
            <div className="animate-fadeInLeft delay-100">
              <div className="text-sm text-gray-600 font-medium">Plans</div>
              <div className="text-sm text-gray-500">Thursday, March 5, 2026</div>
            </div>
          </div>
          <div className="flex items-center gap-4 animate-fadeInRight">
            <button className="relative p-2 hover:bg-white/50 rounded-lg transition-all transform hover:scale-110">
              <span className="text-xl animate-bounce-subtle">🔔</span>
            </button>
            <div className="flex items-center gap-2 glass-card px-3 py-2 rounded-xl hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                {userInitials}
              </div>
              <span className="font-medium">{firstName}</span>
              <span className="text-gray-400">▼</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 animate-fadeInUp">
            Choose Your <span className="text-gradient-animate">Energy Plan</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fadeInUp delay-100">
            Pick the plan that fits your business. All plans include clean solar energy.
            Real-time monitoring, and no setup fees
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="glass-card rounded-2xl p-8 border border-gray-200 hover:shadow-2xl transition-all animate-fadeInUp delay-200 hover-lift transform hover:-translate-y-2">
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
              className="w-full py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg font-medium hover:from-black hover:to-gray-900 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Select Plan →
            </button>
          </div>

          {/* Standard Plan - Most Popular */}
          <div className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white rounded-2xl p-8 relative hover:shadow-2xl transition-all transform scale-105 animate-fadeInUp delay-300 glow-pulse border-2 border-green-400">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-400 to-green-300 text-green-900 px-4 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce-subtle">
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
              className="w-full py-3 bg-gradient-to-r from-green-400 to-green-300 text-green-900 rounded-lg font-bold hover:from-green-300 hover:to-green-200 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Current Plan ✓
            </button>
          </div>

          {/* Premium Plan */}
          <div className="glass-card rounded-2xl p-8 border-2 border-green-200 hover:shadow-2xl transition-all animate-fadeInUp delay-400 hover-lift transform hover:-translate-y-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-200 to-green-100 text-green-800 rounded-full text-sm font-medium shadow-sm">
                Enterprise
              </span>
            </div>

            <div className="mb-6">
              <div className="text-4xl font-bold mb-1 text-shimmer">₦45k</div>
              <div className="text-gray-600">/ month</div>
              <div className="text-sm text-gray-500 mt-2">
                Includes 2500 kWh ~ ₦30/extra kWh
              </div>
            </div>

            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Up to 2500 kWh/month included
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                ₦30 per extra kWh
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Dedicated support (4h response)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Full analytics suite
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Advanced monitoring dashboard
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Unlimited business locations
              </li>
            </ul>

            <button
              onClick={() => handleSelectPlan("premium")}
              className="w-full py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg font-medium hover:from-green-700 hover:to-green-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Select Plan →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
