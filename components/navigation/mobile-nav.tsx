"use client";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";

import React from "react";
import { navigation } from "./nav-hero";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import {Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onCLickFn = async () => {
    setIsOpen((val) => !val);
  };
  return (

      <Sheet >
        <SheetTrigger>
          <Button
            variant="ghost"
            size="icon"
            className=" md:hidden block"
          >
            <Menu className=" w-7 h-7 text-white font-bold " />
          </Button>
        </SheetTrigger>
        <SheetContent className=" bg-zinc-900">
          <div className=" w-full p-4 h-[450px] flex flex-col gap-y-3 bg-transparent md:hidden">
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
