import type { CSSProperties } from "react";

export const EVERASK_BRAND = {
  name: "EverAsk",
  site: "https://everask.ai",
  mark: "/brand/everask-mark.svg",
  start: "https://everask.ai/agent?utm_source=everask_site&utm_medium=landing_page&utm_lp=/mag",
};

export const LOCKUP_MARK_STYLE: CSSProperties = {
  WebkitMaskImage: `url(${EVERASK_BRAND.mark})`,
  maskImage: `url(${EVERASK_BRAND.mark})`,
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
  WebkitMaskSize: "contain",
  maskSize: "contain",
  backgroundColor: "currentColor",
};
