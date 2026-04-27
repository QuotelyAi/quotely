'use client';

import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

interface Tier {
  name: string;
  price: string;
  subtitle: string;
  badge?: string;
}

const tiers: Tier[] = [
  { name: 'Connect', price: '$299/mo', subtitle: '100 quotes/mo', badge: 'Best Value' },
  { name: 'Starter', price: '$999/mo', subtitle: 'Highest volume' },
  { name: 'Professional', price: '$1,799/mo', subtitle: 'Multi-channel', badge: 'Popular' },
  { name: 'Enterprise', price: '$2,399/mo', subtitle: 'Full autonomy' },
];

const POPULAR_INDEX = 2;

interface FeatureRow {
  name: string;
  values: boolean[];
}

interface FeatureCategory {
  category: string;
  items: FeatureRow[];
}

const features: FeatureCategory[] = [
  {
    category: 'Core Platform',
    items: [
      { name: 'TurboRater (200+ carriers)', values: [true, true, true, true] },
      { name: 'QUAD AI — web chat', values: [true, true, true, true] },
      { name: 'QUAD AI — SMS channel', values: [false, true, true, true] },
      { name: 'QUAD AI — Telegram + Slack', values: [false, false, true, true] },
      { name: 'Gail Voice AI', values: [false, true, true, true] },
      { name: 'AMS (Momentum AMP)', values: [false, true, true, true] },
      { name: 'CRM', values: [false, true, true, true] },
    ],
  },
  {
    category: 'QUAD Autonomy',
    items: [
      { name: 'Read & Suggest', values: [true, true, true, true] },
      { name: 'Write to Quotely', values: [false, true, true, true] },
      { name: 'Write to Integrations', values: [false, false, true, true] },
      { name: 'Outbound Initiation', values: [false, false, false, true] },
      { name: 'QUAD Self-Learning', values: [false, false, true, true] },
      { name: 'QUAD Review Council', values: [false, false, true, true] },
      { name: 'QUAD Custom Wiki', values: [false, false, false, true] },
    ],
  },
  {
    category: 'Quoting & Rating',
    items: [
      { name: 'Auto in 4.8s, Home in 17s', values: [true, true, true, true] },
      { name: 'Multi-carrier comparison', values: [true, true, true, true] },
      { name: '100 quotes per month', values: [true, false, false, false] },
      { name: 'Highest quote volume', values: [false, true, true, true] },
    ],
  },
  {
    category: 'Integrations',
    items: [
      { name: 'IVANS', values: [false, true, true, true] },
      { name: 'API access', values: [false, true, true, true] },
      { name: 'Credential vault', values: [false, true, true, true] },
    ],
  },
  {
    category: 'Infrastructure',
    items: [
      { name: '50 States + DC', values: [true, true, true, true] },
      { name: '99.5%+ SLA uptime', values: [true, true, true, true] },
      { name: 'SSL encryption', values: [true, true, true, true] },
      { name: 'Envelope encryption (AES-256)', values: [true, true, true, true] },
      { name: 'SOC 2 Certified (via Clerk)', values: [true, true, true, true] },
    ],
  },
];

const renderValue = (value: boolean) =>
  value ? (
    <Check className="text-green-500 mx-auto" size={20} />
  ) : (
    <span className="text-gray-600">—</span>
  );

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-16 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Compare Plans
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Start at $299 for AI-powered quoting, then scale into the full platform — AMS, CRM, QUAD AI, and Gail Voice — when you&apos;re ready.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-800">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Features</th>
                {tiers.map((tier, i) => (
                  <th
                    key={tier.name}
                    className={`px-4 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white ${i === POPULAR_INDEX ? 'bg-yellow-500/10' : ''}`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {tier.name}
                      {tier.badge && (
                        <span className="bg-yellow-500 text-gray-900 text-xs px-2 py-0.5 rounded font-bold whitespace-nowrap">
                          {tier.badge}
                        </span>
                      )}
                    </div>
                    <div className={`text-xl font-bold mt-1 ${i === POPULAR_INDEX ? 'text-yellow-500' : 'text-gray-900 dark:text-white'}`}>
                      {tier.price}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{tier.subtitle}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((category, categoryIndex) => (
                <React.Fragment key={categoryIndex}>
                  <tr className="bg-gray-100/50 dark:bg-gray-800/50">
                    <td colSpan={tiers.length + 1} className="px-6 py-3 text-sm font-semibold text-yellow-500">
                      {category.category}
                    </td>
                  </tr>
                  {category.items.map((feature, featureIndex) => (
                    <tr key={featureIndex} className="border-t border-gray-200 dark:border-gray-800">
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{feature.name}</td>
                      {feature.values.map((val, i) => (
                        <td
                          key={i}
                          className={`px-4 py-4 text-center ${i === POPULAR_INDEX ? 'bg-yellow-500/5' : ''}`}
                        >
                          {renderValue(val)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-200 dark:bg-gray-800">
                <td className="px-6 py-4"></td>
                {tiers.map((tier, i) => (
                  <td key={tier.name} className={`px-4 py-4 text-center ${i === POPULAR_INDEX ? 'bg-yellow-500/10' : ''}`}>
                    <Link
                      href="/demo-request"
                      className={
                        i === POPULAR_INDEX
                          ? 'inline-block px-6 py-2 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-colors text-sm font-semibold'
                          : 'inline-block px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg hover:border-yellow-500 hover:text-yellow-500 transition-colors text-sm font-semibold'
                      }
                    >
                      Get Started
                    </Link>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>

        <p className="mt-8 text-xs text-gray-500 text-center">
          * Speed based on measured benchmarks: auto quote in 4.8s, homeowners in 17s through TurboRater by Zywave.
          Results may vary by carrier count and data complexity. See full plan details on the{' '}
          <Link href="/pricing" className="text-yellow-500 hover:text-yellow-400">pricing page</Link>.
        </p>
      </div>
    </div>
  );
}
