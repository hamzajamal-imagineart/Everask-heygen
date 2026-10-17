import { FAQ_ITEMS, FAQ_SCHEMA } from "./Faq.constants";
import { FaqItem } from "./FaqItem";

export function Faq() {
  return (
    <section id="faq" className="border-t border-line-soft bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <div className="hg-container flex flex-col gap-10 py-20 lg:flex-row lg:gap-[100px] lg:py-[120px]">
        <div className="shrink-0 lg:w-[350px]">
          <h2 className="hg-h2 text-[40px]">FAQs</h2>
        </div>
        <div className="min-w-0 flex-1 divide-y divide-line-soft border-b border-line-soft">
          {FAQ_ITEMS.map((item, index) => (
            <FaqItem key={item.q} q={item.q} a={item.a} defaultOpen={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
