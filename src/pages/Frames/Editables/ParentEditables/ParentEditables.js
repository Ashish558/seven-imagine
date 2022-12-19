import React, { useEffect, useState } from 'react'
import { useLazyGetStudentsByNameQuery } from '../../../../app/services/session'
import { useUpdateUserFieldsMutation } from '../../../../app/services/users'
import InputField from '../../../../components/InputField/inputField'
import InputSearch from '../../../../components/InputSearch/InputSearch'
import Modal from '../../../../components/Modal/Modal'
import styles from './style.module.css'

// 637b9df1e9beff25e9c2aa83
export default function ParentEditables({ userId, setToEdit, toEdit, fetchDetails }) {
   const [title, setTitle] = useState('')
   const [currentField, setCurrentField] = useState({})
   const [currentToEdit, setCurrentToEdit] = useState({})

   const [student, setStudent] = useState('')
   const [fetchStudents, studentResponse] = useLazyGetStudentsByNameQuery()
   const [students, setStudents] = useState([]);

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
      {
         name: 'associatedStudents',
         title: 'Associated Students',
      },
   ]

   // console.log(currentField)

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
            // console.log(toEdit);
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


   useEffect(() => {
      if (student.length > 2) {
         fetchStudents(student).then((res) => {
            let tempData = res.data.data.students.map((tutor) => {
               return {
                  _id: tutor._id,
                  value: `${tutor.firstName} ${tutor.lastName}`,
               };
            });
            setStudents(tempData);
         });
      }
   }, [student]);

   const handleStudentsChange = item => {
      let tempStudents = [...currentToEdit.students]
      if (tempStudents.includes(item._id)) {
         // console.log(tempStudents);
         tempStudents=  tempStudents.filter(student => student !== item._id)
      } else {
         tempStudents.push(item._id)
      }
      setCurrentToEdit({ ...currentToEdit, students: tempStudents })
   }

   const handleSubmit = e => {
      e.preventDefault()
      let reqBody = { ...currentToEdit }
      delete reqBody['active']
      // console.log(reqBody);
      updateFields({ id: userId, fields: reqBody })
         .then(res => {
            console.log(res)
            fetchDetails(true)
            handleClose()
         })
   }

   // console.log(currentToEdit)

   return (
      Object.keys(toEdit).map(key => {
         return toEdit[key].active === true &&
            <Modal
               key={key}
               classname={'max-w-[500px] md:pb-5 mx-auto overflow-visible'}
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
                        {currentField.name === 'associatedStudents' &&
                           <div>
                              <div className=' mb-5'>
                                 {/* <p className='font-medium mr-4'> Associated Students </p> */}
                                 <div>
                                    {currentToEdit.students.map(student => {
                                     return  <p>
                                          {student}
                                       </p>
                                    })}
                                 </div>
                                 <InputSearch
                                    placeholder="Type Student Name"
                                    parentClassName="w-full  mb-10"
                                    inputContainerClassName="bg-lightWhite border-0 pt-3.5 pb-3.5"
                                    inputClassName="bg-transparent"
                                    type="text"
                                    optionPrefix='s'
                                    value={student}
                                    checkbox={{
                                       visible: true,
                                       name: 'name',
                                       match: currentToEdit.students
                                    }}
                                    onChange={(e) => setStudent(e.target.value)}
                                    optionData={students}
                                    onOptionClick={(item) => {
                                       // setStudent(item.value);
                                       handleStudentsChange(item)
                                       // setCurrentToEdit({ ...currentToEdit, students: [... item._id] });
                                    }}
                                 />
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
