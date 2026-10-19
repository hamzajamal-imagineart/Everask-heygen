import type { BadgeProps } from "./Badge.types";
import { LineIcon } from "../LineIcon";

/* EverAsk chip: tint panel, action-blue label (globals.css `chip`). */
export function Badge({ icon, tint = "var(--color-tint)", outlined = false, children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-pill px-3 py-1.5 text-[14px] font-medium text-action ${outlined ? "rounded-full border border-black/10 px-3 py-2" : ""}`}
      style={outlined ? undefined : { backgroundColor: tint }}
    >
      {icon ? <LineIcon name={icon} /> : null}
      {children}
    </span>
  );
}
