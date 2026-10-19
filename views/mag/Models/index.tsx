import { MODELS } from "./Models.constants";
import { SectionHead } from "../SectionHead";

export function Models() {
  const tiles = [...MODELS, ...MODELS];

  return (
    <section id="models" className="py-20">
      <div className="mag-container">
        <SectionHead
          title="With all the latest models"
          description="Get access to the world's leading AI companies so you never have to choose between the best models and the easiest workflow."
        />
      </div>
      <div className="mag-marquee mt-12 overflow-hidden">
        <ul className="mag-marquee-track flex gap-2" aria-label="Available models">
          {tiles.map((model, index) => (
            <li
              key={`${model.name}-${index}`}
              className="flex h-[220px] w-[180px] shrink-0 items-center justify-center bg-white md:h-[280px] md:w-[220px]"
              aria-hidden={index >= MODELS.length}
            >
              <span className="flex items-center gap-2.5 text-sm font-medium text-[#131318]">
                <img src={model.icon} alt="" width={17} height={17} aria-hidden="true" />
                {model.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
