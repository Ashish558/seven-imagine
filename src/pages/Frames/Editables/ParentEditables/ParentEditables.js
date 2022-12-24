import React, { useEffect, useState } from 'react'
import { useLazyGetStudentsByNameQuery } from '../../../../app/services/session'
import { useUpdateUserDetailsMutation, useUpdateUserFieldsMutation } from '../../../../app/services/users'
import InputField from '../../../../components/InputField/inputField'
import InputSearch from '../../../../components/InputSearch/InputSearch'
import InputSelect from '../../../../components/InputSelect/InputSelect'
import Modal from '../../../../components/Modal/Modal'
import Slider from '../../../../components/Slider/Slider'
import styles from './style.module.css'

// 637b9df1e9beff25e9c2aa83
export default function ParentEditables({ userId, setToEdit, toEdit, fetchDetails, settings }) {
   const [title, setTitle] = useState('')
   const [currentField, setCurrentField] = useState({})
   const [currentToEdit, setCurrentToEdit] = useState({})

   const [student, setStudent] = useState('')
   const [fetchStudents, studentResponse] = useLazyGetStudentsByNameQuery()
   const [students, setStudents] = useState([]);

   const [updateFields, updateFieldsResp] = useUpdateUserFieldsMutation()
   const [updateDetails, updateDetailsResp] = useUpdateUserDetailsMutation()
   const handleChange = () => {

   }

   const data = [
      {
         name: 'fullName',
         title: 'Full Name',
         api: 'user',
      },
      {
         name: 'timeZone',
         title: 'Time Zone',
         api: 'userDetail',
      },
      {
         name: 'subscribeType',
         title: 'Subscription',
         api: 'userDetail',
      },
      {
         name: 'birthYear',
         title: 'Birth Year',
         api: 'userDetail',
      },
      {
         name: 'industry',
         title: 'Industry',
         api: 'userDetail',
      },
      {
         name: 'contact',
         title: 'Contact',
         api: 'user',
      },
      {
         name: 'address',
         title: 'Residential Address',
         api: 'userDetail',
      },
      {
         name: 'associatedStudents',
         title: 'Associated Students',
         api: 'user',
      },
      {
         name: 'notes',
         title: 'Notes',
         api: 'userDetail',
      },
      {
         name: 'service',
         title: 'Service',
         api: 'userDetail',
      },
      {
         name: 'leadStatus',
         title: 'Lead Status',
         api: 'userDetail',
      },
      {
         name: 'subjects',
         title: 'Subjects',
         api: 'userDetail',
      },
      {
         name: 'accomodations',
         title: 'Accomodations',
         api: 'userDetail',
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
      // setToEdit()
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
      let tempStudents = [...currentToEdit.assiginedStudents]
      let tempStudentsData = [...currentToEdit.studentsData]
      if (tempStudents.includes(item._id)) {
         tempStudents = tempStudents.filter(student => student !== item._id)
         tempStudentsData = tempStudentsData.filter(student => student._id !== item._id)
      } else {
         tempStudents.push(item._id)
         tempStudentsData.push(item)
      }
      console.log(tempStudentsData)
      setCurrentToEdit({ ...currentToEdit, assiginedStudents: tempStudents, studentsData: tempStudentsData })
   }

   const handleServiceChange = item => {
      let tempService = [...currentToEdit.service]
      if (tempService.includes(item)) {
         // console.log(tempService);
         tempService = tempService.filter(service => service !== item)
      } else {
         tempService.push(item)
      }
      setCurrentToEdit({ ...currentToEdit, service: tempService })
   }

   const handleSubjectChange = item => {
      let tempSubjects = [...currentToEdit.subjects]
      if (tempSubjects.includes(item)) {
         // console.log(tempSubjects);
         tempSubjects = tempSubjects.filter(subject => subject !== item)
      } else {
         tempSubjects.push(item)
      }
      setCurrentToEdit({ ...currentToEdit, subjects: tempSubjects })
   }

   const handleSubmit = e => {
      e.preventDefault()
      let reqBody = { ...currentToEdit }
      delete reqBody['active']
      console.log(reqBody);

      if (currentField.api === 'user') {
         updateFields({ id: userId, fields: reqBody })
            .then(res => {
               console.log(res)
               fetchDetails(true, true)
               // handleClose()
               // setCurrentToEdit({})
            })
      } else {
         updateDetails({ id: userId, fields: reqBody })
            .then(res => {
               console.log(res)
               fetchDetails(true, true)
               // handleClose()
               // setCurrentToEdit({})
            })
      }
   }

   // console.log('toedit', currentToEdit)
   // console.log('field', currentField)
   // console.log('sett', settings)
   // console.log('students', students)

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
               cancelBtnStyle={{ top: '18px' }}
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
                                 <div className='max-w-[250px] mx-auto'>
                                    <Slider images={currentToEdit.studentsData} />
                                 </div>

                                 <InputSearch
                                    labelClassname='hidden'
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
                                       match: currentToEdit.assiginedStudents
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
                        {currentField.name === 'contact' &&
                           <div>
                              <div className='flex items-center mb-5'>
                                 <p className='font-medium mr-4 min-w-[60px]'> Email Id </p>
                                 <InputField
                                    labelClassname='hidden'
                                    placeholder='Email Id'
                                    inputContainerClassName='text-sm pt-3 pb-3 px-5 bg-primary-50 border-0'
                                    inputClassName='bg-transparent'
                                    parentClassName='flex-1 ' type='text'
                                    value={currentToEdit.email}
                                    onChange={e => setCurrentToEdit({ ...currentToEdit, email: e.target.value })} />
                              </div>
                              <div className='flex items-center'>
                                 <p className='font-medium mr-4 min-w-[60px]'> Phone </p>
                                 <InputField
                                    labelClassname='hidden'
                                    placeholder='Phone'
                                    inputContainerClassName='text-sm pt-3 pb-3 px-5 bg-primary-50 border-0'
                                    inputClassName='bg-transparent'
                                    parentClassName='flex-1 ' type='text'
                                    value={currentToEdit.phone}
                                    onChange={e => setCurrentToEdit({ ...currentToEdit, phone: e.target.value })} />
                              </div>
                           </div>
                        }
                        {currentField.name === 'birthYear' &&
                           <div>
                              <div className='flex items-center mb-5 pt-6'>
                                 {/* <p className='font-medium mr-4 min-w-[60px]'>  </p> */}
                                 <InputField
                                    labelClassname='hidden'
                                    placeholder='Enter your birth year'
                                    inputContainerClassName='text-sm pt-3 pb-3 px-5 bg-primary-50 border-0'
                                    inputClassName='bg-transparent'
                                    parentClassName='flex-1 ' type='text'
                                    value={currentToEdit.birthyear}
                                    onChange={e => setCurrentToEdit({ ...currentToEdit, birthyear: e.target.value })} />
                              </div>
                           </div>
                        }
                        {currentField.name === 'industry' &&
                           <div>
                              <div className='flex items-center mb-5 pt-2'>
                                 <InputSelect
                                    value={currentToEdit.industry}
                                    onChange={val =>
                                       setCurrentToEdit({ ...currentToEdit, industry: val })
                                    }
                                    optionData={['Medical', 'Law', 'Teaching']}
                                    radio={true}
                                    inputContainerClassName="pt-3 pb-3 border bg-white"
                                    placeholder="Enter your Industry"
                                    parentClassName="w-full mr-4"
                                    type="select"
                                 />
                              </div>
                           </div>
                        }
                        {currentField.name === 'address' &&
                           <div>
                              <div className='flex items-center mb-5 pt-6'>
                                 {/* <p className='font-medium mr-4 min-w-[60px]'>  </p> */}
                                 <InputField
                                    labelClassname='hidden'
                                    placeholder='Enter your Residential Address'
                                    inputContainerClassName='text-sm pt-3 pb-3 px-5 bg-primary-50 border-0'
                                    inputClassName='bg-transparent'
                                    parentClassName='flex-1 ' type='text'
                                    value={currentToEdit.residentialAddress}
                                    onChange={e => setCurrentToEdit({ ...currentToEdit, residentialAddress: e.target.value })} />
                              </div>
                           </div>
                        }
                        {currentField.name === 'timeZone' &&
                           <div>
                              <div className='flex items-center mb-5 pt-3 pb-5'>
                                 <InputSelect
                                    value={currentToEdit.timeZone}
                                    onChange={val =>
                                       setCurrentToEdit({ ...currentToEdit, timeZone: val })
                                    }
                                    optionData={['IST', 'EST', 'PTD']}
                                    radio={true}
                                    inputContainerClassName="pt-3 pb-3 border bg-white"
                                    placeholder="Time Zone"
                                    parentClassName="w-full mr-4"
                                    type="select"
                                 />
                              </div>
                           </div>
                        }
                        {currentField.name === 'notes' &&
                           <div>
                              <div className='flex items-center mb-5 pt-6'>
                                 {/* <p className='font-medium mr-4 min-w-[60px]'>  </p> */}
                                 <InputField
                                    labelClassname='hidden'
                                    placeholder='Enter your notes'
                                    inputContainerClassName='text-sm pt-3 pb-3 px-5 bg-primary-50 border-0'
                                    inputClassName='bg-transparent'
                                    parentClassName='flex-1 ' type='text'
                                    value={currentToEdit.notes}
                                    onChange={e => setCurrentToEdit({ ...currentToEdit, notes: e.target.value })} />
                              </div>
                           </div>
                        }
                        {currentField.name === 'subscribeType' &&
                           <div>
                              <div className='flex items-center mb-5 pt-1 pb-5'>
                                 <InputSelect
                                    value={currentToEdit.subscribeType}
                                    onChange={val =>
                                       setCurrentToEdit({ ...currentToEdit, subscribeType: val })
                                    }
                                    optionData={['Unsubscribed', '3 Months Trial', '6 Months Trial', 'Subscribed']}
                                    radio={true}
                                    inputContainerClassName="pt-3 pb-3 border bg-white"
                                    placeholder="Subscription Type"
                                    parentClassName="w-full mr-4"
                                    type="select"
                                 />
                              </div>
                           </div>
                        }
                        {currentField.name === 'service' &&
                           <div>
                              <div className='flex items-center mb-5 pt-1 pb-5'>
                                 <InputSelect
                                    value={currentToEdit.service.length === 0 ? '' : currentToEdit.service[0]}
                                    checkbox={{
                                       visible: true,
                                       name: 'services',
                                       match: currentToEdit.service
                                    }}
                                    optionData={settings.serviceSpecialisation}
                                    inputContainerClassName="pt-3 pb-3 border bg-white"
                                    placeholder="Service"
                                    parentClassName="w-full mr-4"
                                    type="select"
                                    onChange={val =>
                                       handleServiceChange(val)
                                       // setCurrentToEdit({ ...currentToEdit, service: val })
                                    }
                                    onOptionClick={(item) => {
                                       // setStudent(item.value);
                                       console.log(item);
                                       // handleStudentsChange(item)
                                       // setCurrentToEdit({ ...currentToEdit, students: [... item._id] });
                                    }}
                                 />

                              </div>
                           </div>
                        }
                        {currentField.name === 'subjects' &&
                           <div>
                              <div className='flex items-center mb-5 pt-1 pb-5'>
                                 <InputSelect
                                    value={currentToEdit.subjects.length === 0 ? '' : currentToEdit.subjects[0]}
                                    checkbox={{
                                       visible: true,
                                       name: 'subjects',
                                       match: currentToEdit.subjects
                                    }}
                                    optionData={['Maths', 'English']}
                                    inputContainerClassName="pt-3 pb-3 border bg-white"
                                    placeholder="Subjects"
                                    parentClassName="w-full mr-4"
                                    type="select"
                                    onChange={val =>
                                       handleSubjectChange(val)
                                       // setCurrentToEdit({ ...currentToEdit, service: val })
                                    }
                                    onOptionClick={(item) => {
                                       // setStudent(item.value);
                                       console.log(item);
                                       // handleStudentsChange(item)
                                       // setCurrentToEdit({ ...currentToEdit, students: [... item._id] });
                                    }}
                                 />

                              </div>
                           </div>
                        }
                        {currentField.name === 'leadStatus' &&
                           <div>
                              <div className='flex items-center mb-5 pt-2'>
                                 <InputSelect
                                    value={currentToEdit.leadStatus}
                                    onChange={val =>
                                       setCurrentToEdit({ ...currentToEdit, leadStatus: val })
                                    }
                                    optionData={settings.leadStatus}
                                    radio={true}
                                    inputContainerClassName="pt-3 pb-3 border bg-white"
                                    placeholder="Lead Status"
                                    parentClassName="w-full mr-4"
                                    type="select"
                                 />
                              </div>
                           </div>
                        }
                        {currentField.name === 'accomodations' &&
                           <div>
                              <div className='flex items-center mb-5 pt-6'>
                                 {/* <p className='font-medium mr-4 min-w-[60px]'>  </p> */}
                                 <InputField
                                    labelClassname='hidden'
                                    placeholder='Accomodations'
                                    inputContainerClassName='text-sm pt-3 pb-3 px-5 bg-primary-50 border-0'
                                    inputClassName='bg-transparent'
                                    parentClassName='flex-1 ' type='text'
                                    value={currentToEdit.accomodations}
                                    onChange={e => setCurrentToEdit({ ...currentToEdit, accomodations: e.target.value })} />
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
