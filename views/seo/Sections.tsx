import { srcSetFor } from "@/lib/responsive";
import type { SeoArt } from "./art.types";
import { SEO_GLYPHS, startHref } from "./config";
import { Glyph, type GlyphName } from "./Icons";
import { SampleAudit } from "./SampleAudit";
import { Section } from "./Section";
import type { SeoPage } from "./types";

/* The sections under the hero, ported from EverAsk's Examples, Steps,
   Features and UseCases (components/landing/) for the SEO pages. */

export function Examples({ art }: { art: SeoArt }) {
  return (
    <Section id="examples" title="Examples" intro="Three things people make with it.">
      <ul className="grid gap-x-6 gap-y-8 sm:grid-cols-3">
        {art.examples.map((example) => (
          <li key={example.src}>
            <figure>
              <div className="relative overflow-hidden rounded-lg bg-[#0088ff]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={example.src}
                  srcSet={srcSetFor(example.src)}
                  sizes="(min-width: 1248px) 384px, (min-width: 640px) 31vw, 100vw"
                  alt={example.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-[15px] text-ink">{example.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
}

const beats: GlyphName[] = ["pen", "sparkles", "checklist"];

/* How it works: the three steps on one line, each on its line glyph, a thin
   arrow between them. On phones they stack. */
export function Steps({ page }: { page: SeoPage }) {
  return (
    <Section id="how-it-works" title="How it works">
      <ol className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-0">
        {page.steps.map((step, i) => (
          <li key={step.title} className="flex flex-1 items-start gap-3 sm:gap-0">
            <span className="mr-3 grid size-12 shrink-0 place-items-center rounded-2xl bg-fill-1 text-action">
              <Glyph name={SEO_GLYPHS[step.title] ?? beats[i] ?? "sparkles"} className="size-6" />
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="t-item">{step.title}</h3>
              <p className="mt-1 line-clamp-2 pr-2 text-[14px] leading-relaxed text-muted sm:pr-6">{step.body}</p>
            </div>
            {i < page.steps.length - 1 && (
              <svg aria-hidden viewBox="0 0 24 24" className="mt-1 hidden size-5 shrink-0 text-line sm:mx-3 sm:block" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12h16m-5-5 5 5-5 5" />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* What's in the report: the parts and a sample of each (SampleAudit.tsx). */
export function Sample({ page }: { page: SeoPage }) {
  if (!page.sample) return null;
  return (
    <Section id="report" title={page.sample.title ?? "What’s in the report"} intro={page.sample.intro}>
      <SampleAudit tabs={page.sample.tabs} />
    </Section>
  );
}

/* Requests to start from, as a hairline list (LinkList on EverAsk's site):
   the request in full, what it is for in muted type, one arrow into EverAsk. */
export function Prompts({ page }: { page: SeoPage }) {
  if (!page.prompts?.length) return null;
  return (
    <Section id="prompts" title="Ask it like this">
      <ul className="border-t border-line-soft">
        {page.prompts.map((p) => (
          <li key={p.title} className="border-b border-line-soft">
            <a href={startHref(page.slug)} className="group grid items-baseline gap-1 py-5 sm:grid-cols-[minmax(0,4fr)_minmax(0,8fr)_auto] sm:gap-12">
              <span className="text-[14px] text-muted">{p.title}</span>
              <span className="text-[17px] leading-snug text-ink transition-colors group-hover:text-action">{p.prompt}</span>
              <svg aria-hidden viewBox="0 0 16 16" className="hidden size-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-action sm:block" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* How Google ranks local results, set as an editorial row: Google's three
   words in the serif, each with what it means and what the audit reads,
   divided by hairlines. No cards, no icons. */
export function Factors({ page }: { page: SeoPage }) {
  if (!page.factors?.length) return null;
  return (
    <Section id="how-it-works-under" title={page.factorsTitle ?? "How Google ranks local results"} intro={page.factorsIntro}>
      <ol className="grid border-t border-line-soft sm:grid-cols-3">
        {page.factors.map((factor, i) => (
          <li key={factor.title} className={`py-7 sm:px-8 sm:py-2 sm:first:pl-0 sm:last:pr-0 ${i > 0 ? "border-t border-line-soft sm:border-t-0 sm:border-l" : ""} sm:mt-8`}>
            <h3 className="font-serif text-[34px] leading-none font-normal italic text-ink">{factor.title}</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">{factor.body}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink">{factor.check}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* Where a page starts the tone order (variant.ts there): an FNV-1a hash of
   the url with a murmur3 finish, stable per page. */
function variant(url: string, section: string, count: number): number {
  let h = 2166136261;
  for (const c of `${section}:${url}`) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  h ^= h >>> 16;
  h = Math.imul(h, 0x85ebca6b);
  h ^= h >>> 13;
  h = Math.imul(h, 0xc2b2ae35);
  h ^= h >>> 16;
  return (h >>> 0) % count;
}

type Tone = "azure" | "royal" | "navy" | "sky" | "paper";
const surface: Record<Tone, string> = {
  azure: "bg-[radial-gradient(110%_120%_at_92%_100%,#7cc6ff_0%,#0088ff_55%,#0070e0_100%)]",
  royal: "bg-[radial-gradient(110%_120%_at_92%_100%,#7aa6ff_0%,#2a6cf0_55%,#1a50cc_100%)]",
  navy: "bg-[radial-gradient(110%_120%_at_92%_100%,#3b6fd1_0%,#123a8a_55%,#0b2462_100%)]",
  sky: "bg-[radial-gradient(110%_120%_at_92%_100%,#f2f9ff_0%,#bfe0ff_55%,#a3d1ff_100%)]",
  paper: "bg-[radial-gradient(110%_120%_at_92%_100%,#eaf4ff_0%,#ffffff_55%,#ffffff_100%)] ring-1 ring-inset ring-line-soft",
};
const light: Tone[] = ["sky", "paper"];
const grainy: Tone[] = ["azure", "royal", "navy"];
const tones: Tone[] = ["azure", "sky", "paper", "royal", "paper", "navy"];

/* A title split about halfway, on a word: strong, then soft. */
function split(title: string): [string, string] {
  const words = title.split(" ");
  if (words.length < 2) return [title, ""];
  let at = 1;
  let best = Infinity;
  for (let i = 1; i < words.length; i++) {
    const d = Math.abs(words.slice(0, i).join(" ").length - title.length / 2);
    if (d < best) [best, at] = [d, i];
  }
  return [words.slice(0, at).join(" "), words.slice(at).join(" ")];
}

/* Features: six equal cards, a two-tone title and "Learn more" into
   EverAsk. Blue radial tones and two white; compact rows on phones. */
export function Features({ page }: { page: SeoPage }) {
  return (
    <Section title="Features">
      <ul className="grid gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
        {page.features.map((feature, i) => {
          const tone = tones[(i + variant(page.url, "tones", tones.length)) % tones.length];
          const [a, b] = split(feature.title);
          const isLight = light.includes(tone);
          return (
            <li key={feature.title} className={`group relative isolate flex items-center gap-3 overflow-hidden rounded-2xl p-3 pr-4 sm:block sm:h-[220px] sm:rounded-[24px] sm:p-7 ${surface[tone]}`}>
              {grainy.includes(tone) && <span aria-hidden className="grain pointer-events-none absolute inset-0 -z-[1] opacity-[0.28] mix-blend-overlay" />}
              <span aria-hidden className="pointer-events-none absolute inset-0 -z-[1] bg-[radial-gradient(70%_70%_at_85%_90%,rgb(255_255_255/0.35),transparent_70%)] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
              <h3 className="relative z-[1] min-w-0 flex-1 font-display text-[17px] leading-[1.15] font-medium tracking-[-0.02em] sm:max-w-[80%] sm:text-[26px] sm:leading-[1.12]">
                <span className={`block ${isLight ? "text-ink" : "text-white"}`}>{a}</span>
                <span className={`block ${isLight ? "text-ink/40" : "text-white/60"}`}>{b}</span>
              </h3>
              <a href={startHref(page.slug)} className={`z-[1] inline-flex shrink-0 items-center gap-2.5 text-[12px] font-medium tracking-[0.04em] uppercase sm:absolute sm:bottom-7 sm:left-7 ${isLight ? "text-ink" : "text-white"}`}>
                <span className={`grid size-7 place-items-center rounded-full transition-transform duration-300 ease-out group-hover:rotate-45 ${isLight ? "bg-ink text-white" : "bg-white text-[#0088ff]"}`}>
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
    </Section>
  );
}

/* Who it's for as a z-fold (ZFold.tsx there): a 16:9 picture beside each
   audience, sides alternating, the rows on the section title's left edge. */
export function UseCases({ page, art }: { page: SeoPage; art: SeoArt }) {
  return (
    <Section title="Who it’s for">
      <ul className="flex flex-col gap-8">
        {page.useCases.map((useCase, i) => {
          const row = art.rows[i];
          const flip = i % 2 === 1;
          return (
            <li
              key={useCase.title}
              className={`grid items-center gap-4 sm:gap-10 lg:gap-14 ${flip ? "sm:grid-cols-[minmax(0,1fr)_minmax(0,560px)]" : "sm:grid-cols-[minmax(0,560px)_minmax(0,1fr)]"}`}
            >
              <div className={`w-full ${flip ? "sm:order-2" : ""}`}>
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-fill-1">
                  {row ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={row.src}
                      srcSet={srcSetFor(row.src)}
                      sizes="(min-width: 640px) 560px, 100vw"
                      alt={row.alt}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 size-full object-cover"
                      style={{ objectPosition: `50% ${row.focus}%` }}
                    />
                  ) : (
                    <span className="absolute inset-0 grid place-items-center text-action">
                      <Glyph name={SEO_GLYPHS[useCase.title] ?? "sparkles"} className="size-9" />
                    </span>
                  )}
                </div>
              </div>
              <div className="max-w-[480px]">
                <h3 className="font-display text-[24px] leading-[1.1] font-medium tracking-[-0.015em] sm:text-[30px]">{useCase.title}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-muted sm:text-[17px]">{useCase.body}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

/* The page's sibling SEO pages as a hairline list (LinkList on EverAsk's
   site): the page's own related links first, then the other SEO pages. */
export function Related({ page, pages }: { page: SeoPage; pages: SeoPage[] }) {
  const linked = page.related.map((url) => pages.find((p) => p.url === url)).filter((p): p is SeoPage => !!p && p.slug !== page.slug);
  const siblings = [...linked, ...pages.filter((p) => p.slug !== page.slug && !linked.includes(p))].slice(0, 4);
  if (!siblings.length) return null;
  return (
    <Section title="More SEO tools">
      <ul className="border-t border-line-soft">
        {siblings.map((p) => (
          <li key={p.slug} className="border-b border-line-soft">
            <a href={`/seo/${p.slug}/`} className="group grid items-baseline gap-1 py-5 sm:grid-cols-[minmax(0,4fr)_minmax(0,8fr)_auto] sm:gap-12">
              <span className="t-item transition-colors group-hover:text-action">{p.h1.charAt(0).toUpperCase() + p.h1.slice(1)}</span>
              <span className="text-[15px] leading-relaxed text-muted">{p.subhead}</span>
              <svg aria-hidden viewBox="0 0 16 16" className="hidden size-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-action sm:block" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
