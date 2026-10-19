import { TOPAZ_MEDIA } from "../media.constants";

/* Topaz's "Latest features" (three cards) and "All features" (the list), copy verbatim. */
export const LATEST = [
  { name: "Wonder Model", tag: "Upscale", body: "Upscale, sharpen, and denoise all in just one click. The new Wonder model recovers previously unrecoverable images without settings to tune or decisions to make. Perfect for photos with extremely low resolution.", image: TOPAZ_MEDIA.tz.wonder, ratio: 1600 / 1039 },
  { name: "Healing Brush", tag: "Retouch", body: "Fix small blemishes and artifacts.", image: TOPAZ_MEDIA.tz.healing, ratio: 1600 / 1039 },
  { name: "Standard MAX Model", tag: "Upscale", body: "An entirely new series of model for precise, true-to-input image restoration. The new standard for upscaling. Get higher quality, more natural, and more detailed restoration results. 100x faster than first-generation diffusion models.", image: TOPAZ_MEDIA.tz.precision, ratio: 1278 / 1200 },
];

export const ALL_FEATURES = [
  { name: "Dust and Scratch", body: "Automatically identifies and removes blemishes from your entire photo. One click." },
  { name: "Denoise", body: "Shoot confidently in low light, or save what you've already shot. Remove graininess. Preserve detail. Use Denoise on processed image formats, and Denoise (RAW) on RAW images." },
  { name: "Super Focus", body: "Realistically restores lost detail and sharpness due to missed focus, blur, distance, or motion." },
  { name: "Sharpen", body: "Feathers. Fur. Blades of grass. Zoom, upscale, and sharpen at any distance, without a loss of detail." },
  { name: "Remove", body: "Remove everything from scratches to camera obstructions with the context-aware algorithm to seamlessly blend the patch into the rest of the image." },
  { name: "Recover Faces", body: "Wisps of hair. Pores of skin. Wrinkles and eye reflections, all recovered instantly. Get double the resolution as previous versions, plus the ability to choose from Realistic or Creative options." },
  { name: "Adjust Lighting", body: "Use sliders to correct the exposure, highlights, and shadows in each image." },
  { name: "Preserve Text", body: "Recover letters and numbers, and other small details to get your result just right." },
  { name: "Balance Color", body: "Topaz Photo analyzes the image, then corrects the brightness and contrast to create a more vivid image, instantly." },
  { name: "Upscale", body: "Once you've perfected every pixel, upscale for printing to almost any size." },
];
