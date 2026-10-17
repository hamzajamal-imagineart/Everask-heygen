import type { CSSProperties } from "react";
import { CtaButton } from "../CtaButton";
import { heygenConfig } from "../config";
import { HERO_ARC_DEPTH, HERO_ARC_TURN, HERO_CARDS } from "./Hero.constants";
import { HeroCardOverlay } from "./HeroCardOverlay";

const CENTRE = (HERO_CARDS.length - 1) / 2;

export function Hero() {
  return (
    <section
      className="relative isolate -mt-[76px] overflow-hidden pt-[calc(76px+4rem)] pb-14 lg:pt-[calc(76px+5rem)] lg:pb-20"
      style={{
        background:
          "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(40,131,251,0.20), transparent 70%), radial-gradient(ellipse 60% 45% at 50% 72%, rgba(40,131,251,0.12), transparent 70%), linear-gradient(180deg, #e9f2ff 0%, #f3f8ff 55%, #ffffff 100%)",
      }}
    >
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
              {card.captioned ? null : <HeroCardOverlay card={card} />}
            </li>
          );
        })}
      </ul>

    </section>
  );
}
