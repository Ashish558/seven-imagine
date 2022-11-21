import React, { useEffect, useState } from 'react'

import DownArrow from '../../../assets/icons/down-chevron.svg'
import PrimaryButton from '../../../components/Buttons/PrimaryButton'
import SecondaryButton from '../../../components/Buttons/SecondaryButton'
import InputField from '../../../components/InputField/inputField'
import styles from '../../Signup/signup.module.css'

export default function UserDetails({
   setFrames,
   persona,
   setcurrentStep,
   otherDetails,
   setOtherDetails
}) {

   const handleClick = () => {
      if (persona === 'parent') {
         setFrames(prev => {
            return { ...prev, userDetails: false, questions: true }
         })
      } else {
         setFrames(prev => {
            return { ...prev, userDetails: false, services: true }
         })
      }
   }

   useEffect(() => {
      if (persona === 'parent') {
         setcurrentStep(4)
      } else {
         setcurrentStep(3)
      }
   }, [])

   const handleBack = () => {
      if (persona === 'parent') {
         setFrames(prev => {
            return { ...prev, userDetails: false, services: true }
         })
      } else {
         setFrames(prev => {
            return { ...prev, userDetails: false, selectPersona: true }
         })
      }
   }

   let personaText = persona === 'parent' ? 'Parent' : 'Student'

   return (
      <div className='w-full'>

         <div className='flex'>
            <InputField placeholder='First Name'
               parentClassName='mb-6 mr-5'
               required={persona === 'parent' ? true : false}
               label={`${personaText} First Name`}
               labelClassname='ml-2 mb-2'
               value={otherDetails.FirstName}
               onChange={e => setOtherDetails({ ...otherDetails, FirstName: e.target.value })}
            />
            <InputField placeholder='Last Name '
               parentClassName='mb-6'
               label={`${personaText} Last Name`}
               required={persona === 'parent' ? true : false}
               labelClassname='ml-2 mb-2'
               value={otherDetails.LastName}
               onChange={e => setOtherDetails({ ...otherDetails, LastName: e.target.value })}
            />
         </div>

         <InputField placeholder='Email address'
            parentClassName='mb-6'
            label={`${personaText} Email Address`}
            required={persona === 'parent' ? true : false}
            labelClassname='ml-2 mb-2'
            value={otherDetails.Email}
            onChange={e => setOtherDetails({ ...otherDetails, Email: e.target.value })}
         />
         <InputField placeholder='Phone Number'
            parentClassName='mb-6'
            label={`${personaText} Phone Number ${persona !== 'parent' ? '(For tutor correspondence)' : ''} `}
            labelClassname='ml-2 mb-2'
            inputContainerClassName='relative'
            inputClassName='ml-80'
            inputLeftField={
               <div className={styles.phoneNumberShort}>
                  <div className='flex-1 flex justify-center items-center font-medium'>
                     +91
                     <img src={DownArrow} className='w-3 ml-3' />
                  </div>
               </div>
            }
            value={otherDetails.Phone}
            onChange={e => setOtherDetails({ ...otherDetails, Phone: e.target.value })}
         />

         <div className='flex items-center mt-120'>
            <SecondaryButton children='Back' className='text-21 py-3.2 text-white mr-6 w-140' onClick={handleBack} />
            <PrimaryButton children='Next' className='text-21 py-3.2 font-semibold text-white mr-6 w-140'
               onClick={() => handleClick()} />
         </div>
      </div>
   )
}
