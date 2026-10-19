import { magConfig } from "../config";
import { SectionHead } from "../SectionHead";
import { FEATURES, FEATURE_GRAINY, FEATURE_LIGHT, FEATURE_SURFACE, FEATURE_TONES } from "./Features.constants";

/* Ported from EverAsk's components/landing/Features.tsx: a grid of equal
   cards, a two-tone title top-left, a Learn more arrow bottom-left, fine grain
   on the darker blues, a sheen on hover. On phones each card is a row. */
export function Features() {
  return (
    <section id="tools" className="border-t border-[#ededed] py-20">
      <div className="mag-container">
        <SectionHead title="Pick a model, start upscaling" description="Classic, Magnific and Creative for images. Magnific and Topaz for video. All inside EverAsk." />
        <ul className="grid gap-2 pt-10 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const tone = FEATURE_TONES[i % FEATURE_TONES.length];
            const light = FEATURE_LIGHT.includes(tone);
            const [a, b] = feature.split;
            return (
              <li
                key={feature.title}
                className={`group relative isolate flex items-center gap-3 overflow-hidden rounded-2xl p-3 pr-4 sm:block sm:h-[220px] sm:rounded-[24px] sm:p-7 ${FEATURE_SURFACE[tone]} ${light ? "light-surface" : ""}`}
              >
                {FEATURE_GRAINY.includes(tone) && <span aria-hidden className="grain pointer-events-none absolute inset-0 -z-[1] opacity-[0.28] mix-blend-overlay" />}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-[1] bg-[radial-gradient(70%_70%_at_85%_90%,rgb(255_255_255/0.35),transparent_70%)] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 motion-reduce:transition-none"
                />
                <h3 className="relative z-[1] min-w-0 flex-1 font-display text-[17px] font-medium leading-[1.15] tracking-[-0.02em] sm:max-w-[80%] sm:text-[26px] sm:leading-[1.12]">
                  <span className={`block ${light ? "text-ink" : "text-white"}`}>{a}</span>
                  <span className={`block ${light ? "text-ink/40" : "text-white/60"}`}>{b}</span>
                </h3>
                <a
                  href={magConfig.links.start}
                  className={`z-[1] inline-flex shrink-0 items-center gap-2.5 text-[12px] font-medium uppercase tracking-[0.04em] sm:absolute sm:bottom-7 sm:left-7 ${light ? "text-ink" : "text-white"}`}
                >
                  <span className={`grid size-7 place-items-center rounded-full transition-transform duration-300 ease-out group-hover:rotate-45 ${light ? "bg-ink text-white" : "bg-white text-[#0088ff]"}`}>
                    <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </span>
                  <span className="max-sm:sr-only">Learn more</span>
                  <span className="sr-only"> about {feature.title.toLowerCase()}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
