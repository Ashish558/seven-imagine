import React, { useRef, useState } from "react";
import SeacrchIcon from '../../assets/icons/search.svg'
import useOutsideAlerter from "../../useOutsideAlerter";
import styles from '../InputSelect/style.module.css'

export default function InputSearch({
   parentClassName,
   inputContainerClassName,
   Icon,
   value,
   placeholder,
   label,
   labelClassname,
   IconRight,
   inputClassName,
   inputLeftField,
   onChange,
   type,
   right,
   required,
   optionData,
   onOptionClick
}) {
   
   const [optionsVisible, setOptionsVisible] = useState(false)
   const inputRef = useRef()
   const handleClose = () => {
      setOptionsVisible(false)
   }
   useOutsideAlerter(inputRef, handleClose)
   return (
      <div className={` ${parentClassName && parentClassName}`} ref={inputRef} >
         <label
            className={`inline-block font-semibold ${labelClassname} w-2/3`}
         >
            {label}
            {required && <span className='text-primaryRed inline-block pl-1'>*</span>}
         </label>
         <div
            className={`py-3 px-6 border flex relative items-center rounded-10 ${inputContainerClassName ? inputContainerClassName : ""
               }`}
         >
            {Icon && <img src={Icon} className="mr-6" />}
            {inputLeftField && inputLeftField}
            <input
               className={`outline-0 w-full ${inputClassName ? inputClassName : ""}`}
               placeholder={placeholder}
               value={value}
               type={type ? type : "text"}
               onChange={(e) =>
                  onChange !== undefined ? onChange(e) : ""
               }
               onFocus={() => setOptionsVisible(true)}
            // onBlur={()=> setOptionsVisible(false)}
            />
            <img src={SeacrchIcon} className="ml-4" />
            {right && right}

            {optionsVisible &&
               <div className={styles.options}>
                  {optionData.map((option, idx) => {
                     return (
                        <div className='outline-0 border-0 py-2 px-4' key={idx}
                           onClick={() => onOptionClick(option) }
                        >
                           {option.value}
                        </div>
                     )
                  })}
               </div>
            }
         </div>
      </div>
   );
}
