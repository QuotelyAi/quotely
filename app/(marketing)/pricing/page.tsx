'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Zap, Clock, ArrowRight } from 'lucide-react';

const pricingOptions = {
  tokenOnly: {
    title: "Quote-Only Packages",
    subtitle: "Start quoting immediately",
    tiers: [
      { name: "Starter", price: 150, tokens: 50, perToken: "3.00" },
      { name: "Basic", price: 200, tokens: 100, perToken: "2.00", featured: true },
      { name: "Standard", price: 225, tokens: 150, perToken: "1.50" },
      { name: "Plus", price: 250, tokens: 200, perToken: "1.25" },
      { name: "Premium", price: 300, tokens: 300, perToken: "1.00" }
    ]
  },
  fullPlatform: {
    title: "Full Platform Access",
    subtitle: "Complete agency management (Coming Q1 2026)",
    basePrice: 999,
    features: [
      "AMS/CRM Integration",
      "Policy Management",
      "Client Portal",
      "Automated Renewals",
      "Commission Tracking",
      "Plus token packages at discounted rates"
    ]
  },
  tokenAddOns: [
    { tokens: 50, price: 85, savings: 15, perToken: 1.70 },
    { tokens: 200, price: 340, savings: 60, perToken: 1.70 },
    { tokens: 500, price: 650, savings: 350, perToken: 1.30 },
    { tokens: 1000, price: 1200, savings: 800, perToken: 1.20 }
  ]
};

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<'tokens' | 'platform'>('tokens');

  return (
    <div className="min-h-screen bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl mb-8 text-gray-400">
            Choose the plan that fits your agency&apos;s needs
          </p>

          {/* Tab Toggle */}
          <div className="inline-flex rounded-lg p-1 mb-8 bg-gray-800">
            <button
              onClick={() => setActiveTab('tokens')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'tokens'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Quote Packages
              <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                activeTab === 'tokens'
                  ? 'bg-yellow-500 text-gray-900'
                  : 'bg-green-600 text-white'
              }`}>
                Available Now
              </span>
            </button>
            <button
              onClick={() => setActiveTab('platform')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'platform'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Full Platform
              <Clock className="inline ml-2" size={16} />
            </button>
          </div>
        </div>

        {/* Token-Only Packages */}
        {activeTab === 'tokens' && (
          <div className="max-w-7xl mx-auto">
            {/* Hero Message */}
            <div className="text-center mb-12 p-8 rounded-xl bg-gray-800">
              <h2 className="text-3xl font-bold mb-3 text-yellow-500">
                Start Today - No Setup Required
              </h2>
              <p className="text-lg text-gray-400">
                Perfect for agencies using Gail AI who need faster quoting
              </p>
            </div>

            {/* Token Tier Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
              {pricingOptions.tokenOnly.tiers.map((tier, index) => (
                <div
                  key={index}
                  className={`bg-gray-900 rounded-xl shadow-lg p-6 text-center transition-all transform hover:-translate-y-2 border-t-4 ${
                    tier.featured
                      ? 'border-yellow-500 ring-2 ring-yellow-500'
                      : 'border-secondary-500'
                  }`}
                >
                  {tier.featured && (
                    <div className="mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-500 text-gray-900">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl font-bold mb-4 text-white">
                    {tier.name}
                  </h3>

                  <div className="mb-4">
                    <span className="text-5xl font-bold text-yellow-500">
                      ${tier.price}
                    </span>
                    <div className="text-sm mt-1 text-gray-500">
                      one-time purchase
                    </div>
                  </div>

                  <div className="mb-4 p-3 rounded-lg bg-gray-800">
                    <Zap className="inline mr-1 text-yellow-500" size={16} />
                    <span className="font-bold text-white">
                      {tier.tokens} tokens
                    </span>
                  </div>

                  <div className="text-sm mb-6 text-gray-400">
                    ${tier.perToken} per token
                  </div>

                  <Link
                    href="/demo-request"
                    className={`block w-full px-4 py-3 rounded-lg font-semibold transition-all hover:shadow-lg ${
                      tier.featured
                        ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400'
                        : 'bg-secondary-500 text-white hover:bg-secondary-600'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>

            {/* Token Add-ons */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-white">
                Need More Tokens? Add-On Packages
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {pricingOptions.tokenAddOns.map((addon, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all border border-gray-800"
                  >
                    <div className="mb-3">
                      <span className="text-3xl font-bold text-white">
                        {addon.tokens}
                      </span>
                      <span className="text-lg ml-1 text-gray-400">
                        tokens
                      </span>
                    </div>

                    <div className="mb-3">
                      <span className="text-4xl font-bold text-secondary-500">
                        ${addon.price}
                      </span>
                    </div>

                    <div className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 bg-green-900/30 text-green-400">
                      Save ${addon.savings}
                    </div>

                    <div className="text-sm mb-4 text-gray-500">
                      ${addon.perToken.toFixed(2)} per token
                    </div>

                    <Link
                      href="/demo-request"
                      className="block w-full px-4 py-2 rounded-lg font-semibold transition-all bg-primary-600 text-white hover:bg-primary-700"
                    >
                      Add Tokens
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Full Platform */}
        {activeTab === 'platform' && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 p-12 rounded-xl bg-gradient-to-br from-primary-600 to-secondary-500">
              <Clock size={64} className="mx-auto mb-4 text-white" />
              <h2 className="text-4xl font-bold mb-4 text-white">
                The Complete Solution
              </h2>
              <p className="text-2xl mb-2 text-yellow-500">
                Coming Q1 2026
              </p>
              <p className="text-lg text-white/90">
                Full AMS/CRM integration for complete agency management
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden mb-12 border border-gray-800">
              <div className="p-8 bg-primary-800">
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-2 text-white">
                    {pricingOptions.fullPlatform.title}
                  </h3>
                  <p className="mb-6 text-white/90">
                    {pricingOptions.fullPlatform.subtitle}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-6xl font-bold text-yellow-500">
                      ${pricingOptions.fullPlatform.basePrice}
                    </span>
                    <span className="text-xl text-white">
                      /month
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h4 className="font-semibold text-lg mb-6 text-white">
                  Everything included in Full Platform:
                </h4>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {pricingOptions.fullPlatform.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="mr-3 flex-shrink-0 mt-0.5 text-green-500" size={20} />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="p-6 rounded-lg mb-6 bg-gray-800">
                  <h4 className="font-bold text-lg mb-3 text-yellow-500">
                    Join the Waitlist for Early Access
                  </h4>
                  <p className="mb-4 text-gray-400">
                    Be among the first to experience the complete platform. Early adopters get founder&apos;s pricing.
                  </p>
                  <Link
                    href="/demo-request?waitlist=platform"
                    className="inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-lg bg-yellow-500 text-gray-900 hover:bg-yellow-400"
                  >
                    Join Waitlist
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>

                <div className="p-4 rounded-lg bg-green-900/20 border-l-4 border-green-500">
                  <p className="font-semibold text-green-400">
                    Founder&apos;s Pricing Available
                  </p>
                  <p className="text-sm text-gray-400">
                    Early waitlist members lock in special pricing for life
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-lg shadow p-6 border border-gray-800">
              <h3 className="font-semibold mb-2 text-yellow-500">
                What&apos;s the difference between Quote Packages and Full Platform?
              </h3>
              <p className="text-gray-400">
                Quote Packages are available now and give you immediate access to fast insurance quoting. The Full Platform (coming Q1 2026) will include complete AMS/CRM integration, policy management, client portal, and automated renewals for full agency management.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg shadow p-6 border border-gray-800">
              <h3 className="font-semibold mb-2 text-yellow-500">
                How do tokens work?
              </h3>
              <p className="text-gray-400">
                Each insurance quote uses one token. Purchase a package that fits your monthly volume. Tokens never expire and you can add more anytime with our add-on packages.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg shadow p-6 border border-gray-800">
              <h3 className="font-semibold mb-2 text-yellow-500">
                Can I upgrade from Quote Packages to Full Platform later?
              </h3>
              <p className="text-gray-400">
                Yes! When the Full Platform launches in Q1 2026, current customers will receive priority upgrade access with special pricing. Your unused tokens will carry over.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg shadow p-6 border border-gray-800">
              <h3 className="font-semibold mb-2 text-yellow-500">
                Is there a setup fee?
              </h3>
              <p className="text-gray-400">
                No setup fees, no hidden costs. Quote Packages are one-time purchases. The Full Platform will be a monthly subscription when it launches.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center p-8 rounded-lg bg-primary-800">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Ready to Transform Your Insurance Quoting?
          </h2>
          <p className="mb-6 text-white/90">
            Start quoting faster today or join the waitlist for our complete platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://quotely.info"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg bg-yellow-500 text-gray-900 hover:bg-yellow-400"
            >
              See Platform Demo
            </a>
            <Link
              href="/demo-request"
              className="inline-block px-8 py-3 rounded-lg font-semibold border-2 transition-all border-white text-white hover:bg-white hover:text-primary-800"
            >
              Get Started Now
            </Link>
            <Link
              href="/calculator"
              className="inline-block px-8 py-3 rounded-lg font-semibold border-2 transition-all border-white/50 text-white/80 hover:border-white hover:text-white"
            >
              Calculate Your ROI
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
