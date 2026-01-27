import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getStateRequirements } from '../data/stateRequirements';

export default function StateRequirements() {
  const { stateCode } = useParams<{ stateCode: string }>();
  const state = getStateRequirements(stateCode || '');

  if (!state) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">State Not Found</h1>
          <Link to="/requirements" className="text-cyan-500 hover:underline">
            View all state requirements
          </Link>
        </div>
      </div>
    );
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(amount);
  };

  return (
    <>
      <Helmet>
        <title>{state.state} Auto Insurance Requirements | Minimum Coverage | Quotely</title>
        <meta name="description" content={`${state.state} requires ${state.autoInsurance.minimumLiability.format} liability insurance. Learn about ${state.state}'s auto insurance laws, PIP requirements, and find local agents.`} />
        <link rel="canonical" href={`https://quotely.info/requirements/${state.stateCode.toLowerCase()}`} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-gradient-to-br from-cyan-500 via-teal-500 to-teal-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-cyan-200 text-sm mb-4">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/requirements" className="hover:text-white">Insurance Requirements</Link>
              <span className="mx-2">/</span>
              <span>{state.state}</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              {state.state} Insurance Requirements
            </h1>
            <p className="text-xl text-cyan-100 max-w-3xl">
              Minimum liability: <strong>{state.autoInsurance.minimumLiability.format}</strong>
              {state.autoInsurance.noFaultState && " | No-Fault State"}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Liability Requirements */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Minimum Liability Requirements</h2>

                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-cyan-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-cyan-500">
                      {formatCurrency(state.autoInsurance.minimumLiability.bodilyInjuryPerPerson)}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Bodily Injury<br />Per Person</div>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-teal-500">
                      {formatCurrency(state.autoInsurance.minimumLiability.bodilyInjuryPerAccident)}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Bodily Injury<br />Per Accident</div>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-teal-700">
                      {formatCurrency(state.autoInsurance.minimumLiability.propertyDamage)}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Property<br />Damage</div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>{state.state}</strong> uses a {state.autoInsurance.noFaultState ? 'no-fault' : 'tort-based'} insurance system.
                    {state.autoInsurance.noFaultState
                      ? ' This means your own insurance pays for your medical expenses regardless of who caused the accident.'
                      : ' This means the at-fault driver\'s insurance pays for damages they cause.'}
                  </p>
                </div>
              </div>

              {/* Required Coverages */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Required Coverages in {state.state}</h2>

                {state.autoInsurance.requiredCoverages.length > 0 ? (
                  <ul className="space-y-3">
                    {state.autoInsurance.requiredCoverages.map((coverage) => (
                      <li key={coverage} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">{coverage}</span>
                          <span className="text-green-600 text-sm ml-2">(Required)</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">
                    {state.state} does not mandate auto insurance, but you must be able to prove financial responsibility
                    if you're in an accident.
                  </p>
                )}

                {state.autoInsurance.optionalCoverages.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-3">Optional Coverages</h3>
                    <div className="flex flex-wrap gap-2">
                      {state.autoInsurance.optionalCoverages.map((coverage) => (
                        <span key={coverage} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {coverage}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Special Requirements */}
              {(state.autoInsurance.pipRequired || state.autoInsurance.umUimRequired || state.autoInsurance.noFaultState) && (
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Special Requirements</h2>

                  <div className="space-y-4">
                    {state.autoInsurance.noFaultState && (
                      <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg">
                        <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">No-Fault State</h3>
                          <p className="text-gray-600 text-sm mt-1">
                            {state.state} is a no-fault state. Your own insurance pays for your injuries regardless of who caused the accident.
                            This typically limits your ability to sue the at-fault driver unless injuries are severe.
                          </p>
                        </div>
                      </div>
                    )}

                    {state.autoInsurance.pipRequired && (
                      <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Personal Injury Protection (PIP) Required</h3>
                          <p className="text-gray-600 text-sm mt-1">
                            {state.state} requires PIP coverage, which pays for your medical expenses, lost wages, and other costs
                            regardless of who caused the accident.
                          </p>
                        </div>
                      </div>
                    )}

                    {state.autoInsurance.umUimRequired && (
                      <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Uninsured/Underinsured Motorist Coverage Required</h3>
                          <p className="text-gray-600 text-sm mt-1">
                            {state.state} requires UM/UIM coverage to protect you if you're hit by a driver with no insurance
                            or insufficient coverage.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Consumer Rights */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Your Rights as a Consumer</h2>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-500">{state.consumers.gracePeriodsDay} days</div>
                    <div className="text-sm text-gray-600 mt-1">Grace Period</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-500">{state.consumers.cancellationNoticeDays} days</div>
                    <div className="text-sm text-gray-600 mt-1">Cancellation Notice</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-500">{state.consumers.freeQuoteLookPeriodDays} days</div>
                    <div className="text-sm text-gray-600 mt-1">Free Look Period</div>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href={state.consumers.complaintsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-500 hover:text-cyan-700 font-medium"
                  >
                    File a complaint with {state.licensing.regulatoryBody}
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Regulatory Info */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Regulatory Body</h3>
                <p className="text-gray-700 font-medium">{state.licensing.regulatoryBody}</p>
                <a
                  href={state.licensing.regulatoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-500 hover:text-cyan-700 text-sm mt-2"
                >
                  Visit Website
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Agent Requirements */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Agent Licensing</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">CE Hours Required</span>
                    <span className="font-medium text-gray-900">{state.licensing.ceRequiredHours} hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Renewal Period</span>
                    <span className="font-medium text-gray-900">{state.licensing.ceRenewalPeriod}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Exam Required</span>
                    <span className="font-medium text-gray-900">{state.licensing.examRequired ? 'Yes' : 'No'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Background Check</span>
                    <span className="font-medium text-gray-900">{state.licensing.backgroundCheckRequired ? 'Yes' : 'No'}</span>
                  </div>
                </div>
                <Link
                  to={`/licensing/${state.stateCode.toLowerCase()}`}
                  className="block mt-4 text-center text-cyan-500 hover:text-cyan-700 font-medium text-sm"
                >
                  Full Licensing Requirements
                </Link>
              </div>

              {/* Find Agents CTA */}
              <div className="bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Find Agents in {state.state}</h3>
                <p className="text-cyan-100 text-sm mb-4">
                  Connect with licensed agents who understand {state.state}'s insurance requirements.
                </p>
                <Link
                  to={`/agents/${state.stateCode.toLowerCase()}`}
                  className="block w-full bg-white text-cyan-500 font-semibold px-4 py-3 rounded-lg hover:bg-cyan-50 transition-colors text-center"
                >
                  View {state.state} Agents
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
