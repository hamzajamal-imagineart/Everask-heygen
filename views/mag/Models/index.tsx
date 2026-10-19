import { MODELS } from "./Models.constants";
import { SectionHead } from "../SectionHead";

export function Models() {
  const tiles = [...MODELS, ...MODELS];

  return (
    <section id="models" className="py-14">
      <div className="mag-container">
        <SectionHead
          title="With all the latest models"
          description="Get access to the world's leading AI companies so you never have to choose between the best models and the easiest workflow."
        />
      </div>
      {/* A compact chip rail (Hamza, 19 Oct: the tall tiles "took too much space"). */}
      <div className="mag-marquee mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <ul className="mag-marquee-track flex gap-2" aria-label="Available models">
          {tiles.map((model, index) => (
            <li
              key={`${model.name}-${index}`}
              className="flex h-12 shrink-0 items-center justify-center rounded-pill bg-[#f6f6f7] px-5"
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
