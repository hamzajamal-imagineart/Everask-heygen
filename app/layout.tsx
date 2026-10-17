import type { Metadata } from "next";
import type { ReactNode } from "react";
import { heygenConfig } from "@/views/heygen/config";
import { clash, dmSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: heygenConfig.seo.title,
  description: heygenConfig.seo.description,
  robots: { index: false, follow: false },
  icons: { icon: { url: "/brand/mark.svg", type: "image/svg+xml" } },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${clash.variable}`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
