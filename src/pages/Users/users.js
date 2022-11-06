import React, { useState } from 'react'
import AddIcon from '../../assets/icons/add.svg'
import In from '../../components/InputSelect/InputSelect'
import InputSelect from '../../components/InputSelect/InputSelect'
import FilterItems from '../../components/FilterItems/filterItems'
import Table from '../../components/Table/Table'
import { tableData } from './tempData'
import Modal from '../../components/Modal/Modal'
import InputField from '../../components/InputField/inputField'

const optionData = [
   'option 1',
   'option 2',
   'option 3',
   'option 4',
   'option 5',
]
const tableHeaders = [
   'Full Name', 'User Type', "Email", 'Phone', 'Assigned Tutor', 'Lead Status', 'Tutor Status',
   'Services'
]

export default function Users() {

   const [filterData, setFilterData] = useState(['Student', 'Parent', 'Active'])
   const [modalActive, setModalActive] = useState(false)
   const handleClose = () => setModalActive(false)

   return (
      <div className='ml-pageLeft bg-lightWhite min-h-screen'>
         <div className='py-14 px-5'>
            <div className='flex justify-between'>
               <p className='font-bold text-4xl'>All Users</p>
               <button className='bg-primary py-4 px-6 flex items-center text-white font-semibold rounded-lg mr-55'
                  onClick={() => setModalActive(true)}>
                  Add new User
                  <img src={AddIcon} className='ml-3' />
               </button>
            </div>
            <div className='flex align-center mt-8'>
               <InputSelect optionData={optionData} placeholder='Type Name' parentClassName='w-full mr-4' type='select' />
               <InputSelect optionData={optionData} placeholder='User Type' parentClassName='w-full mr-4' type='select' />
               <InputSelect optionData={optionData} placeholder='Lead Status' parentClassName='w-full mr-4' type='select' />
               <InputSelect optionData={optionData} placeholder='Services' parentClassName='w-full mr-4' type='select' />
               <InputSelect optionData={optionData} placeholder='Tutor' parentClassName='w-full mr-4' type='select' />
            </div>
            <div className='mt-4' >
               <FilterItems data={filterData} setData={filterData} />
            </div>
            <div className='mt-6'>
               <Table dataFor='allUsers' data={tableData} tableHeaders={tableHeaders} maxPageSize={10} />
            </div>
         </div>

         {
            modalActive &&
            <Modal
               classname={'max-w-840 mx-auto'}
               title='Add a new user'
               cancelBtn={true}
               primaryBtn={{ text: "Assign" }}
               handleClose={handleClose}
               body={
                  <div className='grid grid-cols-1 md:grid-cols-2  gap-x-2 md:gap-x-3 gap-y-2 gap-y-4 mb-5'>
                     <div>
                        <InputField label='Email Addresss'
                           labelClassname='ml-2 mb-0.5'
                           placeholder='Email Addresss'
                           parentClassName='w-full mr-4' type='text' />
                     </div>
                     <div>
                        <InputField label='Password'
                           labelClassname='ml-2 mb-0.5'
                           optionData={optionData}
                           placeholder='minimum 8 characters'
                           parentClassName='w-full mr-4' type='select' />
                     </div>
                     <div>
                        <InputSelect
                           type='select'
                           placeholder='User Type'
                           label='Select User Type'
                           labelClassname='ml-2 mb-0.5'
                           optionData={optionData}
                           parentClassName='w-full mr-4' />
                     </div>
                  </div>
               }
            />
         }

      </div>
   )
}
