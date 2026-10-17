import { EVERASK_BRAND, LOCKUP_MARK_STYLE } from "./Lockup.constants";
import type { LockupProps } from "./Lockup.types";

export function Lockup({ className = "", tone = "ink" }: LockupProps) {
  const mark = tone === "white" ? "text-white" : "text-action";
  const word = tone === "white" ? "text-white" : "text-ink";

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className={mark}>
        <span role="img" aria-label={EVERASK_BRAND.name} className="block size-[1.45em]" style={LOCKUP_MARK_STYLE} />
      </span>
      <span className={`ml-[0.55em] font-display text-[1.32em] font-medium tracking-[-0.03em] ${word}`}>{EVERASK_BRAND.name}</span>
    </span>
  );
}
