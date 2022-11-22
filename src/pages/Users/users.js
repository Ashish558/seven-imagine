import React, { useEffect, useState } from 'react'

import Table from '../../components/Table/Table'
import FilterItems from '../../components/FilterItems/filterItems'
import Modal from '../../components/Modal/Modal'
import InputField from '../../components/InputField/inputField'
import InputSelect from '../../components/InputSelect/InputSelect'

import AddIcon from '../../assets/icons/add.svg'
import SearchIcon from '../../assets/icons/search.svg'
import { tableData, userTypesList } from './tempData'
import { useLazyGetAllUsersQuery } from '../../app/services/users'

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

   const [filterItems, setFilterItems] = useState(['Student', 'Parent', 'Active'])
   const [modalActive, setModalActive] = useState(false)

   const [usersData, setUsersData] = useState([])
   const [filteredUsersData, setFilteredUsersData] = useState([])

   const [fetchUsers, fetchUsersResp] = useLazyGetAllUsersQuery()

   const [filterData, setFilterData] = useState({
      typeName: '',
      userType: '',
      status: '',
      services: '',
      tutor: ''
   })

   useEffect(() => {
      fetchUsers()
         .then(res => {
            let data = res.data.data.user.map(user => {
               return {
                  _id: user._id,
                  name: `${user.firstName} ${user.lastName}`,
                  email: user.email ? user.email : '-',
                  userType: user.role ? user.role : '-',
                  phone: user.phone ? user.phone : '-',
                  assignedTutor: '-',
                  leadStatus: '-',
                  tutorStatus: '-',
                  services: '-',
               }
            })
            setUsersData(data)
            setFilteredUsersData(data)
         })
   }, [])

   // useEffect(() => {
   //    let tempdata = usersData.filter(user => user.userType === filterData.userType)
   //    setFilteredUsersData(tempdata)
   // }, [filterData.userType])

   const [modalUserType, setModalUserType] = useState('')
   const handleClose = () => setModalActive(false)

   return (
      <div className='lg:ml-pageLeft bg-lightWhite min-h-screen'>
         <div className='py-14 px-5'>
            <div className='flex justify-between items-center'>
               <p className='font-bold text-4xl text-primary-dark'>All Users</p>
               <button className='bg-primary py-3.5 text-lg px-6 flex items-center text-white font-semibold rounded-lg mr-55'
                  onClick={() => setModalActive(true)}>
                  Add new User
                  <img src={AddIcon} className='ml-3' />
               </button>
            </div>
            <div className='flex align-center mt-8'>
               <InputField
                  IconRight={SearchIcon}
                  placeholder='Type Name'
                  parentClassName='w-full mr-4'
                  inputContainerClassName='bg-white'
                  type='text'
                  value={filterData.typeName}
                  onChange={e => setFilterData({ ...filterData, typeName: e.target.value })} />
               <InputSelect optionData={userTypesList}
                  placeholder='User Type'
                  parentClassName='w-full mr-4'
                  type='select'
                  value={filterData.userType}
                  onChange={val => setFilterData({ ...filterData, userType: val })} />
               <InputSelect optionData={optionData}
                  placeholder='Lead Status'
                  parentClassName='w-full mr-4'
                  type='select'
                  value={filterData.status}
                  onChange={val => setFilterData({ ...filterData, status: val })} />
               <InputSelect optionData={optionData}
                  placeholder='Services'
                  parentClassName='w-full mr-4'
                  type='select'
                  value={filterData.services}
                  onChange={val => setFilterData({ ...filterData, services: val })} />
               <InputSelect optionData={optionData}
                  placeholder='Tutor'
                  parentClassName='w-full mr-4'
                  type='select'
                  value={filterData.tutor}
                  onChange={val => setFilterData({ ...filterData, tutor: val })} />
            </div>
            <div className='mt-4' >
               <FilterItems data={filterItems} setData={setFilterItems} />
            </div>
            <div className='mt-6'>
               <Table dataFor='allUsers'
                  data={filteredUsersData}
                  tableHeaders={tableHeaders}
                  maxPageSize={10} />
            </div>
         </div>

         {
            modalActive &&
            <Modal
               classname={'max-w-840 mx-auto'}
               title='Add a New User'
               cancelBtn={true}
               cancelBtnClassName='w-140'
               primaryBtn={{ text: "Add", className: 'w-140' }}
               handleClose={handleClose}
               body={
                  <div className='grid grid-cols-1 md:grid-cols-2  gap-x-2 md:gap-x-3 gap-y-2 gap-y-4 mb-5'>
                     <div>
                        <InputField label='Email Addresss'
                           labelClassname='ml-4 mb-0.5'
                           placeholder='Email Addresss'
                           inputContainerClassName='px-5 bg-primary-50'
                           inputClassName='bg-transparent'
                           parentClassName='w-full mr-4' type='text' />
                     </div>
                     <div>
                        <InputField label='Password'
                           labelClassname='ml-4 mb-0.5'
                           optionData={optionData}
                           placeholder='minimum 8 characters'
                           inputContainerClassName='px-5 bg-primary-50'
                           inputClassName='bg-transparent'
                           parentClassName='w-full mr-4' type='password' />
                     </div>
                     <div>
                        <InputSelect value={modalUserType}
                           onChange={val => setModalUserType(val)}
                           type='select'
                           placeholder='Select User Type'
                           label='User Type'
                           labelClassname='ml-4 mb-0.5'
                           optionData={optionData}
                           inputContainerClassName=' bg-primary-50 px-5'
                           parentClassName='w-full mr-4' />
                     </div>
                  </div>
               }
            />
         }

      </div>
   )
}
