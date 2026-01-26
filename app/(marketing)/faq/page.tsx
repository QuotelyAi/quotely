'use client';

import { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: 'General',
    question: 'What is Quotely?',
    answer: 'Quotely is a modern insurance intelligence platform designed to streamline your quoting process with verified carrier integrations through TurboRater and professional-grade tools.',
  },
  {
    category: 'General',
    question: 'How does Quotely work?',
    answer: 'Quotely integrates with industry-standard platforms like TurboRater and Momentum AMP to provide accurate carrier data and streamline your workflow. Our web-based platform operates 24/7 at just $1.37/hour.',
  },
  {
    category: 'Pricing',
    question: 'How can I get started with Quotely?',
    answer: "Contact our sales team at sales@tryquotely.com to schedule a personalized demo and discuss custom pricing options tailored to your agency's needs.",
  },
  {
    category: 'Pricing',
    question: 'What makes Quotely different?',
    answer: 'Quotely combines AI-powered efficiency with verified carrier data, operating at a fraction of traditional staffing costs while maintaining professional-grade accuracy and reliability.',
  },
  {
    category: 'Pricing',
    question: 'What are the pricing options?',
    answer: "We offer flexible, custom pricing based on your agency's specific needs and size. Contact sales@tryquotely.com for a personalized quote and to discuss available options.",
  },
  {
    category: 'Features',
    question: 'Which insurance carriers are supported?',
    answer: 'Quotely provides verified carrier data through our partnership with TurboRater, ensuring accurate and up-to-date information from major insurance carriers.',
  },
  {
    category: 'Features',
    question: 'Can I import my existing client data?',
    answer: 'Yes! We support bulk imports from CSV and Excel files. Our onboarding team will help you migrate your data seamlessly.',
  },
  {
    category: 'Features',
    question: 'Does Quotely replace my agency management system?',
    answer: 'Quotely can work standalone or integrate with your existing agency management system. We have integrations with Momentum AMP by NowCerts and GAIL.',
  },
  {
    category: 'Security',
    question: 'Is my data secure?',
    answer: 'Yes. Quotely uses modern security practices including SSL encryption and secure cloud infrastructure to protect your data. We prioritize data security and privacy.',
  },
  {
    category: 'Security',
    question: 'Who has access to my data?',
    answer: 'Only you and authorized users in your agency have access to your data. Our employees cannot access your data without explicit permission for support purposes.',
  },
  {
    category: 'Support',
    question: 'What kind of support is available?',
    answer: 'We provide professional email support at sales@tryquotely.com. Our team is committed to helping you get the most from the Quotely platform.',
  },
  {
    category: 'Support',
    question: 'Do you provide training?',
    answer: 'Yes! We offer implementation assistance and training to help your team get up and running quickly with the Quotely platform.',
  },
  {
    category: 'Technical',
    question: 'What are the system requirements?',
    answer: 'Quotely is cloud-based and works on any modern web browser (Chrome, Firefox, Safari, Edge). Mobile apps are available for iOS and Android.',
  },
  {
    category: 'Technical',
    question: 'Is there an API available?',
    answer: 'API access is available for custom integrations. Contact our sales team to discuss API capabilities and implementation options for your agency.',
  },
];

// Generate FAQ Schema for SEO
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-gray-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Find answers to common questions about Quotely
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {categories.map((category) => (
              <div key={category} className="mb-8">
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">{category}</h2>
                <div className="space-y-4">
                  {faqs
                    .filter((faq) => faq.category === category)
                    .map((faq) => {
                      const globalIndex = faqs.indexOf(faq);
                      const isOpen = openItems.includes(globalIndex);

                      return (
                        <div
                          key={globalIndex}
                          className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800"
                        >
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800 transition-colors"
                          >
                            <span className="font-medium text-white">{faq.question}</span>
                            {isOpen ? (
                              <ChevronUp className="text-gray-400 flex-shrink-0 ml-4" size={20} />
                            ) : (
                              <ChevronDown className="text-gray-400 flex-shrink-0 ml-4" size={20} />
                            )}
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-4">
                              <p className="text-gray-300">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-primary-800 rounded-lg p-8 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
            <p className="text-white/90 mb-6">
              Our support team is here to help you get the answers you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Contact Support
              </Link>
              <Link
                href="/demo-request"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-800 transition-colors"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
