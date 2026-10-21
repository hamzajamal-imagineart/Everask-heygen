import variants from "./image-variants.json";

type Entry = { w: number; h: number; variants: [string, number][] };
const MAP = variants as unknown as Record<string, Entry>;

/* srcset for an asset from scripts/image-variants.mjs (640w / 1280w copies beside the original), or
   undefined when the image has none. Pair it with a `sizes` that says how wide the image renders. */
export function srcSetFor(src: string | undefined): string | undefined {
  if (!src) return undefined;
  const e = MAP[src];
  if (!e) return undefined;
  return [...e.variants.map(([p, w]) => `${p} ${w}w`), `${src} ${e.w}w`].join(", ");
}

/* A `<video poster>` cannot take srcset; posters use the 1280w copy when there is one (a 720p clip's
   poster does not need more). */
export function posterFor(src: string | undefined): string | undefined {
  if (!src) return undefined;
  const e = MAP[src];
  const v = e?.variants.find(([, w]) => w === 1280);
  return v ? v[0] : src;
}
