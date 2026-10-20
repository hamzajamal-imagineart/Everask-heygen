import type { Metadata } from "next";
import TopazImageView from "@/views/topaz";
import { topazImageConfig } from "@/views/topaz/config";

const { seo } = topazImageConfig;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  robots: { index: false, follow: false },
  openGraph: { type: "website", title: seo.title, description: seo.description },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description },
};

export default function TopazImagePage() {
  return <TopazImageView />;
}
