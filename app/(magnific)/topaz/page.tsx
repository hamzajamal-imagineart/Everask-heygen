import type { Metadata } from "next";
import TopazView from "@/views/topaz";
import { topazConfig } from "@/views/topaz/config";

const { seo } = topazConfig;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  robots: { index: false, follow: false },
  openGraph: { type: "website", title: seo.title, description: seo.description },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description },
};

export default function TopazPage() {
  return <TopazView />;
}
