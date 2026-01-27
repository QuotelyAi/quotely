import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '../../contexts/AuthContext';

export default function Dashboard() {
  const { profile, user, hasPermission } = useAuth();

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <>
      <Helmet>
        <title>Dashboard | Quotely</title>
      </Helmet>

      <div className="min-h-screen bg-[#030712]">
        {/* Header */}
        <header className="bg-[#030712]/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link to="/" className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
                    <span className="text-white font-bold text-sm">Q</span>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Quotely</span>
                </Link>
              </div>

              <nav className="flex items-center gap-6">
                <Link to="/dashboard" className="text-cyan-400 font-medium">
                  Dashboard
                </Link>
                <Link to="/dashboard/profile" className="text-gray-400 hover:text-white transition-colors">
                  Profile
                </Link>
                {hasPermission('agency:settings') && (
                  <Link to="/dashboard/agency" className="text-gray-400 hover:text-white transition-colors">
                    Agency
                  </Link>
                )}
              </nav>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white">
              {greeting()}, {profile?.first_name || 'there'}!
            </h1>
            <p className="text-gray-400 mt-1">
              Here's what's happening with your account today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 shadow-xl shadow-black/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">0</p>
                  <p className="text-sm text-gray-400">Pending Quotes</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 shadow-xl shadow-black/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center border border-emerald-500/30">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">0</p>
                  <p className="text-sm text-gray-400">Completed This Month</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 shadow-xl shadow-black/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center border border-amber-500/30">
                  <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">--</p>
                  <p className="text-sm text-gray-400">Average Rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 shadow-xl shadow-black/20 mb-8">
            <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                to="/dashboard/profile"
                className="flex items-center gap-3 p-4 rounded-lg border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all"
              >
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Edit Profile</p>
                  <p className="text-sm text-gray-500">Update your info</p>
                </div>
              </Link>

              <button
                disabled
                className="flex items-center gap-3 p-4 rounded-lg border border-white/5 opacity-50 cursor-not-allowed"
              >
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                  <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-500">New Quote</p>
                  <p className="text-sm text-gray-600">Coming soon</p>
                </div>
              </button>

              <button
                disabled
                className="flex items-center gap-3 p-4 rounded-lg border border-white/5 opacity-50 cursor-not-allowed"
              >
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                  <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-500">View Leads</p>
                  <p className="text-sm text-gray-600">Coming soon</p>
                </div>
              </button>

              <button
                disabled
                className="flex items-center gap-3 p-4 rounded-lg border border-white/5 opacity-50 cursor-not-allowed"
              >
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                  <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-500">Reports</p>
                  <p className="text-sm text-gray-600">Coming soon</p>
                </div>
              </button>
            </div>
          </div>

          {/* Account Info */}
          <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 shadow-xl shadow-black/20">
            <h2 className="text-lg font-semibold text-white mb-4">Account Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <p className="text-white">{user?.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Role</p>
                <p className="text-white capitalize">{profile?.role?.replace('_', ' ') || 'Agent'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Agency</p>
                <p className="text-white">{profile?.agency?.name || 'Not assigned'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Member Since</p>
                <p className="text-white">
                  {profile?.created_at
                    ? new Date(profile.created_at).toLocaleDateString()
                    : '--'}
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
