import React from 'react'
import { GallleryHeader } from './gallery-header'
import { ImagesDisplay } from './images-display'

interface GalleryArtProps{
    data:any
}
export const GalleryArt = ({data}:GalleryArtProps) => {
  return (
    <div className=' flex flex-col gap-y-2 w-full h-full'>
        <GallleryHeader title={data.name} sub={data.description} />
        <ImagesDisplay images={data.images} />
    </div>
  )
}
