import type { TouchpointCopy } from "../mag/AppTouchpoints/AppTouchpoints.constants";
import { EVERASK_BRAND } from "../mag/Lockup/Lockup.constants";
import type { GlyphName } from "./Icons";

/* The SEO cluster as EverAsk's site sets it up (lib/site.ts, lib/sky.ts,
   lib/cluster-extras.ts, AppTouchpoints there): its label and blurb, the
   starters under the composer, the sky world, and the run in the app cards. */
export const SEO_CLUSTER = {
  label: "SEO",
  href: `${EVERASK_BRAND.site}/features/seo`,
  blurb: "Audits, keyword research and traffic checks from real search data.",
};

export const SEO_STARTERS = [
  { label: "SEO audit", prompt: "SEO audit of our pricing page against our top two rivals" },
  { label: "Competitor keywords", prompt: "Every keyword our main competitor ranks for in the top 10" },
  { label: "Keyword gaps", prompt: "Keywords our three rivals rank for and we don't" },
  { label: "Local SEO", prompt: "Where we rank on Google Maps for plumber near me in Leeds" },
];

/* The empty sky over cloud (EverAsk's "website" world), with one of its
   cloud loops; copied from everask-lp-assets/sky/hero/. */
export const SEO_SKY = {
  tone: "#0168de",
  poster: "/assets/seo/sky/website-1920.webp",
  posterSm: "/assets/seo/sky/website-960.webp",
  video: "/assets/seo/sky/clouds-1.mp4",
};

/** Into EverAsk, tagged with the page it came from. */
export const startHref = (slug: string) =>
  `${EVERASK_BRAND.site}/agent?utm_source=everask_site&utm_medium=landing_page&utm_lp=/features/seo/${slug}`;

export const SEO_TOUCHPOINT: TouchpointCopy = {
  phone: "Ask for the audit on the train, read the fixes, and send them on from your phone. Every report you make here is on your phone.",
  mac: "SEO research on your desktop, with the site lists and exports you already have to hand.",
  project: "Pricing page audit",
  prompt: "SEO audit of our pricing page against our top two rivals",
  steps: ["Thought for 3s", "Pulled rankings and links", "Wrote the audit"],
  reply: "Your pricing page ranks for 41 keywords, the rivals for over 100 each. The title misses the term buyers search, and the fix list starts there.",
  done: "Done · audit ready to share",
  ask: "Describe the research",
};

/* Line glyphs by exact item title (icons.tsx `pinned` on EverAsk's site):
   How it works and the Who it's for rows. */
export const SEO_GLYPHS: Record<string, GlyphName> = {
  // Local SEO audit
  "Name the business and the searches": "store",
  "It checks the map results": "map",
  "Get the fixes in order": "checklist",
  "Owners of a local business": "store",
  "Agencies pitching local clients": "presentation",
  "Multi-location brands": "pin",
  // Competitor keyword research
  "Name the competitor": "globe",
  "It pulls their rankings": "chart",
  "Get a sheet you can act on": "table",
  "Content teams planning a quarter": "pen",
  "SEO agencies onboarding a client": "presentation",
  "Founders entering a market": "rocket",
  // AI SEO audit
  "Paste the URL": "link",
  "It gathers the data": "search",
  "Read the fix list": "checklist",
  "Marketers inheriting a site": "globe",
  "Freelancers and agencies": "presentation",
  "Founders without an SEO hire": "rocket",
  // Traffic estimator
  "Paste the sites": "globe",
  "It estimates each one": "chart",
  "Compare and dig in": "table",
  "Sales teams qualifying accounts": "briefcase",
  "Marketers sizing a market": "megaphone",
  "Buyers checking a site": "search",
  // Keyword gap analysis
  "Name your site and rivals": "globe",
  "It compares the rankings": "split",
  "Get the pages to write": "doc",
  "Content leads choosing what to write": "pen",
  "SEO consultants": "presentation",
  "Product marketers": "megaphone",
};
