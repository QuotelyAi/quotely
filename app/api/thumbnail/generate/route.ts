import { NextResponse } from "next/server";
import { analyzeTitle } from "@/lib/thumbnail/analyze-title";
import { generateBackground } from "@/lib/thumbnail/generate-background";
import { renderOverlay } from "@/lib/thumbnail/render-overlay";
import { compositeThumbnail } from "@/lib/thumbnail/composite";
import type { GenerateRequest, ThumbnailConfig } from "@/lib/thumbnail/types";

export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as GenerateRequest;
    const { title, overrides } = body;

    if (!title || typeof title !== "string") {
      return NextResponse.json({ error: "title is required" }, { status: 400 });
    }

    // Step 1: Analyze the title with Claude
    const analysis = await analyzeTitle(title);

    // Step 2: Build config with optional overrides
    const config: ThumbnailConfig = {
      template: overrides?.template ?? analysis.template,
      headline: overrides?.headline ?? analysis.headline,
      subtext: overrides?.subtext ?? analysis.subtext,
      metric: overrides?.metric ?? analysis.metric,
      metricLabel: overrides?.metricLabel ?? analysis.metricLabel,
    };

    // Step 3: Generate background + render overlay in parallel
    const [bgResult, overlay] = await Promise.all([
      generateBackground(analysis.imagePrompt),
      renderOverlay(config),
    ]);

    // Step 4: Composite final image
    const final = await compositeThumbnail(bgResult.buffer, overlay);

    return NextResponse.json({
      image: final.toString("base64"),
      config,
      reasoning: analysis.reasoning,
      bgProvider: bgResult.provider,
    });
  } catch (err) {
    console.error("Thumbnail generation failed:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Generation failed" },
      { status: 500 },
    );
  }
}
