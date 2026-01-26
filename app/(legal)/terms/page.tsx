import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Quotely',
  description: 'Quotely Terms of Service - Terms and conditions for using our insurance quoting platform.',
  openGraph: {
    title: 'Terms of Service - Quotely',
    description: 'Terms and conditions for using our insurance quoting platform.',
  },
};

export default function TermsPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-gray-950 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

        <div className="bg-gray-900 rounded-lg border border-gray-800 p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Agreement to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing or using Quotely&apos;s platform, you agree to be bound by these Terms
              of Service. If you disagree with any part of the terms, you may not access the
              service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Use License</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Quotely grants you a limited, non-exclusive, non-transferable license to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Access and use the platform for insurance quoting purposes</li>
              <li>Generate quotes for your clients and prospects</li>
              <li>Integrate with approved carrier systems</li>
              <li>Access API endpoints as per your subscription plan</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">User Responsibilities</h2>
            <p className="text-gray-300 leading-relaxed mb-3">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use the platform in compliance with all applicable laws</li>
              <li>Not attempt to reverse engineer or breach platform security</li>
              <li>Comply with insurance regulations and licensing requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Acceptable Use</h2>
            <p className="text-gray-300 leading-relaxed mb-3">You may not use our platform to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Violate any applicable laws or regulations</li>
              <li>Transmit malicious code or interfere with platform operations</li>
              <li>Attempt to gain unauthorized access to systems</li>
              <li>Collect data without proper authorization</li>
              <li>Engage in fraudulent or deceptive practices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Service Availability</h2>
            <p className="text-gray-300 leading-relaxed">
              While we strive for 99.9% uptime, Quotely does not guarantee uninterrupted access
              to the platform. We reserve the right to modify, suspend, or discontinue any part
              of the service with or without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed">
              The Quotely platform, including all content, features, and functionality, is owned
              by Quotely, Inc. and is protected by copyright, trademark, and other intellectual
              property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              Quotely shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages resulting from your use of or inability to use the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              We may terminate or suspend your access to the platform immediately, without prior
              notice, for any reason whatsoever, including breach of these Terms. Upon
              termination, your right to use the platform will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              For questions about these Terms of Service, please contact:
            </p>
            <p className="text-gray-300 mt-2">
              Quotely, Inc. DBA &quot;Try Quotely&quot;
              <br />
              6010 S. 66th E. Ave, Suite B
              <br />
              Tulsa, OK 74145
              <br />
              Email:{' '}
              <a
                href="mailto:support@tryquotely.com"
                className="text-yellow-500 hover:text-yellow-400"
              >
                support@tryquotely.com
              </a>
              <br />
              Phone:{' '}
              <a href="tel:+19183956335" className="text-yellow-500 hover:text-yellow-400">
                (918) 395-6335
              </a>
            </p>
          </section>

          <section className="pt-6 border-t border-gray-700">
            <p className="text-sm text-gray-500">Last Updated: {currentDate}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
