import type { CSSProperties } from "react";
import { EVERASK_BRAND } from "@/views/mag/Lockup/Lockup.constants";
import { TOPAZ_MEDIA } from "../media.constants";
import { EnhanceLoupe } from "./EnhanceLoupe";
import { VideoCompare } from "../VideoCompare";
import { HERO_HEADLINE } from "./Hero.constants";
import { TopazWordmark } from "./TopazWordmark";

const rise = (ms: number) => ({ className: "animate-sky-rise motion-reduce:animate-none", style: { animationDelay: `${ms}ms` } as CSSProperties });

/* The Magnific hero's layout (Hamza, 19 Oct: "make the hero layout similar
   to magnific hero"): a tall rounded frame under the header and breadcrumb,
   Topaz's parrot pair filling it as a draggable before/after (it was an enhance loupe until 20 Oct), the
   copy centred over a neutral dark overlay: the Topaz wordmark + "inside
   EverAsk", their line, a white button. The copy block lets pointer events
   through so the slider handle stays draggable everywhere but on the button. */
/* `kind="video"` (the Topaz Video page) runs the same slider on Topaz Video's own hero clips
   (face.mp4 before, the Rhea result face-rhea1.mp4 after), both looping in step. */
export function Hero({ kind, subhead, cta }: { kind: "image" | "video"; subhead: string; cta: { href: string; label: string } }) {
  return (
    <>
      <section id="top" className="px-2 sm:px-3">
        <div className="relative isolate flex min-h-[max(640px,calc(100svh-140px))] flex-col overflow-hidden rounded-[24px] bg-[#2f4a6b] sm:rounded-[36px]">
          {/* Topaz Image keeps the magnifying loupe (Hamza, 20 Oct: "the topaz image should have the
              magnifying glass as before"); Topaz Video uses the draggable clip slider ("video in the
              background with a slider"). */}
          {kind === "image" ? (
            <EnhanceLoupe fill before={TOPAZ_MEDIA.tz.clarity.before} after={TOPAZ_MEDIA.tz.clarity.after} />
          ) : (
            <VideoCompare fill before={TOPAZ_MEDIA.tz.videoFace.before} after={TOPAZ_MEDIA.tz.videoFace.after} poster={TOPAZ_MEDIA.tz.videoFace.poster} handleY={80} />
          )}
          <span aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-black/35" />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.22) 35%, rgba(0,0,0,0.22) 65%, rgba(0,0,0,0) 100%)" }}
          />
          <div className="pointer-events-none container-page flex flex-1 flex-col items-center justify-center py-[clamp(48px,6vw,88px)] text-center">
            <h1
              {...rise(80)}
              className="flex max-w-full flex-nowrap items-center justify-center gap-x-[0.3em] whitespace-nowrap font-display font-medium leading-none tracking-[-0.03em] text-white [text-shadow:0_2px_24px_rgba(0,30,80,0.55)]"
              style={{ fontSize: "clamp(22px, 3.9vw, 58px)" }}
            >
              <TopazWordmark className="h-[0.92em] w-auto shrink-0 drop-shadow-[0_2px_18px_rgba(0,40,110,0.3)]" />
              <span>
                {HERO_HEADLINE} <span className="font-serif text-[1.08em] font-normal italic tracking-[-0.01em]">{EVERASK_BRAND.name}</span>
              </span>
            </h1>
            <p {...rise(160)}>
              <span className="mx-auto mt-5 block max-w-2xl text-[17px] leading-relaxed text-white [text-shadow:0_1px_16px_rgba(0,30,80,0.6)]">{subhead}</span>
            </p>
            <div {...rise(240)} className="pointer-events-auto mt-8">
              <a href={cta.href} className="btn-primary !bg-white !text-ink hover:!bg-white/90">
                {cta.label}
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="hero-end" />
    </>
  );
}
