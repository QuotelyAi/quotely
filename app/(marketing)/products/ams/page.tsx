import Link from 'next/link';
import { Building2, Users, FileText, BarChart3, Shield, Zap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agency Management System (AMS) - Quotely',
  description: 'Modern cloud-based Agency Management System designed for independent insurance agencies. Streamline operations, improve client service, and grow your business.',
  openGraph: {
    title: 'Agency Management System (AMS) - Quotely',
    description: 'Modern cloud-based Agency Management System designed for independent insurance agencies.',
  },
};

const features = [
  {
    icon: Building2,
    title: 'Policy Management',
    description: 'Comprehensive policy lifecycle management from quote to renewal with automated workflows.'
  },
  {
    icon: Users,
    title: 'Client Portal',
    description: 'Give your clients 24/7 access to policies, documents, and self-service capabilities.'
  },
  {
    icon: FileText,
    title: 'Document Management',
    description: 'Centralized document storage with AI-powered search and automated organization.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Real-time insights into agency performance, revenue, and growth opportunities.'
  },
  {
    icon: Shield,
    title: 'Compliance & Security',
    description: 'Built-in compliance tools and bank-level security to protect sensitive data.'
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks and streamline operations with intelligent workflows.'
  }
];

export default function AMSPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Agency Management System
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              The modern AMS built for independent insurance agencies
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
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-800 transition-colors text-lg"
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
              Everything You Need to Run Your Agency
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Quotely&apos;s Agency Management System combines powerful features with an intuitive interface
              to help you manage policies, clients, and operations more efficiently. Built specifically
              for independent agencies, our AMS grows with your business.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need in one integrated platform
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

      {/* Benefits Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Why Choose Quotely AMS?
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Quick Implementation
                  </h3>
                  <p className="text-gray-300">
                    Get up and running in days, not months. Our intuitive system requires minimal training
                    and includes migration support from your existing AMS.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Affordable Pricing
                  </h3>
                  <p className="text-gray-300">
                    No hidden fees or long-term contracts. Pay only for what you use with transparent,
                    scalable pricing that grows with your agency.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Dedicated Support
                  </h3>
                  <p className="text-gray-300">
                    Our team is always here to help. Get access to phone, email, and chat support,
                    plus comprehensive documentation and training resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Agency?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of agencies using Quotely AMS to streamline operations and grow their business.
            </p>
            <Link
              href="/demo-request"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
            >
              Schedule Your Demo Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
