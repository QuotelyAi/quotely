import Link from 'next/link';
import { ArrowRight, Layers, Users, Calculator, Mic } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Quotely Works — AI Quoting, AMS, CRM, and Voice in One Platform',
  description:
    'See how Quotely turns a client intake into a bound policy in minutes. AMS, CRM, AI rating, and Gail voice — all in one platform. Auto in 4.8s. Full bundle under 22s.',
  openGraph: {
    title: 'How Quotely Works',
    description:
      'From client intake to bound policy — see how Quotely combines AMS, CRM, AI rating, and voice in a single platform.',
  },
};

const steps = [
  {
    number: '01',
    title: 'Capture the client',
    body:
      'New leads land in Quotely via web form, inbound call (Gail AI voice), or import from your existing AMS. Client and household data is normalized and deduplicated automatically.',
  },
  {
    number: '02',
    title: 'Run the quote',
    body:
      'Quotely fires the quote against TurboRater — 200+ personal lines carriers — in parallel. Auto quotes return in ~4.8 seconds. Home in ~17 seconds. A full auto + home bundle in under 22 seconds, versus 10–15 minutes in legacy raters.',
  },
  {
    number: '03',
    title: 'Bind, store, and follow up',
    body:
      'Pick the carrier, bind the policy, and Quotely writes it back to your AMS (NowCerts, GSIL, Applied Epic, Vertafore, HawkSoft) with the client, policy, and document record in place. CRM follow-up sequences run automatically for renewals and cross-sell.',
  },
];

const pillars = [
  {
    icon: Layers,
    title: 'AMS',
    body: 'Policies, clients, documents, and compliance in one place. Two-way sync with the AMS you already use.',
    href: '/products/ams',
  },
  {
    icon: Users,
    title: 'CRM',
    body: 'Lead pipeline, renewal reminders, cross-sell campaigns — built for agencies, not repurposed from generic CRMs.',
    href: '/products/crm',
  },
  {
    icon: Calculator,
    title: 'AI Rater',
    body: 'Multi-carrier quoting powered by TurboRater. No per-quote fees, no swivel-chairing between rater tabs.',
    href: '/products/rater',
  },
  {
    icon: Mic,
    title: 'Gail (Voice AI)',
    body: 'Answers inbound calls, captures intake, and starts quotes without a human on the phone. 24/7.',
    href: '/products/gail',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">How Quotely Works</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            From client intake to bound policy — AMS, CRM, AI rating, and voice, all in one platform. A full auto + home
            bundle quote in <span className="text-yellow-400 font-semibold">under 22 seconds</span>.
          </p>
          <Link
            href="/demo-request"
            className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
          >
            Request a Demo
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <section className="py-16 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col md:flex-row gap-6 bg-gray-900 border border-gray-800 rounded-lg p-8"
              >
                <div className="text-yellow-500 text-5xl font-bold md:w-24 shrink-0">{step.number}</div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">{step.title}</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Four products, one platform</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Use them together or drop Quotely in alongside your existing stack. Pricing is flat — everything included.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Link
                  key={pillar.title}
                  href={pillar.href}
                  className="bg-gray-950 p-8 rounded-lg border border-gray-800 hover:border-yellow-500 transition-colors block"
                >
                  <Icon className="w-8 h-8 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-gray-400 mb-3">{pillar.body}</p>
                  <span className="text-yellow-500 text-sm font-medium inline-flex items-center gap-1">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-primary-800 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">See it on your own book</h2>
          <p className="text-xl text-white/90 mb-8">
            A 20-minute walkthrough with a real quote from your existing carriers. No slides.
          </p>
          <Link
            href="/demo-request"
            className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
          >
            Request a Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
