import React from "react";

export default function Checkbox({
   id,
   onChange,
   className,
   body,
   bodyClassName,
   checked,
   checkedClassName,
}) {
   return (
      <div
         className={`${className ? className : ""}`}
         onClick={() => onChange(id)}
      >
         <div
            className={`${bodyClassName ? bodyClassName : ""} ${checked ? checkedClassName : ""
               }`}
         >
            {body}
         </div>
      </div>
   );
}
