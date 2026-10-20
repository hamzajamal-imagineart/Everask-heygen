import { AppTouchpoints } from "@/views/mag/AppTouchpoints";
import { SiteFooter } from "@/views/mag/SiteFooter";
import { SiteHeader } from "@/views/mag/SiteHeader";
import { Breadcrumbs } from "./Breadcrumbs";
import { CtaBand } from "./CtaBand";
import { Faq } from "./Faq";
import { IMAGE_FAQ } from "./Faq/Faq.constants";
import { Features } from "./Features";
import { FinalCta } from "./FinalCta";
import { Hero } from "./Hero";
import { HERO_SUBHEAD_IMAGE } from "./Hero/Hero.constants";
import { Meet } from "./Meet";
import { Models } from "./Models";
import { IMAGE_MODELS } from "./Models/image-models";
import { Years } from "./Years";
import { topazImageConfig } from "./config";

/* Topaz Image (Hamza, 20 Oct: the image and video upscalers are separate pages now). The
   topazlabs.com/topaz-photo order, minus pricing, with Topaz's Gigapixel models up front as the
   model picker in place of the old Toolbox band. */
export default function TopazImageView() {
  const cta = { href: topazImageConfig.links.start, label: "Start enhancing" };
  return (
    <>
      <SiteHeader />
      <main className="mag-page flex-1">
        <Breadcrumbs label="Topaz Image" />
        <Hero kind="image" subhead={HERO_SUBHEAD_IMAGE} cta={cta} />
        <Models
          id="models"
          title="Precision upscaling for images"
          description="Topaz's Gigapixel models: essential image enhancement designed for quality, precision, and control. Precision models attempt to improve quality without changing the source characteristics."
          models={IMAGE_MODELS}
          cta={{ href: topazImageConfig.links.start, label: "Upscale an image" }}
        />
        <Meet />
        <Years />
        <CtaBand />
        <Features />
        <Faq items={IMAGE_FAQ} idPrefix="topaz-image-faq" />
        <FinalCta product="Topaz Image" line="Fix blur, noise and low resolution in one click, one prompt away from the rest of the job." cta={cta} />
        <AppTouchpoints />
      </main>
      <SiteFooter />
    </>
  );
}
