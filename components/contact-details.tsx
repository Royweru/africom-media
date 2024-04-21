import { GallleryHeader } from '@/app/(routes)/gallery/components/gallery-header'
import { MessageCircleIcon, PhoneCallIcon } from 'lucide-react'
import React from 'react'

export const ContactDetails = () => {
    const contactDetails=[
        {
            label:"Email",
            detail:"email@gmail.com"
        },
        {
            label:"Phone",
            detail:"email@gmail.com"
        },
     
    ]
        
  return (
    <div className=' flex flex-col w-full h-full py-6'>
        <GallleryHeader title='Contact Information' sub='Africom contact details'/>
        <div className=' font-semibold text-xl font-serif  flex flex-col my-5 tracking-wide w-full items-center '> 
          <h2 className=' text-md text-black'>
            Address:
          </h2>
          <p className=' text-sm font-semibold italic no-underline text-white tracking-wider'>
          Kilome Road
          </p>
        </div>
        <ul className=' flex flex-col w-full h-full gap-y-6 items-center'>
          {contactDetails.map(contact=>(
            <div key={contact.label}>
              <div className=' flex w-full justify-evenly items-center text-neutral-100'>
                 {contact.label==="Email"&&(<MessageCircleIcon className=' w-5 h-5'/>)}
                 {contact.label==="Phone"&&(<PhoneCallIcon className=' w-5 h-5'/>)}
                 {contact.detail}
              </div>
            </div>
          ))}
        </ul>
    </div>
  )
}
