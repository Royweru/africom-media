"use client";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowBigDown, ArrowDown } from "lucide-react";
import React from "react";
import { navigation } from "./nav-hero";
import { brandingItems } from "./nav-hero";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onCLickFn = async () => {
    setIsOpen((val) => !val);
  };
  return (
    <Sheet>
      <SheetTrigger>
        <Button
          variant="ghost"
          size="icon"
          className=" md:hidden block hover:text-white"
        >
          <Menu className=" w-7 h-7  text-zinc-800 font-bold " />
        </Button>
      </SheetTrigger>
      <SheetContent className=" bg-zinc-900">
        <div className=" w-full p-4 h-[450px] flex flex-col gap-y-3 bg-transparent md:hidden">
        <a href="/">
          <div className=" text-xl  w-full  flex items-center justify-center font-bold cursor-pointer text-red-600 p-1 italic">
            HOME
          </div>
        </a>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div
                className="
     text-white 
    font-semibold
     font-serif
      cursor-pointer
        w-full p-1 text-xl flex justify-center items-center
       "
              >
                BRANDING
             
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {brandingItems.map((brand) => (
                  <a href={brand.path} key={brand.id}>
                    <DropdownMenuItem className=" text-white font-semibold font-serif text-2xl">
                      {brand.label}
                    </DropdownMenuItem>
                  </a>
                ))}
              </ul>
            </DropdownMenuContent>
          </DropdownMenu>
          {navigation.map((nav) => (
            <a href={nav.path} key={nav.id}>
              <div className=" w-full p-1 text-xl flex justify-center items-center font-serif font-semibold text-white">
                {nav.label}
              </div>
            </a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
