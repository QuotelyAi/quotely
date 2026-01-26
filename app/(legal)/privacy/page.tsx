import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Quotely',
  description: 'Quotely Privacy Policy - How we collect, use, and protect your information.',
  openGraph: {
    title: 'Privacy Policy - Quotely',
    description: 'How we collect, use, and protect your information.',
  },
};

export default function PrivacyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-gray-950 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="bg-gray-900 rounded-lg border border-gray-800 p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              At Quotely, Inc. DBA &quot;Try Quotely&quot;, we take your privacy seriously. This
              Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Name, email address, and contact information</li>
              <li>Agency information and business details</li>
              <li>Insurance quoting data and carrier information</li>
              <li>Usage data and platform interactions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Provide, maintain, and improve our services</li>
              <li>Process insurance quotes and carrier integrations</li>
              <li>Communicate with you about our services</li>
              <li>Ensure platform security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect
              your personal information. Our platform is SOC 2 compliant and uses
              industry-standard encryption.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Data Retention</h2>
            <p className="text-gray-300 leading-relaxed">
              We retain your personal information for as long as necessary to provide our
              services and fulfill the purposes described in this policy, unless a longer
              retention period is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability where applicable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-300 mt-2">
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
