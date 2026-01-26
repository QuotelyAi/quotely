import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Phone, Mail, MessageSquare, Scale, Building, FileText, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Regulatory Compliance - Quotely Insurance Platform',
  description: 'Quotely\'s commitment to regulatory compliance including ADA, FCC, TCPA, state insurance laws, and consumer protection regulations.',
  openGraph: {
    title: 'Regulatory Compliance - Quotely Insurance Platform',
    description: 'Quotely\'s commitment to regulatory compliance.',
  },
};

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-gray-950 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-4">Regulatory Compliance</h1>
        <p className="text-lg text-gray-400 mb-8">
          Quotely is committed to maintaining compliance with all applicable federal, state, and local laws and regulations. This page outlines our compliance framework and your rights under various regulatory requirements.
        </p>

        <div className="space-y-8">

          {/* ADA Compliance */}
          <section className="bg-gray-900 rounded-lg border border-gray-800 p-8">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-yellow-500 mr-3" />
              <h2 className="text-2xl font-semibold text-white">Americans with Disabilities Act (ADA) Compliance</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                Quotely is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply the relevant accessibility standards.
              </p>
              <h3 className="font-semibold text-white mt-4">Our Accessibility Commitment:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>We strive to conform to Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards</li>
                <li>Our website is designed to be navigable using keyboard-only controls</li>
                <li>We provide text alternatives for non-text content</li>
                <li>Our content is designed to be compatible with assistive technologies including screen readers</li>
                <li>We maintain sufficient color contrast ratios for readability</li>
              </ul>
              <h3 className="font-semibold text-white mt-4">Applicable Laws:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Title III of the ADA (42 U.S.C. 12181-12189)</strong> - Prohibits discrimination on the basis of disability in places of public accommodation</li>
                <li><strong className="text-white">Section 508 of the Rehabilitation Act</strong> - Requires federal agencies and their contractors to make electronic information accessible</li>
                <li><strong className="text-white">21st Century Communications and Video Accessibility Act (CVAA)</strong> - Ensures access to modern communications</li>
              </ul>
              <p className="mt-4 text-sm bg-gray-800 p-4 rounded">
                <strong className="text-white">Accessibility Feedback:</strong> If you experience any difficulty accessing any part of our website or need assistance, please contact us at <a href="mailto:accessibility@tryquotely.com" className="text-yellow-500 hover:text-yellow-400">accessibility@tryquotely.com</a> or call <a href="tel:+19183956335" className="text-yellow-500 hover:text-yellow-400">(918) 395-6335</a>.
              </p>
            </div>
          </section>

          {/* FCC Compliance */}
          <section className="bg-gray-900 rounded-lg border border-gray-800 p-8">
            <div className="flex items-center mb-4">
              <Phone className="w-8 h-8 text-yellow-500 mr-3" />
              <h2 className="text-2xl font-semibold text-white">FCC Regulations Compliance</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                Quotely complies with all applicable Federal Communications Commission (FCC) regulations governing telecommunications and electronic communications.
              </p>
              <h3 className="font-semibold text-white mt-4">Key FCC Regulations We Follow:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">47 CFR Part 64 - Telecommunications Consumer Protection</strong> - Rules governing carrier services and consumer protection</li>
                <li><strong className="text-white">47 CFR Part 68 - Connection of Terminal Equipment</strong> - Technical standards for connected devices</li>
                <li><strong className="text-white">Truth-in-Billing Rules (47 CFR 64.2400-2401)</strong> - Requirements for clear and accurate billing</li>
                <li><strong className="text-white">Customer Proprietary Network Information (CPNI) Rules (47 CFR 64.2001-2011)</strong> - Protection of customer telecommunications data</li>
              </ul>
            </div>
          </section>

          {/* TCPA / SMS Compliance */}
          <section className="bg-gray-900 rounded-lg border border-gray-800 p-8">
            <div className="flex items-center mb-4">
              <MessageSquare className="w-8 h-8 text-yellow-500 mr-3" />
              <h2 className="text-2xl font-semibold text-white">TCPA & SMS/Text Message Compliance</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                Quotely strictly adheres to the Telephone Consumer Protection Act (TCPA) and all related regulations governing telephone calls, text messages, and fax communications.
              </p>
              <h3 className="font-semibold text-white mt-4">Applicable Laws:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Telephone Consumer Protection Act (TCPA) - 47 U.S.C. 227</strong> - Restricts telemarketing calls, auto-dialed calls, prerecorded calls, text messages, and unsolicited faxes</li>
                <li><strong className="text-white">FCC TCPA Rules - 47 CFR 64.1200</strong> - Implementing regulations for the TCPA</li>
                <li><strong className="text-white">Telemarketing Sales Rule (TSR) - 16 CFR Part 310</strong> - FTC rules governing telemarketing practices</li>
                <li><strong className="text-white">Do-Not-Call Implementation Act</strong> - Establishes the National Do-Not-Call Registry</li>
              </ul>
              <h3 className="font-semibold text-white mt-4">Your Rights Under the TCPA:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You have the right to opt-out of receiving marketing text messages at any time by replying STOP</li>
                <li>We obtain express written consent before sending marketing communications via text or automated calls</li>
                <li>We honor the National Do-Not-Call Registry</li>
                <li>We maintain internal do-not-call lists and honor opt-out requests within 30 days</li>
                <li>All text messages identify Quotely as the sender and include opt-out instructions</li>
              </ul>
              <h3 className="font-semibold text-white mt-4">SMS Message Terms:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Message frequency varies based on your interactions and preferences</li>
                <li>Message and data rates may apply depending on your mobile carrier</li>
                <li>Text HELP for assistance or STOP to cancel at any time</li>
                <li>Carriers are not liable for delayed or undelivered messages</li>
              </ul>
              <p className="mt-4 text-sm bg-gray-800 p-4 rounded">
                <strong className="text-white">To opt out of SMS communications:</strong> Reply STOP to any text message, email <a href="mailto:optout@tryquotely.com" className="text-yellow-500 hover:text-yellow-400">optout@tryquotely.com</a>, or call <a href="tel:+19183956335" className="text-yellow-500 hover:text-yellow-400">(918) 395-6335</a>.
              </p>
            </div>
          </section>

          {/* CAN-SPAM Compliance */}
          <section className="bg-gray-900 rounded-lg border border-gray-800 p-8">
            <div className="flex items-center mb-4">
              <Mail className="w-8 h-8 text-yellow-500 mr-3" />
              <h2 className="text-2xl font-semibold text-white">CAN-SPAM Act Compliance</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                Quotely complies with the Controlling the Assault of Non-Solicited Pornography And Marketing (CAN-SPAM) Act of 2003.
              </p>
              <h3 className="font-semibold text-white mt-4">Applicable Law:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">CAN-SPAM Act - 15 U.S.C. 7701-7713</strong> - Sets requirements for commercial email messages</li>
                <li><strong className="text-white">FTC CAN-SPAM Rule - 16 CFR Part 316</strong> - Implementing regulations</li>
              </ul>
              <h3 className="font-semibold text-white mt-4">Our Email Practices:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>We do not use false or misleading header information</li>
                <li>We do not use deceptive subject lines</li>
                <li>We identify all messages as advertisements where required</li>
                <li>We include our valid physical postal address in all commercial emails</li>
                <li>We honor opt-out requests within 10 business days</li>
                <li>We provide a clear and conspicuous opt-out mechanism in every commercial email</li>
              </ul>
            </div>
          </section>

          {/* Insurance Regulations */}
          <section className="bg-gray-900 rounded-lg border border-gray-800 p-8">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-yellow-500 mr-3" />
              <h2 className="text-2xl font-semibold text-white">Insurance Industry Regulations</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                As an insurance technology platform, Quotely operates in compliance with applicable federal and state insurance regulations.
              </p>
              <h3 className="font-semibold text-white mt-4">Federal Insurance Regulations:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">McCarran-Ferguson Act (15 U.S.C. 1011-1015)</strong> - Establishes state regulation of insurance</li>
                <li><strong className="text-white">Gramm-Leach-Bliley Act (GLBA) - 15 U.S.C. 6801-6809</strong> - Financial privacy requirements for insurance entities</li>
                <li><strong className="text-white">Fair Credit Reporting Act (FCRA) - 15 U.S.C. 1681</strong> - Requirements for use of consumer credit information in insurance underwriting</li>
                <li><strong className="text-white">HIPAA (Health Insurance Portability and Accountability Act)</strong> - Privacy and security standards for protected health information</li>
                <li><strong className="text-white">Dodd-Frank Wall Street Reform Act</strong> - Federal Insurance Office oversight provisions</li>
              </ul>
              <h3 className="font-semibold text-white mt-4">State Insurance Regulations:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">State Department of Insurance (DOI) Requirements</strong> - We comply with licensing, rate filing, and consumer protection requirements in all states where we operate</li>
                <li><strong className="text-white">NAIC Model Laws</strong> - We follow National Association of Insurance Commissioners model regulations adopted by states</li>
                <li><strong className="text-white">Unfair Trade Practices Acts</strong> - We comply with state laws prohibiting unfair or deceptive insurance practices</li>
                <li><strong className="text-white">Insurance Data Security Model Law</strong> - We maintain information security programs consistent with NAIC requirements</li>
              </ul>
              <h3 className="font-semibold text-white mt-4">Oklahoma Insurance Laws (Home State):</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Oklahoma Insurance Code (36 O.S.)</strong> - Primary insurance regulatory framework</li>
                <li><strong className="text-white">Oklahoma Unfair Claims Settlement Practices Act (36 O.S. 1250.1-1250.16)</strong></li>
                <li><strong className="text-white">Oklahoma Insurance Information and Privacy Protection Act (36 O.S. 6051-6065)</strong></li>
              </ul>
            </div>
          </section>

          {/* Financial Services Regulations */}
          <section className="bg-gray-900 rounded-lg border border-gray-800 p-8">
            <div className="flex items-center mb-4">
              <Scale className="w-8 h-8 text-yellow-500 mr-3" />
              <h2 className="text-2xl font-semibold text-white">Financial Services Regulations</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                To the extent Quotely&apos;s services involve variable insurance products or securities, we maintain awareness of applicable financial services regulations.
              </p>
              <h3 className="font-semibold text-white mt-4">Relevant Regulations:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">FINRA Rules</strong> - Financial Industry Regulatory Authority rules governing broker-dealers (applicable to variable product sales)</li>
                <li><strong className="text-white">SEC Regulation Best Interest</strong> - Standards of conduct for broker-dealers making recommendations</li>
                <li><strong className="text-white">Investment Advisers Act of 1940</strong> - Requirements for investment advice (where applicable)</li>
                <li><strong className="text-white">Securities Act of 1933 & Securities Exchange Act of 1934</strong> - Federal securities laws</li>
              </ul>
              <p className="mt-4 text-sm bg-yellow-500/10 p-4 rounded border border-yellow-500/30">
                <strong className="text-yellow-500">Note:</strong> Quotely is primarily an insurance technology platform. Insurance products are not securities unless specifically designated as variable products. Please consult with a licensed professional for specific regulatory questions.
              </p>
            </div>
          </section>

          {/* Data Privacy */}
          <section className="bg-gray-900 rounded-lg border border-gray-800 p-8">
            <div className="flex items-center mb-4">
              <FileText className="w-8 h-8 text-yellow-500 mr-3" />
              <h2 className="text-2xl font-semibold text-white">Data Privacy Regulations</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                Quotely is committed to protecting your personal information in accordance with applicable privacy laws.
              </p>
              <h3 className="font-semibold text-white mt-4">Applicable Privacy Laws:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">California Consumer Privacy Act (CCPA) - Cal. Civ. Code 1798.100-1798.199</strong> - Rights for California residents regarding personal information</li>
                <li><strong className="text-white">California Privacy Rights Act (CPRA)</strong> - Enhanced privacy rights effective 2023</li>
                <li><strong className="text-white">Virginia Consumer Data Protection Act (VCDPA)</strong> - Privacy rights for Virginia residents</li>
                <li><strong className="text-white">Colorado Privacy Act (CPA)</strong> - Privacy rights for Colorado residents</li>
                <li><strong className="text-white">Connecticut Data Privacy Act (CTDPA)</strong> - Privacy rights for Connecticut residents</li>
                <li><strong className="text-white">Utah Consumer Privacy Act (UCPA)</strong> - Privacy rights for Utah residents</li>
              </ul>
              <h3 className="font-semibold text-white mt-4">Your Privacy Rights May Include:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right to know what personal information is collected</li>
                <li>Right to delete personal information</li>
                <li>Right to opt-out of sale/sharing of personal information</li>
                <li>Right to correct inaccurate personal information</li>
                <li>Right to data portability</li>
                <li>Right to non-discrimination for exercising privacy rights</li>
              </ul>
              <p className="mt-4">
                For more details, please review our <Link href="/privacy" className="text-yellow-500 hover:text-yellow-400">Privacy Policy</Link>.
              </p>
            </div>
          </section>

          {/* State-Specific Notices */}
          <section className="bg-gray-900 rounded-lg border border-gray-800 p-8">
            <div className="flex items-center mb-4">
              <Building className="w-8 h-8 text-yellow-500 mr-3" />
              <h2 className="text-2xl font-semibold text-white">State-Specific Notices</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <h3 className="font-semibold text-white">California Residents:</h3>
              <p className="leading-relaxed mb-4">
                Under the California Consumer Privacy Act (CCPA), California residents have specific rights regarding their personal information. You may request disclosure of categories and specific pieces of personal information collected, request deletion of personal information, and opt-out of the sale of personal information. To exercise these rights, contact us at <a href="mailto:privacy@tryquotely.com" className="text-yellow-500 hover:text-yellow-400">privacy@tryquotely.com</a>.
              </p>

              <h3 className="font-semibold text-white">New York Residents:</h3>
              <p className="leading-relaxed mb-4">
                New York Department of Financial Services (NYDFS) Cybersecurity Regulation (23 NYCRR 500) requires covered entities to maintain cybersecurity programs. Quotely maintains security measures consistent with these requirements.
              </p>

              <h3 className="font-semibold text-white">Texas Residents:</h3>
              <p className="leading-relaxed mb-4">
                Under the Texas Insurance Code and Texas Business & Commerce Code, Texas residents have certain rights regarding their insurance and consumer data. Contact us for more information about your rights.
              </p>

              <h3 className="font-semibold text-white">Florida Residents:</h3>
              <p className="leading-relaxed">
                Florida residents are protected under the Florida Information Protection Act (FIPA) and Florida insurance regulations. We maintain compliance with Florida&apos;s data breach notification and insurance consumer protection requirements.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gray-900 rounded-lg border border-gray-800 p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Compliance Contact Information</h2>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                For questions about our regulatory compliance practices or to exercise your rights under any applicable law, please contact our Compliance Department:
              </p>
              <div className="bg-gray-800 p-6 rounded-lg">
                <p className="font-semibold text-white mb-2">Quotely, Inc. DBA &quot;Try Quotely&quot;</p>
                <p>Compliance Department</p>
                <p>6010 S. 66th E. Ave, Suite B</p>
                <p>Tulsa, OK 74145</p>
                <p className="mt-3">
                  <strong className="text-white">Email:</strong> <a href="mailto:compliance@tryquotely.com" className="text-yellow-500 hover:text-yellow-400">compliance@tryquotely.com</a>
                </p>
                <p>
                  <strong className="text-white">Phone:</strong> <a href="tel:+19183956335" className="text-yellow-500 hover:text-yellow-400">(918) 395-6335</a>
                </p>
                <p>
                  <strong className="text-white">Privacy Requests:</strong> <a href="mailto:privacy@tryquotely.com" className="text-yellow-500 hover:text-yellow-400">privacy@tryquotely.com</a>
                </p>
                <p>
                  <strong className="text-white">Accessibility:</strong> <a href="mailto:accessibility@tryquotely.com" className="text-yellow-500 hover:text-yellow-400">accessibility@tryquotely.com</a>
                </p>
                <p>
                  <strong className="text-white">SMS Opt-Out:</strong> <a href="mailto:optout@tryquotely.com" className="text-yellow-500 hover:text-yellow-400">optout@tryquotely.com</a>
                </p>
              </div>
            </div>
          </section>

          {/* Last Updated */}
          <section className="bg-gray-900 rounded-lg border border-gray-800 p-8">
            <p className="text-sm text-gray-400">
              <strong className="text-white">Last Updated:</strong> January 2025
            </p>
            <p className="text-sm text-gray-400 mt-2">
              This compliance page is reviewed and updated periodically to reflect changes in applicable laws and regulations. We encourage you to review this page regularly.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
