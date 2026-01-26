import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

// Custom SVG icons for social platforms
const XIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
  </svg>
);

const Lemon8Icon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const MixIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M2.6 6.48V24h4.8V9.95c0-.55.45-1 1-1s1 .45 1 1V24h4.8V6.48c0-.55.45-1 1-1s1 .45 1 1V24h4.8V4.47c0-1.1-.9-2-2-2H4.6c-1.1 0-2 .9-2 2v2.01z" />
  </svg>
);

const TumblrIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.419l1.156 3.425c-.436.636-2.4 1.374-4.156 1.404h-.237z" />
  </svg>
);

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const RumbleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M19.568 7.588l-1.692-.752a6.052 6.052 0 00-1.316-1.616l.024-1.752a.807.807 0 00-.481-.752 5.304 5.304 0 00-4.218 0 .824.824 0 00-.481.752l.024 1.752a6.052 6.052 0 00-1.316 1.616l-1.692.752a.797.797 0 00-.42.9 5.266 5.266 0 002.109 3.656l-.872 1.536a.794.794 0 00.108.916 5.27 5.27 0 003.756 1.568 5.27 5.27 0 003.756-1.568.794.794 0 00.108-.916l-.872-1.536a5.266 5.266 0 002.109-3.656.797.797 0 00-.42-.9zM12 13.22a2.808 2.808 0 110-5.616 2.808 2.808 0 010 5.616z" />
  </svg>
);

const BloggerIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M21.976 24H2.024C.907 24 0 23.093 0 21.976V2.024C0 .907.907 0 2.024 0h19.952C23.093 0 24 .907 24 2.024v19.952C24 23.093 23.093 24 21.976 24zM12 4.8c-3.969 0-7.2 3.231-7.2 7.2s3.231 7.2 7.2 7.2 7.2-3.231 7.2-7.2S15.969 4.8 12 4.8zm3.6 9.6H8.4c-.663 0-1.2-.537-1.2-1.2s.537-1.2 1.2-1.2h7.2c.663 0 1.2.537 1.2 1.2s-.537 1.2-1.2 1.2zm0-4.8H8.4c-.663 0-1.2-.537-1.2-1.2s.537-1.2 1.2-1.2h7.2c.663 0 1.2.537 1.2 1.2s-.537 1.2-1.2 1.2z" />
  </svg>
);

const MediumIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

const socialLinks = [
  { name: 'X', url: 'https://x.com/TryQuotely', icon: XIcon },
  { name: 'TikTok', url: 'https://tiktok.com/@tryquotely', icon: TikTokIcon },
  { name: 'Lemon8', url: 'https://lemon8-app.com/@tryquotely', icon: Lemon8Icon },
  { name: 'Facebook', url: 'https://facebook.com/TryQuotely', icon: FacebookIcon },
  { name: 'Instagram', url: 'https://instagram.com/tryquotely', icon: InstagramIcon },
  { name: 'Mix', url: 'https://mix.com/tryquotely', icon: MixIcon },
  { name: 'Tumblr', url: 'https://tumblr.com/tryquotely', icon: TumblrIcon },
  { name: 'Pinterest', url: 'https://pinterest.com/TryQuotely', icon: PinterestIcon },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/try-quotely-5512402b', icon: LinkedInIcon },
  { name: 'Rumble', url: 'https://rumble.com/user/TryQuotely', icon: RumbleIcon },
  { name: 'Blogger', url: 'https://tryquotely.blogspot.com', icon: BloggerIcon },
  { name: 'Medium', url: 'https://medium.com/@tryquotely', icon: MediumIcon },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-yellow-500">Quotely</h3>
            <p className="text-gray-400 mb-6">
              Revolutionizing insurance quoting with AI-powered solutions for agencies.
            </p>

            {/* Social Media Links */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Follow Us</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    title={social.name}
                    className="text-gray-400 hover:text-yellow-500 transition-colors p-2 bg-gray-900 rounded-lg hover:bg-gray-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  ROI Calculator
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Compare Plans
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                <a href="mailto:support@tryquotely.com" className="hover:text-yellow-500 transition-colors">
                  support@tryquotely.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2" />
                <a href="tel:+19183956335" className="hover:text-yellow-500 transition-colors">
                  (918) 395-6335
                </a>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin size={16} className="mr-2 mt-1" />
                <span>
                  6010 S. 66th E. Ave<br />
                  Suite B<br />
                  Tulsa, OK 74145
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Quotely, Inc. DBA &quot;Try Quotely&quot;. All rights reserved.</p>
          <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1">
            <Link href="/privacy" className="hover:text-yellow-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-yellow-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-yellow-500 transition-colors">
              Cookie Policy
            </Link>
            <Link href="/compliance" className="hover:text-yellow-500 transition-colors">
              Regulatory Compliance
            </Link>
            <Link href="/editorial-standards" className="hover:text-yellow-500 transition-colors">
              Editorial Standards
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
