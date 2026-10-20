/* One model in a Topaz model picker. Copy is verbatim from Topaz's API docs
   (developer.topazlabs.com/image-models/gigapixel/* and /video-models/proteus/*);
   the use-case lines come from their Model Selection guide. */
export type ModelMedia =
  | { kind: "image"; before: string; after: string; ratio: number }
  | { kind: "video"; before: string; after: string; poster: string; ratio: number }
  /** A pre-rendered side-by-side from Topaz's docs (no separate before/after files). */
  | { kind: "still"; src: string; ratio: number };

export type ModelVariant = { label: string; useCase?: string; media: ModelMedia };

export type TopazModel = {
  /** The name Topaz's model picker shows. */
  name: string;
  /** Topaz's one-line description. */
  line: string;
  overview: string;
  caps: string[];
  useCase?: string;
  variants: ModelVariant[];
};
