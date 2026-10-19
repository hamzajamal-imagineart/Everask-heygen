import type { CSSProperties } from "react";
import { EVERASK_BRAND } from "@/views/mag/Lockup/Lockup.constants";
import { topazConfig } from "../config";
import { HERO_HEADLINE, HERO_SUBHEAD, HERO_TONE } from "./Hero.constants";
import { HeroTools } from "./HeroTools";
import { TopazWordmark } from "./TopazWordmark";

const rise = (ms: number) => ({ className: "animate-sky-rise motion-reduce:animate-none", style: { animationDelay: `${ms}ms` } as CSSProperties });

/* EverAsk's sky-frame hero (as on /magnific): a rounded frame under the header
   and breadcrumb, the copy centred over a draggable before/after, here with
   Topaz's tool chips choosing which comparison plays. */
export function Hero() {
  return (
    <>
      <section id="top" className="px-2 sm:px-3">
        <div
          className="relative isolate flex min-h-[max(680px,calc(100svh-140px))] flex-col overflow-hidden rounded-[24px] sm:rounded-[36px]"
          style={{ backgroundColor: HERO_TONE }}
        >
          <span aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-black/35" />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.22) 35%, rgba(0,0,0,0.22) 65%, rgba(0,0,0,0) 100%)" }}
          />
          <div className="container-page flex flex-1 flex-col items-center justify-center py-[clamp(48px,6vw,88px)] text-center">
            <HeroTools>
              <h1
                {...rise(80)}
                className="flex max-w-full flex-nowrap items-center justify-center gap-x-[0.3em] whitespace-nowrap font-display font-medium leading-none tracking-[-0.03em] text-white [text-shadow:0_2px_24px_rgba(0,30,80,0.55)]"
                style={{ fontSize: "clamp(22px, 3.9vw, 58px)" }}
              >
                {/* Topaz's wordmark sits on a 21-unit box with the letters filling about 14 of them. */}
                <TopazWordmark className="h-[0.92em] w-auto shrink-0 drop-shadow-[0_2px_18px_rgba(0,40,110,0.3)]" />
                <span>
                  {HERO_HEADLINE} <span className="font-serif text-[1.08em] font-normal italic tracking-[-0.01em]">{EVERASK_BRAND.name}</span>
                </span>
              </h1>
              <p {...rise(160)}>
                <span className="mx-auto mt-5 block max-w-2xl text-[17px] leading-relaxed text-white [text-shadow:0_1px_16px_rgba(0,30,80,0.6)]">{HERO_SUBHEAD}</span>
              </p>
              <div {...rise(240)} className="mt-8">
                <a href={topazConfig.links.start} className="btn-primary !bg-white !text-ink hover:!bg-white/90">
                  Start enhancing
                </a>
              </div>
            </HeroTools>
          </div>
        </div>
      </section>
      <div className="hero-end" />
    </>
  );
}
