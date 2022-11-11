import React from 'react'
import EditIcon from '../../assets/icons/edit.svg'

export default function EditableText({ className, text }) {


   return (
      <div className={`text-primary text-center font-bold flex ${className}`}>
         {text}
         <img src={EditIcon} className={`ml-4`} />
      </div>
   )
}
