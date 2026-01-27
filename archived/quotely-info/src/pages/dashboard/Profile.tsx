import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '../../contexts/AuthContext';

export default function Profile() {
  const { profile, user, updateProfile, signOut, hasPermission } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    first_name: profile?.first_name || '',
    last_name: profile?.last_name || '',
    phone: profile?.phone || '',
    bio: profile?.bio || '',
    license_number: profile?.license_number || '',
    license_state: profile?.license_state || '',
    years_experience: profile?.years_experience || 0,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setIsSaving(true);

    try {
      await updateProfile(formData);
      setSuccess(true);
      setIsEditing(false);
    } catch (err) {
      setError((err as Error).message || 'Failed to update profile');
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <>
      <Helmet>
        <title>Profile Settings | Quotely</title>
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
                <Link to="/dashboard" className="text-gray-400 hover:text-white transition-colors">
                  Dashboard
                </Link>
                <Link to="/dashboard/profile" className="text-cyan-400 font-medium">
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

        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white">Profile Settings</h1>
            <p className="text-gray-400 mt-1">
              Manage your account information and preferences.
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
              <p className="text-emerald-400 text-sm">Profile updated successfully!</p>
            </div>
          )}

          {/* Profile Form */}
          <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl shadow-black/20 overflow-hidden">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Personal Information</h2>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-sm text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Edit
                </button>
              )}
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.first_name}
                      onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-white"
                    />
                  ) : (
                    <p className="text-white">{profile?.first_name || '--'}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.last_name}
                      onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-white"
                    />
                  ) : (
                    <p className="text-white">{profile?.last_name || '--'}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <p className="text-white">{user?.email}</p>
                  <p className="text-xs text-gray-500 mt-1">Contact support to change email</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-white placeholder-gray-500"
                      placeholder="(555) 123-4567"
                    />
                  ) : (
                    <p className="text-white">{profile?.phone || '--'}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Bio
                </label>
                {isEditing ? (
                  <textarea
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-white placeholder-gray-500"
                    placeholder="Tell clients about yourself and your experience..."
                  />
                ) : (
                  <p className="text-gray-300">{profile?.bio || 'No bio added'}</p>
                )}
              </div>

              {/* Professional Info */}
              <div className="pt-6 border-t border-white/10">
                <h3 className="text-md font-semibold text-white mb-4">Professional Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      License Number
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={formData.license_number}
                        onChange={(e) => setFormData({ ...formData, license_number: e.target.value })}
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-white"
                      />
                    ) : (
                      <p className="text-white">{profile?.license_number || '--'}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      License State
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={formData.license_state}
                        onChange={(e) => setFormData({ ...formData, license_state: e.target.value.toUpperCase().slice(0, 2) })}
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-white"
                        maxLength={2}
                        placeholder="OK"
                      />
                    ) : (
                      <p className="text-white">{profile?.license_state || '--'}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Years Experience
                    </label>
                    {isEditing ? (
                      <input
                        type="number"
                        min="0"
                        value={formData.years_experience}
                        onChange={(e) => setFormData({ ...formData, years_experience: parseInt(e.target.value) || 0 })}
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-white"
                      />
                    ) : (
                      <p className="text-white">{profile?.years_experience || 0} years</p>
                    )}
                  </div>
                </div>
              </div>

              {isEditing && (
                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg shadow-cyan-500/25 disabled:opacity-50"
                  >
                    {isSaving ? 'Saving...' : 'Save Changes'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-2 border border-white/10 rounded-lg text-gray-300 hover:bg-white/5 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Account Actions */}
          <div className="mt-8 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl shadow-black/20 p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Account Actions</h2>
            <div className="space-y-4">
              <Link
                to="/auth/forgot-password"
                className="block text-cyan-400 hover:text-cyan-300 font-medium"
              >
                Change Password
              </Link>
              <button
                onClick={handleLogout}
                className="text-red-400 hover:text-red-300 font-medium"
              >
                Sign Out
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
