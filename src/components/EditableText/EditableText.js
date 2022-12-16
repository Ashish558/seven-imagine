import React from 'react'
import EditIcon from '../../assets/icons/edit.svg'

export default function EditableText({ className, text, imgClass, textClassName, onClick }) {


   return (
      <div className={`text-primary text-center font-bold flex ${className}`}>
         <p className={`${textClassName ? textClassName :''}`}>
            {text}
         </p>
         <img src={EditIcon} className={`ml-4 ${imgClass ? imgClass : ''} cursor-pointer`}
          onClick={onClick} />
      </div>
   )
}
