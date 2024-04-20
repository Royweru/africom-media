
import { CTA } from "@/components/cta";
import ScrollCarousel from "@/components/scroll-carousel";
import { Services } from "@/components/services";
import VideoHero from "@/components/video-hero";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
        <VideoHero />
        <ScrollCarousel />
        <Services />
        <CTA />
    </main>
  );
}
