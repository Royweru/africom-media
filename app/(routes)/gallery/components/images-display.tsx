import React from 'react'
import { ScrollArea, ScrollBar } from "@/components/providers/ui/scroll-area"
import Image from 'next/image'
interface ImagesDisplayProps{
    images:string[]
}
export const ImagesDisplay = ({images}:ImagesDisplayProps) => {
  return (
    <ScrollArea className=' w-full h-full whitespace-nowrap '>
     <div className=' w-full h-full px-9 flex gap-2 '>
        {images?.map(image=>(
            <div key={image} className=' w-[300px] h-[350px] relative'>
             <Image
              fill
              src={image||""}
              alt=''
              className='  bg-cover bg-center'
              />
            </div>
        ))}
    </div>
    <ScrollBar orientation='horizontal' className=' text-white'/>
    </ScrollArea>
   
  )
}
