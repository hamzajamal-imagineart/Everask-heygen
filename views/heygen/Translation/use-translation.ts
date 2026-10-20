"use client";

import { useEffect, useRef, useState } from "react";

/* The language tabs drive one <video>: picking a tab swaps the clip and plays it from the start.
   Clips start muted (autoplay rules); the speaker button turns the sound on, and it stays on
   across tabs once the visitor has asked for it. */
export function useTranslation() {
  const [active, setActive] = useState(0);
  const [muted, setMuted] = useState(true);
  const video = useRef<HTMLVideoElement>(null);
  const first = useRef(true);

  useEffect(() => {
    const el = video.current;
    if (!el) return;
    if (first.current) {
      first.current = false;
      return;
    }
    el.currentTime = 0;
    el.play().catch(() => {});
  }, [active]);

  const select = (index: number) => setActive(index);

  const toggleSound = () => {
    const el = video.current;
    const next = !muted;
    setMuted(next);
    if (el) {
      el.muted = next;
      if (!next) el.play().catch(() => {});
    }
  };

  return { active, select, muted, toggleSound, video };
}
