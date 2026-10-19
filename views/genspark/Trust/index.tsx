import { SectionHead } from "@/views/mag/SectionHead";

/* Genspark's four guarantees as hairline rows, their words cut to one line each. */
const ITEMS = [
  { name: "No training on your data", body: "Your prompts, files, and outputs are never used to train foundation models, contractually and technically." },
  { name: "SAML SSO & SCIM", body: "Okta, Microsoft Entra ID, Google Workspace, and any SAML 2.0 identity provider." },
  { name: "Workspace isolation", body: "Each tenant's data is isolated and encrypted at rest and in transit." },
  { name: "Regional deployment", body: "Deploy in the US, the EU, or APAC. VPC peering and private networking for regulated industries." },
];

export function Trust() {
  return (
    <section id="trust" className="border-t border-[#ededed] py-20">
      <div className="mag-container">
        <SectionHead title="Enterprise-grade from day one." description="Genspark's guarantees for its side of the work. Independently audited: SOC 2 Type II and ISO 27001." />
        <ul className="mt-10 grid border-t border-[#ededed] md:grid-cols-2 md:gap-x-12">
          {ITEMS.map((it) => (
            <li key={it.name} className="grid gap-1 border-b border-[#ededed] py-5 sm:grid-cols-[200px_minmax(0,1fr)] sm:gap-6">
              <h3 className="font-display text-[17px] font-medium leading-snug tracking-[-0.01em] text-ink">{it.name}</h3>
              <p className="text-[14px] leading-relaxed text-black/50">{it.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
