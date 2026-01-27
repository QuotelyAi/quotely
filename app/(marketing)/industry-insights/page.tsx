import Link from 'next/link';
import { TrendingUp, BarChart, Globe, Lightbulb, FileText, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance Industry Insights & Trends | Quotely',
  description: 'Stay ahead with the latest insurance industry insights, insurtech trends, market analysis, and expert perspectives on the future of insurance.',
  openGraph: {
    title: 'Insurance Industry Insights & Trends | Quotely',
    description: 'Latest insurance industry insights, insurtech trends, and market analysis.',
  },
};

const insights = [
  {
    icon: TrendingUp,
    title: 'InsurTech Trends 2025',
    description: 'AI adoption accelerates as agencies seek competitive advantages through automation and intelligent workflows.',
    category: 'Technology'
  },
  {
    icon: BarChart,
    title: 'Market Performance',
    description: 'Hard market conditions continue, driving agencies to focus on retention and operational efficiency.',
    category: 'Market Analysis'
  },
  {
    icon: Globe,
    title: 'Digital Transformation',
    description: 'Client expectations for digital experiences are reshaping how agencies interact and service policies.',
    category: 'Digital'
  },
  {
    icon: Lightbulb,
    title: 'Agency Growth Strategies',
    description: 'Top-performing agencies are investing in technology and talent to capture market share.',
    category: 'Strategy'
  }
];

const topics = [
  'Artificial Intelligence in Insurance',
  'Agency Management Best Practices',
  'Carrier Relationships',
  'Client Retention Strategies',
  'Compliance & Regulations',
  'Cyber Insurance Trends',
  'Digital Marketing for Agencies',
  'E&O Risk Management',
  'Employee Benefits Trends',
  'Insurance Technology Stack',
  'M&A Activity',
  'Pricing & Profitability'
];

export default function IndustryInsightsPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Industry Insights
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Expert analysis and trends shaping the future of insurance
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Featured Insights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-yellow-500/50 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-yellow-500">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="text-sm text-yellow-500 font-medium">{insight.category}</span>
                      <h3 className="text-xl font-bold text-white mt-1 mb-3">
                        {insight.title}
                      </h3>
                      <p className="text-gray-400">
                        {insight.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Topics We Cover
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {topics.map((topic, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 hover:text-white transition-colors cursor-pointer"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Informed
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Get weekly insights delivered to your inbox. Join thousands of insurance professionals
            staying ahead of industry trends.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
          >
            Explore All Articles <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Put These Insights Into Action
            </h2>
            <p className="text-xl text-white/90 mb-8">
              See how Quotely helps agencies implement modern best practices.
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
