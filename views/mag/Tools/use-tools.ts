import { useRef, useState } from "react";
import { TOOL_FILTERS, TOOL_RAIL_STEP, TOOLS } from "./Tools.constants";

export function useTools() {
  const railRef = useRef<HTMLUListElement>(null);
  const [activeFilter, setActiveFilter] = useState(0);
  const category = TOOL_FILTERS[activeFilter].category;
  const tools = category ? TOOLS.filter((tool) => tool.category === category) : TOOLS;

  const scrollRail = (direction: -1 | 1) => {
    railRef.current?.scrollBy({ left: direction * TOOL_RAIL_STEP, behavior: "smooth" });
  };

  return { railRef, activeFilter, setActiveFilter, tools, scrollRail };
}
