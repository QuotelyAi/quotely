import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Quotely</title>
        <meta name="description" content="Quotely's terms of service govern your use of our insurance quoting platform and agent directory services." />
        <link rel="canonical" href="https://quotely.info/terms" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-br from-cyan-500 via-teal-500 to-teal-600 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-cyan-200 text-sm mb-4">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span>Terms of Service</span>
            </nav>
            <h1 className="text-4xl font-extrabold">Terms of Service</h1>
            <p className="text-cyan-100 mt-2">Last updated: January 7, 2026</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 prose prose-cyan max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using Quotely's website (quotely.info) and services, you agree to be bound by these
              Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2>2. Description of Services</h2>
            <p>
              Quotely provides an online platform that connects consumers with licensed insurance agents.
              Our services include:
            </p>
            <ul>
              <li>Insurance agent directory and search functionality</li>
              <li>Insurance quote request facilitation</li>
              <li>Educational content about insurance requirements</li>
              <li>Tools for insurance agents to manage their profiles</li>
            </ul>

            <h2>3. Not an Insurance Company</h2>
            <p>
              <strong>IMPORTANT:</strong> Quotely is NOT an insurance company or insurance agency. We do not
              sell, bind, or underwrite insurance policies. We provide a platform to connect you with licensed
              insurance professionals who can assist you with your insurance needs.
            </p>

            <h2>4. User Responsibilities</h2>
            <h3>4.1 Accurate Information</h3>
            <p>
              You agree to provide accurate, current, and complete information when using our services.
              Providing false information may result in inaccurate quotes or denial of coverage.
            </p>

            <h3>4.2 Lawful Use</h3>
            <p>You agree not to:</p>
            <ul>
              <li>Use our services for any unlawful purpose</li>
              <li>Impersonate any person or entity</li>
              <li>Submit false or misleading information</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use automated systems to access our services without permission</li>
            </ul>

            <h3>4.3 Age Requirement</h3>
            <p>You must be at least 18 years old to use our services.</p>

            <h2>5. Insurance Quotes and Information</h2>
            <h3>5.1 Quote Accuracy</h3>
            <p>
              Insurance quotes provided through our platform are estimates only. Final rates and coverage
              are determined by the insurance company after reviewing your complete application. Actual
              premiums may vary based on underwriting criteria.
            </p>

            <h3>5.2 Not Insurance Advice</h3>
            <p>
              Information on our website is for educational purposes only and should not be considered
              insurance, legal, or financial advice. Consult with a licensed professional for advice
              specific to your situation.
            </p>

            <h2>6. Agent Listings</h2>
            <h3>6.1 Agent Information</h3>
            <p>
              We make reasonable efforts to ensure agent listings are accurate. However, we do not guarantee
              the accuracy of agent profiles, ratings, or reviews. Verify agent licensing through your
              state's insurance department.
            </p>

            <h3>6.2 Agent Conduct</h3>
            <p>
              Quotely is not responsible for the conduct, advice, or services provided by agents listed
              on our platform. Your interactions with agents are between you and the agent.
            </p>

            <h2>7. Intellectual Property</h2>
            <p>
              All content on quotely.info, including text, graphics, logos, and software, is the property
              of Quotely and is protected by copyright and trademark laws. You may not reproduce, distribute,
              or create derivative works without our written permission.
            </p>

            <h2>8. Privacy</h2>
            <p>
              Your use of our services is also governed by our <Link to="/privacy">Privacy Policy</Link>,
              which describes how we collect, use, and protect your personal information.
            </p>

            <h2>9. Third-Party Services</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not responsible
              for the content, privacy practices, or terms of these third parties.
            </p>

            <h2>10. Disclaimers</h2>
            <h3>10.1 "As Is" Basis</h3>
            <p>
              Our services are provided "as is" and "as available" without warranties of any kind, either
              express or implied, including warranties of merchantability, fitness for a particular purpose,
              or non-infringement.
            </p>

            <h3>10.2 No Guarantee</h3>
            <p>
              We do not guarantee that you will receive insurance quotes, that quotes will be accurate,
              or that you will be able to obtain insurance coverage.
            </p>

            <h2>11. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Quotely shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising from your use of our services,
              including but not limited to loss of profits, data, or goodwill.
            </p>

            <h2>12. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Quotely, its officers, directors, employees, and
              agents from any claims, damages, losses, or expenses arising from your use of our services
              or violation of these terms.
            </p>

            <h2>13. Communications Consent (TCPA)</h2>
            <p>
              By providing your phone number, you consent to receive calls and text messages from Quotely
              and our partner agents regarding your insurance inquiry. You may opt out at any time by
              replying STOP to any message or contacting us.
            </p>

            <h2>14. Modifications</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective
              upon posting to this page. Your continued use of our services after changes constitutes
              acceptance of the modified terms.
            </p>

            <h2>15. Termination</h2>
            <p>
              We may terminate or suspend your access to our services at any time, without notice, for
              any reason, including violation of these terms.
            </p>

            <h2>16. Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of the State of Oklahoma, without regard
              to conflict of law principles. Any disputes shall be resolved in the courts of Oklahoma.
            </p>

            <h2>17. Severability</h2>
            <p>
              If any provision of these terms is found to be unenforceable, the remaining provisions
              shall continue in full force and effect.
            </p>

            <h2>18. Contact Information</h2>
            <p>For questions about these Terms of Service, contact us at:</p>
            <ul>
              <li>Email: legal@quotely.info</li>
              <li>Address: Quotely, Inc.</li>
            </ul>

            <h2>19. Insurance Licensing Disclosure</h2>
            <p>
              Quotely is not a licensed insurance agent, broker, or company. We operate as a lead
              generation and referral service. All insurance agents featured on our platform are
              independently licensed in their respective states. Verify agent licensing at{' '}
              <Link to="/requirements">your state's insurance department</Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
