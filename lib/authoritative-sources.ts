// Authoritative sources for E-E-A-T compliance
// These are trusted industry sources that demonstrate expertise and authority

export interface AuthoritativeSource {
  name: string;
  url: string;
  description: string;
  category: 'regulatory' | 'industry' | 'research' | 'government' | 'professional';
  trustScore: number; // 1-10 scale
}

export const authoritativeSources: AuthoritativeSource[] = [
  // Regulatory Bodies
  {
    name: 'National Association of Insurance Commissioners (NAIC)',
    url: 'https://content.naic.org',
    description: 'U.S. standard-setting and regulatory support organization for state insurance regulators',
    category: 'regulatory',
    trustScore: 10,
  },
  {
    name: 'Insurance Information Institute (III)',
    url: 'https://www.iii.org',
    description: 'Leading source of insurance industry information, analysis, and referral',
    category: 'industry',
    trustScore: 9,
  },
  {
    name: 'AM Best',
    url: 'https://www.ambest.com',
    description: 'Global credit rating agency focused on the insurance industry',
    category: 'industry',
    trustScore: 10,
  },

  // Government Sources
  {
    name: 'Federal Insurance Office (FIO)',
    url: 'https://home.treasury.gov/policy-issues/financial-markets-financial-institutions-and-fiscal-service/federal-insurance-office',
    description: 'Part of the U.S. Department of Treasury, monitors insurance industry',
    category: 'government',
    trustScore: 10,
  },
  {
    name: 'FEMA National Flood Insurance Program',
    url: 'https://www.fema.gov/flood-insurance',
    description: 'Federal flood insurance program and resources',
    category: 'government',
    trustScore: 10,
  },
  {
    name: 'Consumer Financial Protection Bureau (CFPB)',
    url: 'https://www.consumerfinance.gov',
    description: 'Federal agency protecting consumers in financial sector',
    category: 'government',
    trustScore: 10,
  },

  // Industry Research
  {
    name: 'McKinsey Insurance Practice',
    url: 'https://www.mckinsey.com/industries/financial-services/our-insights',
    description: 'Leading management consulting insights on insurance industry',
    category: 'research',
    trustScore: 9,
  },
  {
    name: 'Deloitte Insurance',
    url: 'https://www2.deloitte.com/us/en/industries/financial-services/insurance.html',
    description: 'Insurance industry research and advisory services',
    category: 'research',
    trustScore: 9,
  },
  {
    name: 'PwC Insurance',
    url: 'https://www.pwc.com/us/en/industries/financial-services/insurance.html',
    description: 'Insurance industry insights and transformation guidance',
    category: 'research',
    trustScore: 9,
  },

  // Professional Organizations
  {
    name: 'Independent Insurance Agents & Brokers of America (IIABA)',
    url: 'https://www.independentagent.com',
    description: 'National alliance of independent insurance agents',
    category: 'professional',
    trustScore: 9,
  },
  {
    name: 'Professional Insurance Agents (PIA)',
    url: 'https://www.pianet.com',
    description: 'National trade association for independent insurance agents',
    category: 'professional',
    trustScore: 8,
  },
  {
    name: 'National Association of Professional Insurance Agents',
    url: 'https://www.pianet.org',
    description: 'Advocacy and education for insurance professionals',
    category: 'professional',
    trustScore: 8,
  },
  {
    name: 'Insurance Journal',
    url: 'https://www.insurancejournal.com',
    description: 'Leading property/casualty insurance news publication',
    category: 'industry',
    trustScore: 8,
  },
  {
    name: 'PropertyCasualty360',
    url: 'https://www.propertycasualty360.com',
    description: 'News and analysis for P&C insurance professionals',
    category: 'industry',
    trustScore: 8,
  },

  // Technology & InsurTech
  {
    name: 'InsurTech News',
    url: 'https://insurtechnews.com',
    description: 'Insurance technology news and innovation coverage',
    category: 'industry',
    trustScore: 7,
  },
  {
    name: 'Coverager',
    url: 'https://coverager.com',
    description: 'InsurTech and insurance innovation news',
    category: 'industry',
    trustScore: 7,
  },
];

// Authors with credentials for E-E-A-T
export interface Author {
  id: string;
  name: string;
  title: string;
  credentials: string[];
  bio: string;
  image?: string;
  linkedIn?: string;
  expertise: string[];
}

export const authors: Author[] = [
  {
    id: 'dustin-wyzard',
    name: 'Dustin Wyzard',
    title: 'Founder & CEO',
    credentials: [
      'Insurance Technology Expert',
      'Former Insurance Agency Owner',
      '15+ Years Industry Experience',
    ],
    bio: 'Dustin Wyzard is the founder and CEO of Quotely, bringing over 15 years of experience in the insurance industry. His background includes running successful insurance agencies and developing technology solutions that streamline agency operations.',
    expertise: [
      'Insurance Technology',
      'Agency Management',
      'InsurTech Innovation',
      'Business Strategy',
    ],
    linkedIn: 'https://www.linkedin.com/in/dustinwyzard',
  },
  {
    id: 'quotely-editorial',
    name: 'Quotely Editorial Team',
    title: 'Insurance Technology Experts',
    credentials: [
      'Combined 50+ Years Insurance Experience',
      'Licensed Insurance Professionals',
      'Certified Technology Specialists',
    ],
    bio: 'The Quotely Editorial Team consists of licensed insurance professionals, technology experts, and industry analysts who collaborate to provide accurate, actionable insights for insurance agencies.',
    expertise: [
      'Insurance Operations',
      'Technology Implementation',
      'Regulatory Compliance',
      'Best Practices',
    ],
  },
];

// Get author by ID
export function getAuthorById(id: string): Author | undefined {
  return authors.find((author) => author.id === id);
}

// Get author by name
export function getAuthorByName(name: string): Author | undefined {
  return authors.find((author) => author.name === name);
}

// Get sources by category
export function getSourcesByCategory(category: AuthoritativeSource['category']): AuthoritativeSource[] {
  return authoritativeSources.filter((source) => source.category === category);
}

// Editorial guidelines
export const editorialGuidelines = {
  factChecking: [
    'All statistics must cite primary sources',
    'Claims are verified against authoritative industry sources',
    'Content is reviewed by licensed insurance professionals',
    'Updates are made when regulations or best practices change',
  ],
  expertiseRequirements: [
    'Authors have direct industry experience',
    'Technical content reviewed by subject matter experts',
    'Regulatory content verified against official sources',
    'Product information based on firsthand platform knowledge',
  ],
  transparencyPolicies: [
    'Clear disclosure of commercial relationships',
    'Distinction between editorial and sponsored content',
    'Author credentials displayed on all content',
    'Sources cited for all factual claims',
  ],
  updatePolicy: {
    frequency: 'Content reviewed quarterly for accuracy',
    triggers: [
      'Regulatory changes',
      'Industry updates',
      'Reader feedback',
      'New research or data',
    ],
    notation: 'Last updated date displayed on all articles',
  },
};
