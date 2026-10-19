import type { Metadata } from "next";
import GensparkView from "@/views/genspark";
import { gensparkConfig } from "@/views/genspark/config";

const { seo } = gensparkConfig;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  robots: { index: false, follow: false },
  openGraph: { type: "website", title: seo.title, description: seo.description },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description },
};

export default function GensparkPage() {
  return <GensparkView />;
}
