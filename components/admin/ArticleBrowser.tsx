'use client';

import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  Calendar,
  Clock,
  ExternalLink,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ChevronDown,
  ChevronUp,
  FileText,
  Tag
} from 'lucide-react';
import { articleDecipher } from '@/services/articleDecipher';

interface MatchingArticle {
  id: string;
  title: string;
  slug: string;
  similarityScore: number;
  matchType: 'exact' | 'title' | 'content' | 'keywords';
}

interface SimilarityResult {
  isDuplicate: boolean;
  isTooSimilar: boolean;
  similarityScore: number;
  matchingArticles: MatchingArticle[];
  recommendation: string;
}

interface ArticleWithRelevance {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image?: string;
  relevanceScore?: number;
}

const ArticleBrowser: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [sortBy, setSortBy] = useState<'date' | 'title' | 'relevance'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [showDuplicateChecker, setShowDuplicateChecker] = useState(false);
  const [checkTitle, setCheckTitle] = useState('');
  const [checkExcerpt, setCheckExcerpt] = useState('');
  const [checkContent, setCheckContent] = useState('');
  const [checkCategory, setCheckCategory] = useState('');
  const [similarityResult, setSimilarityResult] = useState<SimilarityResult | null>(null);

  const allArticles = articleDecipher.getAllArticles();
  const categories = articleDecipher.getCategories();

  // Filter and sort articles
  const filteredArticles = useMemo((): ArticleWithRelevance[] => {
    let results: ArticleWithRelevance[] = allArticles.map(a => ({ ...a }));

    // Apply search filter
    if (searchQuery.trim()) {
      const searchResults = articleDecipher.searchArticles(searchQuery);
      const searchIds = new Set(searchResults.map(r => r.id));
      results = results.filter(a => searchIds.has(a.id));

      // Add relevance scores
      results = results.map(article => {
        const searchResult = searchResults.find(r => r.id === article.id);
        return {
          ...article,
          relevanceScore: searchResult?.similarityScore || 0
        };
      });
    }

    // Apply category filter
    if (selectedCategory) {
      results = results.filter(a => a.category === selectedCategory);
    }

    // Sort results
    results.sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case 'date':
          comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
          break;
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'relevance':
          comparison = (a.relevanceScore || 0) - (b.relevanceScore || 0);
          break;
      }

      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return results;
  }, [allArticles, searchQuery, selectedCategory, sortBy, sortOrder]);

  // Check for duplicates
  const handleCheckDuplicates = () => {
    if (!checkTitle.trim()) {
      alert('Please enter a title to check');
      return;
    }

    const result = articleDecipher.checkSimilarity(
      checkTitle,
      checkExcerpt,
      checkContent,
      checkCategory
    );
    setSimilarityResult(result);
  };

  const clearDuplicateCheck = () => {
    setCheckTitle('');
    setCheckExcerpt('');
    setCheckContent('');
    setCheckCategory('');
    setSimilarityResult(null);
  };

  return (
    <div className="space-y-6">
      {/* Duplicate Checker Section */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <button
          onClick={() => setShowDuplicateChecker(!showDuplicateChecker)}
          className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-700/50 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
            <div>
              <h3 className="font-semibold text-white">Article Duplicate Checker</h3>
              <p className="text-sm text-gray-400">Check if an article is too similar to existing content</p>
            </div>
          </div>
          {showDuplicateChecker ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
        </button>

        {showDuplicateChecker && (
          <div className="p-6 border-t border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Article Title *
                </label>
                <input
                  type="text"
                  value={checkTitle}
                  onChange={(e) => setCheckTitle(e.target.value)}
                  placeholder="Enter the article title to check"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Category
                </label>
                <select
                  value={checkCategory}
                  onChange={(e) => setCheckCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white"
                >
                  <option value="">Select category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Excerpt / Description
              </label>
              <textarea
                value={checkExcerpt}
                onChange={(e) => setCheckExcerpt(e.target.value)}
                placeholder="Enter the article excerpt or description"
                rows={2}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Content Keywords (optional)
              </label>
              <textarea
                value={checkContent}
                onChange={(e) => setCheckContent(e.target.value)}
                placeholder="Paste key content or main points to check for similarity"
                rows={3}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleCheckDuplicates}
                className="px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-colors font-medium"
              >
                Check for Duplicates
              </button>
              <button
                onClick={clearDuplicateCheck}
                className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Clear
              </button>
            </div>

            {/* Similarity Results */}
            {similarityResult && (
              <div className={`mt-4 p-4 rounded-lg border ${
                similarityResult.isDuplicate
                  ? 'bg-red-500/10 border-red-500/30'
                  : similarityResult.isTooSimilar
                  ? 'bg-yellow-500/10 border-yellow-500/30'
                  : 'bg-green-500/10 border-green-500/30'
              }`}>
                <div className="flex items-start gap-3 mb-3">
                  {similarityResult.isDuplicate ? (
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  ) : similarityResult.isTooSimilar ? (
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  ) : (
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <h4 className={`font-semibold ${
                      similarityResult.isDuplicate
                        ? 'text-red-400'
                        : similarityResult.isTooSimilar
                        ? 'text-yellow-400'
                        : 'text-green-400'
                    }`}>
                      {similarityResult.isDuplicate
                        ? 'Duplicate Detected'
                        : similarityResult.isTooSimilar
                        ? 'High Similarity Warning'
                        : 'Content Appears Unique'}
                    </h4>
                    <p className={`text-sm ${
                      similarityResult.isDuplicate
                        ? 'text-red-300'
                        : similarityResult.isTooSimilar
                        ? 'text-yellow-300'
                        : 'text-green-300'
                    }`}>
                      {similarityResult.recommendation}
                    </p>
                  </div>
                </div>

                {similarityResult.matchingArticles.length > 0 && (
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-300 mb-2">Similar Articles:</p>
                    <div className="space-y-2">
                      {similarityResult.matchingArticles.map((match: MatchingArticle) => (
                        <div
                          key={match.id}
                          className="flex items-center justify-between p-2 bg-gray-700/50 rounded border border-gray-600"
                        >
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate">
                              {match.title}
                            </p>
                            <p className="text-xs text-gray-400">
                              Match type: {match.matchType}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 ml-3">
                            <span className={`text-sm font-semibold ${
                              match.similarityScore > 0.7 ? 'text-red-400' :
                              match.similarityScore > 0.4 ? 'text-yellow-400' : 'text-green-400'
                            }`}>
                              {Math.round(match.similarityScore * 100)}%
                            </span>
                            <a
                              href={`/blog/${match.slug}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-yellow-500 hover:text-yellow-400"
                            >
                              <ExternalLink size={14} />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <div className="flex items-center gap-3 mb-4">
          <Search className="w-5 h-5 text-yellow-500" />
          <h2 className="text-lg font-semibold text-white">Article Library</h2>
          <span className="text-sm text-gray-400">({filteredArticles.length} articles)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search Input */}
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by keyword..."
                className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white appearance-none"
              >
                <option value="">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort Options */}
          <div className="flex gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'date' | 'title' | 'relevance')}
              className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white"
            >
              <option value="date">Date</option>
              <option value="title">Title</option>
              {searchQuery && <option value="relevance">Relevance</option>}
            </select>
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 text-white"
              title={sortOrder === 'asc' ? 'Ascending' : 'Descending'}
            >
              {sortOrder === 'asc' ? '↑' : '↓'}
            </button>
          </div>
        </div>
      </div>

      {/* Article List */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        {filteredArticles.length === 0 ? (
          <div className="p-12 text-center">
            <FileText className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <p className="text-lg font-medium text-white">No articles found</p>
            <p className="text-gray-400 mt-2">
              {searchQuery
                ? 'Try adjusting your search terms'
                : 'No articles match the selected filters'}
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-700">
            {filteredArticles.map((article) => (
              <div key={article.id} className="p-4 hover:bg-gray-700/50 transition-colors">
                <div className="flex items-start gap-4">
                  {/* Thumbnail */}
                  {article.image && (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-24 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                  )}

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white truncate">
                          {article.title}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                          {article.excerpt}
                        </p>
                      </div>
                      <a
                        href={`/blog/${article.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 text-yellow-500 hover:text-yellow-400"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>

                    {/* Meta info */}
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {article.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Tag size={12} />
                        {article.category}
                      </span>
                      {article.relevanceScore && (
                        <span className="text-yellow-500 font-medium">
                          {Math.round(article.relevanceScore * 100)}% match
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <h3 className="font-semibold text-white mb-4">Library Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-3 bg-gray-700/50 rounded-lg text-center">
            <p className="text-2xl font-bold text-yellow-500">{allArticles.length}</p>
            <p className="text-sm text-gray-400">Total Articles</p>
          </div>
          <div className="p-3 bg-gray-700/50 rounded-lg text-center">
            <p className="text-2xl font-bold text-yellow-500">{categories.length}</p>
            <p className="text-sm text-gray-400">Categories</p>
          </div>
          <div className="p-3 bg-gray-700/50 rounded-lg text-center">
            <p className="text-2xl font-bold text-yellow-500">
              {filteredArticles.length}
            </p>
            <p className="text-sm text-gray-400">Filtered Results</p>
          </div>
          <div className="p-3 bg-gray-700/50 rounded-lg text-center">
            <p className="text-2xl font-bold text-yellow-500">50+</p>
            <p className="text-sm text-gray-400">Image Library</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleBrowser;
