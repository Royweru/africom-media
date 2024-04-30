
import { CTA } from "@/components/cta";
import { SlidingCarousel } from "@/components/normal-carousel";
import { Services } from "@/components/services";
import { SwipeCarousel } from "@/components/swipe-carousel";
import { TextParallaxContentSection } from "@/components/text-parallax";
import VideoHero from "@/components/video-hero";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
        <SlidingCarousel />
        <TextParallaxContentSection />
        <Services />
        <CTA />
    </main>
  );
}
