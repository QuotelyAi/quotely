import { NextResponse } from "next/server";
import { heuristicAnalysis } from "@/lib/thumbnail/analyze-title";
import { renderOverlay } from "@/lib/thumbnail/render-overlay";
import { compositeThumbnail } from "@/lib/thumbnail/composite";
import sharp from "sharp";
import { BRAND } from "@/lib/thumbnail/brand";

const { width: W, height: H } = BRAND.dimensions;

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const title = url.searchParams.get("title");

    if (!title) {
      return NextResponse.json({ error: "title query param required" }, { status: 400 });
    }

    // Use heuristic only (no Claude call) for instant preview
    const analysis = heuristicAnalysis(title);

    const config = {
      template: analysis.template,
      headline: analysis.headline,
      subtext: analysis.subtext,
      metric: analysis.metric,
      metricLabel: analysis.metricLabel,
    };

    // Generate a dark gradient background
    const bgSvg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0a0a0a"/>
          <stop offset="50%" stop-color="#1a472a"/>
          <stop offset="100%" stop-color="#0a0a0a"/>
        </linearGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#bg)"/>
    </svg>`;

    const bgPng = await sharp(Buffer.from(bgSvg)).resize(W, H).png().toBuffer();
    const overlay = await renderOverlay(config);
    const final = await compositeThumbnail(bgPng, overlay);

    return new NextResponse(new Uint8Array(final), {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (err) {
    console.error("Preview generation failed:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Preview failed" },
      { status: 500 },
    );
  }
}
