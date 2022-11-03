import React, { useState } from 'react'
import InputField from '../../components/InputField/inputField'
import EmailIcon from '../../assets/form/email.svg'
import Passwordicon from '../../assets/form/password.svg'

export default function Login() {

   const [isPasswordForgot, setIsPasswordForgot] = useState(false)

   return (
      <div className='min-h-screen'>
         <div className='grid grid-cols-2 min-h-screen'>
            <div className='bg-primary'></div>
            <div className='flex items-center'>

               <div className='w-full px-148'>
                  <p className='font-bold text-5xl leading-snug mb-7'>Login </p>

                  {
                     !isPasswordForgot ?
                        <p className='text-lg font-bold mb-12'>
                           Login with email address
                        </p> :
                        <p className='text-normal font-normal mb-12'>
                           Login with email address' : 'Enter the email that you used when register to recover your password. You will receive a password reset link.
                        </p>
                  }
                  <InputField Icon={EmailIcon} placeholder='Email address'
                     parentClassName='mb-6'
                     label='Email Address'
                     labelClassname='ml-2 mb-2' />
                  {
                     !isPasswordForgot &&
                     <>
                        <InputField Icon={Passwordicon}
                           parentClassName='mb-2.5'
                           placeholder='Password'
                           label='Password'
                           labelClassname='ml-2 mb-2' />
                        <p className='text-secondary text-sm font-semibold ml-2' onClick={() => setIsPasswordForgot(true)} >
                           Forgot Password ?
                        </p>
                     </>
                  }

                  <button disabled={false}
                     className='w-full bg-primaryDark disabled:bg-pink  py-4 mt-12 rounded-10 text-white text-21'>
                     Login
                  </button>
               </div>

            </div>
         </div>
      </div>
   )
}
