import Link from 'next/link';
import { Shield, TrendingUp, Users, Clock, Zap } from 'lucide-react';
import type { Metadata } from 'next';
import PartnerLogos from '@/components/PartnerLogos';

export const metadata: Metadata = {
  title: 'Quotely - AI-Powered Insurance Intelligence Platform',
  description: 'Transform your agency with AI-powered quoting. Full auto + home bundle in under 22 seconds. 200+ carrier integrations via TurboRater, and Gail AI voice assistant — all in one platform.',
  openGraph: {
    title: 'Quotely - AI-Powered Insurance Intelligence Platform',
    description: 'Full auto + home bundle quoted in under 22 seconds. 200+ carriers via TurboRater.',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-200">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-950 min-h-screen transition-colors duration-200">
        {/* Large Faded Quotely Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div
            className="text-[25vw] font-black opacity-5 select-none"
            style={{ color: '#FFD700', lineHeight: 1, transform: 'translateX(20%)' }}
          >
            Quotely
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap size={18} className="text-yellow-500" />
                <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">AI-Powered Insurance Platform</span>
              </div>

              <PartnerLogos variant="compact" />

              <h1 className="mb-6 leading-tight">
                <span className="block text-5xl md:text-6xl lg:text-7xl font-black mb-2 text-yellow-500">
                  Quotely
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                  Insurance Intelligence
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                  Platform
                </span>
              </h1>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
                Auto quoted in 4.8 seconds. Home in 17 seconds. Full bundle <span className="text-yellow-500 font-semibold">under 22 seconds</span> — not 10–15 minutes. 200+ carriers via TurboRater, and Gail AI voice assistant — all in one platform.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/demo-request"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  Request a Demo
                  <span>→</span>
                </Link>
                <a
                  href="https://quotely.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-colors"
                >
                  See Platform Demo
                </a>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { stat: '<22s', label: 'Full Bundle Quote*' },
                { stat: '99.5%+', label: 'Infra SLA Uptime' },
                { stat: '200+', label: 'Carriers via TurboRater' },
              ].map(({ stat, label }) => (
                <div key={label} className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">{stat}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{label}</div>
                </div>
              ))}
              <div className="col-span-2 bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">50 + DC</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">State Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to Scale
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Modern tools built specifically for insurance agencies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: 'Streamlined Quoting', desc: 'Manage multi-carrier quotes efficiently with our intelligent workflow' },
              { icon: Users, title: 'Team Collaboration', desc: 'Real-time quote sharing and task management for your team' },
              { icon: TrendingUp, title: 'Business Analytics', desc: 'Track performance and quote conversion with detailed insights' },
              { icon: Shield, title: 'Secure Platform', desc: 'Enterprise-grade security and data protection' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-yellow-500/50 transition-colors">
                <Icon className="text-yellow-500 mb-4" size={32} />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <PartnerLogos />

      {/* Products Section */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Agency Management System', desc: 'Complete AMS solution for managing policies, clients, and operations efficiently.', href: '/products/ams' },
              { title: 'CRM', desc: 'Customer relationship management built specifically for insurance agencies.', href: '/products/crm' },
              { title: 'Rating Engine', desc: 'Compare rates from multiple carriers to find the best coverage options.', href: '/products/rater' },
            ].map(({ title, desc, href }) => (
              <div key={title} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800 hover:border-yellow-500/50 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{desc}</p>
                <Link href={href} className="text-yellow-500 hover:text-yellow-400 font-medium">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Transform Your Agency?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of insurance professionals using Quotely to streamline their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo-request"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Request a Demo
            </Link>
            <a
              href="https://quotely.info"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-colors"
            >
              See Platform Demo
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-medium rounded-lg hover:border-yellow-500 hover:text-yellow-500 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
