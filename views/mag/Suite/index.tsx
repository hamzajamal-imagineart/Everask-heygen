import { SectionHead } from "../SectionHead";
import { SUITE_ROWS } from "./Suite.constants";

/* Magnific's suite as EverAsk's z-fold (components/landing/ZFold.tsx): rows
   of a 16:9 clip beside text, the clip swapping sides each row, each row
   easing up as it scrolls into view (styles.css, .mag-zfold-row). On phones
   the clip sits above its text. */
export function Suite() {
  return (
    <section id="suite" className="border-t border-[#ededed] py-20">
      <div className="mag-container">
        <SectionHead title="The full Magnific suite, inside EverAsk" description="Upscale, generate, cut out, reframe and relight. Magnific's tools, one prompt away in EverAsk." />
        <ul className="mx-auto flex max-w-[1100px] flex-col gap-8 pt-12">
          {SUITE_ROWS.map((row, i) => (
            <li
              key={row.title}
              className={`mag-zfold-row grid items-center gap-4 sm:gap-10 lg:gap-14 ${
                i % 2 ? "sm:grid-cols-[minmax(0,1fr)_minmax(0,560px)]" : "sm:grid-cols-[minmax(0,560px)_minmax(0,1fr)]"
              }`}
            >
              <div className={`w-full ${i % 2 ? "sm:order-2" : ""}`}>
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-fill-1">
                  <video
                    src={row.video}
                    aria-label={row.title}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 size-full object-cover"
                  />
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
