import Link from 'next/link';
import { Shield, Car, Home, Building2, Heart, Briefcase } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance Coverage Types - Quotely',
  description: 'Explore all insurance coverage types supported by Quotely. From auto and home to commercial and specialty lines, we help agencies quote and manage every policy type.',
  openGraph: {
    title: 'Insurance Coverage Types - Quotely',
    description: 'Explore all insurance coverage types supported by Quotely platform.',
  },
};

const coverageTypes = [
  {
    icon: Car,
    title: 'Auto Insurance',
    description: 'Personal and commercial auto coverage including liability, collision, comprehensive, and specialty vehicles.',
    lines: ['Personal Auto', 'Commercial Auto', 'Fleet Coverage', 'Rideshare', 'Classic Cars']
  },
  {
    icon: Home,
    title: 'Home Insurance',
    description: 'Comprehensive homeowners coverage protecting properties and personal belongings.',
    lines: ['Homeowners', 'Renters', 'Condo', 'Landlord', 'Flood', 'Earthquake']
  },
  {
    icon: Building2,
    title: 'Commercial Insurance',
    description: 'Business coverage solutions for companies of all sizes across various industries.',
    lines: ['General Liability', 'Property', 'BOP', 'Workers Comp', 'Professional Liability']
  },
  {
    icon: Heart,
    title: 'Life & Health',
    description: 'Life insurance and health coverage options for individuals and groups.',
    lines: ['Term Life', 'Whole Life', 'Group Health', 'Disability', 'Long-Term Care']
  },
  {
    icon: Briefcase,
    title: 'Specialty Lines',
    description: 'Specialized coverage for unique risks and niche markets.',
    lines: ['Cyber Liability', 'E&O', 'D&O', 'EPLI', 'Surety Bonds']
  },
  {
    icon: Shield,
    title: 'Excess & Surplus',
    description: 'Hard-to-place risks and non-standard coverage solutions.',
    lines: ['Excess Liability', 'Surplus Lines', 'High-Risk Auto', 'Vacant Property', 'Special Events']
  }
];

export default function CoveragePage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Insurance Coverage Types
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Quote and manage every line of business from a single platform
            </p>
            <Link
              href="/demo-request"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
            >
              See Quotely in Action
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage Grid */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Comprehensive Coverage Support
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Quotely integrates with carriers across all major lines of business, giving your agency
              the flexibility to serve any client need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coverageTypes.map((coverage, index) => {
              const Icon = coverage.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-yellow-500/50 transition-all duration-200"
                >
                  <div className="text-yellow-500 mb-4">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {coverage.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {coverage.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {coverage.lines.map((line, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                      >
                        {line}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Expand Your Coverage Offerings?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              See how Quotely can help you quote more lines and serve more clients.
            </p>
            <Link
              href="/demo-request"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
