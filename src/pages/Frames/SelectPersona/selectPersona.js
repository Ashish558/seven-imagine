import React, { useState } from 'react'
import ParentImg from '../../../assets/form/parent.png'
import StudentImg from '../../../assets/form/student.png'
import PrimaryButton from '../../../components/Buttons/PrimaryButton'
import SecondaryButton from '../../../components/Buttons/SecondaryButton'

export default function SelectPersona({ setFrames }) {

   const [selectedImg, setSelectedImg] = useState({
      parent: false,
      student: false
   })

   const handleClick= ()=>{
      setFrames(prev =>{
         return {...prev, selectPersona: false, userDetails: true}
      })
   }

   return (
      <div className='w-full'>
         <p className='text-lg font-bold mb-6'>Sign up as</p>

         <div className='flex mb-120'>
            <img src={StudentImg}
               className={`mr-6 ${!selectedImg.student ? 'grayscale' : ''}`}
               onClick={() => setSelectedImg({ parent: false, student: !selectedImg.student })}
            />
            <img src={ParentImg} className={` ${!selectedImg.parent ? 'grayscale' : ''}`}
               onClick={() => setSelectedImg({ student: false, parent: !selectedImg.parent })}
            />
         </div>
         <div className='flex items-center'>
            <SecondaryButton children='Back' className='text-21 text-white mr-6 w-140' />
            <PrimaryButton children='Next' className='text-21 font-semibold text-white mr-6 w-140'
               onClick={() =>handleClick()} />
         </div>
      </div>

   )
}
