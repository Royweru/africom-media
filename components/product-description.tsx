import React from "react";
interface ProductDescriptionProps {
  content: any;
}
export const ProductDescription = ({ content }: ProductDescriptionProps) => {
  return (
    <div className=" w-full font-semibold tracking-wide text-black h-full justify-center py-12 md:px-12 px-0 justify-self-center">
      <blockquote className=" text-xl  font-mono  tracking-wide">
        {content.description}
      </blockquote>
    </div>
  );
};
