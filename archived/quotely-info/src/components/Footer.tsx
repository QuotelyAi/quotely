import { Link } from 'react-router-dom';

interface FooterProps {
  showTryQuotelyLink?: boolean;
}

export default function Footer({ showTryQuotelyLink = false }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020408] text-gray-400 border-t border-white/5" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quotely</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/agents" className="hover:text-cyan-400 transition-colors">Find Agents</Link>
              </li>
              <li>
                <Link to="/requirements" className="hover:text-cyan-400 transition-colors">Insurance Requirements</Link>
              </li>
              {showTryQuotelyLink && (
                <li>
                  <a
                    href="https://tryquotely.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    TryQuotely.com
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* For Agents */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Agents</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/licensing" className="hover:text-cyan-400 transition-colors">Licensing Requirements</Link>
              </li>
              <li>
                <Link to="/agents" className="hover:text-cyan-400 transition-colors">Agent Directory</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/requirements" className="hover:text-cyan-400 transition-colors">State Minimums</Link>
              </li>
              <li>
                <a
                  href="https://nipr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  NIPR
                </a>
              </li>
              <li>
                <a
                  href="https://naic.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  NAIC
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Accessibility */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/accessibility" className="hover:text-cyan-400 transition-colors">Accessibility</Link>
              </li>
              <li>
                <a href="/sitemap.xml" className="hover:text-cyan-400 transition-colors">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20" aria-hidden="true">
                <span className="text-white font-bold text-sm">Q</span>
              </div>
              <span className="text-white font-semibold">Quotely</span>
            </div>

            <p className="text-sm text-gray-500 text-center">
              &copy; {currentYear} Quotely, Inc. All rights reserved.
            </p>

            <p className="text-xs text-gray-600 text-center max-w-md">
              Quotely is not an insurance company or agency. We connect consumers with licensed insurance professionals.
            </p>
          </div>
        </div>

        {/* Partner Links */}
        <div className="mt-6 pt-6 border-t border-white/5">
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-600">
            <span>Partners:</span>
            <a
              href="https://harborseo.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              HarborSEO
            </a>
            <a
              href="https://postforge.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              PostForge
            </a>
            {showTryQuotelyLink && (
              <a
                href="https://tryquotely.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                TryQuotely
              </a>
            )}
          </div>
        </div>

        {/* Compliance Disclosure */}
        <div className="mt-6 pt-6 border-t border-white/5">
          <p className="text-xs text-gray-600 text-center">
            Insurance quotes are estimates only. Final rates determined by carriers after underwriting review.
            By using this site, you agree to our{' '}
            <Link to="/terms" className="text-gray-500 hover:text-cyan-400 transition-colors">Terms of Service</Link>
            {' '}and{' '}
            <Link to="/privacy" className="text-gray-500 hover:text-cyan-400 transition-colors">Privacy Policy</Link>.
            We may receive compensation from insurance agents and carriers.
          </p>
        </div>
      </div>
    </footer>
  );
}
