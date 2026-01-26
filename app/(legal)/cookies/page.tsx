import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy - Quotely Insurance Platform',
  description: 'Quotely Cookie Policy - How we use cookies and tracking technologies.',
  openGraph: {
    title: 'Cookie Policy - Quotely Insurance Platform',
    description: 'Quotely Cookie Policy - How we use cookies and tracking technologies.',
  },
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gray-950 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>

        <div className="bg-gray-900 rounded-lg border border-gray-800 p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies</h2>
            <p className="text-gray-300 leading-relaxed">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">How We Use Cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Quotely uses cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><strong className="text-white">Essential Cookies:</strong> Required for the platform to function properly, including authentication and session management</li>
              <li><strong className="text-white">Analytics Cookies:</strong> Help us understand how users interact with our platform to improve user experience</li>
              <li><strong className="text-white">Preference Cookies:</strong> Remember your settings and preferences for a personalized experience</li>
              <li><strong className="text-white">Performance Cookies:</strong> Monitor platform performance and optimize quote generation speed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-white mb-2">Session Cookies</h3>
                <p className="text-gray-300">
                  Temporary cookies that expire when you close your browser. Used for authentication and maintaining your active session.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Persistent Cookies</h3>
                <p className="text-gray-300">
                  Remain on your device for a set period. Used to remember your preferences and improve your experience on return visits.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Third-Party Cookies</h3>
                <p className="text-gray-300">
                  Set by our analytics and integration partners to help us understand platform usage and provide carrier integrations.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Managing Cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              You can control and manage cookies through your browser settings. However, please note that disabling certain cookies may affect the functionality of our platform.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Most browsers allow you to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-2">
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block all cookies from specific websites</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have questions about our use of cookies, please contact us at:
            </p>
            <p className="text-gray-300 mt-2">
              Email: <a href="mailto:support@tryquotely.com" className="text-yellow-500 hover:text-yellow-400">support@tryquotely.com</a><br />
              Phone: <a href="tel:+19183956335" className="text-yellow-500 hover:text-yellow-400">(918) 395-6335</a>
            </p>
          </section>

          <section className="pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-400">
              Last Updated: January 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
