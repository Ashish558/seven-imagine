import React, { useEffect, useState } from 'react'
import { useUpdateUserFieldsMutation } from '../../../../app/services/users'
import InputField from '../../../../components/InputField/inputField'
import Modal from '../../../../components/Modal/Modal'
import styles from './style.module.css'


export default function ParentEditables({ userId, setToEdit, toEdit }) {
   const [title, setTitle] = useState('')
   const [currentField, setCurrentField] = useState({})
   const [currentToEdit, setCurrentToEdit] = useState({})

   const [updateFields, updateFieldsResp] = useUpdateUserFieldsMutation()
   const handleChange = () => {

   }
   const data = [
      {
         name: 'fullName',
         title: 'Full Name',
      },
      {
         name: 'timeZone',
         title: 'Time Zone',
      },
      {
         name: 'subscriptionType',
         title: 'Subscription',
      },
      {
         name: 'birthYear',
         title: 'Birth Year',
      },
      {
         name: 'industry',
         title: 'Industry',
      },
      {
         name: 'contact',
         title: 'Contact',
      },
      {
         name: 'address',
         title: 'Time',
      },
   ]

   // console.log(currentField);
   const getCurrentField = keyName => {
      Object.keys(data).map(key => {
         if (data[key].name === keyName) {
            // console.log(data[key]);
            setCurrentField(data[key])
         }
      })
   }

   useEffect(() => {
      Object.keys(toEdit).map(key => {
         if (toEdit[key].active === true) {
            getCurrentField(key)
            // setEditFieldValue(toEdit[key])
            setCurrentToEdit(toEdit[key])
         }
      })
   }, [toEdit])



   const handleClose = () => {
      let tempToEdit = {}
      Object.keys(toEdit).map(key => {
         return tempToEdit[key] = { ...toEdit[key], active: false }
      })
      setToEdit(tempToEdit)
   }

   const handleSubmit = e => {
      e.preventDefault()
      let reqBody = { ...currentToEdit }
      delete reqBody['active']
      console.log(reqBody);
      updateFields({ id: userId, fields: reqBody })
      .then(res => {
         console.log(res);
      })
   }

   return (

      Object.keys(toEdit).map(key => {
         return toEdit[key].active === true &&
            <Modal
               key={key}
               classname={'max-w-[500px] md:pb-5 mx-auto overflow-hidden'}
               title=''
               cancelBtn={false}
               primaryBtn={{
                  text: "Save",
                  className: 'w-[100px] bg-primaryOrange text-base pt-2 ml-0 pb-2 text-lg pl-3 pr-3 ',
                  form: 'editable-form',
                  // onClick: handleSubmit,
                  type: 'submit',
               }}
               handleClose={handleClose}
               body={
                  <>
                     <div className={styles.titleContainer}>
                        {currentField.title}
                     </div>
                     <form className='mt-10 mb-4' id='editable-form' onSubmit={handleSubmit} >
                        {/* {currentField.fields && currentField.fields} */}
                        {currentField.name === 'fullName' &&
                           <div>
                              <div className='flex items-center mb-5'>
                                 <p className='font-medium mr-4'> First Name </p>
                                 <InputField
                                    labelClassname='hidden'
                                    placeholder='First Name'
                                    inputContainerClassName='text-sm pt-3 pb-3 px-5 bg-primary-50 border-0'
                                    inputClassName='bg-transparent'
                                    parentClassName='flex-1 ' type='text'
                                    value={currentToEdit.firstName}
                                    onChange={e => setCurrentToEdit({ ...currentToEdit, firstName: e.target.value })} />
                              </div>
                              <div className='flex items-center'>
                                 <p className='font-medium mr-4'> Last Name </p>
                                 <InputField
                                    labelClassname='hidden'
                                    placeholder='Last Name'
                                    inputContainerClassName='text-sm pt-3 pb-3 px-5 bg-primary-50 border-0'
                                    inputClassName='bg-transparent'
                                    parentClassName='flex-1 ' type='text'
                                    value={currentToEdit.lastName}
                                    onChange={e => setCurrentToEdit({ ...currentToEdit, lastName: e.target.value })} />
                              </div>
                           </div>
                        }

                        {/* <InputField label='First Name'
                           labelClassname='ml-4 mb-0.5'
                           placeholder='First Name'
                           inputContainerClassName='text-sm pt-3.5 pb-3.5 px-5 bg-primary-50 border-0'
                           inputClassName='bg-transparent'
                           parentClassName='w-full mr-4' type='text' /> */}
                     </form>
                  </>
               }
            />
      })

   )
}
