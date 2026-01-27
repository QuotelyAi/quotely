import { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import type { Agency } from '../../types/auth';

export default function AgencySettings() {
  const { profile, hasPermission } = useAuth();
  const [agency, setAgency] = useState<Agency | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    website: '',
    street_address: '',
    city: '',
    state: '',
    state_code: '',
    zip: '',
  });

  useEffect(() => {
    const fetchAgency = async () => {
      if (!profile?.agency_id) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('agencies')
        .select('*')
        .eq('id', profile.agency_id)
        .single();

      if (error) {
        console.error('Error fetching agency:', error);
      } else if (data) {
        setAgency(data);
        setFormData({
          name: data.name || '',
          phone: data.phone || '',
          email: data.email || '',
          website: data.website || '',
          street_address: data.street_address || '',
          city: data.city || '',
          state: data.state || '',
          state_code: data.state_code || '',
          zip: data.zip || '',
        });
      }
      setLoading(false);
    };

    fetchAgency();
  }, [profile?.agency_id]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!agency) return;

    setError(null);
    setSuccess(false);
    setIsSaving(true);

    const { error } = await supabase
      .from('agencies')
      .update(formData)
      .eq('id', agency.id);

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
      setIsEditing(false);
      setAgency({ ...agency, ...formData });
    }
    setIsSaving(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Agency Settings | Quotely</title>
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
                <Link to="/dashboard/profile" className="text-gray-400 hover:text-white transition-colors">
                  Profile
                </Link>
                {hasPermission('agency:settings') && (
                  <Link to="/dashboard/agency" className="text-cyan-400 font-medium">
                    Agency
                  </Link>
                )}
              </nav>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white">Agency Settings</h1>
            <p className="text-gray-400 mt-1">
              Manage your agency information and settings.
            </p>
          </div>

          {!agency ? (
            <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-8 text-center shadow-xl shadow-black/20">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
                <svg className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">No Agency Assigned</h2>
              <p className="text-gray-400">
                You are not currently assigned to an agency. Contact an administrator to be added to one.
              </p>
            </div>
          ) : (
            <>
              {error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              {success && (
                <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                  <p className="text-emerald-400 text-sm">Agency updated successfully!</p>
                </div>
              )}

              {/* Agency Info Card */}
              <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl shadow-black/20 overflow-hidden mb-6">
                <div className="p-6 border-b border-white/10 flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-white">{agency.name}</h2>
                    <p className="text-sm text-gray-500">
                      {agency.subscription_tier === 'free' ? 'Free Plan' :
                       agency.subscription_tier === 'premium' ? 'Premium Plan' : 'Enterprise Plan'}
                    </p>
                  </div>
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
                        Agency Name
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-white"
                        />
                      ) : (
                        <p className="text-white">{agency.name}</p>
                      )}
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
                        <p className="text-white">{agency.phone || '--'}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      {isEditing ? (
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-white placeholder-gray-500"
                          placeholder="contact@agency.com"
                        />
                      ) : (
                        <p className="text-white">{agency.email || '--'}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Website
                      </label>
                      {isEditing ? (
                        <input
                          type="url"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-white placeholder-gray-500"
                          placeholder="https://www.agency.com"
                        />
                      ) : (
                        <p className="text-white">{agency.website || '--'}</p>
                      )}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <h3 className="text-md font-semibold text-white mb-4">Address</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Street Address
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={formData.street_address}
                            onChange={(e) => setFormData({ ...formData, street_address: e.target.value })}
                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-white"
                          />
                        ) : (
                          <p className="text-white">{agency.street_address || '--'}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          City
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-white"
                          />
                        ) : (
                          <p className="text-white">{agency.city || '--'}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            State
                          </label>
                          {isEditing ? (
                            <input
                              type="text"
                              value={formData.state_code}
                              onChange={(e) => setFormData({ ...formData, state_code: e.target.value.toUpperCase().slice(0, 2) })}
                              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-white"
                              maxLength={2}
                              placeholder="OK"
                            />
                          ) : (
                            <p className="text-white">{agency.state_code || '--'}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            ZIP
                          </label>
                          {isEditing ? (
                            <input
                              type="text"
                              value={formData.zip}
                              onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-white"
                              placeholder="74063"
                            />
                          ) : (
                            <p className="text-white">{agency.zip || '--'}</p>
                          )}
                        </div>
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

              {/* Team Members Section */}
              <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl shadow-black/20 overflow-hidden">
                <div className="p-6 border-b border-white/10 flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-white">Team Members</h2>
                    <p className="text-sm text-gray-500">Manage agents in your agency</p>
                  </div>
                  <button
                    disabled
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg opacity-50 cursor-not-allowed text-sm"
                  >
                    Invite Agent (Coming Soon)
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/25">
                      <span className="text-white font-medium text-sm">
                        {profile?.first_name?.[0] || 'A'}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium text-white">
                        {profile?.first_name} {profile?.last_name}
                      </p>
                      <p className="text-sm text-gray-500">Agency Owner</p>
                    </div>
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30">
                      You
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </>
  );
}
