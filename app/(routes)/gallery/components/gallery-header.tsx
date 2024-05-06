import React from "react";

interface GallleryHeaderProps {
  title: string;
  sub: string;
}
export const GallleryHeader = ({ title, sub }: GallleryHeaderProps) => {
  return (
    <div className=" flex flex-col gap-y-2 my-4">
      <div className=" text-3xl  font-bold  text-neutral-600 ">
        {title}
      </div>
      <p className=" font-semibold text-sm font-mono tracking-wide  text-black ">
        {sub}
      </p>
      <hr className=" font-bold text-white h-3" />
    </div>
  );
};
