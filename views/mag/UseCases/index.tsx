import { Cta } from "../Cta";
import { magConfig } from "../config";
import { MAG_MEDIA } from "../media.constants";
import { USE_CASE_WIDE, USE_CASES } from "./UseCases.constants";

export function UseCases() {
  return (
    <section id="use-cases" className="py-20 md:py-[105px]">
      <div className="mag-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
          <div className="max-w-[672px]">
            <h2 className="mag-h2">From product shot to viral phenomenon</h2>
            <p className="mag-lede pt-4">
              Global on-brand campaigns, product shots, and top-tier filmmaking. Everything a brand needs to show up at the highest
              level, in every format, every time.
            </p>
          </div>
          <Cta href={magConfig.links.start} size="md" icon={MAG_MEDIA.iconArrowRight13}>
            Start creating
          </Cta>
        </div>
        <ul className="grid gap-4 pt-14 md:grid-cols-3">
          {USE_CASES.map((useCase) => (
            <li key={useCase.title} className="relative aspect-[395/526] overflow-hidden rounded-xl text-white">
              <img src={useCase.image} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-6 bottom-6">
                <h3 className="text-2xl leading-[1.5] font-medium">{useCase.title}</h3>
                <p className="pt-2 text-base leading-[1.6] text-white/70">{useCase.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="relative mt-4 aspect-[1216/405] min-h-[280px] overflow-hidden rounded-xl text-white">
          <img src={USE_CASE_WIDE.image} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" aria-hidden="true" />
          <div className="absolute inset-x-6 bottom-6">
            <h3 className="text-2xl leading-[1.5] font-medium">{USE_CASE_WIDE.title}</h3>
            <p className="max-w-[512px] pt-2 text-base leading-[1.6] text-white/70">{USE_CASE_WIDE.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
