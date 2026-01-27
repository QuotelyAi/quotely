# Quotely.info - Claude Code Context

## Project Overview
Quotely.info is the marketing and information site for Quotely, the insurance quoting platform. Built with React + TypeScript + Vite, deployed on Vercel with Supabase backend.

**Founder**: Dustin Wyzard
**Domain**: quotely.info
**Tech Stack**: React 18, TypeScript, Vite, TailwindCSS, Supabase, Vercel

---

## Project Awareness & Context

### Documentation is Source of Truth
- Check `/research/` directory for scraped documentation
- Read `PLANNING.md` at start of conversations if it exists

### Project Structure
```
quotely.info/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   └── utils/
├── public/
├── supabase/              # Supabase configuration
├── .claude/
├── PRPs/
├── examples/
└── research/
```

---

## Code Standards

### TypeScript/React
- Functional components with TypeScript
- React 18 patterns
- Proper type annotations

### Styling
- TailwindCSS for all styling
- Mobile-first responsive design
- Consistent with Quotely brand

### Supabase Integration
- Follow existing patterns for database queries
- Proper error handling for API calls
- Environment variables for configuration

---

## Marketing Site Context

### Purpose
- Explain Quotely's value proposition
- Convert visitors to platform signups
- Provide educational insurance content
- Support SEO for "insurance quoting" terms

### Content Guidelines
- Clear, benefit-focused copy
- Trust-building elements
- Compliance with insurance advertising rules
- Strong CTAs to tryquotely.com

---

## Development Workflow

### Validation Commands
```bash
npm run lint
npm run type-check
npm run build
npm run dev
```

### Deployment
- Vercel auto-deployment
- Check `vercel.json` for configuration
- Supabase for any backend needs

---

## AI Behavior Rules

1. **Brand consistency** - match Quotely visual identity
2. **Compliance** - insurance advertising rules
3. **Conversion focused** - clear path to signup
4. **Mobile-first** - most traffic is mobile
5. **SEO optimized** - proper meta and schema

---

## Related Projects
- `quotely-platform` - Main SaaS platform (tryquotely.com)
- Insurance sites for cross-linking opportunities
