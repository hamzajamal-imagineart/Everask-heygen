import { topazConfig } from "../config";
import { TOPAZ_MEDIA } from "../media.constants";
import { EnhanceLoupe } from "./EnhanceLoupe";
import { HERO_EYEBROW, HERO_HEADLINE, HERO_SUBHEAD } from "./Hero.constants";
import { TopazWordmark } from "./TopazWordmark";

/* Topaz's hero as a full-width block (Hamza, 19 Oct: "use this as a full
   width hero section"): the eyebrow labels, lockup pill, their h1, our line
   and the CTAs on white, then their parrot pair edge to edge in EverAsk's
   rounded frame with the enhance loupe (EnhanceLoupe.tsx) over it. */
export function Hero() {
  return (
    <section id="top" className="pt-4 pb-6 lg:pt-8">
      <div className="container-page">
        <ul className="flex flex-wrap gap-x-6 gap-y-1 text-[11px] font-medium uppercase tracking-[0.08em] text-black/50">
          {HERO_EYEBROW.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
        <div className="mt-8 grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-3 rounded-pill bg-fill-1 py-1.5 pl-1.5 pr-4 text-[14px] font-medium text-ink">
              <span className="grid size-8 place-items-center rounded-full bg-ink text-white">
                <TopazWordmark className="h-3 w-auto" />
              </span>
              Topaz Photo, now inside EverAsk
            </span>
            <h1 className="mt-6 max-w-[760px] font-display font-medium leading-[1.04] tracking-[-0.035em] text-balance text-ink" style={{ fontSize: "clamp(36px, 4.6vw, 64px)" }}>
              {HERO_HEADLINE}
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <p className="max-w-[420px] text-[17px] leading-relaxed text-black/55">{HERO_SUBHEAD}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={topazConfig.links.start} className="btn-primary">
                Start enhancing
              </a>
              <a href="#showcase" className="btn-secondary">
                See every tool
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 px-2 sm:px-3">
        <EnhanceLoupe before={TOPAZ_MEDIA.tz.clarity.before} after={TOPAZ_MEDIA.tz.clarity.after} ratio={TOPAZ_MEDIA.tz.clarity.ratio} />
      </div>
    </section>
  );
}
