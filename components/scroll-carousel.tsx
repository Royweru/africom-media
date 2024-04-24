"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ScrollCarousel = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <div className="bg-neutral-800 hidden md:block">
      <div className="flex h-4 items-center justify-center">
        <span className="font-semibold font-mono text-xl uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-4 items-center justify-center">
        <span className="font-semibold text-xl font-mono uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: any }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute z-10  grid place-content-center w-full bottom-1">
        <p className="  bg-transparent  p-8 text-xl text-black font-semibold italic uppercase font-serif  backdrop-blur-sm">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default ScrollCarousel;

const cards = [
  {
    url: "images/gazebo/4.jpg",
    title: "GAZEBO",
    id: 1,
  },
  {
    url: "/images/aframebanner/2.jpg",
    title: "A-Frame banner",
    id: 2,
  },
  {
    url: "/images/bannerwall/3.jpg",
    title: "BANNER WALL",
    id: 3,
  },
  {
    url: "/images/beanbag/4.jpg",
    title: "BEAN BAG",
    id: 4,
  },
  {
    url: "/images/brandedchairs/5.png",
    title: "BRANDED CHAIRS",
    id: 5,
  },
  {
    url: "/images/ottoman/3.jpg",
    title: "OTTOMAN",
    id: 6,
  },
  {
    url: "/images/corporateflag/1.jpg",
    title: "CORPORATE FLAG",
    id: 7,
  },
  {
    url: "/images/parasol/2.jpg",
    title: "PARASOL",
    id: 8,
  },
  {
    url: "/images/tablecloath/2.jpg",
    title: "TABLE CLOATH",
    id: 9,
  },
];
