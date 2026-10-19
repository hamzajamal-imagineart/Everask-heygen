import type { CSSProperties } from "react";
import { MAG_MEDIA } from "../media.constants";
import { EVERASK_BRAND } from "../Lockup/Lockup.constants";
import { Breadcrumbs } from "../Breadcrumbs";
import { MagnificWordmark } from "./MagnificWordmark";
import { HERO_HEADLINE, HERO_LOGOS, HERO_RISE_DELAYS, HERO_SUBHEAD, HERO_TONE } from "./Hero.constants";
import { magConfig } from "../config";

const rise = (ms: number) => ({ className: "animate-sky-rise motion-reduce:animate-none", style: { animationDelay: `${ms}ms` } as CSSProperties });

/* The sky hero, full-bleed and full viewport height with the transparent
   header and the breadcrumbs over it (as the HeyGen page is built), Magnific's Upscale clip (the suite's first row) filling it: a figure in a
   pink metallic coat among flowers on near-black, muted loop, first frame as poster,
   the copy and its white button centred in the frame, the clip graded cooler in ffmpeg. */
export function Hero() {
  return (
    <>
      <section id="top" className="-mt-[76px]">
        <div
          className="relative isolate flex min-h-[max(640px,100svh)] flex-col overflow-hidden pt-[76px]"
          style={{ backgroundColor: HERO_TONE }}
        >
          <Breadcrumbs />
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
              className="size-full object-cover object-center"
            />
          </div>
          <span aria-hidden className="grain pointer-events-none absolute inset-0 -z-10 opacity-40 mix-blend-overlay" />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{ backgroundImage: `linear-gradient(to bottom, ${HERO_TONE}e6 0%, ${HERO_TONE}b3 35%, ${HERO_TONE}59 65%, ${HERO_TONE}1a 100%)` }}
          />
          <div className="container-page flex flex-1 flex-col items-center justify-center py-[clamp(48px,6vw,88px)] text-center">
            {/* The headline (Hamza, 19 Oct): Magnific's wordmark, then "inside EverAsk" with EverAsk in
                the serif italic, all white on one line. */}
            <h1
              {...rise(HERO_RISE_DELAYS.headline)}
              className="flex max-w-full flex-nowrap items-center justify-center gap-x-[0.3em] whitespace-nowrap font-display font-medium leading-none tracking-[-0.03em] text-white [text-shadow:0_2px_24px_rgba(0,30,80,0.55)]"
              style={{ fontSize: "clamp(22px, 3.9vw, 58px)" }}
            >
              {/* Magnific's glyphs span 27 of the SVG's 44 units, so 1.14em puts their cap height on the line's. */}
              <MagnificWordmark className="h-[1.14em] w-auto shrink-0 drop-shadow-[0_2px_18px_rgba(0,40,110,0.3)]" />
              <span>
                {HERO_HEADLINE} <span className="font-serif text-[1.08em] font-normal italic tracking-[-0.01em]">{EVERASK_BRAND.name}</span>
              </span>
            </h1>
            <p {...rise(HERO_RISE_DELAYS.subhead)}>
              <span className="mx-auto mt-5 block max-w-2xl text-[17px] leading-relaxed text-white [text-shadow:0_1px_16px_rgba(0,30,80,0.6)]">{HERO_SUBHEAD}</span>
            </p>
            <div {...rise(HERO_RISE_DELAYS.actions)} className="mt-8">
              <a href={magConfig.links.start} className="btn-primary !bg-white !text-ink hover:!bg-white/90">
                Start upscaling
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="hero-end" />
      <div className="container-page flex flex-col items-center gap-5 pt-10 pb-4">
        <p className="text-center text-sm text-[#131318]/70">Magnific is trusted by 1M+ subscribers: creatives, enterprises, agencies and studios</p>
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
