"use client";

import { PlusIcon, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface SpecialBoxProps {
  imgSrc?: string;
  label: string;
  slug: string;
}
export const SpecialBox: React.FC<SpecialBoxProps> = ({
  imgSrc,
  label,
  slug,
}) => {
  const router = useRouter();
  return (
    <div
      className=" hover:cursor-pointer rounded-md 
    md:p-4 p-0 flex justify-center items-center relative col-span-1 h-[400px] group"
    >
      <Image
        src={imgSrc || "/images/s1.jpeg"}
        alt=""
        className=" bg-center bg-cover bg-no-repeat rounded-xl group-hover:scale-105"
        fill
      />
      <div className=" absolute font-semibold tracking-wide text-2xl text-sky-300 bg-transparent flex w-full bottom-2 justify-center text-center">
        {label}
      </div>
      <div className=" absolute hidden bg-transparent  group-hover:flex w-full left-0 justify-center text-center">
        <PlusIcon
          onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
            e.stopPropagation();
            router.push(`/services/${slug}`);
          }}
          className=" w-10 h-10 text-white font-bold"
        />
      </div>
    </div>
  );
};
