"use client";

import { useCallback, useRef, useState, type PointerEvent } from "react";

/* Topaz's "before-after-enhance-box": the soft picture fills the frame and a
   square window follows the pointer, showing the enhanced picture inside it
   at 1.5× so the gain in detail is obvious. With a mouse the window follows
   the hover; on touch it shows while you press ("Tap and hold"). The frame
   keeps the pair's own ratio, nothing is cropped. */
export function EnhanceLoupe({ before, after, ratio, scale = 1.5 }: { before: string; after: string; ratio: number; scale?: number }) {
  const frame = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [pressed, setPressed] = useState(false);
  const [touch, setTouch] = useState(false);

  const track = useCallback((e: PointerEvent<HTMLDivElement>) => {
    const el = frame.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({ x: Math.min(r.width, Math.max(0, e.clientX - r.left)), y: Math.min(r.height, Math.max(0, e.clientY - r.top)) });
  }, []);

  const size = (el: HTMLDivElement | null) => (el ? Math.min(480, el.getBoundingClientRect().width * 0.42) : 320);
  const W = frame.current?.getBoundingClientRect().width ?? 0;
  const H = frame.current?.getBoundingClientRect().height ?? 0;
  const s = size(frame.current);
  const p = pos ?? { x: W / 2, y: H / 2 };
  const show = !touch || pressed;

  return (
    <div
      ref={frame}
      className="relative isolate w-full touch-none select-none overflow-hidden rounded-[24px] bg-fill-1 sm:rounded-[36px]"
      style={{ aspectRatio: ratio, cursor: "none" }}
      onPointerMove={(e) => {
        setTouch(e.pointerType === "touch");
        track(e);
      }}
      onPointerDown={(e) => {
        setTouch(e.pointerType === "touch");
        setPressed(true);
        track(e);
      }}
      onPointerUp={() => setPressed(false)}
      onPointerCancel={() => setPressed(false)}
      onPointerLeave={() => {
        setPressed(false);
        setPos(null);
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={before} alt="" draggable={false} fetchPriority="high" className="absolute inset-0 size-full object-cover" />
      {show && W > 0 && (
        <div
          aria-hidden
          className="pointer-events-none absolute overflow-hidden rounded-[18px] shadow-[0_0_0_2px_rgba(255,255,255,0.9),0_18px_50px_rgba(0,0,0,0.35)]"
          style={{ width: s, height: s, left: p.x - s / 2, top: p.y - s / 2 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={after}
            alt=""
            draggable={false}
            className="absolute max-w-none"
            style={{ width: W * scale, height: H * scale, left: -(p.x * scale) + s / 2, top: -(p.y * scale) + s / 2 }}
          />
          <span className="absolute left-3 top-3 rounded-pill bg-white px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-ink">After · {scale}×</span>
        </div>
      )}
      <span className="pointer-events-none absolute left-5 top-5 inline-flex items-center gap-2 rounded-pill bg-white px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-ink">
        <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 2v20M2 12h20m-5-5 5 5-5 5M7 7l-5 5 5 5" />
        </svg>
        {touch ? "Tap and hold" : "Move to enhance"}
      </span>
      <span className="sr-only">Before and after: move the pointer over the photo, or press and hold, to see the enhanced version.</span>
    </div>
  );
}
