import React, { useState } from "react";
import EyeIcon from '../../assets/form/eye-open.svg'

export default function InputField({
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
   isRequired,
   style,
}) {

   const [inputType, setInputType] = useState(type)

   return (
      <div className={` ${parentClassName && parentClassName}`}>
         <label
            className={`inline-block font-semibold ${labelClassname} ml-3`}
            style={style}
         >
            {label}
            {required && (
               <span className="text-primaryRed inline-block pl-1">*</span>
            )}
         </label>
         <div
            className={`py-[16px] px-[21px] flex items-center rounded-10 ${inputContainerClassName ? inputContainerClassName : ""
               }`}
         >
            {Icon && <img src={Icon} className="mr-6" />}
            {inputLeftField && inputLeftField}
            <input
               className={`outline-0 w-full ${inputClassName ? inputClassName : "" }`}
               placeholder={placeholder}
               type={inputType ? inputType : "text"}
               onChange={(e) => onChange !== undefined ? onChange(e) : "" }
               value={value}
               required={isRequired ? true : false}
            />
            {type === 'password' && <img src={EyeIcon} className="ml-4"
               onClick={() => inputType === 'password' ? setInputType('text') : setInputType('password')}
            />}
            {IconRight && <img src={IconRight} className="ml-4" />}
            {right && right}
         </div>
      </div>
   );
}
