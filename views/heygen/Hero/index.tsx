import { posterFor } from "@/lib/responsive";
import type { CSSProperties } from "react";
import { CtaButton } from "../CtaButton";
import { heygenConfig } from "../config";
import { HG_MEDIA } from "../media.constants";
import { HERO_ARC_DEPTH, HERO_ARC_TURN, HERO_CARDS } from "./Hero.constants";
import { HeroCardMedia } from "./HeroCardMedia";
import { HeyGenLockup } from "./HeyGenLockup";
import { Breadcrumbs } from "../Breadcrumbs";

const CENTRE = (HERO_CARDS.length - 1) / 2;

export function Hero() {
  return (
    <section id="top" className="relative isolate -mt-[76px] overflow-hidden bg-[#2a86f5] pt-[calc(76px+4rem)] pb-14 lg:pt-[calc(76px+5rem)] lg:pb-20">
      <Breadcrumbs />
      <video
        className="pointer-events-none absolute inset-0 -z-20 size-full object-cover object-[50%_35%]"
        src={HG_MEDIA.heroSkyVideo}
        poster={posterFor(HG_MEDIA.heroSky)}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[28%] bg-gradient-to-b from-transparent to-white" />
      <div className="hg-container flex flex-col items-center text-center">
        {/* The headline (Hamza, 19 Oct): the same lockup treatment as the other partner pages, HeyGen's
            full logo then "inside EverAsk" with EverAsk in the serif italic, all white on one line. It
            replaces the old pill and the "AI videos starring you, made in minutes" line. */}
        <h1
          className="flex max-w-full flex-nowrap items-center justify-center gap-x-[0.3em] whitespace-nowrap font-display font-medium leading-none tracking-[-0.03em] text-white [text-shadow:0_2px_24px_rgba(0,30,80,0.45)]"
          style={{ fontSize: "clamp(22px, 3.9vw, 58px)" }}
        >
          {/* Measured from the rendered ink (21 Oct): the wordmark's "H" spans 64% of the lockup's height and the
              display face's caps are 0.67em, so 1.045em matches the caps; 0.02em up puts it on the text baseline. */}
          <HeyGenLockup className="h-[1.045em] w-auto -translate-y-[0.02em] shrink-0 drop-shadow-[0_2px_18px_rgba(0,40,110,0.3)]" />
          <span>
            inside <span className="font-serif text-[1.02em] font-normal italic tracking-[-0.01em]">EverAsk</span>
          </span>
        </h1>
        <p className="mt-5 max-w-[440px] text-[18px] font-medium tracking-[-0.01em] text-white/90">Use HeyGen&apos;s AI avatars and video tools right inside EverAsk.</p>
        <div className="mt-8">
          <CtaButton href={heygenConfig.links.start} label="Get started for free" size="lg" background="#ffffff" color="#131318" />
        </div>
      </div>

      <ul
        className="mt-12 mb-0 flex list-none items-center justify-center gap-[clamp(8px,1vw,16px)] p-0 lg:mt-14"
        aria-label="Example AI presenter videos"
      >
        {HERO_CARDS.map((card, index) => {
          const step = index - CENTRE;
          return (
            <li
              key={card.title}
              className="relative aspect-[3/4] w-[clamp(150px,15vw,240px)] shrink-0 overflow-hidden rounded-[clamp(14px,1.4vw,22px)] bg-[#e8f3ff] shadow-[0_18px_40px_-24px_rgba(0,40,110,0.35)] [container-type:inline-size]"
              style={{ transform: `perspective(900px) translateZ(${step * step * HERO_ARC_DEPTH}px) rotateY(${-step * HERO_ARC_TURN}deg)` } as CSSProperties}
            >
              <HeroCardMedia card={card} />
            </li>
          );
        })}
      </ul>

    </section>
  );
}
