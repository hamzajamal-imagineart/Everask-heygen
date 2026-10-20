import { CtaButton } from "../CtaButton";
import type { ProofRowProps } from "./ProofRow.types";

/* The closing CTA of a section. It used to carry HeyGen's G2 rating, review count and Fortune 100
   line, uncredited on an EverAsk page; those were removed (Hamza, 20 Oct: "remove trust bars ... or
   any other testimonial type of things"). */
export function ProofRow({ button, buttonText, href }: ProofRowProps) {
  return (
    <div className="flex justify-center px-2.5 py-10 md:py-12">
      <CtaButton href={href} label="Get started for free" background={button} color={buttonText} arrow />
    </div>
  );
}
