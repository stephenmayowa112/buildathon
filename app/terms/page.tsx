import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 -z-10"></div>

        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 glass-green rounded-full text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            Legal
          </span>
          <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: March 27, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using the VOLTPAY platform, website, or services ("Services"), you agree
              to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms,
              you may not access or use our Services. These Terms constitute a legally binding agreement
              between you and VOLTPAY Energy Solutions Ltd.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">2. Description of Services</h2>
            <p className="text-gray-600 leading-relaxed">
              VOLTPAY provides subscription-based solar energy services for businesses, including solar
              panel installation, energy monitoring, billing management, and usage analytics. Our
              Services are available through our website, mobile application, and associated tools.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>You must provide accurate and complete information when creating an account.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>You are responsible for maintaining the security of your account credentials.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>You must be at least 18 years of age or a registered business entity to use our Services.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>You must promptly notify us of any unauthorized use of your account.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">4. Subscription Plans & Billing</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>Subscriptions are billed on a monthly or annual basis, depending on your selected plan.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>Each plan includes a specified monthly energy allowance (kWh). Usage beyond this allowance will incur additional charges at the plan's stated extra rate.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>Payments are due on the billing date specified in your account. Late payments may result in service suspension after a 7-day grace period.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>You may upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">5. Energy Usage & Monitoring</h2>
            <p className="text-gray-600 leading-relaxed">
              Energy usage is tracked through smart meters installed at your premises. While we strive
              for accurate readings, VOLTPAY is not liable for minor discrepancies caused by meter
              calibration or network disruptions. Disputed readings can be submitted for review within
              30 days of the billing date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">6. Service Availability</h2>
            <p className="text-gray-600 leading-relaxed">
              We aim to provide uninterrupted solar energy to your premises. However, service
              interruptions may occur due to weather conditions, equipment maintenance, grid
              connectivity issues, or circumstances beyond our control. We will notify you in
              advance of scheduled maintenance whenever possible.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">7. Cancellation & Refunds</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>You may cancel your subscription at any time through your account dashboard or by contacting support.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>Cancellations take effect at the end of the current billing period. No partial refunds are issued for unused time within a billing cycle.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>Annual subscriptions cancelled before the end of the term will be refunded for remaining full months minus a 10% early termination fee.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              To the maximum extent permitted by law, VOLTPAY shall not be liable for any indirect,
              incidental, special, or consequential damages arising from the use or inability to use
              our Services, including but not limited to loss of profits, business interruption, or
              data loss. Our total liability shall not exceed the amount paid by you for the Services
              in the twelve (12) months preceding the claim.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these Terms at any time. Material changes will be
              communicated via email or through a prominent notice on the Platform at least 30 days
              before they take effect. Your continued use of the Services after changes become
              effective constitutes acceptance of the updated Terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms are governed by and construed in accordance with the laws of the Federal
              Republic of Nigeria. Any disputes shall be resolved through arbitration in Lagos,
              Nigeria, in accordance with the Arbitration and Conciliation Act.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">11. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              For questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:legal@voltpay.com" className="text-green-600 font-medium hover:text-green-700">
                legal@voltpay.com
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
