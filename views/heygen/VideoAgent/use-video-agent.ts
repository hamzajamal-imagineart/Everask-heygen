"use client";

import { useState } from "react";
import { AGENT_SLIDES } from "./VideoAgent.constants";

export function useVideoAgent() {
  const [index, setIndex] = useState(0);
  const count = AGENT_SLIDES.length;

  return {
    index,
    count,
    go: (next: number) => setIndex(((next % count) + count) % count),
    prev: () => setIndex((current) => (current - 1 + count) % count),
    next: () => setIndex((current) => (current + 1) % count),
  };
}
