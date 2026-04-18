import Link from 'next/link';
import { Puzzle, RefreshCw, Database, Cloud, Lock, Zap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integrations - Connect Your Insurance Tech Stack | Quotely',
  description: 'Quotely integrates with leading insurance carriers, rating engines, CRMs, and business tools. Connect your entire tech stack for seamless operations.',
  openGraph: {
    title: 'Integrations - Connect Your Insurance Tech Stack | Quotely',
    description: 'Connect your entire insurance tech stack with Quotely integrations.',
  },
};

type Partner = { name: string; note?: string; badge?: string };

const integrationCategories: Array<{
  title: string;
  description: string;
  partners: Partner[];
}> = [
  {
    title: 'Rating Engines',
    description:
      'TurboRater (200+ personal lines carriers) is included with every Quotely plan. EZLynx, ITC, and Applied Rater are optional — use your existing subscription if you already have one; Quotely quotes through TurboRater by default.',
    partners: [
      { name: 'TurboRater by Zywave', note: 'Included — 200+ carriers, no separate subscription', badge: 'Included' },
      { name: 'EZLynx Rating', note: 'Optional — bring your own EZLynx subscription' },
      { name: 'ITC Rater', note: 'Optional — bring your own ITC subscription' },
      { name: 'Applied Rater', note: 'Optional — bring your own Applied subscription' },
    ],
  },
  {
    title: 'Carriers',
    description: 'Direct connections to top insurance carriers',
    partners: [
      { name: 'Progressive' },
      { name: 'Travelers' },
      { name: 'Hartford' },
      { name: 'Liberty Mutual' },
      { name: 'Nationwide' },
      { name: 'And 100+ more' },
    ],
  },
  {
    title: 'AMS / CRM',
    description: 'Sync clients, policies, and documents with the agency management system you already run.',
    partners: [
      {
        name: 'NowCerts',
        note: 'Two-way sync of clients, policies, and documents. Popular across independent agencies.',
      },
      {
        name: 'MomentumAMP',
        note: 'NowCerts renewal + cross-sell automation add-on. Sync runs alongside the core NowCerts connector.',
      },
      {
        name: 'GSIL',
        note: 'Native GSIL AMS sync — client and policy data flows both ways. ~15-minute setup with your GSIL admin.',
      },
      { name: 'Applied Epic', note: 'Mid-to-large agency AMS. Client, policy, and document sync.' },
      { name: 'Vertafore AMS360', note: 'Client and policy sync for AMS360 agencies.' },
      { name: 'HawkSoft', note: 'Policy and activity sync for HawkSoft agencies.' },
    ],
  },
  {
    title: 'Communication',
    description: 'Connect your communication channels',
    partners: [
      { name: 'Vapi.ai' },
      { name: 'Twilio' },
      { name: 'RingCentral' },
      { name: 'Microsoft Teams' },
      { name: 'Slack' },
    ],
  },
  {
    title: 'Payment Processing',
    description: 'Accept payments and process premiums',
    partners: [{ name: 'Stripe' }, { name: 'ePayPolicy' }, { name: 'PaySimple' }, { name: 'QuickBooks' }],
  },
  {
    title: 'Document Management',
    description: 'Store and manage documents securely',
    partners: [{ name: 'DocuSign' }, { name: 'Google Drive' }, { name: 'Dropbox' }, { name: 'SharePoint' }],
  },
];

const features = [
  {
    icon: RefreshCw,
    title: 'Real-Time Sync',
    description: 'Data flows automatically between systems with bi-directional sync.'
  },
  {
    icon: Database,
    title: 'Single Source of Truth',
    description: 'Eliminate duplicate data entry with centralized information management.'
  },
  {
    icon: Cloud,
    title: 'Cloud-Native',
    description: 'API-first architecture connects with any modern software.'
  },
  {
    icon: Lock,
    title: 'Secure Connections',
    description: 'Enterprise-grade security with encrypted data transfer.'
  },
  {
    icon: Zap,
    title: 'Easy Setup',
    description: 'Most integrations connect in minutes with guided setup.'
  },
  {
    icon: Puzzle,
    title: 'Custom APIs',
    description: 'Build custom integrations with our developer-friendly API.'
  }
];

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Powerful Integrations
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Connect Quotely with your existing tools and carriers
            </p>
            <Link
              href="/demo-request"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
            >
              Explore Integrations
            </Link>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Integration Partners
            </h2>
            <p className="text-xl text-gray-400">
              Connect with the tools you already use
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-lg border border-gray-800"
              >
                <h3 className="text-xl font-bold text-yellow-500 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {category.description}
                </p>
                <div className="space-y-3">
                  {category.partners.map((partner, i) => (
                    <div key={i} className="text-gray-300 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full shrink-0"></div>
                        <span className="font-medium text-white">{partner.name}</span>
                        {partner.badge && (
                          <span className="ml-1 text-[10px] uppercase tracking-wide text-gray-900 bg-yellow-500 px-2 py-0.5 rounded font-semibold">
                            {partner.badge}
                          </span>
                        )}
                      </div>
                      {partner.note && (
                        <div className="pl-3.5 text-gray-400 text-xs mt-0.5">{partner.note}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Integration Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="text-yellow-500 flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need a Custom Integration?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our team can help you connect Quotely with any system in your tech stack.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
