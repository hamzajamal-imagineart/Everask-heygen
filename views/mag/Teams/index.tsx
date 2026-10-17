import { TEAM_FEATURES, TEAM_HIGHLIGHTS, TESTIMONIALS } from "./Teams.constants";

export function Teams() {
  return (
    <section id="teams" className="bg-[#1a1a1a] text-[#f5f5f5]">
      <div className="mag-container flex flex-col gap-16 py-24 lg:py-[200px]">
        <div className="flex flex-col gap-16 pb-8">
          <h2 className="max-w-[672px] text-[40px] leading-[1.2] font-medium md:text-[56px]">
            Team plans built for creative work at scale
          </h2>
          <div className="grid gap-10 md:grid-cols-2 md:gap-8">
            <div className="flex flex-col items-start gap-8">
              <div>
                <p className="font-display text-[28px] leading-[1.375] font-medium tracking-[-0.02em]">Business</p>
                <p className="text-lg leading-[1.5] text-[#737373]">
                  For creative teams and agencies ready to move faster and produce more. Shared credits, collaborative workflows,
                  and access to every AI model—without the complexity of enterprise procurement.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-8">
              <div>
                <p className="font-display text-[28px] leading-[1.375] font-medium tracking-[-0.02em]">Enterprise</p>
                <p className="text-lg leading-[1.5] text-[#737373]">
                  For organizations where creative output is mission-critical. Full legal indemnification, enterprise-grade
                  security, unlimited users, custom SSO, and a dedicated team from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {TEAM_HIGHLIGHTS.map((highlight) => (
            <article key={highlight.title} className="flex flex-col overflow-hidden rounded-xl bg-[#1f1f1f] md:h-[508px]">
              <div className="flex flex-col gap-4 p-8 lg:p-12">
                <h3 className="text-[28px] leading-[1.2] font-medium">{highlight.title}</h3>
                <p className="max-w-[500px] text-lg leading-[1.5] text-[#737373]">{highlight.description}</p>
              </div>
              <div className="mt-auto pl-8 lg:pl-12">
                <img src={highlight.image} alt="" className="h-[308px] w-full rounded-tl-2xl object-cover object-left-bottom" loading="lazy" />
              </div>
            </article>
          ))}
        </div>
        <div className="flex flex-col gap-12 rounded-xl bg-[#1f1f1f] p-8 lg:p-12">
          <div className="flex flex-col gap-4">
            <h3 className="text-[28px] leading-[1.2] font-medium">Enterprise features built for scale</h3>
            <p className="text-lg leading-[1.5] text-[#737373]">Security, compliance, and admin control for teams of any size.</p>
          </div>
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TEAM_FEATURES.map((feature) => (
              <li key={feature.title} className="flex items-start gap-4">
                <img src={feature.icon} alt="" width={44} height={44} className="size-11 shrink-0 object-contain" aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  <p className="text-lg leading-[1.5]">{feature.title}</p>
                  <p className="text-lg leading-[1.5] text-[#737373]">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <ul className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <li key={testimonial.name} className="flex flex-col gap-4 rounded-xl p-0 md:p-8">
              <img src={testimonial.logo} alt={testimonial.company} width={testimonial.logoWidth} height={testimonial.logoHeight} />
              <blockquote className="text-xl leading-[1.2] text-[#737373]">{testimonial.quote}</blockquote>
              <div className="text-sm leading-[1.6] text-[#c5c5c5]">
                <p className="font-medium">{testimonial.name}</p>
                <p>{testimonial.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
