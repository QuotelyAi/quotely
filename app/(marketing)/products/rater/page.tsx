import Link from 'next/link';
import Image from 'next/image';
import { Zap, Target, Clock, DollarSign, CheckCircle, TrendingUp } from 'lucide-react';
import type { Metadata } from 'next';
import PartnerLogos from '@/components/PartnerLogos';

export const metadata: Metadata = {
  title: 'AI-Powered Rating Engine - Quotely',
  description: 'AI-powered insurance rating engine launching with Auto (Q4 2025) and Home (Q1 2026). Fast, accurate quotes with multi-carrier comparison through TurboRater by Zywave.',
  openGraph: {
    title: 'AI-Powered Rating Engine - Quotely',
    description: 'AI-powered insurance rating engine. Fast, accurate quotes with multi-carrier comparison.',
  },
};

const features = [
  { icon: Zap, title: 'AI-Powered Rating', description: 'Advanced algorithms analyze risk factors and carrier appetite to provide accurate quotes instantly.' },
  { icon: Target, title: 'Multi-Carrier Comparison', description: 'Compare rates from 200+ carriers simultaneously to find the best coverage for your clients.' },
  { icon: Clock, title: 'Instant Quotes', description: 'Auto in 4.8 seconds, home in 17 seconds. Full bundle under 22 seconds — not 10 to 15 minutes.' },
  { icon: DollarSign, title: 'Dynamic Pricing', description: 'Real-time pricing updates based on carrier changes, market conditions, and client profile.' },
  { icon: CheckCircle, title: 'Accuracy Guarantee', description: 'Industry-leading accuracy with built-in validation to minimize errors and re-quotes.' },
  { icon: TrendingUp, title: 'Quote Analytics', description: 'Track quote-to-bind ratios, win rates, and competitive positioning across carriers.' },
];

const supportedLines = [
  { name: 'Auto Insurance', timeline: 'Q4 2025' },
  { name: 'Home Insurance', timeline: 'Q1 2026' },
];

export default function RaterPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-200">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-950 py-20 transition-colors duration-200">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="text-[20vw] font-black opacity-5 select-none" style={{ color: '#FFD700', lineHeight: 1 }}>
            Rater
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6 px-5 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full">
              <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Powered by</span>
              <Image src="/logos/turborater.png" alt="TurboRater by Zywave" width={140} height={28} className="object-contain h-6 w-auto" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              AI-Powered Rating Engine
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
              Quote smarter, faster, and more accurately with intelligent automation across 200+ carriers.
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
                className="inline-flex items-center justify-center px-8 py-4 border border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-colors text-lg"
              >
                Try Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              The Future of Insurance Quoting
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Quotely&apos;s AI-Powered Rating Engine launches with Auto (Q4 2025) and Home (Q1 2026). Built on TurboRater
              by Zywave, our intelligent system delivers accurate, competitive quotes in seconds — so you can spend
              less time rating and more time serving your clients.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Intelligent Rating Features
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Built with AI to give you a competitive edge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-yellow-500/50 transition-colors"
              >
                <Icon className="text-yellow-500 mb-4" size={32} />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Roadmap */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Coverage Roadmap
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-12 text-center max-w-2xl mx-auto">
              Our AI-powered rating engine launches with Auto and Home insurance:
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {supportedLines.map((line) => (
                <div
                  key={line.name}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-yellow-500"
                >
                  <div className="text-center">
                    <div className="inline-block px-4 py-2 bg-yellow-500 text-gray-900 rounded-full font-bold text-sm mb-4">
                      {line.timeline}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{line.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Launch scheduled</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 dark:text-gray-500 text-sm mt-8">
              Additional commercial lines coming in future releases
            </p>
          </div>
        </div>
      </section>

      {/* Performance Goals */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Performance Goals
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { stat: '85%', label: 'Faster Quoting', desc: 'Target: Reduce quote time from hours to minutes' },
              { stat: 'High', label: 'Quote Accuracy', desc: 'Goal: Industry-leading accuracy to reduce re-quotes' },
              { stat: '3x', label: 'More Quotes', desc: 'Target: Quote more opportunities in less time' },
            ].map(({ stat, label, desc }) => (
              <div key={label} className="text-center">
                <div className="text-5xl font-bold text-yellow-500 mb-2">{stat}</div>
                <div className="text-xl text-gray-900 dark:text-white">{label}</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              How Quotely Rater Works
            </h2>
            <div className="space-y-8">
              {[
                { num: 1, title: 'Enter Client Information', desc: 'Input basic client and coverage details through our intuitive interface or integrate with your existing systems.' },
                { num: 2, title: 'AI Analyzes Risk', desc: 'Our AI engine analyzes hundreds of risk factors, carrier appetites, and market conditions to identify the best coverage options.' },
                { num: 3, title: 'Compare & Present', desc: 'Receive multiple carrier quotes instantly, compare coverage and pricing, and present professional proposals to your clients.' },
              ].map(({ num, title, desc }) => (
                <div key={num} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                    {num}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Note */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center bg-gray-50 dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Seamless Integration
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Quotely Rater integrates directly with our AMS and CRM, creating a unified workflow from prospect to policy.
              Or use our API to integrate with your existing systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products/ams" className="text-yellow-500 hover:text-yellow-400 font-medium">
                View AMS Integration →
              </Link>
              <Link href="/products/crm" className="text-yellow-500 hover:text-yellow-400 font-medium">
                View CRM Integration →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <PartnerLogos />

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Be Ready for Launch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Register your interest for Quotely Rater. Auto Insurance launches Q4 2025, Home Insurance Q1 2026.
          </p>
          <Link
            href="/demo-request"
            className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
          >
            Request Early Access
          </Link>
        </div>
      </section>
    </div>
  );
}
