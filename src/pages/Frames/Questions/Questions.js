import React, { useEffect, useState } from 'react'
import PrimaryButton from '../../../components/Buttons/PrimaryButton'
import SecondaryButton from '../../../components/Buttons/SecondaryButton'
import InputField from '../../../components/InputField/inputField'
import InputSelect from '../../../components/InputSelect/InputSelect'
import styles from '../EventModal/style.module.css'


const grades = ['A', 'B', 'C']
export default function Questions({
   setFrames,
   persona,
   setcurrentStep,
   otherDetails,
   setOtherDetails,
   apCourses,
   setApCourses,
   motive,
   setMotive
}) {

   const handleCheckboxChange = (text, arr, setValue) => {
      const temp = arr.map(topic => {
         return topic.text === text ? { ...topic, checked: !topic.checked } : { ...topic }
      })
      setValue(temp)
   }

   const handleSubmit = () => {
      setFrames(prev => {
         return { ...prev, questions: false, signupLast: true }
      })
   }

   const handleBack = () => {
      if (persona === 'parent') {
         setFrames(prev => {
            return { ...prev, questions: false, userDetails: true }
         })
      } else {
         setFrames(prev => {
            return { ...prev, questions: false, services: true }
         })
      }
   }

   useEffect(() => {
      setcurrentStep(5)
   }, [])

   return (
      <div className='mt-5 mb-7'>

         <div className=''>

            <div className='mb-5'>
               <p className='font-medium mb-1'>
                  Do you have any PSAT / P-ACT scores to share? How are your student's grades in school?
               </p>
               <textarea rows={3}
                  className='border bg-transparent w-full outline-0 px-5 py-4 rounded'
                  value={otherDetails.aboutScore}
                  onChange={e => setOtherDetails({ ...otherDetails, aboutScore: e.target.value })}
               >
               </textarea>
            </div>

            <p className='font-medium mb-7'>
               Are you / your child taking any AP courses in school? Please select all that apply.
            </p>
            <div className='grid grid-cols-2 mb-10'>
               {apCourses.map((item, idx) => {
                  return <div key={idx} className='flex items-center mb-6 mr-6'
                     onClick={() => handleCheckboxChange(item.text, apCourses, setApCourses)} >
                     <div className={`${styles.container} `}>
                        <input checked={item.checked} type='checkbox' name='tests' value='' />
                        <span class={styles.checkmark}></span>
                     </div>
                     <p className='font-medium text-lg whitespace-nowrap opacity-90'>{item.text}</p>
                  </div>
               })}
            </div>

            <div className=''>
               <p className='font-medium mb-6'>
                  Select if any of these apply to you
               </p>
               <div className='grid grid-cols-1 mb-6'>
                  {motive.map((item, idx) => {
                     return <div key={idx} className='flex items-center mb-7 mr-6'
                        onClick={() => handleCheckboxChange(item.text, motive, setMotive)} >
                        <div className={`${styles.container} `}>
                           <input checked={item.checked} type='checkbox' name='questions' value='' />
                           <span class={styles.checkmark}></span>
                        </div>
                        <p className='font-medium text-lg text-sm opacity-90 leading-5'>{item.text}</p>
                     </div>
                  })}
               </div>

            </div>

            <div className='flex items-center mt-12'>
               <SecondaryButton children='Back' className='text-21 py-3.2 text-white mr-6 w-140'
                  onClick={handleBack} />
               <PrimaryButton children='Next' className='text-21 py-3.2 font-semibold text-white mr-6 w-140'
                  onClick={() => handleSubmit()} />
            </div>
         </div>

      </div>
   )
}
