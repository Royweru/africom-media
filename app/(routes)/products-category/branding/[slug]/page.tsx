import { BrandHeader } from '@/components/ui/brand-header'
import React from 'react'
import { ProductDescription } from '@/components/product-description'
import { BrandDisplay } from '@/components/brand-display'

import { productsDetails } from '@/data'
const BrandPage = ({params}:{
  params:{slug:string}
}) => {

  const productDetail = productsDetails.find((product)=>product.name===params.slug)

  return (
    <div className=' w-full  min-h-screen font-bold flex flex-col gap-y-3'>
     <BrandHeader title={params.slug}/>
     <div className=' w-full grid md:grid-cols-2 p-12 gap-4 '>
           <ProductDescription content={productDetail} />
           <BrandDisplay src={params.slug} />
     </div>
    </div>
  )
}

export default BrandPage