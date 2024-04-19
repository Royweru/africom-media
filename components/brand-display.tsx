import React from 'react'
import Image from 'next/image'
 interface BrandDisplayProps{
    src:string
 }
export const BrandDisplay = ({
    src
}:BrandDisplayProps) => {
    const imagesCount=[1,2,3,4,5]
  return (
    <div className=' w-full py-16 px-6 grid grid-cols-2 gap-1'>
        {imagesCount.map((no:number)=>(
              <div className=' col-span-1 h-[400px] relative' key={no}>
                  <Image
                    src={`/images/${src}/${no}.jpg`||`/images/${src}/${no}.png`||""}
                    alt=''
                   className=' bg-cover bg-center'
                    fill
                    />
              </div>
        ))}
       
    </div>
  )
}
