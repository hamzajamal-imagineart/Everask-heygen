"use client";

import { useEffect, useRef } from "react";

type OriginalsVideoProps = { src: string; poster: string; active: boolean };

/** Plays only while its slide is active, so off-screen slides don't spend bandwidth or CPU. */
export function OriginalsVideo({ src, poster, active }: OriginalsVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (active && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [active]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload={active ? "auto" : "none"}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}
