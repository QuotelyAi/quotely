import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import type { Metadata } from 'next';
import Script from 'next/script';
import AuthorByline from '@/components/AuthorByline';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

// Generate static params for all blog posts at build time
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate dynamic metadata for each post
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found - Quotely Blog',
    };
  }

  return {
    title: `${post.title} - Quotely Blog`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [post.image] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  // If not enough related posts from same category, add from other categories
  if (relatedPosts.length < 2) {
    const additionalPosts = blogPosts
      .filter((p) => p.id !== post.id && !relatedPosts.includes(p))
      .slice(0, 2 - relatedPosts.length);
    relatedPosts.push(...additionalPosts);
  }

  // Article structured data for SEO (E-E-A-T optimized)
  const articleSchema = generateArticleSchema({
    title: post.title,
    excerpt: post.excerpt,
    slug: post.slug,
    author: post.author,
    date: post.date,
    image: post.image,
    category: post.category,
  });

  // Breadcrumb schema for navigation
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://tryquotely.com' },
    { name: 'Blog', url: 'https://tryquotely.com/blog' },
    { name: post.title, url: `https://tryquotely.com/blog/${post.slug}` },
  ]);

  return (
    <>
      {/* Article Schema */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Breadcrumb Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-gray-950">
        {/* Header */}
        <header className="bg-gray-900 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
          </div>
        </header>

        {/* Article */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Featured Image */}
          {post.image && (
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Title and Category */}
          <div className="mb-6">
            <div className="inline-block px-3 py-1 bg-yellow-500 text-gray-900 text-sm font-medium rounded-full mb-4">
              {post.category}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              {post.title}
            </h1>
          </div>

          {/* Author Byline with E-E-A-T credentials */}
          <AuthorByline
            authorName={post.author}
            date={post.date}
            readTime={post.readTime}
            showCredentials={true}
            showBio={false}
          />

          {/* Content */}
          <div
            className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-yellow-500 prose-strong:text-white prose-li:text-gray-300"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Share this article</h3>
            <div className="flex gap-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://tryquotely.com/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Share on Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://tryquotely.com/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                Share on LinkedIn
              </a>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <div className="bg-gray-900 rounded-lg border border-gray-800 hover:border-yellow-500/50 transition-all p-6">
                      <h4 className="font-semibold text-lg text-white mb-2 group-hover:text-yellow-500 transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="text-sm text-gray-500">
                        {relatedPost.readTime} • {relatedPost.category}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* CTA Section */}
        <section className="bg-primary-800 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Transform Your Insurance Agency?
            </h2>
            <p className="text-white/90 mb-6">
              See how Quotely can help you quote faster and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://quotely.info"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
              >
                See Platform Demo
              </a>
              <Link
                href="/demo-request"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
