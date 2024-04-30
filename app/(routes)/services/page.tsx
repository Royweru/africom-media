import { SpecialBox } from "@/components/special-box";
import React from "react";
import { services } from "@/data/service-details";
const ServicesPage = () => {
  return (
    <div className=" w-full h-full p-5 flex flex-col gap-y-4">
      <div
        className=" font-semibold text-4xl flex 
        justify-center items-center
        text-white font-serif  tracking-wide 
         bg-[url('/images/hero-bg.jpeg')] bg-center bg-cover rounded-md"
      >
        Services we offer
      </div>
      <hr />
      <div className=" font-bold grid w-full gap-4 md:grid-cols-3 sm:grid-cols-2 ">
        {services.map((service) => (
          <SpecialBox
            key={service.id}
            imgSrc={service.img}
            label={service.name}
            slug={service.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
