"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "./Faq.constants";

/** All answers start open, as on the reference page; each row toggles on its own. */
export function useFaq() {
  const [open, setOpen] = useState<boolean[]>(() => FAQ_ITEMS.map(() => true));
  const toggle = (index: number) => setOpen((current) => current.map((value, i) => (i === index ? !value : value)));
  return { open, toggle };
}
