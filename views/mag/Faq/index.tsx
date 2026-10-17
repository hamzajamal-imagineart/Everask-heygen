import { MAG_MEDIA } from "../media.constants";
import { FAQ_QUESTIONS } from "./Faq.constants";

export function Faq() {
  return (
    <section id="faq" className="bg-[#f4f3ef] py-20 md:py-24">
      <div className="mag-container flex flex-col gap-10 lg:flex-row lg:gap-20">
        <div className="flex shrink-0 flex-col items-start gap-6 lg:w-[300px]">
          <h2 className="text-[32px] leading-[1.375] font-medium text-[#131318]">Answers to your top questions</h2>
        </div>
        <ul className="flex min-w-0 flex-1 flex-col gap-2">
          {FAQ_QUESTIONS.map((question) => (
            <li key={question} className="flex items-center justify-between gap-6 bg-white/5 px-6 py-5">
              <p className="text-base leading-[1.6] font-medium text-[#131318]">{question}</p>
              <img src={MAG_MEDIA.iconPlus} alt="" width={17} height={17} className="shrink-0" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
