import React, { useState } from 'react'
import SecondaryButton from '../../components/Buttons/SecondaryButton'
import BackIcon from '../../assets/assignedTests/back.svg'
import PrimaryButton from '../../components/Buttons/PrimaryButton'
import styles from './style.module.css'
import { tableData } from './tempData'
import Table from '../../components/Table/Table'
import { useNavigate } from 'react-router-dom'

const subjects = [
   { text: 'English', selected: true },
   { text: 'Mathematics', selected: false },
   { text: 'Reading', selected: false },
   { text: 'Science', selected: false },
]

const tableHeaders = [
   'Q No.', 'Correct Answer', 'Student Response', 'Accuracy', 'Concept', 'Strategy', 'Time', 'Solution'
]

export default function CompletedTest() {

   const [testData, setTestData] = useState(tableData)
   const navigate = useNavigate()

   return (
      <div className='ml-pageLeft bg-lightWhite min-h-screen'>
         <div className='py-14 px-5'>
            <div className='px-0'>
               <SecondaryButton
                  className='flex items-center pl-2 pr-5 py-2.5'
                  onClick={()=> navigate('/assigned-tests')}
                  children={
                     <>
                        <img src={BackIcon} className='mr-2' />
                        <span>
                           Back
                        </span>
                     </>
                  } />
               <p className='mt-6 text-textPrimaryDark text-4xl font-bold'>
                  ACT O
               </p>

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

               <div className='mt-6 flex justify-between items-end'>
                  <div>
                     {subjects.map((item, idx) => {
                        return <PrimaryButton
                           children={item.text}
                           className={`py-2 px-0 mr-7 font-semibold w-160 ${item.selected ? '' : 'bg-secondaryLight text-textGray'}`} />
                     })}
                  </div>
                  <button className='py-4 px-4 bg-primaryOrange text-white rounded-20 flex items-center shadow-md pr-7'>
                     <span className='inline-block font-bold text-42'>C26</span>
                     <div className={styles.line}></div>
                     <span className='inline-block font-bold text-xl' >E20 M26 R22 S30</span>
                  </button>
               </div>

               <div className='mt-7'>
                  <p className='text-lg font-bold mb-2'>Score: 55/75</p>
                  <div className='flex bg-primary-300 py-4 px-4 rounded-10' >
                     <div className='flex flex-col mr-272'>
                        <p className='font-semibold text-primary mb-2.2'>Concepts</p>
                        <p className='font-semibold mb-2'>Punctuating Clauses</p>
                        <p className='font-semibold mb-2'>Apostrophies</p>
                        <p className='font-semibold mb-2'>Apostrophies</p>
                        <p className='font-semibold mb-2'>Apostrophies</p>
                        <p className='font-semibold mb-2'>Punctuating Clauses</p>
                     </div>
                     <div className='flex flex-col items-center'>
                        <p className='font-semibold text-primary mb-2.2'>Incorrect Answers</p>
                        <p className='font-semibold mb-2'>5/7</p>
                        <p className='font-semibold mb-2'>9/7</p>
                        <p className='font-semibold mb-2'>4/7</p>
                        <p className='font-semibold mb-2'>5/7</p>
                        <p className='font-semibold mb-2'>5/7</p>

                     </div>
                  </div>
               </div>

               <div className='mt-4'>
                  <Table dataFor='tests' data={testData} tableHeaders={tableHeaders} maxPageSize={10} />
               </div>
            </div>
         </div>
      </div>
   )
}
