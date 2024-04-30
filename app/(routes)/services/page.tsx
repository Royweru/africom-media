import { SpecialBox } from "@/components/special-box";
import React from "react";
export const services = [
  {
    id: 1,
    name: "Wall Branding & Wall Paint",
    title: "WallBrandingWallPaint",
    img: "/images/all/mockup5.jpg",
  },
  {
    id: 2,
    name: "Signages",
    title: "Signages",
    img: "/images/all/2.jpg",
  },
  {
    id: 3,
    name: "Point Of Sale Materials",
    title: "PointOfSaleMaterials",
    img: "/images/all/13.jpg",
  },
  {
    id: 4,
    name: "Large Format printing",
    title: "LargeFormatprinting",
    img: "/images/all/58.jpg",
  },
  {
    id: 5,
    name: "Litho & Display Print",
    title: "LithoDisplayPrint",
    img: "/images/all/17.jpg",
  },
  {
    id: 6,
    name: "Fabric Printing",
    title: "FabricPrinting",
    img: "/images/tablecloath/2.jpg",
  },
  {
    id: 7,
    name: "Vehicle Branding",
    title: "VehicleBranding",
    img: "/images/all/48.jpg",
  },
  {
    id: 8,
    name: "Trade & Outdoor Marketing",
    title: "TradeOutdoorMarketing",
    img: "/images/all/70.jpg",
  },
];
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
