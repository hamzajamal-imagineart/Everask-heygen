import { SectionHead } from "@/views/mag/SectionHead";

/* Manus 2.0 (the launch post, 28 September 2026): three of its parts, verbatim lines. */
const ITEMS = [
  { name: "Cascade", kicker: "The agent harness", body: "The latest iteration of Manus's in-house agent harness. It keeps a project light from the start and brings in specialized capabilities only when the work needs them. In one tested configuration, Cascade used 23.2% fewer tokens, finished tasks in 28.2% less time, and cost 32% less to run than the previous system." },
  { name: "Video Editor", kicker: "Manus Studio", body: "Make the first cut in minutes. Keep the final cut for yourself. The clips, images, text, motion graphics, and audio Manus used are all there as separate pieces, so you can swap the song, drop in your own footage, move an animation, and export when you're happy with it. Alchemy mode takes on the creative direction." },
  { name: "Game Dev", kicker: "Manus Studio", body: "Build it. Ship it. Play it together. It uses video, image, and coding models together; start from a playable template and you're playing your idea in the first session. Publish it as a website anyone can play from a link, with multiplayer on a Cloud Computer in a few clicks." },
];

export function Studio() {
  return (
    <section id="studio" className="border-t border-[#ededed] py-20">
      <div className="mag-container">
        <SectionHead title="Introducing Manus 2.0" description="Not a version update: a new architecture, new products, and new capabilities. Three of them, in Manus's words." />
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {ITEMS.map((it) => (
            <li key={it.name} className="flex flex-col gap-3 rounded-2xl bg-[#f6f6f7] p-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-action">{it.kicker}</p>
              <h3 className="font-display text-[20px] font-medium leading-[1.25] tracking-[-0.02em] text-ink">{it.name}</h3>
              <p className="text-[14px] leading-relaxed text-black/55">{it.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
