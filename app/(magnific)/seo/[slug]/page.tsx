import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoView, { seoPageBySlug } from "@/views/seo";
import { SEO_ART } from "@/views/seo/art";
import { SEO_PAGES } from "@/views/seo/pages";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SEO_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = seoPageBySlug(slug);
  if (!page) return {};
  const image = SEO_ART[slug]?.hero.src;
  return {
    // The Vercel deploy, so the share image resolves to an absolute URL.
    metadataBase: new URL("https://everask-heygen.vercel.app"),
    title: page.title,
    description: page.description,
    robots: { index: false, follow: false },
    openGraph: { type: "website", title: page.title, description: page.description, ...(image && { images: [image] }) },
    twitter: { card: "summary_large_image", title: page.title, description: page.description },
  };
}

export default async function SeoPage({ params }: Props) {
  const { slug } = await params;
  if (!seoPageBySlug(slug)) notFound();
  return <SeoView slug={slug} />;
}
