import type { ReactNode } from "react";

export type BadgeProps = {
  icon?: string;
  tint?: string;
  outlined?: boolean;
  children: ReactNode;
};
