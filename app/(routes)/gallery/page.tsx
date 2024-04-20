import React from "react";
import { productsDetails } from "../products-category/branding/[slug]/page";
import { GalleryArt } from "./components/gallery-art";

const GalleryPage = () => {
  return (
    <div className=" w-full min-h-screen p-0 md:p-6 flex flex-col gap-y-3">
      <div className="relative h-[300px] w-full p-2">
        <video
          className="absolute top-0 left-0 z-0 object-cover w-full h-full opacity-70 rounded-xl"
          autoPlay
          loop
          muted
        >
          {/* Add your video source here */}
          <source src="/videos/bg-anime.mp4" type="video/mp4" />
          Your browser does not support the video tag
        </video>
        <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-white">
          <h1 className="text-4xl font-bold mb-4 text-rose-300 font-mono">
            Welcome to our gallery art work
          </h1>
        </div>
      </div>
       <div className=" w-full">
       {productsDetails.map((product)=>(
        <GalleryArt key={product.id} data={product} />
       ))}
       </div>
     
      
    </div>
  );
};

export default GalleryPage;
