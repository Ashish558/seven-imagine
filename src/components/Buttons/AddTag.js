import React from 'react'
import AddIcon from '../../assets/Settings/add.svg'

export default function AddTag() {
   

   return (
     <button className='bg-primaryLight flex items-center text-primary font-bold text-sm py-1.4 px-3 rounded-7 mr-[15px]'>
      <p className='mr-1'>Add Tag</p>
      <img src={AddIcon} />
     </button>
   )
}
