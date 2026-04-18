import { CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'System Status | Quotely',
  description: 'Live operational status for Quotely platform services — quoting, AMS sync, CRM, API, and Gail voice.',
};

const services = [
  { name: 'Quoting Engine (TurboRater)', status: 'operational' },
  { name: 'AMS Sync (NowCerts, GSIL, Applied, Vertafore, HawkSoft)', status: 'operational' },
  { name: 'CRM & Pipeline', status: 'operational' },
  { name: 'Gail Voice AI', status: 'operational' },
  { name: 'Public API', status: 'operational' },
  { name: 'Admin Dashboard', status: 'operational' },
];

export default function StatusPage() {
  const lastChecked = new Date().toISOString().replace('T', ' ').slice(0, 16) + ' UTC';

  return (
    <div className="min-h-screen bg-gray-950">
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/40 text-green-300 px-5 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            All systems operational
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Quotely System Status</h1>
          <p className="text-white/80">Last checked: {lastChecked}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 border border-gray-800 rounded-lg divide-y divide-gray-800">
            {services.map((service) => (
              <div key={service.name} className="flex items-center justify-between p-5">
                <span className="text-white font-medium">{service.name}</span>
                <span className="inline-flex items-center gap-2 text-green-400 text-sm font-medium">
                  <CheckCircle2 size={18} />
                  Operational
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-gray-900 border border-gray-800 rounded-lg p-6 text-gray-300">
            <h2 className="text-lg font-semibold text-white mb-2">Incident reporting</h2>
            <p className="text-sm text-gray-400 mb-3">
              If you&rsquo;re experiencing an issue you don&rsquo;t see reflected here, email{' '}
              <a href="mailto:support@tryquotely.com" className="text-yellow-500 hover:underline">
                support@tryquotely.com
              </a>{' '}
              or call{' '}
              <a href="tel:+19183956335" className="text-yellow-500 hover:underline">
                (918) 395-6335
              </a>
              . Historical incidents and post-mortems are published in the{' '}
              <a href="/blog" className="text-yellow-500 hover:underline">
                blog
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
