import React from "react";

interface GallleryHeaderProps {
  title: string;
  sub: string;
}
export const GallleryHeader = ({ title, sub }: GallleryHeaderProps) => {
  return (
    <div className=" flex flex-col gap-y-2">
      <div className=" text-3xl  font-bold  text-neutral-600 ">
        {title}
      </div>
      <p className=" font-semibold text-xl text-black  italic">
        {sub}
      </p>
      <hr className=" font-bold text-white h-3" />
    </div>
  );
};
