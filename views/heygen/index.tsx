import { AiStudio } from "./AiStudio";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { AvatarSection } from "./AvatarSection";
import { Compliance } from "./Compliance";
import { Faq } from "./Faq";
import { FinalCta } from "./FinalCta";
import { Hero } from "./Hero";
import { Research } from "./Research";
import { Tools } from "./Tools";
import { Translation } from "./Translation";
import { Trust } from "./Trust";
import { TrustBar } from "./TrustBar";
import { VideoAgent } from "./VideoAgent";
import { HG_MEDIA } from "./media.constants";

export default function HeygenView() {
  return (
    <>
      <SiteHeader />
      <main className="hg-page flex-1">
        <Hero />
        <TrustBar />
        <AvatarSection />
        <Research />
        <VideoAgent />
        <AiStudio />
        <Translation />
        <Tools />
        <div
          className="bg-cover bg-[position:50%_70%]"
          style={{
            backgroundImage: `linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.72) 18%, rgba(255,255,255,0.45) 55%, rgba(255,255,255,0.6) 85%, #ffffff 100%), url(${HG_MEDIA.heroSky})`,
          }}
        >
          <Trust />
          <Compliance />
        </div>
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
