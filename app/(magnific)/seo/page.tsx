import type { Metadata } from "next";
import { srcSetFor } from "@/lib/responsive";
import { Breadcrumbs } from "@/views/mag/Breadcrumbs";
import { EVERASK_BRAND } from "@/views/mag/Lockup/Lockup.constants";
import { SiteFooter } from "@/views/mag/SiteFooter";
import { SiteHeader } from "@/views/mag/SiteHeader";
import { SEO_ART } from "@/views/seo/art";
import { SEO_CLUSTER, SEO_SKY } from "@/views/seo/config";
import { SEO_PAGES } from "@/views/seo/pages";

export const metadata: Metadata = {
  title: `${SEO_CLUSTER.label} | EverAsk`,
  description: SEO_CLUSTER.blurb,
  robots: { index: false, follow: false },
};

/* The SEO cluster hub (ClusterHub on EverAsk's site): the sky world as a
   banner with the name and blurb, then a card per page on its hero art. */
export default function SeoHub() {
  return (
    <>
      <SiteHeader />
      <main className="mag-page flex-1">
        <Breadcrumbs
          trail={[
            { name: "Features", href: `${EVERASK_BRAND.site}/features` },
            { name: SEO_CLUSTER.label, href: "#top" },
          ]}
        />
        <section className="px-2 sm:px-3">
          <div className="relative isolate overflow-hidden rounded-[24px] sm:rounded-[36px]" style={{ backgroundColor: SEO_SKY.tone }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={SEO_SKY.poster} alt="" fetchPriority="high" className="absolute inset-0 -z-10 size-full object-cover object-bottom" />
            <span
              aria-hidden
              className="absolute inset-0 -z-10"
              style={{ backgroundImage: `linear-gradient(to bottom, ${SEO_SKY.tone}e6 0%, ${SEO_SKY.tone}80 35%, transparent 65%)` }}
            />
            <div className="container-page pt-16 pb-[clamp(220px,26vw,360px)] text-center sm:aspect-[16/8] sm:pb-0 lg:pt-24">
              <h1 className="t-headline font-medium !text-white">
                <span className="font-serif font-normal italic">{SEO_CLUSTER.label}</span>
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">{SEO_CLUSTER.blurb}</p>
            </div>
          </div>
        </section>
        <section className="border-b border-line bg-white py-16 lg:py-20">
          <ul className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SEO_PAGES.map((page) => {
              const hero = SEO_ART[page.slug].hero;
              return (
                <li key={page.slug}>
                  <a href={`/seo/${page.slug}/`} className="group block overflow-hidden rounded-[24px] bg-fill-1">
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#0088ff]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={hero.src}
                        srcSet={srcSetFor(hero.src)}
                        sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                        alt={hero.alt}
                        loading="lazy"
                        className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        style={{ objectPosition: hero.position }}
                      />
                    </div>
                    <div className="p-5">
                      <h2 className="font-display text-[22px] leading-[1.15] font-medium tracking-[-0.02em] text-ink capitalize">{page.h1}</h2>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{page.subhead}</p>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
