import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Accessibility() {
  return (
    <>
      <Helmet>
        <title>Accessibility Statement | Quotely</title>
        <meta name="description" content="Quotely's commitment to digital accessibility. Learn about our WCAG 2.1 AA compliance, ADA accommodations, and accessibility features for users with disabilities." />
        <link rel="canonical" href="https://quotely.info/accessibility" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-br from-cyan-500 via-teal-500 to-teal-600 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-cyan-200 text-sm mb-4" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span aria-current="page">Accessibility</span>
            </nav>
            <h1 className="text-4xl font-extrabold">Accessibility Statement</h1>
            <p className="text-cyan-100 mt-2">Last updated: January 8, 2026</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 prose prose-cyan max-w-none">

            <h2 id="commitment">Our Commitment to Accessibility</h2>
            <p>
              Quotely is committed to ensuring digital accessibility for people with disabilities. We are continually
              improving the user experience for everyone and applying the relevant accessibility standards to ensure
              we provide equal access to all users.
            </p>
            <p>
              We believe that the internet should be available and accessible to anyone, and we are committed to
              providing a website that is accessible to the widest possible audience, regardless of circumstance
              and ability.
            </p>

            <h2 id="standards">Conformance Standards</h2>
            <p>
              Quotely strives to conform to the following accessibility standards:
            </p>

            <h3>Federal Compliance</h3>
            <ul>
              <li>
                <strong>Americans with Disabilities Act (ADA)</strong> - Title III requires that places of public
                accommodation, including websites, be accessible to individuals with disabilities.
              </li>
              <li>
                <strong>Section 508 of the Rehabilitation Act</strong> - Requires federal agencies' electronic and
                information technology to be accessible to people with disabilities.
              </li>
              <li>
                <strong>21st Century Communications and Video Accessibility Act (CVAA)</strong> - Ensures that
                communications services and video programming are accessible to people with disabilities.
              </li>
            </ul>

            <h3>International Standards</h3>
            <ul>
              <li>
                <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong> - The internationally
                recognized standard for web accessibility, developed by the World Wide Web Consortium (W3C).
              </li>
              <li>
                <strong>EN 301 549</strong> - The European standard for digital accessibility.
              </li>
            </ul>

            <h3>State-Specific Compliance</h3>
            <p>
              We comply with state accessibility laws including but not limited to:
            </p>
            <ul>
              <li><strong>California</strong> - Unruh Civil Rights Act and California Consumer Privacy Act (CCPA) accessibility requirements</li>
              <li><strong>New York</strong> - New York State Human Rights Law digital accessibility provisions</li>
              <li><strong>Texas</strong> - Texas Administrative Code accessibility requirements</li>
              <li><strong>Florida</strong> - Florida Civil Rights Act accessibility provisions</li>
              <li>All other state accessibility laws and regulations as applicable</li>
            </ul>

            <h2 id="features">Accessibility Features</h2>
            <p>
              We have implemented the following accessibility features on our website:
            </p>

            <h3>Visual Accessibility</h3>
            <ul>
              <li><strong>Text Resizing</strong> - Text can be resized up to 200% without loss of content or functionality</li>
              <li><strong>Color Contrast</strong> - We maintain a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text</li>
              <li><strong>High Contrast Mode</strong> - Users can enable high contrast mode via our accessibility widget</li>
              <li><strong>No Color-Only Information</strong> - Information is never conveyed by color alone</li>
              <li><strong>Focus Indicators</strong> - Clear visual focus indicators for keyboard navigation</li>
            </ul>

            <h3>Motor/Mobility Accessibility</h3>
            <ul>
              <li><strong>Keyboard Navigation</strong> - All functionality is available via keyboard</li>
              <li><strong>Skip Navigation Links</strong> - Allow users to skip to main content</li>
              <li><strong>Large Click Targets</strong> - Interactive elements have sufficient size for easy activation</li>
              <li><strong>No Time Limits</strong> - Users have unlimited time to complete tasks</li>
              <li><strong>Reduced Motion Option</strong> - Users can disable animations and transitions</li>
            </ul>

            <h3>Auditory Accessibility</h3>
            <ul>
              <li><strong>No Audio Auto-Play</strong> - Audio does not play automatically</li>
              <li><strong>Visual Alternatives</strong> - All audio content has text alternatives</li>
              <li><strong>Captions Available</strong> - Video content includes captions when applicable</li>
            </ul>

            <h3>Cognitive Accessibility</h3>
            <ul>
              <li><strong>Clear Language</strong> - We use plain language and avoid jargon where possible</li>
              <li><strong>Consistent Navigation</strong> - Navigation is consistent throughout the site</li>
              <li><strong>Error Prevention</strong> - Forms include clear instructions and error messages</li>
              <li><strong>Predictable Behavior</strong> - Interactive elements behave consistently</li>
              <li><strong>Reading Level</strong> - Content is written at an accessible reading level</li>
            </ul>

            <h3>Screen Reader Compatibility</h3>
            <ul>
              <li><strong>ARIA Labels</strong> - Proper ARIA labels and roles for all interactive elements</li>
              <li><strong>Semantic HTML</strong> - Proper heading structure and semantic markup</li>
              <li><strong>Alt Text</strong> - All images include descriptive alternative text</li>
              <li><strong>Form Labels</strong> - All form inputs have associated labels</li>
              <li><strong>Live Regions</strong> - Dynamic content updates are announced to screen readers</li>
            </ul>

            <h2 id="tools">Accessibility Tools</h2>
            <p>
              We provide an accessibility widget (accessible via the icon in the bottom-left corner) that allows you to:
            </p>
            <ul>
              <li>Increase or decrease text size</li>
              <li>Enable high contrast mode</li>
              <li>Reduce motion and animations</li>
              <li>Underline all links for better visibility</li>
            </ul>

            <h2 id="assistive-technology">Assistive Technology Compatibility</h2>
            <p>
              Our website is designed to be compatible with the following assistive technologies:
            </p>
            <ul>
              <li><strong>Screen Readers</strong> - JAWS, NVDA, VoiceOver, TalkBack</li>
              <li><strong>Screen Magnifiers</strong> - ZoomText, Windows Magnifier, macOS Zoom</li>
              <li><strong>Voice Recognition</strong> - Dragon NaturallySpeaking, Windows Speech Recognition</li>
              <li><strong>Keyboard-Only Navigation</strong> - Full functionality without a mouse</li>
              <li><strong>Switch Devices</strong> - Compatible with single-switch and sip-and-puff devices</li>
            </ul>

            <h2 id="browser-support">Browser Support</h2>
            <p>
              For the best accessible experience, we recommend using the latest versions of:
            </p>
            <ul>
              <li>Google Chrome</li>
              <li>Mozilla Firefox</li>
              <li>Apple Safari</li>
              <li>Microsoft Edge</li>
            </ul>

            <h2 id="known-issues">Known Accessibility Issues</h2>
            <p>
              We are actively working to identify and resolve accessibility issues. If you encounter any barriers,
              please contact us using the information below.
            </p>

            <h2 id="feedback">Feedback and Contact Information</h2>
            <p>
              We welcome your feedback on the accessibility of Quotely. Please let us know if you encounter
              accessibility barriers:
            </p>
            <ul>
              <li><strong>Email:</strong> accessibility@quotely.info</li>
              <li><strong>Phone:</strong> Available upon request</li>
              <li><strong>Response Time:</strong> We aim to respond within 2 business days</li>
            </ul>
            <p>
              When contacting us, please include:
            </p>
            <ul>
              <li>The web address (URL) of the content</li>
              <li>A description of the problem you encountered</li>
              <li>The assistive technology you were using (if applicable)</li>
              <li>Your contact information</li>
            </ul>

            <h2 id="accommodations">Requesting Accommodations</h2>
            <p>
              If you need assistance or accommodations to access our services, please contact us. We are committed
              to providing reasonable accommodations to ensure equal access.
            </p>
            <p>
              Accommodations we can provide include:
            </p>
            <ul>
              <li>Alternative formats for documents (large print, audio, Braille upon request)</li>
              <li>Telephone assistance for completing online forms</li>
              <li>Extended time for completing online transactions</li>
              <li>Sign language interpreter services (with advance notice)</li>
              <li>TTY/TDD services available upon request</li>
            </ul>

            <h2 id="third-party">Third-Party Content</h2>
            <p>
              While we strive to ensure accessibility of all content on our website, some third-party content or
              linked websites may not be fully accessible. We encourage you to contact us if you experience
              difficulties with any third-party content accessed through our site.
            </p>

            <h2 id="continuous-improvement">Continuous Improvement</h2>
            <p>
              We are committed to continually improving the accessibility of our website. Our efforts include:
            </p>
            <ul>
              <li>Regular accessibility audits using automated and manual testing</li>
              <li>User testing with individuals who have disabilities</li>
              <li>Ongoing staff training on accessibility best practices</li>
              <li>Integration of accessibility into our development process</li>
              <li>Monitoring of emerging accessibility standards and guidelines</li>
            </ul>

            <h2 id="legal">Legal Compliance</h2>
            <p>
              This accessibility statement applies to content published on quotely.info. We are committed to
              compliance with all applicable federal, state, and local accessibility laws and regulations, including
              but not limited to the Americans with Disabilities Act (ADA), Section 508 of the Rehabilitation Act,
              and state civil rights laws.
            </p>

            <h2 id="insurance-specific">Insurance Industry Accessibility</h2>
            <p>
              As an insurance technology platform, we recognize the critical importance of accessibility in the
              insurance industry. We comply with:
            </p>
            <ul>
              <li>
                <strong>NAIC Model Regulations</strong> - National Association of Insurance Commissioners guidelines
                on accessibility in insurance communications
              </li>
              <li>
                <strong>State Insurance Department Requirements</strong> - Accessibility requirements specific to
                insurance services in each state we operate
              </li>
              <li>
                <strong>CMS Accessibility Standards</strong> - For any Medicare or Medicaid related services
              </li>
            </ul>

            <h2 id="updates">Statement Updates</h2>
            <p>
              This accessibility statement was last updated on January 8, 2026. We review and update this statement
              regularly to reflect improvements and changes to our website.
            </p>

          </div>

          {/* Quick Links */}
          <div className="mt-8 bg-cyan-50 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Accessibility Links</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="#features"
                className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Accessibility Features
              </a>
              <a
                href="#tools"
                className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Accessibility Tools
              </a>
              <a
                href="#feedback"
                className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Contact & Feedback
              </a>
              <a
                href="#accommodations"
                className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Request Accommodations
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
