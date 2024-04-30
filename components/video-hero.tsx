"use client";
import React, { useEffect, useState } from "react";

interface VideoHeroProps {
  header: string;
}

export const VideoHero: React.FC<VideoHeroProps> = ({ header }) => {
  const [text, setText] = useState<string>(""); // State to hold the text being written

  useEffect(() => {
    // Real-time text writing simulation
    const originalText =
      "The reason why you should work with us we are a credible organisation that offers top notch services and help in car services and automobile";
    let index = 0;
    const interval = setInterval(() => {
      setText(originalText.slice(0, index));
      index++;
      if (index > originalText.length) {
        index = 0;
      }
    }, 150);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative h-[250px] w-full p-2">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 z-0 object-cover w-full h-full opacity-90 rounded-xl"
        autoPlay
        loop
        muted
      >
        {/* Add your video source here */}
        <source src="/videos/bg-anime.mp4" type="video/mp4" />
        Your browser does not support the video tag
      </video>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-white">
        <h1 className="text-4xl font-bold mb-4 text-black ">{header}</h1>
      </div>
    </div>
  );
};

export default VideoHero;
