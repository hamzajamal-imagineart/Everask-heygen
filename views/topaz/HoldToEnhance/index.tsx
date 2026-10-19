"use client";

import { useState, type KeyboardEvent } from "react";

/* Topaz's "hold to enhance": a tile shows the before; press and hold (or
   hold Space/Enter) and the after fades in. Label top-left, an eye badge
   bottom-left as the affordance. Both layers share the frame, so the ratio
   is the picture's own. */
export function HoldToEnhance({ before, after, label, ratio = 16 / 9, className = "" }: { before: string; after: string; label: string; ratio?: number; className?: string }) {
  const [on, setOn] = useState(false);
  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      setOn(e.type === "keydown");
    }
  };
  return (
    <button
      type="button"
      aria-pressed={on}
      aria-label={`Hold to see ${label} applied`}
      onPointerDown={() => setOn(true)}
      onPointerUp={() => setOn(false)}
      onPointerLeave={() => setOn(false)}
      onPointerCancel={() => setOn(false)}
      onKeyDown={onKey}
      onKeyUp={onKey}
      onContextMenu={(e) => e.preventDefault()}
      className={`group relative isolate block w-full cursor-pointer touch-none select-none overflow-hidden rounded-2xl bg-fill-1 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-action/50 ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={before} alt="" draggable={false} loading="lazy" className="absolute inset-0 size-full object-cover" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={after} alt="" draggable={false} loading="lazy" className={`absolute inset-0 size-full object-cover transition-opacity duration-300 ${on ? "opacity-100" : "opacity-0"}`} />
      <span className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/45 to-transparent" />
      <span className="absolute left-5 top-5 font-display text-[22px] font-medium leading-none tracking-[-0.02em] text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.4)] sm:text-[28px]">{label}</span>
      {/* The affordance (Hamza, 19 Oct: "a prominent indicator that these are clickable"): a white
          circle with a press icon in the middle of the tile, a slow pulsing ring around it and the
          instruction under it; it fades out while the after shows. */}
      <span className={`pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 ${on ? "opacity-0" : "opacity-100"}`}>
        <span className="relative grid size-16 place-items-center rounded-full bg-white text-ink shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-105 sm:size-20">
          <span aria-hidden className="absolute inset-0 -z-10 animate-ping rounded-full bg-white/40 motion-reduce:animate-none [animation-duration:2.2s]" />
          <svg viewBox="0 0 24 24" className="size-7 sm:size-8" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M9 11V5.5a1.5 1.5 0 0 1 3 0V11m0-3a1.5 1.5 0 0 1 3 0v3m0-1.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-1.2a6 6 0 0 1-4.6-2.2L4 15.5a1.6 1.6 0 0 1 2.4-2.1L9 16V8a1.5 1.5 0 0 1 0 0" />
          </svg>
        </span>
        <span className="rounded-pill bg-black/55 px-3.5 py-1.5 text-[13px] font-medium text-white backdrop-blur-md">Press and hold to enhance</span>
      </span>
      <span className={`absolute right-4 top-5 rounded-pill px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.06em] ${on ? "bg-white text-ink" : "bg-black/35 text-white"}`}>{on ? "After" : "Before"}</span>
    </button>
  );
}
