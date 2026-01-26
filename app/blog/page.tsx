'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

// Define tags based on category
function getTagsFromCategory(category: string): string[] {
  if (category === 'Digital Transformation') {
    return ['Digital Transformation', 'Automation', 'Innovation'];
  } else if (category === 'AI & Technology') {
    return ['AI', 'Insurance Technology', 'Innovation'];
  }
  return ['Cost Savings', 'AI', 'Efficiency'];
}

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);
  const POSTS_PER_PAGE = 12;

  // Process posts with tags
  const processedPosts = blogPosts.map(post => ({
    ...post,
    tags: getTagsFromCategory(post.category),
    formattedDate: new Date(post.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }));

  // Get all unique tags
  const allTags = Array.from(
    new Set(processedPosts.flatMap(post => post.tags))
  ).sort();

  // Filter posts based on search and selected tag
  const filteredPosts = processedPosts.filter(post => {
    const matchesSearch = searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTag = selectedTag === null || post.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  // Paginated posts
  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = filteredPosts.length > visibleCount;

  // Reset pagination when filters change
  useEffect(() => {
    setVisibleCount(POSTS_PER_PAGE);
  }, [searchQuery, selectedTag]);

  const loadMore = () => {
    setVisibleCount(prev => prev + POSTS_PER_PAGE);
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="bg-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Insurance Innovation Destination: <span className="text-yellow-500">Quotely</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Insights, updates, and innovations in insurance technology
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search articles, topics, or tags..."
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-gray-900 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tags Filter */}
      <section className="py-8 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-gray-400 font-medium mr-2">Filter by topic:</span>
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTag === null
                  ? 'bg-yellow-500 text-gray-900'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All Topics
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === tag
                    ? 'bg-yellow-500 text-gray-900'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visiblePosts.map(post => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-500/50 transition-all duration-200"
                  >
                    {/* Image */}
                    <div className="relative h-48 bg-gray-800">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-600" />
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-yellow-500 text-gray-900 text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="inline-flex items-center gap-1">
                          <Calendar size={14} />
                          {post.formattedDate}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
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
              <p className="text-xl text-gray-400">
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
      <section className="bg-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Insurance Innovation
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get the latest insights on AI, insurance technology, and industry trends delivered to your inbox.
            </p>
            <Link
              href="/demo-request"
              className="inline-flex items-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Subscribe for Updates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
