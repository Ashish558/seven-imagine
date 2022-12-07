import React from "react";

export default function SecondaryButton({
    children,
    className,
    onClick,
    type,
}) {
    return (
        <button
            className={`bg-secondaryLight text-lg font-medium rounded-md py-4 px-8 ${className}`}
            onClick={onClick}
            type={type ? type : "button"}
           
        >
            {children}
        </button>
    );
}
