import type { Metadata } from 'next';
import Link from 'next/link';
import { Book, FileText, Code, Lightbulb, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Documentation - Quotely Insurance Platform',
  description: 'Complete documentation for Quotely insurance platform. Learn how to use AMS, CRM, Rater, and API integration.',
  openGraph: {
    title: 'Documentation - Quotely Insurance Platform',
    description: 'Complete documentation for Quotely insurance platform.',
  },
};

const sections = [
  {
    icon: Book,
    title: 'Getting Started',
    description: 'Learn the basics of Quotely and get up and running quickly',
    topics: [
      'Platform Overview',
      'Account Setup',
      'First Quote Tutorial',
      'User Interface Guide'
    ]
  },
  {
    icon: FileText,
    title: 'User Guides',
    description: 'Comprehensive guides for all Quotely features',
    topics: [
      'AMS User Guide',
      'CRM User Guide',
      'Rater User Guide',
      'Token Management'
    ]
  },
  {
    icon: Code,
    title: 'API Documentation',
    description: 'Integrate Quotely with your existing systems',
    topics: [
      'API Reference',
      'Authentication',
      'Webhooks',
      'Code Examples'
    ],
    link: '/api'
  },
  {
    icon: Lightbulb,
    title: 'Best Practices',
    description: 'Tips and strategies to get the most from Quotely',
    topics: [
      'Workflow Optimization',
      'Token Usage Strategies',
      'Client Communication',
      'Reporting & Analytics'
    ]
  }
];

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-950 py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Everything you need to master Quotely
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full px-6 py-4 rounded-lg bg-gray-800 border border-gray-700 text-white text-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900 border-2 border-gray-800 rounded-lg p-8 hover:border-yellow-500/50 transition-all"
                >
                  <div className="text-yellow-500 mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">
                    {section.title}
                  </h2>
                  <p className="text-gray-400 mb-6">
                    {section.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {section.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-gray-300">
                        <ArrowRight className="w-4 h-4 mr-2 text-yellow-500" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                  {section.link ? (
                    <Link
                      href={section.link}
                      className="inline-flex items-center text-yellow-500 hover:text-yellow-400 font-semibold"
                    >
                      View Documentation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center text-gray-500 font-semibold">
                      Coming Soon
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Documentation In Development
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Our comprehensive documentation is being developed alongside the platform launch.
              Auto Insurance documentation will be available with the launch, followed by
              Home Insurance documentation shortly after.
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

      {/* Support CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 text-center border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">
              Need Help?
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Our support team is here to help you succeed with Quotely
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/support"
                className="inline-flex items-center justify-center px-8 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Contact Support
              </Link>
              <Link
                href="/demo-request"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
