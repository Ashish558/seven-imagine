import React from 'react'

export default function PrimaryButton({ children, className, onClick, disabled, roundedClass }) {

   return (
      <button className={`bg-primary ${roundedClass ? roundedClass : 'rounded-md'} text-white py-4 px-12 ${className}`}
         onClick={onClick}
         disabled={disabled}
      >
         {children}
      </button>
   )
}
