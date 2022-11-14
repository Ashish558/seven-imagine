import React, { useState } from 'react'
import InputField from '../../components/InputField/inputField'
import EmailIcon from '../../assets/form/email.svg'
import Passwordicon from '../../assets/form/password.svg'

export default function ForgotPassword({ setActiveFrame, setResetPasswordActive }) {

   return (

      <div className='w-full px-148'>
         <p className='font-bold text-5xl leading-snug mb-7'>
            Password Reset
         </p>

         <p className='text-normal font-normal mb-90'>
            Enter the email that you used when registered.
            You will receive a password reset link.
         </p>

         <InputField Icon={EmailIcon} placeholder='Email address'
            parentClassName='mb-6'
            label='Email Address'
            labelClassname='ml-2 mb-2' />

         <button disabled={false}
            className='w-full bg-primaryDark disabled:bg-pink  py-4 rounded-10 text-white text-21'
            onClick={() => setActiveFrame(setResetPasswordActive)}
         >
            Submit
         </button>
      </div>
   )
}
