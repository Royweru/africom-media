
import { CTA } from "@/components/cta";
import { SlidingCarousel } from "@/components/hero/normal-carousel";
import { TextParallaxContentSection } from "@/components/text-parallax";
import { MarqueeText } from "@/components/ui/marquee-text";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-y-2 items-center justify-between p-0">
        <SlidingCarousel />
        <MarqueeText txt1="Awesome services offered by Africom EA"/>
        <TextParallaxContentSection />
        <CTA />
    </main>
  );
}
