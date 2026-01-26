'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [pricingDropdownOpen, setPricingDropdownOpen] = useState(false);
  const pathname = usePathname();
  const productsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pricingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleProductsMouseEnter = () => {
    if (productsTimeoutRef.current) {
      clearTimeout(productsTimeoutRef.current);
    }
    setProductsDropdownOpen(true);
  };

  const handleProductsMouseLeave = () => {
    productsTimeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 300);
  };

  const handlePricingMouseEnter = () => {
    if (pricingTimeoutRef.current) {
      clearTimeout(pricingTimeoutRef.current);
    }
    setPricingDropdownOpen(true);
  };

  const handlePricingMouseLeave = () => {
    pricingTimeoutRef.current = setTimeout(() => {
      setPricingDropdownOpen(false);
    }, 300);
  };

  const productsMenu = [
    { name: 'AMS', href: '/products/ams', description: 'Agency Management System' },
    { name: 'CRM', href: '/products/crm', description: 'Customer Relationship Management' },
    { name: 'Rater', href: '/products/rater', description: 'AI-Powered Rating Engine' },
  ];

  const pricingMenu = [
    { name: 'Plans & Pricing', href: '/pricing' },
    { name: 'ROI Calculator', href: '/calculator' },
    { name: 'Compare Plans', href: '/compare' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-gray-950 border-b border-gray-800 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center transition-colors duration-200">
              <span className="text-2xl font-bold text-yellow-500">Quotely</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              <button
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1"
              >
                Products
                <ChevronDown size={14} className={`transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {productsDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-gray-900 rounded-lg shadow-xl border border-gray-800 py-2 z-50">
                  {productsMenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-yellow-500 transition-colors"
                      onClick={() => setProductsDropdownOpen(false)}
                    >
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-xs text-gray-500">{item.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Pricing Dropdown */}
            <div
              className="relative"
              onMouseEnter={handlePricingMouseEnter}
              onMouseLeave={handlePricingMouseLeave}
            >
              <button
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1"
              >
                Pricing
                <ChevronDown size={14} className={`transition-transform duration-200 ${pricingDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {pricingDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-xl border border-gray-800 py-2 z-50">
                  {pricingMenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-yellow-500 transition-colors"
                      onClick={() => setPricingDropdownOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Static Links */}
            <Link
              href="/products/ams"
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive('/products/ams') ? 'text-yellow-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              How It Works
            </Link>

            <Link
              href="/blog"
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                pathname?.startsWith('/blog') ? 'text-yellow-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive('/contact') ? 'text-yellow-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              Contact
            </Link>

            {/* Search Button */}
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-400 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors ml-2">
              <Search size={14} />
              <span>Search</span>
              <span className="text-xs text-gray-500 ml-2">⌘K</span>
            </button>

            {/* See Demo Button */}
            <a
              href="https://quotely.info"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-4 py-2 text-sm font-medium text-yellow-500 border border-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-colors"
            >
              See Demo
            </a>

            {/* Get Started Button */}
            <Link
              href="/demo-request"
              className="ml-2 px-4 py-2 text-sm font-semibold text-gray-900 bg-yellow-500 rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Products Section */}
              <div className="border-b border-gray-800 pb-2 mb-2">
                <div className="px-3 py-2 text-xs font-semibold text-yellow-500 uppercase tracking-wider">
                  Products
                </div>
                {productsMenu.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-yellow-500 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Pricing Section */}
              <div className="border-b border-gray-800 pb-2 mb-2">
                <div className="px-3 py-2 text-xs font-semibold text-yellow-500 uppercase tracking-wider">
                  Pricing
                </div>
                {pricingMenu.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-yellow-500 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Other Links */}
              <Link
                href="/products/ams"
                className="block px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-yellow-500 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-yellow-500 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-yellow-500 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              {/* CTA */}
              <a
                href="https://quotely.info"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center mt-4 px-4 py-3 border border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                See Demo
              </a>
              <Link
                href="/demo-request"
                className="block w-full text-center mt-2 px-4 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
