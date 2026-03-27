"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Zap, ArrowLeft } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';
import AnimatedProgressCircle from '@/components/AnimatedProgressCircle';
import AnimatedFlipCard from '@/components/AnimatedFlipCard';
import AnimatedModal from '@/components/AnimatedModal';
import AnimatedToast from '@/components/AnimatedToast';
import LoadingSpinner, { LoadingDots, LoadingBar } from '@/components/LoadingSpinner';
import { GradientOrbs } from '@/components/AnimatedBackground';

export default function AnimationsShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState<'success' | 'error' | 'warning' | 'info'>('success');

  const showToastNotification = (type: typeof toastType) => {
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white relative overflow-hidden">
      <GradientOrbs />

      {/* Header */}
      <header className="glass border-b border-white/20 px-8 py-4 sticky top-0 z-40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg glow-pulse">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient-animate">VOLTPAY</span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-all">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-12 relative z-10">
        <div className="text-center mb-12 animate-fadeInUp">
          <h1 className="text-5xl font-bold mb-4">
            Animation <span className="text-gradient-animate">Showcase</span>
          </h1>
          <p className="text-xl text-gray-600">
            Explore all the stunning animations and effects
          </p>
        </div>

        {/* Text Animations */}
        <section className="mb-16 animate-fadeInUp delay-100">
          <h2 className="text-3xl font-bold mb-6">Text Effects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl hover-lift">
              <h3 className="text-xl font-bold mb-2">Gradient Animate</h3>
              <p className="text-3xl font-bold text-gradient-animate">VOLTPAY</p>
            </div>
            <div className="glass-card p-6 rounded-2xl hover-lift">
              <h3 className="text-xl font-bold mb-2">Shimmer Effect</h3>
              <p className="text-3xl font-bold text-shimmer">₦50,000</p>
            </div>
            <div className="glass-card p-6 rounded-2xl hover-lift">
              <h3 className="text-xl font-bold mb-2">Neon Glow</h3>
              <p className="text-3xl font-bold text-neon-glow">ENERGY</p>
            </div>
          </div>
        </section>

        {/* Counters */}
        <section className="mb-16 animate-fadeInUp delay-200">
          <h2 className="text-3xl font-bold mb-6">Animated Counters</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="glass-card p-6 rounded-2xl text-center hover-lift">
              <AnimatedCounter end={500} suffix="+" className="text-4xl font-bold" />
              <p className="text-gray-600 mt-2">Active Users</p>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center hover-lift">
              <AnimatedCounter end={25000} prefix="₦" className="text-4xl font-bold" />
              <p className="text-gray-600 mt-2">Monthly Savings</p>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center hover-lift">
              <AnimatedCounter end={99.9} decimals={1} suffix="%" className="text-4xl font-bold" />
              <p className="text-gray-600 mt-2">Uptime</p>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center hover-lift">
              <AnimatedCounter end={1200} suffix=" kWh" className="text-4xl font-bold" />
              <p className="text-gray-600 mt-2">Energy Saved</p>
            </div>
          </div>
        </section>

        {/* Progress Circles */}
        <section className="mb-16 animate-fadeInUp delay-300">
          <h2 className="text-3xl font-bold mb-6">Progress Circles</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="glass-card p-6 rounded-2xl flex justify-center hover-lift">
              <AnimatedProgressCircle percentage={75} label="Complete" />
            </div>
            <div className="glass-card p-6 rounded-2xl flex justify-center hover-lift">
              <AnimatedProgressCircle percentage={90} label="Usage" color="#22c55e" />
            </div>
            <div className="glass-card p-6 rounded-2xl flex justify-center hover-lift">
              <AnimatedProgressCircle percentage={60} label="Efficiency" color="#3b82f6" />
            </div>
            <div className="glass-card p-6 rounded-2xl flex justify-center hover-lift">
              <AnimatedProgressCircle percentage={85} label="Satisfaction" color="#8b5cf6" />
            </div>
          </div>
        </section>

        {/* Loading States */}
        <section className="mb-16 animate-fadeInUp delay-400">
          <h2 className="text-3xl font-bold mb-6">Loading States</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-8 rounded-2xl flex flex-col items-center gap-4 hover-lift">
              <h3 className="font-bold">Spinner</h3>
              <LoadingSpinner />
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col items-center gap-4 hover-lift">
              <h3 className="font-bold">Dots</h3>
              <LoadingDots />
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col items-center gap-4 hover-lift">
              <h3 className="font-bold">Progress Bar</h3>
              <LoadingBar progress={65} />
            </div>
          </div>
        </section>

        {/* Flip Card */}
        <section className="mb-16 animate-fadeInUp delay-500">
          <h2 className="text-3xl font-bold mb-6">Flip Card</h2>
          <div className="max-w-md mx-auto">
            <AnimatedFlipCard
              front={
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-2xl font-bold mb-2">Standard Plan</h3>
                  <p className="text-4xl font-bold text-gradient-animate">₦25K</p>
                  <p className="text-gray-600 mt-4">Click to see details →</p>
                </div>
              }
              back={
                <div className="h-full">
                  <h3 className="text-xl font-bold mb-4">Plan Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      1200 kWh/month included
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      Priority support
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      Advanced analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      Cost forecasting
                    </li>
                  </ul>
                  <p className="text-gray-600 mt-4 text-center">← Click to flip back</p>
                </div>
              }
              className="h-80"
            />
          </div>
        </section>

        {/* Interactive Buttons */}
        <section className="mb-16 animate-fadeInUp delay-600">
          <h2 className="text-3xl font-bold mb-6">Interactive Components</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8 rounded-2xl hover-lift">
              <h3 className="font-bold mb-4">Modal</h3>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg font-medium hover:from-green-700 hover:to-green-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Open Modal
              </button>
            </div>
            <div className="glass-card p-8 rounded-2xl hover-lift">
              <h3 className="font-bold mb-4">Toast Notifications</h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => showToastNotification('success')}
                  className="py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition"
                >
                  Success
                </button>
                <button
                  onClick={() => showToastNotification('error')}
                  className="py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition"
                >
                  Error
                </button>
                <button
                  onClick={() => showToastNotification('warning')}
                  className="py-2 bg-yellow-600 text-white rounded-lg text-sm hover:bg-yellow-700 transition"
                >
                  Warning
                </button>
                <button
                  onClick={() => showToastNotification('info')}
                  className="py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
                >
                  Info
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Hover Effects */}
        <section className="mb-16 animate-fadeInUp delay-700">
          <h2 className="text-3xl font-bold mb-6">Hover Effects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl hover-lift glow-pulse">
              <div className="text-4xl mb-2 animate-bounce-subtle">⚡</div>
              <h3 className="font-bold">Lift & Glow</h3>
              <p className="text-sm text-gray-600">Hover to see effect</p>
            </div>
            <div className="glass-card p-6 rounded-2xl transition-all hover:scale-110 hover:rotate-3">
              <div className="text-4xl mb-2">🎨</div>
              <h3 className="font-bold">Scale & Rotate</h3>
              <p className="text-sm text-gray-600">Hover to see effect</p>
            </div>
            <div className="glass-card p-6 rounded-2xl transition-all hover:shadow-2xl hover:-translate-y-2">
              <div className="text-4xl mb-2 animate-float">🚀</div>
              <h3 className="font-bold">Float & Shadow</h3>
              <p className="text-sm text-gray-600">Hover to see effect</p>
            </div>
          </div>
        </section>
      </div>

      {/* Modal */}
      <AnimatedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Beautiful Modal"
        size="md"
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            This is an animated modal with glassmorphism effects and smooth entrance animations.
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => setIsModalOpen(false)}
              className="flex-1 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg font-medium hover:from-green-700 hover:to-green-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Awesome!
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className="flex-1 py-3 glass-card rounded-lg font-medium hover:shadow-lg transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </AnimatedModal>

      {/* Toast */}
      {showToast && (
        <AnimatedToast
          type={toastType}
          message={`This is a ${toastType} notification with smooth animations!`}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}
