import { PlusIcon, ZoomIn } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface SpecialBoxProps {
    imgSrc?:string,
    label:string
}
export const SpecialBox:React.FC<SpecialBoxProps> = ({
    imgSrc,label
}) => {

  return (
    <div className=' hover:cursor-pointer rounded-md md:p-4 p-0 flex justify-center items-center relative col-span-1 h-[400px] group'>
       <Image 
         src={imgSrc||"/images/s1.jpeg"}
         alt=''
         className=' bg-center bg-cover bg-no-repeat rounded-xl group-hover:scale-105'
         fill
         />
         <div className=' absolute font-semibold  text-2xl text-cyan-100 bg-transparent flex w-full bottom-2 justify-center text-center'>
            {label}
         </div>
         <div className=' absolute hidden bg-transparent group-hover:flex w-full left-0 justify-center text-center'>
            <PlusIcon className=' w-8 h-8 text-white font-bold'/>
         </div>
    </div>
  )
}
