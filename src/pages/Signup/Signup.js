import React, { useState } from 'react'
import InputField from '../../components/InputField/inputField'
import ForgotPassword from '../Frames/ForgotPassword'
import ResetPassword from '../Frames/ResetPassword'

import EmailIcon from '../../assets/form/email.svg'
import Passwordicon from '../../assets/form/password.svg'
import DownArrow from '../../assets/icons/down-chevron.svg'
import styles from './signup.module.css'
import SelectPersona from '../Frames/selectPersona'

export default function Signup() {

   const [selectPersonaFrame, setSelectPersonaFrame] = useState(false)

   const [values, setValues] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
   })
   const [signupActive, setSignupActive] = useState(true)

   const handleClick = () => {
      setSignupActive(false)
      setSelectPersonaFrame(true)
   }

   return (
      <div className='min-h-screen'>
         <div className='grid grid-cols-2 min-h-screen'>
            <div className='bg-primary'></div>
            <div className='flex items-center'>

               <div className='w-full px-148'>
                  <p className='font-bold text-5xl leading-snug mb-7'>
                     Signup
                  </p>

                  {
                     signupActive ?
                        <>
                           <p className='text-lg font-bold mb-12'>
                              Sign up with email address
                           </p>
                           <div className='flex'>
                              <InputField placeholder='First Name'
                                 parentClassName='mb-6 mr-5'
                                 label='First Name'
                                 labelClassname='ml-2 mb-2' />
                              <InputField placeholder='Last Name '
                                 parentClassName='mb-6'
                                 label='Last Name'
                                 labelClassname='ml-2 mb-2' />
                           </div>

                           <InputField placeholder='Email address'
                              parentClassName='mb-6'
                              label='Email Address'
                              onChange={e => setValues({ ...values, email: e.target.value })}
                              labelClassname='ml-2 mb-2' />
                           <InputField placeholder='Phone Number'
                              parentClassName='mb-6'
                              label='Phone Number (For tutor correspondence)'
                              labelClassname='ml-2 mb-2'
                              inputContainerClassName='relative'
                              inputClassName='ml-80'
                              inputLeftField={
                                 <div className={styles.phoneNumberField}>
                                    <div className='flex-1 flex justify-center items-center font-medium'>
                                       +91
                                       <img src={DownArrow} className='w-3 ml-3' />
                                    </div>
                                 </div>
                              }
                           />

                           <button disabled={values.email === '' ? true : false}
                              className='w-full bg-primaryDark disabled:bg-pink py-3 mt-12 rounded-10 text-white text-21 font-medium'
                              onClick={handleClick} >
                              Submit
                           </button>
                        </>
                        : selectPersonaFrame ?
                           <SelectPersona
                              setSelectPersonaFrame={setSelectPersonaFrame}

                           /> :
                           ''}
               </div>
            </div>
         </div>
      </div>
   )
}
