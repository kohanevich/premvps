import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Проверяем, есть ли уже согласие в localStorage
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t-2 border-gray-200 shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 mb-2">Cookie Settings</h3>
            <p className="text-gray-600 text-sm">
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
              By clicking "Accept All", you consent to our use of cookies. Read our{' '}
              <a href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
                Privacy Policy
              </a>{' '}
              for more information.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={handleDecline}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 whitespace-nowrap"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
