import React from 'react'

export default function InputField({parentClassName, Icon, value, placeholder, label, labelClassname }) {


   return (
      <div className={` ${parentClassName && parentClassName}`}>
         <label className={`font-semibold ${labelClassname}`}>
            {label}
         </label>
         <div className='py-3 px-6 border flex items-center rounded-10'>
            {Icon && <img src={Icon} className='mr-6' />}
            <input className='outline-0 w-full' placeholder={placeholder} />
         </div>
      </div>
   )
}
