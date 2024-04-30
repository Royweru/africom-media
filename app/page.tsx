
import { CTA } from "@/components/cta";
import { SlidingCarousel } from "@/components/normal-carousel";
import { Services } from "@/components/services";
import { SwipeCarousel } from "@/components/swipe-carousel";
import { TextParallaxContentSection } from "@/components/text-parallax";
import { MarqueeText } from "@/components/ui/marquee-text";
import VideoHero from "@/components/video-hero";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-y-2 items-center justify-between p-0">
        <SlidingCarousel />
        <MarqueeText txt1="Awsome services offered by Africom EA"/>
        <TextParallaxContentSection />
        <CTA />
    </main>
  );
}
