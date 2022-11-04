import React from 'react'

export default function PrimaryButton({ children, className, onClick }) {

   return (
      <button className={`bg-primary rounded-md text-white py-4 px-12 ${className}`}
         onClick={onClick} >
         {children}
      </button>
   )
}
