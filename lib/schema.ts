// JSON-LD Schema generators for E-E-A-T and SEO optimization

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://tryquotely.com/#organization',
  name: 'Quotely',
  legalName: 'Quotely, Inc.',
  url: 'https://tryquotely.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://tryquotely.com/logo.png',
    width: 512,
    height: 512,
  },
  description: 'AI-powered insurance quoting platform helping agencies streamline operations with comparative rating, CRM, and agency management tools.',
  foundingDate: '2024',
  founders: [
    {
      '@type': 'Person',
      '@id': 'https://tryquotely.com/#dustin-wyzard',
      name: 'Dustin Wyzard',
      jobTitle: 'Founder & CEO',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '6010 S. 66th E. Ave, Suite B',
    addressLocality: 'Tulsa',
    addressRegion: 'OK',
    postalCode: '74145',
    addressCountry: 'US',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+1-918-395-6335',
      contactType: 'sales',
      email: 'sales@tryquotely.com',
      availableLanguage: 'English',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+1-918-395-6335',
      contactType: 'customer support',
      email: 'support@tryquotely.com',
      availableLanguage: 'English',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/tryquotely',
    'https://twitter.com/tryquotely',
  ],
  knowsAbout: [
    'Insurance Technology',
    'Agency Management Systems',
    'Comparative Rating',
    'Insurance CRM',
    'InsurTech',
    'AI in Insurance',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://tryquotely.com/#website',
  url: 'https://tryquotely.com',
  name: 'Quotely - Insurance Technology Platform',
  description: 'AI-powered insurance quoting and agency management platform',
  publisher: {
    '@id': 'https://tryquotely.com/#organization',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://tryquotely.com/blog?search={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Quotely',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web Browser',
  description: 'AI-powered insurance quoting platform with comparative rating, CRM, and agency management tools.',
  url: 'https://tryquotely.com',
  provider: {
    '@id': 'https://tryquotely.com/#organization',
  },
  offers: {
    '@type': 'Offer',
    price: '999',
    priceCurrency: 'USD',
    priceValidUntil: '2025-12-31',
    availability: 'https://schema.org/InStock',
  },
  featureList: [
    'Comparative Insurance Rating',
    'Multi-Carrier Quoting',
    'Agency Management System',
    'Customer Relationship Management',
    'AI-Powered Automation',
    'Real-Time Analytics',
  ],
  screenshot: 'https://tryquotely.com/screenshot.png',
};

export function generateArticleSchema(article: {
  title: string;
  excerpt: string;
  slug: string;
  author: string;
  date: string;
  image?: string;
  category: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://tryquotely.com/blog/${article.slug}#article`,
    headline: article.title,
    description: article.excerpt,
    image: article.image || 'https://tryquotely.com/blog-default.jpg',
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Person',
      name: article.author,
      url: 'https://tryquotely.com/editorial-standards#authors',
    },
    publisher: {
      '@id': 'https://tryquotely.com/#organization',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://tryquotely.com/blog/${article.slug}`,
    },
    articleSection: article.category,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.blog-content h1', '.blog-content h2', '.blog-content p.lead'],
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
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
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    url: product.url,
    image: product.image || 'https://tryquotely.com/product-default.jpg',
    brand: {
      '@id': 'https://tryquotely.com/#organization',
    },
    offers: {
      '@type': 'Offer',
      url: 'https://tryquotely.com/pricing',
      priceCurrency: 'USD',
      price: '999',
      priceValidUntil: '2025-12-31',
      availability: 'https://schema.org/InStock',
    },
  };
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://tryquotely.com/#localbusiness',
  name: 'Quotely',
  image: 'https://tryquotely.com/logo.png',
  telephone: '+1-918-395-6335',
  email: 'sales@tryquotely.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '6010 S. 66th E. Ave, Suite B',
    addressLocality: 'Tulsa',
    addressRegion: 'OK',
    postalCode: '74145',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.0844,
    longitude: -95.8869,
  },
  url: 'https://tryquotely.com',
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
};
