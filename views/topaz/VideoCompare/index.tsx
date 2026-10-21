"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { useInView } from "@/lib/use-in-view";
import { posterFor } from "@/lib/responsive";

/* The before/after slider for a pair of clips: two muted loops kept in step
   (the before is re-synced to the after whenever it drifts), the before
   clipped to the left of the handle. Same handle, keys and idle sweep as
   HeroCompare. Both clips must share a size; the frame takes their ratio. */
/* `fill` (the Topaz Video hero, Hamza 20 Oct: "video in the background with a slider"): cover a parent
   frame (absolute, behind its copy, like HeroCompare) instead of keeping the clips' ratio, no pills. */
export function VideoCompare({ before, after, poster, ratio, label, initial = 50, handleY = 50, demo = true, fill = false }: { before: string; after: string; poster?: string; ratio?: number; label?: string; initial?: number; handleY?: number; demo?: boolean; fill?: boolean }) {
  const [pos, setPos] = useState(initial);
  const [gliding, setGliding] = useState(false);
  const frame = useRef<HTMLDivElement>(null);
  const a = useRef<HTMLVideoElement>(null);
  const b = useRef<HTMLVideoElement>(null);
  const dragging = useRef(false);
  const touched = useRef(false);
  const timers = useRef<number[]>([]);
  /* Performance (20 Oct): the clips are attached only once the slider comes within a screen of view,
     play while it is on screen and pause when it leaves, so a page of sliders downloads only what the
     visitor reaches. The poster shows until then. */
  const { near, visible } = useInView(frame);
  const live = useRef(false);
  useEffect(() => {
    live.current = visible;
  }, [visible]);

  // Keep the two clips together: play both when the after can play, nudge the before if it drifts.
  useEffect(() => {
    const A = a.current, B = b.current;
    if (!A || !B) return;
    const sync = () => {
      if (Math.abs(A.currentTime - B.currentTime) > 0.08) B.currentTime = A.currentTime;
    };
    const play = () => {
      if (!live.current) return;
      A.play().catch(() => {});
      B.play().catch(() => {});
    };
    A.addEventListener("timeupdate", sync);
    A.addEventListener("canplay", play);
    B.addEventListener("canplay", play);
    return () => {
      A.removeEventListener("timeupdate", sync);
      A.removeEventListener("canplay", play);
      B.removeEventListener("canplay", play);
    };
  }, []);

  useEffect(() => {
    const A = a.current, B = b.current;
    if (!A || !B || !near) return;
    if (visible) {
      A.play().catch(() => {});
      B.play().catch(() => {});
    } else {
      A.pause();
      B.pause();
    }
  }, [near, visible]);

  useEffect(() => {
    if (!demo) return;
    const el = frame.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const later = (fn: () => void, ms: number) => timers.current.push(window.setTimeout(fn, ms));
    let started = false;
    const sweep = () => {
      if (started || touched.current) return;
      started = true;
      later(() => {
        if (touched.current) return;
        // Jump to the right edge, glide left across the whole frame, hold, settle back.
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
      }, 1500);
    };
    const inView = () => {
      const r = el.getBoundingClientRect();
      return Math.min(r.bottom, window.innerHeight) - Math.max(r.top, 0) >= r.height * 0.5;
    };
    const io = "IntersectionObserver" in window ? new IntersectionObserver((es) => es.some((e) => e.isIntersecting) && (io?.disconnect(), sweep()), { threshold: 0.5 }) : null;
    io?.observe(el);
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
  const onPointerMove = (e: PointerEvent<HTMLButtonElement>) => dragging.current && moveTo(e.clientX);
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

  const glide = gliding ? "transition-[clip-path,left] duration-[var(--glide,1300ms)] ease-[cubic-bezier(0.22,1,0.36,1)]" : "";

  return (
    <div ref={frame} className={`select-none ${fill ? "absolute inset-0 -z-10" : "relative isolate overflow-hidden rounded-2xl bg-fill-1"}`} style={{ aspectRatio: fill ? undefined : ratio, "--glide": pos === 0 && gliding ? "1800ms" : "1300ms" } as React.CSSProperties}>
      <video ref={a} src={near ? after : undefined} poster={posterFor(poster)} loop muted playsInline preload={near ? "auto" : "none"} aria-hidden="true" className="absolute inset-0 size-full object-cover" />
      <video ref={b} src={near ? before : undefined} poster={posterFor(poster)} loop muted playsInline preload={near ? "auto" : "none"} aria-hidden="true" className={`absolute inset-0 size-full object-cover ${glide}`} style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} />
      <span aria-hidden className={`pointer-events-none absolute inset-y-0 w-px -translate-x-1/2 bg-white/80 ${glide}`} style={{ left: `${pos}%` }} />
      {label && (
        <>
          <span className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 to-transparent" />
          <span className="pointer-events-none absolute left-5 top-4 font-display text-[20px] font-medium leading-none tracking-[-0.02em] text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.4)] sm:text-[24px]">{label}</span>
        </>
      )}
      {!fill && (
        <>
          <span className="pointer-events-none absolute bottom-4 left-4 rounded-pill bg-black/45 kicker px-2.5 py-1 text-white backdrop-blur-md">Before</span>
          <span className="pointer-events-none absolute bottom-4 right-4 rounded-pill bg-white/90 kicker px-2.5 py-1 text-ink">After</span>
        </>
      )}
      <button
        type="button"
        role="slider"
        aria-label={`Compare ${label ?? "video"} before and after upscaling`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
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
