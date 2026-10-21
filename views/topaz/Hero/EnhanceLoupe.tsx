"use client";

import { srcSetFor } from "@/lib/responsive";

import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";

/* Topaz's "before-after-enhance-box": the soft picture fills the frame and a
   square window follows the pointer, showing the enhanced picture inside it
   at 1.5× so the gain in detail is obvious. With a mouse the window follows
   the hover; on touch it shows while you press ("Tap and hold"). The frame
   keeps the pair's own ratio, nothing is cropped. */
/* `fill`: cover a parent frame (absolute inset-0) instead of keeping the pair's ratio; both layers are
   object-cover at the same size, so the loupe stays aligned. */
/* `video` (Topaz Video's hero, Hamza 20 Oct): before and after are clips. The before loops under
   the frame and the after, inside the loupe, follows its playhead; the loupe hides with visibility
   rather than unmounting so the after clip is not reloaded each time the pointer comes back. */
export function EnhanceLoupe({ before, after, ratio, scale = 1.5, fill = false, video = false, poster }: { before: string; after: string; ratio?: number; scale?: number; fill?: boolean; video?: boolean; poster?: string }) {
  const frame = useRef<HTMLDivElement>(null);
  const beforeClip = useRef<HTMLVideoElement>(null);
  const afterClip = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const b = beforeClip.current;
    if (!video || !b) return;
    const sync = () => {
      const a = afterClip.current;
      if (!a) return;
      if (Math.abs(a.currentTime - b.currentTime) > 0.1) a.currentTime = b.currentTime;
      if (a.paused && !b.paused) a.play().catch(() => {});
    };
    b.addEventListener("timeupdate", sync);
    return () => b.removeEventListener("timeupdate", sync);
  }, [video]);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [pressed, setPressed] = useState(false);
  const [touch, setTouch] = useState(false);
  /* Off the photo (or over the copy and button that sit above it) the loupe hides, so it never parks
     behind the CTA. Before the first move it rests in the centre as a hint. */
  const [away, setAway] = useState(false);

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
  const show = !away && (!touch || pressed);

  return (
    <div
      ref={frame}
      className={`touch-none select-none overflow-hidden ${fill ? "absolute inset-0 -z-10" : "relative isolate w-full rounded-[24px] bg-fill-1 sm:rounded-[36px]"}`}
      style={{ aspectRatio: fill ? undefined : ratio, cursor: "none" }}
      onPointerMove={(e) => {
        setTouch(e.pointerType === "touch");
        setAway(false);
        track(e);
      }}
      onPointerDown={(e) => {
        setTouch(e.pointerType === "touch");
        setAway(false);
        setPressed(true);
        track(e);
      }}
      onPointerUp={() => setPressed(false)}
      onPointerCancel={() => setPressed(false)}
      onPointerLeave={() => {
        setPressed(false);
        setPos(null);
        setAway(true);
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      {video ? (
        <video ref={beforeClip} src={before} poster={poster} autoPlay loop muted playsInline preload="auto" aria-hidden="true" className="absolute inset-0 size-full object-cover" />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={before} srcSet={srcSetFor(before)} sizes="100vw" alt="" draggable={false} fetchPriority="high" className="absolute inset-0 size-full object-cover" />
      )}
      {W > 0 && (
        <div
          aria-hidden
          className="pointer-events-none absolute overflow-hidden rounded-[18px] shadow-[0_0_0_2px_rgba(255,255,255,0.9),0_18px_50px_rgba(0,0,0,0.35)]"
          style={{ width: s, height: s, left: p.x - s / 2, top: p.y - s / 2, visibility: show ? "visible" : "hidden" }}
        >
          {video ? (
            <video
              ref={afterClip}
              src={after}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute max-w-none object-cover"
              style={{ width: W * scale, height: H * scale, left: -(p.x * scale) + s / 2, top: -(p.y * scale) + s / 2 }}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={after}
              srcSet={srcSetFor(after)}
              sizes="150vw"
              alt=""
              draggable={false}
              className="absolute max-w-none object-cover"
              style={{ width: W * scale, height: H * scale, left: -(p.x * scale) + s / 2, top: -(p.y * scale) + s / 2 }}
            />
          )}
          <span className="absolute left-3 top-3 rounded-pill bg-white px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-ink">After · {scale}×</span>
          {/* Centre mark: the cursor is hidden over the photo, so this ring shows where the pointer is. */}
          <span className="absolute left-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-white shadow-[0_0_0_1px_rgba(0,0,0,0.18),0_2px_8px_rgba(0,0,0,0.25)]" />
          <span className="absolute left-1/2 top-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.18)]" />
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
