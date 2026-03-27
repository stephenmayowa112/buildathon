"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`glass border-b border-white/20 sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-xl backdrop-blur-xl' : 'shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group animate-fadeInLeft">
            <div className="w-9 h-9 bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg glow-pulse">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient-animate">VOLTPAY</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 animate-fadeInRight">
            <Link href="#features" className="text-gray-600 hover:text-green-600 transition-all font-medium relative group">
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-green-600 transition-all font-medium relative group">
              How it works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-green-600 transition-all font-medium relative group">
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/auth/signin" className="text-gray-600 hover:text-green-600 transition-all font-medium relative group">
              Login
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              href="/auth/signup" 
              className="px-5 py-2.5 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl font-semibold hover:from-green-700 hover:to-green-600 transition-all shadow-md hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105 flex items-center gap-2"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-110"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20 animate-fadeInDown">
            <div className="flex flex-col space-y-3">
              <Link href="#features" className="px-4 py-2 text-gray-600 hover:bg-green-50 rounded-lg transition-all transform hover:translate-x-1">
                Features
              </Link>
              <Link href="#how-it-works" className="px-4 py-2 text-gray-600 hover:bg-green-50 rounded-lg transition-all transform hover:translate-x-1">
                How it works
              </Link>
              <Link href="#pricing" className="px-4 py-2 text-gray-600 hover:bg-green-50 rounded-lg transition-all transform hover:translate-x-1">
                Pricing
              </Link>
              <Link href="/auth/signin" className="px-4 py-2 text-gray-600 hover:bg-green-50 rounded-lg transition-all transform hover:translate-x-1">
                Login
              </Link>
              <Link 
                href="/auth/signup" 
                className="mx-4 py-2.5 bg-gradient-to-r from-green-600 to-green-500 text-white text-center rounded-xl font-semibold hover:from-green-700 hover:to-green-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
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
