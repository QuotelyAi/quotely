import Link from 'next/link';
import { getAuthorByName, type Author } from '@/lib/authoritative-sources';
import { CheckCircle, ExternalLink } from 'lucide-react';

interface AuthorBylineProps {
  authorName: string;
  date: string;
  readTime?: string;
  showCredentials?: boolean;
  showBio?: boolean;
}

export default function AuthorByline({
  authorName,
  date,
  readTime,
  showCredentials = true,
  showBio = false,
}: AuthorBylineProps) {
  const author = getAuthorByName(authorName);

  // Format date for display
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (!author) {
    // Fallback for unknown authors
    return (
      <div className="flex items-center gap-4 py-4 border-b border-gray-800">
        <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
          <span className="text-lg font-semibold text-gray-300">
            {authorName.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-medium text-white">{authorName}</p>
          <p className="text-sm text-gray-400">
            {formattedDate}
            {readTime && <span className="ml-2">· {readTime}</span>}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="border-b border-gray-800 pb-6 mb-6">
      {/* Main byline */}
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center flex-shrink-0">
          <span className="text-xl font-bold text-gray-900">
            {author.name.split(' ').map((n) => n[0]).join('')}
          </span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-white">{author.name}</p>
            <CheckCircle className="w-4 h-4 text-yellow-500" aria-label="Verified author" />
          </div>
          <p className="text-sm text-yellow-500">{author.title}</p>
          <p className="text-sm text-gray-400 mt-1">
            Published {formattedDate}
            {readTime && <span className="ml-2">· {readTime}</span>}
          </p>
        </div>
      </div>

      {/* Credentials */}
      {showCredentials && author.credentials.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {author.credentials.map((credential, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300 border border-gray-700"
            >
              {credential}
            </span>
          ))}
        </div>
      )}

      {/* Full bio */}
      {showBio && (
        <div className="mt-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
          <p className="text-sm text-gray-300 leading-relaxed">{author.bio}</p>
          {author.linkedIn && (
            <a
              href={author.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-sm text-yellow-500 hover:text-yellow-400"
            >
              Connect on LinkedIn
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      )}

      {/* Expertise tags */}
      {showBio && author.expertise.length > 0 && (
        <div className="mt-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Areas of Expertise</p>
          <div className="flex flex-wrap gap-2">
            {author.expertise.map((area, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 text-xs bg-yellow-500/10 text-yellow-500 rounded"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Editorial standards link */}
      <div className="mt-4 pt-4 border-t border-gray-800">
        <Link
          href="/editorial-standards"
          className="text-xs text-gray-500 hover:text-gray-400 inline-flex items-center gap-1"
        >
          Read our editorial standards and fact-checking process
          <ExternalLink className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}

// Compact version for article cards
export function AuthorBylineCompact({
  authorName,
  date,
}: {
  authorName: string;
  date: string;
}) {
  const author = getAuthorByName(authorName);
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="flex items-center gap-2 text-sm text-gray-400">
      <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
        <span className="text-xs font-medium text-gray-300">
          {(author?.name || authorName).charAt(0)}
        </span>
      </div>
      <span>{author?.name || authorName}</span>
      <span>·</span>
      <span>{formattedDate}</span>
    </div>
  );
}

// Schema.org Person markup for author
export function AuthorSchema({ author }: { author: Author }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `https://tryquotely.com/#${author.id}`,
    name: author.name,
    jobTitle: author.title,
    description: author.bio,
    knowsAbout: author.expertise,
    worksFor: {
      '@id': 'https://tryquotely.com/#organization',
    },
    sameAs: author.linkedIn ? [author.linkedIn] : [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
