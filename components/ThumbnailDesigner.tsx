"use client";

import React, { useState, useRef } from "react";

const COLORS = {
  primaryGreen: "#1a472a",
  accentGreen: "#22c55e",
  darkBg: "#0a0a0a",
  red: "#ef4444",
  white: "#ffffff",
  lightGray: "#e5e7eb",
  neonGreen: "#4ade80",
};

type Template = "speed" | "conversion" | "comparison" | "feature" | "trust";

const TEMPLATES: { value: Template; label: string }[] = [
  { value: "speed", label: "Speed / Efficiency" },
  { value: "conversion", label: "Conversion / Urgency" },
  { value: "comparison", label: "Competitor Comparison" },
  { value: "feature", label: "Feature Spotlight" },
  { value: "trust", label: "Trust / Transparency" },
];

const PRESETS = [
  { headline: "60% FASTER", subtext: "QUOTING THAT ACTUALLY WORKS", metric: "24 SEC", metricLabel: "vs 15 min industry avg", template: "speed" as Template },
  { headline: "STOP LOSING\nCUSTOMERS", subtext: "QUOTE-TO-POLICY IN SECONDS", metric: "3X", metricLabel: "conversion rate", template: "conversion" as Template },
  { headline: "SR-22 QUOTES\nIN 24 SEC", subtext: "HIGH-INTENT. HIGH-MARGIN.", metric: "24s", metricLabel: "quote time", template: "feature" as Template },
  { headline: "QUOTELY vs\nAPPLIED SYSTEMS", subtext: "THE HONEST COMPARISON", metric: "15→2", metricLabel: "minutes to quote", template: "comparison" as Template },
  { headline: "AI QUOTES\nYOU CAN TRUST", subtext: "TRANSPARENT. ACCURATE. FAST.", metric: "", metricLabel: "", template: "trust" as Template },
  { headline: "15 CARRIERS\n30 SECONDS", subtext: "ONE CLICK. EVERY RATE.", metric: "15", metricLabel: "carriers compared", template: "speed" as Template },
  { headline: "90-MIN HOLD\nTIMES ARE OVER", subtext: "INSTANT QUOTES. ZERO WAITING.", metric: "0 MIN", metricLabel: "hold time with Quotely", template: "conversion" as Template },
  { headline: "FULL DEMO", subtext: "WATCH QUOTELY IN ACTION", metric: "LIVE", metricLabel: "walkthrough", template: "feature" as Template },
];

function ThumbnailPreview({ headline, subtext, metric, metricLabel, template }: {
  headline: string; subtext: string; metric: string; metricLabel: string; template: Template;
}) {
  const lines = headline.split("\n");

  if (template === "comparison") {
    return (
      <svg viewBox="0 0 1280 720" className="w-full rounded-lg shadow-lg">
        <rect width="1280" height="720" fill={COLORS.darkBg} />
        <line x1="640" y1="80" x2="640" y2="580" stroke={COLORS.red} strokeWidth="4" strokeDasharray="12,8" />
        <rect x="60" y="100" width="520" height="440" rx="12" fill={COLORS.primaryGreen} opacity={0.8} />
        <text x="320" y="180" fontFamily="Arial Black, sans-serif" fontSize="40" fontWeight="900" fill={COLORS.accentGreen} textAnchor="middle">QUOTELY</text>
        <text x="320" y="320" fontFamily="Arial Black, sans-serif" fontSize="80" fontWeight="900" fill={COLORS.white} textAnchor="middle">2 MIN</text>
        <text x="320" y="380" fontFamily="Arial, sans-serif" fontSize="24" fill={COLORS.neonGreen} textAnchor="middle">15 carriers, instant</text>
        <rect x="700" y="100" width="520" height="440" rx="12" fill="#1a1a1a" opacity={0.8} />
        <text x="960" y="180" fontFamily="Arial Black, sans-serif" fontSize="36" fontWeight="900" fill={COLORS.lightGray} textAnchor="middle">APPLIED SYSTEMS</text>
        <text x="960" y="320" fontFamily="Arial Black, sans-serif" fontSize="80" fontWeight="900" fill={COLORS.red} textAnchor="middle">15 MIN</text>
        <text x="960" y="380" fontFamily="Arial, sans-serif" fontSize="24" fill="#999" textAnchor="middle">manual, per-carrier</text>
        <rect x="0" y="660" width="1280" height="60" fill={COLORS.primaryGreen} />
        <text x="80" y="698" fontFamily="Arial Black, sans-serif" fontSize="30" fontWeight="900" fill={COLORS.accentGreen}>QUOTELY</text>
        <text x="310" y="698" fontFamily="Arial, sans-serif" fontSize="22" fill={COLORS.lightGray}>THE HONEST COMPARISON</text>
      </svg>
    );
  }

  const headlineY = lines.length > 1 ? 240 : 300;
  const isSpeed = template === "speed";
  const isConversion = template === "conversion";
  const isTrust = template === "trust";

  const bgGradient = isSpeed
    ? { from: COLORS.darkBg, to: COLORS.primaryGreen }
    : isConversion
    ? { from: "#1a1a2e", to: COLORS.darkBg }
    : isTrust
    ? { from: COLORS.darkBg, to: COLORS.darkBg }
    : { from: COLORS.primaryGreen, to: COLORS.darkBg };

  return (
    <svg viewBox="0 0 1280 720" className="w-full rounded-lg shadow-lg">
      <defs>
        <linearGradient id={`bg-${template}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={bgGradient.from} />
          <stop offset="100%" stopColor={bgGradient.to} />
        </linearGradient>
      </defs>

      <rect width="1280" height="720" fill={`url(#bg-${template})`} />

      {isConversion && <rect x="0" y="0" width="8" height="720" fill={COLORS.red} />}

      {isTrust && (
        <g transform="translate(960, 180)">
          <path d="M0,-100 L80,-60 L80,40 L0,100 L-80,40 L-80,-60 Z" fill={COLORS.primaryGreen} stroke={COLORS.accentGreen} strokeWidth="3" />
          <text x="0" y="10" fontFamily="Arial Black, sans-serif" fontSize="48" fill={COLORS.accentGreen} textAnchor="middle">Q</text>
        </g>
      )}

      {metric && isSpeed && (
        <>
          <circle cx="1050" cy="200" r="140" fill={COLORS.red} opacity={0.9} />
          <text x="1050" y="195" fontFamily="Arial Black, sans-serif" fontSize="60" fontWeight="900" fill={COLORS.white} textAnchor="middle" dominantBaseline="middle">{metric}</text>
          <text x="1050" y="245" fontFamily="Arial, sans-serif" fontSize="16" fill={COLORS.lightGray} textAnchor="middle">{metricLabel}</text>
        </>
      )}

      {metric && isConversion && (
        <>
          <rect x="880" y="120" width="320" height="200" rx="16" fill={COLORS.red} opacity={0.95} />
          <text x="1040" y="210" fontFamily="Arial Black, sans-serif" fontSize="72" fontWeight="900" fill={COLORS.white} textAnchor="middle">{metric}</text>
          <text x="1040" y="280" fontFamily="Arial, sans-serif" fontSize="20" fill={COLORS.lightGray} textAnchor="middle">{metricLabel}</text>
        </>
      )}

      {metric && template === "feature" && (
        <>
          <rect x="900" y="140" width="300" height="160" rx="80" fill={COLORS.accentGreen} />
          <text x="1050" y="215" fontFamily="Arial Black, sans-serif" fontSize="56" fontWeight="900" fill={COLORS.primaryGreen} textAnchor="middle">{metric}</text>
          <text x="1050" y="265" fontFamily="Arial, sans-serif" fontSize="18" fill={COLORS.primaryGreen} textAnchor="middle">{metricLabel}</text>
        </>
      )}

      {lines.map((line, i) => (
        <text key={i} x="80" y={headlineY + i * 85} fontFamily="Arial Black, sans-serif" fontSize="76" fontWeight="900" fill={COLORS.white} letterSpacing="2">{line}</text>
      ))}

      <text x="80" y={headlineY + lines.length * 85 + 35} fontFamily="Arial, sans-serif" fontSize="28" fill={COLORS.accentGreen} letterSpacing="3">{subtext}</text>

      <rect x="0" y="660" width="1280" height="60" fill={COLORS.primaryGreen} />
      <text x="80" y="698" fontFamily="Arial Black, sans-serif" fontSize="30" fontWeight="900" fill={COLORS.accentGreen}>QUOTELY</text>
      <text x="310" y="698" fontFamily="Arial, sans-serif" fontSize="22" fill={COLORS.lightGray}>TryQuotely.com</text>
    </svg>
  );
}

export default function YouTubeThumbnailDesigner() {
  const [headline, setHeadline] = useState("60% FASTER");
  const [subtext, setSubtext] = useState("QUOTING THAT ACTUALLY WORKS");
  const [metric, setMetric] = useState("24 SEC");
  const [metricLabel, setMetricLabel] = useState("vs 15 min industry avg");
  const [template, setTemplate] = useState<Template>("speed");
  const svgRef = useRef<HTMLDivElement>(null);

  function loadPreset(idx: number) {
    const p = PRESETS[idx];
    setHeadline(p.headline);
    setSubtext(p.subtext);
    setMetric(p.metric);
    setMetricLabel(p.metricLabel);
    setTemplate(p.template);
  }

  async function downloadPng() {
    const svgEl = svgRef.current?.querySelector("svg");
    if (!svgEl) return;

    const svgData = new XMLSerializer().serializeToString(svgEl);
    const canvas = document.createElement("canvas");
    canvas.width = 1280;
    canvas.height = 720;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, 1280, 720);
      const link = document.createElement("a");
      link.download = `quotely-thumbnail-${Date.now()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
    img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Quotely YouTube Thumbnail Designer</h1>
      <p className="text-gray-400 mb-8">1280x720 — YouTube spec compliant</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Preview */}
        <div>
          <div ref={svgRef}>
            <ThumbnailPreview headline={headline} subtext={subtext} metric={metric} metricLabel={metricLabel} template={template} />
          </div>
          <button onClick={downloadPng} className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-500 rounded-lg font-bold text-lg w-full transition-colors">
            Download PNG (1280x720)
          </button>
        </div>

        {/* Controls */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Template</label>
            <div className="grid grid-cols-2 gap-2">
              {TEMPLATES.map((t) => (
                <button key={t.value} onClick={() => setTemplate(t.value)}
                  className={`px-3 py-2 rounded text-sm font-medium transition-colors ${template === t.value ? "bg-green-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Headline (use Enter for line break)</label>
            <textarea value={headline} onChange={(e) => setHeadline(e.target.value)} rows={2}
              className="w-full bg-gray-800 rounded px-3 py-2 text-white font-bold text-lg" />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Subtext</label>
            <input value={subtext} onChange={(e) => setSubtext(e.target.value)}
              className="w-full bg-gray-800 rounded px-3 py-2 text-white" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Metric</label>
              <input value={metric} onChange={(e) => setMetric(e.target.value)}
                className="w-full bg-gray-800 rounded px-3 py-2 text-white font-bold" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Metric Label</label>
              <input value={metricLabel} onChange={(e) => setMetricLabel(e.target.value)}
                className="w-full bg-gray-800 rounded px-3 py-2 text-white" />
            </div>
          </div>

          {/* Presets */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">Quick Presets</label>
            <div className="grid grid-cols-2 gap-2">
              {PRESETS.map((p, i) => (
                <button key={i} onClick={() => loadPreset(i)}
                  className="px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded text-xs text-left transition-colors">
                  <span className="font-bold text-green-400">{p.headline.split("\n")[0]}</span>
                  <br />
                  <span className="text-gray-500">{p.template}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
