import React from 'react'

export default function InputSelect({ parentClassName, Icon, value, placeholder, label, labelClassname, optionData }) {

   return (
      <div className={` ${parentClassName && parentClassName}`}>
         <label className={`font-semibold inline-block ${labelClassname}`}>
            {label}
         </label>
         <div className='bg-white py-3 px-6 border flex items-center rounded-10'>
            {Icon && <img src={Icon} className='mr-6' />}
            <select className='outline-0 w-full' name={label} >
               <option value='1' > {placeholder} </option>
               {
                  optionData.map((option, idx) => {
                     return <option className='outline-0 border-0' key={idx}> {option}  </option>
                  })
               }
            </select>
         </div>
      </div>
   )
}
