import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AgentDirectoryService } from '../data/agentDirectory';
import { CollectionPageSchema, BreadcrumbSchema } from '../components/SchemaMarkup';

interface StateInfo {
  name: string;
  code: string;
  agentCount: number;
}

export default function StatesList() {
  const [states, setStates] = useState<StateInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadStates();
  }, []);

  const loadStates = async () => {
    try {
      const data = await AgentDirectoryService.getAllStates();
      setStates(data);
    } catch (error) {
      console.error('Failed to load states:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredStates = states.filter(state =>
    state.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    state.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalAgents = states.reduce((sum, state) => sum + state.agentCount, 0);

  return (
    <>
      <Helmet>
        <title>Find Insurance Agents by State | Quotely Directory</title>
        <meta name="description" content={`Browse ${totalAgents.toLocaleString()} licensed insurance agents across all 50 states. Find local agents for auto, home, SR-22, and commercial insurance.`} />
        <link rel="canonical" href="https://quotely.info/agents" />
        <meta property="og:title" content="Find Insurance Agents by State | Quotely" />
        <meta property="og:description" content={`Browse ${totalAgents.toLocaleString()} licensed insurance agents across all 50 states.`} />
        <meta property="og:url" content="https://quotely.info/agents" />
        <meta property="og:type" content="website" />
      </Helmet>

      <CollectionPageSchema
        name="Insurance Agent Directory by State"
        description={`Browse ${totalAgents.toLocaleString()} licensed insurance agents across all 50 states. Find local agents for auto, home, SR-22, and commercial insurance.`}
        url="https://quotely.info/agents"
        itemCount={50}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://quotely.info' },
          { name: 'Find Agents', url: 'https://quotely.info/agents' },
        ]}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <header className="bg-gradient-to-r from-cyan-500 to-teal-600 text-white py-16 pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Find Insurance Agents Nationwide
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl text-cyan-100">
              Connect with {totalAgents.toLocaleString()}+ licensed insurance agents across all 50 states.
              Get quotes 60% faster with AI-powered technology.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl">
              <input
                type="text"
                placeholder="Search by state name or code (e.g., Oklahoma, OK)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-cyan-300 shadow-xl"
              />
            </div>
          </div>
        </header>

        {/* Stats Section */}
        <section className="bg-white py-12 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatCard icon="🇺🇸" label="States Covered" value="50" />
              <StatCard icon="👥" label="Licensed Agents" value={totalAgents.toLocaleString()} />
              <StatCard icon="⚡" label="Avg Quote Time" value="< 30 sec" />
              <StatCard icon="⭐" label="Avg Rating" value="4.8/5" />
            </div>
          </div>
        </section>

        {/* States Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Browse by State {searchTerm && `(${filteredStates.length} results)`}
          </h2>

          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="h-32 bg-gray-200 rounded-xl animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredStates.map((state) => (
                <StateCard key={state.code} state={state} />
              ))}
            </div>
          )}

          {!loading && filteredStates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No states found matching "{searchTerm}"</p>
            </div>
          )}
        </section>

        {/* Featured State - Oklahoma */}
        <section className="bg-cyan-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ⭐ FEATURED STATE
              </span>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Oklahoma Insurance Agents</h2>
              <p className="text-xl text-gray-700 mb-8">
                156 licensed agents across Tulsa, Oklahoma City, and more. Specializing in SR-22,
                high-risk auto, and affordable coverage.
              </p>
              <Link
                to="/agents/ok"
                className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl"
              >
                Browse Oklahoma Agents →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-cyan-500 to-teal-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Your Quote?</h2>
            <p className="text-xl mb-8 text-cyan-100">Find the perfect insurance agent in your area today</p>
            <Link
              to="/"
              className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Get Free Quote
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

function StateCard({ state }: { state: StateInfo }) {
  const isOklahoma = state.code === 'OK';

  return (
    <Link
      to={`/agents/${state.code.toLowerCase()}`}
      className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 group relative border ${
        isOklahoma ? 'ring-2 ring-cyan-500 border-cyan-200' : 'border-gray-100'
      }`}
    >
      {isOklahoma && (
        <span className="absolute top-2 right-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
          LIVE
        </span>
      )}

      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
          {state.name}
        </h3>
        <span className="text-2xl">{getStateEmoji(state.code)}</span>
      </div>

      <p className="text-gray-600 mb-2">
        <span className="font-semibold">{state.agentCount}</span> agents
      </p>

      <div className="text-cyan-600 group-hover:text-cyan-700 font-medium text-sm flex items-center gap-1">
        View agents
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}

function getStateEmoji(code: string): string {
  const emojis: Record<string, string> = {
    'OK': '🏈', 'TX': '🤠', 'CA': '🌴', 'NY': '🗽', 'FL': '🌊',
    'AK': '🐻', 'HI': '🌺', 'AZ': '🌵', 'CO': '🏔️', 'WA': '🌲',
    'GA': '🍑', 'TN': '🎸', 'LA': '⚜️', 'NV': '🎰', 'MI': '🚗',
  };
  return emojis[code] || '📍';
}
