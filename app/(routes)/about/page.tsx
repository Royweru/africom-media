import { Pointer } from "@/components/pointer";
import { BrandHeader } from "@/components/providers/ui/brand-header";
import VideoHero from "@/components/video-hero";
import React from "react";

const points = [
  {
    id: 1,
    description: "AN ESTABLISHED NAME IN EVENT BRANDING PRINT & MANUFACTURE",
  },
  {
    id: 2,
    description: "GLOBAL DISTRIBUTION OF OUR PRODUCTS",
  },
  {
    id: 3,
    description: "UNIQUELY DESIGNED & PATENTED PRODUCTS",
  },
  {
    id: 4,
    description: "A LONG HISTORY OF GREAT CUSTOMER SERVICE",
  },
  {
    id: 5,
    description: "FORWARD THINKING AND PROGRESSIVE",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen w-full bg-pink-500 text-white">
      {/* Video Header */}
      <VideoHero header="About Africom" />

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-4xl font-bold mb-8">Our Values</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point) => (
            <li key={point.id}>
              <Pointer content={point.description} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
