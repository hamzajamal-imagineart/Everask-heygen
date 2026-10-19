import { HeroCompare } from "@/views/mag/Hero/HeroCompare";
import { TOPAZ_MEDIA } from "../media.constants";

/* Topaz's "Every pixel. Perfect." full-bleed before/after with the line set
   over the picture. Contained in EverAsk's rounded frame, Topaz's own mountain pair in its
   16:9, the handle low so the words stay clear. */
export function Showcase() {
  return (
    <section id="every-pixel" className="px-2 pt-4 sm:px-3">
      <div className="relative isolate overflow-hidden rounded-[24px] bg-[#1a2230] sm:rounded-[36px]" style={{ aspectRatio: 16 / 9 }}>
        <HeroCompare before={TOPAZ_MEDIA.tz.mountain.before} after={TOPAZ_MEDIA.tz.mountain.after} initial={50} handleY={85} />
        <span className="pointer-events-none absolute left-5 top-5 rounded-pill bg-black/40 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-white backdrop-blur-md">Before</span>
        <span className="pointer-events-none absolute right-5 top-5 rounded-pill bg-white/90 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-ink">After</span>
        <div className="pointer-events-none absolute inset-0 grid place-items-center">
          <h2 className="t-statement px-6 text-center font-display font-medium text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.5)]">
            Every pixel. <span className="font-serif text-[1.12em] font-normal italic">Perfect.</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
