import React, { useState } from 'react'
import styles from './style.module.css'

import InputField from '../../../components/InputField/inputField'
import Modal from '../../../components/Modal/Modal'
import CalendarIcon from '../../../assets/form/calendar.svg'
import StarIcon from '../../../assets/form/star.svg'
import InputSelect from '../../../components/InputSelect/InputSelect'
import Checkbox from '../../../components/Checkbox/Checkbox'
import PrimaryButton from '../../../components/Buttons/PrimaryButton'

const timeZones = [
   "IST",
]
const tempDays = [
   {
      text: 'M',
      checked: false
   },
   {
      text: 'T',
      checked: false
   },
   {
      text: 'W',
      checked: true
   },
   {
      text: 'T',
      checked: false
   },
   {
      text: 'F',
      checked: false
   },
   {
      text: 'S',
      checked: false
   },
   {
      text: 'S',
      checked: false
   },
]
const status = [
   'Scheduled', 'Option 2'
]
const services = [
   'ACT/SAT',
   'Option 2'
]
const tempTopics = [
   {
      text: 'Math',
      checked: false
   },
   {
      text: 'English',
      checked: false
   },
   {
      text: 'Reading',
      checked: false
   },
   {
      text: 'Science',
      checked: false
   },
]

const tempStudentMood = [
   {
      text: 'Engaging',
      checked: false
   },
   {
      text: 'Chill',
      checked: false
   },
   {
      text: 'Inspiring',
      checked: false
   },
   {
      text: 'Quiet',
      checked: false
   },
   {
      text: 'Frustated',
      checked: false
   },
   {
      text: 'Confused',
      checked: false
   },
]
const tempHomeworks = [
   {
      text: 'Practise Test',
      checked: false
   },
   {
      text: 'Concept Review',
      checked: false
   },
   {
      text: 'English Section',
      checked: false
   },
   {
      text: 'Math Section',
      checked: false
   },
   {
      text: 'Science Section',
      checked: false
   },
   {
      text: 'Reading Section',
      checked: false
   },
   {
      text: 'All Sections',
      checked: false
   },
]
const tempProductive = [
   {
      text: 'Yes',
      checked: false
   },
   {
      text: 'No',
      checked: false
   },
   {
      text: 'Not Sure',
      checked: false
   },
]

export default function EventModal({ setEventModalActive, persona }) {

   const [data, setData] = useState({
      timeZone: '',
      sessionStatus: '',
      rescheduling: false,
      service: ''
   })
   const [days, setDays] = useState(tempDays)
   const [topics, setTopics] = useState(tempTopics)
   const [studentMoods, setStudentMoods] = useState(tempStudentMood)
   const [homeworks, setHomeworks] = useState(tempHomeworks)
   const [isProductive, setIsProductive] = useState(tempProductive)

   const [recurring, setRecurring] = useState(false)

   const handleDayChange = () => {

   }
   const handleCheckboxChange = (text, arr, setValue, isSingle) => {
      if (isSingle) {
         const temp = arr.map(topic => {
            return topic.text === text ? { ...topic, checked: !topic.checked } : { ...topic, checked: false }
         })
         setValue(temp)
      } else {
         const temp = arr.map(topic => {
            return topic.text === text ? { ...topic, checked: !topic.checked } : { ...topic }
         })
         setValue(temp)
      }
   }
   return (
      <>
         <Modal
            classname='max-w-840 mx-auto max-h-750 overflow-y-auto scrollbar-content scrollbar-vertical'
            handleClose={() => setEventModalActive(false)}
            title='Create a New Session'
            body={
               <div>
                  <div className='flex mb-4'>
                     <InputField
                        label='Student Name'
                        labelClassname='ml-3'
                        placeholder='Student Name'
                        parentClassName='w-full mr-4'
                        inputContainerClassName='bg-lightWhite border-0'
                        inputClassName='bg-transparent'
                        type='text'
                     />
                     <InputField
                        label='Tutor Name'
                        labelClassname='ml-3'
                        placeholder='Tutor Name'
                        parentClassName='w-full'
                        inputContainerClassName='bg-lightWhite border-0'
                        inputClassName='bg-transparent'
                        type='text'
                     />
                  </div>

                  <div className='flex mb-6'>
                     <InputField
                        parentClassName='w-full mr-6'
                        label='Date'
                        labelClassname='ml-3'
                        inputContainerClassName='bg-lightWhite border-0'
                        inputClassName='bg-transparent appearance-none'
                        type='date'
                     />

                     <InputField
                        label='Time'
                        labelClassname='ml-3'
                        parentClassName='w-full max-w-120'
                        type='time'
                        inputContainerClassName='bg-lightWhite border-0 font-medium pr-3'
                        inputClassName='bg-transparent appearance-none font-medium'
                     />
                     <span className='self-end mb-4 mx-4 font-medium'>
                        -
                     </span>
                     <InputField
                        parentClassName='w-full max-w-120'
                        type='time'
                        inputContainerClassName='bg-lightWhite border-0 font-medium pr-3'
                        inputClassName='bg-transparent appearance-none font-medium'
                     />
                     <InputSelect value={data.timeZone}
                        onChange={val => setData({ ...data, timeZone: val })}
                        optionData={timeZones}
                        inputContainerClassName='bg-lightWhite border-0 font-medium pr-3'
                        inputClassName='bg-transparent appearance-none font-medium'
                        placeholder='Time Zone'
                        parentClassName='w-full mr-4 ml-8'
                        type='select' />
                  </div>

                  <div className='flex mb-3'>
                     <div className={`${styles.container} `} onClick={() => setRecurring(!recurring)} >
                        <input checked={recurring} type='checkbox' name='recurring' />
                        <span class={styles.checkmark}></span>
                     </div>
                     <p className='font-medium text-primary-60 text-sm'>Recurring</p>
                  </div>

                  <div className='flex mb-14'>
                     <div className='mr-8'>
                        <p className='font-medium text-primary-60 mb-1'>Repeat every week on</p>
                        <div className='flex'>
                           {days.map((day, idx) => {
                              return <Checkbox
                                 key={idx}
                                 body={day.text}
                                 bodyClassName='font-medium flex bg-lightWhite mr-1.4 justify-center items-center text-lg w-56 h-56 rounded-10'
                                 checked={day.checked}
                                 checkedClassName='bg-dark text-white'
                                 onChange={handleDayChange} />
                           })}
                        </div>
                     </div>
                     <InputField
                        label='End Date'
                        labelClassname='ml-3'
                        parentClassName='w-full self-end'
                        type='date'
                        inputContainerClassName='bg-lightWhite border-0 font-medium pr-3'
                        inputClassName='bg-transparent appearance-none font-medium'
                     />
                  </div>


                  <div className='flex'>
                     <InputField
                        label='Session'
                        labelClassname='ml-3'
                        placeholder='Session'
                        parentClassName='w-full mr-8'
                        inputContainerClassName='bg-lightWhite border-0'
                        inputClassName='bg-transparent'
                        type='text'
                     />
                     {
                        persona === 'student' ?
                           <div className='w-full flex flex-col items-start'>
                              <InputSelect value={data.sessionStatus}
                                 onChange={val => setData({ ...data, sessionStatus: val })}
                                 optionData={status}
                                 label='Session Status'
                                 labelClassname='ml-2'
                                 inputContainerClassName='bg-lightWhite border-0 font-medium pr-3'
                                 inputClassName='bg-transparent appearance-none font-medium'
                                 placeholder='Session Status'
                                 parentClassName='w-full mr-4'
                                 type='select' />
                              <div className='flex mb-3 mt-3 ml-3'>
                                 <div className={`${styles.container} `}
                                    onClick={() => setData({ ...data, rescheduling: !data.rescheduling })} >
                                    <input checked={data.rescheduling} type='checkbox' name='recurring' />
                                    <span class={styles.checkmark}></span>
                                 </div>
                                 <p className='font-medium text-primary-60 text-sm'>Rescheduling</p>
                              </div>
                           </div>
                           :
                           <div className='w-full flex flex-col items-center'>
                              <InputSelect value={data.sessionStatus}
                                 onChange={val => setData({ ...data, sessionStatus: val })}
                                 optionData={status}
                                 inputContainerClassName='bg-lightWhite border-0 font-medium pr-3'
                                 inputClassName='bg-transparent appearance-none font-medium'
                                 placeholder='Time Zone'
                                 parentClassName='w-full mr-4'
                                 type='select' />
                              <div className='flex mb-3 mt-3'>
                                 <div className={`${styles.container} `}
                                    onClick={() => setData({ ...data, rescheduling: !data.rescheduling })} >
                                    <input checked={data.rescheduling} type='checkbox' name='recurring' />
                                    <span class={styles.checkmark}></span>
                                 </div>
                                 <p className='font-medium text-primary-60 text-sm'>Rescheduling</p>
                              </div>
                           </div>
                     }

                  </div>

                  <div className='flex'>

                     <InputSelect label='Services'
                        labelClassname='ml-3'
                        value={data.service}
                        onChange={val => setData({ ...data, service: val })}
                        optionData={services}
                        inputContainerClassName={`bg-lightWhite border-0 font-medium pr-3
                       `}
                        inputClassName='bg-transparent appearance-none font-medium'
                        placeholder='Service'
                        parentClassName={`w-full mr-4 max-w-373 self-end 
                        ${persona === 'student' ? 'mr-4' : ''}
                        ${persona === 'parent' ? ' order-2' : ''}
                        `}
                        type='select' />

                     {
                        persona === 'student' &&
                        <div className='ml-4 mt-5'>
                           <p className='font-medium mb-4'>Session Feedback</p>
                           <div className='flex'>
                              {[...Array(5)].map((x, i) =>
                                 <img src={StarIcon} className='mr-7' />
                              )}
                           </div>
                        </div>
                     }
                     {
                        persona === 'parent' &&
                        <div className='mr-4 mt-5 order-1 flex-1'>
                           <p className='font-medium mb-1'>Session Feedback</p>
                           <div className='flex py-3 px-4 bg-lightWhite rounded-10'>
                              {[...Array(5)].map((x, i) =>
                                 <img src={StarIcon} className='mr-7' />
                              )}
                           </div>
                        </div>
                     }
                  </div>
                  {
                     persona !== 'student' && persona !== 'parent' &&
                     <>

                        <div className='mt-7 mb-5'>
                           <p className='font-medium mb-2.5'>Topics Covered</p>
                           <div className='flex'>
                              {topics.map((topic, idx) => {
                                 return <div key={idx} className='flex mb-3 mr-3' onClick={() => handleCheckboxChange(topic.text, topics, setTopics)} >
                                    <div className={`${styles.container} `}>
                                       <input checked={topic.checked} type='checkbox' name='recurring' />
                                       <span class={styles.checkmark}></span>
                                    </div>
                                    <p className='font-medium text-primary-60 text-sm'>{topic.text}</p>
                                 </div>
                              })}
                           </div>
                        </div>

                        <div className='mt-5 mb-5'>
                           <p className='font-medium mb-2.5'>Student Mood</p>
                           <div className='flex'>
                              {studentMoods.map((item, idx) => {
                                 return <div key={idx} className='flex mb-3 mr-3' onClick={() => handleCheckboxChange(item.text, studentMoods, setStudentMoods)} >
                                    <div className={`${styles.container} `}>
                                       <input checked={item.checked} type='checkbox' name='moods' value='' />
                                       <span class={styles.checkmark}></span>
                                    </div>
                                    <p className='font-medium text-primary-60 text-sm'>{item.text}</p>
                                 </div>
                              })}
                           </div>
                        </div>

                        <div className='mt-5 mb-7'>
                           <p className='font-medium  mb-2.5'>Homework Assigned</p>
                           <div className='flex flex-wrap	'>
                              {homeworks.map((item, idx) => {
                                 return <div key={idx} className='flex mb-3 mr-6' onClick={() => handleCheckboxChange(item.text, homeworks, setHomeworks)} >
                                    <div className={`${styles.container} `}>
                                       <input checked={item.checked} type='checkbox' name='moods' value='' />
                                       <span class={styles.checkmark}></span>
                                    </div>
                                    <p className='font-medium text-primary-60 text-sm'>{item.text}</p>
                                 </div>
                              })}
                           </div>
                        </div>

                        <div className='mt-5 mb-7'>
                           <p className='font-medium mb-2.5'>Was the session Productive?</p>
                           <div className='flex flex-wrap	'>
                              {isProductive.map((item, idx) => {
                                 return <div key={idx} className='flex mb-3 mr-6' onClick={() => handleCheckboxChange(item.text, isProductive, setIsProductive, true)} >
                                    <div className={`${styles.container} `}>
                                       <input checked={item.checked} type='checkbox' name='moods' value='' />
                                       <span class={styles.checkmark}></span>
                                    </div>
                                    <p className='font-medium text-primary-60 text-sm'>{item.text}</p>
                                 </div>
                              })}
                           </div>
                        </div>

                        <div className='mb-12'>
                           <p className='font-medium mb-2.5'>Session Notes</p>
                           <textarea placeholder='Session Notes'
                              rows={3}
                              className='bg-lightWhite w-full outline-0 px-5 py-4 rounded'>
                           </textarea>
                           <p className='text-right text-xs text-primary-80'>0/200</p>
                        </div>

                        <div className='flex justify-center'>
                           <PrimaryButton children='Schedule' className='text-21 py-3 font-medium px-7' />
                        </div>
                     </>
                  }
               </div>
            }
         />
      </>
   )
}
