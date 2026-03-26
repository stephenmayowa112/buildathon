"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-700 transition">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold">VOLTPAY</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-gray-600 hover:text-green-600 transition font-medium">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-green-600 transition font-medium">
              How it works
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-green-600 transition font-medium">
              Pricing
            </Link>
            <Link href="/auth/signin" className="text-gray-600 hover:text-green-600 transition font-medium">
              Login
            </Link>
            <Link 
              href="/auth/signup" 
              className="px-5 py-2.5 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link href="#features" className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                Features
              </Link>
              <Link href="#how-it-works" className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                How it works
              </Link>
              <Link href="#pricing" className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                Pricing
              </Link>
              <Link href="/auth/signin" className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                Login
              </Link>
              <Link 
                href="/auth/signup" 
                className="mx-4 py-2.5 bg-green-600 text-white text-center rounded-xl font-semibold hover:bg-green-700"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
