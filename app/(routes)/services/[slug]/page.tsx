import React from 'react'
import { ServiceDetails } from '@/data/service-details'

const IndividualService = ({params}:{
    params:{slug:string}
}) => {
  return (
    <div className=' txt-3xl font-bold text-green-500'>
        {params.slug}
    </div>
  )
}

export default IndividualService