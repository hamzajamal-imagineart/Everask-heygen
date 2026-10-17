import type { Metadata } from "next";
import type { ReactNode } from "react";
import { clash, dmSans, instrumentSerif } from "@/lib/fonts";
import { magConfig } from "@/views/mag/config";
import "../magnific.css";
import "@/views/mag/styles.css";

const { seo } = magConfig;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  robots: { index: false, follow: false },
  icons: { icon: { url: "/brand/everask-mark.svg", type: "image/svg+xml" } },
  openGraph: { type: "website", title: seo.title, description: seo.description },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description },
};

export default function MagnificLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${clash.variable} ${instrumentSerif.variable}`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
