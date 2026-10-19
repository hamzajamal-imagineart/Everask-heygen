"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

/* The hero's before/after comparison as a real slider (Hamza, 19 Oct: "make
   them draggable too"): the sharp "after" fills the frame, the low-res
   "before" is clipped to the left of the handle, and the white divider and
   round handle follow the pointer. Drag the handle (pointer capture, so the
   drag keeps going past it), or focus it and use the arrow keys. The handle
   sits low in the frame, under the copy.

   Idle demo (Hamza, 19 Oct): 1.5 s after the slider scrolls into view it
   glides to the edge, showing the whole enhanced picture, holds, and comes
   back to where it started, on timers with a CSS transition (no animation
   frames, so it also runs in throttled tabs). Any drag or key press ends
   it. Off under reduced motion. */
export function HeroCompare({ before, after, initial = 50, handleY = 80, demo = true }: { before: string; after: string; initial?: number; handleY?: number; demo?: boolean }) {
  const [pos, setPos] = useState(initial);
  const frame = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const touched = useRef(false);
  const timers = useRef<number[]>([]);
  // While the demo moves the handle, the layers transition instead of jumping.
  const [gliding, setGliding] = useState(false);

  useEffect(() => {
    if (!demo) return;
    const el = frame.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const later = (fn: () => void, ms: number) => timers.current.push(window.setTimeout(fn, ms));
    let started = false;
    const sweep = () => {
      if (started || touched.current) return;
      started = true;
      // Wait 1.5 s, glide to 0 (the whole enhanced picture) in 1.4 s, hold 0.9 s, glide back in 1.2 s.
      later(() => {
        if (touched.current) return;
        setGliding(true);
        setPos(0);
        later(() => {
          if (touched.current) return;
          setPos(initial);
          later(() => setGliding(false), 1300);
        }, 1400 + 900);
      }, 1500);
    };
    const inView = () => {
      const r = el.getBoundingClientRect();
      const visible = Math.min(r.bottom, window.innerHeight) - Math.max(r.top, 0);
      return visible >= r.height * 0.5;
    };
    const io =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              if (entries.some((e) => e.isIntersecting)) {
                io?.disconnect();
                sweep();
              }
            },
            { threshold: 0.5 },
          )
        : null;
    io?.observe(el);
    // Where the observer never reports (throttled or background tabs), fall back to a geometry check.
    const poll = window.setInterval(() => {
      if (started || touched.current) return window.clearInterval(poll);
      if (inView()) {
        window.clearInterval(poll);
        io?.disconnect();
        sweep();
      }
    }, 800);
    return () => {
      io?.disconnect();
      window.clearInterval(poll);
      timers.current.forEach((t) => window.clearTimeout(t));
      timers.current = [];
    };
  }, [demo, initial]);

  const stopDemo = () => {
    touched.current = true;
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
    setGliding(false);
  };

  const moveTo = useCallback((clientX: number) => {
    const el = frame.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  const onPointerDown = (e: PointerEvent<HTMLButtonElement>) => {
    stopDemo();
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
    stopDemo();
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
        className={`absolute inset-0 size-full object-cover object-[60%_50%] ${gliding ? "transition-[clip-path] duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)]" : ""}`}
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <span aria-hidden className={`pointer-events-none absolute inset-y-0 w-[3px] -translate-x-1/2 bg-white ${gliding ? "transition-[left] duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)]" : ""}`} style={{ left: `${pos}%` }} />
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
        className={`absolute z-30 grid size-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize touch-none place-items-center rounded-full bg-white text-ink shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60 active:scale-95 sm:size-12 ${gliding ? "transition-[left,transform] duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)]" : "transition-transform duration-150"}`}
        style={{ left: `${pos}%`, top: `${handleY}%` }}
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="m9 8-4 4 4 4m6-8 4 4-4 4" />
        </svg>
      </button>
    </div>
  );
}
