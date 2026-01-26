'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Send, ArrowLeft } from 'lucide-react';

export default function DemoRequestPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    agencySize: '',
    quoteVolume: '',
    message: '',
    interest: 'demo'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(`Quotely ${formData.interest === 'demo' ? 'Demo' : 'Contact'} Request - ${formData.company || formData.name}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Agency Size: ${formData.agencySize}
Monthly Quote Volume: ${formData.quoteVolume}

Interest: ${formData.interest === 'demo' ? 'Schedule a Demo' : formData.interest === 'pricing' ? 'Get Pricing Information' : 'General Contact'}

Message:
${formData.message}

---
Submitted from: ${window.location.origin}/demo-request
Timestamp: ${new Date().toLocaleString()}
    `);

    // Open default email client
    window.location.href = `mailto:support@tryquotely.com?subject=${subject}&body=${body}`;

    // Show success message
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen py-12 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-900 rounded-xl shadow-lg p-8 text-center border border-gray-800">
              <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-500" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-4">
                Thank You!
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Your request has been submitted. Your default email client should have opened with a pre-filled message to <strong className="text-yellow-500">support@tryquotely.com</strong>.
              </p>
              <p className="text-gray-400 mb-8">
                If the email didn&apos;t open automatically, please send your request details directly to support@tryquotely.com and we&apos;ll get back to you within 1 business day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" className="inline-flex items-center justify-center px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors">
                  Return to Home
                </Link>
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-secondary-500 text-secondary-500 font-semibold rounded-lg hover:bg-secondary-500 hover:text-white transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-6">
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let&apos;s Get Started
            </h1>
            <p className="text-xl text-gray-400">
              Fill out the form below and we&apos;ll get back to you within 1 business day
            </p>
          </div>

          {/* Form */}
          <div className="bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Interest Type */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  I&apos;m interested in *
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="demo">Scheduling a Demo</option>
                  <option value="pricing">Getting Pricing Information</option>
                  <option value="contact">General Contact / Questions</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>

              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@agency.com"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Company and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Company / Agency Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="ABC Insurance Agency"
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Agency Size and Quote Volume */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Agency Size
                  </label>
                  <select
                    name="agencySize"
                    value={formData.agencySize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="">Select team size</option>
                    <option value="1-5">1-5 employees</option>
                    <option value="6-20">6-20 employees</option>
                    <option value="21-50">21-50 employees</option>
                    <option value="51+">51+ employees</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Monthly Quote Volume
                  </label>
                  <select
                    name="quoteVolume"
                    value={formData.quoteVolume}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="">Estimate monthly quotes</option>
                    <option value="0-50">0-50 quotes</option>
                    <option value="51-200">51-200 quotes</option>
                    <option value="201-500">201-500 quotes</option>
                    <option value="500+">500+ quotes</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Message / Additional Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your needs, current systems, or any questions you have..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Send className="mr-2" size={20} />
                  Submit Request
                </button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting this form, you agree to be contacted about Quotely. We&apos;ll respond within 1 business day.
                </p>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Prefer to email directly? Reach us at{' '}
              <a href="mailto:support@tryquotely.com" className="text-yellow-500 hover:text-yellow-400 font-medium">
                support@tryquotely.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
