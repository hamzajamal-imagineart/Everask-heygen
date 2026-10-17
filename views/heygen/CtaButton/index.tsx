import type { CtaButtonProps } from "./CtaButton.types";

export function CtaButton({ href, label, background = "#0088ff", color = "#fff", arrow = false, size = "md" }: CtaButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-pill font-medium whitespace-nowrap transition-[background,transform] hover:brightness-95 active:translate-y-px ${size === "lg" ? "h-12 px-7 text-[16px]" : "h-10 px-6 text-[15px]"}`}
      style={{ backgroundColor: background, color }}
    >
      {label}
      {arrow ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : null}
    </a>
  );
}
