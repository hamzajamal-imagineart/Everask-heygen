import type { CSSProperties } from "react";
import { MAG_MEDIA } from "../media.constants";
import { HERO_HEADLINE, HERO_LOGOS, HERO_RISE_DELAYS, HERO_SUBHEAD, HERO_TONE } from "./Hero.constants";
import { magConfig } from "../config";

const rise = (ms: number) => ({ className: "animate-sky-rise motion-reduce:animate-none", style: { animationDelay: `${ms}ms` } as CSSProperties });

/* The headline's last word in the serif italic, as EverAsk's hero sets it. */
function Accented({ text }: { text: string }) {
  const words = text.split(" ");
  const last = words.pop();
  return (
    <>
      {words.join(" ")} <span className="font-serif text-[1.08em] font-normal italic tracking-[-0.01em]">{last}</span>
    </>
  );
}

/* EverAsk's sky hero (components/landing/Hero.tsx, SkyHero): a tall rounded
   frame under the header and breadcrumb, Hamza's clip of a boy leaping across
   cloud puffs over a mirror sea filling it (muted loop, first frame as poster),
   the copy and its white button centred in the sky above him. */
export function Hero() {
  return (
    <>
      <section id="top" className="px-2 sm:px-3">
        <div
          className="relative isolate flex min-h-[max(640px,calc(100svh-140px))] flex-col overflow-hidden rounded-[24px] sm:rounded-[36px]"
          style={{ backgroundColor: HERO_TONE }}
        >
          <div className="absolute inset-x-0 bottom-0 -z-10 h-[52%] [mask-image:linear-gradient(to_bottom,transparent,#000_30%)] sm:inset-0 sm:h-auto sm:[mask-image:none]">
            <video
              src={MAG_MEDIA.heroVideo}
              poster={MAG_MEDIA.heroPoster}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-hidden="true"
              className="size-full object-cover object-bottom"
            />
          </div>
          <span aria-hidden className="grain pointer-events-none absolute inset-0 -z-10 opacity-40 mix-blend-overlay" />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{ backgroundImage: `linear-gradient(to bottom, ${HERO_TONE}d9 0%, ${HERO_TONE}80 28%, transparent 55%)` }}
          />
          <div className="container-page flex flex-1 flex-col items-center pt-[clamp(48px,6vw,88px)] pb-[clamp(200px,24vw,340px)] text-center">
            <p {...rise(HERO_RISE_DELAYS.badge)}>
              <span className="glass inline-flex h-8 items-center rounded-pill px-3.5 text-[13px] font-medium">Magnific, now inside EverAsk</span>
            </p>
            <h1 {...rise(HERO_RISE_DELAYS.headline)} className="t-hero mt-6 max-w-4xl font-display font-medium text-balance text-white [text-shadow:0_2px_30px_rgba(0,40,110,0.25)]">
              <Accented text={HERO_HEADLINE} />
            </h1>
            <p {...rise(HERO_RISE_DELAYS.subhead)}>
              <span className="mx-auto mt-4 block max-w-xl text-[17px] leading-relaxed text-white/90">{HERO_SUBHEAD}</span>
            </p>
            <div {...rise(HERO_RISE_DELAYS.actions)} className="mt-8">
              <a href={magConfig.links.start} className="btn-primary !bg-white !text-ink hover:!bg-white/90">
                Start creating
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="hero-end" />
      <div className="container-page flex flex-col items-center gap-5 pt-10 pb-4">
        <p className="text-center text-sm text-[#131318]/70">Magnific is trusted by 1M+ subscribers—creatives, enterprises, agencies and studios</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {HERO_LOGOS.map((logo) => (
            <li key={logo.alt} className={logo.muted ? "opacity-40" : "opacity-70"}>
              <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="brightness-0" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
