"use client";

import type { CSSProperties } from "react";
import { FeatureCard } from "../FeatureCard";
import { ProofRow } from "../ProofRow";
import { SectionHead } from "../SectionHead";
import { heygenConfig } from "../config";
import { AGENT_CARDS, AGENT_SLIDES } from "./VideoAgent.constants";
import { useVideoAgent } from "./use-video-agent";

export function VideoAgent() {
  const { index, count, go, prev, next } = useVideoAgent();

  return (
    <section id="video-agent" className="hg-container py-20 lg:py-[120px]">
      <SectionHead badge="Video Agent" icon="agent" tint="#f3f1eb" title="From idea to finished video with just a prompt">
        Type your idea. Click generate. Get a share-ready video faster than you can think. No camera, editing software, or
        production skills needed. Download it, edit it, and share it instantly.
      </SectionHead>
      <div className="mt-[60px] rounded-[36px] bg-hg-pink-soft p-3 md:p-4">
        <div className="relative px-0 pt-2.5 pb-5 [--hg-slide-w:calc(100vw-80px)] md:px-5 md:[--hg-slide-w:789px]">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ "--slide": index, transform: "translateX(calc(50% - var(--hg-slide-w) / 2 - 20px - var(--slide) * (var(--hg-slide-w) + 20px)))" } as CSSProperties}
            >
              {AGENT_SLIDES.map((slide, slideIndex) => (
                <div key={`${slide}-${slideIndex}`} className="shrink-0 pl-5">
                  <div className={`h-[260px] w-[var(--hg-slide-w)] overflow-hidden rounded-[24px] bg-[#e8f3ff] transition-opacity duration-500 md:h-[444px] ${slideIndex === index ? "" : "opacity-40"}`}>
                    <img src={slide} alt="" className="size-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <div className="glass flex items-center gap-2 rounded-full px-4 py-2">
              {Array.from({ length: count }, (_, dot) => (
                <button
                  key={dot}
                  type="button"
                  aria-label={`Go to slide ${dot + 1}`}
                  onClick={() => go(dot)}
                  className={`h-2 cursor-pointer rounded-full border-none transition-all ${dot === index ? "w-5 bg-ink" : "w-2 bg-ink/20"}`}
                />
              ))}
            </div>
          </div>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prev}
            className="rail-btn absolute top-1/2 left-5 -translate-y-1/2 cursor-pointer rotate-180"
          >
            <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={next}
            className="rail-btn absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer"
          >
            <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
          </button>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {AGENT_CARDS.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
        <ProofRow tint="#f3f1eb" button="#131318" buttonText="#fff" href={heygenConfig.links.start} />
      </div>
    </section>
  );
}
