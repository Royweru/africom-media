import React from 'react'

const RoutesLayout = ({children}:{
    children:React.ReactNode
}) => {
  return (
    <div className=' w-full  min-h-screen bg-white'>
        {children}
    </div>
  )
}

export default RoutesLayout