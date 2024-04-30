import React from 'react'

interface ServiceDescProps{
    content?:string
}
export const ServiceDesc = ({
    content
}:ServiceDescProps) => {
  return (
    <div className=' w-full font-semibold  text-md text-blue-900 tracking-wide'>
       <blockquote>
       {content}
        </blockquote> 
    </div>
  )
}
