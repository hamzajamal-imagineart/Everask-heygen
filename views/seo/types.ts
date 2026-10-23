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
  /** How Google ranks the results the page is about, and what the page checks for each. */
  factorsTitle?: string;
  factorsIntro?: string;
  factors?: { title: string; body: string; check: string }[];
  /** The report in parts, each with a summary and a sample. Illustrative figures. */
  sample?: { title?: string; intro: string; tabs: SampleTab[] };
  /** Requests to start from, each a link into EverAsk. */
  prompts?: { title: string; prompt: string }[];
  useCases: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
}

export type SampleTab =
  | { kind: "table"; label: string; summary: string; caption: string; columns: string[]; rows: string[][]; you?: number; numeric?: number[] }
  | { kind: "grid"; label: string; summary: string; caption: string; ranks: number[]; note: string; legend?: string }
  | { kind: "list"; label: string; summary: string; caption: string; rows: { label: string; value: string; note?: string; ok?: boolean }[] };
