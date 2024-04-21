import { Pointer } from "@/components/pointer";
import { BrandHeader } from "@/components/ui/brand-header";
import React from "react";

const points = [
  {
    id: 1,
    description: " AN ESTABLISHED NAME IN EVENT BRANDING PRINT & MANUFACTURE",
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
    <div className=" min-h-screen w-full bg-[url('/images/about-holder.avif')] gap-y-6 bg-cover bg-center p-6 backdrop-blur-md">
      <BrandHeader title="ABOUT AFRICOM" />
      <div className=" flex justify-center w-full p-4">
        <ul className=" flex flex-col gap-y-6 font-semibold text-2xl">
          {points.map((point) => (
            <Pointer key={point.id} content={point.description} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
