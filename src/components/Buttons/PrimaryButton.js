import React from 'react'

export default function PrimaryButton({ children, className, onClick, disabled }) {

   return (
      <button className={`bg-primary rounded-md text-white py-4 px-12 ${className}`}
         onClick={onClick}
         disabled={disabled}
      >
         {children}
      </button>
   )
}
