"use client";

import { useState } from "react";

export function useTranslation() {
  const [active, setActive] = useState(0);

  return { active, select: setActive };
}
