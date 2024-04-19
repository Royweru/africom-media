import Image from 'next/image'
import React from 'react'

interface SpecialBoxProps {
    imgSrc?:string,
}
export const SpecialBox:React.FC<SpecialBoxProps> = ({
    imgSrc
}) => {

  return (
    <div className=' rounded-md p-4 flex justify-center items-center relative h-[400px]'>
       <Image 
         src={imgSrc||"/images/s1.jpeg"}
         alt=''
         className=' bg-center bg-cover bg-no-repeat rounded-xl'
         fill
         />
    </div>
  )
}
