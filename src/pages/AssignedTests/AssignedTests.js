import React, { useState } from 'react'
import AddIcon from '../../assets/icons/add.svg'
import InputSelect from '../../components/InputSelect/InputSelect'
import Modal from '../../components/Modal/Modal'
import Table from '../../components/Table/Table'
import { tableData } from './tempData'

const optionData = [
   'option 1',
   'option 2',
   'option 3',
   'option 4',
   'option 5',
]

const tableHeaders = [
   'Name', 'Name', "Test Name", 'Duration', 'Status', 'Scores', '',
   ''
]

export default function AssignedTests() {

   const [filterData, setFilterData] = useState(['Student', 'Parent', 'Active'])
   const [assignTestModalActive, setAssignTestModalActive] = useState(false)

   const handleClose = () => setAssignTestModalActive(false)

   const [studentName, setStudentName] = useState('')
   const [testName, setTestName] = useState('')
   const [tutor, setTutor] = useState('')
   const [status, setStatus] = useState('')

   const updateStudentName = val => setStudentName(val)
   const updateTestName = val => setTestName(val)
   const updateTutor = val => setTutor(val)
   const updateStatus = val => setStatus(val)

   const [modalData, setModalData] = useState({
      name: '',
      limit: '',
      date: '',
      test: ''
   })
   return (
      <>
         <div className='lg:ml-pageLeft bg-lightWhite min-h-screen'>
            <div className='py-14 px-5'>
               <div className='flex justify-between'>
                  <p className='font-bold text-4xl'>Assigned Tests</p>
                  <button className='bg-primaryOrange py-4 px-6 flex items-center text-white font-semibold rounded-lg mr-55' onClick={() => setAssignTestModalActive(true)} >
                     Assign new test
                     <img src={AddIcon} className='ml-3' />
                  </button>
               </div>
               <div className='flex align-center mt-8'>
                  <InputSelect value={studentName}
                     onChange={updateStudentName}
                     className=''
                     optionData={optionData}
                     placeholder='Student Name'
                     parentClassName='w-full mr-4'
                     type='select' />
                  <InputSelect value={testName}
                     onChange={updateTestName}
                     optionData={optionData}
                     placeholder='Test Name'
                     parentClassName='w-full mr-4'
                     type='select' />
                  <InputSelect value={tutor}
                     onChange={updateTutor}
                     optionData={optionData}
                     placeholder='Tutor Name'
                     parentClassName='w-full mr-4'
                     type='select' />
                  <InputSelect value={status}
                     onChange={updateStatus}
                     optionData={optionData}
                     placeholder='Completion Status'
                     parentClassName='w-full mr-4'
                     type='select' />

               </div>

               <div className='mt-6'>
                  <Table dataFor='assignedTests' data={tableData} tableHeaders={tableHeaders} maxPageSize={10} />
               </div>
            </div>
         </div>
         {
            assignTestModalActive &&
            <Modal
               title='Assign New Test'
               cancelBtn={true}
               primaryBtn={
                  { text: "Assign" }
               }
               handleClose={handleClose}
               body={
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-x-2 md:gap-x-3 gap-y-2 gap-y-4 mb-5'>
                     <div>
                        <InputSelect label='Student Name'
                           value={modalData.name}
                           onChange={val => setModalData({...modalData, name: val})}
                           labelClassname='ml-2 mb-0.5'
                           optionData={optionData}
                           placeholder='Student Name'
                           parentClassName='w-full mr-4' type='select' />
                     </div>
                     <div>
                        <InputSelect label='Time Limit'
                           value={modalData.limit}
                           onChange={val => setModalData({...modalData, limit: val})}
                           labelClassname='ml-2 mb-0.5'
                           optionData={optionData}
                           placeholder='Select Time Limit'
                           parentClassName='w-full mr-4' type='select' />
                     </div>
                     <div>
                        <InputSelect label='Due Date'
                           value={modalData.date}
                           onChange={val => setModalData({...modalData, date: val})}
                           labelClassname='ml-2 mb-0.5'
                           optionData={optionData}
                           placeholder='Date'
                           parentClassName='w-full mr-4' type='select' />
                     </div>
                     <div>
                        <InputSelect optionData={optionData}
                           value={modalData.test}
                           onChange={val => setModalData({...modalData, test: val})}
                           labelClassname='ml-2 mb-0.5'
                           label='Test'
                           placeholder='Type Test Name'
                           parentClassName='w-full mr-4'
                           type='select' />
                     </div>
                  </div>
               }
               classname={'max-w-840 mx-auto'}
            />
         }

      </>
   )
}
