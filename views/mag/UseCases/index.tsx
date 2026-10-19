import { Cta } from "../Cta";
import { magConfig } from "../config";
import { MAG_MEDIA } from "../media.constants";
import { SectionHead } from "../SectionHead";
import { USE_CASES } from "./UseCases.constants";

/* Ported from EverAsk's components/landing/ZFold.tsx: rows of media beside
   text, the media swapping sides each row, each row easing up as it scrolls
   into view (styles.css, .mag-zfold-row). On phones the media sits above. */
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
        <ul className="mx-auto flex max-w-[1100px] flex-col gap-8 pt-12">
          {USE_CASES.map((row, i) => (
            <li
              key={row.title}
              className={`mag-zfold-row grid items-center gap-4 sm:gap-10 lg:gap-14 ${
                i % 2 ? "sm:grid-cols-[minmax(0,1fr)_minmax(0,560px)]" : "sm:grid-cols-[minmax(0,560px)_minmax(0,1fr)]"
              }`}
            >
              <div className={`w-full ${i % 2 ? "sm:order-2" : ""}`}>
                {/* The media sits in a sky-gradient panel, as EverAsk's "Who it's for" rows do: a soft
                    light bottom-right easing to blue, the picture inset and lifted on a shadow. */}
                <div className="relative isolate overflow-hidden rounded-[24px] bg-[radial-gradient(110%_120%_at_92%_100%,#f2f9ff_0%,#bfe0ff_55%,#8ec5ff_100%)] p-5 sm:p-7">
                  <span aria-hidden className="grain pointer-events-none absolute inset-0 -z-[1] opacity-20 mix-blend-overlay" />
                  <div className="relative overflow-hidden rounded-xl shadow-[0_18px_40px_rgba(0,40,110,0.18)]" style={{ aspectRatio: row.ratio }}>
                    <img src={row.image} alt="" loading="lazy" className="absolute inset-0 size-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="max-w-[480px]">
                <h3 className="font-display text-[24px] font-medium leading-[1.1] tracking-[-0.015em] text-ink sm:text-[30px]">{row.title}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-muted sm:text-[17px]">{row.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
