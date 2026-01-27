import Link from 'next/link';
import { Bot, MessageSquare, Brain, Zap, Clock, TrendingUp } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gail AI - Intelligent Insurance Assistant | Quotely',
  description: 'Meet Gail, the AI-powered insurance assistant that helps agents quote faster, serve clients better, and automate routine tasks. Built by Nothing Technologies.',
  openGraph: {
    title: 'Gail AI - Intelligent Insurance Assistant | Quotely',
    description: 'AI-powered insurance assistant that helps agents quote faster and serve clients better.',
  },
};

const features = [
  {
    icon: MessageSquare,
    title: 'Conversational Quoting',
    description: 'Gail guides clients through the quoting process naturally, gathering information through conversation instead of forms.'
  },
  {
    icon: Brain,
    title: 'Smart Recommendations',
    description: 'AI-powered coverage recommendations based on client needs, risk profiles, and carrier appetite.'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Gail never sleeps. Handle inquiries, start quotes, and answer questions around the clock.'
  },
  {
    icon: Zap,
    title: 'Instant Processing',
    description: 'Process applications, pull reports, and generate quotes in seconds instead of hours.'
  },
  {
    icon: TrendingUp,
    title: 'Continuous Learning',
    description: 'Gail learns from every interaction, improving recommendations and responses over time.'
  },
  {
    icon: Bot,
    title: 'Seamless Handoff',
    description: 'When human expertise is needed, Gail seamlessly transfers to your agents with full context.'
  }
];

export default function GailPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <Bot className="w-5 h-5" />
              <span>Powered by Nothing Technologies</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet Gail AI
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Your intelligent insurance assistant that never sleeps
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo-request"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
              >
                See Gail in Action
              </Link>
              <Link
                href="/products/ams"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-800 transition-colors text-lg"
              >
                Explore Platform
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
              AI That Understands Insurance
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Gail is not just another chatbot. Built specifically for insurance, Gail understands
              coverage types, carrier requirements, underwriting guidelines, and compliance rules.
              She speaks insurance fluently so your clients don&apos;t have to.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              What Gail Can Do
            </h2>
            <p className="text-xl text-gray-400">
              Powerful AI capabilities designed for insurance workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-yellow-500/50 transition-all duration-200"
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

      {/* Use Cases */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Gail at Work
            </h2>

            <div className="space-y-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-500 mb-3">Lead Qualification</h3>
                <p className="text-gray-300">
                  Gail engages website visitors, qualifies leads, and schedules appointments with agents
                  for high-value prospects while handling routine inquiries independently.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-500 mb-3">Quote Assistance</h3>
                <p className="text-gray-300">
                  Walk clients through the quoting process conversationally, gathering all required
                  information and explaining coverage options in plain language.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-500 mb-3">Policy Service</h3>
                <p className="text-gray-300">
                  Answer policy questions, process certificate requests, and handle endorsement
                  inquiries without agent intervention.
                </p>
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
              Ready to Meet Your New AI Assistant?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              See how Gail can transform your agency&apos;s efficiency and client experience.
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
