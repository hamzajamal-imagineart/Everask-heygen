import type { BadgeProps } from "./Badge.types";

export function Badge({ icon, tint = "#edf3ff", outlined = false, children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-pill py-1 pr-3 pl-1.5 text-[14px] font-medium text-cobalt ${outlined ? "rounded-full border border-black/10 px-3 py-2" : ""}`}
      style={outlined ? undefined : { backgroundColor: tint }}
    >
      {icon ? <img src={icon} alt="" className="-my-2 size-11 object-contain" /> : null}
      {children}
    </span>
  );
}
