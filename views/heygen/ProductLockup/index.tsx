import { EVERASK } from "../brand.constants";
import { MARK_MASK_STYLE } from "./ProductLockup.constants";
import type { ProductLockupProps } from "./ProductLockup.types";

export function ProductLockup({ className = "", tone = "ink" }: ProductLockupProps) {
  const mark = tone === "white" ? "text-white" : "text-action";
  const word = tone === "white" ? "text-white" : "text-ink";
  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className={mark}>
        <span role="img" aria-label={EVERASK.name} className="block size-[1.45em]" style={MARK_MASK_STYLE} />
      </span>
      <span className={`ml-[0.55em] font-display text-[1.32em] font-medium tracking-[-0.03em] ${word}`}>{EVERASK.name}</span>
    </span>
  );
}
