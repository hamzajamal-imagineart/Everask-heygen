import { MAG_MEDIA } from "../media.constants";

/** Top colour of the hero clip's first frame (sampled with sharp); fills the frame before the video loads and on phones. */
export const HERO_TONE = "#61727a";


/** The word between the Magnific wordmark and the EverAsk lockup in the headline. */
export const HERO_HEADLINE = "inside";

export const HERO_SUBHEAD =
  "Bring out crisp detail and rich texture with Magnific's upscalers: images up to 16× clarity, 10K with the Magnific model, and video up to Ultra HD 4K at 60 fps. Right inside EverAsk.";

export const HERO_RISE_DELAYS = { badge: 0, headline: 80, subhead: 160, actions: 240 };

export const HERO_LOGOS = [
  { src: MAG_MEDIA.logoCocaCola, alt: "Coca-Cola", width: 100, height: 28 },
  { src: MAG_MEDIA.logoOgilvy, alt: "Ogilvy", width: 80, height: 28 },
  { src: MAG_MEDIA.logoRga, alt: "R/GA", width: 60, height: 20 },
  { src: MAG_MEDIA.logoWonder, alt: "Wonder", width: 108, height: 20, muted: true },
  { src: MAG_MEDIA.logoGuess, alt: "Guess", width: 100, height: 18, muted: true },
  { src: MAG_MEDIA.logoDeliveryhero, alt: "Delivery Hero", width: 110, height: 24 },
];
