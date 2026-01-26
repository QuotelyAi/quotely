import Link from 'next/link';
import { Users, MessageSquare, Calendar, TrendingUp, Mail, Bell } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Relationship Management (CRM) - Quotely',
  description: 'Insurance-specific CRM built to help you nurture relationships, track interactions, and grow your book of business.',
  openGraph: {
    title: 'Customer Relationship Management (CRM) - Quotely',
    description: 'Insurance-specific CRM built to help you nurture relationships and grow your book of business.',
  },
};

const features = [
  {
    icon: Users,
    title: 'Contact Management',
    description: 'Centralize all client and prospect information with detailed profiles and interaction history.'
  },
  {
    icon: MessageSquare,
    title: 'Communication Tracking',
    description: 'Track every interaction across email, phone, and meetings in one unified timeline.'
  },
  {
    icon: Calendar,
    title: 'Task & Calendar Management',
    description: 'Never miss a follow-up with automated reminders and integrated calendar syncing.'
  },
  {
    icon: TrendingUp,
    title: 'Sales Pipeline',
    description: 'Visualize your sales process and track opportunities from lead to close.'
  },
  {
    icon: Mail,
    title: 'Email Integration',
    description: 'Seamlessly integrate with your email to track conversations and automate follow-ups.'
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Stay on top of renewals, birthdays, and important milestones with intelligent alerts.'
  }
];

export default function CRMPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-500 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Customer Relationship Management
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Build stronger relationships and grow your book of business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo-request"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
              >
                Request Demo
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-secondary-600 transition-colors text-lg"
              >
                View Pricing
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
              Built for Insurance Professionals
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Quotely&apos;s CRM is specifically designed for insurance agents and agencies. Track policy renewals,
              cross-sell opportunities, and client touchpoints all in one place. Our insurance-focused features
              help you provide better service and grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Everything You Need to Manage Relationships
            </h2>
            <p className="text-xl text-gray-400">
              Purpose-built for insurance agencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-secondary-500/50 hover:shadow-lg transition-all duration-200"
                >
                  <div className="text-secondary-500 mb-4">
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

      {/* Key Benefits */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Drive Growth with Better Relationships
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-3">
                  Increase Retention
                </h3>
                <p className="text-gray-300">
                  Automated renewal reminders and proactive outreach help you stay connected with
                  clients and reduce policy lapses.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-3">
                  Cross-Sell More
                </h3>
                <p className="text-gray-300">
                  Identify coverage gaps and opportunities to expand your relationship with
                  each client through intelligent insights.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-3">
                  Convert More Leads
                </h3>
                <p className="text-gray-300">
                  Track lead sources, follow-up activities, and conversion rates to optimize
                  your sales process and close more business.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-3">
                  Save Time Daily
                </h3>
                <p className="text-gray-300">
                  Automate routine tasks, schedule follow-ups, and access client information
                  instantly to focus on what matters most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Works Seamlessly with Your AMS
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Quotely CRM integrates perfectly with our Agency Management System, giving you a
              complete view of each client relationship. All policy data, documents, and interactions
              in one unified platform.
            </p>
            <Link
              href="/products/ams"
              className="text-secondary-500 hover:text-secondary-400 font-medium text-lg"
            >
              Learn more about Quotely AMS →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Start Building Stronger Relationships Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              See how Quotely CRM can help you provide better service and grow your agency.
            </p>
            <Link
              href="/demo-request"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
            >
              Schedule Your Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
