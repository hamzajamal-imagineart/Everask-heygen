import { useState } from "react";
import { ORIGINALS_INITIAL_SLIDE } from "./Originals.constants";

export function useOriginals() {
  const [active, setActive] = useState(ORIGINALS_INITIAL_SLIDE);

  return { active, setActive };
}
