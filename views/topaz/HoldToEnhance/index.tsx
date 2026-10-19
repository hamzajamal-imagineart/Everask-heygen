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
      <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-pill bg-white/15 px-3 py-1.5 text-[12px] font-medium text-white backdrop-blur-md">
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        {on ? "Enhanced" : "Hold to enhance"}
      </span>
      <span className={`absolute right-4 top-5 rounded-pill px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.06em] ${on ? "bg-white text-ink" : "bg-black/35 text-white"}`}>{on ? "After" : "Before"}</span>
    </button>
  );
}
