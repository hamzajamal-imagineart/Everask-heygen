"use client";

import { useEffect, useState } from "react";
import { HEADER_SCROLL_THRESHOLD } from "./SiteHeader.constants";

export function useSiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > HEADER_SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrolled };
}
