import React from 'react'

export default function ProfileCard({ title, titleClassName, className, body, hideShadow, bgClass }) {


   return (
      <div className={`rounded-2xl ${!hideShadow && 'shadow-white'} py-6 px-4 lg:px-8 
      bg-white  ${!hideShadow && 'lg:shadow-light'} relative bg-white lg:bg-textGray-30
       ${className ? className : ''}
      `}>
         <p className={`text-primary font-bold text-lg ${titleClassName ? titleClassName : "text-center"}`}>
            {title}
         </p>
         {body && body}
      </div>
   )
}
