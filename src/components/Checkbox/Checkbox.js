import React from 'react'

export default function Checkbox({ className, body, bodyClassName, checked, checkedClassName }) {


   return (
      <div className={`${className ? className : ''}`}>
         <div className={
            `${bodyClassName ? bodyClassName : ""} ${checked ? checkedClassName : ''}`
         }
         >
            {body}
         </div>
      </div>
   )
}
