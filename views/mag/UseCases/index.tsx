import { srcSetFor } from "@/lib/responsive";
import { Cta } from "../Cta";
import { magConfig } from "../config";
import { MAG_MEDIA } from "../media.constants";
import { SectionHead } from "../SectionHead";
import { USE_CASES, USE_CASE_RATIO, USE_CASE_VIDEO } from "./UseCases.constants";

/* The upscaler advantages as a 2×2 grid of whole images (Hamza, 19 Oct: "the
   images' aspect ratio is very important"): every frame is the source's own
   4:3, nothing cropped, the caption in ink and muted type under each, as on
   EverAsk's example grids. */
export function UseCases() {
  const cards = [...USE_CASES, USE_CASE_VIDEO];
  return (
    <section id="use-cases" className="border-t border-[#ededed] py-20">
      <div className="mag-container">
        <SectionHead
          title="Enhance detail, preserve intent"
          description="Sharper results from the same image or clip. Magnific's upscalers keep your structure, composition and lighting intact and bring out the detail."
          action={
            <Cta href={magConfig.links.start} size="sm" icon={MAG_MEDIA.iconArrowRight13}>
              Start upscaling
            </Cta>
          }
        />
        <ul className="grid gap-x-4 gap-y-10 pt-12 md:grid-cols-2">
          {cards.map((card) => (
            <li key={card.title} className="group flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-[24px] bg-fill-1" style={{ aspectRatio: USE_CASE_RATIO }}>
                <img
                  src={card.image}
                  srcSet={srcSetFor(card.image)}
                  sizes="(min-width: 640px) 50vw, 100vw"
                  alt={card.title}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02] motion-reduce:transition-none"
                />
              </div>
              <div className="px-1">
                <h3 className="font-display text-[20px] font-medium leading-[1.25] tracking-[-0.02em] text-ink">{card.title}</h3>
                <p className="mt-1.5 max-w-lg text-[15px] leading-relaxed text-black/50">{card.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
