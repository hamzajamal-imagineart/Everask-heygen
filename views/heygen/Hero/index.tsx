import type { CSSProperties } from "react";
import { CtaButton } from "../CtaButton";
import { heygenConfig } from "../config";
import { HERO_ARC_DEPTH, HERO_ARC_TURN, HERO_CARDS } from "./Hero.constants";
import { HeroCardOverlay } from "./HeroCardOverlay";

const CENTRE = (HERO_CARDS.length - 1) / 2;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-hg-page pt-16 pb-14 lg:pt-20 lg:pb-20">
      <div className="hg-container flex flex-col items-center text-center">
        <h1 className="hg-h1 text-hg-ink" style={{ fontSize: "clamp(36px, 4.4vw, 60px)", lineHeight: 1.06 }}>
          AI videos starring you,
          <br /> made in minutes
        </h1>
        <p className="mt-5 max-w-[440px] text-[18px] font-medium tracking-[-0.01em] text-hg-ink">Be your best self, every time.</p>
        <div className="mt-8">
          <CtaButton href={heygenConfig.links.start} label="Get started for free" size="lg" />
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
