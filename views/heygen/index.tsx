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
import { VideoAgent } from "./VideoAgent";

export default function HeygenView() {
  return (
    <>
      <SiteHeader />
      <main className="hg-page flex-1">
        <Hero />
        <AvatarSection />
        <Research />
        <VideoAgent />
        <AiStudio />
        <Translation />
        <Tools />
        <div
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 15% 20%, rgba(40,131,251,0.16), transparent 70%), radial-gradient(ellipse 55% 50% at 90% 70%, rgba(40,131,251,0.12), transparent 70%), linear-gradient(180deg, #ffffff 0%, #eef5ff 45%, #f3f8ff 80%, #ffffff 100%)",
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
