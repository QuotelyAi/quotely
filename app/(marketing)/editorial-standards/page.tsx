import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle,
  Shield,
  BookOpen,
  Users,
  FileCheck,
  RefreshCw,
  ExternalLink,
  Award
} from 'lucide-react';
import { authors, authoritativeSources, editorialGuidelines } from '@/lib/authoritative-sources';

export const metadata: Metadata = {
  title: 'Editorial Standards & Guidelines - Quotely',
  description: 'Learn about Quotely\'s commitment to accuracy, expertise, and transparency in our content. Our editorial standards ensure trustworthy insurance industry information.',
  openGraph: {
    title: 'Editorial Standards & Guidelines - Quotely',
    description: 'Our commitment to E-E-A-T: Experience, Expertise, Authoritativeness, and Trustworthiness in insurance content.',
  },
};

export default function EditorialStandardsPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-950 py-16 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 rounded-full text-sm font-medium text-yellow-500 mb-6">
            <Shield className="w-4 h-4" />
            E-E-A-T Commitment
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Editorial Standards & Guidelines
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our commitment to Experience, Expertise, Authoritativeness, and Trustworthiness
            in delivering accurate, reliable insurance industry information.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Mission Statement */}
        <section className="mb-12">
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              Quotely is committed to providing insurance professionals with accurate, actionable,
              and trustworthy information. Every piece of content we publish undergoes rigorous
              review to ensure it meets our high standards for accuracy, relevance, and expertise.
              We believe that reliable information empowers agencies to make better decisions and
              serve their clients more effectively.
            </p>
          </div>
        </section>

        {/* E-E-A-T Pillars */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Our E-E-A-T Framework</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-yellow-500/20 rounded-lg">
                  <Users className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold text-white">Experience</h3>
              </div>
              <p className="text-gray-400">
                Our content is created by professionals with firsthand experience in the
                insurance industry. Our team includes former agency owners, licensed producers,
                and technology specialists who understand real-world challenges.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-yellow-500/20 rounded-lg">
                  <Award className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold text-white">Expertise</h3>
              </div>
              <p className="text-gray-400">
                All content is written or reviewed by subject matter experts with demonstrated
                knowledge in their fields. Technical accuracy is verified by licensed insurance
                professionals and technology specialists.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-yellow-500/20 rounded-lg">
                  <BookOpen className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold text-white">Authoritativeness</h3>
              </div>
              <p className="text-gray-400">
                We cite authoritative sources including NAIC, state insurance departments,
                and recognized industry publications. Our content reflects current regulations
                and industry best practices.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-yellow-500/20 rounded-lg">
                  <Shield className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold text-white">Trustworthiness</h3>
              </div>
              <p className="text-gray-400">
                We maintain transparency about our commercial relationships, clearly distinguish
                editorial from promotional content, and correct errors promptly when identified.
                Reader trust is our highest priority.
              </p>
            </div>
          </div>
        </section>

        {/* Fact-Checking Process */}
        <section className="mb-12" id="fact-checking">
          <h2 className="text-2xl font-bold text-white mb-6">Our Fact-Checking Process</h2>
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <div className="space-y-4">
              {editorialGuidelines.factChecking.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Requirements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Author Expertise Requirements</h2>
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <div className="space-y-4">
              {editorialGuidelines.expertiseRequirements.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Authors */}
        <section className="mb-12" id="authors">
          <h2 className="text-2xl font-bold text-white mb-6">Our Authors & Experts</h2>
          <div className="space-y-6">
            {authors.map((author) => (
              <div key={author.id} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-gray-900">
                      {author.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-semibold text-white">{author.name}</h3>
                      <CheckCircle className="w-5 h-5 text-yellow-500" />
                    </div>
                    <p className="text-yellow-500 mb-3">{author.title}</p>
                    <p className="text-gray-400 mb-4">{author.bio}</p>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">Credentials:</p>
                      <div className="flex flex-wrap gap-2">
                        {author.credentials.map((credential, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300"
                          >
                            {credential}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 mb-2">Areas of Expertise:</p>
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

                    {author.linkedIn && (
                      <a
                        href={author.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-4 text-sm text-yellow-500 hover:text-yellow-400"
                      >
                        View LinkedIn Profile
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Authoritative Sources */}
        <section className="mb-12" id="sources">
          <h2 className="text-2xl font-bold text-white mb-6">Our Authoritative Sources</h2>
          <p className="text-gray-400 mb-6">
            We rely on trusted industry sources to ensure accuracy and authority in our content:
          </p>

          <div className="space-y-4">
            {['regulatory', 'government', 'industry', 'professional', 'research'].map((category) => {
              const categorySources = authoritativeSources.filter((s) => s.category === category);
              if (categorySources.length === 0) return null;

              return (
                <div key={category} className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-lg font-semibold text-white capitalize mb-4">
                    {category === 'regulatory' ? 'Regulatory Bodies' :
                     category === 'government' ? 'Government Sources' :
                     category === 'industry' ? 'Industry Publications' :
                     category === 'professional' ? 'Professional Organizations' :
                     'Research & Analysis'}
                  </h3>
                  <ul className="space-y-3">
                    {categorySources.map((source) => (
                      <li key={source.url} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-500 hover:text-yellow-400 font-medium inline-flex items-center gap-1"
                          >
                            {source.name}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                          <p className="text-sm text-gray-400">{source.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Content Update Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Content Update Policy</h2>
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <RefreshCw className="w-6 h-6 text-yellow-500" />
              <p className="text-lg font-semibold text-white">{editorialGuidelines.updatePolicy.frequency}</p>
            </div>
            <p className="text-gray-400 mb-4">Content updates are triggered by:</p>
            <ul className="space-y-2">
              {editorialGuidelines.updatePolicy.triggers.map((trigger, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-300">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                  {trigger}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-4 pt-4 border-t border-gray-800">
              {editorialGuidelines.updatePolicy.notation}
            </p>
          </div>
        </section>

        {/* Transparency */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Transparency & Disclosure</h2>
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <div className="space-y-4">
              {editorialGuidelines.transparencyPolicies.map((policy, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">{policy}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
              <p className="text-sm text-gray-300">
                <strong className="text-yellow-500">Commercial Disclosure:</strong> Quotely is an insurance
                technology company. Our blog content is designed to educate insurance professionals while
                showcasing how our platform can help solve industry challenges. We clearly distinguish
                between educational content and product information.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Contact Our Editorial Team</h2>
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <p className="text-gray-300 mb-4">
              Have questions about our content or want to report an error? We take accuracy seriously
              and appreciate reader feedback.
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">
                <strong className="text-white">Email:</strong>{' '}
                <a href="mailto:editorial@tryquotely.com" className="text-yellow-500 hover:text-yellow-400">
                  editorial@tryquotely.com
                </a>
              </p>
              <p className="text-gray-300">
                <strong className="text-white">Response Time:</strong> Within 2 business days
              </p>
            </div>
            <div className="mt-6 flex gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                Read Our Blog
              </Link>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <p className="text-sm text-gray-500 mt-8 text-center">
          Last updated: January 2025
        </p>
      </div>
    </div>
  );
}
