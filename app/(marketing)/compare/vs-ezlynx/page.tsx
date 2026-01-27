import Link from 'next/link';
import { Check, X, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quotely vs EZLynx - Insurance Software Comparison | Quotely',
  description: 'Compare Quotely and EZLynx features, pricing, and capabilities. See why agencies are switching to Quotely for modern AMS, CRM, and rating solutions.',
  openGraph: {
    title: 'Quotely vs EZLynx - Insurance Software Comparison',
    description: 'See how Quotely compares to EZLynx for insurance agency management.',
  },
};

const comparisonData = [
  { feature: 'AI-Powered Automation', quotely: true, ezlynx: false },
  { feature: 'Integrated AMS + CRM + Rater', quotely: true, ezlynx: 'Partial' },
  { feature: 'Modern User Interface', quotely: true, ezlynx: false },
  { feature: 'Real-Time Comparative Rating', quotely: true, ezlynx: true },
  { feature: 'Client Self-Service Portal', quotely: true, ezlynx: true },
  { feature: 'Voice AI Assistant (Gail)', quotely: true, ezlynx: false },
  { feature: 'Mobile-First Design', quotely: true, ezlynx: 'Partial' },
  { feature: 'Custom Workflow Builder', quotely: true, ezlynx: false },
  { feature: 'Agency Analytics Dashboard', quotely: true, ezlynx: true },
  { feature: 'QUAD Management System', quotely: true, ezlynx: false },
  { feature: 'API Access', quotely: true, ezlynx: 'Limited' },
  { feature: 'Transparent Pricing', quotely: true, ezlynx: false },
];

export default function VsEzlynxPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Quotely vs EZLynx
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              See how Quotely compares to legacy insurance software
            </p>
            <Link
              href="/demo-request"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
            >
              Try Quotely Free
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Feature Comparison
          </h2>

          <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-gray-800 p-4">
              <div className="text-gray-300 font-semibold">Feature</div>
              <div className="text-center text-yellow-500 font-semibold">Quotely</div>
              <div className="text-center text-gray-400 font-semibold">EZLynx</div>
            </div>

            {/* Rows */}
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-850'} border-t border-gray-800`}
              >
                <div className="text-gray-300">{row.feature}</div>
                <div className="text-center">
                  {row.quotely === true ? (
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  ) : row.quotely === false ? (
                    <X className="w-5 h-5 text-red-500 mx-auto" />
                  ) : (
                    <span className="text-yellow-500 text-sm">{row.quotely}</span>
                  )}
                </div>
                <div className="text-center">
                  {row.ezlynx === true ? (
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  ) : row.ezlynx === false ? (
                    <X className="w-5 h-5 text-red-500 mx-auto" />
                  ) : (
                    <span className="text-gray-500 text-sm">{row.ezlynx}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Switch */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Why Agencies Switch to Quotely
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-500 mb-2">Modern Technology</h3>
                <p className="text-gray-300">
                  Built from the ground up with modern architecture, Quotely offers speed and reliability
                  that legacy systems simply cannot match.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-500 mb-2">AI Integration</h3>
                <p className="text-gray-300">
                  With Gail AI built-in, Quotely automates routine tasks and provides intelligent
                  assistance that saves hours every week.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-500 mb-2">Unified Platform</h3>
                <p className="text-gray-300">
                  No more juggling multiple systems. Quotely combines AMS, CRM, and rating in one
                  seamless platform.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-500 mb-2">Better Support</h3>
                <p className="text-gray-300">
                  Our team is dedicated to your success with responsive support and hands-on
                  migration assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Make the Switch?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              See why agencies are choosing Quotely over EZLynx.
            </p>
            <Link
              href="/demo-request"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
            >
              Get Your Free Demo <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
