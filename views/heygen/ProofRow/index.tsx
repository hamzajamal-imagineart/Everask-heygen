import { CtaButton } from "../CtaButton";
import { HG_MEDIA } from "../media.constants";
import type { ProofRowProps } from "./ProofRow.types";

export function ProofRow({ tint, button, buttonText, href }: ProofRowProps) {
  return (
    <div className="flex flex-col gap-6 px-2.5 py-10 md:flex-row md:items-center md:justify-between md:py-12">
      <div className="flex items-center gap-5">
        <span className="flex size-11 items-center justify-center rounded-2xl bg-white p-1 shadow-[inset_0_0_0_1px_var(--color-line-soft)]" data-tint={tint}>
          <img src={HG_MEDIA.badgeG2} alt="G2" className="size-9 object-contain" />
        </span>
        <div>
          <p className="t-item">Rated #1 most realistic on G2</p>
          <p className="text-[14px] leading-[22px] text-body">1,000+ reviews. Trusted by 85% of the Fortune 100</p>
        </div>
      </div>
      <CtaButton href={href} label="Get started for free" background={button} color={buttonText} arrow />
    </div>
  );
}
