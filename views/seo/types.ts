/* One SEO landing page, as EverAsk's site types it (lib/types.ts there):
   the copy for every section, word for word. */
export interface SeoPage {
  url: string;
  cluster: "seo";
  slug: string;
  keyword: string;
  metrics: { kd: number; volume: number; trafficPotential: number; cpc: number };
  title: string;
  description: string;
  h1: string;
  subhead: string;
  primaryCta: string;
  promptExample: string;
  steps: { title: string; body: string }[];
  features: { title: string; body: string }[];
  useCases: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
}
