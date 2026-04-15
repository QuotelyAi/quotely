'use client';

import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

const features = [
  {
    category: 'Core Platform',
    items: [
      { name: 'TurboRater (200+ carriers)', starter: true, professional: true, enterprise: true },
      { name: 'QUAD AI Assistant', starter: true, professional: true, enterprise: true },
      { name: 'Gail AI Voice', starter: true, professional: true, enterprise: true },
      { name: 'AMS (Momentum AMP)', starter: true, professional: true, enterprise: true },
      { name: 'CRM', starter: true, professional: true, enterprise: true },
    ],
  },
  {
    category: 'Quoting & Rating',
    items: [
      { name: 'Auto in 4.8s, Home in 17s', starter: true, professional: true, enterprise: true },
      { name: 'Multi-carrier comparison', starter: true, professional: true, enterprise: true },
      { name: 'All available carriers', starter: true, professional: true, enterprise: true },
      { name: 'Token carryover', starter: true, professional: true, enterprise: true },
    ],
  },
  {
    category: 'Integrations',
    items: [
      { name: 'IVANS', starter: true, professional: true, enterprise: true },
      { name: 'API access', starter: true, professional: true, enterprise: true },
      { name: 'Credential vault', starter: true, professional: true, enterprise: true },
    ],
  },
  {
    category: 'Infrastructure',
    items: [
      { name: '50 States + DC', starter: true, professional: true, enterprise: true },
      { name: '99.5%+ SLA uptime', starter: true, professional: true, enterprise: true },
      { name: 'SSL encryption', starter: true, professional: true, enterprise: true },
      { name: 'Envelope encryption (AES-256)', starter: true, professional: true, enterprise: true },
    ],
  },
  {
    category: 'Token Allocation',
    items: [
      { name: 'Starting tokens', starter: '50/mo', professional: '250/mo', enterprise: '500/mo' },
      { name: 'Max tokens', starter: '200/mo', professional: '450/mo', enterprise: '1,000/mo' },
      { name: 'Starting price', starter: '$999/mo', professional: '$1,799/mo', enterprise: '$2,399/mo' },
    ],
  },
];

const renderValue = (value: boolean | string) => {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="text-green-500 mx-auto" size={20} />
    ) : (
      <span className="text-gray-600">—</span>
    );
  }
  return <span className="text-white font-medium">{value}</span>;
};

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-gray-950 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Compare Plans
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Every plan includes the full Quotely platform. The only difference is how many tokens you need.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Features</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-white">
                  <div>Starter</div>
                  <div className="text-xl font-bold text-white mt-1">$999/mo</div>
                  <div className="text-xs text-gray-400">50 tokens included</div>
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-white bg-yellow-500/10">
                  <div className="flex items-center justify-center gap-2">
                    Professional
                    <span className="bg-yellow-500 text-gray-900 text-xs px-2 py-0.5 rounded font-bold">Popular</span>
                  </div>
                  <div className="text-xl font-bold text-yellow-500 mt-1">$1,799/mo</div>
                  <div className="text-xs text-gray-400">250 tokens included</div>
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-white">
                  <div>Enterprise</div>
                  <div className="text-xl font-bold text-white mt-1">$2,399/mo</div>
                  <div className="text-xs text-gray-400">500 tokens included</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((category, categoryIndex) => (
                <React.Fragment key={categoryIndex}>
                  <tr className="bg-gray-800/50">
                    <td colSpan={4} className="px-6 py-3 text-sm font-semibold text-yellow-500">
                      {category.category}
                    </td>
                  </tr>
                  {category.items.map((feature, featureIndex) => (
                    <tr key={featureIndex} className="border-t border-gray-800">
                      <td className="px-6 py-4 text-sm text-gray-300">{feature.name}</td>
                      <td className="px-6 py-4 text-center">{renderValue(feature.starter)}</td>
                      <td className="px-6 py-4 text-center bg-yellow-500/5">
                        {renderValue(feature.professional)}
                      </td>
                      <td className="px-6 py-4 text-center">{renderValue(feature.enterprise)}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-800">
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4 text-center">
                  <Link href="/demo-request" className="inline-block px-6 py-2 border border-gray-600 text-white rounded-lg hover:border-yellow-500 hover:text-yellow-500 transition-colors text-sm font-semibold">
                    Get Started
                  </Link>
                </td>
                <td className="px-6 py-4 text-center bg-yellow-500/10">
                  <Link href="/demo-request" className="inline-block px-6 py-2 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-colors text-sm font-semibold">
                    Get Started
                  </Link>
                </td>
                <td className="px-6 py-4 text-center">
                  <Link href="/demo-request" className="inline-block px-6 py-2 border border-gray-600 text-white rounded-lg hover:border-yellow-500 hover:text-yellow-500 transition-colors text-sm font-semibold">
                    Get Started
                  </Link>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <p className="mt-8 text-xs text-gray-500 text-center">
          * Speed based on measured benchmarks: auto quote in 4.8s, homeowners in 17s through TurboRater by Zywave.
          Results may vary by carrier count and data complexity. Select more tokens on each tier from the{' '}
          <Link href="/pricing" className="text-yellow-500 hover:text-yellow-400">pricing page</Link>.
        </p>
      </div>
    </div>
  );
}
