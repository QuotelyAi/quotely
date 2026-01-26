import Link from 'next/link';
import { Shield, TrendingUp, Users, Clock, Zap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quotely - AI-Powered Insurance Intelligence Platform',
  description: 'Transform your agency with AI-powered quoting that\'s 60% faster. Native carrier integrations, real-time rate comparison, and Gail AI voice assistant.',
  openGraph: {
    title: 'Quotely - AI-Powered Insurance Intelligence Platform',
    description: 'Transform your agency with AI-powered quoting that\'s 60% faster.',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section - Dark Theme */}
      <section className="relative overflow-hidden bg-gray-950 min-h-screen">
        {/* Large Faded Quotely Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div
            className="text-[25vw] font-black opacity-5 select-none"
            style={{
              color: '#FFD700',
              lineHeight: 1,
              transform: 'translateX(20%)',
            }}
          >
            Quotely
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Column - Main Content */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Zap size={18} className="text-yellow-500" />
                <span className="text-gray-400 text-sm font-medium">AI-Powered Insurance Platform</span>
              </div>

              <h1 className="mb-6 leading-tight">
                <span className="block text-5xl md:text-6xl lg:text-7xl font-black mb-2 text-yellow-500">
                  Quotely
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Insurance Intelligence
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Platform
                </span>
              </h1>

              <p className="text-lg text-gray-300 mb-8 max-w-xl">
                Transform your agency with AI-powered quoting that&apos;s <span className="text-yellow-500 font-semibold">60% faster</span>. Native carrier integrations, real-time rate comparison, and Gail AI voice assistant—all in one platform.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/demo-request"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  Get Started Free
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
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">60%</div>
                <div className="text-gray-400 text-sm">Faster Quote Generation</div>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">99.9%</div>
                <div className="text-gray-400 text-sm">Platform Uptime</div>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">15+</div>
                <div className="text-gray-400 text-sm">Carrier Integrations</div>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">120K</div>
                <div className="text-gray-400 text-sm">Annual Quotes Included</div>
              </div>

              <div className="col-span-2 bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">50</div>
                <div className="text-gray-400 text-sm">State Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need to Scale
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Modern tools built specifically for insurance agencies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-colors">
              <Clock className="text-yellow-500 mb-4" size={32} />
              <h3 className="text-lg font-semibold text-white mb-2">Streamlined Quoting</h3>
              <p className="text-gray-400 text-sm">
                Manage multi-carrier quotes efficiently with our intelligent workflow
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-colors">
              <Users className="text-yellow-500 mb-4" size={32} />
              <h3 className="text-lg font-semibold text-white mb-2">Team Collaboration</h3>
              <p className="text-gray-400 text-sm">
                Real-time quote sharing and task management for your team
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-colors">
              <TrendingUp className="text-yellow-500 mb-4" size={32} />
              <h3 className="text-lg font-semibold text-white mb-2">Business Analytics</h3>
              <p className="text-gray-400 text-sm">
                Track performance and quote conversion with detailed insights
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-colors">
              <Shield className="text-yellow-500 mb-4" size={32} />
              <h3 className="text-lg font-semibold text-white mb-2">Secure Platform</h3>
              <p className="text-gray-400 text-sm">
                Enterprise-grade security and data protection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-yellow-500/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4">Agency Management System</h3>
              <p className="text-gray-400 mb-6">
                Complete AMS solution for managing policies, clients, and operations efficiently.
              </p>
              <Link href="/products/ams" className="text-yellow-500 hover:text-yellow-400 font-medium">
                Learn more →
              </Link>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-yellow-500/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4">CRM</h3>
              <p className="text-gray-400 mb-6">
                Customer relationship management built specifically for insurance agencies.
              </p>
              <Link href="/products/crm" className="text-yellow-500 hover:text-yellow-400 font-medium">
                Learn more →
              </Link>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-yellow-500/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4">Rating Engine</h3>
              <p className="text-gray-400 mb-6">
                Compare rates from multiple carriers to find the best coverage options.
              </p>
              <Link href="/products/rater" className="text-yellow-500 hover:text-yellow-400 font-medium">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Agency?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of insurance professionals using Quotely to streamline their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo-request"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Get Started Free
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
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-white font-medium rounded-lg hover:border-yellow-500 hover:text-yellow-500 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
