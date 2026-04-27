import Link from 'next/link';
import Image from 'next/image';
import { Users, MessageSquare, Calendar, TrendingUp, Mail, Bell } from 'lucide-react';
import type { Metadata } from 'next';
import PartnerLogos from '@/components/PartnerLogos';

export const metadata: Metadata = {
  title: 'Customer Relationship Management (CRM) - Quotely',
  description: 'Insurance-specific CRM powered by Momentum by NowCerts. Nurture relationships, track interactions, and grow your book of business.',
  openGraph: {
    title: 'Customer Relationship Management (CRM) - Quotely',
    description: 'Insurance-specific CRM built to help you nurture relationships and grow your book of business.',
  },
};

const features = [
  { icon: Users, title: 'Contact Management', description: 'Centralize all client and prospect information with detailed profiles and interaction history.' },
  { icon: MessageSquare, title: 'Communication Tracking', description: 'Track every interaction across email, phone, and meetings in one unified timeline.' },
  { icon: Calendar, title: 'Task & Calendar Management', description: 'Never miss a follow-up with automated reminders and integrated calendar syncing.' },
  { icon: TrendingUp, title: 'Sales Pipeline', description: 'Visualize your sales process and track opportunities from lead to close.' },
  { icon: Mail, title: 'Email Integration', description: 'Seamlessly integrate with your email to track conversations and automate follow-ups.' },
  { icon: Bell, title: 'Smart Notifications', description: 'Stay on top of renewals, birthdays, and important milestones with intelligent alerts.' },
];

const benefits = [
  { title: 'Increase Retention', desc: 'Automated renewal reminders and proactive outreach help you stay connected with clients and reduce policy lapses.' },
  { title: 'Cross-Sell More', desc: 'Identify coverage gaps and opportunities to expand your relationship with each client through intelligent insights.' },
  { title: 'Convert More Leads', desc: 'Track lead sources, follow-up activities, and conversion rates to optimize your sales process and close more business.' },
  { title: 'Save Time Daily', desc: 'Automate routine tasks, schedule follow-ups, and access client information instantly to focus on what matters most.' },
];

export default function CRMPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-200">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-950 py-20 transition-colors duration-200">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="text-[20vw] font-black opacity-5 select-none" style={{ color: '#FFD700', lineHeight: 1 }}>
            CRM
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6 px-5 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full">
              <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Powered by</span>
              <Image src="/logos/momentum-nowcerts.png" alt="Momentum by NowCerts" width={140} height={28} className="object-contain h-7 w-auto" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Customer Relationship Management
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
              Build stronger relationships and grow your book of business with insurance-specific CRM tools.
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
                className="inline-flex items-center justify-center px-8 py-4 border border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-colors text-lg"
              >
                View Pricing
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
              Built for Insurance Professionals
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Quotely&apos;s CRM is built on Momentum by NowCerts, designed specifically for insurance agents and agencies.
              Track policy renewals, cross-sell opportunities, and client touchpoints all in one place. Our insurance-focused
              features help you provide better service and grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to Manage Relationships
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Purpose-built for insurance agencies
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

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Drive Growth with Better Relationships
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map(({ title, desc }) => (
                <div
                  key={title}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center bg-gray-50 dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Works Seamlessly with Your AMS
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Quotely CRM integrates perfectly with our Agency Management System, giving you a complete view of each
              client relationship. All policy data, documents, and interactions in one unified platform.
            </p>
            <Link
              href="/products/ams"
              className="text-yellow-500 hover:text-yellow-400 font-medium"
            >
              Learn more about Quotely AMS →
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <PartnerLogos />

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Start Building Stronger Relationships Today
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            See how Quotely CRM can help you provide better service and grow your agency.
          </p>
          <Link
            href="/demo-request"
            className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
          >
            Schedule Your Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
