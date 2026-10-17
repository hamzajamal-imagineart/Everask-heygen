import { CtaButton } from "../CtaButton";
import { heygenConfig } from "../config";
import { HG_MEDIA } from "../media.constants";

export function FinalCta() {
  return (
    <section className="relative bg-black pt-0">
      <div
        className="relative overflow-hidden rounded-b-[40px] bg-[#2a86f5] bg-cover bg-[position:50%_60%]"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(16,96,214,0.35) 0%, rgba(16,96,214,0.12) 45%, rgba(16,96,214,0) 70%), url(${HG_MEDIA.heroSky})` }}
      >
        <div className="hg-container relative flex flex-col items-center pt-[100px] pb-[160px] text-center"><div className="max-w-[500px]">
          <h2 className="hg-h2 text-[40px] text-white [text-shadow:0_2px_24px_rgba(0,40,110,0.25)] md:text-[56px]">Start creating videos with AI</h2>
          <p className="pt-5 pb-[30px] text-[16px] leading-[1.6] text-white/80">
            See how businesses like yours scale content creation and drive growth with the most innovative AI video.
          </p>
          <CtaButton href={heygenConfig.links.start} label="Get started for free" background="#ffffff" color="#0046e7" size="lg" />
        </div></div>
      </div>
    </section>
  );
}
