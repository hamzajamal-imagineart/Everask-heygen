import { COMPLIANCE_BADGES } from "./Compliance.constants";

export function Compliance() {
  return (
    <section className="pt-6 pb-16 lg:pb-20">
      <div className="hg-container flex flex-wrap items-start justify-center gap-10 md:gap-[60px]">
        {COMPLIANCE_BADGES.map((badge) => (
          <div key={badge.label} className="flex flex-col items-center gap-2">
            <img src={badge.icon} loading="lazy" decoding="async" alt="" className="size-20" />
            <span className="kicker text-ink">{badge.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
