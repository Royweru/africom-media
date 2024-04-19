import React from 'react'
import { ContactForm } from './contact-form'

export const Footer = () => {
  return (
    <div 
    className= "w-full p-12 font-semibold text-2xl bg-[url('/images/bgnav.jpg')] m-1 rounded-t-lg border[1.5px]  border-neutr bg-center text-zinc-950 grid xl:grid-cols-3 md:grid-cols-2 gap-4">
       <ContactForm/> 
      </div>
  )
}
  