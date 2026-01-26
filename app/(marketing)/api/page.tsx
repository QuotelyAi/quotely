import type { Metadata } from 'next';
import Link from 'next/link';
import { Code, Key, Zap, Shield, Database, Cloud } from 'lucide-react';

export const metadata: Metadata = {
  title: 'API Documentation - Quotely Insurance Platform',
  description: 'Integrate Quotely\'s insurance platform with your existing systems. RESTful API with comprehensive documentation.',
  openGraph: {
    title: 'API Documentation - Quotely Insurance Platform',
    description: 'Integrate Quotely\'s insurance platform with your existing systems.',
  },
};

const features = [
  {
    icon: Code,
    title: 'RESTful API',
    description: 'Simple, intuitive REST endpoints following industry best practices'
  },
  {
    icon: Key,
    title: 'API Authentication',
    description: 'Secure authentication with API keys and OAuth 2.0 support'
  },
  {
    icon: Zap,
    title: 'Webhooks',
    description: 'Real-time notifications for quote updates and policy changes'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and compliance with industry standards'
  },
  {
    icon: Database,
    title: 'Complete Data Access',
    description: 'Full access to quotes, policies, clients, and analytics data'
  },
  {
    icon: Cloud,
    title: 'High Availability',
    description: '99.9% uptime SLA with global CDN and redundancy'
  }
];

const endpoints = [
  {
    method: 'POST',
    endpoint: '/api/v1/quotes',
    description: 'Create a new insurance quote'
  },
  {
    method: 'GET',
    endpoint: '/api/v1/quotes/{id}',
    description: 'Retrieve quote details'
  },
  {
    method: 'GET',
    endpoint: '/api/v1/clients',
    description: 'List all clients'
  },
  {
    method: 'POST',
    endpoint: '/api/v1/policies',
    description: 'Create a new policy'
  }
];

const getMethodColor = (method: string) => {
  switch (method) {
    case 'GET': return 'bg-blue-500/20 text-blue-400';
    case 'POST': return 'bg-green-500/20 text-green-400';
    case 'PUT': return 'bg-yellow-500/20 text-yellow-400';
    case 'DELETE': return 'bg-red-500/20 text-red-400';
    default: return 'bg-gray-500/20 text-gray-400';
  }
};

export default function APIPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-950 py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-yellow-500/20 rounded-full text-sm font-medium text-yellow-500 mb-6">
              REST API v1.0
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quotely API
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Powerful APIs to integrate Quotely into your workflow
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Enterprise-Grade API
            </h2>
            <p className="text-xl text-gray-400">
              Built for developers, designed for scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-yellow-500/50 transition-all"
                >
                  <div className="text-yellow-500 mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
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

      {/* Example Endpoints */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Example API Endpoints
            </h2>

            <div className="space-y-4">
              {endpoints.map((endpoint, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-yellow-500/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <span className={`px-3 py-1 rounded font-mono text-sm font-semibold ${getMethodColor(endpoint.method)}`}>
                      {endpoint.method}
                    </span>
                    <div className="flex-1">
                      <code className="text-lg font-mono text-white block mb-2">
                        {endpoint.endpoint}
                      </code>
                      <p className="text-gray-400">
                        {endpoint.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <p className="text-gray-300 text-center">
                <strong className="text-yellow-500">Note:</strong> Full API documentation will be available with the platform launch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Quick Start Example
            </h2>

            <div className="bg-gray-950 rounded-lg p-6 overflow-x-auto border border-gray-800">
              <pre className="text-green-400 font-mono text-sm">
{`// Create a new quote
const response = await fetch('https://api.quotely.com/v1/quotes', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    type: 'auto',
    client_id: '12345',
    coverage: {
      liability: 100000,
      collision: true,
      comprehensive: true
    }
  })
});

const quote = await response.json();
console.log('Quote created:', quote.id);`}
              </pre>
            </div>

            <p className="text-gray-500 text-center mt-6">
              Example shown for illustration. Actual API may differ at launch.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              API Access Coming Soon
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Full REST API access will be included with all Quotely platform subscriptions.
              Register your interest to receive API documentation and early access credentials
              when we launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo-request"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
              >
                Request API Access
              </Link>
              <Link
                href="/documentation"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors text-lg"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* API Resources */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              API Resources (Coming Soon)
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-900 border border-gray-800 rounded-lg">
                <Code className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                <h3 className="font-bold text-white mb-2">API Reference</h3>
                <p className="text-gray-400">Complete endpoint documentation</p>
              </div>
              <div className="text-center p-6 bg-gray-900 border border-gray-800 rounded-lg">
                <Key className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                <h3 className="font-bold text-white mb-2">Authentication</h3>
                <p className="text-gray-400">API key and OAuth setup</p>
              </div>
              <div className="text-center p-6 bg-gray-900 border border-gray-800 rounded-lg">
                <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                <h3 className="font-bold text-white mb-2">SDKs & Libraries</h3>
                <p className="text-gray-400">Client libraries for popular languages</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
