import React, { useState } from 'react'
import PrimaryButton from '../../components/Buttons/PrimaryButton'
import EditIcon from '../../assets/icons/edit-white.svg'
import SettingsCard from '../../components/SettingsCard/SettingsCard'
import AddTag from '../../components/Buttons/AddTag'
import FilterItems from '../../components/FilterItems/filterItems'
import InputField from '../../components/InputField/inputField'
import Modal from '../../components/Modal/Modal'

const testFilters = [
   {
      text: 'test',
   },
   {
      text: 'test',
   },
   {
      text: 'test',
   },
]

const sessionTags = [
   {
      name: 'Topics Covered',
      items: [
         {
            text: 'test',
         },
         {
            text: 'test',
         }
      ]
   },
   {
      name: 'Student Mood',
      items: [
         {
            text: 'test',
         },
         {
            text: 'test',
         }
      ]
   },
   {
      name: 'Homework Assigned',
      items: [
         {
            text: 'test',
         },
         {
            text: 'test',
         }
      ]
   },
   {
      name: 'Was the Session Productive',
      items: [
         {
            text: 'test',
         },
         {
            text: 'test',
         }
      ]
   },
]

const initialState = {
   name: '',
   phone: '',
   email: '',
}
export default function Settings() {

   const [modalActive, setModalActive] = useState(false)

   const onRemoveFilter = item => {
      console.log(item);
   }
   const [modalData, setModalData] = useState(initialState)

   const handleClose = () => setModalActive(false)

   const handleSubmit = e => {
      e.preventDefault()
      console.log(modalData);
   }

   return (
      <>

         <div className='ml-pageLeft bg-lightWhite min-h-screen px-8 pt-[50px] pb-[50px]'>
            <div className='flex justify-between items-center mb-[56px]'>

               <div>
                  <p className='font-bold text-4xl mb-[54px]'> Settings </p>
                  <div className='text-lg'>
                     <div className='flex items-center mb-4'>
                        <p className='opacity-60  mr-[15px]'> Full Name:</p>
                        <p className='font-bold'> Kartik Sarda</p>
                     </div>
                     <div className='flex items-center mb-4'>
                        <p className='opacity-60 mr-[23px]'>  Email:</p>
                        <p className='font-bold'> kartik@sevensquarelearning.com</p>
                     </div>
                     <div className='flex items-center mb-4'>
                        <p className='opacity-60 mr-[15px]'>Phone:</p>
                        <p className='font-bold'> +91 1234567890</p>
                     </div>
                  </div>
               </div>

               <PrimaryButton
                  className='w-[174px] px-4'
                  onClick={() => setModalActive(true)}
                  children={
                     <div className='flex items-center justify-center'>
                        <p className='mr-3 text-lf font-semibold whitespace-nowrap'>
                           Edit Details
                        </p>
                        <img src={EditIcon} />
                     </div>} />
            </div>

            <div>
               <SettingsCard title='Lead Status Items'
                  body={
                     <div className='flex items-center'>
                        <AddTag />
                        <FilterItems items={testFilters}
                           onRemoveFilter={onRemoveFilter}
                           className='pt-1 pb-1 mr-15' />
                     </div>
                  } />

               <SettingsCard title='Tutor Status Items'
                  body={
                     <div className='flex items-center'>
                        <AddTag />
                        <FilterItems items={testFilters}
                           onRemoveFilter={onRemoveFilter}
                           className='pt-1 pb-1 mr-15' />
                     </div>
                  } />

               <SettingsCard title='Session Tags'
                  titleClassName='text-[21px] mb-[15px]'
                  body={
                     <div>
                        {sessionTags.map(tag => {
                           return <div>
                              <p className='font-bold text-primary-dark mb-[25px]'> {tag.name} </p>
                              <div className='flex items-center mb-2.5'>
                                 <AddTag />
                                 <FilterItems items={tag.items}
                                    onRemoveFilter={onRemoveFilter}
                                    className='pt-1 pb-1 mr-15' />
                              </div>
                           </div>
                        })}
                     </div>
                  } />

               <SettingsCard title='Service Specialisation'
                  body={
                     <div className='flex items-center'>
                        <AddTag />
                        <FilterItems items={testFilters}
                           onRemoveFilter={onRemoveFilter}
                           className='pt-1 pb-1 mr-15' />
                     </div>
                  } />

               <SettingsCard title='Classes'
                  body={
                     <div className='flex items-center'>
                        <AddTag />
                        <FilterItems items={testFilters}
                           onRemoveFilter={onRemoveFilter}
                           className='pt-1 pb-1 mr-15' />
                     </div>
                  } />

               <SettingsCard title='Images in Offer Slide'
                  body={
                     <div className='flex items-center'>
                        <AddTag />
                        <FilterItems items={testFilters}
                           onRemoveFilter={onRemoveFilter}
                           className='pt-1 pb-1 mr-15' />
                     </div>
                  } />
            </div>
         </div >
         {
            modalActive &&
            <Modal
               classname={'max-w-840 mx-auto'}
               title='Edit Details'
               titleClassName='mb-[18px]'
               cancelBtn={true}
               cancelBtnClassName='w-140'
               primaryBtn={{
                  text: "Add",
                  className: 'w-140',
                  form: 'settings-form',
                  type: 'submit',
               }}
               handleClose={handleClose}
               body={
                  <form id='settings-form' onSubmit={handleSubmit}>
                     <div className='grid grid-cols-1 md:grid-cols-2  gap-x-2 md:gap-x-3 gap-y-2 gap-y-4 mb-5'>
                        <div>
                           <InputField label='Admin Name'
                              labelClassname='ml-4 mb-0.5'
                              placeholder='Admin Name'
                              inputContainerClassName='px-5 bg-primary-50 border-0'
                              inputClassName='bg-transparent'
                              parentClassName='w-full mr-4' type='text'
                              value={modalData.name}
                              isRequired={true}
                              onChange={e => setModalData({ ...modalData, name: e.target.value })} />
                        </div>
                        <div>
                           <InputField label='Phone No.'
                              labelClassname='ml-4 mb-0.5'
                              isRequired={true}
                              placeholder='+91 Phone Number'
                              inputContainerClassName='px-5 bg-primary-50 border-0'
                              inputClassName='bg-transparent'
                              parentClassName='w-full mr-4' type='text'
                              value={modalData.phone}
                              onChange={e => setModalData({ ...modalData, phone: e.target.value })} />
                        </div>
                        <div>
                           <InputField label='Email Address'
                              labelClassname='ml-4 mb-0.5'
                              isRequired={true}
                              placeholder='Email Address'
                              type='email'
                              inputContainerClassName='px-5 bg-primary-50 border-0'
                              inputClassName='bg-transparent'
                              parentClassName='w-full mr-4'
                              value={modalData.email}
                              onChange={e => setModalData({ ...modalData, email: e.target.value })} />
                        </div>

                     </div>
                  </form>
               }
            />
         }

      </>

   )
}
