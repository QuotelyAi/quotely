'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, RefreshCw } from 'lucide-react';

interface PlatformPackage {
  name: string;
  basePrice: number;
  minTokens: number;
  perToken: number;
  tokenOptions: number[];
  featured?: boolean;
  features: string[];
}

const platformPackages: PlatformPackage[] = [
  {
    name: "Starter",
    basePrice: 999,
    minTokens: 50,
    perToken: 3.00,
    tokenOptions: [50, 100, 150, 200],
    features: [
      "50 tokens/month",
      "AMS included",
      "CRM included",
      "Rater included",
      "AI Agent included",
      "Chat/SMS support"
    ]
  },
  {
    name: "Professional",
    basePrice: 1799,
    minTokens: 250,
    perToken: 2.25,
    tokenOptions: [250, 300, 350, 400, 450],
    featured: true,
    features: [
      "250 tokens/month",
      "AMS included",
      "CRM included",
      "Rater included",
      "AI Agent included",
      "Chat/SMS support"
    ]
  },
  {
    name: "Enterprise",
    basePrice: 2399,
    minTokens: 500,
    perToken: 1.75,
    tokenOptions: [500, 600, 700, 800, 1000],
    features: [
      "500 tokens/month",
      "AMS included",
      "CRM included",
      "Rater included",
      "AI Agent included",
      "Chat/SMS support"
    ]
  }
];

export default function PricingPage() {
  const [selectedTokens, setSelectedTokens] = useState<Record<string, number>>({
    Starter: 50,
    Professional: 250,
    Enterprise: 500
  });

  const calculatePrice = (pkg: PlatformPackage, tokens: number): number => {
    const extraTokens = tokens - pkg.minTokens;
    return pkg.basePrice + (extraTokens * pkg.perToken);
  };

  const handleTokenChange = (packageName: string, tokens: number) => {
    setSelectedTokens(prev => ({
      ...prev,
      [packageName]: tokens
    }));
  };

  return (
    <div className="min-h-screen bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl mb-4 text-gray-400">
            Choose the plan that fits your agency&apos;s needs
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/30 text-green-400">
            <RefreshCw size={16} />
            <span className="text-sm font-medium">Tokens carry over month to month</span>
          </div>
        </div>

        {/* Platform Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {platformPackages.map((pkg) => {
            const currentTokens = selectedTokens[pkg.name];
            const currentPrice = calculatePrice(pkg, currentTokens);

            return (
              <div
                key={pkg.name}
                className={`bg-gray-900 rounded-xl shadow-lg p-6 text-center transition-all transform hover:-translate-y-2 border-t-4 ${
                  pkg.featured
                    ? 'border-yellow-500 ring-2 ring-yellow-500'
                    : 'border-secondary-500'
                }`}
              >
                {pkg.featured && (
                  <div className="mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-500 text-gray-900">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-4 text-white">
                  {pkg.name}
                </h3>

                {/* Token Selector Dropdown */}
                <div className="mb-4">
                  <label className="block text-sm text-gray-400 mb-2">
                    Select monthly tokens
                  </label>
                  <select
                    value={currentTokens}
                    onChange={(e) => handleTokenChange(pkg.name, Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 cursor-pointer"
                  >
                    {pkg.tokenOptions.map((tokens) => (
                      <option key={tokens} value={tokens}>
                        {tokens} tokens
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Display */}
                <div className="mb-4">
                  <span className="text-5xl font-bold text-yellow-500">
                    ${currentPrice.toLocaleString()}
                  </span>
                  <div className="text-sm mt-1 text-gray-400">
                    per month
                  </div>
                </div>

                {/* Token Carryover Badge */}
                <div className="mb-6 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-900/30 text-green-400 text-xs">
                  <RefreshCw size={12} />
                  <span>Unused tokens carry over</span>
                </div>

                {/* Features List */}
                <ul className="text-left space-y-3 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-2 flex-shrink-0 mt-0.5 text-green-500" size={16} />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/demo-request"
                  className={`block w-full px-4 py-3 rounded-lg font-semibold transition-all hover:shadow-lg ${
                    pkg.featured
                      ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400'
                      : 'bg-secondary-500 text-white hover:bg-secondary-600'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-lg shadow p-6 border border-gray-800">
              <h3 className="font-semibold mb-2 text-yellow-500">
                How do tokens work?
              </h3>
              <p className="text-gray-400">
                Each insurance quote uses one token. Choose a package that fits your monthly volume.
                Unused tokens automatically carry over to the next month, so you never lose what you paid for.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg shadow p-6 border border-gray-800">
              <h3 className="font-semibold mb-2 text-yellow-500">
                Can I change my plan?
              </h3>
              <p className="text-gray-400">
                Yes! You can upgrade or downgrade your plan at any time. When you upgrade,
                your new token allocation takes effect immediately. When you downgrade,
                changes apply at your next billing cycle.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg shadow p-6 border border-gray-800">
              <h3 className="font-semibold mb-2 text-yellow-500">
                Is there a setup fee?
              </h3>
              <p className="text-gray-400">
                No setup fees, no hidden costs. All plans are simple monthly subscriptions
                with everything included. You can cancel anytime.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg shadow p-6 border border-gray-800">
              <h3 className="font-semibold mb-2 text-yellow-500">
                What happens if I need more tokens mid-month?
              </h3>
              <p className="text-gray-400">
                You can upgrade your plan at any time to get more tokens immediately.
                The price difference will be prorated for the remainder of your billing cycle.
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
            Get started today and see why agencies love Quotely
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
