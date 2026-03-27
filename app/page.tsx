"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Zap, CheckCircle, TrendingUp, DollarSign, Clock, Users, ClipboardList, BarChart3, Wallet } from "lucide-react";

export default function HomePage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const calculatePrice = (monthlyPrice: number) => {
    if (billingPeriod === "yearly") {
      const yearlyPrice = monthlyPrice * 12 * 0.8; // 20% discount
      return Math.round(yearlyPrice / 12); // Show monthly equivalent
    }
    return monthlyPrice;
  };

  const getOriginalPrice = (monthlyPrice: number) => {
    if (billingPeriod === "yearly") {
      return monthlyPrice;
    }
    return null;
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-white -z-10"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed"></div>
        
        <div className="inline-block mb-6 relative z-10">
          <span className="px-4 py-2 glass-green rounded-full text-sm font-medium flex items-center gap-2 w-fit shadow-lg">
            <Zap className="w-4 h-4" />
            Reliable Clean Energy
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Affordable Solar Energy For Your <span className="text-green-600">Business</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          Power your business with clean, reliable solar energy through flexible subscription 
          plans. Track usage, manage billing, and reduce costs in one simple platform.
        </p>
        
        <div className="flex gap-4 mb-12">
          <Link 
            href="/auth/signup" 
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl font-semibold hover:from-green-700 hover:to-green-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Started →
          </Link>
          <Link 
            href="#pricing" 
            className="px-8 py-4 glass-card rounded-xl font-semibold hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            View Pricing
          </Link>
        </div>
        
        <div className="flex flex-wrap gap-8 sm:gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-6 h-6 text-green-600" />
              <div className="text-3xl font-bold">500+</div>
            </div>
            <div className="text-gray-600">Active Businesses</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <div className="text-3xl font-bold">40%</div>
            </div>
            <div className="text-gray-600">Average Savings</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-6 h-6 text-green-600" />
              <div className="text-3xl font-bold">24/7</div>
            </div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </section>

      {/* Image Placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="glass-card rounded-2xl h-96 relative overflow-hidden shadow-2xl">
          <Image 
            src="/images/solar-placeholder.png" 
            alt="Business building powered by solar panels"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-6 left-6">
            <div className="glass-dark text-white px-6 py-3 rounded-xl font-medium backdrop-blur-md shadow-lg">
              Monthly Savings<br />
              <span className="text-2xl font-bold">₦50,000</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">
          Everything You Need to Manage Solar Energy
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Simple, powerful tools designed for small businesses
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-6 rounded-2xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <ClipboardList className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Subscription Plans</h3>
            <p className="text-gray-600">
              Flexible plans tailored to your business energy needs with transparent pricing
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-2xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Usage Tracking</h3>
            <p className="text-gray-600">
              Real-time monitoring of your daily and monthly energy consumption
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-2xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Wallet className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Smart Billing</h3>
            <p className="text-gray-600">
              Automated billing with detailed breakdowns and cost predictions
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            How VOLTPAY works
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Get started with solar energy in 3 easy steps
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Choose Simple Plan</h3>
              <p className="text-gray-600">
                Select a plan that matches your business energy consumption
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Track Your Usage</h3>
              <p className="text-gray-600">
                Monitor daily usage and see how it impacts your bill in real-time
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Pay Monthly</h3>
              <p className="text-gray-600">
                Simple transparent billing - no hidden charges or surprises
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">
          Simple Transparent Pricing
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Choose the plan that fits your business needs
        </p>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
            <button 
              onClick={() => setBillingPeriod("monthly")}
              className={`px-4 py-2 rounded-md font-medium transition ${
                billingPeriod === "monthly" 
                  ? "bg-white shadow-sm" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBillingPeriod("yearly")}
              className={`px-4 py-2 rounded-md font-medium transition ${
                billingPeriod === "yearly" 
                  ? "bg-white shadow-sm" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Yearly (Save 20%)
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="glass-card rounded-2xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-2">Basic</h3>
            <p className="text-gray-600 mb-6">Perfect for small shops</p>
            <div className="mb-6">
              {billingPeriod === "yearly" && (
                <div className="text-sm text-gray-500 line-through mb-1">
                  ₦{getOriginalPrice(15000)?.toLocaleString()}/month
                </div>
              )}
              <span className="text-4xl font-bold">₦{calculatePrice(15000).toLocaleString()}</span>
              <span className="text-gray-600">/month</span>
              {billingPeriod === "yearly" && (
                <div className="text-sm text-green-600 font-medium mt-1">
                  Billed ₦{(calculatePrice(15000) * 12).toLocaleString()}/year
                </div>
              )}
            </div>
            <Link 
              href="/auth/signup?plan=basic" 
              className="block w-full py-3 bg-gradient-to-r from-green-600 to-green-500 text-white text-center rounded-lg font-medium hover:from-green-700 hover:to-green-600 transition mb-6 shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>600 kWh monthly limit</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>₦50/kWh extra rate</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Basic analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Email support (48hrs)</span>
              </li>
            </ul>
          </div>

          {/* Standard Plan */}
          <div className="glass-card border-2 border-green-600 rounded-2xl p-8 relative hover:shadow-2xl transition-all transform hover:scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-2">Standard</h3>
            <p className="text-gray-600 mb-6">For growing businesses</p>
            <div className="mb-6">
              {billingPeriod === "yearly" && (
                <div className="text-sm text-gray-500 line-through mb-1">
                  ₦{getOriginalPrice(25000)?.toLocaleString()}/month
                </div>
              )}
              <span className="text-4xl font-bold">₦{calculatePrice(25000).toLocaleString()}</span>
              <span className="text-gray-600">/month</span>
              {billingPeriod === "yearly" && (
                <div className="text-sm text-green-600 font-medium mt-1">
                  Billed ₦{(calculatePrice(25000) * 12).toLocaleString()}/year
                </div>
              )}
            </div>
            <Link 
              href="/auth/signup?plan=standard" 
              className="block w-full py-3 bg-gradient-to-r from-green-600 to-green-500 text-white text-center rounded-lg font-medium hover:from-green-700 hover:to-green-600 transition mb-6 shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>1200 kWh monthly limit</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>₦40/kWh extra rate</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Priority support (24hrs)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Cost forecasting</span>
              </li>
            </ul>
          </div>

          {/* Premium Plan */}
          <div className="glass-card rounded-2xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-2">Premium</h3>
            <p className="text-gray-600 mb-6">For large operations</p>
            <div className="mb-6">
              {billingPeriod === "yearly" && (
                <div className="text-sm text-gray-500 line-through mb-1">
                  ₦{getOriginalPrice(45000)?.toLocaleString()}/month
                </div>
              )}
              <span className="text-4xl font-bold">₦{calculatePrice(45000).toLocaleString()}</span>
              <span className="text-gray-600">/month</span>
              {billingPeriod === "yearly" && (
                <div className="text-sm text-green-600 font-medium mt-1">
                  Billed ₦{(calculatePrice(45000) * 12).toLocaleString()}/year
                </div>
              )}
            </div>
            <Link 
              href="/auth/signup?plan=premium" 
              className="block w-full py-3 bg-gradient-to-r from-green-600 to-green-500 text-white text-center rounded-lg font-medium hover:from-green-700 hover:to-green-600 transition mb-6 shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>2500 kWh monthly limit</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>₦30/kWh extra rate</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Full analytics suite</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>24/7 priority support</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Dedicated manager</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
