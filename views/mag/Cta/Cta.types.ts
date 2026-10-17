import type { ReactNode } from "react";

export type CtaVariant = "light" | "dark" | "outline-light" | "outline-ink";

export type CtaProps = {
  href: string;
  children: ReactNode;
  variant?: CtaVariant;
  icon?: string;
  iconSize?: number;
  iconPosition?: "start" | "end";
  size?: "sm" | "md";
  className?: string;
};
