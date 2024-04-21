"use client"
import dynamic from 'next/dynamic'
import Map from '@/components/map'
import React from 'react'
import { ContactDetails  } from '@/components/contact-details'

const ContactPage = () => {
  const LocationMap = dynamic(()=>import('@/components/map'),{
    ssr:false
  })
  return (
    <div className="min-h-screen w-full 
    bg-slate-100 
    gap-y-6 bg-cover bg-center p-6 backdrop-blur-md grid
      md:grid-cols-2 gap-4
    ">
      <div className=' col-span-1 flex items-center justify-center'>
        <LocationMap />
      </div>
      <div className='col-span-1 flex items-center justify-center'>
         <ContactDetails/>
      </div>
      </div>
  )
}

export default ContactPage