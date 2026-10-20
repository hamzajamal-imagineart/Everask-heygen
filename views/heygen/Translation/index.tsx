"use client";

import { useEffect, useRef } from "react";
import { useInView } from "@/lib/use-in-view";
import { FeatureCard } from "../FeatureCard";
import { ProofRow } from "../ProofRow";
import { SectionHead } from "../SectionHead";
import { heygenConfig } from "../config";
import { HG_MEDIA } from "../media.constants";
import { TRANSLATION_CARDS, TRANSLATION_LANGUAGES } from "./Translation.constants";
import { useTranslation } from "./use-translation";

export function Translation() {
  const { active, select, muted, toggleSound, video } = useTranslation();
  /* Performance (20 Oct): the clip is attached once the section is near view and paused off screen. */
  const box = useRef<HTMLDivElement>(null);
  const { near, visible } = useInView(box);
  useEffect(() => {
    const el = video.current;
    if (!el || !near) return;
    if (visible) el.play().catch(() => {});
    else el.pause();
  }, [near, visible, active, video]);

  return (
    <section id="translation" className="hg-container py-20 lg:py-[120px]">
      <SectionHead badge="Video Translation" icon="translation" title="Break language barriers in one click">
        AI video translation that preserves your tone, syncs your lips, and reaches global audiences across 175+ languages and
        dialects.
      </SectionHead>
      <div className="mt-[60px] rounded-[36px] bg-hg-cyan-soft p-3 md:p-4">
        <div className="card p-3">
          <div ref={box} className="tile relative">
            <video
              ref={video}
              key={TRANSLATION_LANGUAGES[active].video}
              src={near ? TRANSLATION_LANGUAGES[active].video : undefined}
              poster={HG_MEDIA.translationPoster}
              autoPlay={visible}
              loop
              muted={muted}
              playsInline
              preload={near ? "auto" : "none"}
              aria-label={`Presenter speaking ${TRANSLATION_LANGUAGES[active].label}`}
              className="aspect-video w-full object-cover"
            />
            <button
              type="button"
              onClick={toggleSound}
              aria-label={muted ? "Turn sound on" : "Turn sound off"}
              aria-pressed={!muted}
              className="glass absolute top-3 right-3 flex size-10 cursor-pointer items-center justify-center rounded-full text-ink"
            >
              <svg viewBox="0 0 18 18" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3.86 6.43H1.93c-.7 0-1.29.59-1.29 1.29v2.57c0 .7.59 1.28 1.29 1.28h1.93l5.02 3.62c.83.57 2.02-.03 2.05-1.04V3.86c.02-1.02-1.1-1.62-1.93-1.05L3.86 6.43Z" />
                {muted ? <path d="M17.36 7.07 13.5 10.93M13.5 7.07l3.86 3.86" /> : <path d="M13.6 6.2a4 4 0 0 1 0 5.6M15.6 4.4a6.6 6.6 0 0 1 0 9.2" />}
              </svg>
            </button>
            <div className="hg-scroll absolute inset-x-0 bottom-6 flex justify-start gap-3 overflow-x-auto px-3 md:justify-center">
              {TRANSLATION_LANGUAGES.map((language, index) => (
                <button
                  key={language.label}
                  type="button"
                  onClick={() => select(index)}
                  aria-pressed={index === active}
                  className={`glass flex shrink-0 cursor-pointer items-center gap-2 rounded-full py-1.5 pr-4 pl-1.5 text-[14px] font-medium ${index === active ? "!bg-white ring-2 ring-action" : ""}`}
                >
                  <img src={language.flag} loading="lazy" decoding="async" alt="" className="size-7 rounded-full object-cover" />
                  {language.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {TRANSLATION_CARDS.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
        <ProofRow tint="#edf3ff" button="#131318" buttonText="#fff" href={heygenConfig.links.start} />
      </div>
    </section>
  );
}
