"use client";

import { HERO_ACCENT, HERO_TICKER, HERO_TICKER_FADE, HERO_TICKER_LINE } from "../Hero.constants";
import { useHeroTicker } from "./use-hero-ticker";

const COUNT = HERO_TICKER.length;
/** Lines shown above and below the active one. */
const REACH = Math.floor(COUNT / 2);

const labelAt = (k: number) => HERO_TICKER[((k % COUNT) + COUNT) % COUNT];

export function HeroTicker() {
  const { tick } = useHeroTicker();
  // One extra line on each side, fully transparent, so lines fade in from below and out at the top.
  const slots = Array.from({ length: REACH * 2 + 3 }, (_, i) => tick - REACH - 1 + i);

  return (
    <div className="relative hidden lg:block" style={{ height: HERO_TICKER_LINE * COUNT, width: 340 }} aria-label="What you can do">
      <svg
        aria-hidden="true"
        viewBox="0 0 16 18"
        className="absolute -left-9 size-[18px]"
        style={{ top: HERO_TICKER_LINE * REACH + (HERO_TICKER_LINE - 18) / 2, fill: HERO_ACCENT }}
      >
        <path d="M2 1.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 2 1.5Z" />
      </svg>
      <ul className="m-0 list-none p-0">
        {slots.map((k) => {
          const distance = k - tick;
          const fade = Math.abs(distance) > REACH ? 0 : HERO_TICKER_FADE[Math.min(Math.abs(distance), HERO_TICKER_FADE.length - 1)];
          return (
            <li
              key={k}
              aria-current={distance === 0 ? "true" : undefined}
              aria-hidden={distance === 0 ? undefined : true}
              className="absolute left-0 flex items-center font-display text-[clamp(24px,2.3vw,32px)] font-medium tracking-[-0.02em] whitespace-nowrap text-white transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ height: HERO_TICKER_LINE, top: 0, transform: `translateY(${(distance + REACH) * HERO_TICKER_LINE}px)`, opacity: fade }}
            >
              {labelAt(k)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
