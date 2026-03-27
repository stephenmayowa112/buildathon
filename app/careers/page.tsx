"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, MapPin, Clock, ArrowRight, Zap, Heart, Coffee } from "lucide-react";

const openPositions = [
  {
    title: "Senior Solar Engineer",
    department: "Engineering",
    location: "Lagos, Nigeria",
    type: "Full-time",
    description: "Design and optimize solar panel installations for commercial properties across Lagos and surrounding states.",
  },
  {
    title: "Full Stack Developer",
    department: "Technology",
    location: "Remote (Nigeria)",
    type: "Full-time",
    description: "Build and maintain the VOLTPAY platform, including billing systems, analytics dashboards, and mobile apps.",
  },
  {
    title: "Customer Success Manager",
    department: "Operations",
    location: "Abuja, Nigeria",
    type: "Full-time",
    description: "Onboard new business clients and ensure they're getting maximum value from their VOLTPAY subscription.",
  },
  {
    title: "Sales Representative",
    department: "Sales",
    location: "Lagos, Nigeria",
    type: "Full-time",
    description: "Drive new business acquisition by engaging with SMEs and helping them transition to clean solar energy.",
  },
];

const perks = [
  { icon: Zap, title: "Impactful Work", desc: "Help power businesses with clean energy across Africa" },
  { icon: Heart, title: "Health Benefits", desc: "Comprehensive health insurance for you and your family" },
  { icon: Coffee, title: "Flexible Work", desc: "Remote-friendly culture with flexible working hours" },
  { icon: Briefcase, title: "Growth", desc: "Learning budget and clear career progression paths" },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 -z-10"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>

        <div className="max-w-3xl animate-fadeInUp">
          <span className="inline-flex items-center gap-2 px-4 py-2 glass-green rounded-full text-sm font-medium mb-6">
            <Briefcase className="w-4 h-4" />
            Careers at VOLTPAY
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Help Us Build the <span className="text-gradient-animate">Future of Energy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Join a passionate team working to make clean solar energy accessible to
            every business in Africa. We're hiring across engineering, operations, and sales.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fadeInUp">Why Work at VOLTPAY?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {perks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div key={idx} className="glass-card p-6 rounded-2xl text-center hover-lift animate-fadeInUp" style={{ animationDelay: `${0.1 + idx * 0.1}s` }}>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold mb-1">{perk.title}</h3>
                <p className="text-sm text-gray-600">{perk.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fadeInUp">
            Open <span className="text-gradient-animate">Positions</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 animate-fadeInUp delay-100">
            Find the role that fits your passion and skills
          </p>

          <div className="space-y-4 max-w-4xl mx-auto">
            {openPositions.map((position, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm hover-lift animate-fadeInUp flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <div>
                  <h3 className="text-lg font-bold mb-1">{position.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{position.description}</p>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5" />
                      {position.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {position.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {position.type}
                    </span>
                  </div>
                </div>
                <Link
                  href={`/careers/apply?role=${encodeURIComponent(position.title)}`}
                  className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Apply <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="glass-card rounded-2xl p-12 text-center animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Role?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            We're always looking for talented people. Send us your resume and tell us how
            you'd like to contribute to the clean energy revolution.
          </p>
          <Link
            href="/careers/apply?role=General Application"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Apply Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
