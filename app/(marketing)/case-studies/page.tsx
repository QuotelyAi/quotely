import Link from 'next/link';
import { TrendingUp, Clock, Users, Award } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Success Stories & Case Studies | Quotely',
  description: 'See how insurance agencies are transforming their operations with Quotely. Real results from real agencies using our AMS, CRM, and rating solutions.',
  openGraph: {
    title: 'Customer Success Stories & Case Studies | Quotely',
    description: 'Real results from agencies using Quotely insurance software.',
  },
};

const caseStudies = [
  {
    agency: 'Midwest Insurance Group',
    location: 'Oklahoma',
    size: '15 agents',
    challenge: 'Struggling with multiple disconnected systems and manual data entry',
    solution: 'Implemented Quotely unified platform with Gail AI automation',
    results: [
      { metric: '40%', label: 'Faster quote turnaround' },
      { metric: '25%', label: 'Increase in policies written' },
      { metric: '15 hrs', label: 'Saved per week on admin tasks' }
    ],
    quote: 'Quotely transformed how we operate. Our team is more productive and our clients are happier.',
    author: 'Agency Principal'
  },
  {
    agency: 'Summit Insurance Partners',
    location: 'Texas',
    size: '8 agents',
    challenge: 'Needed to modernize operations while maintaining carrier relationships',
    solution: 'Migrated to Quotely with TurboRater integration',
    results: [
      { metric: '3x', label: 'Increase in quote volume' },
      { metric: '50%', label: 'Reduction in E&O exposure' },
      { metric: '98%', label: 'Client retention rate' }
    ],
    quote: 'The transition was seamless. Quotely understood our needs as an independent agency.',
    author: 'Managing Partner'
  },
  {
    agency: 'Coastal Insurance Solutions',
    location: 'Florida',
    size: '22 agents',
    challenge: 'High growth straining existing systems and processes',
    solution: 'Scaled operations with Quotely AMS and QUAD management',
    results: [
      { metric: '60%', label: 'Improvement in efficiency' },
      { metric: '$500K', label: 'Additional revenue captured' },
      { metric: '35%', label: 'Reduction in staff overtime' }
    ],
    quote: 'QUAD gave us the visibility we needed to scale without losing control.',
    author: 'CEO'
  }
];

const stats = [
  { icon: TrendingUp, value: '45%', label: 'Average efficiency improvement' },
  { icon: Clock, value: '12 hrs', label: 'Saved per agent per week' },
  { icon: Users, value: '500+', label: 'Agencies served' },
  { icon: Award, value: '98%', label: 'Customer satisfaction' }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Customer Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Real results from agencies transforming with Quotely
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <h3 className="text-2xl font-bold text-white">{study.agency}</h3>
                    <span className="text-gray-500">|</span>
                    <span className="text-gray-400">{study.location}</span>
                    <span className="text-gray-500">|</span>
                    <span className="text-gray-400">{study.size}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-sm font-semibold text-yellow-500 uppercase tracking-wide mb-2">
                        Challenge
                      </h4>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-yellow-500 uppercase tracking-wide mb-2">
                        Solution
                      </h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {study.results.map((result, i) => (
                      <div key={i} className="bg-gray-800 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-yellow-500">{result.metric}</div>
                        <div className="text-gray-400 text-sm">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  <blockquote className="border-l-4 border-yellow-500 pl-4">
                    <p className="text-gray-300 italic mb-2">&ldquo;{study.quote}&rdquo;</p>
                    <cite className="text-gray-500 text-sm">- {study.author}</cite>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of agencies achieving better results with Quotely.
            </p>
            <Link
              href="/demo-request"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
