import { Badge } from "../Badge";
import { TRUST_ITEMS } from "./Trust.constants";

export function Trust() {
  return (
    <section
      id="trust"
      className="relative isolate overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 60% 50% at 15% 20%, rgba(40,131,251,0.16), transparent 70%), radial-gradient(ellipse 55% 50% at 90% 85%, rgba(40,131,251,0.12), transparent 70%), linear-gradient(180deg, #ffffff 0%, #eef5ff 50%, #ffffff 100%)",
      }}
    >
      <div className="hg-container relative py-20 lg:py-[120px]">
        <div className="mx-auto flex max-w-[660px] flex-col items-center gap-5 text-center">
          <Badge outlined>Fast, secure, and ethical by design</Badge>
          <h2 className="hg-h2 text-hg-ink">Built on verification, grounded in trust</h2>
          <p className="hg-lede max-w-[560px]">
            AI video has a trust problem. We built EverAsk to solve it with verified identity at the core, enforced moderation, and
            security stress-tested against the highest standards.
          </p>
        </div>
        <div className="mt-[60px] grid gap-4 md:grid-cols-3">
          {TRUST_ITEMS.map((item) => (
            <div key={item.title} className="card flex flex-col gap-3 p-7">
              <h3 className="hg-h3 text-[24px] leading-[1.15] text-ink">{item.title}</h3>
              <p className="text-[15px] leading-relaxed text-body">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
