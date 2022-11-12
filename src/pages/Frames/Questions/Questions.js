import React, { useState } from 'react'
import PrimaryButton from '../../../components/Buttons/PrimaryButton'
import SecondaryButton from '../../../components/Buttons/SecondaryButton'
import InputField from '../../../components/InputField/inputField'
import InputSelect from '../../../components/InputSelect/InputSelect'
import styles from '../EventModal/style.module.css'

const tempData = [
   {
      text: 'SAT / ACT Prep',
      checked: false
   },
   {
      text: 'Subject Tutoring',
      checked: false
   },
   {
      text: 'AP Tutoring',
      checked: false
   },
   {
      text: 'Career and College Advice',
      checked: false
   },
   {
      text: 'Others',
      checked: false
   }
]
const grades = ['A', 'B', 'C']

export default function Questions({setFrames}) {
   const [data, setData] = useState(tempData)
   const [grade, setGrade] = useState('')

   const handleCheckboxChange = (text, arr, setValue) => {
      const temp = arr.map(topic => {
         return topic.text === text ? { ...topic, checked: !topic.checked } : { ...topic }
      })
      setValue(temp)
   }

   const handleSubmit = () => {
      setFrames(prev =>{
         return {...prev, services: false, userDetails: true}
      })
   }

   return (
      <div className='mt-5 mb-7'>

         <div className=''>
            <div>
               <p className='font-medium'>
               Do you have any PSAT / P-ACT scores to share? How are your student's grades in school?
               </p>
               <textarea rows={3} className='bg-lightWhite w-full outline-0 px-5 py-4 rounded'>
               </textarea>
            </div>
            <p className='font-medium mb-7'>What service are you seeking?</p>
            <div className='grid grid-cols-2 mb-10'>
               {data.map((item, idx) => {
                  return <div key={idx} className='flex mb-6 mr-6'
                     onClick={() => handleCheckboxChange(item.text, data, setData)} >
                     <div className={`${styles.container} `}>
                        <input checked={item.checked} type='checkbox' name='moods' value='' />
                        <span class={styles.checkmark}></span>
                     </div>
                     <p className='font-medium text-primary-60 text-sm whitespace-nowrap'>{item.text}</p>
                  </div>
               })}
            </div>
            <InputField
               label='School Name'
               labelClassname='ml-3'
               placeholder='School Name'
               parentClassName='w-full mr-4 mb-5'
               inputContainerClassName=''
               inputClassName='bg-transparent'
               type='text'
            />
            <InputSelect value={grade}
               label='Grade'
               labelClassname='ml-3'
               onChange={val => setGrade(val)}
               optionData={grades}
               inputContainerClassName='font-medium pr-3'
               inputClassName='appearance-none font-medium'
               placeholder='Time Zone'
               parentClassName='w-full max-w-150'
               type='select' />
            <div className='flex items-center mt-12'>
               <SecondaryButton children='Back' className='text-21 text-white mr-6 w-140' />
               <PrimaryButton children='Next' className='text-21 font-semibold text-white mr-6 w-140'
                  onClick={() => handleSubmit()} />
            </div>   
         </div>

      </div>
   )
}
