"use client"
import React, { useEffect, useState } from 'react'
import { EmailModal } from '../modal/email-modal'

export const ModalProvider = () => {
    const [isMounted,setIsMounted] = useState(false)

    useEffect(()=>{
        setIsMounted(true)
    },[])
    if(!isMounted) return null;
  return (
    <>
     <EmailModal />
    </>
  )
}
