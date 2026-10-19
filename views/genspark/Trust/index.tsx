import { SectionHead } from "@/views/mag/SectionHead";

/* Genspark's "Enterprise-grade from day one." four guarantees, verbatim, credited to Genspark. */
const ITEMS = [
  { name: "No training on your data", body: "Your prompts, files, and outputs are never used to train foundation models, contractually and technically." },
  { name: "SAML SSO & SCIM", body: "Okta, Microsoft Entra ID, Google Workspace, and any SAML 2.0 identity provider. Automated provisioning and role sync." },
  { name: "Workspace isolation", body: "Each tenant's data is isolated and encrypted at rest and in transit. Customer-managed keys available on Enterprise." },
  { name: "Regional deployment", body: "Deploy in the US, the EU, or APAC. VPC peering and private networking for regulated industries." },
];

export function Trust() {
  return (
    <section id="trust" className="border-t border-[#ededed] py-20">
      <div className="mag-container">
        <SectionHead
          title="Enterprise-grade from day one."
          description="Genspark's guarantees for its side of the work: it never trains on customer content, isolates every workspace, and is independently audited (SOC 2 Type II, ISO 27001)."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it) => (
            <li key={it.name} className="rounded-2xl bg-[#f6f6f7] p-6">
              <h3 className="font-display text-[18px] font-medium leading-[1.25] tracking-[-0.02em] text-ink">{it.name}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-black/55">{it.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
