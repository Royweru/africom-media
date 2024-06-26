"use client";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/providers/ui/dropdown-menu";
import { ArrowBigDown, ArrowDown, Dot } from "lucide-react";
import { ScrollArea, ScrollBar } from "../providers/ui/scroll-area";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useModalStore } from "@/hooks/modal-store";

export const navigation = [
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
    id: 6,
    label: "Contact",
    path: "/contact",
  },

  {
    id: 7,
    label: "Services",
    path: "/services",
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
    path: "/products-category/branding/OTTOMAN",
  },
  {
    id: 8,
    label: "Harp banner",
    path: "/products-category/branding/harpbanner",
  },
  {
    id: 9,
    label: "Parasol",
    path: "/products-category/branding/PARASOL",
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
  {
    id: 13,
    label: "Gazebo",
    path: "/products-category/branding/GAZEBO",
  },
];

export const Navbar = () => {
  const [state, setState] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathName = usePathname();
  const {onOpen} = useModalStore()

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <nav className="bg-transparent w-full border-b md:border-0 md:static stick mb-2">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="javascript:void(0)">
            <img src="/images/logo.png" width={200} height={50} alt="" />
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
              <li
                className="text-red-500 hover:text-indigo-600 
            font-bold cursor-pointer md:flex justify-center items-center"
              >
                Home
              </li>
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <li
                  className={cn(
                    " text-indigo-900 hover:text-white font-semibold cursor-pointer text-xl text-md ",
                    pathName === "/branding" && " text-white "
                  )}
                >
                  Branding
                </li>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <ScrollArea className=" h-[400px]">
                  <ul
                    className="grid w-[400px] gap-3 p-4
                   md:w-[500px] md:grid-cols-2 lg:w-[600px]
                   bg-sky-400 rounded-2xl"
                  >
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
                  className={cn(
                    "text-indigo-900 hover:text-white text-md font-semibold md:flex justify-center items-center",
                    pathName === item.path && " text-white text-md"
                  )}
                >
                  {pathName === item.path && (
                    <Dot className=" w-5 h-5 text-blue-300" />
                  )}

                  <a href={item.path}>{item.label}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="  flex justify-between items-center">
          <button className="  px-3 py-2  bg-gradient-to-br from-pink-400
           via-sky-300 to-white text-2xl font-semibold text-center rounded-md cursor-pointer hover:opacity-85"
           onClick={onOpen}
           >
              Talk to us
          </button>
        </div>
      </div>
    </nav>
  );
};
