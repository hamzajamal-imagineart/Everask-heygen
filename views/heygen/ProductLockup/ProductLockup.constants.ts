import type { CSSProperties } from "react";
import { EVERASK } from "../brand.constants";

export const MARK_MASK_STYLE: CSSProperties = {
  WebkitMaskImage: `url(${EVERASK.mark})`,
  maskImage: `url(${EVERASK.mark})`,
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
  WebkitMaskSize: "contain",
  maskSize: "contain",
  backgroundColor: "currentColor",
};
