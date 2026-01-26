'use client';

import React from 'react';
import Link from 'next/link';
import { Check, X } from 'lucide-react';

const features = [
  { category: 'Core Features', items: [
    { name: 'Number of Agents', starter: 'Unlimited', professional: 'Unlimited', enterprise: 'Unlimited' },
    { name: 'Monthly Quotes', starter: '50 included', professional: '250 total', enterprise: 'Custom volume' },
    { name: 'Carrier Integrations', starter: 'All Available', professional: 'All Available', enterprise: 'All Available' },
    { name: 'Mobile App Access', starter: true, professional: true, enterprise: true },
  ]},
  { category: 'Automation & AI', items: [
    { name: 'AI-Powered Recommendations', starter: false, professional: true, enterprise: true },
    { name: 'Automated Follow-ups', starter: false, professional: true, enterprise: true },
    { name: 'Smart Lead Scoring', starter: false, professional: true, enterprise: true },
    { name: 'Predictive Analytics', starter: false, professional: true, enterprise: true },
  ]},
  { category: 'Reporting & Analytics', items: [
    { name: 'Basic Reporting', starter: true, professional: true, enterprise: true },
    { name: 'Advanced Analytics', starter: false, professional: true, enterprise: true },
    { name: 'Custom Reports', starter: false, professional: false, enterprise: true },
    { name: 'Real-time Dashboards', starter: false, professional: true, enterprise: true },
  ]},
  { category: 'Integrations', items: [
    { name: 'Momentum AMP & GAIL Integration', starter: false, professional: true, enterprise: true },
    { name: 'API Access', starter: false, professional: true, enterprise: true },
    { name: 'Custom Integrations', starter: false, professional: false, enterprise: true },
    { name: 'Webhook Support', starter: false, professional: true, enterprise: true },
  ]},
  { category: 'Support & Training', items: [
    { name: 'Email Support', starter: true, professional: true, enterprise: true },
    { name: 'Phone Support', starter: false, professional: true, enterprise: true },
    { name: 'Priority Support', starter: false, professional: true, enterprise: true },
    { name: 'Dedicated Account Manager', starter: false, professional: false, enterprise: true },
    { name: 'Onboarding Training', starter: 'Self-service', professional: 'Guided', enterprise: 'White-glove' },
  ]},
  { category: 'Security & Compliance', items: [
    { name: 'SSL Encryption', starter: true, professional: true, enterprise: true },
    { name: 'Two-Factor Authentication', starter: true, professional: true, enterprise: true },
    { name: 'HIPAA Compliant', starter: false, professional: true, enterprise: true },
    { name: 'SOC 2 Certified', starter: false, professional: true, enterprise: true },
    { name: 'On-Premise Option', starter: false, professional: false, enterprise: true },
  ]},
];

const renderValue = (value: boolean | string) => {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="text-green-500 mx-auto" size={24} />
    ) : (
      <X className="text-gray-500 mx-auto" size={24} />
    );
  }
  return <span className="text-white">{value}</span>;
};

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Compare Plans
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Find the perfect plan for your agency with our detailed feature comparison
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Features</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-white">
                  <div>Core Platform</div>
                  <div className="text-xl font-bold text-white mt-1">
                    <span className="line-through text-gray-500 text-sm">$1699</span> $999/mo
                  </div>
                  <div className="text-xs text-green-500 font-semibold">50 tokens included</div>
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-white bg-yellow-500/10">
                  <div className="flex items-center justify-center">
                    Core + 200 Tokens
                    <span className="ml-2 bg-yellow-500 text-gray-900 text-xs px-2 py-1 rounded">Popular</span>
                  </div>
                  <div className="text-xl font-bold text-yellow-500 mt-1">$1339/mo</div>
                  <div className="text-xs text-gray-400">Core + 200 token package</div>
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-white">
                  <div>Core + Custom Tokens</div>
                  <div className="text-xl font-bold text-white mt-1">Custom</div>
                  <div className="text-xs text-gray-400">Volume pricing available</div>
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
                  <Link href="/demo-request" className="inline-block px-6 py-2 border border-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-semibold">
                    Get Pricing
                  </Link>
                </td>
                <td className="px-6 py-4 text-center bg-yellow-500/10">
                  <Link href="/demo-request" className="inline-block px-6 py-2 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-colors text-sm font-semibold">
                    Get Pricing
                  </Link>
                </td>
                <td className="px-6 py-4 text-center">
                  <Link href="/demo-request" className="inline-block px-6 py-2 border border-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-semibold">
                    Contact Sales
                  </Link>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="mt-12 bg-gray-900 rounded-lg p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Transparent Token-Based Pricing</h2>
          <p className="text-gray-300 mb-6">
            <strong className="text-white">Core Platform: $999/month</strong> (marked down from $1699) includes 50 tokens to get you started.
            Need more? Add token packages anytime: 50 tokens ($85), 200 tokens ($340), 500 tokens ($650), or 1000 tokens ($1200).
            Contact <strong className="text-yellow-500">sales@tryquotely.com</strong> for enterprise volume discounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/demo-request" className="inline-flex items-center justify-center px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors">
              Email Sales Team
            </Link>
            <Link href="/calculator" className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
              Calculate Your ROI
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
