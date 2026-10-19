import { Cta } from "../Cta";
import { magConfig } from "../config";
import { MAG_MEDIA } from "../media.constants";
import { SectionHead } from "../SectionHead";

export function StartSimple() {
  return (
    <section id="start" className="border-t border-[#ededed] py-20">
      <div className="mag-container">
        <SectionHead
          title="Start simple. Scale when you're ready"
          description="From a single tool to a complete workflow, at your own pace."
          action={
            <Cta href={magConfig.links.start} size="sm" icon={MAG_MEDIA.iconArrowRightXs}>
              Start creating
            </Cta>
          }
        />
        <div className="grid gap-4 pt-12 lg:grid-cols-[403fr_798fr]">
          <article className="relative flex flex-col gap-6 overflow-hidden rounded-xl bg-[#e3e3e3] text-[#292928] lg:h-[846px]">
            <header className="flex flex-col gap-4 p-8 lg:p-10">
              <h3 className="text-2xl leading-[1.5] font-medium">Every tool, ready to go</h3>
              <p className="max-w-[323px] text-base leading-[1.6]">
                Every tool, ready to go. Image, video, audio, 3D—thirty tools, no setup. Open what you need, make what you want.
              </p>
            </header>
            <div className="flex flex-1 items-end pl-5">
              <img src={MAG_MEDIA.startTools} alt="" className="h-auto w-[470px] max-w-none" loading="lazy" />
            </div>
          </article>
          <div className="grid gap-4 lg:grid-rows-[318px_1fr]">
            <article className="relative overflow-hidden rounded-xl bg-[#101010] text-[#e3e3e3]">
              <img src={MAG_MEDIA.startCanvasBg} alt="" className="absolute inset-0 hidden h-full w-full lg:block" aria-hidden="true" />
              <div className="relative flex flex-col gap-4 p-8 lg:max-w-[400px] lg:p-10">
                <h3 className="max-w-[320px] text-2xl leading-[1.5] font-medium">Your entire creative process on one node-based canvas</h3>
                <p className="max-w-[320px] text-base leading-[1.6] text-[#c5c5c5]">
                  All your tools. All your workflows. One infinite, node-based canvas. Branch ideas, compare versions, work with your
                  team, all in Spaces.
                </p>
              </div>
              <img
                src={MAG_MEDIA.startCanvas}
                alt=""
                className="relative h-auto w-full lg:absolute lg:top-[12.5px] lg:right-0 lg:h-[293px] lg:w-auto lg:max-w-none lg:[mask-image:linear-gradient(to_right,transparent_0%,#000_22%)]"
                loading="lazy"
              />
            </article>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="flex flex-col gap-6 overflow-hidden rounded-xl bg-[#3f0808] text-[#e3e3e3] md:h-[512px]">
                <header className="flex flex-col gap-4 p-8 lg:p-10">
                  <h3 className="text-2xl leading-[1.5] font-medium">One place, whole team</h3>
                  <p className="max-w-[311px] text-base leading-[1.6] text-[#e3c2c2]">
                    Organize brand assets, generated content, and workflows with Projects. Your team works together, your work stays
                    together.
                  </p>
                </header>
                <div className="mt-auto pb-6 pl-8">
                  <img src={MAG_MEDIA.startTeam} alt="" className="h-[240px] w-auto max-w-none" loading="lazy" />
                </div>
              </article>
              <article className="relative overflow-hidden rounded-xl bg-[#1d4a63] text-[#f5f5f5] md:h-[512px]">
                <img src={MAG_MEDIA.startApp} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                <header className="relative flex flex-col gap-4 p-8 lg:p-10">
                  <h3 className="text-2xl leading-[1.5] font-medium">Workflow in one click</h3>
                  <p className="max-w-[311px] text-base leading-[1.6] text-[#bedbea]">
                    Save any complex on-brand workflow as an App. The next person runs it in one click.
                  </p>
                </header>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
