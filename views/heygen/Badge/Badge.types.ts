import type { ReactNode } from "react";

export type BadgeIconName = "avatar" | "research" | "agent" | "studio" | "translation" | "tools";

export type BadgeProps = {
  icon?: BadgeIconName;
  tint?: string;
  outlined?: boolean;
  children: ReactNode;
};
