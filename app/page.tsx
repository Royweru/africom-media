
import { CTA } from "@/components/cta";
import { Services } from "@/components/services";
import { SwipeCarousel } from "@/components/swipe-carousel";
import VideoHero from "@/components/video-hero";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
        <VideoHero />
        
        <Services />
        <CTA />
    </main>
  );
}
