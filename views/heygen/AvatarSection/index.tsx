import { CtaButton } from "../CtaButton";
import { FeatureCard } from "../FeatureCard";
import { ProofRow } from "../ProofRow";
import { SectionHead } from "../SectionHead";
import { heygenConfig } from "../config";
import { HG_MEDIA } from "../media.constants";
import { AVATAR_BOTTOM_CARDS, AVATAR_TOP_CARDS } from "./AvatarSection.constants";

export function AvatarSection() {
  return (
    <section id="avatar" className="hg-container py-20 lg:py-[120px]">
      <SectionHead
        badge="AI Avatar Generator"
        icon={HG_MEDIA.iconUser}
        tint="#edf3ff"
        title="The most lifelike avatars in AI video"
        action={<CtaButton href={heygenConfig.links.start} label="Get started for free" background="#131318" color="#fff" />}
      >
        Character consistency is what separates a useful avatar from a gimmick. Avatar V delivers it across every angle, every
        expression, and every video you create.
      </SectionHead>
      <div className="mt-[60px] rounded-[36px] bg-hg-cyan-soft p-3 md:p-4">
        <div className="grid gap-5 md:grid-cols-2">
          {AVATAR_TOP_CARDS.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {AVATAR_BOTTOM_CARDS.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
        <ProofRow tint="#edf3ff" button="#131318" buttonText="#fff" href={heygenConfig.links.start} />
      </div>
    </section>
  );
}
