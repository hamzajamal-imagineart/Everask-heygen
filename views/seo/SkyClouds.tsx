"use client";

import { useEffect, useRef } from "react";

/* The sky world behind the hero: the still, with the cloud loop over it from
   640px up, without reduced motion or save-data (HeroVideo on EverAsk's site).
   The clip gets its source only then, so phones never download it. */
export function SkyClouds({ poster, posterSm, video }: { poster: string; posterSm: string; video: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const wide = window.matchMedia("(min-width: 640px)").matches;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saving = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (!wide || still || saving) return;
    el.src = video;
    el.play().catch(() => {});
  }, [video]);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        srcSet={`${posterSm} 960w, ${poster} 1920w`}
        sizes="100vw"
        alt=""
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover object-bottom"
      />
      <video ref={ref} muted loop playsInline preload="none" aria-hidden className="absolute inset-0 size-full object-cover object-bottom" />
    </>
  );
}
