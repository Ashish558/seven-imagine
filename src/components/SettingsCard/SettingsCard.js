import React from 'react'

export default function SettingsCard({ title, titleClassName, className, body }) {


   return (
      <div className={`rounded-2xl shadow-white py-9 px-6 lg:px-6 bg-white lg:shadow-light mb-7 pb-[26px] ${className ? className : ''}
      `}>
         <p className={`text-primary-dark font-bold mb-5 ${titleClassName ? titleClassName : ""}`}>
            {title}
         </p>
         {body && body}
      </div>
   )
}
