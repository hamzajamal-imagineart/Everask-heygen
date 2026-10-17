import { Badge } from "../Badge";
import type { SectionHeadProps } from "./SectionHead.types";

export function SectionHead({ badge, icon, tint, title, children, action, align = "center" }: SectionHeadProps) {
  const centered = align === "center";
  return (
    <div className={`flex flex-col gap-[30px] ${centered ? "items-center text-center" : "items-start"}`}>
      <Badge icon={icon} tint={tint}>
        {badge}
      </Badge>
      <h2 className={`hg-h2 text-hg-ink ${centered ? "max-w-[880px]" : "max-w-[640px]"}`}>{title}</h2>
      <p className={`hg-lede ${centered ? "max-w-[600px]" : "max-w-[600px]"}`}>{children}</p>
      {action}
    </div>
  );
}
