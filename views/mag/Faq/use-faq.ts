"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "./Faq.constants";

/** The first answer starts open, as on EverAsk pages; each row toggles on its own. */
export function useFaq() {
  const [open, setOpen] = useState<boolean[]>(() => FAQ_ITEMS.map((_, index) => index === 0));
  const toggle = (index: number) => setOpen((current) => current.map((value, i) => (i === index ? !value : value)));
  return { open, toggle };
}
