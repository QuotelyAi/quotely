import type { Metadata } from 'next';
import Link from 'next/link';
import { MessageCircle, Mail, Book, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Support - Quotely Insurance Platform',
  description: 'Get help with Quotely. Email support available. Access documentation, FAQs, and community resources.',
  openGraph: {
    title: 'Support - Quotely Insurance Platform',
    description: 'Get help with Quotely insurance platform.',
  },
};

const supportChannels = [
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Get help via email from our support team',
    contact: 'support@tryquotely.com',
    availability: 'Coming with platform launch',
    cta: 'Send Email',
    href: 'mailto:support@tryquotely.com'
  }
];

const resources = [
  {
    icon: Book,
    title: 'Documentation',
    description: 'Platform documentation coming at launch',
    link: '/documentation'
  },
  {
    icon: MessageCircle,
    title: 'FAQ',
    description: 'Frequently asked questions',
    link: '/faq'
  }
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-950 py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Our support team is here to ensure your success with Quotely
            </p>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-400">
              Contact us about Quotely
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {supportChannels.map((channel, index) => {
              const IconComponent = channel.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900 border-2 border-gray-800 rounded-lg p-8 hover:border-yellow-500/50 transition-all"
                >
                  <div className="text-yellow-500 mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {channel.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {channel.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-300">
                      <Mail className="w-4 h-4 mr-2 text-yellow-500" />
                      {channel.contact}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-4 h-4 mr-2 text-yellow-500" />
                      {channel.availability}
                    </div>
                  </div>
                  <a
                    href={channel.href}
                    className="block w-full text-center px-6 py-3 rounded-lg font-semibold bg-yellow-500 text-gray-900 hover:bg-yellow-400 transition-all"
                  >
                    {channel.cta}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Self-Service Resources */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Self-Service Resources
            </h2>
            <p className="text-xl text-gray-400">
              Find answers and learn at your own pace
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <Link
                  key={index}
                  href={resource.link}
                  className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-yellow-500/50 transition-all group"
                >
                  <div className="text-yellow-500 mb-4 group-hover:text-yellow-400 transition-colors">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400">
                    {resource.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Launch */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Support Available at Launch
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Full support services will be available when Quotely launches with Auto Insurance,
              followed by Home Insurance shortly after. Register your interest to be
              notified when support becomes available.
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

      {/* Feedback Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 text-center border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">
              Help Us Improve
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Your feedback helps us build a better product. Share your thoughts,
              feature requests, or report issues.
            </p>
            <a
              href="mailto:support@tryquotely.com?subject=Feedback"
              className="inline-block px-8 py-3 rounded-lg font-semibold bg-white text-gray-900 hover:bg-gray-100 transition-all"
            >
              Send Feedback
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
