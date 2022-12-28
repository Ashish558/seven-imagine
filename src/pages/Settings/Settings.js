import React, { useEffect, useRef, useState } from 'react'
import PrimaryButton from '../../components/Buttons/PrimaryButton'
import EditIcon from '../../assets/icons/edit-white.svg'
import SettingsCard from '../../components/SettingsCard/SettingsCard'
import AddTag from '../../components/Buttons/AddTag'
import FilterItems from '../../components/FilterItems/filterItems'
import InputField from '../../components/InputField/inputField'
import Modal from '../../components/Modal/Modal'
import { useLazyGetSettingsQuery } from '../../app/services/session'
import { useUpdateOfferImageMutation, useUpdateSettingMutation } from '../../app/services/settings'
import { getSessionTagName } from '../../utils/utils'
import { BASE_URL } from '../../app/constants/constants'
import axios from 'axios'

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
   const [settingsData, setSettingsData] = useState({})
   const inputRef = useRef()
   const [image, setImage] = useState(null)
   const [getSettings, getSettingsResp] = useLazyGetSettingsQuery()
   const [updateSetting, updateSettingResp] = useUpdateSettingMutation()
   const [updateImage, updateImageResp] = useUpdateOfferImageMutation()

   const [modalData, setModalData] = useState(initialState)

   const handleClose = () => setModalActive(false)

   const handleSubmit = e => {
      e.preventDefault()
      console.log(modalData);
   }

   const fetchSettings = () => {
      getSettings()
         .then(res => {
            console.log(res);
            setSettingsData(res.data.data.setting)
         })
   }

   const onRemoveFilter = (item, key, idx) => {

      if (key === undefined || item === undefined) return
      // let updatedField = settingsData[key].filter(text => text !== item)
      let updatedField = settingsData[key].filter((text, i) => i !== idx)
      let updatedSetting = {
         [key]: updatedField
      }
      updateAndFetchsettings(updatedSetting)
   }


   const onRemoveSessionTag = (item, key, idx) => {
      let updatedSessionTag = { ...settingsData.sessionTags }
      // let updatedField = settingsData.sessionTags[key].filter(text => text !== item)
      let updatedField = settingsData.sessionTags[key].filter((text, i) => i !== idx)
      updatedSessionTag[key] = updatedField

      const updatedSetting = { sessionTags: updatedSessionTag }
      updateAndFetchsettings(updatedSetting)

   }

   const handleAddTag = (text, key) => {
      let tempSettings = { ...settingsData }
      let updatedSetting = {
         [key]: [...tempSettings[key], text]
      }
      updateAndFetchsettings(updatedSetting)
   }

   const handleSessionAddTag = (text, key) => {
      let tempSettings = { ...settingsData }
      let updatedSessionTag = {
         ...tempSettings.sessionTags,
         [key]: [...tempSettings.sessionTags[key], text]
      }
      const updatedSetting = { sessionTags: updatedSessionTag }
      updateAndFetchsettings(updatedSetting)
   }

   const updateAndFetchsettings = updatedSetting => {
      updateSetting(updatedSetting)
         .then(res => {
            setSettingsData(res.data.data.setting)
         })
   }

   const handleImageUpload = () => {
      inputRef.current.click()
   }

   const onImageChange = e => {
      //   console.log(e.target.files[0])
      setImage(e.target.files[0])
      const formData = new FormData();
      formData.append("offer", e.target.files[0])
      // updateImage(formData)
      //    .then(res => {
      //       console.log(res)
      //       setSettingsData(res.data.data.setting)
      //    })
      axios.patch(`${BASE_URL}api/user/setting/addimage`, formData)
         .then((res) => {
            // console.log(res)
            setImage(null)
            fetchSettings()
         })
   }

   const onRemoveImage = (item, i) => {
      console.log(item, i)
      let updatedField = settingsData.offerImages.filter(text => text !== item)
      let updatedSetting = {
         offerImages: updatedField
      }
      //   console.log(updatedSetting)
      updateAndFetchsettings(updatedSetting)
   }

   useEffect(() => {
      fetchSettings()
   }, [])


   if (Object.keys(settingsData).length === 0) return <></>
   const { classes, serviceSpecialisation, sessionTags, leadStatus, tutorStatus, offerImages, subscriptionCode } = settingsData

   console.log(settingsData)

   return (
      <>

         <div className='lg:ml-pageLeft bg-lightWhite min-h-screen px-8 pt-[50px] pb-[50px]'>
            <div className='flex justify-between items-center mb-[45px]'>

               <div>
                  <p className='font-bold text-4xl mb-[54px] text-[#25335A]'> Settings </p>
                  <div className='text-base'>
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
                        <p className='mr-3 text-lf font-semibold whitespace-nowrap text-[18px]'>
                           Edit Details
                        </p>
                        <img src={EditIcon} />
                     </div>} />
            </div>

            <div>
               <SettingsCard title='Lead Status Items'
                  body={
                     <div className='flex items-center [&>*]:mb-[10px]'>
                        <AddTag onAddTag={handleAddTag} keyName='leadStatus' />
                        <FilterItems onlyItems={true}
                           isString={true}
                           items={leadStatus}
                           keyName='leadStatus'
                           onRemoveFilter={onRemoveFilter}
                           className='pt-1 pb-1 mr-15' />
                     </div>
                  } />

               <SettingsCard title='Tutor Status Items'
                  body={
                     <div className='flex items-center [&>*]:mb-[10px]'>
                        <AddTag onAddTag={handleAddTag} keyName='tutorStatus' />
                        <FilterItems onlyItems={true}
                           isString={true}
                           items={tutorStatus}
                           keyName='tutorStatus'
                           onRemoveFilter={onRemoveFilter}
                           className='pt-1 pb-1 mr-15' />
                     </div>
                  } />
               <SettingsCard title='Subscription Code'
                  body={
                     <div className='flex items-center [&>*]:mb-[10px]'>
                        <AddTag onAddTag={handleAddTag} keyName='subscriptionCode' />
                        <FilterItems onlyItems={true}
                           isString={true}
                           items={subscriptionCode}
                           keyName='subscriptionCode'
                           onRemoveFilter={onRemoveFilter}
                           className='pt-1 pb-1 mr-15' />
                     </div>
                  } />

               <SettingsCard title='Session Tags'
                  titleClassName='text-[21px] mb-[15px]'
                  body={
                     <div>
                        {Object.keys(sessionTags).map((tag, i) => {
                           return <div>
                              <p className='font-bold text-primary-dark mb-[25px]'>
                                 {getSessionTagName(Object.keys(sessionTags)[i])}
                              </p>
                              <div className='flex items-center flex-wrap [&>*]:mb-[10px]'>
                                 <AddTag onAddTag={handleSessionAddTag}
                                    keyName={Object.keys(sessionTags)[i]} />
                                 <FilterItems isString={true} onlyItems={true}
                                    keyName={Object.keys(sessionTags)[i]}
                                    items={sessionTags[tag]}
                                    onRemoveFilter={onRemoveSessionTag}
                                    className='pt-1 pb-1 mr-15' />
                              </div>
                           </div>
                        })}
                     </div>
                  } />

               <SettingsCard title='Service Specialisation'
                  body={
                     <div className='flex items-center [&>*]:mb-[10px]'>
                        <AddTag keyName='serviceSpecialisation' onAddTag={handleAddTag} />
                        <FilterItems isString={true} onlyItems={true}
                           items={serviceSpecialisation}
                           keyName='serviceSpecialisation'
                           onRemoveFilter={onRemoveFilter}
                           className='pt-1 pb-1 mr-15' />
                     </div>
                  } />

               <SettingsCard title='Classes'
                  body={
                     <div className='flex items-center [&>*]:mb-[10px]'>
                        <AddTag onAddTag={handleAddTag} keyName='classes' />
                        <FilterItems isString={true}
                           onlyItems={true}
                           keyName='classes'
                           items={classes}
                           onRemoveFilter={onRemoveFilter}
                           className='pt-1 pb-1 mr-15' />
                     </div>
                  } />

               <SettingsCard title='Images in Offer Slide'
                  body={
                     <div className='flex items-center [&>*]:mb-[10px]'>
                        <input type='file' ref={inputRef} className='hidden' accept="image/*"
                           onChange={e => onImageChange(e)} />
                        <AddTag isFile={true} onAddTag={handleImageUpload} />
                        <FilterItems isString={true}
                           onlyItems={true}
                           sliceText={true}
                           items={offerImages}
                           onRemoveFilter={onRemoveImage}
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
                  text: "Save",
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
         {
            modalActive &&
            <Modal
               classname={'max-w-840 mx-auto'}
               title='Edit Details'
               titleClassName='mb-[18px]'
               cancelBtn={true}
               cancelBtnClassName='w-140'
               primaryBtn={{
                  text: "Save",
                  className: 'w-140',
                  form: 'settings-form',
                  type: 'submit',
               }}
               handleClose={handleClose}
               body={
                  <form id='settings-form' onSubmit={handleSubmit}>
                     <div className=' mb-5'>
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
                     </div>
                  </form>
               }
            />
         }

      </>

   )
}
