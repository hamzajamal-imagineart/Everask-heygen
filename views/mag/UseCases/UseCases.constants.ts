import { MAG_MEDIA } from "../media.constants";

/* "Enhance detail, preserve intent" from magnific.com/ai/image-upscaler, plus
   the video upscaler's 4K line, copy verbatim. */
export const USE_CASES = [
  {
    title: "Sharper results, same image",
    description: "Upscale images up to 16× clarity while keeping your original structure, composition, and lighting intact.",
    image: MAG_MEDIA.upSharper,
  },
  {
    title: "Contextual textures and details",
    description: "AI-enhanced sharpness, grain, and detail bring out the best in your image.",
    image: MAG_MEDIA.upTextures,
  },
  {
    title: "Bulk upscaling",
    description: "Upscale one or many images in just a few clicks. Save time with batch processing and intuitive controls.",
    image: MAG_MEDIA.upBulk,
  },
];

export const USE_CASE_WIDE = {
  title: "Upscale videos up to 4K",
  description: "Perfect video resolution while preserving textures, colors, and clarity. Boost frame rates up to 60 fps for smoother motion.",
  image: MAG_MEDIA.upVideo4k,
};
