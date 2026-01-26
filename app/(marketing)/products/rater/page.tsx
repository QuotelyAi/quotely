import Link from 'next/link';
import { Zap, Target, Clock, DollarSign, CheckCircle, TrendingUp } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI-Powered Rating Engine - Quotely',
  description: 'AI-powered insurance rating engine launching with Auto (Q4 2025) and Home (Q1 2026). Fast, accurate quotes with multi-carrier comparison.',
  openGraph: {
    title: 'AI-Powered Rating Engine - Quotely',
    description: 'AI-powered insurance rating engine. Fast, accurate quotes with multi-carrier comparison.',
  },
};

const features = [
  {
    icon: Zap,
    title: 'AI-Powered Rating',
    description: 'Advanced algorithms analyze risk factors and carrier appetite to provide accurate quotes instantly.'
  },
  {
    icon: Target,
    title: 'Multi-Carrier Comparison',
    description: 'Compare rates from multiple carriers simultaneously to find the best coverage for your clients.'
  },
  {
    icon: Clock,
    title: 'Instant Quotes',
    description: 'Generate quotes in seconds, not hours. Dramatically reduce quote turnaround time.'
  },
  {
    icon: DollarSign,
    title: 'Dynamic Pricing',
    description: 'Real-time pricing updates based on carrier changes, market conditions, and client profile.'
  },
  {
    icon: CheckCircle,
    title: 'Accuracy Guarantee',
    description: 'Industry-leading accuracy with built-in validation to minimize errors and re-quotes.'
  },
  {
    icon: TrendingUp,
    title: 'Quote Analytics',
    description: 'Track quote-to-bind ratios, win rates, and competitive positioning across carriers.'
  }
];

const supportedLines = [
  {
    name: 'Auto Insurance',
    timeline: 'Q4 2025',
  },
  {
    name: 'Home Insurance',
    timeline: 'Q1 2026',
  }
];

export default function RaterPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 via-secondary-600 to-yellow-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              Powered by Artificial Intelligence
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Rating Engine
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Coming Q4 2025 - Quote smarter, faster, and more accurately with intelligent automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo-request"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
              >
                Request Demo
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors text-lg"
              >
                Try Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              The Future of Insurance Quoting
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Quotely&apos;s AI-Powered Rating Engine is launching with Auto Insurance (Q4 2025) and Home Insurance (Q1 2026).
              Our intelligent system will provide accurate, competitive quotes in seconds.
              Spend less time rating and more time serving your clients.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Intelligent Rating Features
            </h2>
            <p className="text-xl text-gray-400">
              Built with AI to give you a competitive edge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-yellow-500/50 hover:shadow-lg transition-all duration-200"
                >
                  <div className="text-yellow-500 mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Supported Lines */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Coverage Roadmap
            </h2>
            <p className="text-xl text-gray-300 mb-8 text-center">
              Our AI-powered rating engine is launching with Auto &amp; Home insurance:
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {supportedLines.map((line, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg border-2 border-yellow-500 shadow-lg"
                >
                  <div className="text-center">
                    <div className="inline-block px-4 py-2 bg-yellow-500 text-gray-900 rounded-full font-bold text-sm mb-4">
                      {line.timeline}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{line.name}</h3>
                    <p className="text-gray-400">Launch scheduled</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 mt-8">
              Additional commercial lines coming in future releases
            </p>
          </div>
        </div>
      </section>

      {/* Performance Goals */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Performance Goals
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-500 mb-2">85%</div>
              <div className="text-xl text-white">Faster Quoting</div>
              <p className="text-gray-400 mt-2">
                Target: Reduce quote time from hours to minutes
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-500 mb-2">High</div>
              <div className="text-xl text-white">Quote Accuracy</div>
              <p className="text-gray-400 mt-2">
                Goal: Industry-leading accuracy to reduce re-quotes
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-500 mb-2">3x</div>
              <div className="text-xl text-white">More Quotes</div>
              <p className="text-gray-400 mt-2">
                Target: Quote more opportunities in less time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              How Quotely Rater Works
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Enter Client Information
                  </h3>
                  <p className="text-gray-300">
                    Input basic client and coverage details through our intuitive interface or integrate
                    with your existing systems.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    AI Analyzes Risk
                  </h3>
                  <p className="text-gray-300">
                    Our AI engine analyzes hundreds of risk factors, carrier appetites, and market conditions
                    to identify the best coverage options.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Compare &amp; Present
                  </h3>
                  <p className="text-gray-300">
                    Receive multiple carrier quotes instantly, compare coverage and pricing, and present
                    professional proposals to your clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Note */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary-800/50 to-secondary-800/50 p-8 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Seamless Integration
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Quotely Rater integrates directly with our AMS and CRM, creating a unified workflow
              from prospect to policy. Or use our API to integrate with your existing systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products/ams"
                className="text-secondary-500 hover:text-secondary-400 font-medium"
              >
                View AMS Integration →
              </Link>
              <Link
                href="/products/crm"
                className="text-secondary-500 hover:text-secondary-400 font-medium"
              >
                View CRM Integration →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-800 to-secondary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Be Ready for Launch
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Register your interest for Quotely Rater. Auto Insurance launches Q4 2025, Home Insurance Q1 2026.
            </p>
            <Link
              href="/demo-request"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
            >
              Request Early Access
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
