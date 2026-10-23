/* The line glyphs the SEO pages use, from EverAsk's site icon set
   (components/landing/icons.tsx): 24 grid, 1.5 stroke. */
const PATHS = {
  pen: "M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16v4Zm9.5-13.5 4 4",
  search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-2 4 4",
  chart: "M4 20V10m6 10V4m6 16v-7m4 7H3",
  table: "M4 5h16v14H4V5Zm0 5h16M4 14.5h16M10 5v14",
  doc: "M7 3h7l5 5v13H7V3Zm7 0v5h5M10 13h6m-6 4h6",
  split: "M6 4v6a4 4 0 0 0 4 4h4a4 4 0 0 1 4 4v2M18 4v6M6 20v-2m12-8-2-2m2 2 2-2M6 20l-2-2m2 2 2-2",
  briefcase: "M4 8h16v11H4V8Zm5 0V5h6v3M4 13h16",
  rocket: "M14 4c3 0 6 3 6 6l-7 7-6-6 7-7Zm-7 7-3 1 2 2m6 4-1 3-2-2m3.5-9.5h.01",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-9-9h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9Z",
  link: "M10 14a4 4 0 0 0 6 0l3-3a4 4 0 0 0-6-6l-1 1m2 4a4 4 0 0 0-6 0l-3 3a4 4 0 0 0 6 6l1-1",
  megaphone: "M4 10v4h3l8 4V6L7 10H4Zm3 4 1.5 5M18 9.5a3 3 0 0 1 0 5",
  pin: "M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  map: "M9 4 3 6.5V20l6-2.5 6 2.5 6-2.5V4l-6 2.5L9 4Zm0 0v13.5m6-11V20",
  store: "M4 9.5 5.5 4h13L20 9.5M4 9.5h16M4 9.5a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0M5.5 12.5V20h13v-7.5M10 20v-4.5h4V20",
  checklist: "M10 6h10M10 12h10M10 18h10M4 6l1.2 1.2L7.5 5M4 12l1.2 1.2L7.5 11M4 18l1.2 1.2L7.5 17",
  presentation: "M3 4h18M5 4v10h14V4M12 14v3m-4 4 4-4 4 4M9 10l2-2 2 1.5L16 7",
  star: "M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5Z",
  check: "M4 12.5 9 17.5 20 6.5",
  sparkles: "M12 3v3m0 12v3M3 12h3m12 0h3M6.3 6.3l2 2m7.4 7.4 2 2m0-11.4-2 2m-7.4 7.4-2 2M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
};

export type GlyphName = keyof typeof PATHS;

export function Glyph({ name, className = "size-5" }: { name: GlyphName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <path d={PATHS[name]} />
    </svg>
  );
}
