import type { ReactNode } from "react";
import type { LineIconName } from "../LineIcon/LineIcon.types";

export type BadgeProps = {
  icon?: LineIconName;
  tint?: string;
  outlined?: boolean;
  children: ReactNode;
};
