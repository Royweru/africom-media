import React from "react";

interface GallleryHeaderProps {
  title: string;
  sub: string;
}
export const GallleryHeader = ({ title, sub }: GallleryHeaderProps) => {
  return (
    <div className=" flex flex-col gap-y-2">
      <div className=" text-3xl  font-bold text-sky-400 font-serif">
        {title}
      </div>
      <p className=" font-semibold text-xl font-serif italic">
        {sub}
      </p>
      <hr className=" font-bold text-white h-3" />
    </div>
  );
};
