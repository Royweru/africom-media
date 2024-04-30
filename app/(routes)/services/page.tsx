import { SpecialBox } from "@/components/special-box";
import React from "react";
import { services } from "@/data/service-details";
const ServicesPage = () => {
  return (
    <div className=" w-full h-full p-5 flex flex-col gap-y-4">
      <div
        className=" font-semibold text-4xl flex 
        justify-center items-center text-neutral-800 font-serif   
        tracking-wide  bg-gradient-to-tl from-blue-300 via-slate-50 to-sky-300 rounded-md p-5"
      >
        SERVICES WE OFFER
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
