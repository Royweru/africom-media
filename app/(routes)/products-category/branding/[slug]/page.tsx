import { BrandHeader } from '@/components/ui/brand-header'
import React from 'react'
import { ProductDescription } from '@/components/product-description'
import { BrandDisplay } from '@/components/brand-display'

export const productsDetails=[
  {id:1,
    name:"aframebanner",
   description:"Used in events. Double - sided brandingwith easy to assemble aluminium frameavailable in bannerweave or PVC skin.Supplied with carry bag"
  },
  {id:2,
    name:"bannerwall",
   description:"Also known as Media wall or BackdropBanner, comes with an anodised aluminium frame, branded banner - weave skinand carry bag. Perfect for exhibitions ,trade shows or sporting events."
  },
  {id:3,
    name:"beanbag",
   description:"A custom made bag filled with ''driedbeans'' used for relaxation or recreation. Cover made with water proof pvc"
  },
  {id:4,
    name:"brandedchairs",
   description:"Director & Gobi deck chairs available inaluminium or hardwood. Optional padded cushions available."
  },
  {id:5,
    name:"corporateflag",
   description:"Outdoor and indoor flags. Ultrasheenwith webbing, rope and toggle. All weather. custom sizes"
  },{id:6,
    name:"fencewrap",
   description:"For concealing construction sites, Promotional events or setting up barriers foractivities such as marathons races, cycling events etc. Printed on Ribtex a self locking warp-knit with small reinforcedholes & ribs for better airflow and strength. Custom sizes available"
  },{id:7,
    name:"ottoman",
   description:"Perfect device for any retail environment or office reception area. Used forbrand activations & promotions. Thedigitally printed covers are removable and washable."
  },{id:8,
    name:"harpbanner",
   description:"Fibre glass pole, steel ground spike and carry bag. Optional indoor base. Single or double-sided print. Light weight and easy to store."
  },{id:9,
    name:"parasol",
   description:"Made of corrosion-resistant construction of composite components, aluminium pole and ribs with stainless steel pulley system"
  },
  {id:10,
    name:"pullupbanner",
   description:"Printed on layflat PVC or Bannerweave. Lightweight & portable with a doublesied option on certain products, digitally printed includes carry bag . Different base options available."
  },
  {id:11,
    name:"tablecloath",
   description:"Ideal for increasing brand recognition at functions & events.It protects the surfaceof your table & adds a visually appealingelement to your décor. Custom sizes available."
  },
  {id:12,
    name:"telescopicbanner",
   description:"Fibre glass pole, with 45 degrees aluminium coner,steel ground spike andcarry bag. Optional indoor base. Single or double-sided print"
  },
  {id:13,
    name:"windcheatbanner",
   description:"Fibre glass pole, steel ground spike andcarry bag. Optional indoor base. Singl or double-sided print. Light weight and easy to store"
  },
]
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