import Link from 'next/link';

interface Tier {
  name: string;
  price: number;
  description: string;
  featured?: boolean;
  bestValue?: boolean;
  features: string[];
  quad: string;
}

const tiers: Tier[] = [
  {
    name: 'Connect',
    price: 299,
    description: 'Everything you need to get started with AI-powered quoting.',
    bestValue: true,
    features: [
      'TurboRater (200+ carriers)',
      'QUAD AI — web chat',
      '100 quotes per month',
    ],
    quad: 'Read & Suggest',
  },
  {
    name: 'Starter',
    price: 999,
    description: 'High-volume quoting with SMS-based AI outreach.',
    features: [
      'Everything in Connect',
      'Highest TurboRater quote volume',
      'QUAD AI + SMS channel',
      'Gail Voice AI',
      'AMS (Momentum AMP)',
      'CRM + API access',
      'IVANS integration',
      'Write to Quotely autonomy',
    ],
    quad: 'Write to Quotely',
  },
  {
    name: 'Professional',
    price: 1799,
    description: 'Multi-channel QUAD with self-learning and review council.',
    featured: true,
    features: [
      'Everything in Starter',
      'QUAD AI + Telegram + Slack',
      'QUAD Self-Learning',
      'QUAD Review Council',
      'Write to integrations autonomy',
    ],
    quad: 'Write to Integrations',
  },
  {
    name: 'Enterprise',
    price: 2399,
    description: 'Full autonomy, custom wiki, and outbound AI initiation.',
    features: [
      'Everything in Professional',
      'QUAD Custom Wiki',
      'Outbound initiation autonomy',
      'Priority support',
    ],
    quad: 'Outbound Initiation',
  },
];

const comparisonRows = [
  { label: 'TurboRater (200+ carriers)', values: [true, true, true, true] },
  { label: 'QUAD AI (web chat)', values: [true, true, true, true] },
  { label: 'Gail Voice AI', values: [false, true, true, true] },
  { label: 'AMS (Momentum AMP)', values: [false, true, true, true] },
  { label: 'CRM', values: [false, true, true, true] },
  { label: 'Credential Vault', values: [false, true, true, true] },
  { label: 'API Access', values: [false, true, true, true] },
  { label: 'Highest Quote Volume', values: [false, true, true, true] },
  { label: 'SMS Channel', values: [false, true, true, true] },
  { label: 'Telegram + Slack', values: [false, false, true, true] },
  { label: 'QUAD Self-Learning', values: [false, false, true, true] },
  { label: 'QUAD Review Council', values: [false, false, true, true] },
  { label: 'QUAD Custom Wiki', values: [false, false, false, true] },
  { label: 'Outbound AI Initiation', values: [false, false, false, true] },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Start with quoting at $299 and add the full platform — AMS, CRM, QUAD AI, and Gail Voice — when you&apos;re ready.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-7 flex flex-col ${
                tier.featured
                  ? 'border-yellow-500 bg-gray-50 dark:bg-gray-900'
                  : 'border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900'
              }`}
            >
              {tier.bestValue && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-yellow-500 px-3 py-1 text-xs font-semibold text-gray-900 whitespace-nowrap">
                    Best Value
                  </span>
                </div>
              )}
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-yellow-500 px-3 py-1 text-xs font-semibold text-gray-900 whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{tier.name}</h3>
              <p className="mt-1 text-sm text-gray-500 min-h-[2.5rem]">{tier.description}</p>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  ${tier.price.toLocaleString()}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">/month</span>
              </div>

              <div className="mt-2 mb-5">
                <span className="inline-block rounded-md bg-gray-200 dark:bg-gray-800 px-2 py-0.5 text-xs text-yellow-600 dark:text-yellow-400">
                  QUAD: {tier.quad}
                </span>
              </div>

              <ul className="mb-8 space-y-2.5 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="text-yellow-500 font-bold text-sm mt-0.5">&#10003;</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/demo-request"
                className={`block w-full py-3 rounded-lg text-center text-sm font-semibold transition-colors ${
                  tier.featured
                    ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400'
                    : 'border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:border-yellow-500 hover:text-yellow-600 dark:hover:text-yellow-500'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Plan Comparison</h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 text-sm">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">Feature</th>
                {tiers.map((tier) => (
                  <th
                    key={tier.name}
                    className={`px-4 py-4 text-center font-semibold ${
                      tier.featured ? 'text-yellow-500' : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-800">
                <td className="px-6 py-2 text-xs text-gray-500">Monthly price</td>
                {tiers.map((tier) => (
                  <td key={tier.name} className={`px-4 py-2 text-center text-xs font-medium ${tier.featured ? 'bg-yellow-500/5 text-yellow-600 dark:text-yellow-400' : 'text-gray-700 dark:text-gray-300'}`}>
                    ${tier.price.toLocaleString()}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr key={index} className="border-t border-gray-200 dark:border-gray-800">
                  <td className="px-6 py-3 text-gray-700 dark:text-gray-300">{row.label}</td>
                  {row.values.map((val, i) => (
                    <td
                      key={i}
                      className={`px-4 py-3 text-center ${tiers[i].featured ? 'bg-yellow-500/5' : ''}`}
                    >
                      {val ? (
                        <span className="text-green-600 dark:text-green-500 font-bold">&#10003;</span>
                      ) : (
                        <span className="text-gray-400 dark:text-gray-600">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-xs text-gray-500 text-center">
          * Speed based on measured benchmarks: auto quote in 4.8s, homeowners in 17s through TurboRater by Zywave.
          Results may vary by carrier count and data complexity. 50 States + DC · 200+ Carriers via TurboRater.
        </p>
      </div>
    </div>
  );
}
