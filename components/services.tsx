"use client";
import React, { useState, useEffect } from "react";
import { SpecialBox } from "./special-box";

export const servicesDescription = [
  {
    title: "QUICK TURN AROUND TIME",
    desc: "We work round the clock to ensure we deliver on time",
    img: "/images/why/w1.jpeg",
  },
  {
    title: "GUARANTEED QUALITY",
    desc: "We do not comporomise on quality. We source for the best materials around the world to give our clients the best ",
    img: "/images/why/w3.jpeg",
  },
  {
    title: "INDUSTRY EXPERIENCE",
    desc: "With over a decade of industry experience, under the belt. We have the best team in place and hence ensure our promise to our clients is kept with ease",
    img: "/images/why/w4.jpeg",
  },
];
export const Services = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [heading, setHeading] = useState("");
 

  useEffect(() => {
    // Real-time text writing simulation
    const originalText = "The reason as to why you should choose us";
    let index = 0;
    const interval = setInterval(() => {
      setHeading(originalText.slice(0, index));
      index++;
      if (index > originalText.length) {
        index = 0;
      }
    }, 150);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <div className=" w-full py-5 flex flex-col gap-y-3">
      <h1 className=" text-3xl font-bold italic text-cyan-700 text-center">
        {heading}
      </h1>
      <div className=" w-full py-3 grid md:grid-cols-3  xl:grid-cols-3 px-0  md:px-12 gap-4">
        {servicesDescription.map((service) => (
          <div className=" flex flex-col gap-y-2 " key={service.title}>
            <SpecialBox imgSrc={service.img} />
            <h2 className=" font-bold text-3xl text-sky-500 ">
              {service.title}
            </h2>
            <hr />

            <blockquote className=" font-semibold text-md tracking-wider  text-black">
              {service.desc}
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};
