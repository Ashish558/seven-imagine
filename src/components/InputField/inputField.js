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
    isRequired
}) {

    const [inputType, setInputType] = useState(type)
    // console.log(inputType, value)

    return (
        <div className={` ${parentClassName && parentClassName}`}>
            <label
                className={`inline-block font-semibold ${labelClassname} w-2/3 ml-3`}
            >
                {label}
                {required && (
                    <span className="text-primaryRed inline-block pl-1">*</span>
                )}
            </label>
            <div
                className={`py-3 px-6 border flex items-center rounded-10 ${
                    inputContainerClassName ? inputContainerClassName : ""
                }`}
            >
                {Icon && <img src={Icon} className="mr-6" />}
                {inputLeftField && inputLeftField}
                <input
                    className={`outline-0 w-full ${
                        inputClassName ? inputClassName : ""
                    }`}
                    placeholder={placeholder}
                    type={inputType ? inputType : "text"}
                    onChange={(e) =>
                        onChange !== undefined ? onChange(e) : ""
                    }
                    value={value}
                    required={isRequired ? true : false}
                />
                {type === 'password' && <img src={EyeIcon} className="ml-4"
                 onClick={()=> inputType === 'password' ? setInputType('text') : setInputType('password')} 
                 />  }
                {IconRight && <img src={IconRight} className="ml-4" />}
                {right && right}
            </div>
        </div>
    );
}
