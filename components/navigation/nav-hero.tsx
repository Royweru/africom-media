"use client"

import React, { useState } from "react";
import { MobileNav } from "./mobile-nav";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
export  const navigation = [
  {
    id: 4,
    label: "Gallery",
    path: "/gallery",
  },

  {
    id: 2,
    label: "About",
    path: "/about",
  },
  {
    id: 3,
    label: "Branding",
    path: "/branding",
  },

  {
    id: 5,
    label: "Blog",
    path: "/blog",
  },
  {
    id: 6,
    label: "Contact",
    path: "/contact",
  },
  
  
];

const NavHero = () => {

  const pathName = usePathname()
 
  return (
    <div className="w-full h-full py-2 border-b-[1px] border-slate-300 
    bg-[url('/images/bgnav.jpg')] bg-center bg-cover rounded-b-lg m-2">
  <MobileNav />
      <nav className=" w-full bg-transparent  hidden md:flex space-x-5 justify-center ">
        <a href="/">
        <div className=" text-3xl font-bold cursor-pointer text-red-600 p-1 italic">
          HOME
        </div>
        </a>
       
        {navigation.map((nav) => (
          <a href={nav.path} key={nav.id}>
            <div className={ cn(" text-sky-600  p-1 font-semibold font-sans text-2xl cursor-pointer hover:text-3xl rounded-md ",
              nav.path===pathName&&"txt-3xl font-bold text-emerald-900"
            )}>
              {nav.label}
            </div>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default NavHero;
