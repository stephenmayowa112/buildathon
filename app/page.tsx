import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Zap, CheckCircle, TrendingUp, DollarSign, Clock, Users } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="inline-block mb-6">
          <span className="px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-medium border border-green-200 flex items-center gap-2 w-fit">
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
            className="px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Started →
          </Link>
          <Link 
            href="#pricing" 
            className="px-8 py-4 border-2 border-gray-300 rounded-xl font-semibold hover:border-green-600 hover:text-green-600 transition-all"
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
        <div className="bg-gray-200 rounded-2xl h-96 relative overflow-hidden">
          <Image 
            src="/images/solar-placeholder.png" 
            alt="Business building powered by solar panels"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div> {/* Subtle overlay for better text readability */}
          <div className="absolute bottom-6 left-6">
            <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium">
              Monthly Savings<br />₦50,000
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">
          Everything You Need to Manage Solar Energy
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Simple, powerful tools designed for small businesses
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Subscription Plans</h3>
            <p className="text-gray-600">
              Flexible plans tailored to your business energy needs with transparent pricing
            </p>
          </div>
          
          <div className="p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Usage Tracking</h3>
            <p className="text-gray-600">
              Real-time monitoring of your daily and monthly energy consumption
            </p>
          </div>
          
          <div className="p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Smart Billing</h3>
            <p className="text-gray-600">
              Automated billing with detailed breakdowns and cost predictions
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16">
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
            <button className="px-4 py-2 bg-white rounded-md font-medium shadow-sm">Monthly</button>
            <button className="px-4 py-2 text-gray-600">Yearly (Save 20%)</button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="border border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-2">Basic</h3>
            <p className="text-gray-600 mb-6">Perfect for small shops</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">₦15,000</span>
              <span className="text-gray-600">/month</span>
            </div>
            <Link 
              href="/auth/signup?plan=basic" 
              className="block w-full py-3 bg-green-600 text-white text-center rounded-lg font-medium hover:bg-green-700 transition mb-6"
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
          <div className="border-2 border-green-600 rounded-2xl p-8 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-2">Standard</h3>
            <p className="text-gray-600 mb-6">For growing businesses</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">₦25,000</span>
              <span className="text-gray-600">/month</span>
            </div>
            <Link 
              href="/auth/signup?plan=standard" 
              className="block w-full py-3 bg-green-600 text-white text-center rounded-lg font-medium hover:bg-green-700 transition mb-6"
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
          <div className="border border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-2">Premium</h3>
            <p className="text-gray-600 mb-6">For large operations</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">₦45,000</span>
              <span className="text-gray-600">/month</span>
            </div>
            <Link 
              href="/auth/signup?plan=premium" 
              className="block w-full py-3 bg-green-600 text-white text-center rounded-lg font-medium hover:bg-green-700 transition mb-6"
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
