"use client";

import React, { useState } from "react";
import type { GenerateResponse, ThumbnailConfig, Template } from "@/lib/thumbnail/types";

const TEMPLATES: { value: Template; label: string }[] = [
  { value: "speed", label: "Speed / Efficiency" },
  { value: "conversion", label: "Conversion / Urgency" },
  { value: "comparison", label: "Competitor Comparison" },
  { value: "feature", label: "Feature Spotlight" },
  { value: "trust", label: "Trust / Transparency" },
];

const EXAMPLE_TITLES = [
  "How Quotely Quotes 15 Carriers in 30 Seconds",
  "Quotely vs Applied Systems: The Honest Comparison",
  "Can You Trust AI Insurance Quotes?",
  "Stop Losing Customers to Slow Quoting",
  "SR-22 Quotes in 24 Seconds with Quotely",
  "Full Quotely Agency Demo: Watch It In Action",
  "90-Minute Carrier Hold Times Are Over",
  "60% Faster Insurance Quoting with AI",
];

type Step = "idle" | "analyzing" | "generating-bg" | "rendering" | "compositing" | "done" | "error";

const STEP_LABELS: Record<Step, string> = {
  idle: "",
  analyzing: "Analyzing title with AI...",
  "generating-bg": "Generating background image...",
  rendering: "Rendering text overlay...",
  compositing: "Compositing final thumbnail...",
  done: "Complete!",
  error: "Something went wrong",
};

export default function YouTubeThumbnailDesigner() {
  const [title, setTitle] = useState("");
  const [step, setStep] = useState<Step>("idle");
  const [result, setResult] = useState<GenerateResponse | null>(null);
  const [error, setError] = useState("");
  const [showOverrides, setShowOverrides] = useState(false);
  const [overrides, setOverrides] = useState<Partial<ThumbnailConfig>>({});

  async function generate() {
    if (!title.trim()) return;

    setStep("analyzing");
    setResult(null);
    setError("");

    try {
      // Simulate step progression (actual steps happen server-side)
      const stepTimer = setTimeout(() => setStep("generating-bg"), 2000);
      const stepTimer2 = setTimeout(() => setStep("rendering"), 5000);
      const stepTimer3 = setTimeout(() => setStep("compositing"), 8000);

      const res = await fetch("/api/thumbnail/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          overrides: Object.keys(overrides).length > 0 ? overrides : undefined,
        }),
      });

      clearTimeout(stepTimer);
      clearTimeout(stepTimer2);
      clearTimeout(stepTimer3);

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || `HTTP ${res.status}`);
      }

      const data: GenerateResponse = await res.json();
      setResult(data);
      setStep("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Generation failed");
      setStep("error");
    }
  }

  function downloadPng() {
    if (!result?.image) return;
    const link = document.createElement("a");
    link.download = `quotely-thumbnail-${Date.now()}.png`;
    link.href = `data:image/png;base64,${result.image}`;
    link.click();
  }

  function loadExample(t: string) {
    setTitle(t);
    setResult(null);
    setStep("idle");
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Quotely Thumbnail Generator</h1>
      <p className="text-gray-400 mb-8">
        Enter a video title. AI picks the template, generates a background, and composites a 1280x720 thumbnail.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Controls */}
        <div className="space-y-6">
          {/* Title input */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">Video Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && generate()}
              placeholder="How Quotely Quotes 15 Carriers in 30 Seconds"
              className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white text-lg placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Generate button */}
          <button
            onClick={generate}
            disabled={!title.trim() || (step !== "idle" && step !== "done" && step !== "error")}
            className="w-full px-6 py-4 bg-green-600 hover:bg-green-500 disabled:bg-gray-700 disabled:text-gray-500 rounded-lg font-bold text-lg transition-colors"
          >
            {step === "idle" || step === "done" || step === "error" ? "Generate Thumbnail" : "Generating..."}
          </button>

          {/* Step indicator */}
          {step !== "idle" && (
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-900 rounded-lg">
              {step !== "done" && step !== "error" && (
                <div className="w-5 h-5 border-2 border-green-400 border-t-transparent rounded-full animate-spin" />
              )}
              {step === "done" && <span className="text-green-400 text-xl">&#10003;</span>}
              {step === "error" && <span className="text-red-400 text-xl">&#10007;</span>}
              <span className={step === "error" ? "text-red-400" : "text-gray-300"}>
                {STEP_LABELS[step]}
              </span>
            </div>
          )}

          {error && (
            <div className="px-4 py-3 bg-red-900/30 border border-red-700 rounded-lg text-red-300 text-sm">
              {error}
            </div>
          )}

          {/* Example titles */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">Example Titles</label>
            <div className="grid grid-cols-1 gap-2">
              {EXAMPLE_TITLES.map((t) => (
                <button
                  key={t}
                  onClick={() => loadExample(t)}
                  className="px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded text-sm text-left transition-colors text-gray-300"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Advanced Overrides */}
          <div>
            <button
              onClick={() => setShowOverrides(!showOverrides)}
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              {showOverrides ? "Hide" : "Show"} Advanced Overrides
            </button>

            {showOverrides && (
              <div className="mt-3 space-y-3 p-4 bg-gray-900 rounded-lg">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Template Override</label>
                  <select
                    value={overrides.template ?? ""}
                    onChange={(e) =>
                      setOverrides((o) => ({
                        ...o,
                        template: (e.target.value || undefined) as Template | undefined,
                      }))
                    }
                    className="w-full bg-gray-800 rounded px-3 py-2 text-white text-sm"
                  >
                    <option value="">Auto (AI picks)</option>
                    {TEMPLATES.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">Headline Override</label>
                  <textarea
                    value={overrides.headline ?? ""}
                    onChange={(e) => setOverrides((o) => ({ ...o, headline: e.target.value || undefined }))}
                    placeholder="Leave empty for AI"
                    rows={2}
                    className="w-full bg-gray-800 rounded px-3 py-2 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">Subtext Override</label>
                  <input
                    value={overrides.subtext ?? ""}
                    onChange={(e) => setOverrides((o) => ({ ...o, subtext: e.target.value || undefined }))}
                    placeholder="Leave empty for AI"
                    className="w-full bg-gray-800 rounded px-3 py-2 text-white text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Metric</label>
                    <input
                      value={overrides.metric ?? ""}
                      onChange={(e) => setOverrides((o) => ({ ...o, metric: e.target.value || undefined }))}
                      placeholder="e.g. 24 SEC"
                      className="w-full bg-gray-800 rounded px-3 py-2 text-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Metric Label</label>
                    <input
                      value={overrides.metricLabel ?? ""}
                      onChange={(e) => setOverrides((o) => ({ ...o, metricLabel: e.target.value || undefined }))}
                      placeholder="e.g. quote time"
                      className="w-full bg-gray-800 rounded px-3 py-2 text-white text-sm"
                    />
                  </div>
                </div>

                <button
                  onClick={() => setOverrides({})}
                  className="text-xs text-red-400 hover:text-red-300"
                >
                  Clear All Overrides
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right: Preview */}
        <div>
          {result?.image ? (
            <div>
              <img
                src={`data:image/png;base64,${result.image}`}
                alt="Generated thumbnail"
                className="w-full rounded-lg shadow-lg"
                style={{ aspectRatio: "1280/720" }}
              />
              <button
                onClick={downloadPng}
                className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-500 rounded-lg font-bold text-lg w-full transition-colors"
              >
                Download PNG (1280x720)
              </button>

              {/* Config details */}
              <div className="mt-4 p-4 bg-gray-900 rounded-lg space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Template:</span>
                  <span className="text-green-400 font-medium">{result.config.template}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Headline:</span>
                  <span className="text-white">{result.config.headline.replace(/\n/g, " / ")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Background:</span>
                  <span className="text-gray-300">{result.bgProvider}</span>
                </div>
                <div className="pt-2 border-t border-gray-800">
                  <span className="text-gray-500">AI Reasoning:</span>
                  <p className="text-gray-400 mt-1">{result.reasoning}</p>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="w-full rounded-lg bg-gray-900 flex items-center justify-center"
              style={{ aspectRatio: "1280/720" }}
            >
              <p className="text-gray-600 text-lg">
                {step === "idle" ? "Enter a title and click Generate" : "Generating..."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
