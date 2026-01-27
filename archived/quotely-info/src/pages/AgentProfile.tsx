import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { OklahomaAgency, getAgencyBySlug } from '../data/oklahomaAgencies';
import { LocalBusinessSchema, BreadcrumbSchema } from '../components/SchemaMarkup';

export default function AgentProfile() {
  const { stateCode, citySlug, agentSlug } = useParams<{
    stateCode: string;
    citySlug: string;
    agentSlug: string;
  }>();
  const [agency, setAgency] = useState<OklahomaAgency | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!agentSlug) return;

    // Small delay to simulate loading
    setTimeout(() => {
      const found = getAgencyBySlug(agentSlug);
      setAgency(found || null);
      setLoading(false);
    }, 100);
  }, [agentSlug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!agency) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Agency Not Found</h1>
          <p className="text-gray-600 mb-4">This agency profile is not available.</p>
          <Link to="/agents" className="text-cyan-500 hover:underline">
            Back to all agents
          </Link>
        </div>
      </div>
    );
  }

  const carrierLabels: Record<string, string> = {
    'independent': 'Independent Agency',
    'State Farm': 'State Farm Agent',
    'Allstate': 'Allstate Agent',
    'Farmers': 'Farmers Insurance Agent',
    'Shelter': 'Shelter Insurance Agent',
    'Progressive': 'Progressive Agent',
    'Mercury': 'Mercury Insurance Agent',
  };

  const lineLabels: Record<string, string> = {
    'property': 'Property Insurance',
    'casualty': 'Casualty Insurance',
    'life': 'Life Insurance',
    'health': 'Health Insurance',
    'surety': 'Surety Bonds',
    'crop': 'Crop Insurance',
    'commercial': 'Commercial Insurance',
  };

  return (
    <>
      <Helmet>
        <title>{agency.name} | Insurance Agency in {agency.city}, OK | Quotely</title>
        <meta name="description" content={`${agency.name} is a licensed insurance agency in ${agency.city}, Oklahoma. Contact them at ${agency.phone} for property, casualty, and other insurance needs.`} />
        <link rel="canonical" href={`https://quotely.info/agents/${stateCode}/${citySlug}/${agentSlug}`} />
        <meta property="og:title" content={`${agency.name} | Insurance Agency in ${agency.city}, OK`} />
        <meta property="og:description" content={`${agency.name} is a licensed insurance agency in ${agency.city}, Oklahoma. Contact them at ${agency.phone}.`} />
        <meta property="og:url" content={`https://quotely.info/agents/${stateCode}/${citySlug}/${agentSlug}`} />
        <meta property="og:type" content="business.business" />
      </Helmet>

      <LocalBusinessSchema
        name={agency.name}
        address={{
          street: agency.address,
          city: agency.city,
          state: agency.state,
          zip: agency.zip,
        }}
        phone={agency.phone}
        url={agency.website}
        description={`${agency.name} is a licensed insurance agency in ${agency.city}, Oklahoma offering ${agency.linesOfAuthority.map(l => lineLabels[l] || l).join(', ')}.`}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://quotely.info' },
          { name: 'Find Agents', url: 'https://quotely.info/agents' },
          { name: 'Oklahoma', url: `https://quotely.info/agents/${stateCode}` },
          { name: agency.city, url: `https://quotely.info/agents/${stateCode}/${citySlug}` },
          { name: agency.name, url: `https://quotely.info/agents/${stateCode}/${citySlug}/${agentSlug}` },
        ]}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-br from-cyan-500 via-teal-500 to-teal-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-cyan-200 text-sm mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <Link to="/agents" className="hover:text-white">Find an Agent</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <Link to={`/agents/${stateCode}`} className="hover:text-white">Oklahoma</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <Link to={`/agents/${stateCode}/${citySlug}`} className="hover:text-white">{agency.city}</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span aria-current="page">{agency.name}</span>
            </nav>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Logo/Initial */}
              <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                {agency.name.charAt(0)}
              </div>

              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
                  {agency.name}
                </h1>
                <p className="text-xl text-cyan-100">
                  {agency.city}, {agency.state} {agency.zip}
                </p>
                {agency.carrierAffiliation && (
                  <span className="inline-block mt-3 bg-white/20 text-white text-sm font-medium px-3 py-1 rounded-full">
                    {carrierLabels[agency.carrierAffiliation] || agency.carrierAffiliation}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4">About This Agency</h2>
                <p className="text-gray-600 leading-relaxed">
                  {agency.name} is a licensed insurance agency located in {agency.city}, Oklahoma.
                  {agency.carrierAffiliation === 'independent'
                    ? ' As an independent agency, they work with multiple insurance carriers to find the best coverage and rates for their clients.'
                    : agency.carrierAffiliation
                      ? ` As a ${agency.carrierAffiliation} agent, they specialize in ${agency.carrierAffiliation} insurance products and services.`
                      : ' Contact them directly for more information about their services and coverage options.'}
                </p>
              </div>

              {/* Lines of Authority */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Licensed Lines of Authority</h2>
                <div className="flex flex-wrap gap-3">
                  {agency.linesOfAuthority.map(line => (
                    <span
                      key={line}
                      className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full font-medium"
                    >
                      {lineLabels[line] || line}
                    </span>
                  ))}
                </div>
              </div>

              {/* License Info */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4">License Information</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">License Type</div>
                    <div className="font-semibold text-gray-900 capitalize">{agency.licenseType}</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">State</div>
                    <div className="font-semibold text-gray-900">Oklahoma</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">Status</div>
                    <div className="font-semibold text-green-600 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Active
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">Verify License</div>
                    <a
                      href="https://www.oid.ok.gov/licensing-and-education/licensee-look-up/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-cyan-600 hover:text-cyan-700"
                    >
                      OID Lookup
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <a
                    href={`tel:${agency.phone}`}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Phone</div>
                      <div className="font-medium text-gray-900">{agency.phone}</div>
                    </div>
                  </a>

                  {agency.email && (
                    <a
                      href={`mailto:${agency.email}`}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Email</div>
                        <div className="font-medium text-gray-900">{agency.email}</div>
                      </div>
                    </a>
                  )}

                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Address</div>
                      <div className="font-medium text-gray-900">
                        {agency.address}<br />
                        {agency.city}, {agency.state} {agency.zip}
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={`tel:${agency.phone}`}
                  className="block w-full mt-6 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-center"
                >
                  Call for a Quote
                </a>

                {agency.website && (
                  <a
                    href={agency.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full mt-3 text-center text-cyan-500 hover:text-cyan-700 font-medium py-2"
                  >
                    Visit Website
                  </a>
                )}
              </div>

              {/* Data Source */}
              <div className="bg-cyan-50 rounded-xl p-4 text-sm text-cyan-800">
                <p className="font-medium mb-1">Data Source</p>
                <p>
                  Agency information sourced from the{' '}
                  <a
                    href="https://www.oid.ok.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-cyan-600"
                  >
                    Oklahoma Insurance Department
                  </a>
                  {' '}and public records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
