import { MAG_MEDIA } from "../media.constants";

export const HERO_TONE = "#0088ff";

export const HERO_HEADLINE = "The creative platform to direct your best work";

export const HERO_TICKER = [
  "Video upscaling",
  "Direct photoshoots",
  "Cast characters",
  "Stay on brand",
  "Upscale to 4K",
  "Draft storyboards",
  "Scale campaigns",
];

/** Milliseconds each ticker line stays active. */
export const HERO_TICKER_INTERVAL = 2200;

/** Height of one ticker line in px; the list is laid out on this grid. */
export const HERO_TICKER_LINE = 60;

/** Opacity by distance from the active line (0, 1, 2, 3+). */
export const HERO_TICKER_FADE = [1, 0.5, 0.32, 0.18];

/** Vermilion accent from the computer-creative skill, used once in the hero. */
export const HERO_ACCENT = "#E9482B";

export const HERO_RISE_DELAYS = { badge: 0, headline: 80, subhead: 160, actions: 240 };

export const HERO_LOGOS = [
  { src: MAG_MEDIA.logoCocaCola, alt: "Coca-Cola", width: 100, height: 28 },
  { src: MAG_MEDIA.logoOgilvy, alt: "Ogilvy", width: 80, height: 28 },
  { src: MAG_MEDIA.logoRga, alt: "R/GA", width: 60, height: 20 },
  { src: MAG_MEDIA.logoWonder, alt: "Wonder", width: 108, height: 20, muted: true },
  { src: MAG_MEDIA.logoGuess, alt: "Guess", width: 100, height: 18, muted: true },
  { src: MAG_MEDIA.logoDeliveryhero, alt: "Delivery Hero", width: 110, height: 24 },
];
