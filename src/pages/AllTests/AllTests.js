import React, { useState } from 'react'
import AddIcon from '../../assets/icons/add.svg'
import InputSelect from '../../components/InputSelect/InputSelect'
import Table from '../../components/Table/Table'
import Modal from '../../components/Modal/Modal'
import InputField from '../../components/InputField/inputField'

import data from './tempData'

const optionData = [
   'option 1',
   'option 2',
   'option 3',
   'option 4',
   'option 5',
]
const tableHeaders = [
   'Test Name', 'Date Modified', 'Test Type', '', ''
]

export default function AllTests() {

   const [tableData, setTableData] = useState(data)
   const [modalActive, setModalActive] = useState(false)
   const [testName, setTestName] = useState('')

   const [question, setQuestion] = useState('')
   const [answer, setAnswer] = useState('')
   const [concept, setConcept] = useState('')
   const [strategy, setStrategy] = useState('')

   const [removeQuestionModal, setRemoveQuestionModal] = useState(false)

   const [modalData, setModalData] = useState({
      testName: '',
      dateModified: '',
      testType: ''
   })

   const handleClose = () => setModalActive(false)
   const closeRemoveModal = () => setRemoveQuestionModal(false)

   const openRemoveTestModal = item => {
      setRemoveQuestionModal(true)
      // console.log(item)
   }
   const removeTest = item => {
      setRemoveQuestionModal(false)
   }

   return (
      <div className='lg:ml-pageLeft bg-lightWhite min-h-screen'>
         <div className='py-14 px-5'>
            <div className='flex justify-between'>
               <p className='font-bold text-4xl'>All Tests</p>
               <button className='bg-primaryOrange py-4 px-6 flex items-center text-white font-semibold rounded-lg mr-55'
                  onClick={() => setModalActive(true)}>
                  Add new Test
                  <img src={AddIcon} className='ml-3' />
               </button>
            </div>
            <div className='flex align-center mt-8'>
               <InputSelect value={testName}
                  onChange={(val) => setTestName(val)}
                  optionData={optionData}
                  placeholder='Test Name'
                  parentClassName='w-290 mr-4'
                  type='select' />
            </div>

            <div className='mt-6'>
               <Table dataFor='allTests' data={tableData} tableHeaders={tableHeaders} maxPageSize={10} onClick={{ openRemoveTestModal }} />
            </div>
         </div>

         {
            modalActive &&
            <Modal
               title='Assign New Test'
               cancelBtn={true}
               primaryBtn={{ text: "Assign" }}
               handleClose={handleClose}
               body={
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-x-2 md:gap-x-3 gap-y-2 gap-y-4 mb-5'>
                     <div className=''>
                        <InputSelect label='Question Type'
                           value={question}
                           onChange={val => setQuestion(val)}
                           labelClassname='ml-2 mb-1.2'
                           optionData={optionData}
                           placeholder='Select Question Type'
                           parentClassName='w-full mr-4' type='select' />
                     </div>
                     <div>
                        <InputField label='Correct Answer'
                           labelClassname='ml-2 mb-1.2'
                           optionData={optionData}
                           placeholder='Type Correct Answer'
                           parentClassName='w-full mr-4' type='select' />
                     </div>
                     <div className=''>
                        <InputSelect value={concept}
                           onChange={val => setConcept(val)}
                           label='Concept'
                           labelClassname='ml-2 mb-1.2'
                           optionData={optionData}
                           placeholder='Concept'
                           parentClassName='w-full mr-4' type='select' />
                     </div>
                     <div className=''>
                        <InputSelect value={strategy}
                           onChange={val => setStrategy(val)}
                           optionData={optionData}
                           label='Strategy'
                           labelClassname='ml-2 mb-1.2'
                           placeholder='Strategy'
                           parentClassName='w-full mr-4'
                           type='select' />
                     </div>
                  </div>
               }
               classname={'max-w-840 mx-auto'}
            />
         }
         {
            removeQuestionModal &&
            <Modal
               title={<>
                  Are you sure <br />
                  you want to remove the test ?
               </>}
               titleClassName='leading-9'
               cancelBtn={true}
               cancelBtnClassName='py-4'
               primaryBtn={{ text: "Remove", className: 'bg-danger', onClick: removeTest }}
               handleClose={closeRemoveModal}
               body={
                  <div className='mb-10'>

                  </div>
               }
               classname={'max-w-567 mx-auto'}
            />
         }


      </div>
   )
}
