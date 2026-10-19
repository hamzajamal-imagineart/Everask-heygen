import type { BadgeProps } from "./Badge.types";
import { BadgeIcon } from "./BadgeIcon";

export function Badge({ icon, tint = "#edf3ff", outlined = false, children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-pill px-3 py-1.5 text-[14px] font-medium text-cobalt ${outlined ? "rounded-full border border-black/10 px-3 py-2" : ""}`}
      style={outlined ? undefined : { backgroundColor: tint }}
    >
      {icon ? <BadgeIcon name={icon} /> : null}
      {children}
    </span>
  );
}
