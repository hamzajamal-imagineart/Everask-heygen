"use client";

import { useState, type CSSProperties } from "react";
import { HeroCompare } from "@/views/mag/Hero/HeroCompare";
import { SectionHead } from "@/views/mag/SectionHead";
import { VideoCompare } from "../VideoCompare";
import type { ModelMedia, TopazModel } from "./Models.types";

/* Topaz's model picker as a page section (Hamza, 20 Oct: "highlight the list"): their models in
   the order of their own dropdown on the left, each with its one-line description, and the picked
   model's own before/after example on the right with Topaz's overview and key capabilities under
   it. A model with variants (Dione, Theia, Artemis, Gaia) lists them under its row once picked.
   Every example keeps its own ratio, nothing crops (see Stage). */
export function Models({ id, title, description, models, cta }: { id: string; title: string; description: string; models: TopazModel[]; cta: { href: string; label: string } }) {
  const [m, setM] = useState(0);
  const [v, setV] = useState(0);
  const model = models[m];
  const variant = model.variants[v] ?? model.variants[0];
  const useCase = variant.useCase ?? model.useCase;
  const heading = model.variants.length > 1 ? variant.label : model.name;
  /* The first sentence of Topaz's overview. */
  const lead = model.overview.split(/(?<=\.)\s/)[0];
  /* "Best for" first, then their capabilities; an even count so the two-column grid closes. */
  const all = [...(useCase ? [{ text: useCase, label: "Best for" }] : []), ...model.caps.map((c) => ({ text: c.replace(/\.$/, ""), label: "" }))];
  const facts = all.slice(0, all.length - (all.length % 2) || 2);
  const pick = (i: number) => {
    setM(i);
    setV(0);
  };

  return (
    <section id={id} className="border-t border-[#ededed] py-20 lg:py-28">
      <div className="mag-container">
        <SectionHead title={title} description={description} />
        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* The list: a horizontal row of names on phones, Topaz's dropdown as a panel from lg. */}
          <ul className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:col-span-4 lg:mx-0 lg:block lg:self-start lg:rounded-[24px] lg:border lg:border-[#ededed] lg:p-2 lg:pb-2" aria-label="Models">
            {models.map((x, i) => {
              const on = i === m;
              return (
                <li key={x.name} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => pick(i)}
                    aria-pressed={on}
                    className={`flex w-full cursor-pointer items-start justify-between gap-4 rounded-full px-4 py-2 text-left transition-colors lg:rounded-2xl lg:py-3 ${on ? "bg-ink text-white lg:bg-fill-1 lg:text-ink" : "bg-fill-1 text-ink hover:bg-fill-2 lg:bg-transparent lg:hover:bg-fill-1"}`}
                  >
                    <span className="min-w-0">
                      <span className="block whitespace-nowrap text-[15px] font-medium leading-snug lg:text-[16px]">{x.name}</span>
                      <span className="mt-0.5 hidden text-[13px] leading-snug text-black/50 lg:block">{x.line}</span>
                    </span>
                    {on && (
                      <span aria-hidden className="mt-0.5 hidden size-5 shrink-0 place-items-center rounded-md bg-ink text-white lg:grid">
                        <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                          <path d="m3.5 8.5 3 3 6-7" />
                        </svg>
                      </span>
                    )}
                  </button>
                  {on && model.variants.length > 1 && (
                    <ul className="mt-1 mb-2 hidden space-y-0.5 pl-4 lg:block" aria-label={`${x.name} variants`}>
                      {model.variants.map((y, j) => (
                        <li key={y.label}>
                          <button
                            type="button"
                            onClick={() => setV(j)}
                            aria-pressed={j === v}
                            className={`flex w-full cursor-pointer items-center gap-2.5 rounded-xl px-3 py-1.5 text-left text-[14px] transition-colors ${j === v ? "font-medium text-ink" : "text-black/50 hover:text-ink"}`}
                          >
                            <span className={`size-1.5 shrink-0 rounded-full ${j === v ? "bg-action" : "bg-black/20"}`} />
                            {y.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="min-w-0 lg:col-span-8">
            <Stage key={`${m}-${v}`} media={variant.media} />
            {model.variants.length > 1 && (
              <div className="mt-4 flex gap-2 overflow-x-auto lg:hidden" aria-label={`${model.name} variants`}>
                {model.variants.map((y, j) => (
                  <button
                    key={y.label}
                    type="button"
                    onClick={() => setV(j)}
                    aria-pressed={j === v}
                    className={`shrink-0 cursor-pointer rounded-full border px-3 py-1.5 text-[13px] ${j === v ? "border-ink text-ink" : "border-[#e2e2e2] text-black/50"}`}
                  >
                    {y.label}
                  </button>
                ))}
              </div>
            )}
            {/* The model in EverAsk's "at a glance" register (everask-landing-pages ShowcaseSpecs): a
                two-tone line (name in ink, Topaz's one-liner muted), one sentence of their overview and
                the button beside it, then the facts as plain type in a hairline grid. No pills, no
                bullets (Hamza, 20 Oct: the pill + grey paragraph + bullet list "looks so AI generated"). */}
            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
              <div className="max-w-xl">
                <h3 className="font-display text-[clamp(22px,2.2vw,30px)] font-medium leading-[1.12] tracking-[-0.025em] text-ink">
                  {heading}. <span className="text-black/40">{model.line}.</span>
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-black/55">{lead}</p>
              </div>
              <a href={cta.href} className="btn-primary shrink-0 self-start sm:self-auto">
                Try {model.name}
              </a>
            </div>
            <dl className="mt-8 grid border-l border-t border-[#ededed] sm:grid-cols-2">
              {facts.map((f) => (
                <div key={f.text} className="border-b border-r border-[#ededed] p-5 sm:p-6">
                  {f.label && <dt className="mb-1.5 text-[13px] text-black/45">{f.label}</dt>}
                  <dd className="text-[16px] font-medium leading-snug tracking-[-0.01em] text-ink">{f.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Images: a fixed-height frame, the example centred at its own ratio, as wide as the frame allows.
   Videos (Hamza, 20 Oct: "a lot of grey space at top and bottom, make the video cover full height"):
   the frame is the clip itself, full column width at the clip's own ratio, so there is no grey
   surround and nothing is cropped. */
function Stage({ media }: { media: ModelMedia }) {
  const r = media.ratio;
  if (media.kind === "video") {
    return (
      <div className="overflow-hidden rounded-[24px] sm:rounded-[32px]">
        <VideoCompare before={media.before} after={media.after} poster={media.poster} ratio={r} />
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center rounded-[24px] bg-fill-1 p-3 [--stage-h:min(86vw,440px)] sm:rounded-[32px] sm:p-4 lg:[--stage-h:min(46vw,600px)]" style={{ height: "var(--stage-h)" }}>
      <div className="relative" style={{ aspectRatio: r, width: `min(100%, calc((var(--stage-h) - 2rem) * ${r}))` } as CSSProperties}>
        {media.kind === "image" ? (
          <div className="relative isolate size-full overflow-hidden rounded-2xl">
            <HeroCompare before={media.before} after={media.after} handleY={50} demoDelay={600} />
            <Pills />
          </div>
        ) : (
          <div className="relative size-full overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={media.src} alt="Before and after, side by side" className="size-full object-cover" />
            <Pills />
          </div>
        )}
      </div>
    </div>
  );
}

function Pills() {
  return (
    <>
      <span className="pointer-events-none absolute bottom-4 left-4 rounded-pill bg-black/45 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-white backdrop-blur-md">Before</span>
      <span className="pointer-events-none absolute bottom-4 right-4 rounded-pill bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-ink">After</span>
    </>
  );
}
