import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getAllStateRequirements } from '../data/stateRequirements';
import { CollectionPageSchema, BreadcrumbSchema, FAQSchema } from '../components/SchemaMarkup';

export default function InsuranceRequirements() {
  const states = getAllStateRequirements().sort((a, b) => a.state.localeCompare(b.state));
  const noFaultStates = states.filter(s => s.autoInsurance.noFaultState);

  return (
    <>
      <Helmet>
        <title>State Auto Insurance Requirements | Minimum Coverage by State | Quotely</title>
        <meta name="description" content="Find auto insurance minimum requirements for all 50 states. Learn about liability limits, no-fault states, PIP requirements, and uninsured motorist coverage." />
        <link rel="canonical" href="https://quotely.info/requirements" />
        <meta property="og:title" content="State Auto Insurance Requirements | Quotely" />
        <meta property="og:description" content="Find auto insurance minimum requirements for all 50 states. Learn about liability limits and coverage requirements." />
        <meta property="og:url" content="https://quotely.info/requirements" />
        <meta property="og:type" content="website" />
      </Helmet>

      <CollectionPageSchema
        name="State Auto Insurance Requirements"
        description="Find auto insurance minimum requirements for all 50 states. Learn about liability limits, no-fault states, PIP requirements, and uninsured motorist coverage."
        url="https://quotely.info/requirements"
        itemCount={50}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://quotely.info' },
          { name: 'Insurance Requirements', url: 'https://quotely.info/requirements' },
        ]}
      />
      <FAQSchema
        faqs={[
          {
            question: 'What is the minimum auto insurance required?',
            answer: 'Minimum auto insurance requirements vary by state. Most states require liability insurance covering bodily injury and property damage. Common minimums are 25/50/25 (25k per person, 50k per accident bodily injury, 25k property damage).',
          },
          {
            question: 'What are no-fault insurance states?',
            answer: `There are ${noFaultStates.length} no-fault states that require Personal Injury Protection (PIP) coverage. In these states, your own insurance pays for your injuries regardless of who caused the accident.`,
          },
          {
            question: 'Do I need uninsured motorist coverage?',
            answer: 'While not required in all states, uninsured motorist coverage protects you if you are hit by a driver without insurance. About 13% of drivers are uninsured, making this coverage highly recommended.',
          },
        ]}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-gradient-to-br from-cyan-500 via-teal-500 to-teal-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              State Auto Insurance Requirements
            </h1>
            <p className="text-xl text-cyan-100 max-w-3xl">
              Every state has different minimum insurance requirements. Find your state's liability minimums,
              required coverages, and understand what you need to legally drive.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Quick Facts */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Liability Insurance</h3>
              <p className="text-gray-600 text-sm">
                Required in 49 states. Covers injuries and property damage you cause to others in an accident.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{noFaultStates.length} No-Fault States</h3>
              <p className="text-gray-600 text-sm">
                These states require PIP coverage that pays your medical bills regardless of who caused the accident.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">UM/UIM Coverage</h3>
              <p className="text-gray-600 text-sm">
                Many states require uninsured/underinsured motorist coverage to protect you from uninsured drivers.
              </p>
            </div>
          </div>

          {/* Understanding Liability Limits */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Liability Limits</h2>
            <p className="text-gray-600 mb-6">
              Liability limits are shown in a format like <strong>25/50/25</strong>. Here's what each number means:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-cyan-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-cyan-500 mb-2">$25,000</div>
                <div className="text-sm font-medium text-gray-700">Bodily Injury Per Person</div>
                <p className="text-sm text-gray-500 mt-1">Maximum paid for injuries to one person</p>
              </div>
              <div className="bg-teal-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-teal-600 mb-2">$50,000</div>
                <div className="text-sm font-medium text-gray-700">Bodily Injury Per Accident</div>
                <p className="text-sm text-gray-500 mt-1">Maximum total paid for all injuries in one accident</p>
              </div>
              <div className="bg-teal-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-teal-700 mb-2">$25,000</div>
                <div className="text-sm font-medium text-gray-700">Property Damage</div>
                <p className="text-sm text-gray-500 mt-1">Maximum paid for property damage you cause</p>
              </div>
            </div>
          </div>

          {/* State Requirements Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900">All 50 States Minimum Requirements</h2>
              <p className="text-gray-600 mt-1">Click any state for detailed requirements and local agents.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">State</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Minimum Liability</th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">No-Fault</th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">PIP Required</th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">UM/UIM Required</th>
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
                      <td className="px-6 py-4 font-mono text-gray-900">
                        {state.autoInsurance.minimumLiability.format}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {state.autoInsurance.noFaultState ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">Yes</span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {state.autoInsurance.pipRequired ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Yes</span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {state.autoInsurance.umUimRequired ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Yes</span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Federal Requirements Section */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Federal Insurance Regulations</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Commercial Vehicle Insurance</h3>
                <p className="text-gray-600">
                  The Federal Motor Carrier Safety Administration (FMCSA) requires interstate commercial vehicles
                  to carry minimum liability insurance:
                </p>
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>$750,000</strong> for general freight carriers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>$1,000,000</strong> for oil transport</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>$5,000,000</strong> for hazardous materials</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">HIPAA (Health Insurance)</h3>
                <p className="text-gray-600">
                  The Health Insurance Portability and Accountability Act protects your medical information
                  and sets standards for health insurance coverage continuity.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Flood Insurance (NFIP)</h3>
                <p className="text-gray-600">
                  Properties in high-risk flood zones with federally-backed mortgages are required to
                  carry flood insurance through the National Flood Insurance Program.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Find an Agent in Your State</h2>
            <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">
              Connect with a licensed insurance agent who knows your state's requirements and can help you find the right coverage.
            </p>
            <Link
              to="/agents"
              className="inline-block bg-white text-cyan-500 font-semibold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors"
            >
              Find Local Agents
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
