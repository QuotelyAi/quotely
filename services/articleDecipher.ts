// Article Decipher Service - Detects duplicate or similar articles
// Prevents publishing content that's too similar to existing articles

import { blogPosts } from '@/data/blogPosts';

interface SimilarityResult {
  isDuplicate: boolean;
  isTooSimilar: boolean;
  similarityScore: number;
  matchingArticles: MatchingArticle[];
  recommendation: string;
}

interface MatchingArticle {
  id: string;
  title: string;
  slug: string;
  similarityScore: number;
  matchType: 'exact' | 'title' | 'content' | 'keywords';
}

// Common words to ignore in similarity checks
const STOP_WORDS = new Set([
  'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with',
  'by', 'from', 'as', 'is', 'was', 'are', 'were', 'been', 'be', 'have', 'has', 'had',
  'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'must',
  'shall', 'can', 'need', 'dare', 'ought', 'used', 'this', 'that', 'these', 'those',
  'i', 'you', 'he', 'she', 'it', 'we', 'they', 'what', 'which', 'who', 'when', 'where',
  'why', 'how', 'all', 'each', 'every', 'both', 'few', 'more', 'most', 'other', 'some',
  'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 'just',
  'insurance', 'agency', 'agencies', 'agent', 'agents', 'your', 'guide', 'ultimate'
]);

class ArticleDecipherService {
  // Extract meaningful keywords from text
  private extractKeywords(text: string): string[] {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 3 && !STOP_WORDS.has(word));
  }

  // Calculate Levenshtein distance between two strings
  private levenshteinDistance(str1: string, str2: string): number {
    const m = str1.length;
    const n = str2.length;
    const dp: number[][] = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (str1[i - 1] === str2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(
            dp[i - 1][j - 1] + 1,
            dp[i - 1][j] + 1,
            dp[i][j - 1] + 1
          );
        }
      }
    }

    return dp[m][n];
  }

  // Calculate string similarity (0-1)
  private stringSimilarity(str1: string, str2: string): number {
    const s1 = str1.toLowerCase().trim();
    const s2 = str2.toLowerCase().trim();

    if (s1 === s2) return 1;
    if (s1.length === 0 || s2.length === 0) return 0;

    const distance = this.levenshteinDistance(s1, s2);
    const maxLength = Math.max(s1.length, s2.length);
    return 1 - (distance / maxLength);
  }

  // Calculate Jaccard similarity for keyword sets
  private jaccardSimilarity(set1: string[], set2: string[]): number {
    const s1 = new Set(set1);
    const s2 = new Set(set2);

    const intersection = new Set(Array.from(s1).filter(x => s2.has(x)));
    const union = new Set([...set1, ...set2]);

    if (union.size === 0) return 0;
    return intersection.size / union.size;
  }

  // Calculate cosine similarity for keyword frequency
  private cosineSimilarity(keywords1: string[], keywords2: string[]): number {
    const freq1: Record<string, number> = {};
    const freq2: Record<string, number> = {};

    keywords1.forEach(k => freq1[k] = (freq1[k] || 0) + 1);
    keywords2.forEach(k => freq2[k] = (freq2[k] || 0) + 1);

    const allKeys = new Set([...Object.keys(freq1), ...Object.keys(freq2)]);

    let dotProduct = 0;
    let norm1 = 0;
    let norm2 = 0;

    allKeys.forEach(key => {
      const v1 = freq1[key] || 0;
      const v2 = freq2[key] || 0;
      dotProduct += v1 * v2;
      norm1 += v1 * v1;
      norm2 += v2 * v2;
    });

    if (norm1 === 0 || norm2 === 0) return 0;
    return dotProduct / (Math.sqrt(norm1) * Math.sqrt(norm2));
  }

  // Check if new article is duplicate or too similar
  checkSimilarity(
    newTitle: string,
    newExcerpt: string,
    newContent: string,
    newCategory: string
  ): SimilarityResult {
    const matchingArticles: MatchingArticle[] = [];

    // Extract keywords from new article
    const newTitleKeywords = this.extractKeywords(newTitle);
    const newContentKeywords = this.extractKeywords(newExcerpt + ' ' + newContent);
    const newAllKeywords = [...newTitleKeywords, ...newContentKeywords];

    // Check against all existing articles
    for (const article of blogPosts) {
      let maxScore = 0;
      let matchType: 'exact' | 'title' | 'content' | 'keywords' = 'keywords';

      // Check for exact title match
      const titleSimilarity = this.stringSimilarity(newTitle, article.title);
      if (titleSimilarity > 0.95) {
        maxScore = titleSimilarity;
        matchType = 'exact';
      } else if (titleSimilarity > 0.7) {
        maxScore = titleSimilarity;
        matchType = 'title';
      }

      // Check keyword similarity
      const existingTitleKeywords = this.extractKeywords(article.title);
      const existingContentKeywords = this.extractKeywords(article.excerpt + ' ' + article.content);
      const existingAllKeywords = [...existingTitleKeywords, ...existingContentKeywords];

      // Title keyword overlap
      const titleKeywordSimilarity = this.jaccardSimilarity(newTitleKeywords, existingTitleKeywords);
      if (titleKeywordSimilarity > maxScore) {
        maxScore = titleKeywordSimilarity;
        matchType = 'title';
      }

      // Content keyword overlap (cosine similarity)
      const contentSimilarity = this.cosineSimilarity(newAllKeywords, existingAllKeywords);
      if (contentSimilarity > maxScore) {
        maxScore = contentSimilarity;
        matchType = 'content';
      }

      // Jaccard for overall keyword match
      const keywordSimilarity = this.jaccardSimilarity(newAllKeywords, existingAllKeywords);
      if (keywordSimilarity > maxScore) {
        maxScore = keywordSimilarity;
        matchType = 'keywords';
      }

      // Boost score if same category
      if (article.category === newCategory) {
        maxScore = Math.min(1, maxScore * 1.1);
      }

      // Add to matching articles if significant similarity
      if (maxScore > 0.3) {
        matchingArticles.push({
          id: article.id,
          title: article.title,
          slug: article.slug,
          similarityScore: maxScore,
          matchType,
        });
      }
    }

    // Sort by similarity score
    matchingArticles.sort((a, b) => b.similarityScore - a.similarityScore);

    // Determine if duplicate or too similar
    const topMatch = matchingArticles[0];
    const isDuplicate = topMatch && topMatch.similarityScore > 0.9;
    const isTooSimilar = topMatch && topMatch.similarityScore > 0.6;
    const overallScore = topMatch ? topMatch.similarityScore : 0;

    // Generate recommendation
    let recommendation = '';
    if (isDuplicate) {
      recommendation = `This article appears to be a duplicate of "${topMatch.title}". Consider updating the existing article instead.`;
    } else if (isTooSimilar) {
      recommendation = `This article is very similar to "${topMatch.title}" (${Math.round(topMatch.similarityScore * 100)}% match). Consider differentiating the content or choosing a different angle.`;
    } else if (overallScore > 0.4) {
      recommendation = `Some overlap detected with existing content. The article should be unique enough to publish.`;
    } else {
      recommendation = 'This appears to be unique content. Safe to publish.';
    }

    return {
      isDuplicate,
      isTooSimilar,
      similarityScore: overallScore,
      matchingArticles: matchingArticles.slice(0, 5), // Top 5 matches
      recommendation,
    };
  }

  // Search existing articles by keyword
  searchArticles(query: string): MatchingArticle[] {
    if (!query.trim()) return [];

    const queryKeywords = this.extractKeywords(query);
    const results: MatchingArticle[] = [];

    for (const article of blogPosts) {
      const articleKeywords = this.extractKeywords(
        article.title + ' ' + article.excerpt + ' ' + article.content
      );

      // Calculate relevance score
      const jaccardScore = this.jaccardSimilarity(queryKeywords, articleKeywords);
      const titleMatch = this.stringSimilarity(query.toLowerCase(), article.title.toLowerCase());

      // Combine scores with title match weighted higher
      const score = (titleMatch * 0.6) + (jaccardScore * 0.4);

      if (score > 0.1) {
        results.push({
          id: article.id,
          title: article.title,
          slug: article.slug,
          similarityScore: score,
          matchType: titleMatch > jaccardScore ? 'title' : 'keywords',
        });
      }
    }

    return results.sort((a, b) => b.similarityScore - a.similarityScore).slice(0, 20);
  }

  // Get all articles for browsing
  getAllArticles() {
    return blogPosts.map(article => ({
      id: article.id,
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt,
      date: article.date,
      category: article.category,
      readTime: article.readTime,
      image: article.image,
    }));
  }

  // Get articles by category
  getArticlesByCategory(category: string) {
    return this.getAllArticles().filter(a => a.category === category);
  }

  // Get all unique categories
  getCategories(): string[] {
    const categories = new Set(blogPosts.map(a => a.category));
    return Array.from(categories).sort();
  }
}

export const articleDecipher = new ArticleDecipherService();
