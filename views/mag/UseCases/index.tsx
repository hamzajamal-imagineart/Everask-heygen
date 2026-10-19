import { Cta } from "../Cta";
import { magConfig } from "../config";
import { MAG_MEDIA } from "../media.constants";
import { SectionHead } from "../SectionHead";
import { USE_CASES } from "./UseCases.constants";

/* Use cases as a bento in EverAsk's register (Hamza, 19 Oct): a white section,
   four media panels on a three-column grid (wide-narrow, narrow-wide), the
   caption in ink and muted type under each panel as on EverAsk's example
   grids. The panel is the image holder only: Hamza's above-the-clouds photo
   with the use case's picture inset on a soft shadow; the type never sits on
   the sky. */
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
        <ul className="grid gap-x-4 gap-y-10 pt-12 md:grid-cols-3">
          {USE_CASES.map((card) => (
            <li key={card.title} className={`group flex flex-col gap-4 ${card.wide ? "md:col-span-2" : ""}`}>
              <div className="relative isolate overflow-hidden rounded-[24px] bg-[#1c8bff] p-5 sm:p-7">
                <img src={MAG_MEDIA.panelSky} alt="" loading="lazy" className="absolute inset-0 -z-[1] size-full object-cover object-[50%_40%]" />
                <div className="relative h-[240px] overflow-hidden rounded-xl shadow-[0_18px_40px_rgba(0,40,110,0.22)] md:h-[300px]">
                  <img
                    src={card.image}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </div>
              </div>
              <div className="flex items-baseline justify-between gap-6 px-1">
                <div>
                  <h3 className="font-display text-[20px] font-medium leading-[1.25] tracking-[-0.02em] text-ink">{card.title}</h3>
                  <p className={`mt-1.5 text-[15px] leading-relaxed text-black/50 ${card.wide ? "max-w-md" : ""}`}>{card.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
