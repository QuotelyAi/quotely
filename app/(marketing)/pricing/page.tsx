'use client';

import { useState } from 'react';
import Link from 'next/link';

interface TokenOption {
  tokens: number;
  price: number;
}

interface PlatformPackage {
  name: string;
  tokenOptions: TokenOption[];
  featured?: boolean;
  features: string[];
}

const platformPackages: PlatformPackage[] = [
  {
    name: "Starter",
    tokenOptions: [
      { tokens: 50, price: 999 },
      { tokens: 100, price: 1199 },
      { tokens: 150, price: 1399 },
      { tokens: 200, price: 1599 },
    ],
    features: [
      "AMS (Momentum AMP) included",
      "CRM included",
      "TurboRater included",
      "QUAD AI + Gail Voice included",
      "Unused tokens carry over",
      "API access + Credential vault",
    ],
  },
  {
    name: "Professional",
    tokenOptions: [
      { tokens: 250, price: 1799 },
      { tokens: 300, price: 1999 },
      { tokens: 350, price: 2199 },
      { tokens: 400, price: 2399 },
      { tokens: 450, price: 2599 },
    ],
    featured: true,
    features: [
      "AMS (Momentum AMP) included",
      "CRM included",
      "TurboRater included",
      "QUAD AI + Gail Voice included",
      "Unused tokens carry over",
      "API access + Credential vault",
    ],
  },
  {
    name: "Enterprise",
    tokenOptions: [
      { tokens: 500, price: 2399 },
      { tokens: 600, price: 2699 },
      { tokens: 700, price: 2999 },
      { tokens: 800, price: 3299 },
      { tokens: 1000, price: 3799 },
    ],
    features: [
      "AMS (Momentum AMP) included",
      "CRM included",
      "TurboRater included",
      "QUAD AI + Gail Voice included",
      "Unused tokens carry over",
      "API access + Credential vault",
    ],
  },
];

const comparisonFeatures = [
  { name: "TurboRater (200+ carriers)", starter: true, professional: true, enterprise: true },
  { name: "QUAD AI + Gail Voice", starter: true, professional: true, enterprise: true },
  { name: "AMS (Momentum AMP)", starter: true, professional: true, enterprise: true },
  { name: "CRM", starter: true, professional: true, enterprise: true },
  { name: "IVANS", starter: true, professional: true, enterprise: true },
  { name: "API Access", starter: true, professional: true, enterprise: true },
  { name: "Credential Vault", starter: true, professional: true, enterprise: true },
  { name: "Token Carryover", starter: true, professional: true, enterprise: true },
];

export default function PricingPage() {
  const [selectedIndex, setSelectedIndex] = useState<Record<string, number>>({
    Starter: 0,
    Professional: 0,
    Enterprise: 0,
  });

  return (
    <div className="min-h-screen bg-gray-950 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Every plan includes the full platform — AMS, CRM, TurboRater, QUAD AI, and Gail Voice.
            Pick your token level and scale when you&apos;re ready.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {platformPackages.map((pkg) => {
            const idx = selectedIndex[pkg.name];
            const selected = pkg.tokenOptions[idx];

            return (
              <div
                key={pkg.name}
                className={`relative rounded-2xl border p-8 ${
                  pkg.featured
                    ? 'border-yellow-500 bg-gray-900'
                    : 'border-gray-800 bg-gray-900'
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-yellow-500 px-3 py-1 text-xs font-semibold text-gray-900">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-lg font-semibold text-white">{pkg.name}</h3>

                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">
                    ${selected.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-400">/month</span>
                </div>
                <p className="mt-1 text-sm text-gray-400">
                  {selected.tokens} tokens/month
                </p>

                {/* Token Selector */}
                <div className="mt-5 mb-6">
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Select tokens
                  </label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {pkg.tokenOptions.map((option, i) => (
                      <button
                        key={option.tokens}
                        onClick={() =>
                          setSelectedIndex((prev) => ({ ...prev, [pkg.name]: i }))
                        }
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                          idx === i
                            ? 'bg-yellow-500 text-gray-900'
                            : 'bg-gray-800 text-gray-400 hover:text-white'
                        }`}
                      >
                        {option.tokens}
                      </button>
                    ))}
                  </div>
                </div>

                <ul className="mb-8 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-yellow-500 font-bold text-sm">&#10003;</span>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/demo-request"
                  className={`block w-full py-3 rounded-lg text-center text-sm font-semibold transition-colors ${
                    pkg.featured
                      ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400'
                      : 'border border-gray-700 text-white hover:border-yellow-500 hover:text-yellow-500'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Table */}
        <h2 className="text-2xl font-bold text-white mb-6">
          Every Plan Includes
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Feature</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-white">Starter</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-yellow-500">Professional</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-white">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((feature, index) => (
                <tr key={index} className="border-t border-gray-800">
                  <td className="px-6 py-4 text-sm text-gray-300">{feature.name}</td>
                  <td className="px-6 py-4 text-center">
                    {feature.starter ? (
                      <span className="text-green-500 font-bold">&#10003;</span>
                    ) : (
                      <span className="text-gray-600">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center bg-yellow-500/5">
                    {feature.professional ? (
                      <span className="text-green-500 font-bold">&#10003;</span>
                    ) : (
                      <span className="text-gray-600">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {feature.enterprise ? (
                      <span className="text-green-500 font-bold">&#10003;</span>
                    ) : (
                      <span className="text-gray-600">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-xs text-gray-500 text-center">
          * Speed based on measured benchmarks: auto quote in 4.8s, homeowners in 17s through TurboRater by Zywave.
          Results may vary by carrier count and data complexity. 50 States + DC · 200+ Carriers via TurboRater.
        </p>
      </div>
    </div>
  );
}
