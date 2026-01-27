import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AgentDirectoryService } from '../data/agentDirectory';
import { StateData } from '../types/agent';

export default function StateDetail() {
  const { stateCode } = useParams<{ stateCode: string }>();
  const [stateData, setStateData] = useState<StateData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!stateCode) return;

    AgentDirectoryService.getStateData(stateCode)
      .then(data => {
        setStateData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [stateCode]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !stateData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">State Not Found</h1>
          <Link to="/agents" className="text-cyan-500 hover:underline">
            Back to all states
          </Link>
        </div>
      </div>
    );
  }

  const specialtyLabels: Record<string, string> = {
    auto: 'Auto Insurance',
    sr22: 'SR-22 Filing',
    'high-risk': 'High-Risk Coverage',
    home: 'Home Insurance',
    commercial: 'Commercial',
    motorcycle: 'Motorcycle',
  };

  const stateSlug = stateData.state.toLowerCase().replace(/\s+/g, '');
  const canonicalUrl = `https://${stateSlug}.quotely.info`;

  return (
    <>
      <Helmet>
        <title>{stateData.state} Insurance Agents | Find Local Agents | Quotely</title>
        <meta name="description" content={`Find ${stateData.totalAgents} licensed insurance agents in ${stateData.state}. Compare auto, home, SR-22, and high-risk insurance quotes from top-rated local agents.`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${stateData.state} Insurance Agents | Quotely`} />
        <meta property="og:description" content={`Compare ${stateData.totalAgents} insurance agents in ${stateData.state}. Get free quotes for auto, home, and SR-22 insurance.`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${stateData.state} Insurance Agents | Quotely`} />
        <meta name="twitter:description" content={`Find ${stateData.totalAgents} licensed insurance agents in ${stateData.state}.`} />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-cyan-500 via-teal-500 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-cyan-200 text-sm mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/agents" className="hover:text-white">Find an Agent</Link>
            <span className="mx-2">/</span>
            <span>{stateData.state}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Insurance Agents in {stateData.state}
          </h1>
          <p className="text-xl text-cyan-100">
            {stateData.totalAgents} verified agents ready to help you find the best coverage.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cities List */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Cities in {stateData.state}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {stateData.cities.map(city => (
                <Link
                  key={city.slug}
                  to={`/agents/${stateData.stateCode.toLowerCase()}/${city.slug}`}
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-100 hover:border-cyan-200 transition-all duration-200"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-cyan-500 transition-colors">
                      {city.name}
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {city.agentCount} agents
                    </span>
                  </div>

                  {city.topAgents.length > 0 && (
                    <div className="space-y-2">
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Top Agents
                      </div>
                      {city.topAgents.slice(0, 2).map(agent => (
                        <div key={agent.id} className="flex items-center gap-2 text-sm">
                          {agent.rating && (
                            <div className="flex items-center text-amber-500">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <span className="ml-1 text-gray-700">{agent.rating.toFixed(1)}</span>
                            </div>
                          )}
                          <span className="text-gray-600 truncate">{agent.agencyName}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Specialties */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Popular Specialties
              </h3>
              <div className="space-y-3">
                {stateData.topSpecialties.map(specialty => (
                  <div key={specialty.name} className="flex justify-between items-center">
                    <span className="text-gray-700">
                      {specialtyLabels[specialty.name] || specialty.name}
                    </span>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {specialty.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">
                Are you an agent?
              </h3>
              <p className="text-cyan-100 text-sm mb-4">
                Join Quotely and connect with customers looking for insurance in {stateData.state}.
              </p>
              <Link
                to="/"
                className="inline-block bg-white text-cyan-500 font-semibold px-4 py-2 rounded-lg hover:bg-cyan-50 transition-colors"
              >
                Get Listed
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
