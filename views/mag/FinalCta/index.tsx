import { Cta } from "../Cta";
import { magConfig } from "../config";
import { MAG_MEDIA } from "../media.constants";

export function FinalCta() {
  return (
    <section id="get-started" className="relative overflow-hidden bg-[#2a86f5] text-white">
      <img src={MAG_MEDIA.ctaBg} alt="" className="absolute inset-0 h-full w-full object-cover object-[50%_60%]" loading="lazy" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "linear-gradient(180deg, rgba(16,96,214,0.35) 0%, rgba(16,96,214,0.12) 45%, rgba(16,96,214,0) 70%)" }}
      />
      <div className="mag-container relative flex flex-col items-center py-32 md:py-[175px]">
        <h2 className="text-center text-[40px] leading-[1.2] font-medium [text-shadow:0_2px_24px_rgba(0,40,110,0.25)] md:text-[56px]">Be Magnific</h2>
        <div className="pt-8">
          <Cta href={magConfig.links.start} variant="light" className="[&_img]:invert" icon={MAG_MEDIA.iconArrowRight16} iconSize={16}>
            Start creating
          </Cta>
        </div>
      </div>
    </section>
  );
}
