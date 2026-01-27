import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AgentDirectoryService } from '../data/agentDirectory';
import { CityData, AgentProfile } from '../types/agent';

function AgentCard({ agent, stateCode, citySlug }: { agent: AgentProfile; stateCode: string; citySlug: string }) {
  const specialtyLabels: Record<string, string> = {
    auto: 'Auto',
    sr22: 'SR-22',
    'high-risk': 'High-Risk',
    home: 'Home',
    commercial: 'Commercial',
    motorcycle: 'Motorcycle',
  };

  return (
    <Link
      to={`/agents/${stateCode}/${citySlug}/${agent.slug}`}
      className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-cyan-200 transition-all duration-200"
    >
      <div className="flex gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl ${agent.isPremium ? 'bg-gradient-to-br from-cyan-400 to-teal-500' : 'bg-gray-400'}`}>
            {agent.firstName[0]}{agent.lastName[0]}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-cyan-500 transition-colors">
                {agent.agencyName}
              </h3>
              <p className="text-sm text-gray-500">
                {agent.firstName} {agent.lastName}
              </p>
            </div>
            {agent.isPremium && (
              <span className="flex-shrink-0 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                PREMIUM
              </span>
            )}
          </div>

          {/* Rating & Experience */}
          <div className="flex items-center gap-2 mt-2">
            {agent.rating && (
              <>
                <div className="flex items-center text-amber-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1 font-semibold text-gray-900">{agent.rating.toFixed(1)}</span>
                </div>
                {agent.reviewCount && (
                  <>
                    <span className="text-gray-400">|</span>
                    <span className="text-sm text-gray-500">{agent.reviewCount} reviews</span>
                  </>
                )}
                <span className="text-gray-400">|</span>
              </>
            )}
            <span className="text-sm text-gray-500">{agent.yearsExperience} years exp.</span>
          </div>

          {/* Specialties */}
          <div className="flex flex-wrap gap-2 mt-3">
            {agent.specialties.slice(0, 4).map(spec => (
              <span
                key={spec}
                className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full"
              >
                {specialtyLabels[spec] || spec}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100 text-sm">
            <div className="flex items-center gap-1 text-gray-600">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {agent.avgResponseTime} min response
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {agent.quotesCompleted.toLocaleString()} quotes
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function CityDetail() {
  const { stateCode, citySlug } = useParams<{ stateCode: string; citySlug: string }>();
  const [cityData, setCityData] = useState<CityData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!stateCode || !citySlug) return;

    AgentDirectoryService.getCityData(stateCode, citySlug)
      .then(data => {
        setCityData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [stateCode, citySlug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !cityData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">City Not Found</h1>
          <Link to="/agents" className="text-cyan-500 hover:underline">
            Back to all states
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-cyan-500 via-teal-500 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-cyan-200 text-sm mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/agents" className="hover:text-white">Find an Agent</Link>
            <span className="mx-2">/</span>
            <Link to={`/agents/${stateCode}`} className="hover:text-white">{cityData.state}</Link>
            <span className="mx-2">/</span>
            <span>{cityData.city}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Insurance Agents in {cityData.city}, {cityData.stateCode}
          </h1>
          <p className="text-xl text-cyan-100">
            Compare {cityData.totalAgents} local agents and get quotes in minutes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Agents List */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Top Agents in {cityData.city}
            </h2>
            {cityData.agents.map(agent => (
              <AgentCard
                key={agent.id}
                agent={agent}
                stateCode={stateCode!.toLowerCase()}
                citySlug={citySlug!}
              />
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Neighborhoods */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Neighborhoods
              </h3>
              <div className="space-y-2">
                {cityData.neighborhoods.map(neighborhood => (
                  <div
                    key={neighborhood.slug}
                    className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0"
                  >
                    <span className="text-gray-700">{neighborhood.name}</span>
                    <span className="text-sm text-gray-500">
                      {neighborhood.agentCount} agents
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Stats
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Avg. Response</div>
                    <div className="text-sm text-gray-500">Under 10 minutes</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Avg. Rating</div>
                    <div className="text-sm text-gray-500">4.8 out of 5 stars</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">
                Get Multiple Quotes
              </h3>
              <p className="text-cyan-100 text-sm mb-4">
                Compare rates from top agents in {cityData.city} in just 2 minutes.
              </p>
              <button className="w-full bg-white text-cyan-500 font-semibold px-4 py-3 rounded-lg hover:bg-cyan-50 transition-colors">
                Get Free Quotes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
