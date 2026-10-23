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
import { AnnotatedPage, Formula, GapBoard, PagesToWrite, RowAnatomy, Scope, SheetSection, TrafficBars } from "./Signatures";
import type { SeoArt } from "./art.types";
import type { SeoPage } from "./types";

export const seoPageBySlug = (slug: string) => SEO_PAGES.find((p) => p.slug === slug);

/* What sits between the hero and the closing sections. Each page leads with
   its own signature, built around its job, and orders the rest to suit:
   the local audit opens on its report, competitor research on the sheet,
   the gap analysis on its three kinds of gap, the traffic estimator on the
   sites as bars, the AI audit on the page with its findings pinned. */
function Body({ page, art }: { page: SeoPage; art: SeoArt }) {
  const common = {
    steps: <Steps page={page} />,
    features: <Features page={page} />,
    examples: <Examples art={art} />,
    useCases: <UseCases page={page} art={art} />,
    prompts: <Prompts page={page} />,
  };
  switch (page.slug) {
    case "competitor-keyword-research":
      return (
        <>
          <SheetSection />
          <RowAnatomy />
          {common.steps}
          {common.features}
          {common.examples}
          {common.useCases}
          {common.prompts}
        </>
      );
    case "keyword-gap-analysis":
      return (
        <>
          <GapBoard />
          {common.steps}
          <PagesToWrite />
          {common.features}
          {common.useCases}
          {common.examples}
          {common.prompts}
        </>
      );
    case "traffic-estimator":
      return (
        <>
          <TrafficBars />
          <Formula />
          {common.steps}
          {common.features}
          {common.useCases}
          {common.examples}
          {common.prompts}
        </>
      );
    case "ai-seo-audit":
      return (
        <>
          <AnnotatedPage />
          <Scope />
          {common.steps}
          {common.features}
          {common.examples}
          {common.useCases}
          {common.prompts}
        </>
      );
    default:
      return (
        <>
          {common.examples}
          {common.steps}
          <Sample page={page} />
          <Factors page={page} />
          {common.features}
          {common.useCases}
          {common.prompts}
        </>
      );
  }
}

/* One SEO page, in the order EverAsk's catch-all route sets them:
   breadcrumbs, hero, the page's own body (Body above), start building, questions, the closing band and the apps. */
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
        <Body page={page} art={art} />
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
