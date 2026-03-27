"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { UploadCloud, CheckCircle, ArrowLeft, Send } from "lucide-react";

function ApplyContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const roleFromQuery = searchParams.get("role") || "";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: roleFromQuery,
    linkedinUrl: "",
    portfolioUrl: "",
    coverLetter: "",
  });
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        {/* Back Link */}
        <Link href="/careers" className="inline-flex items-center gap-2 text-green-600 font-medium mb-8 hover:text-green-700 transition">
          <ArrowLeft className="w-4 h-4" />
          Back to Careers
        </Link>

        <div className="glass-card rounded-2xl p-8 sm:p-12 shadow-xl animate-fadeInUp">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-scaleIn">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Application Received!</h2>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto text-lg">
                Thank you for applying for the <strong>{formData.role || "General"}</strong> position at VOLTPAY. 
                Our team will review your application and get back to you soon.
              </p>
              <button
                onClick={() => router.push("/careers")}
                className="px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Explore More Roles
              </button>
            </div>
          ) : (
            <>
              <div className="mb-10 border-b border-gray-100 pb-8">
                <h1 className="text-4xl font-bold mb-2">Apply for a Role</h1>
                <p className="text-gray-600">
                  Join us in powering Africa's businesses with clean energy.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Role Selection */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Position You Are Applying For *</label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    required
                  >
                    <option value="">Select a role...</option>
                    <option value="Senior Solar Engineer">Senior Solar Engineer</option>
                    <option value="Full Stack Developer">Full Stack Developer</option>
                    <option value="Customer Success Manager">Customer Success Manager</option>
                    <option value="Sales Representative">Sales Representative</option>
                    <option value="General Application">General Application</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Jane"
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                      required
                    />
                  </div>
                  {/* Last Name */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                      required
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234 800 000 0000"
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* LinkedIn */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">LinkedIn Profile URL</label>
                    <input
                      type="url"
                      name="linkedinUrl"
                      value={formData.linkedinUrl}
                      onChange={handleChange}
                      placeholder="https://linkedin.com/in/janedoe"
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    />
                  </div>
                  {/* Portfolio */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Portfolio / Website</label>
                    <input
                      type="url"
                      name="portfolioUrl"
                      value={formData.portfolioUrl}
                      onChange={handleChange}
                      placeholder="https://janedoe.com"
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Resume / CV *</label>
                  <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer bg-gray-50 hover:bg-green-50 hover:border-green-400 transition group relative">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <UploadCloud className="w-10 h-10 text-gray-400 group-hover:text-green-500 mb-3" />
                      {fileName ? (
                        <p className="text-sm font-medium text-green-700">{fileName}</p>
                      ) : (
                        <>
                          <p className="mb-2 text-sm text-gray-500"><span className="font-semibold text-green-600">Click to upload</span> or drag and drop</p>
                          <p className="text-xs text-gray-400">PDF, DOCX, or RTF (MAX. 5MB)</p>
                        </>
                      )}
                    </div>
                    <input type="file" className="hidden" accept=".pdf,.doc,.docx,.rtf" required onChange={handleFileChange} />
                  </label>
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Cover Letter</label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    placeholder="Tell us why you're a great fit for VOLTPAY..."
                    rows={6}
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-4 border-t border-gray-100">
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl font-bold text-lg hover:from-green-700 hover:to-green-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    Submit Application <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="w-8 h-8 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div></div>}>
      <ApplyContent />
    </Suspense>
  );
}
