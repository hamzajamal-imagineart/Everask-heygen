"use client";

import { useState } from "react";
import { STORIES } from "./Stories.constants";

export function useStories() {
  const [index, setIndex] = useState(0);
  const count = STORIES.length;

  return {
    story: STORIES[index],
    prev: () => setIndex((current) => (current - 1 + count) % count),
    next: () => setIndex((current) => (current + 1) % count),
  };
}
