import type { Metadata } from "next";
import TopazVideoView from "@/views/topaz/video";
import { topazVideoConfig } from "@/views/topaz/config";

const { seo } = topazVideoConfig;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  robots: { index: false, follow: false },
  openGraph: { type: "website", title: seo.title, description: seo.description },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description },
};

export default function TopazVideoPage() {
  return <TopazVideoView />;
}
