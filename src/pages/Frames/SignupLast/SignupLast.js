import React, { useEffect, useState } from 'react'
import PrimaryButton from '../../../components/Buttons/PrimaryButton'
import SecondaryButton from '../../../components/Buttons/SecondaryButton'
import InputField from '../../../components/InputField/inputField'
import styles from '../EventModal/style.module.css'

const tempQuestions = [
   {
      text: 'Referred by a friend or family',
      checked: false
   },
   {
      text: 'Online Search',
      checked: false
   },
   {
      text: 'Social Media',
      checked: false
   },
   {
      text: 'College Counselor',
      checked: false
   },
   {
      text: 'Others',
      checked: false
   },
]

const grades = ['A', 'B', 'C']

export default function SignupLast({ setFrames, setcurrentStep }) {
   const [questions, setQuestions] = useState(tempQuestions)
   const [checked, setChecked] = useState(false)
   const handleCheckboxChange = (text, arr, setValue) => {
      const temp = arr.map(topic => {
         return topic.text === text ? { ...topic, checked: !topic.checked } : { ...topic }
      })
      setValue(temp)
   }

   const handleSubmit = () => {
      // setFrames(prev => {
      //    return { ...prev, services: false, userDetails: true }
      // })
   }
   
   const handleBack = () => {
      setFrames(prev => {
         return { ...prev, services: false, questions: true }
      })
   }

   useEffect(() => {
      setcurrentStep(6)
   }, [])

   return (
      <div className='mt-5 mb-7'>


         <div className=''>
            <p className='font-medium mb-6'>
               How did you hear about us?
            </p>
            <div className='grid grid-cols-1 mb-6'>
               {questions.map((item, idx) => {
                  return <div key={idx} className='flex items-center mb-7 mr-6'
                     onClick={() => handleCheckboxChange(item.text, questions, setQuestions)} >
                     <div className={`${styles.container} `}>
                        <input checked={item.checked} type='checkbox' name='questions' value='' />
                        <span class={styles.checkmark}></span>
                     </div>
                     <p className='font-medium text-lg text-sm opacity-90 leading-5'>{item.text}</p>
                  </div>
               })}
            </div>
         </div>

         <div className=''>

            <InputField placeholder=''
               parentClassName='mb-2'
               label='Please enter the subscription code required to access Seven Square Learning and starting prep.'
               labelClassname='ml-2 mb-2 font-medium' />
               
            <div className='flex items-center mb-7 mr-6 ml-4' onClick={() => setChecked(!checked)} >
               <div className={`${styles.container} `}>
                  <input checked={checked} type='checkbox' name='' value='' />
                  <span class={styles.checkmark}></span>
               </div>
               <p className='font-medium text-lg text-sm opacity-90 leading-5'>
               I don't have one.
               </p>
            </div>
         </div>


         <div className='flex items-center mt-16'>
            <SecondaryButton children='Back' className='text-21 text-white mr-6 w-140'
             onClick={handleBack} />
            <PrimaryButton children='Next' className='text-21 font-semibold text-white mr-6 w-140'
               onClick={() => handleSubmit()} />
         </div>

      </div>
   )
}
