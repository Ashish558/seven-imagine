import React from 'react'

export default function SecondaryButton({ children, className, onClick, type }) {

   return (
      <button className={`bg-secondaryLight font-medium rounded-md text-textGray py-4 px-12 ${className}`}
         onClick={onClick} type={type ? type : 'button'} >
         {children}
      </button>
   )
}
