import type { ReactNode } from "react";
import type { LineIconName } from "../LineIcon/LineIcon.types";

export type SectionHeadProps = {
  badge: string;
  icon?: LineIconName;
  tint?: string;
  title: string;
  children: ReactNode;
  action?: ReactNode;
  align?: "center" | "left";
};
