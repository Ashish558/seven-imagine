import React from 'react'

export default function ProfileCard({ title, titleClassName, className, body }) {


   return (
      <div className={`rounded-2xl shadow-white py-6 px-4 lg:px-8 bg-white lg:shadow-light lg:bg-textGray-30 ${className ? className : ''}
      `}>
         <p className={`text-primary text-center font-bold text-21 ${titleClassName ? titleClassName : ""}`}>
            {title}
         </p>
         {body && body}
      </div>
   )
}
