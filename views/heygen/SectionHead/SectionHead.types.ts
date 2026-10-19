import type { ReactNode } from "react";
import type { BadgeIconName } from "../Badge/Badge.types";

export type SectionHeadProps = {
  badge: string;
  icon?: BadgeIconName;
  tint?: string;
  title: string;
  children: ReactNode;
  action?: ReactNode;
  align?: "center" | "left";
};
