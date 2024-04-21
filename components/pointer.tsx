import { ArrowRight, CheckCircle, TicketCheck } from 'lucide-react'
import React from 'react'

interface PointerProps{
    content?:string
}
export const Pointer = ({
    content
}:PointerProps) => {
  return (
    <div className=' flex w-full flex-col gap-y-3'>
      <div className=' w-full flex items-center justify-evenly font-semibold tracking-wide
      font-serif text-2xl text-neutral-100'>
        <CheckCircle className=' w-6 h-6 font-bold text-white' />
          {content}
      </div>
      <hr />
    </div>
  )
}
