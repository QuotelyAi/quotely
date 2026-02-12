import sharp from "sharp";
import { BRAND } from "./brand";

const { width: W, height: H } = BRAND.dimensions;

export async function compositeThumbnail(
  backgroundPng: Buffer,
  overlayPng: Buffer,
): Promise<Buffer> {
  // Darken the background to ~60% brightness so text overlay pops
  const darkened = await sharp(backgroundPng)
    .resize(W, H, { fit: "cover" })
    .modulate({ brightness: 0.6 })
    .png()
    .toBuffer();

  // Composite overlay on top of darkened background
  return sharp(darkened)
    .composite([{ input: overlayPng, top: 0, left: 0 }])
    .png({ quality: 95 })
    .toBuffer();
}
