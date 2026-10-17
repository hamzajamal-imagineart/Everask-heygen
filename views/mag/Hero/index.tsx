import type { CSSProperties } from "react";
import { magConfig } from "../config";
import { MAG_MEDIA } from "../media.constants";
import { HERO_HEADLINE, HERO_LOGOS, HERO_RISE_DELAYS, HERO_STARTERS, HERO_TONE } from "./Hero.constants";

const rise = (ms: number) => ({ className: "animate-sky-rise motion-reduce:animate-none", style: { animationDelay: `${ms}ms` } as CSSProperties });

export function Hero() {
  const words = HERO_HEADLINE.split(" ");
  const last = words.pop();

  return (
    <>
      <section id="top" className="-mt-[76px] px-2 pt-2 sm:px-3">
        <div
          className="relative isolate flex min-h-[max(676px,calc(100svh-64px))] flex-col overflow-hidden rounded-[24px] pt-[68px] sm:rounded-[36px]"
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
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-3/4"
            style={{ backgroundImage: `linear-gradient(to bottom, ${HERO_TONE}b3 0%, ${HERO_TONE}66 55%, transparent)` }}
          />
          <div className="container-page flex flex-1 flex-col items-center pt-[clamp(56px,7vw,104px)] pb-[clamp(200px,24vw,340px)] text-center text-white">
            <div className="relative [text-shadow:0_2px_30px_rgba(0,40,110,0.25)]">
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-x-[6%] -inset-y-[75%] -z-10"
                style={{ backgroundImage: `radial-gradient(closest-side, ${HERO_TONE}f5 0%, ${HERO_TONE}d9 50%, ${HERO_TONE}00 100%)` }}
              />
              <p {...rise(HERO_RISE_DELAYS.badge)}>
                <span className="glass inline-flex h-8 items-center rounded-pill px-3.5 text-[13px] font-medium">Ranked #1 AI creative platform</span>
              </p>
              <h1 {...rise(HERO_RISE_DELAYS.headline)} className="t-hero mx-auto mt-5 max-w-4xl font-medium text-balance text-white">
                {words.join(" ")} <span className="font-serif text-[1.08em] font-normal italic tracking-[-0.01em]">{last}</span>
              </h1>
              <p {...rise(HERO_RISE_DELAYS.subhead)}>
                <span className="mx-auto mt-4 block max-w-xl text-[17px] leading-relaxed text-white/90">
                  Every AI model for video, image, and audio. Intelligent workflows for professional control and
                  collaboration. On-brand production at any scale.
                </span>
              </p>
            </div>
            <div {...rise(HERO_RISE_DELAYS.actions)} className="relative z-10 mt-8 flex w-full flex-col items-center gap-4">
              <a href={magConfig.links.start} className="btn-primary !bg-white !text-ink hover:!bg-white/90">
                Start creating
              </a>
              <ul aria-label="Starters" className="flex flex-wrap justify-center gap-2 py-1">
                {HERO_STARTERS.map((starter) => (
                  <li key={starter}>
                    <a href={magConfig.links.start} className="glass inline-flex h-9 items-center rounded-pill px-4 text-[14px] font-medium whitespace-nowrap">
                      {starter}
                    </a>
                  </li>
                ))}
              </ul>
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
