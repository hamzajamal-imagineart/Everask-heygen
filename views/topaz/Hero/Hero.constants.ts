import { TOPAZ_MEDIA } from "../media.constants";

/* Topaz's own hero line; the eyebrow labels are facts from the page and ours about EverAsk. */
/** The word between the Topaz wordmark and "EverAsk" in the headline. */
export const HERO_HEADLINE = "inside";
/* Topaz's own hero line first, then ours. */
export const HERO_SUBHEAD = "Fix blur, noise and low resolution in one click. Topaz Photo's enhancement tools, from denoise to upscale, through the Topaz API in your EverAsk workspace.";

/* The six tools Topaz's own page tabs through, each with its one-line description from the
   feature list (verbatim, trimmed to one sentence) and its own before/after pair. */
export const HERO_TOOLS = [
  { id: "denoise", label: "Denoise", line: "Shoot confidently in low light, or save what you've already shot. Remove graininess. Preserve detail.", pair: TOPAZ_MEDIA.hero.denoise },
  { id: "sharpen", label: "Sharpen", line: "Feathers. Fur. Blades of grass. Zoom, upscale, and sharpen at any distance, without a loss of detail.", pair: TOPAZ_MEDIA.hero.sharpen },
  { id: "faces", label: "Recover Faces", line: "Wisps of hair. Pores of skin. Wrinkles and eye reflections, all recovered instantly.", pair: TOPAZ_MEDIA.hero.faces },
  { id: "lighting", label: "Adjust Lighting", line: "Correct the exposure, highlights, and shadows in each image.", pair: TOPAZ_MEDIA.hero.lighting },
  { id: "color", label: "Balance Color", line: "Topaz Photo analyzes the image, then corrects the brightness and contrast to create a more vivid image, instantly.", pair: TOPAZ_MEDIA.hero.color },
  { id: "upscale", label: "Upscale", line: "Once you've perfected every pixel, upscale for printing to almost any size.", pair: TOPAZ_MEDIA.hero.upscale },
] as const;
