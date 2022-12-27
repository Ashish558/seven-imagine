import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import DownArrow from "../../assets/icons/down-chevron.svg";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import CCheckbox from "../CCheckbox/CCheckbox";

export default function InputSelect({
   parentClassName,
   Icon,
   value,
   placeholder,
   label,
   labelClassname,
   optionData,
   inputContainerClassName,
   onChange,
   radio,
   checkbox,
   optionClassName,
   optionType
}) {
   const [selected, setSelected] = useState(false);
   const selectRef = useRef();
   useOutsideAlerter(selectRef, () => setSelected(false));

   useEffect(() => {
     if(!checkbox) setSelected(false)
   }, [value]);

   return (
      <div
         ref={selectRef}
         className={`${selected && "relative z-5000"} ${parentClassName ? parentClassName : ""
            }`}
         onClick={() => setSelected(true)}
      >
         <label className={`font-semibold inline-block ${labelClassname}`}>
            {label}
         </label>

         <div
            className={`flex items-center rounded-10 relative cursor-pointer z-50 ${inputContainerClassName ? inputContainerClassName : ""
               }`}
         >
            {Icon && <img src={Icon} className="mr-6" alt="icon" />}
            {
               <img
                  src={DownArrow}
                  className={styles.downArrow}
                  alt="down-arrow"
                  onClick={() => setSelected(!selected)}
               />
            }
            <div className={`outline-0 w-full relative ${optionClassName ? optionClassName : ''}`} name={label}>
               {value === "" ? (
                  <span className="text-primary-60"> {placeholder} </span>
               ) : (
                  value
               )}
            </div>
            {selected && (
               <div className={`scrollbar-content scrollbar-vertical ${styles.options} $`}>
                  {optionData.map((option, idx) => {
                     return (
                        <div
                           className="outline-0 border-0 py-2.5 px-4 flex items-center justify-between"
                           key={idx}
                           onClick={() => {
                              onChange(option);
                           }}
                        >
                           <p>
                               {optionType !== undefined && optionType === 'object' ? option.value : option}
                           </p>
                           {
                              radio && <input type='radio' name='name' checked={option === value ? true : false} />
                           }
                           {
                              checkbox &&
                              <div className="flex">
                                 <CCheckbox
                                    checked={checkbox.match.includes(option) ? true : false}
                                    name='student'
                                 />
                              </div>
                           }
                        </div>
                     );
                  })}
               </div>
            )}
         </div>
      </div>
   );
}
