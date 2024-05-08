"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
export const ContentCarousel = [
  {
    id: 1,
    imageUrl: "/images/all/9.jpg",
    header: "We do branding",
  },
  {
    id: 2,
    imageUrl: "/images/all/12.jpg",
    header: "We do branding",
  },
  {
    id: 3,
    imageUrl: "/images/all/15.jpg",
    header: "We do branding",
  },
  {
    id: 4,
    imageUrl: "/images/all/16.jpg",
    header: "We do branding",
  },
  {
    id: 5,
    imageUrl: "/images/all/10.jpg",
    header: "We do branding",
  },
];

export function SlidingCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="w-full mb-2 h-full py-4 md:p-0 relative bg-white">
      <Carousel
        plugins={[plugin.current]}
        className="relative w-full h-full"
    
      >
         <div className="absolute top-0 left-0 w-full text-center">
          <FadingText />
        </div>
        <CarouselContent className=" flex h-full md:p-2">
          {ContentCarousel.map((content) => (
            <CarouselItem
              key={content.id}
              className=" flex-shrink-0 w-full "
            >
              <div className="w-full md:h-[400px] h-[300px] relative">
                <Image
                  fill
                  src={content.imageUrl}
                  alt=""
                  className=" bg-cover bg-center rounded-xl "
                />
              </div>
            </CarouselItem>
            
          ))}
        </CarouselContent>
      
        <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2" />
        <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2" />
      </Carousel>
    </div>
  );
}
function FadingText() {
    return (
      <div className="text-white text-3xl font-bold">
        <div className="fadeInOut">Stylish Fading Text</div>
      </div>
    )
  }