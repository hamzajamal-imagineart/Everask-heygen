import { SectionHead } from "@/views/mag/SectionHead";
import { USE_CASES } from "./UseCases.constants";

/* "Who it's for" as EverAsk's z-fold: a 16:9 picture beside text, sides
   swapping each row, rows easing in as they scroll (.mag-zfold-row). */
export function UseCases() {
  return (
    <section id="use-cases" className="border-t border-[#ededed] py-20">
      <div className="mag-container">
        <SectionHead title="Who it's for" description="Topaz Photo was made for on-location photographers. Four places it earns its keep." />
        <ul className="flex flex-col gap-12 pt-12 md:gap-16">
          {USE_CASES.map((row, i) => (
            <li key={row.title} className="mag-zfold-row grid items-center gap-6 sm:grid-cols-2 sm:gap-12 md:gap-14 lg:gap-20">
              <div className={`w-full ${i % 2 === 0 ? "sm:order-2" : ""}`}>
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-fill-1">
                  <img src={row.image} alt={row.title} loading="lazy" className="absolute inset-0 size-full object-cover" />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-display text-[24px] font-medium leading-[1.1] tracking-[-0.015em] text-ink sm:text-[30px]">{row.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted sm:text-[16px]">{row.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
