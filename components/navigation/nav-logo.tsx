"use client"

import Image from 'next/image'
import React from 'react'

export const NavLogo = () => {
  return (
    <div className=' relative w-[200px] h-[60px] rounded-md'>
        <Image
          src={"/images/logo.png"}
          alt=''
          className='bg-cover bg-center rounded-2xl'
          fill
          />
    </div>
  )
}
