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
        <Trust />
        <Compliance />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
