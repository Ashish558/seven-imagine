import React, { useRef, useState } from 'react'
import styles from './style.module.css'
import DownArrow from '../../assets/icons/down-chevron.svg'
import useOutsideAlerter from '../../useOutsideAlerter'

export default function InputSelect({ parentClassName, Icon, value, placeholder, label, labelClassname, optionData, onChange }) {

   const [selected, setSelected] = useState(false)
   const selectRef = useRef()
   useOutsideAlerter(selectRef, ()=> setSelected(false))
   
return (
   <div ref={selectRef} className={`${selected && 'relative z-5000'} ${parentClassName ? parentClassName : ''}`}>
      <label className={`font-semibold inline-block ${labelClassname}`}>
         {label}
      </label>
      <div className='bg-white py-3 px-6 border flex items-center rounded-10 relative cursor-pointer relative z-50'>
         {Icon && <img src={Icon} className='mr-6' />}
         {<img src={DownArrow} className={styles.downArrow}
            onClick={() => setSelected(!selected)} />}
         <div className='outline-0 w-full relative' name={label} >
            {value === '' ? <span> {placeholder} </span> : value}
         </div>
         {selected &&
            <div className={styles.options}>
               {optionData.map((option, idx) => {
                  return <div className='outline-0 border-0 py-2 px-3' key={idx}
                  onClick={()=> {onChange(option);setSelected(false)}}> {option}  </div>
               })}
            </div>
         }
      </div>
   </div>

)
}
