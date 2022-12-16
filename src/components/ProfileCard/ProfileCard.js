import React from 'react'

export default function ProfileCard({ title, titleClassName, className, body, hideShadow, bgClassName }) {


   return (
      <div className={`rounded-2xl 
      ${!hideShadow && 'shadow-white'} py-6 px-4 lg:px-5
      ${bgClassName ? bgClassName : 'bg-white  lg:bg-textGray-30'}
      ${!hideShadow && 'lg:shadow-light'} relative bg-white
       ${className ? className : ''}
      `}>
         <p className={`text-primary font-bold text-lg ${titleClassName ? titleClassName : "text-center"}`}>
            {title}
         </p>
         {body && body}
      </div>
   )
}
