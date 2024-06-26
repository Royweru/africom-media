import React from 'react'

interface BrandHeaderProps{
    title:string,
    desc?:string
}
export const BrandHeader = ({
    title,
    desc
}:BrandHeaderProps) => {
  return (
    <div className=" w-full p-4 rounded-md bg-[url('/images/bgbrand.jpg')]  min-h-max flex flex-col justify-center gap-y-4 items-center bg-contain bg-center">
          <div className=' capitalize underline z-10 tracking-wide font-bold text-6xl  text-zinc-900'>
                  {title}
          </div>
          <p className=' font-semibold  text-zinc-700 italic text-md '>
       {desc}
          </p>
    </div>
  )
}
