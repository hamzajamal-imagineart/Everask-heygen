"use client";

import { useState } from "react";

export function useFaqItem(defaultOpen: boolean) {
  const [open, setOpen] = useState(defaultOpen);

  return { open, toggle: () => setOpen((current) => !current) };
}
