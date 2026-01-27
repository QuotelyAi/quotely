# Quotely Architecture & Team

## Overview

Quotely is an AI-powered insurance quoting platform for insurance agencies. It integrates AMS, CRM, and rating capabilities into a unified system with agency management oversight via QUAD.

---

## Core Systems

```
┌─────────────────────────────────────────────────┐
│                   QUOTELY                        │
├─────────────────┬─────────────────┬─────────────┤
│       AMS       │       CRM       │    RATER    │
│  MomentumAMP    │  MomentumAMP    │ TurboRater  │
│   (NowCerts)    │   (NowCerts)    │  (Zywave)   │
└─────────────────┴─────────────────┴─────────────┘
```

| System | Provider | Function |
|--------|----------|----------|
| AMS (Agency Management System) | MomentumAMP by NowCerts | Agency operations management |
| CRM (Client Relationship Management) | MomentumAMP by NowCerts | Client data and relationships |
| Rater | TurboRater by Zywave | Insurance quoting/rating |

---

## Product Hierarchy

### Quotely (tryquotely.com)
The staff-facing program for daily insurance operations.

### QUAD (Agency Owner Dashboard)
Agency management module providing oversight and analytics:

- **Financial Intelligence**: Money in/out, P&L, commission payouts
- **Staff Management**: Time tracking, clock in/out, work logs, efficiency
- **Digital Presence**: SEO health, E-E-A-T compliance, Google Guidelines
- **Business Analytics**: GMB profile, social networks, industry trends

**Access Model:**
- Solo owner (no staff): Single login for Quotely + QUAD
- Owner with staff: Owner uses QUAD, staff uses Quotely

### Client Portal (quotely.info)
External client access portal hosted on Digital Ocean.

### Admin Panel (dustinwyzard.com)
Internal network management and monitoring for all Quotely sites.
- QUAD is the public-facing brand name for this functionality

---

## AI & Technology Stack

| Technology | Provider | Purpose |
|------------|----------|---------|
| Gail | Nothing Technologies | AI assistant |
| Vapi.ai | Vapi | Voice AI |
| Claude CODE | Anthropic | Development & coding |

---

## Integration Partners

| Partner | Product | Integration |
|---------|---------|-------------|
| NowCerts | MomentumAMP | AMS & CRM |
| Zywave | TurboRater | Rating engine |
| Nothing Technologies | Gail | AI capabilities |
| Vapi.ai | Voice AI | Voice automation |

---

## Development Stack

| Layer | Service |
|-------|---------|
| Domains | Namecheap |
| DNS/CDN | Cloudflare |
| Source Control | GitHub (QuotelyAi) |
| Hosting | Vercel |
| Development | Cursor + Claude CODE |

---

## Build Team

| Name | Role | Contact |
|------|------|---------|
| Dustin Wyzard | Founder | - |
| Rowan Barlow Stainsby | Builder | @rowanbarlowstainsby |
| Hamish | Builder/Coder | youtube.com/@IncomeStreamSurfers |
| Kraft Digital Agency | Development | kraftdigitalagency.com |

---

## GitHub Structure

```
QuotelyAi/
├── quotely          (PUBLIC)  - tryquotely.com main platform
├── dustinwyzard     (PRIVATE) - Admin panel / QUAD internal
└── sites            (PRIVATE) - Network sites monorepo
    ├── brokenarrowinsuranceok
    ├── gosearchbusiness
    ├── standardnewspapers
    ├── techie-world-org
    └── wyzins
```

---

## Site Network Strategy

New sites from expired domains follow one of two paths:

1. **301 Redirect**: Pass link equity to network sites
2. **Full Build**: Hub & spoke silo structure with E-E-A-T focus

All sites are monitored from the central admin panel (dustinwyzard.com).

---

## SEO Standards

All built sites follow:
- Hub & spoke silo architecture
- E-E-A-T compliance (Experience, Expertise, Authoritativeness, Trustworthiness)
- Google Guidelines adherence
- Author bios, editorial standards, proper disclosures
