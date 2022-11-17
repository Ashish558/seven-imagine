import React, { useEffect, useState } from 'react'
import PrimaryButton from '../../../components/Buttons/PrimaryButton'
import SecondaryButton from '../../../components/Buttons/SecondaryButton'
import InputField from '../../../components/InputField/inputField'
import styles from '../EventModal/style.module.css'

export default function SignupSuccessful({ setFrames, setcurrentStep }) {
   

   const handleClick = () => {
      setFrames(prev => {
         return { ...prev, signupSuccessful: false, signupActive: true }
      })
      setcurrentStep(1)
   }

   useEffect(() => {
      setcurrentStep(7)
   }, [])

   return (
      <div className='mb-7'>
         <div>
            <p className='font-medium mb-6'>
               Sign-up successful!
            </p>
            <p>
               Please visit your email inbox to verify account & set account password before you can log in.
            </p>
         </div>

         <div className='flex items-center mt-16'>
            <SecondaryButton children='Login' className='text-21 py-3.2 text-white mr-6 w-140'
               onClick={handleClick} />
         </div>

      </div>
   )
}
