import type { Metadata } from "next";
import ManusView from "@/views/manus";
import { manusConfig } from "@/views/manus/config";

const { seo } = manusConfig;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  robots: { index: false, follow: false },
  openGraph: { type: "website", title: seo.title, description: seo.description },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description },
};

export default function ManusPage() {
  return <ManusView />;
}
