import { AppTouchpoints } from "@/views/mag/AppTouchpoints";
import { SiteFooter } from "@/views/mag/SiteFooter";
import { SiteHeader } from "@/views/mag/SiteHeader";
import { Breadcrumbs } from "./Breadcrumbs";
import { Faq } from "./Faq";
import { VIDEO_FAQ } from "./Faq/Faq.constants";
import { FinalCta } from "./FinalCta";
import { Hero } from "./Hero";
import { HERO_SUBHEAD_VIDEO } from "./Hero/Hero.constants";
import { Models } from "./Models";
import { VIDEO_MODELS } from "./Models/video-models";
import { VideoUpscale } from "./VideoUpscale";
import { topazVideoConfig } from "./config";

/* Topaz Video (Hamza, 20 Oct): its own page, the same frame as Topaz Image. Hero on Topaz's
   video-upscale clip, the proof line, Topaz's Proteus model family as the picker, then the
   video-upscale page's audiences and features, video FAQ, the sky band. */
export default function TopazVideoView() {
  const cta = { href: topazVideoConfig.links.start, label: "Start upscaling video" };
  return (
    <>
      <SiteHeader />
      <main className="mag-page flex-1">
        <Breadcrumbs label="Topaz Video" />
        <Hero kind="video" subhead={HERO_SUBHEAD_VIDEO} cta={cta} />
        <Models
          id="models"
          title="Precision video upscale and enhancement"
          description="Topaz's Proteus family: essential video enhancement models designed for quality, precision, and control. Precision models attempt to improve quality without changing the source characteristics."
          models={VIDEO_MODELS}
          cta={{ href: topazVideoConfig.links.start, label: "Upscale a video" }}
        />
        <VideoUpscale />
        <Faq items={VIDEO_FAQ} idPrefix="topaz-video-faq" />
        <FinalCta product="Topaz Video" line="Upscale, denoise and restore footage to 4K, one prompt away from the rest of the job." cta={cta} />
        <AppTouchpoints />
      </main>
      <SiteFooter />
    </>
  );
}
