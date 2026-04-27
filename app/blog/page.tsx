'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts, BLOG_CATEGORIES } from '@/data/blogPosts';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);
  const POSTS_PER_PAGE = 12;

  const processedPosts = blogPosts.map(post => ({
    ...post,
    formattedDate: new Date(post.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }));

  const filteredPosts = processedPosts.filter(post => {
    const matchesSearch = searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag = selectedTag === null || post.category === selectedTag;

    return matchesSearch && matchesTag;
  });

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = filteredPosts.length > visibleCount;

  useEffect(() => {
    setVisibleCount(POSTS_PER_PAGE);
  }, [searchQuery, selectedTag]);

  const loadMore = () => {
    setVisibleCount(prev => prev + POSTS_PER_PAGE);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-200">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-950 py-16 transition-colors duration-200">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="text-[20vw] font-black opacity-5 select-none" style={{ color: '#FFD700', lineHeight: 1 }}>
            Blog
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Your Insurance Innovation Destination: <span className="text-yellow-500">Quotely</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Insights, updates, and innovations in insurance technology
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
                <input
                  type="text"
                  placeholder="Search articles, topics, or tags..."
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tags Filter */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-gray-600 dark:text-gray-400 font-medium mr-2">Filter by topic:</span>
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTag === null
                  ? 'bg-yellow-500 text-gray-900'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-yellow-500/50'
              }`}
            >
              All Topics
            </button>
            {BLOG_CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedTag(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === category
                    ? 'bg-yellow-500 text-gray-900'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-yellow-500/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white dark:bg-gray-950 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visiblePosts.map(post => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-yellow-500/50 transition-all duration-200"
                  >
                    {/* Image */}
                    <div className="relative h-48 bg-gray-100 dark:bg-gray-800">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-500/5" />
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-yellow-500 text-gray-900 text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500 mb-3">
                        <span className="inline-flex items-center gap-1">
                          <Calendar size={14} />
                          {post.formattedDate}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-yellow-500 transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center text-yellow-500 font-medium text-sm">
                        Read more
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <div className="text-center mt-12">
                  <button
                    onClick={loadMore}
                    className="px-8 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
                  >
                    Load More Articles ({filteredPosts.length - visibleCount} remaining)
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No articles found matching your search criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTag(null);
                }}
                className="mt-4 text-yellow-500 hover:text-yellow-400 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Stay Updated with Insurance Innovation
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Get the latest insights on AI, insurance technology, and industry trends delivered to your inbox.
          </p>
          <Link
            href="/demo-request"
            className="inline-flex items-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Subscribe for Updates
          </Link>
        </div>
      </section>
    </div>
  );
}
