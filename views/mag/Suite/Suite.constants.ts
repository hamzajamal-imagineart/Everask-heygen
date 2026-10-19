import { MAG_MEDIA } from "../media.constants";

/* Magnific's upscalers, copy verbatim from magnific.com/ai/image-upscaler and
   /ai/video-upscaler, their own images and clip (media.magnific.com). */
/** `ratio` is the media's own width/height, so the frame never crops it. */
export type SuiteRow = { title: string; body: string; image?: string; video?: string; ratio: number };

export const SUITE_ROWS: SuiteRow[] = [
  {
    title: "Magnific AI Upscaler",
    body: "Magnific isn't just an upscaler; it's the best creative upscaler available, a game changer for creators. Upscale image quality up to 10K and fine tune every parameter you need for jaw-dropping results.",
    image: MAG_MEDIA.upMagnificModel,
    ratio: 1,
  },
  {
    title: "Creative control with AI",
    body: "The Magnific Creative model lets you add bold texture or imaginative variation to your image. Use the Creativity slider to explore different visual styles, and the Resemblance slider to control how close the result stays to your original. Perfect for stylized content, concept work, or AI-driven exploration.",
    image: MAG_MEDIA.upCreative,
    ratio: 1,
  },
  {
    title: "Fast, clean upscaling",
    body: "Use the Classic model to quickly improve image resolution and quality. It's the easiest way to sharpen compressed, low-res images. Great for everyday use and general fixes.",
    image: MAG_MEDIA.upClassic,
    ratio: 1,
  },
  {
    title: "Increase video resolution",
    body: "Restore lost details in low-quality videos and refine every frame with AI-powered upscaling. Reduce noise and motion artifacts while preserving textures and adding real details, delivering unmatched clarity and sharpness.",
    video: MAG_MEDIA.upVideoResolution,
    ratio: 4 / 3,
  },
  {
    title: "Instantly upscale videos to Ultra HD 4K",
    body: "Make every detail crisp, clear, and steady with ultra-HD upscaling. Choose resolutions up to 4K (2160p) and adjust frame rates up to 60 fps for smoother motion. Improve textures, colors, and depth like a pro.",
    image: MAG_MEDIA.upVideoUhd,
    ratio: 1,
  },
];
