import React from "react";
interface ProductDescriptionProps {
  content: any;
}
export const ProductDescription = ({ content }: ProductDescriptionProps) => {
  return (
    <div className=" w-full font-bold tracking-wide text-black h-full justify-center py-12 md:px-12 px-0">
      <blockquote className=" text-2xl italic font-serif">
        {content.description}
      </blockquote>
    </div>
  );
};
