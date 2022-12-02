import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SecondaryButton from '../../components/Buttons/SecondaryButton'

import BackIcon from '../../assets/assignedTests/back.svg'
import PrimaryButton from '../../components/Buttons/PrimaryButton'
import { TestDetail } from '../../components/TestDetail/TestDetail'
const tempsubjects = [
   { text: 'Trigonometry', selected: true },
   { text: 'Mathematics', selected: false },
   { text: 'Reading', selected: false },
   { text: 'Science', selected: false },
]

export default function StartTest() {

   const navigate = useNavigate()
   const [subjects, setSubjects] = useState(tempsubjects)
   const [testStarted, setTestStarted] = useState(false)

   const handleChange = (item) => {
      let tempdata = subjects.map(sub => {
         if (sub.text === item.text) {
            return { ...sub, selected: !item.selected }
         } else {
            return { ...sub, selected: false }
         }
      })
      setSubjects(tempdata)
   }

   return (
      <div className='ml-pageLeft bg-lightWhite min-h-screen'>
         <div className='py-8 px-5'>

            <div className='flex'>

               <div className='flex-3' >
                  <SecondaryButton
                     className='flex items-center pl-2 pr-5 py-2.5 mb-[15px]'
                     onClick={() => navigate('/assigned-tests')}
                     children={
                        <>
                           <img src={BackIcon} className='mr-2' />
                           <span className='leading-0'>
                              Back
                           </span>
                        </>
                     } />
                  <p className='text-primary-dark font-bold text-3xl mb-8' >Test Name</p>
                  <div className='grid grid-cols-2 grid-rows-3 max-w-840 gap-y-4 mt-2'>
                     <div>
                        <p className='inline-block w-138 font-semibold opacity-60'> Student’s Name</p>
                        <span className='inline-block mr-4'>:</span>
                        <p className='inline-block w-138 font-semibold'> Joseph Brown</p>
                     </div>
                     <div>
                        <p className='inline-block w-138 font-semibold opacity-60'> Started on </p>
                        <span className='inline-block mr-4'>:</span>
                        <p className='inline-block w-138 font-semibold'> Joseph Brown</p>
                     </div>
                     <div>
                        <p className='inline-block w-138 font-semibold opacity-60'>  Date Assigned </p>
                        <span className='inline-block mr-4'>:</span>
                        <p className='inline-block w-138 font-semibold'> Joseph Brown</p>
                     </div>
                     <div>
                        <p className='inline-block w-138 font-semibold opacity-60'> Completed on </p>
                        <span className='inline-block mr-4'>:</span>
                        <p className='inline-block w-138 font-semibold'> Joseph Brown</p>
                     </div>
                     <div>
                        <p className='inline-block w-138 font-semibold opacity-60'> Duration </p>
                        <span className='inline-block mr-4'>:</span>
                        <p className='inline-block w-138 font-semibold'> Joseph Brown</p>
                     </div>
                  </div>
                  <div>

                     <div className='mt-9'>
                        {subjects.map((item, idx) => {
                           return <PrimaryButton
                              roundedClass='rounded-0'
                              children={item.text}
                              onClick={() => handleChange(item)}
                              className={`py-2 px-0 mr-0 rounded-0 font-semibold w-160
                            ${item.selected ? 'bg-primaryYellow' : ''}`} />
                        })}
                     </div>

                     <div className='bg-white pt-[60px] pr-8 pl-12 pb-[50px] mt-4'>
                       
                       <TestDetail />
                        
                        <div className='flex items-center flex-col mt-12'>
                           <p className='text-[#E02B1D] bg-[#FFBE9D] py-2 px-5 rounded-20 mb-[15px]' >
                              Warning: Once Started, you wont be able to pause the timer.
                           </p>
                           <PrimaryButton children='Start Section' className='w-[359px] h-[73px] text-[21px]' />
                        </div>
                     </div>

                  </div>
               </div>

               <div className='flex-2 ml-8' >

                  <div className='bg-primary rounded-20 text-white flex flex-col items-center px-9 py-6 font-bold mt-[100px]'>
                     <p className='text-[32px]'> Timer </p>
                     <p className='text-[96px] leading-none'>45:00</p>
                  </div>

               </div>
            </div>

         </div>
      </div>
   )
}
