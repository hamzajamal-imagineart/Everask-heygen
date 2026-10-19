import { MAG_MEDIA } from "../media.constants";

/** Top-of-sky colour of the hero clip (sampled from its first frame); fills the frame before the video loads and on phones. */
export const HERO_TONE = "#559cd0";


/** The words after the Magnific wordmark in the headline; the last one is set in the serif italic. */
export const HERO_HEADLINE = "inside EverAsk";

export const HERO_SUBHEAD =
  "The creative platform to direct your best work. Every Magnific model for video, image and audio, with intelligent workflows for professional control, right inside EverAsk.";

export const HERO_RISE_DELAYS = { badge: 0, headline: 80, subhead: 160, actions: 240 };

export const HERO_LOGOS = [
  { src: MAG_MEDIA.logoCocaCola, alt: "Coca-Cola", width: 100, height: 28 },
  { src: MAG_MEDIA.logoOgilvy, alt: "Ogilvy", width: 80, height: 28 },
  { src: MAG_MEDIA.logoRga, alt: "R/GA", width: 60, height: 20 },
  { src: MAG_MEDIA.logoWonder, alt: "Wonder", width: 108, height: 20, muted: true },
  { src: MAG_MEDIA.logoGuess, alt: "Guess", width: 100, height: 18, muted: true },
  { src: MAG_MEDIA.logoDeliveryhero, alt: "Delivery Hero", width: 110, height: 24 },
];
