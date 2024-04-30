import React from 'react'

interface ServiceDescProps{
    content?:string
}
export const ServiceDesc = ({
    content
}:ServiceDescProps) => {
  return (
    <div className=' w-full font-semibold italic text-xl text-neutral-600/65  tracking-wide'>
        {content}
    </div>
  )
}
