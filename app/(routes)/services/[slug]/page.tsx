import React from 'react'
import { ServiceDetails } from '@/data/service-details'
import { ServiceGallery } from './components/service-gallery'

const IndividualService = ({params}:{
    params:{slug:string}
}) => {

    const service = ServiceDetails.find((service)=>service.label===params.slug)
  return (
    <div className=' txt-3xl font-bold h-full w-full flex flex-col gap-y-3'>
         <div className=' w-full flex flex-col gap-y-3 px-9'>
         <h1 className=' tracking-wider font-semibold text-2xl text-blue-500'>
            {service?.name}
         </h1>
         <hr /> 
         </div>
<ServiceGallery imgs={service?.images}/>
    </div>
  )
}

export default IndividualService