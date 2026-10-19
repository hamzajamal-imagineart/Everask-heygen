import { SectionHead } from "@/views/mag/SectionHead";
import { TOOLS } from "./Tools.constants";

/* Topaz's "Each tool gets it closer to perfect" as EverAsk's hairline list:
   two columns of rows, the tool's name in ink and its line in muted type,
   no cards. A different shape from the Magnific page's gradient tiles. */
export function Tools() {
  return (
    <section id="tools" className="border-t border-[#ededed] py-20">
      <div className="mag-container">
        <SectionHead
          title="Each tool gets it closer to perfect"
          description="The ultimate finishing step for every image. Fix issues. Restore focus. Remove noise. Enhance details. Crop in. Prepare for print. All using AI trained on millions of images."
        />
        <ul className="mt-10 grid border-t border-[#ededed] md:grid-cols-2 md:gap-x-12">
          {TOOLS.map((tool) => (
            <li key={tool.name} className="grid gap-1 border-b border-[#ededed] py-5 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6">
              <h3 className="font-display text-[17px] font-medium leading-snug tracking-[-0.01em] text-ink">{tool.name}</h3>
              <p className="text-[14px] leading-relaxed text-black/50">{tool.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
