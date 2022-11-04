import React from 'react'

export default function SecondaryButton({ children, className, onClick }) {

   return (
      <button className={`bg-secondaryLight rounded-md text-textGray py-4 px-12 ${className}`}
         onClick={onClick} >
         {children}
      </button>
   )
}
