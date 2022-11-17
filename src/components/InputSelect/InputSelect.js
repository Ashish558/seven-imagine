import React, { useEffect, useRef, useState } from 'react'
import styles from './style.module.css'
import DownArrow from '../../assets/icons/down-chevron.svg'
import useOutsideAlerter from '../../useOutsideAlerter'

export default function InputSelect({ parentClassName, Icon, value, placeholder, label, labelClassname, optionData, inputContainerClassName,onChange }) {

   const [selected, setSelected] = useState(false)
   const selectRef = useRef()
   useOutsideAlerter(selectRef, () => setSelected(false))

   useEffect(() => setSelected(false),[value])

   return (
      <div ref={selectRef}
         className={`${selected && 'relative z-5000'} ${parentClassName ? parentClassName : ''}`}
         onClick={() => setSelected(true)}>
         <label className={`font-semibold inline-block ${labelClassname}`}>
            {label}
         </label>

         <div className={`bg-white py-3 px-6 border flex items-center rounded-10 relative cursor-pointer relative z-50 ${inputContainerClassName ? inputContainerClassName : ''}`}>
            {Icon && <img src={Icon} className='mr-6' />}
            {<img src={DownArrow} className={styles.downArrow}
               onClick={() => setSelected(!selected)} />}
            <div className='outline-0 w-full relative' name={label} >
               {value === '' ? <span className='text-primary-60'> {placeholder} </span> : value}
            </div>
            {selected &&
               <div className={styles.options}>
                  {optionData.map((option, idx) => {
                     return <div className='outline-0 border-0 py-2 px-4' key={idx}
                        onClick={() => { onChange(option) }}> {option}  </div>
                  })}
               </div>
            }
         </div>
      </div>

   )
}
