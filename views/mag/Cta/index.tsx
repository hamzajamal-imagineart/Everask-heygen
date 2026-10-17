import { CTA_SIZE_CLASSES, CTA_VARIANT_CLASSES } from "./Cta.constants";
import type { CtaProps } from "./Cta.types";

export function Cta({ href, children, variant = "dark", icon, iconSize = 13, iconPosition = "end", size = "sm", className = "" }: CtaProps) {
  const iconNode = icon ? <img src={icon} alt="" width={iconSize} height={iconSize} aria-hidden="true" /> : null;

  return (
    <a
      href={href}
      className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-lg font-medium leading-none whitespace-nowrap transition-opacity hover:opacity-85 ${CTA_VARIANT_CLASSES[variant]} ${CTA_SIZE_CLASSES[size]} ${className}`}
    >
      {iconPosition === "start" && iconNode}
      {children}
      {iconPosition === "end" && iconNode}
    </a>
  );
}
