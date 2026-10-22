import { Composer } from "./Composer";
import { SEO_SKY, SEO_STARTERS, startHref } from "./config";
import { SkyClouds } from "./SkyClouds";
import type { SeoPage } from "./types";

/* The last word of the headline in the italic serif: "Local SEO *audit*". */
function Accented({ text }: { text: string }) {
  const words = text.split(" ");
  if (words.length < 2) return <>{text}</>;
  const last = words.pop();
  return (
    <>
      {words.join(" ")} <span className="font-serif text-[1.08em] font-normal italic tracking-[-0.01em]">{last}</span>
    </>
  );
}

/* EverAsk's sky hero (SkyHero in components/landing/Hero.tsx): the cluster's
   world full-bleed in a tall rounded frame, the h1 and subhead in white, the
   composer and starters in the clear sky above the cloud. On phones the art
   sits in the lower half and fades up into the sky colour. */
export function Hero({ page }: { page: SeoPage }) {
  const rise = (ms: number) => ({ className: "animate-sky-rise motion-reduce:animate-none", style: { animationDelay: `${ms}ms` } });
  return (
    <>
      <section className="px-2 sm:px-3">
        <div className="relative isolate flex min-h-[max(640px,calc(100svh-140px))] flex-col overflow-hidden rounded-[24px] sm:rounded-[36px]" style={{ backgroundColor: SEO_SKY.tone }}>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-[52%] [mask-image:linear-gradient(to_bottom,transparent,#000_30%)] sm:inset-0 sm:h-auto sm:[mask-image:none]">
            <SkyClouds poster={SEO_SKY.poster} posterSm={SEO_SKY.posterSm} video={SEO_SKY.video} />
          </div>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{ backgroundImage: `linear-gradient(to bottom, ${SEO_SKY.tone}d9 0%, ${SEO_SKY.tone}80 28%, transparent 55%)` }}
          />
          <div className="container-page flex flex-1 flex-col items-center pt-[clamp(56px,7vw,104px)] pb-[clamp(200px,24vw,340px)] text-center">
            <h1 {...rise(80)} className="t-hero max-w-4xl animate-sky-rise font-medium text-balance !text-white [text-shadow:0_2px_30px_rgba(0,40,110,0.25)] motion-reduce:animate-none">
              <Accented text={page.h1} />
            </h1>
            <p {...rise(160)}>
              <span className="mx-auto mt-4 block max-w-xl text-[17px] leading-relaxed text-white/90">{page.subhead}</span>
            </p>
            <div {...rise(240)} className="relative z-20 w-full min-w-0 animate-sky-rise motion-reduce:animate-none">
              <div className="mx-auto mt-8 max-w-2xl">
                <Composer
                  placeholder={page.promptExample}
                  submitLabel={page.primaryCta}
                  href={startHref(page.slug)}
                  starters={[{ label: page.h1.charAt(0).toUpperCase() + page.h1.slice(1), prompt: page.promptExample }, ...SEO_STARTERS.slice(0, 3)]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="hero-end" />
    </>
  );
}
