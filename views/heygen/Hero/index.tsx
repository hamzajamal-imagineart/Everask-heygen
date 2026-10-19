import type { CSSProperties } from "react";
import { CtaButton } from "../CtaButton";
import { heygenConfig } from "../config";
import { HG_MEDIA } from "../media.constants";
import { HERO_ARC_DEPTH, HERO_ARC_TURN, HERO_CARDS } from "./Hero.constants";
import { HeroCardOverlay } from "./HeroCardOverlay";

const CENTRE = (HERO_CARDS.length - 1) / 2;

export function Hero() {
  return (
    <section className="relative isolate -mt-[76px] overflow-hidden bg-[#2a86f5] pt-[calc(76px+4rem)] pb-14 lg:pt-[calc(76px+5rem)] lg:pb-20">
      <video
        className="pointer-events-none absolute inset-0 -z-20 size-full object-cover object-[50%_35%]"
        src={HG_MEDIA.heroSkyVideo}
        poster={HG_MEDIA.heroSky}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[28%] bg-gradient-to-b from-transparent to-white" />
      <div className="hg-container flex flex-col items-center text-center">
        <span className="mb-6 inline-flex h-8 items-center rounded-full border border-white/40 bg-white/15 px-4 text-[13px] font-medium text-white backdrop-blur-md">
          HeyGen, now inside EverAsk
        </span>
        <h1 className="hg-h1 text-white [text-shadow:0_2px_24px_rgba(0,40,110,0.25)]" style={{ fontSize: "clamp(36px, 4.4vw, 60px)", lineHeight: 1.06 }}>
          AI videos starring you,
          <br /> made in minutes
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
              <img src={card.image} alt={`${card.title}, ${card.subtitle}`} className="size-full object-cover" style={{ objectPosition: card.focus }} />
              <HeroCardOverlay card={card} />
            </li>
          );
        })}
      </ul>

    </section>
  );
}
