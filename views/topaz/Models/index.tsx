"use client";

import { useState } from "react";
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
          {/* The list (Hamza, 20 Oct: "make this panel good in design"), in the manner of EverAsk's own
              pickers (CinemaEdit): no boxed panel and no check marks. From lg a hairline index: every
              model's name in muted ink, the picked one in ink with a thin azure rule on its left and
              Topaz's one-liner under it; a model's variants sit under that as a quiet row of text
              toggles. On phones the names are a scrolling row of text tabs with an azure underline. */}
          <ul className="-mx-4 flex gap-5 overflow-x-auto border-b border-[#ededed] px-4 [scrollbar-width:none] lg:col-span-4 lg:mx-0 lg:block lg:self-start lg:border-b-0 lg:px-0" aria-label="Models">
            {models.map((x, i) => {
              const on = i === m;
              return (
                <li key={x.name} className="relative shrink-0 lg:border-t lg:border-[#ededed] lg:last:border-b">
                  <span aria-hidden className={`absolute inset-x-0 bottom-0 h-[2px] bg-action transition-opacity lg:inset-y-0 lg:right-auto lg:left-0 lg:h-auto lg:w-[2px] ${on ? "opacity-100" : "opacity-0"}`} />
                  <button
                    type="button"
                    onClick={() => pick(i)}
                    aria-pressed={on}
                    className={`block w-full cursor-pointer whitespace-nowrap py-3 text-left transition-colors lg:whitespace-normal lg:py-4 lg:pl-5 ${on ? "text-ink" : "text-black/40 hover:text-ink"}`}
                  >
                    <span className="block font-display text-[16px] font-medium leading-snug tracking-[-0.015em] lg:text-[18px]">{x.name}</span>
                    {on && <span className="mt-1 hidden max-w-[34ch] text-[14px] leading-snug text-black/50 lg:block">{x.line}</span>}
                  </button>
                  {on && model.variants.length > 1 && (
                    <div className="-mt-1 hidden flex-wrap gap-x-4 gap-y-1.5 pb-4 pl-5 lg:flex" aria-label={`${x.name} variants`}>
                      {model.variants.map((y, j) => (
                        <button
                          key={y.label}
                          type="button"
                          onClick={() => setV(j)}
                          aria-pressed={j === v}
                          className={`cursor-pointer border-b pb-0.5 text-[13px] transition-colors ${j === v ? "border-ink text-ink" : "border-transparent text-black/40 hover:text-ink"}`}
                        >
                          {short(y.label, x.name)}
                        </button>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="min-w-0 lg:col-span-8">
            <Stage key={`${m}-${v}`} media={variant.media} />
            {model.variants.length > 1 && (
              <div className="mt-4 flex gap-4 overflow-x-auto [scrollbar-width:none] lg:hidden" aria-label={`${model.name} variants`}>
                {model.variants.map((y, j) => (
                  <button
                    key={y.label}
                    type="button"
                    onClick={() => setV(j)}
                    aria-pressed={j === v}
                    className={`shrink-0 cursor-pointer border-b pb-0.5 text-[13px] ${j === v ? "border-ink text-ink" : "border-transparent text-black/40"}`}
                  >
                    {short(y.label, model.name)}
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

/* Every example fills a frame cut to its own ratio, full column width, with no grey surround and
   nothing cropped (Hamza, 20 Oct: "make the video cover full height", then "similarly the image should
   take the full height and width"). The portrait image examples were re-cut as 4:3 regions so no
   frame runs taller than the page. */
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
    <div className="relative isolate w-full overflow-hidden rounded-[24px] bg-fill-1 sm:rounded-[32px]" style={{ aspectRatio: r }}>
      {media.kind === "image" ? (
        <HeroCompare before={media.before} after={media.after} handleY={50} demoDelay={600} />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={media.src} alt="Before and after, side by side" className="absolute inset-0 size-full object-cover" />
      )}
      <Pills />
    </div>
  );
}

/* A variant's label without the repeated family name ("Dione DV" under Dione reads "DV"); kept whole
   when what is left would start with a number ("Gaia 2 (Animation)"). */
function short(label: string, family: string) {
  const rest = label.startsWith(`${family} `) ? label.slice(family.length + 1) : label;
  return /^\d/.test(rest) ? label : rest;
}

function Pills() {
  return (
    <>
      <span className="pointer-events-none absolute bottom-4 left-4 rounded-pill bg-black/45 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-white backdrop-blur-md">Before</span>
      <span className="pointer-events-none absolute bottom-4 right-4 rounded-pill bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-ink">After</span>
    </>
  );
}
