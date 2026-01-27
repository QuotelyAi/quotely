import { useState, useEffect, useCallback } from 'react';

interface CookiePreferences {
  necessary: boolean; // Always true, required
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

const COOKIE_CONSENT_KEY = 'quotely-cookie-consent';
const COOKIE_PREFERENCES_KEY = 'quotely-cookie-preferences';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  // Check if user has already consented
  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay to prevent flash on page load
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      const savedPrefs = localStorage.getItem(COOKIE_PREFERENCES_KEY);
      if (savedPrefs) {
        try {
          setPreferences(JSON.parse(savedPrefs));
        } catch {
          // Use defaults if parsing fails
        }
      }
    }
  }, []);

  const saveConsent = useCallback((prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setIsVisible(false);

    // Dispatch custom event for analytics integration
    window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: prefs }));
  }, []);

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    });
  };

  const acceptNecessary = () => {
    saveConsent(defaultPreferences);
  };

  const savePreferences = () => {
    saveConsent(preferences);
  };

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    if (key === 'necessary') return; // Cannot disable necessary cookies
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showDetails) {
        setShowDetails(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showDetails]);

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed inset-x-0 bottom-0 z-[200] p-4 sm:p-6"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {!showDetails ? (
          // Simple Banner View
          <div className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              {/* Cookie Icon */}
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center" aria-hidden="true">
                <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 id="cookie-consent-title" className="text-lg font-semibold text-gray-900">
                  We value your privacy
                </h2>
                <p id="cookie-consent-description" className="mt-1 text-sm text-gray-600">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                  By clicking "Accept All", you consent to our use of cookies. You can also customize your preferences.
                </p>
                <div className="mt-2">
                  <button
                    onClick={() => setShowDetails(true)}
                    className="text-sm text-cyan-600 hover:text-cyan-700 font-medium underline focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 rounded"
                  >
                    Manage cookie preferences
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                <button
                  onClick={acceptNecessary}
                  className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Necessary Only
                </button>
                <button
                  onClick={acceptAll}
                  className="px-4 py-2.5 text-sm font-medium text-white bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                >
                  Accept All
                </button>
              </div>
            </div>

            {/* Links */}
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-4 text-xs text-gray-500">
              <a href="/privacy" className="hover:text-gray-700 underline focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-gray-700 underline focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded">
                Terms of Service
              </a>
              <a href="/accessibility" className="hover:text-gray-700 underline focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded">
                Accessibility
              </a>
            </div>
          </div>
        ) : (
          // Detailed Preferences View
          <div className="max-h-[80vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 id="cookie-consent-title" className="text-lg font-semibold text-gray-900">
                Cookie Preferences
              </h2>
              <button
                onClick={() => setShowDetails(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
                aria-label="Back to simple view"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Cookie Categories */}
            <div className="p-6 space-y-6">
              <p id="cookie-consent-description" className="text-sm text-gray-600">
                When you visit our website, we may store or retrieve information on your browser, mostly in the form of cookies.
                This information might be about you, your preferences, or your device. The information does not usually directly
                identify you, but it can give you a more personalized web experience.
              </p>

              {/* Necessary Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900">Strictly Necessary</h3>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Always Active</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">
                      These cookies are essential for the website to function and cannot be switched off. They are usually
                      only set in response to actions made by you such as setting your privacy preferences, logging in,
                      or filling in forms.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-7 bg-cyan-500 rounded-full opacity-50 cursor-not-allowed flex items-center justify-end pr-1">
                      <span className="w-5 h-5 bg-white rounded-full shadow" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Analytics & Performance</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      These cookies allow us to count visits and traffic sources so we can measure and improve the performance
                      of our site. They help us know which pages are the most and least popular and see how visitors move
                      around the site.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      role="switch"
                      aria-checked={preferences.analytics}
                      onClick={() => updatePreference('analytics', !preferences.analytics)}
                      className={`relative w-12 h-7 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                        preferences.analytics ? 'bg-cyan-500' : 'bg-gray-300'
                      }`}
                      aria-label="Toggle analytics cookies"
                    >
                      <span
                        className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                          preferences.analytics ? 'translate-x-5' : ''
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Marketing & Advertising</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      These cookies may be set through our site by our advertising partners. They may be used by those
                      companies to build a profile of your interests and show you relevant ads on other sites.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      role="switch"
                      aria-checked={preferences.marketing}
                      onClick={() => updatePreference('marketing', !preferences.marketing)}
                      className={`relative w-12 h-7 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                        preferences.marketing ? 'bg-cyan-500' : 'bg-gray-300'
                      }`}
                      aria-label="Toggle marketing cookies"
                    >
                      <span
                        className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                          preferences.marketing ? 'translate-x-5' : ''
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Preferences Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Functional & Preferences</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      These cookies enable the website to provide enhanced functionality and personalization. They may be
                      set by us or by third-party providers whose services we have added to our pages.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      role="switch"
                      aria-checked={preferences.preferences}
                      onClick={() => updatePreference('preferences', !preferences.preferences)}
                      className={`relative w-12 h-7 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                        preferences.preferences ? 'bg-cyan-500' : 'bg-gray-300'
                      }`}
                      aria-label="Toggle preferences cookies"
                    >
                      <span
                        className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                          preferences.preferences ? 'translate-x-5' : ''
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={acceptNecessary}
                  className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Reject All
                </button>
                <button
                  onClick={savePreferences}
                  className="flex-1 px-4 py-2.5 text-sm font-medium text-cyan-700 bg-cyan-100 hover:bg-cyan-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                >
                  Save Preferences
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Hook to check cookie preferences
export function useCookieConsent() {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (consent) {
      const savedPrefs = localStorage.getItem(COOKIE_PREFERENCES_KEY);
      if (savedPrefs) {
        try {
          setPreferences(JSON.parse(savedPrefs));
        } catch {
          setPreferences(defaultPreferences);
        }
      } else {
        setPreferences(defaultPreferences);
      }
    }

    // Listen for consent updates
    const handleUpdate = (e: CustomEvent<CookiePreferences>) => {
      setPreferences(e.detail);
    };
    window.addEventListener('cookieConsentUpdated', handleUpdate as EventListener);
    return () => window.removeEventListener('cookieConsentUpdated', handleUpdate as EventListener);
  }, []);

  return {
    hasConsented: preferences !== null,
    preferences,
    canUseAnalytics: preferences?.analytics ?? false,
    canUseMarketing: preferences?.marketing ?? false,
    canUsePreferences: preferences?.preferences ?? false,
  };
}
