"use client";

import { useState } from "react";
import { SectionHead } from "@/views/mag/SectionHead";
import { HeroCompare } from "../Hero/HeroCompare";
import { magConfig } from "../config";
import { MAG_MODES } from "./modes";

/* Magnific's two upscalers as an editorial showcase (Hamza, 20 Oct: the sidebar picker "doesn't feel a
   mature design"): one segmented Creative / Precision switch, a full-width before/after of the picked
   preset, the presets as a filmstrip of thumbnails under it, then a two-tone line (preset name, its use
   case muted), one paragraph and the CTA beside Magnific's capabilities as a quiet hairline list. Copy is
   Magnific's (docs.magnific.com); the examples are generated illustrations (see modes.ts). */
export function Modes() {
  const [m, setM] = useState(0);
  const [v, setV] = useState(0);
  const mode = MAG_MODES[m];
  const variant = mode.variants[v];
  const media = variant.media.kind === "image" ? variant.media : null;
  const thumb = (after: string) => after.replace("-after.jpg", "-thumb.jpg");

  return (
    <section id="modes" className="border-t border-[#ededed] py-20 lg:py-28">
      <div className="mag-container">
        <SectionHead
          title={
            <>
              Creative or Precision
              <br />
              upscaling
            </>
          }
          description="Use Upscaler Precision for faithful super-resolution without hallucinations, best for logos, UI, text, and product photos. Choose Creative when you want to add or infer detail and stylize results via prompts."
        />

        {/* Switch, example, filmstrip and details share one width, sized so the first three fit a laptop screen. */}
        <div
          className="mx-auto mt-10"
          style={{ width: "min(100%, calc((100svh - 300px) * 16 / 9))" }}
        >
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
            <div className="seg" role="tablist" aria-label="Upscaler">
              {MAG_MODES.map((x, i) => (
                <button
                  key={x.name}
                  type="button"
                  role="tab"
                  aria-selected={i === m}
                  onClick={() => {
                    setM(i);
                    setV(0);
                  }}
                  className={`seg-item cursor-pointer px-5 ${i === m ? "seg-item-on" : ""}`}
                >
                  {x.name}
                </button>
              ))}
            </div>
            <p className="text-black/50">{mode.line}</p>
          </div>

          {media && (
            <div
              className="relative isolate mt-5 overflow-hidden rounded-[24px] bg-fill-1 sm:rounded-[32px]"
              style={{ aspectRatio: media.ratio }}
            >
              <HeroCompare
                key={`${m}-${v}`}
                before={media.before}
                after={media.after}
                handleY={50}
                demoDelay={500}
              />
              <span className="kicker pointer-events-none absolute top-4 left-4 rounded-pill bg-black/40 px-3 py-1.5 text-white backdrop-blur-md sm:top-5 sm:left-5">
                {mode.name} · {variant.label}
              </span>
              <span className="kicker pointer-events-none absolute bottom-4 left-4 rounded-pill bg-black/45 px-2.5 py-1 text-white backdrop-blur-md sm:bottom-5 sm:left-5">
                Before
              </span>
              <span className="kicker pointer-events-none absolute right-4 bottom-4 rounded-pill bg-white/90 px-2.5 py-1 text-ink sm:right-5 sm:bottom-5">
                After
              </span>
            </div>
          )}

          {/* The presets as a filmstrip: pick by picture. */}
          <ul
            className={`-mx-1 mt-3 grid grid-flow-col gap-3 overflow-x-auto p-1 pb-2 [scrollbar-width:none] ${mode.variants.length < 5 ? "auto-cols-[minmax(96px,180px)] justify-start" : "auto-cols-[minmax(96px,1fr)]"}`}
            aria-label={`${mode.name} presets`}
          >
            {mode.variants.map((y, j) => {
              const on = j === v;
              const src = y.media.kind === "image" ? thumb(y.media.after) : "";
              return (
                <li key={y.label}>
                  <button
                    type="button"
                    onClick={() => setV(j)}
                    aria-pressed={on}
                    className="group block w-full cursor-pointer text-left"
                  >
                    <span
                      className={`block overflow-hidden rounded-xl ring-offset-2 transition-[box-shadow,opacity] ${on ? "ring-2 ring-ink" : "opacity-70 ring-0 group-hover:opacity-100"}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt=""
                        loading="lazy"
                        className="aspect-video w-full object-cover"
                      />
                    </span>
                    <span
                      className={`mt-2 block text-[14px] leading-snug text-balance transition-colors ${on ? "font-medium text-ink" : "text-black/50 group-hover:text-ink"}`}
                    >
                      {y.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mt-12 grid gap-10 border-t border-[#ededed] pt-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h3 className="t-section font-display font-medium tracking-[-0.025em] text-ink">
                {variant.label}.{" "}
                <span className="text-black/40">{variant.useCase}.</span>
              </h3>
              <p className="mt-4 text-black/55">{mode.overview}</p>
              <a href={magConfig.links.start} className="btn-primary mt-7">
                Try {mode.name}
              </a>
            </div>
            <ul className="grid content-start gap-x-10 sm:grid-cols-2 lg:col-span-7">
              {mode.caps.map((c) => (
                <li
                  key={c}
                  className="t-item border-t border-[#ededed] py-4 !font-normal"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
