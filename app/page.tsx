
import ScrollCarousel from "@/components/scroll-carousel";
import { Services } from "@/components/services";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
        <ScrollCarousel />
        <Services />
    </main>
  );
}
