import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Quotely</title>
        <meta name="description" content="Quotely's privacy policy explains how we collect, use, and protect your personal information when you use our insurance quoting platform." />
        <link rel="canonical" href="https://quotely.info/privacy" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-br from-cyan-500 via-teal-500 to-teal-600 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-cyan-200 text-sm mb-4">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span>Privacy Policy</span>
            </nav>
            <h1 className="text-4xl font-extrabold">Privacy Policy</h1>
            <p className="text-cyan-100 mt-2">Last updated: January 7, 2026</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 prose prose-cyan max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Quotely ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our website quotely.info and use our insurance
              quoting platform services.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide, including:</p>
            <ul>
              <li>Name and contact information (email, phone number, address)</li>
              <li>Date of birth and demographic information</li>
              <li>Vehicle information (make, model, VIN)</li>
              <li>Driving history and license information</li>
              <li>Insurance history and coverage preferences</li>
              <li>Payment information when applicable</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we automatically collect:</p>
            <ul>
              <li>IP address and device information</li>
              <li>Browser type and operating system</li>
              <li>Pages viewed and time spent on pages</li>
              <li>Referring website and exit pages</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul>
              <li>Provide insurance quotes and connect you with agents</li>
              <li>Process your requests and transactions</li>
              <li>Communicate with you about our services</li>
              <li>Improve our website and user experience</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and ensure security</li>
              <li>Send marketing communications (with your consent)</li>
            </ul>

            <h2>4. Information Sharing</h2>
            <h3>4.1 Insurance Agents and Carriers</h3>
            <p>
              To provide you with insurance quotes, we share your information with licensed insurance agents
              and carriers. This sharing is necessary to fulfill your request for quotes.
            </p>

            <h3>4.2 Service Providers</h3>
            <p>
              We may share information with third-party vendors who perform services on our behalf, including
              hosting, analytics, and customer service.
            </p>

            <h3>4.3 Legal Requirements</h3>
            <p>
              We may disclose information when required by law, court order, or government regulation,
              or when we believe disclosure is necessary to protect our rights or the safety of others.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information,
              including encryption, secure servers, and access controls. However, no method of transmission over
              the Internet is 100% secure.
            </p>

            <h2>6. Your Rights and Choices</h2>
            <h3>6.1 Access and Correction</h3>
            <p>You have the right to access, correct, or delete your personal information.</p>

            <h3>6.2 Opt-Out</h3>
            <p>
              You may opt out of marketing communications by clicking "unsubscribe" in any email or
              contacting us directly.
            </p>

            <h3>6.3 California Residents (CCPA)</h3>
            <p>
              California residents have additional rights under the California Consumer Privacy Act,
              including the right to know what personal information we collect and the right to request deletion.
            </p>

            <h3>6.4 Do Not Sell My Personal Information</h3>
            <p>
              We do not sell your personal information. We share information with insurance agents and carriers
              solely for the purpose of providing you with quotes.
            </p>

            <h2>7. Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to enhance your experience. You can control cookies
              through your browser settings. Disabling cookies may limit some website functionality.
            </p>

            <h2>8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party sites. We are not responsible for the privacy
              practices of these sites. We encourage you to review their privacy policies.
            </p>

            <h2>9. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under 18 years of age. We do not knowingly
              collect personal information from children.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material changes
              by posting the new policy on this page and updating the "Last updated" date.
            </p>

            <h2>11. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:</p>
            <ul>
              <li>Email: privacy@quotely.info</li>
              <li>Address: Quotely, Inc.</li>
            </ul>

            <h2>12. State-Specific Disclosures</h2>
            <h3>Insurance Information Practices</h3>
            <p>
              As required by state insurance regulations, we disclose that the information you provide
              may be used in connection with insurance transactions. You have the right to access and
              correct information in your file. See your state's insurance requirements page for more details.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
