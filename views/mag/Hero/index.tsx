import type { CSSProperties } from "react";
import { magConfig } from "../config";
import { MAG_MEDIA } from "../media.constants";
import { HERO_HEADLINE, HERO_LOGOS, HERO_RISE_DELAYS, HERO_TONE } from "./Hero.constants";
import { HeroTicker } from "./HeroTicker";

const rise = (ms: number) => ({ className: "animate-sky-rise motion-reduce:animate-none", style: { animationDelay: `${ms}ms` } as CSSProperties });

export function Hero() {
  return (
    <>
      <section id="top" className="-mt-[76px] px-2 pt-2 sm:px-3">
        <div
          className="relative isolate flex min-h-[75vh] flex-col overflow-hidden rounded-[24px] pt-[68px] sm:rounded-[36px]"
          style={{ backgroundColor: HERO_TONE }}
        >
          <span aria-hidden className="grain pointer-events-none absolute inset-0 -z-20 opacity-40 mix-blend-overlay" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-[58%] [mask-image:linear-gradient(to_bottom,transparent,#000_35%)] sm:inset-0 sm:h-auto sm:[mask-image:none]">
            <img
              src={MAG_MEDIA.heroBg}
              alt=""
              fetchPriority="high"
              className="size-full origin-bottom animate-hero-drift object-cover object-bottom will-change-transform motion-reduce:animate-none"
            />
          </div>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{ backgroundImage: `linear-gradient(to right, ${HERO_TONE}d9 0%, ${HERO_TONE}8c 38%, ${HERO_TONE}1a 68%, transparent 100%)` }}
          />
          <div className="container-page flex flex-1 items-center justify-between gap-10 py-[clamp(32px,4vw,56px)] text-white">
            <div className="max-w-[640px] [text-shadow:0_2px_30px_rgba(0,40,110,0.25)]">
              <p {...rise(HERO_RISE_DELAYS.badge)}>
                <span className="glass inline-flex h-8 items-center rounded-pill px-3.5 text-[13px] font-medium">Ranked #1 AI creative platform</span>
              </p>
              <h1
                {...rise(HERO_RISE_DELAYS.headline)}
                className="mt-6 font-display font-medium tracking-[-0.035em] text-balance text-white"
                style={{ fontSize: "clamp(40px, 4.4vw, 64px)", lineHeight: 1.04 }}
              >
                {HERO_HEADLINE}
              </h1>
              <p {...rise(HERO_RISE_DELAYS.subhead)}>
                <span className="mt-5 block max-w-[560px] text-[17px] leading-relaxed text-white/90">
                  Every AI model for video, image, and audio. Intelligent workflows for professional control and
                  collaboration. On-brand production at any scale.
                </span>
              </p>
              <div {...rise(HERO_RISE_DELAYS.actions)} className="mt-8">
                <a href={magConfig.links.start} className="btn-primary !bg-white !text-ink hover:!bg-white/90">
                  Start creating
                </a>
              </div>
            </div>
            <div {...rise(HERO_RISE_DELAYS.actions)} className="pr-[clamp(0px,2vw,32px)]">
              <HeroTicker />
            </div>
          </div>
        </div>
      </section>
      <div className="container-page flex flex-col items-center gap-5 pt-10 pb-4">
        <p className="text-center text-sm text-[#131318]/70">Trusted by 1M+ subscribers—creatives, enterprises, agencies and studios</p>
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
