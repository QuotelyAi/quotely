'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Lock,
  Eye,
  EyeOff,
  FileText,
  TrendingUp,
  Zap,
  LogOut,
  ExternalLink,
  CheckCircle,
  Clock,
  BarChart3,
  Globe,
  Upload,
  Search,
  Image
} from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import ArticleBrowser from '@/components/admin/ArticleBrowser';
import ArticleUploader from '@/components/admin/ArticleUploader';
import ImageLibrary from '@/components/admin/ImageLibrary';

type TabType = 'overview' | 'browser' | 'uploader' | 'images';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  // Check for existing session
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const auth = sessionStorage.getItem('quotely_admin_auth');
      if (auth === 'true') {
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Hardcoded credentials for reliable authentication
    const adminUser = 'admin';
    const adminPass = '![yYa4Jl3)OnI#2rtZ4';

    if (username === adminUser && password === adminPass) {
      setIsAuthenticated(true);
      setError('');
      sessionStorage.setItem('quotely_admin_auth', 'true');
    } else {
      setError('Invalid username or password');
      setPassword('');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('quotely_admin_auth');
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  // Calculate stats from actual blog posts
  const stats = {
    totalArticles: blogPosts.length,
    categories: Array.from(new Set(blogPosts.map(p => p.category))).length,
    avgReadTime: Math.round(blogPosts.reduce((acc, p) => {
      const minutes = parseInt(p.readTime) || 8;
      return acc + minutes;
    }, 0) / blogPosts.length) + ' min',
    recentArticles: blogPosts.slice(0, 5)
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  // Login Form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors group"
            >
              <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center group-hover:bg-yellow-400 transition-colors">
                <span className="text-gray-900 font-bold text-xl">Q</span>
              </div>
              <span className="text-2xl font-bold text-white">Quotely</span>
            </Link>
          </div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-4">
              <Lock className="w-8 h-8 text-gray-900" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Admin Login</h1>
            <p className="text-gray-400">Blog Management & Analytics</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-500"
                placeholder="Enter username"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-500"
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-yellow-500 text-gray-900 py-3 px-4 rounded-lg hover:bg-yellow-400 transition-colors font-semibold"
            >
              Login to Admin Panel
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>Secure access to blog management</p>
          </div>
        </div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-gray-900 font-bold">Q</span>
                </div>
                <span className="text-xl font-bold text-white">Quotely Admin</span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-white">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p className="text-xs text-gray-400">Blog Management System</p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'border-yellow-500 text-yellow-500'
                  : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-600'
              }`}
            >
              <div className="flex items-center gap-2">
                <TrendingUp size={16} />
                Overview
              </div>
            </button>
            <button
              onClick={() => setActiveTab('browser')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                activeTab === 'browser'
                  ? 'border-yellow-500 text-yellow-500'
                  : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-600'
              }`}
            >
              <div className="flex items-center gap-2">
                <Search size={16} />
                Article Browser
              </div>
            </button>
            <button
              onClick={() => setActiveTab('uploader')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                activeTab === 'uploader'
                  ? 'border-yellow-500 text-yellow-500'
                  : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-600'
              }`}
            >
              <div className="flex items-center gap-2">
                <Upload size={16} />
                Load Article
              </div>
            </button>
            <button
              onClick={() => setActiveTab('images')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                activeTab === 'images'
                  ? 'border-yellow-500 text-yellow-500'
                  : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-600'
              }`}
            >
              <div className="flex items-center gap-2">
                <Image size={16} />
                Image Library
              </div>
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Total Articles</p>
                    <p className="text-3xl font-bold text-white mt-2">{stats.totalArticles}</p>
                  </div>
                  <div className="bg-blue-500/20 p-3 rounded-lg">
                    <FileText className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Categories</p>
                    <p className="text-3xl font-bold text-white mt-2">{stats.categories}</p>
                  </div>
                  <div className="bg-green-500/20 p-3 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Avg Read Time</p>
                    <p className="text-3xl font-bold text-white mt-2">{stats.avgReadTime}</p>
                  </div>
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Site Status</p>
                    <p className="text-xl font-bold text-green-400 mt-2 flex items-center gap-2">
                      <CheckCircle size={20} />
                      Live
                    </p>
                  </div>
                  <div className="bg-yellow-500/20 p-3 rounded-lg">
                    <Globe className="w-6 h-6 text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Quick Actions */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                  <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      onClick={() => setActiveTab('browser')}
                      className="flex items-center gap-3 p-4 border border-gray-700 rounded-lg hover:border-yellow-500/50 hover:bg-gray-800/50 transition-all group text-left"
                    >
                      <Search className="w-5 h-5 text-yellow-500" />
                      <div>
                        <p className="font-medium text-white group-hover:text-yellow-500 transition-colors">Browse Articles</p>
                        <p className="text-sm text-gray-400">Search and manage existing content</p>
                      </div>
                    </button>

                    <button
                      onClick={() => setActiveTab('uploader')}
                      className="flex items-center gap-3 p-4 border border-gray-700 rounded-lg hover:border-yellow-500/50 hover:bg-gray-800/50 transition-all group text-left"
                    >
                      <Upload className="w-5 h-5 text-yellow-500" />
                      <div>
                        <p className="font-medium text-white group-hover:text-yellow-500 transition-colors">Load Article</p>
                        <p className="text-sm text-gray-400">Upload HTML or PDF content</p>
                      </div>
                    </button>

                    <Link
                      href="/blog"
                      className="flex items-center gap-3 p-4 border border-gray-700 rounded-lg hover:border-yellow-500/50 hover:bg-gray-800/50 transition-all group"
                    >
                      <Eye className="w-5 h-5 text-yellow-500" />
                      <div className="text-left">
                        <p className="font-medium text-white group-hover:text-yellow-500 transition-colors">View Blog</p>
                        <p className="text-sm text-gray-400">See all published articles</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500 ml-auto" />
                    </Link>

                    <button
                      onClick={() => setActiveTab('images')}
                      className="flex items-center gap-3 p-4 border border-gray-700 rounded-lg hover:border-yellow-500/50 hover:bg-gray-800/50 transition-all group text-left"
                    >
                      <Image className="w-5 h-5 text-yellow-500" />
                      <div>
                        <p className="font-medium text-white group-hover:text-yellow-500 transition-colors">Image Library</p>
                        <p className="text-sm text-gray-400">Manage curated images</p>
                      </div>
                    </button>

                    <Link
                      href="/sitemap.xml"
                      target="_blank"
                      className="flex items-center gap-3 p-4 border border-gray-700 rounded-lg hover:border-yellow-500/50 hover:bg-gray-800/50 transition-all group"
                    >
                      <BarChart3 className="w-5 h-5 text-yellow-500" />
                      <div className="text-left">
                        <p className="font-medium text-white group-hover:text-yellow-500 transition-colors">View Sitemap</p>
                        <p className="text-sm text-gray-400">SEO sitemap for search engines</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500 ml-auto" />
                    </Link>

                    <a
                      href="https://vercel.com/quotely/quotely-website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 border border-gray-700 rounded-lg hover:border-yellow-500/50 hover:bg-gray-800/50 transition-all group"
                    >
                      <Zap className="w-5 h-5 text-yellow-500" />
                      <div className="text-left">
                        <p className="font-medium text-white group-hover:text-yellow-500 transition-colors">Vercel Dashboard</p>
                        <p className="text-sm text-gray-400">Deployments & analytics</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500 ml-auto" />
                    </a>
                  </div>
                </div>

                {/* System Status */}
                <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                  <h2 className="text-lg font-semibold text-white mb-4">System Status</h2>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-300">Website Status</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">Live</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-300">SEO Sitemap</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">Active</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-300">JSON-LD Schemas</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">Enabled</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-300">E-E-A-T Optimization</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">Active</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-300">SSL Certificate</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">Valid</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Articles */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-white">Recent Articles</h2>
                  <Link href="/blog" className="text-sm text-yellow-500 hover:text-yellow-400">
                    View all
                  </Link>
                </div>
                <div className="space-y-4">
                  {stats.recentArticles.map((article) => (
                    <Link
                      key={article.id}
                      href={`/blog/${article.slug}`}
                      className="block p-3 rounded-lg border border-gray-800 hover:border-yellow-500/50 hover:bg-gray-800/50 transition-all"
                    >
                      <p className="font-medium text-white text-sm line-clamp-2 mb-1">
                        {article.title}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="px-2 py-0.5 bg-gray-800 rounded">{article.category}</span>
                        <span>{article.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Categories Overview */}
            <div className="mt-8 bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Articles by Category</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {Array.from(new Set(blogPosts.map(p => p.category))).map((category) => {
                  const count = blogPosts.filter(p => p.category === category).length;
                  return (
                    <div key={category} className="bg-gray-800 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-yellow-500">{count}</p>
                      <p className="text-sm text-gray-400 mt-1">{category}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {activeTab === 'browser' && <ArticleBrowser />}
        {activeTab === 'uploader' && <ArticleUploader />}
        {activeTab === 'images' && <ImageLibrary />}
      </main>
    </div>
  );
}
