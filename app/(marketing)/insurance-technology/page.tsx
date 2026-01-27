import Link from 'next/link';
import { Cpu, Cloud, Shield, Zap, BarChart, Globe } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance Technology (InsurTech) Solutions | Quotely',
  description: 'Explore how insurance technology is transforming the industry. Learn about AI, automation, cloud solutions, and digital transformation for insurance agencies.',
  openGraph: {
    title: 'Insurance Technology (InsurTech) Solutions | Quotely',
    description: 'How insurance technology is transforming the industry.',
  },
};

const techTrends = [
  {
    icon: Cpu,
    title: 'Artificial Intelligence',
    description: 'AI is revolutionizing underwriting, claims processing, and customer service with intelligent automation.',
    impact: 'Up to 40% reduction in processing time'
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Cloud-based solutions enable anywhere access, automatic updates, and seamless scalability.',
    impact: 'Zero IT infrastructure costs'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced security measures protect sensitive client data and ensure regulatory compliance.',
    impact: 'Bank-level encryption standards'
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Workflow automation eliminates manual tasks and reduces errors across agency operations.',
    impact: 'Save 10+ hours per week per agent'
  },
  {
    icon: BarChart,
    title: 'Data Analytics',
    description: 'Real-time analytics provide insights into performance, trends, and growth opportunities.',
    impact: 'Data-driven decision making'
  },
  {
    icon: Globe,
    title: 'Digital Distribution',
    description: 'Online portals and mobile apps meet clients where they are with 24/7 self-service.',
    impact: 'Improved client satisfaction'
  }
];

export default function InsuranceTechnologyPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Insurance Technology
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              The future of insurance is here. Is your agency ready?
            </p>
            <Link
              href="/demo-request"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
            >
              See Modern InsurTech
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              The InsurTech Revolution
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Insurance technology (InsurTech) is transforming how agencies operate, compete, and serve clients.
              From AI-powered automation to cloud-based platforms, modern technology enables agencies of any
              size to deliver enterprise-level service while reducing costs and improving efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Trends */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Key Technology Trends
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techTrends.map((trend, index) => {
              const Icon = trend.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-yellow-500/50 transition-all duration-200"
                >
                  <div className="text-yellow-500 mb-4">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {trend.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {trend.description}
                  </p>
                  <div className="text-sm font-medium text-yellow-500">
                    {trend.impact}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quotely Approach */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              How Quotely Embraces InsurTech
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-500 mb-2">Built for the Modern Era</h3>
                <p className="text-gray-300">
                  Quotely was built from scratch with modern architecture, not adapted from legacy systems.
                  This means better performance, reliability, and the ability to adopt new technologies quickly.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-500 mb-2">AI at the Core</h3>
                <p className="text-gray-300">
                  With Gail AI integrated throughout, Quotely delivers intelligent automation that learns
                  and improves over time, not just simple rule-based workflows.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-500 mb-2">Open Integration</h3>
                <p className="text-gray-300">
                  Our API-first approach means Quotely plays well with your existing tools and can easily
                  connect with new technologies as they emerge.
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
              Ready to Modernize Your Agency?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              See how Quotely brings enterprise-level InsurTech to agencies of all sizes.
            </p>
            <Link
              href="/demo-request"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
            >
              Request Your Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
