import type { CtaVariant } from "./Cta.types";

export const CTA_VARIANT_CLASSES: Record<CtaVariant, string> = {
  light: "bg-white text-black",
  dark: "bg-action text-white hover:bg-action-hover",
  "outline-light": "border border-white text-white",
  "outline-ink": "border border-[#131318]/20 text-[#131318]",
};

export const CTA_SIZE_CLASSES = {
  sm: "h-10 px-6 text-sm",
  md: "h-[50px] px-6 text-base",
};
