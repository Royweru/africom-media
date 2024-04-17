import Image from 'next/image'
import React from 'react'
import NavHero from '../navigation/nav-hero'

export const WelcomeHero = () => {
  return (
    <div className=" w-full h-[350px] p-0 bg-[url('/images/hero-bg.jpeg')] bg-center bg-cover bg-no-repeat flex flex-col">
       <NavHero />
    </div>
  )
}
