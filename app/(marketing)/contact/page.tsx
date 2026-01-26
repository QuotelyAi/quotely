import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Quotely',
  description: 'Get in touch with the Quotely team. Contact us for demos, pricing, technical support, or general inquiries.',
  openGraph: {
    title: 'Contact Us - Quotely',
    description: 'Get in touch with the Quotely team for demos, pricing, or support.',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get in touch with our team to transform your insurance business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-yellow-500 mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Office Location</h3>
                    <p className="text-gray-400">
                      6010 S 66th E Ave B<br />
                      Tulsa, OK 74145<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-yellow-500 mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <Link href="/demo-request" className="text-yellow-500 hover:text-yellow-400">
                      sales@tryquotely.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-yellow-500 mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Sales Inquiries</h3>
                    <p className="text-gray-400">
                      Contact our sales team for pricing and demos
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-yellow-500 mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-white mb-1">AI Available 24/7</h3>
                    <p className="text-gray-400">
                      Our AI-powered platform operates round the clock at just $1.37/hour
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              <div className="space-y-4">
                <Link
                  href="/demo-request"
                  className="block w-full text-center px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  Email Sales Team
                </Link>
                <Link
                  href="/demo-request"
                  className="block w-full text-center px-6 py-3 border-2 border-secondary-500 text-secondary-500 font-semibold rounded-lg hover:bg-secondary-500 hover:text-white transition-colors"
                >
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden h-full min-h-[450px] border border-gray-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.6999247292397!2d-95.9031487!3d36.0764226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b6930004326323%3A0x9a63389bca11bbdc!2sQuotely!5e0!3m2!1sen!2sus!4v1763592940773!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '450px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Quotely Office Location"
            />
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-gray-900 rounded-lg p-8 border border-gray-800">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-bold text-white mb-2">Platform Support</h3>
              <p className="text-gray-400">
                Technical support available for all platform users
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">Custom Token Packages</h3>
              <p className="text-gray-400">
                Volume pricing available for high-volume agencies
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">Partner Network</h3>
              <p className="text-gray-400">
                Integrated with TurboRater, Momentum AMP, and GAIL AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
