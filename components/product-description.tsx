import React from "react";
interface ProductDescriptionProps {
  content: any;
}
export const ProductDescription = ({ content }: ProductDescriptionProps) => {
  return (
    <div className=" w-full font-bold tracking-wide text-white h-full justify-center p-12">
      <blockquote className=" text-2xl italic">
        {content.description}
      </blockquote>
    </div>
  );
};
