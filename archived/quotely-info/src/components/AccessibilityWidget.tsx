import { useState, useEffect } from 'react';

interface AccessibilitySettings {
  fontSize: 'normal' | 'large' | 'x-large';
  highContrast: boolean;
  reducedMotion: boolean;
  underlineLinks: boolean;
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 'normal',
  highContrast: false,
  reducedMotion: false,
  underlineLinks: false,
};

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('quotely-accessibility');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings({ ...defaultSettings, ...parsed });
      } catch {
        // Use defaults if parsing fails
      }
    }
  }, []);

  // Apply settings to document
  useEffect(() => {
    const root = document.documentElement;

    // Font size
    root.classList.remove('text-base', 'text-lg', 'text-xl');
    if (settings.fontSize === 'large') {
      root.style.fontSize = '112.5%';
    } else if (settings.fontSize === 'x-large') {
      root.style.fontSize = '125%';
    } else {
      root.style.fontSize = '100%';
    }

    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduce-motion');
    } else {
      root.classList.remove('reduce-motion');
    }

    // Underline links
    if (settings.underlineLinks) {
      root.classList.add('underline-links');
    } else {
      root.classList.remove('underline-links');
    }

    // Save to localStorage
    localStorage.setItem('quotely-accessibility', JSON.stringify(settings));
  }, [settings]);

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  return (
    <>
      {/* Accessibility Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-50 w-12 h-12 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2"
        aria-label="Open accessibility settings"
        title="Accessibility Options"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="accessibility-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <h2 id="accessibility-title" className="text-xl font-bold text-gray-900">
                Accessibility Options
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close accessibility settings"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Font Size */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Text Size
                </label>
                <div className="flex gap-2">
                  {(['normal', 'large', 'x-large'] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => updateSetting('fontSize', size)}
                      className={`flex-1 py-3 px-4 rounded-lg border-2 font-medium transition-colors ${
                        settings.fontSize === size
                          ? 'border-cyan-500 bg-cyan-50 text-cyan-700'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                      aria-pressed={settings.fontSize === size}
                    >
                      {size === 'normal' && <span className="text-sm">A</span>}
                      {size === 'large' && <span className="text-base">A</span>}
                      {size === 'x-large' && <span className="text-lg">A</span>}
                      <span className="sr-only">
                        {size === 'normal' ? 'Normal' : size === 'large' ? 'Large' : 'Extra Large'} text
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="high-contrast" className="text-sm font-semibold text-gray-900">
                    High Contrast Mode
                  </label>
                  <p className="text-sm text-gray-500">Increase color contrast for better visibility</p>
                </div>
                <button
                  id="high-contrast"
                  role="switch"
                  aria-checked={settings.highContrast}
                  onClick={() => updateSetting('highContrast', !settings.highContrast)}
                  className={`relative w-12 h-7 rounded-full transition-colors ${
                    settings.highContrast ? 'bg-cyan-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                      settings.highContrast ? 'translate-x-5' : ''
                    }`}
                  />
                  <span className="sr-only">
                    {settings.highContrast ? 'Disable' : 'Enable'} high contrast mode
                  </span>
                </button>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="reduced-motion" className="text-sm font-semibold text-gray-900">
                    Reduce Motion
                  </label>
                  <p className="text-sm text-gray-500">Minimize animations and transitions</p>
                </div>
                <button
                  id="reduced-motion"
                  role="switch"
                  aria-checked={settings.reducedMotion}
                  onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                  className={`relative w-12 h-7 rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-cyan-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                      settings.reducedMotion ? 'translate-x-5' : ''
                    }`}
                  />
                  <span className="sr-only">
                    {settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion
                  </span>
                </button>
              </div>

              {/* Underline Links */}
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="underline-links" className="text-sm font-semibold text-gray-900">
                    Underline Links
                  </label>
                  <p className="text-sm text-gray-500">Make all links underlined for visibility</p>
                </div>
                <button
                  id="underline-links"
                  role="switch"
                  aria-checked={settings.underlineLinks}
                  onClick={() => updateSetting('underlineLinks', !settings.underlineLinks)}
                  className={`relative w-12 h-7 rounded-full transition-colors ${
                    settings.underlineLinks ? 'bg-cyan-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                      settings.underlineLinks ? 'translate-x-5' : ''
                    }`}
                  />
                  <span className="sr-only">
                    {settings.underlineLinks ? 'Disable' : 'Enable'} underlined links
                  </span>
                </button>
              </div>

              {/* Keyboard Shortcuts Info */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Keyboard Navigation</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><kbd className="px-2 py-0.5 bg-gray-200 rounded text-xs">Tab</kbd> - Navigate between elements</li>
                  <li><kbd className="px-2 py-0.5 bg-gray-200 rounded text-xs">Enter</kbd> - Activate buttons and links</li>
                  <li><kbd className="px-2 py-0.5 bg-gray-200 rounded text-xs">Esc</kbd> - Close dialogs</li>
                </ul>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Reset to Default Settings
              </button>

              {/* Accessibility Statement Link */}
              <a
                href="/accessibility"
                className="block text-center text-cyan-600 hover:text-cyan-700 font-medium"
                onClick={() => setIsOpen(false)}
              >
                View Full Accessibility Statement
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
