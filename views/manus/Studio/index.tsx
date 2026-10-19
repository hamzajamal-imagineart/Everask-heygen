import { FEATURE_GRAINY, FEATURE_LIGHT, FEATURE_SURFACE } from "@/views/mag/Features/Features.constants";
import { SectionHead } from "@/views/mag/SectionHead";
import { manusConfig } from "../config";

/* Manus 2.0's three parts as EverAsk's feature tiles: a two-tone title, the figure or line under it. */
const ITEMS: { title: [string, string]; line: string; tone: "azure" | "sky" | "navy" }[] = [
  { title: ["Cascade", "the agent harness"], line: "28% less time, 32% less cost per task in Manus's tested configuration.", tone: "azure" },
  { title: ["Video Editor", "in Manus Studio"], line: "The first cut in minutes. The timeline, clips and audio stay yours to change.", tone: "sky" },
  { title: ["Game Dev", "in Manus Studio"], line: "Playable from the first session. Publish to a link, add multiplayer in a few clicks.", tone: "navy" },
];

export function Studio() {
  return (
    <section id="studio" className="border-t border-[#ededed] py-20">
      <div className="mag-container">
        <SectionHead title="Introducing Manus 2.0" description="Not a version update: a new architecture, new products, and new capabilities." />
        <ul className="grid gap-2 pt-10 sm:gap-3 lg:grid-cols-3">
          {ITEMS.map((it) => {
            const light = FEATURE_LIGHT.includes(it.tone);
            return (
              <li key={it.title[0]} className={`group relative isolate flex flex-col justify-between overflow-hidden rounded-2xl p-6 sm:h-[260px] sm:rounded-[24px] sm:p-7 ${FEATURE_SURFACE[it.tone]} ${light ? "light-surface" : ""}`}>
                {FEATURE_GRAINY.includes(it.tone) && <span aria-hidden className="grain pointer-events-none absolute inset-0 -z-[1] opacity-[0.28] mix-blend-overlay" />}
                <h3 className="font-display text-[24px] font-medium leading-[1.12] tracking-[-0.02em] sm:text-[28px]">
                  <span className={`block ${light ? "text-ink" : "text-white"}`}>{it.title[0]}</span>
                  <span className={`block ${light ? "text-ink/40" : "text-white/60"}`}>{it.title[1]}</span>
                </h3>
                <p className={`mt-6 max-w-[300px] text-[14px] leading-relaxed ${light ? "text-ink/70" : "text-white/80"}`}>{it.line}</p>
                <a href={manusConfig.links.start} className={`mt-5 inline-flex items-center gap-2.5 text-[12px] font-medium uppercase tracking-[0.04em] ${light ? "text-ink" : "text-white"}`}>
                  <span className={`grid size-7 place-items-center rounded-full transition-transform duration-300 ease-out group-hover:rotate-45 ${light ? "bg-ink text-white" : "bg-white text-[#0088ff]"}`}>
                    <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
                  </span>
                  Try it in EverAsk
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
