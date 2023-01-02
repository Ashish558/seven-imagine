import React, { useState } from 'react'
import InputField from '../../../components/InputField/inputField'
import Passwordicon from '../../../assets/form/password.svg'
import styles from '../../Signup/signup.module.css'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSetPasswordMutation } from '../../../app/services/auth';

export default function SetPassword({ signup, setLoginFormActive }) {

   const [searchParams, setSearchParams] = useSearchParams();
   const userId = searchParams.get("userid")
   const token = searchParams.get("token")

   const [password, setPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')

   const [setUserPassword, setUserPasswordResp] = useSetPasswordMutation()
   const navigate = useNavigate()

   const handleSubmit = () => {
      if (password.length < 8) return alert('passwords must be of 8 characters')
      if (password !== confirmPassword) return alert('passwords dont match')

      const reqBody = { password, token }

      setUserPassword({ userId, body: reqBody })
         .then(res => {
            console.log(res)
            setLoginFormActive(true)
            navigate('/')
         })
   }

   return (
      <>
         <div className="min-h-screen" id={styles.signUp}>
            <div className="grid grid-cols-2 min-h-screen">
               <div className="bg-primary"></div>
               <div className="flex items-center">

                  <div className={`w-full ${signup ? '' : 'px-148'} `}>
                     <p className='font-bold text-4xl leading-snug mb-7'>
                        Set New Password
                     </p>

                     <p className='mb-12 text-black-900'>
                        The password must contain 8 characters
                     </p>

                     <InputField Icon={Passwordicon}
                        parentClassName='mb-6'
                        type='password'
                        placeholder='minimum 8 characters'
                        inputContainerClassName='border pt-3 pb-3'
                        label='Set New Password'
                        labelClassname='ml-2 mb-2'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                     />

                     <InputField Icon={Passwordicon}
                        parentClassName='mb-2.5'
                        type='password'
                        placeholder='Confirm Password'
                        inputContainerClassName='border pt-3 pb-3'
                        label='Confirm Password'
                        labelClassname='ml-2 mb-2'
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)} />

                     <button disabled={(password === confirmPassword)}
                        className='w-full bg-primaryDark font-medium disabled:bg-pink pt-3 pb-3 mt-12 rounded-10 text-white text-lg'
                        onClick={handleSubmit}
                     >
                        Set New Password
                     </button>

                  </div>

               </div>
            </div>
         </div>


      </>
   )
}
