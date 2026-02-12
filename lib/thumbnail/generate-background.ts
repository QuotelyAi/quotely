import sharp from "sharp";
import { BRAND } from "./brand";

const { width: W, height: H } = BRAND.dimensions;

interface BgResult {
  buffer: Buffer;
  provider: string;
}

async function tryGrok(prompt: string): Promise<BgResult | null> {
  const key = process.env.XAI_API_KEY;
  if (!key) return null;

  try {
    const res = await fetch("https://api.x.ai/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: "grok-2-image",
        prompt,
        n: 1,
        size: "1280x720",
        response_format: "b64_json",
      }),
    });
    if (!res.ok) throw new Error(`Grok ${res.status}`);

    const data = await res.json();
    const b64 = data.data?.[0]?.b64_json;
    if (!b64) throw new Error("No image in Grok response");

    const raw = Buffer.from(b64, "base64");
    const buffer = await sharp(raw).resize(W, H).png().toBuffer();
    return { buffer, provider: "grok" };
  } catch (err) {
    console.error("Grok image gen failed:", err);
    return null;
  }
}

async function tryOpenAI(prompt: string): Promise<BgResult | null> {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return null;

  try {
    const res = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: "gpt-image-1",
        prompt,
        n: 1,
        size: "1536x1024",
        quality: "low",
        response_format: "b64_json",
      }),
    });
    if (!res.ok) throw new Error(`OpenAI ${res.status}`);

    const data = await res.json();
    const b64 = data.data?.[0]?.b64_json;
    if (!b64) throw new Error("No image in OpenAI response");

    const raw = Buffer.from(b64, "base64");
    const buffer = await sharp(raw).resize(W, H).png().toBuffer();
    return { buffer, provider: "openai" };
  } catch (err) {
    console.error("OpenAI image gen failed:", err);
    return null;
  }
}

async function tryGemini(prompt: string): Promise<BgResult | null> {
  const key = process.env.GOOGLE_AI_API_KEY;
  if (!key) return null;

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${key}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: `Generate an image: ${prompt}` }],
          }],
          generationConfig: {
            responseModalities: ["IMAGE", "TEXT"],
          },
        }),
      },
    );
    if (!res.ok) throw new Error(`Gemini ${res.status}`);

    const data = await res.json();
    const parts = data.candidates?.[0]?.content?.parts;
    const imagePart = parts?.find((p: { inlineData?: { mimeType: string } }) =>
      p.inlineData?.mimeType?.startsWith("image/"),
    );
    if (!imagePart?.inlineData?.data) throw new Error("No image in Gemini response");

    const raw = Buffer.from(imagePart.inlineData.data, "base64");
    const buffer = await sharp(raw).resize(W, H).png().toBuffer();
    return { buffer, provider: "gemini" };
  } catch (err) {
    console.error("Gemini image gen failed:", err);
    return null;
  }
}

function staticFallback(): BgResult {
  // Dark gradient SVG as fallback
  const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0a0a0a"/>
        <stop offset="50%" stop-color="#1a472a"/>
        <stop offset="100%" stop-color="#0a0a0a"/>
      </linearGradient>
      <radialGradient id="glow" cx="0.7" cy="0.3" r="0.5">
        <stop offset="0%" stop-color="#22c55e" stop-opacity="0.15"/>
        <stop offset="100%" stop-color="#0a0a0a" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#bg)"/>
    <rect width="${W}" height="${H}" fill="url(#glow)"/>
  </svg>`;

  return {
    buffer: Buffer.from(svg),
    provider: "static",
  };
}

export async function generateBackground(prompt: string): Promise<BgResult> {
  // Try providers in order with fallback chain
  const grok = await tryGrok(prompt);
  if (grok) return grok;

  const openai = await tryOpenAI(prompt);
  if (openai) return openai;

  const gemini = await tryGemini(prompt);
  if (gemini) return gemini;

  // Convert static SVG fallback to PNG
  const fallback = staticFallback();
  const buffer = await sharp(fallback.buffer).resize(W, H).png().toBuffer();
  return { buffer, provider: "static" };
}
