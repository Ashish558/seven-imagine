import React, { useEffect, useState } from 'react'
import ParentImg from '../../../assets/form/parent.png'
import StudentImg from '../../../assets/form/student.png'
import PrimaryButton from '../../../components/Buttons/PrimaryButton'
import SecondaryButton from '../../../components/Buttons/SecondaryButton'

export default function SelectPersona({ setFrames, setPersona, persona, setcurrentStep }) {

   const [selectedImg, setSelectedImg] = useState({
      parent: false,
      student: false
   })

   const [nextDisabled, setNextDisabled] = useState(false)

   useEffect(() => {
      selectedImg.parent == false && selectedImg.student === false ? setNextDisabled(true) : setNextDisabled(false)
   }, [selectedImg])

   const handleClick = () => {
      if (persona == 'parent') {
         setFrames(prev => {
            return { ...prev, selectPersona: false, services: true }
         })
      } else {
         setFrames(prev => {
            return { ...prev, selectPersona: false, userDetails: true }
         })
      }
   }

   useEffect(() => {
      setcurrentStep(2)
   }, [])

   const handleBack = () => {
      setcurrentStep(1)
      setFrames(prev => {
         return { ...prev, selectPersona: false, signupActive: true }
      })
   }

   return (
      <div className='w-full'>
         <p className='text-lg font-bold mb-6'>Sign up as</p>

         <div className='flex mb-120'>
            <img src={StudentImg}
               className={`mr-6 ${!selectedImg.student ? 'grayscale' : ''}`}
               onClick={() => {
                  setSelectedImg({ parent: false, student: !selectedImg.student });
                  setPersona('parent')
               }
            }
            />
            <img src={ParentImg} className={` ${!selectedImg.parent ? 'grayscale' : ''}`}
               onClick={() => {setSelectedImg({ student: false, parent: !selectedImg.parent });setPersona('student')}}
            />
         </div>

         <div className='flex items-center'>
            <SecondaryButton children='Back' className='text-21 text-white mr-6 w-140' onClick={handleBack} />
            <PrimaryButton children='Next' className='text-21 font-semibold text-white mr-6 w-140 disabled:opacity-60'
               onClick={() => handleClick()} disabled={nextDisabled} />
         </div>

      </div>

   )
}
