import { BrandHeader } from '@/components/providers/ui/brand-header'
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
     <div className=' w-full grid md:grid-cols-2 p-12 md:p-4 gap-4 '>
           <ProductDescription content={productDetail} />
           <BrandDisplay src={productDetail?.images} />
     </div>
    </div>
  )
}

export default BrandPage