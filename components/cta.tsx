"use client";
import { useModalStore } from "@/hooks/modal-store";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./providers/ui/button";

export const CTA = () => {
  const [state, setState] = useState(false);
  const { onOpen } = useModalStore();

  // Replace javascript:void(0) path with your path

  const partners = [
    {
      label: "Cocacola",
      img: "/images/partners/cocacola.png",
    },
    {
      label: "Aghakan",
      img: "/images/partners/aghakan.jpeg",
    },
    {
      label: "Dura coat",
      img: "/images/partners/duracoat.jpeg",
    },
    {
      label: "Huawei",
      img: "/images/partners/huawei.jpeg",
    },
    {
      label: "Jumia",
      img: "/images/partners/jumia.jpeg",
    },
    {
      label: "Mtiba",
      img: "/images/partners/mtiba.jpeg",
    },
    {
      label: "Safaricom",
      img: "/images/partners/safcom.jpeg",
    },
  ];

  return (
    <>
      <section className="py-28">
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h1 className="text-sm  text-black font-medium">
              Over 200 successful deals
            </h1>
            <h2 className="text-4xl  text-white font-extrabold md:text-5xl">
              We help startups to grow and make money
            </h2>
            <p className=" text-xl font-semibold  text-neutral-500 ">
              &#34;Branding is simply a more efficient way to make sales&#34;{" "}
              <br />
              <span className=" text-xs font-bold font-mono text-zinc-200 italic ml-4">
                Al Ries
              </span>
            </p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <Button
                onClick={onOpen}
                variant="secondary"
                className=" bg-gradient-to-br 
               from-sky-300 via-blue-500 to-cyan-800 "
              >
                Get started
              </Button>
            </div>
          </div>
          <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
            <img
              src="https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
              className=" md:rounded-tl-[108px]"
              alt=""
            />
          </div>
        </div>
        <div className="mt-14 px-4 md:px-8">
          <p className="text-center text-sm  text-pink-500 font-semibold">
            Trusted by the best companies
          </p>
          <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
            {partners.map((partner) => (
              <div
                className=" w-[100px] h-[50px] rounded relative"
                key={partner.label}
              >
                <Image
                  src={partner.img}
                  alt=""
                  className=" bg-center bg-cover rounded-2xl"
                  fill
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
