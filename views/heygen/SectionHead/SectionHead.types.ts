import type { ReactNode } from "react";

export type SectionHeadProps = {
  badge: string;
  icon?: string;
  tint?: string;
  title: string;
  children: ReactNode;
  action?: ReactNode;
  align?: "center" | "left";
};
