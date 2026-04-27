import Link from 'next/link';
import Image from 'next/image';
import { Building2, Users, FileText, BarChart3, Shield, Zap } from 'lucide-react';
import type { Metadata } from 'next';
import PartnerLogos from '@/components/PartnerLogos';

export const metadata: Metadata = {
  title: 'Agency Management System (AMS) - Quotely',
  description: 'Modern cloud-based Agency Management System powered by Momentum by NowCerts. Streamline operations, improve client service, and grow your business.',
  openGraph: {
    title: 'Agency Management System (AMS) - Quotely',
    description: 'Modern cloud-based Agency Management System designed for independent insurance agencies.',
  },
};

const features = [
  { icon: Building2, title: 'Policy Management', description: 'Comprehensive policy lifecycle management from quote to renewal with automated workflows.' },
  { icon: Users, title: 'Client Portal', description: 'Give your clients 24/7 access to policies, documents, and self-service capabilities.' },
  { icon: FileText, title: 'Document Management', description: 'Centralized document storage with AI-powered search and automated organization.' },
  { icon: BarChart3, title: 'Analytics & Reporting', description: 'Real-time insights into agency performance, revenue, and growth opportunities.' },
  { icon: Shield, title: 'Compliance & Security', description: 'Built-in compliance tools and bank-level security to protect sensitive data.' },
  { icon: Zap, title: 'Workflow Automation', description: 'Automate repetitive tasks and streamline operations with intelligent workflows.' },
];

export default function AMSPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-200">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-950 py-20 transition-colors duration-200">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="text-[20vw] font-black opacity-5 select-none" style={{ color: '#FFD700', lineHeight: 1 }}>
            AMS
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6 px-5 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full">
              <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Powered by</span>
              <Image src="/logos/momentum-nowcerts.png" alt="Momentum by NowCerts" width={140} height={28} className="object-contain h-7 w-auto" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Agency Management System
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
              The modern AMS built for independent insurance agencies, with IVANS carrier downloads and full policy lifecycle automation.
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
              Everything You Need to Run Your Agency
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Quotely&apos;s Agency Management System is built on Momentum by NowCerts and combines powerful features
              with an intuitive interface to help you manage policies, clients, and operations more efficiently.
              IVANS-integrated carrier downloads keep your data current automatically.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need in one integrated platform
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Why Choose Quotely AMS?
            </h2>
            <div className="space-y-8">
              {[
                { num: 1, title: 'Quick Implementation', desc: 'Get up and running in days, not months. Our intuitive system requires minimal training and includes migration support from your existing AMS.' },
                { num: 2, title: 'Affordable Pricing', desc: 'No hidden fees or long-term contracts. Pay only for what you use with transparent, scalable pricing that grows with your agency.' },
                { num: 3, title: 'Dedicated Support', desc: 'Our team is always here to help. Get access to phone, email, and chat support, plus comprehensive documentation and training resources.' },
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

      {/* Partner Logos */}
      <PartnerLogos />

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Transform Your Agency?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Join hundreds of agencies using Quotely AMS to streamline operations and grow their business.
          </p>
          <Link
            href="/demo-request"
            className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
          >
            Schedule Your Demo Today
          </Link>
        </div>
      </section>
    </div>
  );
}
