import type { ReactNode } from "react";

type SectionHeadProps = {
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
};

/** EverAsk section header: a small heading on the left, a muted description (and optional action) on the right. */
export function SectionHead({ title, description, action }: SectionHeadProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-10">
      <h2 className="font-display text-[24px] leading-[1.25] font-medium tracking-[-0.03em] text-[#131318]">{title}</h2>
      {(description || action) && (
        <div className="flex flex-col items-start gap-5 md:max-w-md">
          {description && <p className="text-[15px] leading-relaxed text-black/50">{description}</p>}
          {action}
        </div>
      )}
    </div>
  );
}
