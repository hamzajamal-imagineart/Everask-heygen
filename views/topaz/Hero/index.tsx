import { HeroCompare } from "@/views/mag/Hero/HeroCompare";
import { topazConfig } from "../config";
import { TOPAZ_MEDIA } from "../media.constants";
import { HERO_EYEBROW, HERO_HEADLINE, HERO_SUBHEAD } from "./Hero.constants";
import { TopazWordmark } from "./TopazWordmark";

/* Topaz's hero shape on EverAsk's page: two columns on white. Left, a row of
   small eyebrow labels, the product lockup pill, the big headline in ink, a
   line and the CTA. Right, a tall rounded before/after (their "tap and hold";
   ours is the draggable slider) in the still's own 3:4. */
export function Hero() {
  return (
    <section id="top" className="container-page pt-4 pb-6 lg:pt-8">
      <ul className="flex flex-wrap gap-x-6 gap-y-1 text-[11px] font-medium uppercase tracking-[0.08em] text-black/50">
        {HERO_EYEBROW.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
      <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-[560px]">
          <span className="inline-flex items-center gap-3 rounded-pill bg-fill-1 py-1.5 pl-1.5 pr-4 text-[14px] font-medium text-ink">
            <span className="grid size-8 place-items-center rounded-full bg-ink text-white">
              <TopazWordmark className="h-3 w-auto" />
            </span>
            Topaz Photo, now inside EverAsk
          </span>
          <h1 className="mt-6 font-display font-medium leading-[1.04] tracking-[-0.035em] text-balance text-ink" style={{ fontSize: "clamp(36px, 4.4vw, 60px)" }}>
            {HERO_HEADLINE}
          </h1>
          <p className="mt-5 max-w-[480px] text-[17px] leading-relaxed text-black/55">{HERO_SUBHEAD}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={topazConfig.links.start} className="btn-primary">
              Start enhancing
            </a>
            <a href="#showcase" className="btn-secondary">
              See every tool
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
          <div className="relative isolate overflow-hidden rounded-[24px] bg-fill-1 sm:rounded-[32px]" style={{ aspectRatio: 3 / 4 }}>
            <HeroCompare before={TOPAZ_MEDIA.tz.parrot.before} after={TOPAZ_MEDIA.tz.parrot.after} initial={55} handleY={88} />
            <span className="pointer-events-none absolute left-5 top-5 rounded-pill bg-black/40 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-white backdrop-blur-md">Drag to compare</span>
          </div>
        </div>
      </div>
    </section>
  );
}
