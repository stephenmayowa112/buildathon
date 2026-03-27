"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Zap, Target, Heart, Globe, Users, Leaf, TrendingUp } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 -z-10"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>

        <div className="max-w-3xl animate-fadeInUp">
          <span className="inline-flex items-center gap-2 px-4 py-2 glass-green rounded-full text-sm font-medium mb-6">
            <Globe className="w-4 h-4" />
            About VOLTPAY
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Powering Africa's Businesses With <span className="text-gradient-animate">Clean Energy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            We're on a mission to make solar energy accessible and affordable for every
            small business across Nigeria and beyond.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-2xl hover-lift animate-fadeInUp delay-100">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To democratize access to clean solar energy by providing affordable, subscription-based
              energy solutions that empower small and medium businesses to reduce costs, increase
              reliability, and contribute to a sustainable future.
            </p>
          </div>
          <div className="glass-card p-8 rounded-2xl hover-lift animate-fadeInUp delay-200">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-7 h-7 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              A future where every business in Africa runs on clean, reliable, and affordable
              energy — freeing entrepreneurs to focus on growth while powering communities
              with sustainable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fadeInUp">
            Our <span className="text-gradient-animate">Values</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 animate-fadeInUp delay-100">
            The principles that guide everything we do
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover-lift animate-fadeInUp delay-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability First</h3>
              <p className="text-gray-600">
                Every decision we make considers the environmental impact. We're committed
                to building a greener planet for future generations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover-lift animate-fadeInUp delay-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Obsession</h3>
              <p className="text-gray-600">
                We listen, adapt, and deliver. Our customers' success is our success,
                and we work tirelessly to exceed expectations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover-lift animate-fadeInUp delay-400">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously push the boundaries of what's possible in clean energy
                distribution and smart billing technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="glass-card rounded-2xl p-12 animate-fadeInUp">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Businesses Powered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">12+</div>
              <div className="text-gray-600">Cities Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
              <div className="text-gray-600">Average Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fadeInUp">
            Meet Our <span className="text-gradient-animate">Leadership</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 animate-fadeInUp delay-100">
            A passionate team driving the clean energy revolution
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Adebayo Ogunlade", role: "CEO & Founder", initials: "AO" },
              { name: "Chioma Nwosu", role: "CTO", initials: "CN" },
              { name: "Emeka Afolabi", role: "COO", initials: "EA" },
            ].map((member, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm text-center hover-lift animate-fadeInUp" style={{ animationDelay: `${0.2 + idx * 0.1}s` }}>
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {member.initials}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-green-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
