"use client";

import React, { useState } from "react";
import { MobileNav } from "./mobile-nav";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavLogo } from "./nav-logo";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowBigDown, ArrowDown } from "lucide-react";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";


export const navigation = [
  {
    id: 4,
    label: "GALLERY",
    path: "/gallery",
  },

  {
    id: 2,
    label: "ABOUT",
    path: "/about",
  },

 
  {
    id: 6,
    label: "CONTACT",
    path: "/contact",
  },
];
const brandingItems = [
  {
    id: 1,
    label: "aframebanner",
    path: "/products-category/branding/aframebanner",
  },
  {
    id: 2,
    label: "banner wall",
    path: "/products-category/branding/bannerwall",
  },
  {
    id: 3,
    label: "bean bag",
    path: "/products-category/branding/beanbag",
  },
  {
    id: 4,
    label: "branded chairs",
    path: "/products-category/branding/brandedchairs",
  },
  {
    id: 5,
    label: "corporate flag",
    path: "/products-category/branding/corporateflag",
  },
  {
    id: 6,
    label: "fence wrap",
    path: "/products-category/branding/fencewrap",
  },
  {
    id: 7,
    label: "ottoman",
    path: "/products-category/branding/ottoman",
  },
  {
    id: 8,
    label: "Harp banner",
    path: "/products-category/branding/harpbanner",
  },
  {
    id: 9,
    label: "Parasol",
    path: "/products-category/branding/parasol",
  },
  {
    id: 10,
    label: "Pull up banner",
    path: "/products-category/branding/pullupbanner",
  },
  {
    id: 11,
    label: "Table cloath",
    path: "/products-category/branding/tablecloath",
  },
  {
    id: 12,
    label: "Telescopic banner",
    path: "/products-category/branding/telescopicbanner",
  },
  {
    id: 13,
    label: "Wind cheater banner",
    path: "/products-category/branding/windcheaterbanner",
  },
];

const NavHero = () => {
  const pathName = usePathname();

  return (
    <div
      className="w-full h-full py-2 border-b-[1px] border-slate-300 
    bg-[url('/images/bgnav.jpg')] bg-center md:justify-evenly bg-cover md:px-0 px-6 rounded-b-lg m-2 flex justify-between items-center"
    >
      <NavLogo />
      <MobileNav />
      <nav className=" w-full bg-transparent  hidden md:flex space-x-5 justify-center ">
        <a href="/">
          <div className=" text-3xl font-bold cursor-pointer text-red-600 p-1 italic">
            HOME
          </div>
        </a>
        <DropdownMenu>
  <DropdownMenuTrigger>
    <div
    className="
    text-gray-800
    p-1 
    font-semibold
     font-serif
     text-2xl
      cursor-pointer
       rounded-md flex justify-between items-center
       "
    >
      BRANDING
     <ArrowDown className=" h-5 w-5" />
    </div>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
   
 
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {brandingItems.map((brand) => (
                <a href={brand.path} key={brand.id}>
                <DropdownMenuItem  className=" text-white font-semibold font-serif text-2xl" >
                  {brand.label}
                </DropdownMenuItem>
                </a>
              ))}
            </ul>
         
  </DropdownMenuContent>
</DropdownMenu>
        {navigation.map((nav) => (
          <a href={nav.path} key={nav.id}>
            <div
              className={cn(
                "  text-gray-800  p-1 font-semibold font-sans text-2xl cursor-pointer hover:text-3xl rounded-md ",
                nav.path === pathName && "txt-3xl font-bold text-emerald-900"
              )}
            >
              {nav.label}
            </div>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default NavHero;
