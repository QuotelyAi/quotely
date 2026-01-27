export interface State {
  name: string;
  code: string;
  agentCount: number;
}

export interface Specialty {
  name: string;
  count: number;
}

export interface TopAgent {
  id: string;
  name: string;
  slug: string;
  agencyName: string;
  rating?: number;  // Only set if verified from Google/source
  reviewCount?: number;  // Only set if verified from Google/source
}

export interface CityOverview {
  name: string;
  slug: string;
  agentCount: number;
  topAgents: TopAgent[];
}

export interface StateData {
  state: string;
  stateCode: string;
  totalAgents: number;
  topSpecialties: Specialty[];
  cities: CityOverview[];
}

export interface Neighborhood {
  name: string;
  slug: string;
  agentCount: number;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  stateCode: string;
  zip: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface AgentProfile {
  id: string;
  slug: string;
  firstName: string;
  lastName: string;
  agencyName: string;
  email: string;
  phone: string;
  website?: string;
  address: Address;
  bio: string;
  yearsExperience: number;
  languages: string[];
  specialties: string[];
  carriers: string[];
  quotesCompleted: number;
  avgResponseTime: number;
  rating?: number;  // Only set if verified from Google/source
  reviewCount?: number;  // Only set if verified from Google/source
  isActive: boolean;
  isPremium: boolean;
  joinedAt: string;
  lastActive: string;
}

export interface CityData {
  city: string;
  state: string;
  stateCode: string;
  totalAgents: number;
  neighborhoods: Neighborhood[];
  agents: AgentProfile[];
}
