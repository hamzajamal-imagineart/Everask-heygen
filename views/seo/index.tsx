import { AppTouchpoints } from "../mag/AppTouchpoints";
import { Breadcrumbs } from "../mag/Breadcrumbs";
import { Faq } from "../mag/Faq";
import { EVERASK_BRAND } from "../mag/Lockup/Lockup.constants";
import { SiteFooter } from "../mag/SiteFooter";
import { SiteHeader } from "../mag/SiteHeader";
import { SEO_ART } from "./art";
import { FinalCta, StartBuilding } from "./Closing";
import { SEO_CLUSTER, SEO_TOUCHPOINT } from "./config";
import { Hero } from "./Hero";
import { SEO_PAGES } from "./pages";
import { Examples, Factors, Features, Prompts, Related, Sample, Steps, UseCases } from "./Sections";

export const seoPageBySlug = (slug: string) => SEO_PAGES.find((p) => p.slug === slug);

/* One SEO page, in the order EverAsk's catch-all route sets them:
   breadcrumbs, hero, examples, how it works, what's in the report and how
   ranking works (where the page has them), features, who it's for, prompts to
   start from, start building, questions, the closing band and the apps. */
export default function SeoView({ slug }: { slug: string }) {
  const page = seoPageBySlug(slug)!;
  const art = SEO_ART[slug];
  const name = page.h1.replace(/\b(seo|ai)\b/gi, (w) => w.toUpperCase()).replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <>
      <SiteHeader />
      <main className="mag-page flex-1">
        <Breadcrumbs
          trail={[
            { name: "Features", href: `${EVERASK_BRAND.site}/features` },
            { name: SEO_CLUSTER.label, href: "/seo/" },
            { name, href: "#top" },
          ]}
        />
        <Hero page={page} />
        <Examples art={art} />
        <Steps page={page} />
        <Sample page={page} />
        <Factors page={page} />
        <Features page={page} />
        <UseCases page={page} art={art} />
        <Prompts page={page} />
        <StartBuilding />
        <Faq items={page.faqs.map((f) => ({ question: f.q, answer: f.a }))} title="Frequently asked questions" />
        <Related page={page} pages={SEO_PAGES} />
        <FinalCta page={page} />
        <AppTouchpoints copy={SEO_TOUCHPOINT} />
      </main>
      <SiteFooter />
    </>
  );
}
