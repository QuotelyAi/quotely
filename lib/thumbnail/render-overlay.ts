import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { readFileSync } from "fs";
import { join } from "path";
import type { ThumbnailConfig } from "./types";
import { BRAND } from "./brand";
import { getTemplateElement } from "./templates";

const { width: W, height: H } = BRAND.dimensions;

// Cache font data in module scope (loaded once per cold start)
let interBold: ArrayBuffer | null = null;
let interBlack: ArrayBuffer | null = null;

function loadFonts() {
  if (interBold && interBlack) return;

  const fontsDir = join(process.cwd(), "public", "fonts");
  const boldBuf = readFileSync(join(fontsDir, "Inter-Bold.ttf"));
  const blackBuf = readFileSync(join(fontsDir, "Inter-Black.ttf"));

  interBold = boldBuf.buffer.slice(boldBuf.byteOffset, boldBuf.byteOffset + boldBuf.byteLength);
  interBlack = blackBuf.buffer.slice(blackBuf.byteOffset, blackBuf.byteOffset + blackBuf.byteLength);
}

export async function renderOverlay(config: ThumbnailConfig): Promise<Buffer> {
  loadFonts();

  const element = getTemplateElement(config);

  const svg = await satori(element as React.ReactElement, {
    width: W,
    height: H,
    fonts: [
      { name: "Inter Bold", data: interBold!, weight: 700, style: "normal" },
      { name: "Inter Black", data: interBlack!, weight: 900, style: "normal" },
    ],
  });

  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: W },
  });

  return Buffer.from(resvg.render().asPng());
}
