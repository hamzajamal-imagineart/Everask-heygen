import type { SeoArt } from "./art.types";

/* Each page's art, generated on ImagineArt for EverAsk's site (Computer Creative
 system, #0088FF) and copied here. `hero` is the page's card and share image;
 `rows` are the Who it's for pictures, cropped to 16:9 at `focus` (vertical %).
 The local SEO audit has its own picture for the agencies row; the other rows
 reuse the page's examples. */
export const SEO_ART: Record<string, SeoArt> = {
  "local-seo-audit": {
    hero: {
      src: "/assets/seo/local-seo-audit/hero.webp",
      alt: "A giant paper map with one vermilion pin on a green hill",
      position: "50% 100%"
    },
    examples: [
      {
        src: "/assets/seo/local-seo-audit/example-1.webp",
        alt: "A folded paper street map on a blue cloth in hard sun, three white location pins pushed into it and one small vermilion pin ahead of them",
        caption: "Map pack rank"
      },
      {
        src: "/assets/seo/local-seo-audit/example-2.webp",
        alt: "Three cream cards in a row on a sunlit white ledge, each with a row of five small star shapes, the stars on the last card filled in vermilion, blue sky behind",
        caption: "Reviews compared"
      },
      {
        src: "/assets/seo/local-seo-audit/example-3.webp",
        alt: "A cream checklist clipped to a wooden clipboard with ruled lines and small tick boxes, one tick in vermilion, leaning on a sunlit stone wall against a blue sky",
        caption: "Fixes in order"
      }
    ],
    rows: [
      {
        src: "/assets/seo/local-seo-audit/example-1.webp",
        alt: "A folded paper street map on a blue cloth in hard sun, three white location pins pushed into it and one small vermilion pin ahead of them",
        focus: 45
      },
      {
        src: "/assets/seo/local-seo-audit/agencies.webp",
        alt: "A printed audit on a cafe table between two cups",
        focus: 45
      },
      {
        src: "/assets/seo/local-seo-audit/example-3.webp",
        alt: "A cream checklist clipped to a wooden clipboard with ruled lines and small tick boxes, one tick in vermilion, leaning on a sunlit stone wall against a blue sky",
        focus: 45
      }
    ]
  },
  "competitor-keyword-research": {
    hero: {
      src: "/assets/seo/competitor-keyword-research/hero.webp",
      alt: "A giant card catalogue drawer of index cards on a green hill",
      position: "52% 100%"
    },
    examples: [
      {
        src: "/assets/seo/competitor-keyword-research/example-1.webp",
        alt: "A fanned spread of cream index cards on a blue cloth in hard sun, each with ruled lines, one card with a small vermilion tab",
        caption: "Keyword list"
      },
      {
        src: "/assets/seo/competitor-keyword-research/example-2.webp",
        alt: "A long cream printout of ruled rows pinned to a blue wall in warm light, short blue bars at the end of each row, one row highlighted in vermilion",
        caption: "Sorted by traffic"
      },
      {
        src: "/assets/seo/competitor-keyword-research/example-3.webp",
        alt: "Three cream sheets of ruled rows laid side by side on a sunlit white table against a blue sky, one small vermilion paperclip on the middle sheet",
        caption: "Three rivals compared"
      }
    ],
    rows: [
      {
        src: "/assets/seo/competitor-keyword-research/example-1.webp",
        alt: "A fanned spread of cream index cards on a blue cloth in hard sun, each with ruled lines, one card with a small vermilion tab",
        focus: 60
      },
      {
        src: "/assets/seo/competitor-keyword-research/example-2.webp",
        alt: "A long cream printout of ruled rows pinned to a blue wall in warm light, short blue bars at the end of each row, one row highlighted in vermilion",
        focus: 50
      },
      {
        src: "/assets/seo/competitor-keyword-research/example-3.webp",
        alt: "Three cream sheets of ruled rows laid side by side on a sunlit white table against a blue sky, one small vermilion paperclip on the middle sheet",
        focus: 100
      }
    ]
  },
  "ai-seo-audit": {
    hero: {
      src: "/assets/seo/ai-seo-audit/hero.webp",
      alt: "A giant audit report on a clipboard standing on a green hill",
      position: "84% 100%"
    },
    examples: [
      {
        src: "/assets/seo/ai-seo-audit/example-1.webp",
        alt: "A cream report page with a simple bar chart of blue bars and ruled lines beneath, one vermilion bar, lying on a blue cloth in hard sun",
        caption: "Authority and links"
      },
      {
        src: "/assets/seo/ai-seo-audit/example-2.webp",
        alt: "A brass magnifying glass resting on a printed web page with a header block, ruled lines and image boxes, one heading underlined in vermilion, on a sunlit white desk against a blue sky",
        caption: "On-page read"
      },
      {
        src: "/assets/seo/ai-seo-audit/example-3.webp",
        alt: "A bound cream report with a blue cover sheet folded back, ruled lines and a short checklist inside, one small vermilion tab on its edge, on a blue cloth",
        caption: "Ready to share"
      }
    ],
    rows: [
      {
        src: "/assets/seo/ai-seo-audit/example-1.webp",
        alt: "A cream report page with a simple bar chart of blue bars and ruled lines beneath, one vermilion bar, lying on a blue cloth in hard sun",
        focus: 67
      },
      {
        src: "/assets/seo/ai-seo-audit/example-2.webp",
        alt: "A brass magnifying glass resting on a printed web page with a header block, ruled lines and image boxes, one heading underlined in vermilion, on a sunlit white desk against a blue sky",
        focus: 100
      },
      {
        src: "/assets/seo/ai-seo-audit/example-3.webp",
        alt: "A bound cream report with a blue cover sheet folded back, ruled lines and a short checklist inside, one small vermilion tab on its edge, on a blue cloth",
        focus: 76
      }
    ]
  },
  "traffic-estimator": {
    hero: {
      src: "/assets/seo/traffic-estimator/hero.webp",
      alt: "Five giant columns like a bar chart on a green hill",
      position: "50% 100%"
    },
    examples: [
      {
        src: "/assets/seo/traffic-estimator/example-1.webp",
        alt: "A cream sheet with a column of horizontal blue bars of different lengths, the longest one vermilion, lying on a blue cloth in hard sun",
        caption: "Sites side by side"
      },
      {
        src: "/assets/seo/traffic-estimator/example-2.webp",
        alt: "A cream sheet with a single rising line chart drawn in blue over faint grid lines, one small vermilion dot at the peak, pinned to a blue wall in warm light",
        caption: "Traffic over time"
      },
      {
        src: "/assets/seo/traffic-estimator/example-3.webp",
        alt: "A tall glass beaker on a sunlit white ledge filled with layered blue and green sand, a thin vermilion layer on top, blue sky behind",
        caption: "Market share"
      }
    ],
    rows: [
      {
        src: "/assets/seo/traffic-estimator/example-1.webp",
        alt: "A cream sheet with a column of horizontal blue bars of different lengths, the longest one vermilion, lying on a blue cloth in hard sun",
        focus: 60
      },
      {
        src: "/assets/seo/traffic-estimator/example-2.webp",
        alt: "A cream sheet with a single rising line chart drawn in blue over faint grid lines, one small vermilion dot at the peak, pinned to a blue wall in warm light",
        focus: 50
      },
      {
        src: "/assets/seo/traffic-estimator/example-3.webp",
        alt: "A tall glass beaker on a sunlit white ledge filled with layered blue and green sand, a thin vermilion layer on top, blue sky behind",
        focus: 60
      }
    ]
  },
  "keyword-gap-analysis": {
    hero: {
      src: "/assets/seo/keyword-gap-analysis/hero.webp",
      alt: "Two giant overlapping discs like a Venn diagram on a green hill",
      position: "47% 100%"
    },
    examples: [
      {
        src: "/assets/seo/keyword-gap-analysis/example-1.webp",
        alt: "Two overlapping circles drawn in blue ink on a cream sheet, one crescent shaded vermilion, lying on a blue cloth in hard sun",
        caption: "The missing set"
      },
      {
        src: "/assets/seo/keyword-gap-analysis/example-2.webp",
        alt: "Two cream sheets of ruled rows side by side on a sunlit white table, the left sheet with gaps between its rows, one gap marked with a small vermilion slip, blue sky behind",
        caption: "Gaps by keyword"
      },
      {
        src: "/assets/seo/keyword-gap-analysis/example-3.webp",
        alt: "A short stack of cream content briefs with ruled lines, held by a large vermilion binder clip, on a blue cloth in warm sun",
        caption: "Briefs to write"
      }
    ],
    rows: [
      {
        src: "/assets/seo/keyword-gap-analysis/example-1.webp",
        alt: "Two overlapping circles drawn in blue ink on a cream sheet, one crescent shaded vermilion, lying on a blue cloth in hard sun",
        focus: 81
      },
      {
        src: "/assets/seo/keyword-gap-analysis/example-2.webp",
        alt: "Two cream sheets of ruled rows side by side on a sunlit white table, the left sheet with gaps between its rows, one gap marked with a small vermilion slip, blue sky behind",
        focus: 100
      },
      {
        src: "/assets/seo/keyword-gap-analysis/example-3.webp",
        alt: "A short stack of cream content briefs with ruled lines, held by a large vermilion binder clip, on a blue cloth in warm sun",
        focus: 64
      }
    ]
  },
};
