import { CtaButton } from "../CtaButton";
import { heygenConfig } from "../config";
import { CTA_GRADIENT } from "./FinalCta.constants";

export function FinalCta() {
  return (
    <section className="relative bg-black pt-0">
      <div className="relative overflow-hidden rounded-b-[40px]" style={{ backgroundImage: CTA_GRADIENT }}>
        <div className="hg-container relative flex flex-col items-center py-[100px] text-center"><div className="max-w-[500px]">
          <h2 className="hg-h2 text-[40px] text-white md:text-[56px]">Start creating videos with AI</h2>
          <p className="pt-5 pb-[30px] text-[16px] leading-[1.6] text-white/80">
            See how businesses like yours scale content creation and drive growth with the most innovative AI video.
          </p>
          <CtaButton href={heygenConfig.links.start} label="Get started for free" background="#ffffff" color="#0046e7" size="lg" />
        </div></div>
      </div>
    </section>
  );
}
