"use client";

import { useEffect, useState } from "react";
import { HERO_TICKER, HERO_TICKER_INTERVAL } from "../Hero.constants";

/** Returns an ever-increasing tick; the ticker maps it onto HERO_TICKER with a modulo so the strip never jumps. */
export function useHeroTicker() {
  const [tick, setTick] = useState(HERO_TICKER.indexOf("Stay on brand"));

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setTick((current) => current + 1), HERO_TICKER_INTERVAL);
    return () => window.clearInterval(id);
  }, []);

  return { tick };
}
