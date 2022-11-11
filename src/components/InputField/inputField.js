import React from 'react'

export default function InputField({parentClassName, inputContainerClassName, Icon, value, placeholder, label, labelClassname, IconRight, inputClassName }) {


   return (
      <div className={` ${parentClassName && parentClassName}`}>
         <label className={`inline-block font-semibold ${labelClassname}`}>
            {label}
         </label>
         <div className={`py-3 px-6 border flex items-center rounded-10 ${inputContainerClassName ? inputContainerClassName : ''}`}>
            {Icon && <img src={Icon} className='mr-6' />}
            <input className={`outline-0 w-full ${inputClassName ? inputClassName : ''}`} placeholder={placeholder} />
            {IconRight && <img src={IconRight} className='ml-4' />}
         </div>
      </div>
   )
}
