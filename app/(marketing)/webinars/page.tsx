import Link from 'next/link';
import { Video, Calendar, Clock, Users, PlayCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance Webinars & Training | Quotely',
  description: 'Join live webinars and watch on-demand training sessions covering insurance technology, agency management best practices, and Quotely platform features.',
  openGraph: {
    title: 'Insurance Webinars & Training | Quotely',
    description: 'Live webinars and on-demand training for insurance professionals.',
  },
};

const upcomingWebinars = [
  {
    title: 'AI in Insurance: Practical Applications for Agencies',
    date: 'Coming Soon',
    time: 'Register for Updates',
    description: 'Learn how AI is transforming insurance operations and how your agency can benefit.',
    speakers: ['Dustin Wyzard, Founder']
  },
  {
    title: 'Maximizing Your AMS: Tips & Tricks',
    date: 'Coming Soon',
    time: 'Register for Updates',
    description: 'Deep dive into Quotely AMS features that can save your team hours every week.',
    speakers: ['Quotely Product Team']
  }
];

const onDemandWebinars = [
  {
    title: 'Getting Started with Quotely',
    duration: '45 min',
    description: 'Complete walkthrough of the Quotely platform for new users.',
    category: 'Training'
  },
  {
    title: 'Comparative Rating Best Practices',
    duration: '30 min',
    description: 'Optimize your quoting workflow for speed and accuracy.',
    category: 'Best Practices'
  },
  {
    title: 'Client Retention Strategies for 2025',
    duration: '60 min',
    description: 'Proven techniques to reduce churn and increase policy renewals.',
    category: 'Strategy'
  },
  {
    title: 'Introduction to Gail AI',
    duration: '25 min',
    description: 'See how Gail can automate routine tasks and enhance client service.',
    category: 'Product Demo'
  }
];

export default function WebinarsPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Video className="w-16 h-16 mx-auto mb-6 text-yellow-500" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Webinars & Training
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Learn from industry experts and master the Quotely platform
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">
            Upcoming Webinars
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingWebinars.map((webinar, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-lg border border-gray-800"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Calendar className="w-5 h-5 text-yellow-500" />
                  <span className="text-yellow-500 font-medium">{webinar.date}</span>
                  <Clock className="w-5 h-5 text-gray-500 ml-4" />
                  <span className="text-gray-400">{webinar.time}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {webinar.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {webinar.description}
                </p>
                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{webinar.speakers.join(', ')}</span>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  Get Notified
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* On-Demand */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">
            On-Demand Library
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {onDemandWebinars.map((webinar, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-colors cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded">
                    {webinar.category}
                  </span>
                  <span className="text-sm text-gray-500">{webinar.duration}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">
                  {webinar.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {webinar.description}
                </p>
                <div className="flex items-center gap-2 text-yellow-500">
                  <PlayCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Watch Now</span>
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
              Want a Personalized Demo?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a one-on-one walkthrough tailored to your agency&apos;s needs.
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
