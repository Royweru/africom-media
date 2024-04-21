"use client";

import { useModalStore } from "@/hooks/modal-store";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export const EmailModal = () => {
  const { isOpen, onClose } = useModalStore();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState("");
  const [isErr, setIsErr] = useState("");

  const onSubmit = async () => {
    const templateParams = {
      from_name: email,
      to_name: "Roy Matheri",
      message,
    };
    try {
      setIsLoading(true);
      if(!name) setIsErr("Name is required!")
      if(!email) setIsErr("Email is required!")
      if(!message) setIsErr("Message is required!")
      if(name &&email &&message){
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
        );
        setIsSuccess(
          `Your messsage has been successfully submitted, thanks for the outreach ${name},we will be in touch`
        );
       setName("")
        setEmail("");
        setMessage("");
      }
    
    } catch (e: any) {
      setIsErr(e);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="  bg-zinc-900">
        <DialogHeader>
          <DialogTitle className=" font-semibold txt-lg text-sky-300">
            Make your order, email us!
          </DialogTitle>
        </DialogHeader>
        <div className=" text-sky-300 gap-y-6 font-semibold p-2 flex flex-col items-center w-full">
          <form action="" className="p-2 flex flex-col items-center w-full gap-y-6">
          <div className=" relative w-full">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              disabled={isLoading}
              placeholder="Enter your name"
              className={cn(" py-2 txt-xl px-4 w-full text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg",isErr&& "border-red-600")}
            />
          </div>
          <div className="relative w-full">
            <svg
              className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              placeholder="Enter your email"
              className={cn("w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg",isErr&& "border-red-600")}
            />
          </div>
                   
          <div className=" w-full relative">
            <textarea
              value={message}
              disabled={isLoading}
              onChange={(e) => setMessage(e.target.value)}
              className={cn(" w-full p-8 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg ",isErr&& "border-red-600")}
              placeholder="...Leave a message, make an order!"
            />
          </div>
          </form>
  
          <div>
            {isErr&&(
              <div className=" w-full p-6 font-semibold font-serif bg-red-400 text-center text-xl">
                 {isErr}
              </div>
            )}
            {isSuccess&&(
              <div className=" w-full p-6 font-semibold font-serif bg-emerald-600 text-center text-xl">
                 {isSuccess}
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            className="  font-bold font-serif text-sky-300 text-2xl"
            onClick={onSubmit}
            disabled={isLoading}
          >
            SUBMIT
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
