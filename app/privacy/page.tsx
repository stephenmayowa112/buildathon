import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 -z-10"></div>

        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 glass-green rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Legal
          </span>
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: March 27, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              VOLTPAY ("we," "our," or "us") is committed to protecting the privacy of our
              users. This Privacy Policy describes how we collect, use, store, and share your
              personal information when you use our website, mobile application, and services
              (collectively, the "Platform").
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We collect the following types of information:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span><strong>Account Information:</strong> Name, email address, phone number, business name, and password when you create an account.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span><strong>Billing Information:</strong> Payment details, billing address, and transaction history necessary for processing your subscription.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span><strong>Usage Data:</strong> Energy consumption data, meter readings, and usage patterns from your connected solar systems.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span><strong>Device Information:</strong> Browser type, IP address, device identifiers, and operating system when you access our Platform.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>To provide, maintain, and improve our services and Platform.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>To process payments and manage your subscription billing.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>To send important account notifications, billing reminders, and service updates.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>To generate energy usage analytics and cost forecasting reports.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>To comply with legal obligations and protect our users and platform.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">4. Data Sharing</h2>
            <p className="text-gray-600 leading-relaxed">
              We do not sell your personal data. We may share your information with trusted
              third-party service providers who assist us in operating the Platform (e.g., payment
              processors, cloud hosting providers). All third parties are contractually obligated to
              maintain the confidentiality of your data and use it only for the purposes we specify.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement industry-standard security measures including encryption in transit
              (TLS/SSL), encryption at rest, secure access controls, and regular security audits
              to protect your personal information from unauthorized access, alteration, or destruction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your personal data for as long as your account is active or as needed to
              provide you with our services. If you close your account, we will delete or anonymize
              your data within 90 days, except where we are required by law to retain it longer.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>Access, correct, or delete your personal data by contacting us.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>Opt out of non-essential communications at any time.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>Request a copy of all personal data we hold about you.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>Lodge a complaint with the relevant data protection authority.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact our Data Protection
              Officer at{" "}
              <a href="mailto:privacy@voltpay.com" className="text-green-600 font-medium hover:text-green-700">
                privacy@voltpay.com
              </a>{" "}
              or write to us at 14 Adeola Odeku Street, Victoria Island, Lagos, Nigeria.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
