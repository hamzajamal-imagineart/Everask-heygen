"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

/* The hero's before/after comparison as a real slider (Hamza, 19 Oct: "make
   them draggable too"): the sharp "after" fills the frame, the low-res
   "before" is clipped to the left of the handle, and the white divider and
   round handle follow the pointer. Drag the handle (pointer capture, so the
   drag keeps going past it), or focus it and use the arrow keys. The handle
   sits low in the frame, under the copy.

   Idle demo (Hamza, 19 Oct): `demoDelay` ms (1.5 s by default, 1 s on the
   Magnific hero) after the slider scrolls into view it
   jumps to the right edge and glides left across the whole frame (Hamza:
   "from right to left"), showing the whole enhanced picture, holds, and
   comes back to where it started, on timers with a CSS transition (no animation
   frames, so it also runs in throttled tabs). Any drag or key press ends
   it. Off under reduced motion. */
export function HeroCompare({ before, after, initial = 50, handleY = 80, demo = true, demoDelay = 1500, priority = false }: { before: string; after: string; initial?: number; handleY?: number; demo?: boolean; /** The page hero: load eagerly at high priority (performance pass, 20 Oct); every other use loads lazily. */ priority?: boolean; /** ms after the slider is in view before the sweep starts */ demoDelay?: number }) {
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
        // Jump to the right edge (all "before"), then glide left across the whole frame to 0
        // (all "after"), hold, and settle back to the start.
        setGliding(false);
        setPos(100);
        later(() => {
          if (touched.current) return;
          setGliding(true);
          setPos(0);
          later(() => {
            if (touched.current) return;
            setPos(initial);
            later(() => setGliding(false), 1300);
          }, 1800 + 900);
        }, 60);
      }, demoDelay);
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
  }, [demo, demoDelay, initial]);

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
    <div ref={frame} className="absolute inset-0 -z-10 select-none" style={{ "--glide": pos === 0 && gliding ? "1800ms" : "1300ms" } as React.CSSProperties}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={after} alt="" fetchPriority={priority ? "high" : "auto"} loading={priority ? "eager" : "lazy"} decoding="async" draggable={false} className="absolute inset-0 size-full object-cover object-[60%_50%]" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={before}
        alt=""
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        draggable={false}
        className={`absolute inset-0 size-full object-cover object-[60%_50%] ${gliding ? "transition-[clip-path] duration-[var(--glide,1300ms)] ease-[cubic-bezier(0.22,1,0.36,1)]" : ""}`}
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <span aria-hidden className={`pointer-events-none absolute inset-y-0 w-px -translate-x-1/2 bg-white/80 ${gliding ? "transition-[left] duration-[var(--glide,1300ms)] ease-[cubic-bezier(0.22,1,0.36,1)]" : ""}`} style={{ left: `${pos}%` }} />
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
        className={`absolute z-30 grid size-9 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize touch-none place-items-center rounded-full bg-white/95 text-ink/70 shadow-[0_2px_10px_rgba(0,0,0,0.18)] ring-1 ring-black/10 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95 ${gliding ? "transition-[left,transform] duration-[var(--glide,1300ms)] ease-[cubic-bezier(0.22,1,0.36,1)]" : "transition-transform duration-150"}`}
        style={{ left: `${pos}%`, top: `${handleY}%` }}
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="m9.5 8.5-3.5 3.5 3.5 3.5m5-7 3.5 3.5-3.5 3.5" />
        </svg>
      </button>
    </div>
  );
}
