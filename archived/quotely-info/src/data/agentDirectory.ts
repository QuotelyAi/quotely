import { StateData, CityData } from '../types/agent';
import { OKLAHOMA_CITIES, ALL_OKLAHOMA_AGENCIES } from './oklahomaAgencies';

// All 50 US States - Oklahoma count updated with real data
export const US_STATES = [
  { name: 'Alabama', code: 'AL', agentCount: 89 },
  { name: 'Alaska', code: 'AK', agentCount: 23 },
  { name: 'Arizona', code: 'AZ', agentCount: 142 },
  { name: 'Arkansas', code: 'AR', agentCount: 67 },
  { name: 'California', code: 'CA', agentCount: 523 },
  { name: 'Colorado', code: 'CO', agentCount: 178 },
  { name: 'Connecticut', code: 'CT', agentCount: 95 },
  { name: 'Delaware', code: 'DE', agentCount: 34 },
  { name: 'Florida', code: 'FL', agentCount: 412 },
  { name: 'Georgia', code: 'GA', agentCount: 234 },
  { name: 'Hawaii', code: 'HI', agentCount: 45 },
  { name: 'Idaho', code: 'ID', agentCount: 56 },
  { name: 'Illinois', code: 'IL', agentCount: 287 },
  { name: 'Indiana', code: 'IN', agentCount: 156 },
  { name: 'Iowa', code: 'IA', agentCount: 98 },
  { name: 'Kansas', code: 'KS', agentCount: 87 },
  { name: 'Kentucky', code: 'KY', agentCount: 112 },
  { name: 'Louisiana', code: 'LA', agentCount: 134 },
  { name: 'Maine', code: 'ME', agentCount: 43 },
  { name: 'Maryland', code: 'MD', agentCount: 167 },
  { name: 'Massachusetts', code: 'MA', agentCount: 198 },
  { name: 'Michigan', code: 'MI', agentCount: 223 },
  { name: 'Minnesota', code: 'MN', agentCount: 145 },
  { name: 'Mississippi', code: 'MS', agentCount: 78 },
  { name: 'Missouri', code: 'MO', agentCount: 156 },
  { name: 'Montana', code: 'MT', agentCount: 38 },
  { name: 'Nebraska', code: 'NE', agentCount: 67 },
  { name: 'Nevada', code: 'NV', agentCount: 89 },
  { name: 'New Hampshire', code: 'NH', agentCount: 52 },
  { name: 'New Jersey', code: 'NJ', agentCount: 245 },
  { name: 'New Mexico', code: 'NM', agentCount: 67 },
  { name: 'New York', code: 'NY', agentCount: 456 },
  { name: 'North Carolina', code: 'NC', agentCount: 267 },
  { name: 'North Dakota', code: 'ND', agentCount: 29 },
  { name: 'Ohio', code: 'OH', agentCount: 289 },
  { name: 'Oklahoma', code: 'OK', agentCount: ALL_OKLAHOMA_AGENCIES.length },
  { name: 'Oregon', code: 'OR', agentCount: 134 },
  { name: 'Pennsylvania', code: 'PA', agentCount: 312 },
  { name: 'Rhode Island', code: 'RI', agentCount: 38 },
  { name: 'South Carolina', code: 'SC', agentCount: 145 },
  { name: 'South Dakota', code: 'SD', agentCount: 32 },
  { name: 'Tennessee', code: 'TN', agentCount: 178 },
  { name: 'Texas', code: 'TX', agentCount: 612 },
  { name: 'Utah', code: 'UT', agentCount: 89 },
  { name: 'Vermont', code: 'VT', agentCount: 27 },
  { name: 'Virginia', code: 'VA', agentCount: 234 },
  { name: 'Washington', code: 'WA', agentCount: 198 },
  { name: 'West Virginia', code: 'WV', agentCount: 54 },
  { name: 'Wisconsin', code: 'WI', agentCount: 156 },
  { name: 'Wyoming', code: 'WY', agentCount: 21 },
];

// Full Oklahoma data with real agency data from Oklahoma Insurance Department
export const MOCK_OKLAHOMA_DATA: StateData = {
  state: 'Oklahoma',
  stateCode: 'OK',
  totalAgents: ALL_OKLAHOMA_AGENCIES.length,
  topSpecialties: [
    { name: 'property', count: ALL_OKLAHOMA_AGENCIES.length },
    { name: 'casualty', count: ALL_OKLAHOMA_AGENCIES.length },
    { name: 'life', count: Math.floor(ALL_OKLAHOMA_AGENCIES.length * 0.4) },
    { name: 'health', count: Math.floor(ALL_OKLAHOMA_AGENCIES.length * 0.2) },
  ],
  cities: OKLAHOMA_CITIES.map(city => ({
    name: city.city,
    slug: city.slug,
    agentCount: city.agencies.length,
    topAgents: city.agencies.slice(0, 3).map((agency) => ({
      id: agency.id,
      name: agency.name,
      slug: agency.slug,
      agencyName: agency.name,
      // Note: rating and reviewCount intentionally omitted - only shown when verified
    })),
  })),
};

// Note: Individual agent profiles are not included to ensure accuracy.
// Only verified agency listings from Oklahoma Insurance Department are shown.
// Agent profiles will be added when agents register and verify their information.

export class AgentDirectoryService {
  static async getAllStates() {
    await new Promise(resolve => setTimeout(resolve, 300));
    return US_STATES;
  }

  static async getStateData(stateCode: string): Promise<StateData> {
    await new Promise(resolve => setTimeout(resolve, 300));

    const normalizedCode = stateCode.toLowerCase();

    if (normalizedCode === 'oklahoma' || normalizedCode === 'ok') {
      return MOCK_OKLAHOMA_DATA;
    }

    // Generic data for other states
    const state = US_STATES.find(s =>
      s.code.toLowerCase() === normalizedCode ||
      s.name.toLowerCase() === normalizedCode
    );

    if (!state) {
      throw new Error('State not found');
    }

    return {
      state: state.name,
      stateCode: state.code,
      totalAgents: state.agentCount,
      cities: [
        { name: 'Coming Soon', slug: 'coming-soon', agentCount: state.agentCount, topAgents: [] },
      ],
      topSpecialties: [
        { name: 'auto', count: Math.floor(state.agentCount * 0.9) },
        { name: 'home', count: Math.floor(state.agentCount * 0.6) },
      ],
    };
  }

  static async getCityData(stateCode: string, citySlug: string): Promise<CityData> {
    await new Promise(resolve => setTimeout(resolve, 300));

    if (stateCode.toLowerCase() === 'ok') {
      // Find the city in Oklahoma data
      const cityData = OKLAHOMA_CITIES.find(c => c.slug === citySlug);
      if (cityData) {
        return {
          city: cityData.city,
          state: 'Oklahoma',
          stateCode: 'OK',
          totalAgents: cityData.agencies.length,
          neighborhoods: [],
          agents: [], // Individual agent profiles require registration
        };
      }
    }

    throw new Error('City not found');
  }

  static async getAgentBySlug(slug: string) {
    await new Promise(resolve => setTimeout(resolve, 300));

    // Individual agent profiles require registration - agency data only
    const agency = ALL_OKLAHOMA_AGENCIES.find(a => a.slug === slug);
    if (!agency) {
      throw new Error('Agent not found');
    }
    return agency;
  }
}
