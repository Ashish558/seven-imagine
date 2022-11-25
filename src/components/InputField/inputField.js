import React from "react";

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
    icon,
    iconClass,
    setIsChecked,
    style,
}) {
    return (
        <div className={` ${parentClassName && parentClassName}`}>
            <label
                className={`inline-block font-semibold ${labelClassname} w-2/3 ml-3`}
                style={style}
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
                    type={type ? type : "text"}
                    onChange={(e) =>
                        onChange !== undefined ? onChange(e) : ""
                    }
                    value={value}
                    required={isRequired ? true : false}
                />
                {IconRight && <img src={IconRight} className="ml-4" />}
                {right && right}
            </div>
            {label === "Password" && (
                <>
                    <label htmlFor="eye">
                        <img
                            src={icon}
                            className={iconClass}
                            alt=""
                            width="26px"
                            height="26px"
                        />
                    </label>
                    <input
                        type="checkbox"
                        className="hidden"
                        id="eye"
                        onChange={(e) => setIsChecked(e.target.checked)}
                    />
                </>
            )}
        </div>
    );
}
