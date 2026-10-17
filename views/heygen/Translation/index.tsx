"use client";

import { FeatureCard } from "../FeatureCard";
import { ProofRow } from "../ProofRow";
import { SectionHead } from "../SectionHead";
import { heygenConfig } from "../config";
import { HG_MEDIA } from "../media.constants";
import { TRANSLATION_CARDS, TRANSLATION_LANGUAGES } from "./Translation.constants";
import { useTranslation } from "./use-translation";

export function Translation() {
  const { active, select } = useTranslation();

  return (
    <section id="translation" className="hg-container py-20 lg:py-[120px]">
      <SectionHead badge="Video Translation" icon={HG_MEDIA.badgeTranslation} tint="#edf3ff" title="Break language barriers in one click">
        AI video translation that preserves your tone, syncs your lips, and reaches global audiences across 175+ languages and
        dialects.
      </SectionHead>
      <div className="mt-[60px] rounded-[36px] bg-hg-cyan-soft p-3 md:p-4">
        <div className="card p-3">
          <div className="tile relative">
            <img src={HG_MEDIA.translationVideo} alt="" className="aspect-video w-full object-cover" />
            <span className="glass absolute top-3 right-3 flex size-10 items-center justify-center rounded-full">
              <img src={HG_MEDIA.iconUnmute} alt="" className="size-[22px]" />
            </span>
            <div className="hg-scroll absolute inset-x-0 bottom-6 flex justify-start gap-3 overflow-x-auto px-3 md:justify-center">
              {TRANSLATION_LANGUAGES.map((language, index) => (
                <button
                  key={language.label}
                  type="button"
                  onClick={() => select(index)}
                  aria-pressed={index === active}
                  className={`glass flex shrink-0 cursor-pointer items-center gap-2 rounded-full py-1.5 pr-4 pl-1.5 text-[14px] font-medium ${index === active ? "!bg-white ring-2 ring-action" : ""}`}
                >
                  <img src={language.flag} alt="" className="size-7 rounded-full object-cover" />
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
