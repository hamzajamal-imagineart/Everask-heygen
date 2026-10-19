/* Topaz's "Over 2 billion images processed." with its four Trustpilot reviews as a 2×2 of cards, verbatim. */
const REVIEWS = [
  { quote: "The software works will with my old videos and pictures and even new videos and pictures can pop even more with topaz. I can sorta do the same in adobe products but it takes longer and certain features like the AI upscale are unmatched with topaz.", who: "John" },
  { quote: "Easy to use program with very good results. I particularly like the upscale and denoise feature which I think is second to none, when it comes to fixing less than ideal photos it can mean the difference between keeping or deleting. Very happy with purchase.", who: "Customer" },
  { quote: "I use Topaz Photo every day, and while I wish there were a few more tools like I have in Adobe Lightroom or Photoshop, I'm quite happy with the simplicity and results.", who: "Louis H" },
  { quote: "Exceeded my expectations. Used it to upscale some low resolution 1400px images upscales 4x. The results were almost flawless. Very happy and cant wait to see the results on some of my fine art that I will be upscaling and printing.", who: "Etienne" },
];

const Stars = () => (
  <span className="flex gap-0.5 text-action" aria-label="5 out of 5">
    {[0, 1, 2, 3, 4].map((i) => (
      <svg key={i} viewBox="0 0 20 20" className="size-4" fill="currentColor" aria-hidden>
        <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L10 14.9l-5.3 2.8 1.1-5.9L1.5 7.7l5.9-.8L10 1.5z" />
      </svg>
    ))}
  </span>
);

export function Reviews() {
  return (
    <section id="reviews" className="border-t border-[#ededed] py-20">
      <div className="container-page">
        <h2 className="mx-auto max-w-2xl text-center font-display text-[36px] font-medium leading-[1.05] tracking-[-0.03em] text-ink sm:text-[52px]">
          Over 2 billion
          <br />
          images processed.
        </h2>
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {REVIEWS.map((r) => (
            <li key={r.who} className="flex flex-col gap-4 rounded-2xl bg-[#f6f6f7] p-7">
              <Stars />
              <p className="text-[15px] leading-relaxed text-ink/80">“{r.quote}”</p>
              <p className="mt-auto text-[13px] text-black/45">
                <span className="font-medium text-ink">{r.who}</span> · Trustpilot review of Topaz Photo
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
