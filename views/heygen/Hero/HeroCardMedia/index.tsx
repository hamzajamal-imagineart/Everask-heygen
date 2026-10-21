"use client";

import { srcSetFor } from "@/lib/responsive";
import { useRef, useState, type PointerEvent } from "react";
import type { HeroCard } from "../Hero.types";
import { HeroCardOverlay } from "../HeroCardOverlay";

/* A hero tile (Hamza, 21 Oct: "when user hovers, the videos play"): the still stays as the poster and
   the clip (Kling 2.6 Pro image-to-video from that still, 5 s, muted) is only fetched once the tile is
   first hovered, so the eight clips cost nothing on load. Mouse: plays on enter, rewinds on leave.
   Touch and pen have no hover, so a tap toggles it. */
export function HeroCardMedia({ card }: { card: HeroCard }) {
  const video = useRef<HTMLVideoElement>(null);
  const [armed, setArmed] = useState(false);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    setArmed(true);
    // On the first hover the source attaches in this render; play once React has committed it.
    requestAnimationFrame(() => video.current?.play().catch(() => {}));
  };
  const stop = () => {
    const v = video.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <div
      className="absolute inset-0"
      onPointerEnter={(e: PointerEvent) => e.pointerType === "mouse" && play()}
      onPointerLeave={(e: PointerEvent) => e.pointerType === "mouse" && stop()}
      onPointerUp={(e: PointerEvent) => e.pointerType !== "mouse" && (playing ? stop() : play())}
    >
      <img src={card.image} srcSet={srcSetFor(card.image)} sizes="(min-width: 768px) 240px, 40vw" decoding="async" alt={`${card.title}, ${card.subtitle}`} className="size-full object-cover" style={{ objectPosition: card.focus }} />
      <video
        ref={video}
        src={armed ? card.video : undefined}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        onPlaying={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className={`absolute inset-0 size-full object-cover transition-opacity duration-300 ${playing ? "opacity-100" : "opacity-0"}`}
        style={{ objectPosition: card.focus }}
      />
      <HeroCardOverlay card={card} playing={playing} />
    </div>
  );
}
