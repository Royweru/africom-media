import { SpecialBox } from '@/components/special-box'
import React from 'react'
export const services=[
    {
        id:1,
        title:"Wall Branding & Wall Paint",
        img:"/images/all/56.jpg"
    },
    {
        id:2,
        title:"Signages",
        img:"/images/all/9.jpg"
    },
    {
        id:3,
        title:"Point Of Sale Materials",
        img:"/images/all/29.jpg"
    },
    {
        id:4,
        title:"Large Format printing",
        img:"/images/all/17.jpg"
    },
    {
    id:5,
    title:"Litho & Display Print",
    img:"/images/all/17.jpg"
},
{
    id:6,
    title:"Fabric Printing",
    img:"/images/all/17.jpg"
},  
 {
    id:7,
    title:"Vehicle Branding",
    img:"/images/all/17.jpg"
},
{
    id:8,
    title:"Trade & Outdoor Marketing",
    img:"/images/all/17.jpg"
},
]
const ServicesPage = () => {
  return (
    <div className=' w-full h-full p-5 flex flex-col gap-y-4'>
        <div className=' font-semibold text-4xl flex 
        justify-center items-center text-neutral-800 font-serif   
        tracking-wide  bg-gradient-to-tl from-blue-300 via-slate-50 to-sky-300 '>
            SERVICES WE OFFER
        </div>
        <hr />
        <div className=' font-bold grid w-full gap-4 md:grid-cols-3 sm:grid-cols-2 '>
          {services.map(service=>(
            <SpecialBox key={service.id} imgSrc={service.img} label={service.title} />
          ))}
        </div>
    </div>
  )
}

export default ServicesPage