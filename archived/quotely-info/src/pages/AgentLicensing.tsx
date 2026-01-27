import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getAllStateRequirements } from '../data/stateRequirements';

export default function AgentLicensing() {
  const states = getAllStateRequirements().sort((a, b) => a.state.localeCompare(b.state));

  return (
    <>
      <Helmet>
        <title>Insurance Agent Licensing Requirements by State | Quotely</title>
        <meta name="description" content="Complete guide to insurance agent licensing requirements for all 50 states. Find CE hours, exam requirements, and regulatory bodies for property, casualty, life, and health insurance." />
        <link rel="canonical" href="https://quotely.info/licensing" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-gradient-to-br from-cyan-500 via-teal-500 to-teal-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Insurance Agent Licensing
            </h1>
            <p className="text-xl text-cyan-100 max-w-3xl">
              Comprehensive guide to becoming a licensed insurance agent in any state.
              Find licensing requirements, continuing education hours, and regulatory contacts.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* How to Get Licensed */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Become a Licensed Insurance Agent</h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-500">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Pre-Licensing Education</h3>
                <p className="text-sm text-gray-600">
                  Complete state-required pre-licensing courses for your chosen lines of insurance.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-500">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Pass State Exam</h3>
                <p className="text-sm text-gray-600">
                  Pass the proctored state licensing exam administered by PSI or Prometric.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-700">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Background Check</h3>
                <p className="text-sm text-gray-600">
                  Submit fingerprints and pass a criminal background check in most states.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">4</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Apply for License</h3>
                <p className="text-sm text-gray-600">
                  Submit your application through NIPR or directly with the state insurance department.
                </p>
              </div>
            </div>
          </div>

          {/* License Types */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Insurance Licenses</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Property & Casualty (P&C)</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Covers auto, homeowners, renters, commercial property, and liability insurance.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Auto insurance</li>
                  <li>• Homeowners & renters insurance</li>
                  <li>• Commercial property</li>
                  <li>• General liability</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Life & Health (L&H)</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Covers life insurance, annuities, health insurance, and disability insurance.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Term & whole life insurance</li>
                  <li>• Annuities</li>
                  <li>• Health insurance</li>
                  <li>• Disability & long-term care</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Personal Lines</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Limited license for personal auto and homeowners insurance only.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Personal auto insurance</li>
                  <li>• Homeowners insurance</li>
                  <li>• Available in select states</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Surplus Lines</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  For placing coverage with non-admitted carriers when standard markets decline.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• High-risk coverage</li>
                  <li>• Specialty lines</li>
                  <li>• Requires additional license</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Continuing Education */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Continuing Education Requirements</h2>
            <p className="text-gray-600 mb-6">
              All states require licensed insurance agents to complete continuing education (CE) hours to maintain
              their license. Requirements vary by state and license type.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-cyan-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-cyan-500 mb-2">20-24</div>
                <div className="text-sm font-medium text-gray-700">Average CE Hours</div>
                <p className="text-sm text-gray-500 mt-1">Most states require 20-24 hours per renewal period</p>
              </div>
              <div className="bg-teal-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-teal-500 mb-2">2-3</div>
                <div className="text-sm font-medium text-gray-700">Ethics Hours</div>
                <p className="text-sm text-gray-500 mt-1">Many states mandate ethics training within CE requirements</p>
              </div>
              <div className="bg-teal-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-teal-700 mb-2">2 Years</div>
                <div className="text-sm font-medium text-gray-700">Typical License Period</div>
                <p className="text-sm text-gray-500 mt-1">Most states require renewal every 2 years</p>
              </div>
            </div>
          </div>

          {/* State Requirements Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-12">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900">State Licensing Requirements</h2>
              <p className="text-gray-600 mt-1">Click any state for detailed licensing information.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">State</th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">CE Hours</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Regulatory Body</th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {states.map((state) => (
                    <tr key={state.stateCode} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <Link
                          to={`/requirements/${state.stateCode.toLowerCase()}`}
                          className="font-medium text-cyan-500 hover:text-cyan-700"
                        >
                          {state.state}
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800">
                          {state.licensing.ceRequiredHours} hours
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {state.licensing.regulatoryBody}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <a
                          href={state.licensing.regulatoryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-teal-500 hover:text-teal-600 font-medium"
                        >
                          Official Site
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* NIPR Section */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">National Insurance Producer Registry (NIPR)</h2>
            <p className="text-gray-600 mb-6">
              NIPR provides a central platform for insurance licensing across all states. Most states accept
              license applications through NIPR, making it easier to get licensed in multiple states.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Initial Licensing</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Apply for resident state license first</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Complete all pre-licensing requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Pay application and exam fees</span>
                  </li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Non-Resident Licenses</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Most states waive exams for non-residents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Apply through NIPR for faster processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Maintain your resident license as active</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 text-center">
              <a
                href="https://nipr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-700 font-medium"
              >
                Visit NIPR.com
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Already Licensed?</h2>
            <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">
              List your agency on Quotely and connect with consumers looking for insurance in your area.
            </p>
            <Link
              to="/agents"
              className="inline-block bg-white text-cyan-500 font-semibold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors"
            >
              Browse Agent Directory
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
