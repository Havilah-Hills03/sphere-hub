import React from 'react'

interface buttonProps {
    text: React.ReactNode,
    className: string
}

export const Button:React.FC<buttonProps> = ({text , className}) => {
  return (
   <button className={`${className}  hover:bg-white cursor-pointer transition px-4 py-3  rounded-[15px] text-lg lg:px-10 font-semibold`}>
    {text}
   </button>
  )
}
