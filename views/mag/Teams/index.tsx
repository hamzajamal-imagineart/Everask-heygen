import { SectionHead } from "../SectionHead";
import { TEAM_FEATURES } from "./Teams.constants";

export function Teams() {
  return (
    <section id="teams" className="border-t border-[#ededed] py-20">
      <div className="mag-container flex flex-col gap-12">
        <SectionHead
          title="Team plans built for creative work at scale"
          description="Business and Enterprise plans for teams that create together."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-[#f6f6f7] p-8">
            <p className="font-display text-[20px] leading-[1.3] font-medium tracking-[-0.02em] text-[#131318]">Business</p>
            <p className="mt-2 text-[15px] leading-relaxed text-black/50">
              For creative teams and agencies ready to move faster and produce more. Shared credits, collaborative workflows, and
              access to every AI model, without the complexity of enterprise procurement.
            </p>
          </div>
          <div className="rounded-2xl bg-[#f6f6f7] p-8">
            <p className="font-display text-[20px] leading-[1.3] font-medium tracking-[-0.02em] text-[#131318]">Enterprise</p>
            <p className="mt-2 text-[15px] leading-relaxed text-black/50">
              For organizations where creative output is mission-critical. Full legal indemnification, enterprise-grade security,
              unlimited users, custom SSO, and a dedicated team from day one.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10 rounded-2xl bg-[#f6f6f7] p-8">
          <div className="flex flex-col gap-2">
            <h3 className="font-display text-[20px] leading-[1.3] font-medium tracking-[-0.02em] text-[#131318]">Enterprise features built for scale</h3>
            <p className="text-[15px] leading-relaxed text-black/50">Security, compliance, and admin control for teams of any size.</p>
          </div>
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TEAM_FEATURES.map((feature) => (
              <li key={feature.title} className="flex items-start gap-4">
                <img src={feature.icon} alt="" width={44} height={44} className="size-11 shrink-0 object-contain" aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  <p className="text-[15px] leading-[1.5] font-medium text-[#131318]">{feature.title}</p>
                  <p className="text-[14px] leading-relaxed text-black/50">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
