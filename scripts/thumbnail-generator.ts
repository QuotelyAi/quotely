import sharp from "sharp";
import path from "path";
import fs from "fs";

const OUT_DIR = path.join(process.cwd(), "thumbnails");
const WIDTH = 1280;
const HEIGHT = 720;

// Quotely brand colors
const COLORS = {
  primaryGreen: "#1a472a",
  accentGreen: "#22c55e",
  darkBg: "#0a0a0a",
  red: "#ef4444",
  white: "#ffffff",
  lightGray: "#e5e7eb",
  neonGreen: "#4ade80",
};

interface ThumbnailConfig {
  filename: string;
  headline: string;
  subtext: string;
  metric?: string;
  metricLabel?: string;
  template: "speed" | "conversion" | "comparison" | "feature" | "trust";
}

const THUMBNAILS: ThumbnailConfig[] = [
  {
    filename: "quotely-60-percent-faster",
    headline: "60% FASTER",
    subtext: "QUOTING THAT ACTUALLY WORKS",
    metric: "24 SEC",
    metricLabel: "vs 15 min industry avg",
    template: "speed",
  },
  {
    filename: "quotely-stop-losing-customers",
    headline: "STOP LOSING\nCUSTOMERS",
    subtext: "QUOTE-TO-POLICY IN SECONDS",
    metric: "3X",
    metricLabel: "conversion rate",
    template: "conversion",
  },
  {
    filename: "quotely-sr22-quotes",
    headline: "SR-22 QUOTES\nIN 24 SEC",
    subtext: "HIGH-INTENT. HIGH-MARGIN.",
    metric: "24s",
    metricLabel: "quote time",
    template: "feature",
  },
  {
    filename: "quotely-vs-applied-systems",
    headline: "QUOTELY vs\nAPPLIED SYSTEMS",
    subtext: "THE HONEST COMPARISON",
    metric: "15→2",
    metricLabel: "minutes to quote",
    template: "comparison",
  },
  {
    filename: "quotely-ai-quotes-you-can-trust",
    headline: "AI QUOTES\nYOU CAN TRUST",
    subtext: "TRANSPARENT. ACCURATE. FAST.",
    template: "trust",
  },
  {
    filename: "quotely-15-carriers-30-seconds",
    headline: "15 CARRIERS\n30 SECONDS",
    subtext: "ONE CLICK. EVERY RATE.",
    metric: "15",
    metricLabel: "carriers compared",
    template: "speed",
  },
  {
    filename: "quotely-hold-times-are-over",
    headline: "90-MIN HOLD\nTIMES ARE OVER",
    subtext: "INSTANT QUOTES. ZERO WAITING.",
    metric: "0 MIN",
    metricLabel: "hold time with Quotely",
    template: "conversion",
  },
  {
    filename: "quotely-agency-demo",
    headline: "FULL DEMO",
    subtext: "WATCH QUOTELY IN ACTION",
    metric: "LIVE",
    metricLabel: "walkthrough",
    template: "feature",
  },
];

function buildSpeedSvg(cfg: ThumbnailConfig): string {
  const lines = cfg.headline.split("\n");
  const headlineY = lines.length > 1 ? 260 : 300;

  return `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${COLORS.darkBg}"/>
      <stop offset="100%" stop-color="${COLORS.primaryGreen}"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${COLORS.accentGreen}"/>
      <stop offset="100%" stop-color="${COLORS.neonGreen}"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>

  <!-- Red accent circle -->
  <circle cx="1050" cy="200" r="140" fill="${COLORS.red}" opacity="0.9" filter="url(#glow)"/>

  ${cfg.metric ? `
  <!-- Metric inside circle -->
  <text x="1050" y="195" font-family="Arial Black, sans-serif" font-size="60" font-weight="900" fill="${COLORS.white}" text-anchor="middle" dominant-baseline="middle">${cfg.metric}</text>
  <text x="1050" y="245" font-family="Arial, sans-serif" font-size="16" fill="${COLORS.lightGray}" text-anchor="middle">${cfg.metricLabel || ""}</text>
  ` : ""}

  <!-- Headline -->
  ${lines.map((line, i) => `<text x="80" y="${headlineY + i * 80}" font-family="Arial Black, sans-serif" font-size="72" font-weight="900" fill="${COLORS.white}" letter-spacing="2">${line}</text>`).join("\n  ")}

  <!-- Subtext -->
  <text x="80" y="${headlineY + lines.length * 80 + 30}" font-family="Arial, sans-serif" font-size="28" fill="${COLORS.accentGreen}" letter-spacing="4">${cfg.subtext}</text>

  <!-- Bottom bar -->
  <rect x="0" y="660" width="${WIDTH}" height="60" fill="${COLORS.primaryGreen}"/>
  <text x="80" y="698" font-family="Arial Black, sans-serif" font-size="30" font-weight="900" fill="${COLORS.accentGreen}">QUOTELY</text>
  <text x="310" y="698" font-family="Arial, sans-serif" font-size="22" fill="${COLORS.lightGray}">TryQuotely.com</text>

  <!-- Speed lines (decorative) -->
  <line x1="60" y1="160" x2="300" y2="160" stroke="${COLORS.accentGreen}" stroke-width="3" opacity="0.5"/>
  <line x1="60" y1="175" x2="220" y2="175" stroke="${COLORS.accentGreen}" stroke-width="2" opacity="0.3"/>
</svg>`;
}

function buildConversionSvg(cfg: ThumbnailConfig): string {
  const lines = cfg.headline.split("\n");
  const headlineY = lines.length > 1 ? 240 : 300;

  return `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1a1a2e"/>
      <stop offset="100%" stop-color="${COLORS.darkBg}"/>
    </linearGradient>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>

  <!-- Urgency red bar -->
  <rect x="0" y="0" width="8" height="${HEIGHT}" fill="${COLORS.red}"/>

  ${cfg.metric ? `
  <!-- Metric box -->
  <rect x="880" y="120" width="320" height="200" rx="16" fill="${COLORS.red}" opacity="0.95"/>
  <text x="1040" y="210" font-family="Arial Black, sans-serif" font-size="72" font-weight="900" fill="${COLORS.white}" text-anchor="middle">${cfg.metric}</text>
  <text x="1040" y="280" font-family="Arial, sans-serif" font-size="20" fill="${COLORS.lightGray}" text-anchor="middle">${cfg.metricLabel || ""}</text>
  ` : ""}

  <!-- Headline -->
  ${lines.map((line, i) => `<text x="80" y="${headlineY + i * 85}" font-family="Arial Black, sans-serif" font-size="76" font-weight="900" fill="${COLORS.white}" letter-spacing="2">${line}</text>`).join("\n  ")}

  <!-- Subtext -->
  <text x="80" y="${headlineY + lines.length * 85 + 35}" font-family="Arial, sans-serif" font-size="28" fill="${COLORS.accentGreen}" letter-spacing="3">${cfg.subtext}</text>

  <!-- Bottom bar -->
  <rect x="0" y="660" width="${WIDTH}" height="60" fill="${COLORS.primaryGreen}"/>
  <text x="80" y="698" font-family="Arial Black, sans-serif" font-size="30" font-weight="900" fill="${COLORS.accentGreen}">QUOTELY</text>
  <text x="310" y="698" font-family="Arial, sans-serif" font-size="22" fill="${COLORS.lightGray}">TryQuotely.com</text>
</svg>`;
}

function buildComparisonSvg(cfg: ThumbnailConfig): string {
  const lines = cfg.headline.split("\n");
  const headlineY = lines.length > 1 ? 240 : 300;

  return `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${COLORS.darkBg}"/>

  <!-- Split line -->
  <line x1="640" y1="80" x2="640" y2="580" stroke="${COLORS.red}" stroke-width="4" stroke-dasharray="12,8"/>

  <!-- Left: Quotely -->
  <rect x="60" y="100" width="520" height="440" rx="12" fill="${COLORS.primaryGreen}" opacity="0.8"/>
  <text x="320" y="180" font-family="Arial Black, sans-serif" font-size="40" font-weight="900" fill="${COLORS.accentGreen}" text-anchor="middle">QUOTELY</text>
  <text x="320" y="320" font-family="Arial Black, sans-serif" font-size="80" font-weight="900" fill="${COLORS.white}" text-anchor="middle">2 MIN</text>
  <text x="320" y="380" font-family="Arial, sans-serif" font-size="24" fill="${COLORS.neonGreen}" text-anchor="middle">15 carriers, instant</text>

  <!-- Right: Competitor -->
  <rect x="700" y="100" width="520" height="440" rx="12" fill="#1a1a1a" opacity="0.8"/>
  <text x="960" y="180" font-family="Arial Black, sans-serif" font-size="36" font-weight="900" fill="${COLORS.lightGray}" text-anchor="middle">APPLIED SYSTEMS</text>
  <text x="960" y="320" font-family="Arial Black, sans-serif" font-size="80" font-weight="900" fill="${COLORS.red}" text-anchor="middle">15 MIN</text>
  <text x="960" y="380" font-family="Arial, sans-serif" font-size="24" fill="#999" text-anchor="middle">manual, per-carrier</text>

  <!-- Bottom bar -->
  <rect x="0" y="660" width="${WIDTH}" height="60" fill="${COLORS.primaryGreen}"/>
  <text x="80" y="698" font-family="Arial Black, sans-serif" font-size="30" font-weight="900" fill="${COLORS.accentGreen}">QUOTELY</text>
  <text x="310" y="698" font-family="Arial, sans-serif" font-size="22" fill="${COLORS.lightGray}">THE HONEST COMPARISON</text>
</svg>`;
}

function buildFeatureSvg(cfg: ThumbnailConfig): string {
  const lines = cfg.headline.split("\n");
  const headlineY = lines.length > 1 ? 240 : 300;

  return `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${COLORS.primaryGreen}"/>
      <stop offset="100%" stop-color="${COLORS.darkBg}"/>
    </linearGradient>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>

  ${cfg.metric ? `
  <!-- Metric badge -->
  <rect x="900" y="140" width="300" height="160" rx="80" fill="${COLORS.accentGreen}"/>
  <text x="1050" y="215" font-family="Arial Black, sans-serif" font-size="56" font-weight="900" fill="${COLORS.primaryGreen}" text-anchor="middle">${cfg.metric}</text>
  <text x="1050" y="265" font-family="Arial, sans-serif" font-size="18" fill="${COLORS.primaryGreen}" text-anchor="middle">${cfg.metricLabel || ""}</text>
  ` : ""}

  <!-- Headline -->
  ${lines.map((line, i) => `<text x="80" y="${headlineY + i * 85}" font-family="Arial Black, sans-serif" font-size="76" font-weight="900" fill="${COLORS.white}" letter-spacing="2">${line}</text>`).join("\n  ")}

  <!-- Subtext -->
  <text x="80" y="${headlineY + lines.length * 85 + 35}" font-family="Arial, sans-serif" font-size="28" fill="${COLORS.neonGreen}" letter-spacing="3">${cfg.subtext}</text>

  <!-- Decorative dots -->
  <circle cx="80" cy="160" r="6" fill="${COLORS.accentGreen}" opacity="0.6"/>
  <circle cx="110" cy="160" r="6" fill="${COLORS.accentGreen}" opacity="0.4"/>
  <circle cx="140" cy="160" r="6" fill="${COLORS.accentGreen}" opacity="0.2"/>

  <!-- Bottom bar -->
  <rect x="0" y="660" width="${WIDTH}" height="60" fill="${COLORS.primaryGreen}"/>
  <text x="80" y="698" font-family="Arial Black, sans-serif" font-size="30" font-weight="900" fill="${COLORS.accentGreen}">QUOTELY</text>
  <text x="310" y="698" font-family="Arial, sans-serif" font-size="22" fill="${COLORS.lightGray}">TryQuotely.com</text>
</svg>`;
}

function buildTrustSvg(cfg: ThumbnailConfig): string {
  const lines = cfg.headline.split("\n");
  const headlineY = lines.length > 1 ? 260 : 300;

  return `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${COLORS.darkBg}"/>

  <!-- Trust shield -->
  <g transform="translate(960, 180)">
    <path d="M0,-100 L80,-60 L80,40 L0,100 L-80,40 L-80,-60 Z" fill="${COLORS.primaryGreen}" stroke="${COLORS.accentGreen}" stroke-width="3"/>
    <text x="0" y="10" font-family="Arial Black, sans-serif" font-size="48" fill="${COLORS.accentGreen}" text-anchor="middle">Q</text>
  </g>

  <!-- Headline -->
  ${lines.map((line, i) => `<text x="80" y="${headlineY + i * 85}" font-family="Arial Black, sans-serif" font-size="76" font-weight="900" fill="${COLORS.white}" letter-spacing="2">${line}</text>`).join("\n  ")}

  <!-- Subtext -->
  <text x="80" y="${headlineY + lines.length * 85 + 35}" font-family="Arial, sans-serif" font-size="28" fill="${COLORS.accentGreen}" letter-spacing="4">${cfg.subtext}</text>

  <!-- Bottom bar -->
  <rect x="0" y="660" width="${WIDTH}" height="60" fill="${COLORS.primaryGreen}"/>
  <text x="80" y="698" font-family="Arial Black, sans-serif" font-size="30" font-weight="900" fill="${COLORS.accentGreen}">QUOTELY</text>
  <text x="310" y="698" font-family="Arial, sans-serif" font-size="22" fill="${COLORS.lightGray}">TryQuotely.com</text>
</svg>`;
}

function getSvg(cfg: ThumbnailConfig): string {
  switch (cfg.template) {
    case "speed":
      return buildSpeedSvg(cfg);
    case "conversion":
      return buildConversionSvg(cfg);
    case "comparison":
      return buildComparisonSvg(cfg);
    case "feature":
      return buildFeatureSvg(cfg);
    case "trust":
      return buildTrustSvg(cfg);
  }
}

async function generate() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  console.log(`Generating ${THUMBNAILS.length} thumbnails → ${OUT_DIR}\n`);

  for (const cfg of THUMBNAILS) {
    const svg = getSvg(cfg);
    const outPath = path.join(OUT_DIR, `${cfg.filename}.png`);

    await sharp(Buffer.from(svg)).png({ quality: 95 }).toFile(outPath);

    console.log(`  ${cfg.filename}.png (${WIDTH}x${HEIGHT})`);
  }

  console.log(`\nDone. ${THUMBNAILS.length} thumbnails generated.`);
}

generate().catch(console.error);
