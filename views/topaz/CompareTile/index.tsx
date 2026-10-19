import { HeroCompare } from "@/views/mag/Hero/HeroCompare";

/* A bento tile with the draggable before/after inside it (Hamza, 19 Oct:
   "instead of this, add the slider", replacing the hold-to-enhance tiles):
   the tool's name top-left, Before/After pills, the handle mid-height. With
   `ratio` the tile keeps the picture's shape; without it the tile fills its
   grid cell and the pair crops to the cell. */
export function CompareTile({ before, after, label, ratio, handleY = 50, className = "" }: { before: string; after: string; label: string; ratio?: number; handleY?: number; className?: string }) {
  return (
    <div
      className={`relative isolate overflow-hidden rounded-2xl bg-fill-1 ${ratio ? "" : "h-full"} ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <HeroCompare before={before} after={after} handleY={handleY} />
      <span className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 to-transparent" />
      <span className="pointer-events-none absolute left-5 top-4 font-display text-[20px] font-medium leading-none tracking-[-0.02em] text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.4)] sm:text-[24px]">{label}</span>
      <span className="pointer-events-none absolute bottom-4 left-4 rounded-pill bg-black/45 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-white backdrop-blur-md">Before</span>
      <span className="pointer-events-none absolute bottom-4 right-4 rounded-pill bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-ink">After</span>
    </div>
  );
}
