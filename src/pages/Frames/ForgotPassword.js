import React, { useState } from 'react'
import InputField from '../../components/InputField/inputField'
import EmailIcon from '../../assets/form/email.svg'
import Passwordicon from '../../assets/form/password.svg'

export default function ForgotPassword({ setActiveFrame, setResetPasswordActive }) {

   return (

      <div className='w-full px-148'>
         <p className='font-bold text-5xl leading-snug mb-7'>
            Forget Password
         </p>

         <p className='text-normal font-normal mb-12'>
            Enter your email address linked to this account
         </p>

         <InputField Icon={EmailIcon} placeholder='Email address'
            parentClassName='mb-6'
            label='Email Address'
            labelClassname='ml-2 mb-2' />

         <button disabled={false}
            className='w-full bg-primaryDark disabled:bg-pink  py-4 mt-12 rounded-10 text-white text-21'
            onClick={() => setActiveFrame(setResetPasswordActive)}
         >
            Submit
         </button>
      </div>
   )
}
