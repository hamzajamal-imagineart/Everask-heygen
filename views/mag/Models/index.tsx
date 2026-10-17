import { MODELS } from "./Models.constants";

export function Models() {
  const tiles = [...MODELS, ...MODELS];

  return (
    <section id="models" className="py-20 md:py-24">
      <div className="mag-container">
        <div className="mx-auto flex max-w-[672px] flex-col items-center text-center">
          <h2 className="mag-h2">With all the latest models</h2>
          <p className="mag-lede pt-4">
            Get access to the world&apos;s leading AI companies so you never have to choose between the best models and the
            easiest workflow.
          </p>
        </div>
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
