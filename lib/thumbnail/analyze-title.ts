import type { TitleAnalysis, Template } from "./types";

const SYSTEM_PROMPT = `You are a YouTube thumbnail strategist for Quotely, an AI-powered insurance quoting platform.

Given a video title, output JSON with these fields:
- template: one of "speed", "conversion", "comparison", "feature", "trust"
- headline: 2-4 words, ALL CAPS, max 2 lines (use \\n for line break). Must be punchy and readable at small size.
- subtext: short ALL CAPS tagline, 3-5 words
- metric: a key number/stat badge (e.g. "24 SEC", "3X", "15", "LIVE"). Leave empty string if not applicable.
- metricLabel: explains the metric in 2-4 words. Leave empty if no metric.
- imagePrompt: a prompt for generating a professional dark background image. Should be abstract/atmospheric (dark tech, insurance office, speed blur, etc). Never include text in the image. Always specify "dark moody lighting, cinematic, no text, no letters, no words".
- reasoning: 1 sentence explaining your template choice.

Template selection guide:
- speed: titles about quoting speed, time savings, efficiency
- conversion: titles about growth, customer retention, revenue, urgency
- comparison: titles comparing Quotely to competitors (Applied Systems, EZLynx, etc)
- feature: titles about specific features, demos, product showcases
- trust: titles about AI trust, accuracy, transparency, reliability

Respond ONLY with valid JSON, no markdown fences.`;

export async function analyzeTitle(title: string): Promise<TitleAnalysis> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return heuristicAnalysis(title);
  }

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 512,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: `Video title: "${title}"` }],
      }),
    });

    if (!res.ok) throw new Error(`Claude API ${res.status}`);

    const data = await res.json();
    const text = data.content?.[0]?.text;
    if (!text) throw new Error("Empty Claude response");

    const parsed = JSON.parse(text) as TitleAnalysis;
    // Validate template
    const valid: Template[] = ["speed", "conversion", "comparison", "feature", "trust"];
    if (!valid.includes(parsed.template)) parsed.template = "speed";
    return parsed;
  } catch (err) {
    console.error("Claude analysis failed, using heuristic:", err);
    return heuristicAnalysis(title);
  }
}

export function heuristicAnalysis(title: string): TitleAnalysis {
  const lower = title.toLowerCase();

  let template: Template = "feature";
  if (/vs\.?|versus|compared|comparison/.test(lower)) template = "comparison";
  else if (/fast|speed|second|quick|instant|time/.test(lower)) template = "speed";
  else if (/trust|accura|transparen|reliab|safe|secur/.test(lower)) template = "trust";
  else if (/convert|grow|revenue|stop losing|customer|retention|churn/.test(lower)) template = "conversion";

  // Extract meaningful words for headline
  const words = title.replace(/[^\w\s]/g, "").split(/\s+/).filter(w => w.length > 2);
  const headline = words.slice(0, 4).join(" ").toUpperCase();
  const subtext = "INSURANCE QUOTING REIMAGINED";

  // Try to find a number for metric
  const numMatch = title.match(/(\d+[\w%]*)/);
  const metric = numMatch ? numMatch[1].toUpperCase() : "";

  return {
    template,
    headline: headline.length > 20
      ? headline.split(" ").slice(0, 2).join(" ") + "\n" + headline.split(" ").slice(2, 4).join(" ")
      : headline,
    subtext,
    metric,
    metricLabel: metric ? "key metric" : "",
    imagePrompt: "dark moody tech background, abstract geometric shapes, dark green and black, cinematic lighting, no text, no letters, no words",
    reasoning: `Heuristic fallback: matched "${template}" from title keywords.`,
  };
}
