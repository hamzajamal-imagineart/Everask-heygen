"use client";

import { useCallback, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

/* The hero's before/after comparison as a real slider (Hamza, 19 Oct: "make
   them draggable too"): the sharp "after" fills the frame, the low-res
   "before" is clipped to the left of the handle, and the white divider and
   round handle follow the pointer. Drag the handle (pointer capture, so the
   drag keeps going past it), or focus it and use the arrow keys. The handle
   sits low in the frame, under the copy. */
export function HeroCompare({ before, after, initial = 50, handleY = 80 }: { before: string; after: string; initial?: number; handleY?: number }) {
  const [pos, setPos] = useState(initial);
  const frame = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const moveTo = useCallback((clientX: number) => {
    const el = frame.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  const onPointerDown = (e: PointerEvent<HTMLButtonElement>) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    moveTo(e.clientX);
  };
  const onPointerMove = (e: PointerEvent<HTMLButtonElement>) => {
    if (dragging.current) moveTo(e.clientX);
  };
  const onPointerUp = (e: PointerEvent<HTMLButtonElement>) => {
    dragging.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };
  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const step = e.shiftKey ? 10 : 2;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") setPos((p) => Math.max(0, p - step));
    else if (e.key === "ArrowRight" || e.key === "ArrowUp") setPos((p) => Math.min(100, p + step));
    else if (e.key === "Home") setPos(0);
    else if (e.key === "End") setPos(100);
    else return;
    e.preventDefault();
  };

  return (
    <div ref={frame} className="absolute inset-0 -z-10 select-none">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={after} alt="" fetchPriority="high" draggable={false} className="absolute inset-0 size-full object-cover object-[60%_50%]" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={before}
        alt=""
        draggable={false}
        className="absolute inset-0 size-full object-cover object-[60%_50%]"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <span aria-hidden className="pointer-events-none absolute inset-y-0 w-[3px] -translate-x-1/2 bg-white" style={{ left: `${pos}%` }} />
      <button
        type="button"
        role="slider"
        aria-label="Compare before and after upscaling"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        aria-valuetext={`${Math.round(pos)}% before`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={onKeyDown}
        className="absolute z-30 grid size-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize touch-none place-items-center rounded-full bg-white text-ink shadow-[0_4px_16px_rgba(0,0,0,0.35)] transition-transform duration-150 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60 active:scale-95 sm:size-14"
        style={{ left: `${pos}%`, top: `${handleY}%` }}
      >
        <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden>
          <path d="M9.5 7 4 12l5.5 5V7Zm5 0v10L20 12l-5.5-5Z" />
        </svg>
      </button>
    </div>
  );
}
