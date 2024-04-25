import React from 'react'
import Image from 'next/image'
 interface BrandDisplayProps{
    src:string
 }
export const BrandDisplay = ({
    src
}:BrandDisplayProps) => {
    const imagesCount=[1,2,3]
  return (
    <div className=' w-full py-12 md:px-4 p-0  flex flex-wrap gap-4'>
        {imagesCount.map((no:number)=>(
              <div className=' w-[250px] h-[400px] relative' key={no}>
                  <Image
                    src={`/images/${src}/${no}.jpg`||`/images/${src}/${no}.png`||""}
                    alt=''
                   className=' bg-cover bg-center rounded-xl'
                    fill
                    />
              </div>
        ))}
       
    </div>
  )
}
