import { useEffect, useState, useCallback } from 'react';
import { useAuth } from '../../contexts/AuthContext';

interface SessionTimeoutProps {
  warningTime?: number; // Minutes before expiry to show warning
  timeoutTime?: number; // Minutes of inactivity before auto-logout
}

export default function SessionTimeout({
  warningTime = 5,
  timeoutTime = 30,
}: SessionTimeoutProps) {
  const { user, session, signOut } = useAuth();
  const [showWarning, setShowWarning] = useState(false);
  const [countdown, setCountdown] = useState(warningTime * 60);

  const resetTimer = useCallback(() => {
    setShowWarning(false);
    setCountdown(warningTime * 60);
  }, [warningTime]);

  const handleStayLoggedIn = useCallback(() => {
    resetTimer();
  }, [resetTimer]);

  useEffect(() => {
    if (!user || !session) return;

    let warningTimeout: ReturnType<typeof setTimeout>;
    let logoutTimeout: ReturnType<typeof setTimeout>;
    let countdownInterval: ReturnType<typeof setInterval>;

    const startTimers = () => {
      clearTimeout(warningTimeout);
      clearTimeout(logoutTimeout);
      clearInterval(countdownInterval);

      // Set warning timer
      warningTimeout = setTimeout(() => {
        setShowWarning(true);
        setCountdown(warningTime * 60);

        // Start countdown
        countdownInterval = setInterval(() => {
          setCountdown(prev => {
            if (prev <= 1) {
              clearInterval(countdownInterval);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }, (timeoutTime - warningTime) * 60 * 1000);

      // Set logout timer
      logoutTimeout = setTimeout(() => {
        signOut();
      }, timeoutTime * 60 * 1000);
    };

    startTimers();

    // Reset timers on user activity
    const activityEvents = ['mousedown', 'keydown', 'touchstart', 'scroll'];

    const handleActivity = () => {
      if (!showWarning) {
        startTimers();
      }
    };

    activityEvents.forEach(event => {
      document.addEventListener(event, handleActivity);
    });

    return () => {
      clearTimeout(warningTimeout);
      clearTimeout(logoutTimeout);
      clearInterval(countdownInterval);
      activityEvents.forEach(event => {
        document.removeEventListener(event, handleActivity);
      });
    };
  }, [user, session, signOut, warningTime, timeoutTime, showWarning]);

  if (!showWarning) return null;

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl">
        <div className="text-center">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Session Expiring</h2>
          <p className="text-gray-600 mb-6">
            Your session will expire in{' '}
            <span className="font-bold text-amber-600">
              {minutes}:{seconds.toString().padStart(2, '0')}
            </span>
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => signOut()}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Log Out
            </button>
            <button
              onClick={handleStayLoggedIn}
              className="flex-1 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
            >
              Stay Logged In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
