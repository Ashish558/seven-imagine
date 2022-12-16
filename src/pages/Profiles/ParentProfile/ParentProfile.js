import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from '../style.module.css'

import ProfileCard from '../../../components/ProfileCard/ProfileCard'
import ProfileImg from '../../../assets/images/profile.png'
import EditIcon from '../../../assets/icons/edit.svg'
import MailIcon from '../../../assets/icons/mail.svg'
import WhatsappIcon from '../../../assets/icons/whatsapp.svg'
import LeftIcon from '../../../assets/profile/left.svg'
import RightIcon from '../../../assets/profile/right.svg'

import EditableText from '../../../components/EditableText/EditableText'
import { act } from 'react-dom/test-utils'
import ParentEditables from '../../Frames/Editables/ParentEditables/ParentEditables'
import { useLazyGetUserDetailQuery } from '../../../app/services/users'

const students = [
   {
      id: 1,
      name: 'Joseph Brown',
      image: '/images/student-1.png',
   },
   {
      id: 2,
      name: 'Rebecca Brown',
      image: '/images/student-2.png',
   },
]

export default function ParentProfile() {

   const navigate = useNavigate()
   const [editable, setEditable] = useState(false)
   const persona = sessionStorage.getItem('role')
   const [activeIndex, setActiveIndex] = useState(0)
   const [getUserDetail, userDetailResp] = useLazyGetUserDetailQuery()
   const params = useParams()
   const [user, setUser] = useState({})
   const [userDetail, setUserDetail] = useState({})

   const [toEdit, setToEdit] = useState({
      fullName: {
         active: false,
         firstName: '',
         lastName: '',
      },
      timeZone: {
         active: false,
         text: '',
      },
      subscriptionType: {
         active: false,
         text: '',
      },
      birthYear: {
         active: false,
         text: '',
      },
      industry: {
         active: false,
         text: '',
      },
      contact: {
         active: false,
         text: '',
      },
      address: {
         active: false,
         text: '',
      },
   })

   useEffect(() => {
      if (persona === 'admin') {
         setEditable(true)
      }
   }, [])

   const fetchDetails = () => {
      getUserDetail({ id: params.id })
         .then(res => {
            console.log(res.data.data);
            const { firstName, lastName } = res.data.data.user
            setUser(res.data.data.user)
            setToEdit({
               fullName: {
                  ...toEdit.fullName, firstName,lastName,
               },
               timeZone: {
                  ...toEdit.timeZone,
                  text: '',
               },
               subscriptionType: {
                  ...toEdit.subscriptionType,
                  text: '',
               },
               birthYear: {
                  ...toEdit.birthYear,
                  text: '',
               },
               industry: {
                  ...toEdit.industry,
                  text: '',
               },
               contact: {
                  ...toEdit.contact,
                  text: '',
               },
               address: {
                  ...toEdit.address,
                  text: '',
               },
            })
            setUserDetail(res.data.data.userdetails)
         })
   }
   // console.log(user)
   // console.log(userDetail)

   useEffect(() => {
      fetchDetails()
   }, [params.id])

   return (
      <>
         <div className='lg:ml-pageLeft bg-lightWhite min-h-screen pb-51'>
            <div className='lg:px-5 lg:pt-10'>

               <div className={styles.profileCard}>
                  <div className='rounded-t-40 bg-lightWhite lg:bg-transparent flex flex-col items-center relative'>
                     <div className={styles.imgContainer}>
                        <img src={ProfileImg} />
                     </div>
                     <div className='flex items-center mt-67 lg:mt-4'>
                        {/* <p className='text-primary text-center font-bold text-21 lg:text-40 lg:text-white'>
                           {`${user.firstName} ${user.lastName}`}
                        </p>
                        <img src={EditIcon} className='ml-4 lg:ml-6' /> */}
                        <EditableText text={`${user.firstName} ${user.lastName}`}
                           editable={editable}
                           onClick={() => setToEdit({ ...toEdit, fullName: { ...toEdit.fullName, active: true } })}
                           className='text-21 justify-center text-primary text-center font-bold text-21 lg:text-40 lg:text-white'
                           textClassName='flex-1'
                           imgClass='ml-auto' />
                     </div>
                  </div>
               </div>

               <div className='lg:inline-grid lg:grid-cols-13 grid-cols-3 grid-rws-3 lg:mt-10 gap-8 lg:pl-3'>

                  <ProfileCard className='mt-53 lg:h-140 lg:order-3 lg:mt-0 lg:col-span-5'
                     title={
                        <EditableText text='Contact' editable={editable}
                           onClick={() => setToEdit({ ...toEdit, contact: { ...toEdit.contact, active: true } })}
                           className='text-21 justify-center'
                           textClassName='flex-1'
                           imgClass='ml-auto' />
                     }
                     body={
                        <div className='flex justify-center mt-5 lg:mt-1'>
                           <div className='flex flex-col items-center mr-8'>
                              <img src={MailIcon} />
                              <p className='mt-1 font-medium opacity-60 text-xs'>ranasapna78@gmail.com</p>
                           </div>
                           <div className='flex flex-col items-center'>
                              <img src={WhatsappIcon} />
                              <p className='mt-1 font-medium.4 opacity-60 text-xs'>+91 012-3456-789</p>
                           </div>
                        </div>
                     } />

                  <ProfileCard className='py-6 lg:h-140 px-4 mt-3 lg:order-4 lg:mt-0 lg:col-span-5'
                     body={
                        <div className='flex justify-center'>
                           <div className='flex flex-1 flex-col mr-8'>
                              {/* <p className='text-primary text-center font-bold flex lg:text-21 whitespace-nowrap'>
                                 Birth year
                                 <img src={EditIcon} className='ml-4' />
                              </p> */}
                              <EditableText editable={editable}
                                 onClick={() => setToEdit({ ...toEdit, birthYear: { ...toEdit.birthYear, active: true } })}
                                 text='Birth year'
                                 className='text-21 justify-start'
                              />
                              <p className='mt-1 font-medium text-sm lg:mt-6 lg:opacity-60'>1984</p>
                           </div>
                           <div className='flex flex-1 flex-col'>
                              <EditableText editable={editable}
                                 onClick={() => setToEdit({ ...toEdit, industry: { ...toEdit.industry, active: true } })}
                                 text='Industry'
                                 className='text-21 justify-start'
                              />
                              <p className='mt-1 font-medium text-sm lg:mt-6 lg:opacity-60'>Medical</p>
                           </div>
                        </div>
                     } />

                  <ProfileCard
                     className='mt-6 lg:h-140 lg:order-5 lg:mt-0 lg:col-span-5'
                     title={
                        <EditableText editable={editable}
                           onClick={() => setToEdit({ ...toEdit, address: { ...toEdit.address, active: true } })}
                           text='Residential Address'
                           className='text-21 justify-between'
                        />
                     }
                     body={
                        <div className='overflow-x-auto scrollbar-content pb-7'>
                           <p className='mt-2 lg:mt-6 font-medium text-sm whitespace-nowrap	'>
                              1315 N State St, Ukiah, California,Postal Code-0101010 1
                           </p>
                        </div>
                     }
                  />

                  <ProfileCard
                     className='mt-4 lg:h-140 lg:order-2 lg:mt-0 lg:col-span-5'
                     body={
                        <div className='flex'>
                           <div className='flex-1 lg:mr-12'>
                              <EditableText editable={editable}
                                 onClick={() => setToEdit({ ...toEdit, timeZone: { ...toEdit.timeZone, active: true } })}
                                 text='Time Zone'
                                 className='lg:text-21 whitespace-nowrap' />
                              <p className='font-medium text-sm mt-2 lg:mt-6 lg:opacity-60'>
                                 IST (GMT+5:30)
                              </p>
                           </div>
                           <div className='flex-1'>
                              <EditableText editable={editable}
                                 onClick={() => setToEdit({ ...toEdit, subscriptionType: { ...toEdit.subscriptionType, active: true } })}
                                 text='Subscription'
                                 className='text-21 justify-between'
                              />
                              {/* <p className='text-primary font-bold lg:text-21'>Subscription</p> */}
                              <p className='text-sm font-medium mt-2 lg:mt-6 lg:opacity-60'>3 Months Trial</p>
                           </div>
                        </div>
                     }
                  />
                  <ProfileCard
                     className='mb-5 row-span-3 lg:order-1 lg:col-span-3'
                     bgClassName='bg-primary-light'
                     body={
                        <div className='flex py-49 h-full lg:flex-col scrollbar-content overflow-x-auto lg:py-0'>
                           <p className='hidden lg:block text-21 text-primary font-bold text-center mb-10'>
                              Associated Students
                           </p>
                           <div className={`${styles.studentsContainer} min-h-[200px] w-full`}>
                              <img src={LeftIcon}
                                 className={`${styles.sliderIcon} ${styles.sliderLeftIcon}`}
                                 onClick={() => activeIndex !== 0 && setActiveIndex(activeIndex - 1)} />
                              <img src={RightIcon}
                                 className={`${styles.sliderIcon} ${styles.sliderRightIcon}`}
                                 onClick={() => activeIndex < students.length - 1 &&
                                    setActiveIndex(activeIndex + 1)} />

                              {students.map((student, idx) => {
                                 return (
                                    <div className={`${styles.student} ${activeIndex === idx ? styles.activeStudent : idx < activeIndex ? styles.previousStudent : styles.nextStudent} flex flex-col items-center px-10 lg:mb-10`}>
                                       <div className={styles.studentImageContainer}>
                                          <img src={student.image} />
                                       </div>
                                       <div className='mt-6 opacity-60 font-inter text-center '
                                       // onClick={() => navigate('/profile/student/12')}
                                       >
                                          <p className='font-bold text-lg whitespace-nowrap'>
                                             {student.name}
                                          </p>
                                          <span className='underline cursor-pointer underline-offset-4 text-sm'> View Profile </span>
                                       </div>
                                    </div>
                                 )
                              })}
                           </div>
                        </div>
                     }
                  />
               </div>

            </div>
         </div>
         <ParentEditables userId={params.id} toEdit={toEdit} setToEdit={setToEdit} />
      </>
   )
}
