import { FeatureCard } from "../FeatureCard";
import { ProofRow } from "../ProofRow";
import { SectionHead } from "../SectionHead";
import { heygenConfig } from "../config";
import { STUDIO_CARDS } from "./AiStudio.constants";
import { StudioApp } from "./StudioApp";

export function AiStudio() {
  return (
    <section id="studio" className="hg-container py-20 lg:py-[120px]">
      <SectionHead badge="AI Studio" icon="studio" title="All your creative needs in one environment">
        The text-based editor makes AI video generation as
        easy as writing a document. Control tone, delivery, gestures, and emotion in one seamless platform built for human-first
        storytelling.
      </SectionHead>
      <div className="mt-[60px] rounded-[36px] bg-hg-green-soft p-3 md:p-4">
        <div className="card overflow-hidden p-3"><div className="tile ring-1 ring-black/[0.06]">
          <StudioApp />
        </div></div>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {STUDIO_CARDS.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
        <ProofRow tint="#bfd5ff" button="#131318" buttonText="#fff" href={heygenConfig.links.start} />
      </div>
    </section>
  );
}
