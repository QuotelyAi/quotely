import Link from 'next/link';
import { LayoutDashboard, Users, DollarSign, Clock, BarChart3, Settings } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'QUAD Agency Management System | Quotely',
  description: 'QUAD is the comprehensive agency management dashboard for insurance agency owners. Monitor staff, track finances, analyze performance, and optimize operations.',
  openGraph: {
    title: 'QUAD Agency Management System | Quotely',
    description: 'Comprehensive agency management dashboard for insurance agency owners.',
  },
};

const quadFeatures = [
  {
    icon: LayoutDashboard,
    title: 'Central Dashboard',
    description: 'See your entire agency at a glance with real-time metrics, alerts, and actionable insights.'
  },
  {
    icon: Users,
    title: 'Staff Management',
    description: 'Track employee activity, performance metrics, and productivity across your team.'
  },
  {
    icon: DollarSign,
    title: 'Financial Oversight',
    description: 'Monitor revenue, commissions, expenses, and profitability in real-time.'
  },
  {
    icon: Clock,
    title: 'Time Tracking',
    description: 'Clock in/out functionality, time logs, and work hour analytics for payroll and productivity.'
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Deep insights into agency efficiency, conversion rates, and growth opportunities.'
  },
  {
    icon: Settings,
    title: 'Operations Control',
    description: 'Manage workflows, set goals, configure permissions, and customize agency settings.'
  }
];

const capabilities = [
  {
    category: 'Financial Intelligence',
    items: ['Revenue tracking & forecasting', 'Commission calculations', 'Expense management', 'Profitability analysis', 'Payout structures']
  },
  {
    category: 'Staff Oversight',
    items: ['Activity monitoring', 'Time & attendance', 'Performance metrics', 'Goal tracking', 'Work logs']
  },
  {
    category: 'Digital Presence',
    items: ['SEO health monitoring', 'E-E-A-T compliance', 'Google Guidelines check', 'GMB profile status', 'Social media tracking']
  },
  {
    category: 'Business Operations',
    items: ['Workflow automation', 'Task management', 'Project tracking', 'Resource allocation', 'Efficiency reports']
  }
];

export default function QuadSystemPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <LayoutDashboard className="w-5 h-5" />
              <span>Agency Owner Dashboard</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              QUAD System
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Complete oversight and control of your insurance agency
            </p>
            <Link
              href="/demo-request"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
            >
              See QUAD in Action
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Your Agency Command Center
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              QUAD gives agency owners complete visibility into operations, finances, and team performance.
              Whether you&apos;re a solo agent or managing a team, QUAD scales with your needs and provides
              the insights you need to grow profitably.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            QUAD Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quadFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-yellow-500/50 transition-all duration-200"
                >
                  <div className="text-yellow-500 mb-4">
                    <Icon className="w-10 h-10" />
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

      {/* Capabilities */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Complete Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-yellow-500 mb-4">{cap.category}</h3>
                <ul className="space-y-2">
                  {cap.items.map((item, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Solo vs Team */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">Solo Agents</h3>
              <p className="text-gray-400 mb-4">
                Running your agency alone? QUAD integrates seamlessly with Quotely, giving you
                owner-level insights without the complexity. One login, full visibility.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Combined Quotely + QUAD access</li>
                <li>• Personal performance tracking</li>
                <li>• Financial overview dashboard</li>
                <li>• Business health metrics</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">Agency Teams</h3>
              <p className="text-gray-400 mb-4">
                Managing staff? QUAD gives you oversight while your team uses Quotely for daily
                operations. See everything, control everything.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Staff activity monitoring</li>
                <li>• Time tracking & payroll</li>
                <li>• Commission management</li>
                <li>• Team performance analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Take Control of Your Agency
            </h2>
            <p className="text-xl text-white/90 mb-8">
              See how QUAD can give you the visibility and control you need to grow profitably.
            </p>
            <Link
              href="/demo-request"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
            >
              Request Your Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
