import { Cta } from "../Cta";
import { magConfig } from "../config";
import { MAG_MEDIA } from "../media.constants";
import { SectionHead } from "../SectionHead";
import { USE_CASES } from "./UseCases.constants";

/* Use cases as a bento (Hamza, 19 Oct; the EverAsk feature pages' grids): four
   cards on a three-column grid, wide-narrow then narrow-wide. Each card is a
   sky panel (Hamza's above-the-clouds photo) with the title and line in white
   on the blue, and the use case's picture inset below, lifted on a shadow. */
export function UseCases() {
  return (
    <section id="use-cases" className="border-t border-[#ededed] py-20">
      <div className="mag-container">
        <SectionHead
          title="From product shot to viral phenomenon"
          description="Global on-brand campaigns, product shots, and top-tier filmmaking. Everything a brand needs to show up at the highest level, in every format, every time."
          action={
            <Cta href={magConfig.links.start} size="sm" icon={MAG_MEDIA.iconArrowRight13}>
              Start creating
            </Cta>
          }
        />
        <ul className="grid gap-4 pt-12 md:grid-cols-3">
          {USE_CASES.map((card) => (
            <li
              key={card.title}
              className={`relative isolate flex flex-col gap-6 overflow-hidden rounded-[24px] bg-[#1c8bff] p-6 text-white sm:p-7 ${card.wide ? "md:col-span-2" : ""}`}
            >
              <img src={MAG_MEDIA.panelSky} alt="" loading="lazy" className="absolute inset-0 -z-[1] size-full object-cover object-[50%_40%]" />
              <div className="[text-shadow:0_1px_12px_rgba(0,40,110,0.25)]">
                <h3 className="font-display text-[24px] font-medium leading-[1.1] tracking-[-0.015em]">{card.title}</h3>
                <p className={`mt-2 text-[15px] leading-relaxed text-white/85 ${card.wide ? "max-w-md" : ""}`}>{card.body}</p>
              </div>
              <div className="relative mt-auto h-[240px] overflow-hidden rounded-xl shadow-[0_18px_40px_rgba(0,40,110,0.22)] md:h-[280px]">
                <img src={card.image} alt="" loading="lazy" className="absolute inset-0 size-full object-cover" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
