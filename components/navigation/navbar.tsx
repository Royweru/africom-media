"use client";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowBigDown, ArrowDown } from "lucide-react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

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

export const brandingItems = [
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

export const Navbar = () => {
  const [state, setState] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <nav className="bg-transparent w-full border-b md:border-0 md:static">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="javascript:void(0)">
            <img src="/images/logo.png" width={120} height={50} alt="" />
          </a>
          <div className="md:hidden">
            <button
              className="text-white outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <a href="/">
            <li className="text-red-500 hover:text-indigo-600 font-bold cursor-pointer">
              HOME
            </li>
            </a>
           
            <DropdownMenu>
              <DropdownMenuTrigger>
                <li className="text-white hover:text-indigo-600 font-semibold cursor-pointer">
                  BRANDING
                </li>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
              <ScrollArea className=" h-[400px]">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-sky-400">
               
                    {brandingItems.map((brand) => (
                      <a href={brand.path} key={brand.id}>
                        <DropdownMenuItem className=" text-white font-semibold font-serif text-2xl">
                          {brand.label}
                        </DropdownMenuItem>
                      </a>
                    ))}
                  </ul>
                  <ScrollBar orientation="vertical" />
                </ScrollArea>
              </DropdownMenuContent>
            </DropdownMenu>
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-white hover:text-indigo-600 font-semibold"
                >
                  <a href={item.path}>{item.label}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
