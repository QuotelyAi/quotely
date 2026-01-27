import Link from 'next/link';
import { Layers, ArrowRight, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quotely Platform - Complete Insurance Agency Software | Quotely',
  description: 'Discover the Quotely platform - a complete insurance agency management solution combining AMS, CRM, rating, and AI automation in one unified system.',
  openGraph: {
    title: 'Quotely Platform - Complete Insurance Agency Software',
    description: 'Complete insurance agency management solution in one unified platform.',
  },
};

const platformComponents = [
  {
    name: 'Agency Management System',
    shortName: 'AMS',
    description: 'Manage policies, clients, and agency operations from a central hub.',
    link: '/products/ams',
    features: ['Policy Management', 'Document Storage', 'Workflow Automation', 'Reporting']
  },
  {
    name: 'Customer Relationship Management',
    shortName: 'CRM',
    description: 'Build stronger client relationships with intelligent CRM tools.',
    link: '/products/crm',
    features: ['Contact Management', 'Pipeline Tracking', 'Communication History', 'Task Management']
  },
  {
    name: 'Comparative Rating',
    shortName: 'Rater',
    description: 'Quote multiple carriers instantly with integrated rating.',
    link: '/products/rater',
    features: ['Multi-Carrier Quotes', 'Real-Time Rates', 'Submission Management', 'Bridging']
  },
  {
    name: 'AI Assistant',
    shortName: 'Gail',
    description: 'Automate tasks and enhance service with AI-powered assistance.',
    link: '/products/gail',
    features: ['24/7 Availability', 'Lead Qualification', 'Quote Assistance', 'Client Service']
  }
];

const benefits = [
  'Single login for all agency operations',
  'Eliminate duplicate data entry',
  'Real-time data sync across modules',
  'Unified reporting and analytics',
  'Consistent user experience',
  'Simplified training and onboarding',
  'Lower total cost of ownership',
  'Faster implementation time'
];

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Layers className="w-16 h-16 mx-auto mb-6 text-yellow-500" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Quotely Platform
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              One platform. Everything your agency needs.
            </p>
            <Link
              href="/demo-request"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
            >
              Explore the Platform
            </Link>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Built Different. Built Better.
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Unlike patchwork solutions cobbled together from acquisitions, Quotely was designed
              from day one as a unified platform. Every component works together seamlessly,
              sharing data instantly and providing a consistent experience throughout.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Components */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Platform Components
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformComponents.map((component, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-yellow-500/50 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-bold text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded">
                    {component.shortName}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {component.name}
                </h3>
                <p className="text-gray-400 mb-4">
                  {component.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {component.features.map((feature, i) => (
                    <span key={i} className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
                <Link
                  href={component.link}
                  className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 font-medium"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              The Unified Platform Advantage
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Visual */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            How It Works Together
          </h2>

          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <div className="text-center text-gray-300 font-mono text-sm">
              <pre className="whitespace-pre-wrap">
{`┌─────────────────────────────────────────┐
│              QUOTELY PLATFORM            │
├──────────┬──────────┬──────────┬────────┤
│   AMS    │   CRM    │  RATER   │  GAIL  │
│ Policies │ Clients  │  Quotes  │   AI   │
├──────────┴──────────┴──────────┴────────┤
│         UNIFIED DATA LAYER               │
├─────────────────────────────────────────┤
│      INTEGRATIONS & CARRIER CONNECTS     │
└─────────────────────────────────────────┘`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience the Platform?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              See how Quotely&apos;s unified platform can transform your agency.
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
