import React, { useState } from 'react'
import InputField from '../../components/InputField/inputField'
import EmailIcon from '../../assets/form/email.svg'
import Passwordicon from '../../assets/form/password.svg'
import ForgotPassword from '../Frames/ForgotPassword'
import ResetPassword from '../Frames/ResetPassword'

export default function Login() {

   const [isPasswordForgot, setIsPasswordForgot] = useState(false)
   const [resetPasswordActive, setResetPasswordActive] = useState(false)
   const [loginActive, setLoginActive] = useState(true)

   const setActiveFrame = (func) => {
      setIsPasswordForgot(false)
      setResetPasswordActive(false)
      setLoginActive(false)
      func(true)
   }
   const props = { setActiveFrame, setResetPasswordActive }
   return (
      <div className='min-h-screen'>
         <div className='grid grid-cols-2 min-h-screen'>
            <div className='bg-primary'></div>
            <div className='flex items-center'>

               {
                  loginActive ?
                     <div className='w-full px-148'>
                        <p className='font-bold text-5xl leading-snug mb-7'>
                           Login
                        </p>

                        <p className='text-lg font-bold mb-12'>
                           Login with email address
                        </p>

                        <InputField Icon={EmailIcon} placeholder='Email address'
                           parentClassName='mb-6'
                           label='Email Address'
                           labelClassname='ml-2 mb-2' />

                        <InputField Icon={Passwordicon}
                           parentClassName='mb-2.5'
                           placeholder='Password'
                           label='Password'
                           labelClassname='ml-2 mb-2' />
                        <p className='text-secondary text-sm font-semibold ml-2' onClick={() => setActiveFrame(setIsPasswordForgot)} >
                           Forgot Password ?
                        </p>

                        <button disabled={false}
                           className='w-full bg-primaryDark disabled:bg-pink  py-4 mt-12 rounded-10 text-white text-21'>
                           Login
                        </button>

                     </div>
                     : isPasswordForgot ?
                        <ForgotPassword {...props} /> :
                        resetPasswordActive ?
                           <ResetPassword setActiveFrame={setActiveFrame} setLoginActive={setLoginActive}  /> : ''}
            </div>
         </div>
      </div>
   )
}
