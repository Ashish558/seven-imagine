import React from 'react'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import styles from './style.module.css'
import EditableText from '../../components/EditableText/EditableText'

import ProfileImg from '../../assets/images/profile.png'
import EditIcon from '../../assets/icons/edit.svg'
import MailIcon from '../../assets/icons/mail.svg'
import WhatsappIcon from '../../assets/icons/whatsapp.svg'
import RightIcon from '../../assets/icons/chevron-right.svg'

import ValueOneIcon from '../../assets/images/val-1.svg'
import ValueTwoIcon from '../../assets/images/val-2.svg'
import ValueThreeIcon from '../../assets/images/val-3.svg'

import InterestOneIcon from '../../assets/images/int-1.svg'
import InterestTwoIcon from '../../assets/images/int-2.svg'
import InterestThreeIcon from '../../assets/images/int-3.svg'
const students = [
   {
      id: 1,
      name: 'Joseph Brown',
      image: '/images/student-1.png',
   },
   {
      id: 1,
      name: 'Rebecca Brown',
      image: '/images/student-2.png',
   },
]

const values = [
   {
      icon: ValueOneIcon,
      text: 'Honesty',
      bg: '#A5A3F6'
   },
   {
      icon: ValueTwoIcon,
      text: 'Confidence',
      bg: '#85C396'
   },
   {
      icon: ValueThreeIcon,
      text: 'Brave',
      bg: '#FFA7C1'
   },
]
const interests = [
   {
      icon: InterestOneIcon,
      text: 'Video Game',
      bg: '#F6D0A3'
   },
   {
      icon: InterestTwoIcon,
      text: 'Cooking',
      bg: '#7BEA9A'
   },
   {
      icon: InterestThreeIcon,
      text: 'Yoga',
      bg: '#AADFEB'
   },
]

const subjects = [
   'Biology',
   'Biology',
   'Chemistry',
   'Chemistry',
   'Physics',
   'Physics',
]
export default function StudentProfile() {


   return (
      <div className='lg:ml-pageLeft bg-lightWhite min-h-screen pb-120'>
         <div className='lg:px-5 lg:pt-10'>

            <div className={styles.profileCard}>
               <div className='rounded-t-40 bg-lightWhite lg:bg-transparent flex flex-col items-center relative'>
                  <div className={styles.imgContainer}>
                     <img src={`/images/student-1.png`} />
                  </div>
                  <div className='flex items-center mt-67 lg:mt-4'>
                     <p className='text-primary text-center font-bold text-21 lg:text-40 lg:text-white'>
                        Phill Brown
                     </p>
                  </div>
                  <p className='font-semibold text-sm mt-4 mb-1'>
                     11th Grade
                  </p>
                  <p className='font-semibold text-sm'>
                     Cambridge High School
                  </p>
               </div>
            </div>

            <div className='lg:inline-grid px-2 grid-cols-3 grid-rws-3 lg:mt-10 gap-8 lg:pl-3'>

               <ProfileCard className='mt-53 lg:h-140 lg:order-3 lg:mt-0'
                  title='Contact'
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

               <ProfileCard className='py-6 lg:h-140 px-4 mt-3 lg:order-4 lg:mt-0'
                  body={
                     <div className='flex justify-center flex-col'>
                        <div className='flex flex-1 flex-col mr-8'>
                           <p className='text-primary text-center font-bold flex lg:text-21 whitespace-nowrap mb-2'>
                              Birth year
                           </p>
                           <p className=' font-medium text-sm lg:mt-6 lg:opacity-60 mb-5'>1984</p>
                        </div>
                        <div className='flex flex-1 flex-col'>
                           <p className='text-primary text-center font-bold flex lg:text-21 mb-2'>
                              Subjects
                           </p>
                           <div className='grid grid-cols-2'>
                              {subjects.map(sub => {
                                 return <p className='mt-1 gap-1 font-medium text-sm lg:mt-6 lg:opacity-60'>{sub} </p>
                              })}
                           </div>
                        </div>
                     </div>
                  } />

               <ProfileCard
                  className='mt-6 lg:h-140 lg:order-5 lg:mt-0'
                  title={
                     <EditableText text='PSAT / P-ACT Scores'
                        className='text-base lg:text-21'
                     />
                  }
                  body={
                     <div className='overflow-x-auto scrollbar-content'>
                        <p className='mt-2 lg:mt-6 font-medium text-sm whitespace-nowrap	'>
                           V640 M660 | C1300
                        </p>
                     </div>
                  }
               />

               <ProfileCard
                  className='mt-4 lg:h-140 lg:order-2 lg:mt-0'
                  body={
                     <div className='grid grid-cols-2 justify-center'>
                        <div className='flex flex-col mr-8 mb-5'>
                           <p className='text-primary text-center font-bold flex lg:text-21 whitespace-nowrap'>
                              Birth year
                           </p>
                           <p className='mt-1 font-medium text-sm lg:mt-6 lg:opacity-60'>1984</p>
                        </div>
                        <div className='flex flex-col'>
                           <p className='text-primary text-center font-bold flex lg:text-21'>
                              Industry
                           </p>
                           <p className='mt-1 font-medium text-sm lg:mt-6 lg:opacity-60'>Medical</p>
                        </div>
                        <div>
                           <EditableText text='Accomodations' />
                           <p className='mt-1 font-medium text-sm lg:mt-6 lg:opacity-60'>N/A</p>
                        </div>
                     </div>
                  }
               />

               <div className='flex justify-between items-center  scrollbar-content overflow-x-auto lg:py-0 bg-primary-light px-4 py-5 rounded-15'>
                  <div>
                     <p className='text-lg text-primary font-semibold mb-5'>Associated Parent</p>
                     <p className='font-bold text-21 mb-3'>Phil Brown</p>
                     <button className='bg-white p-2.2 flex items-center rounded'>
                        <span className='text-xs font-semibold text-primary inline-block mr-1'>
                           View Profile
                        </span>
                        <img src={RightIcon} />
                     </button>
                  </div>
                  <div>
                     <img src={ProfileImg} />
                  </div>
               </div>

               <ProfileCard className='mt-53 lg:h-140 lg:order-3 lg:mt-0'
                  body={
                     <>
                        <p className='text-primary font-bold lg:text-21 text-center mb-10'>Values</p>
                        <div className='flex overflow-x-auto scrollbar-content'>
                           {values.map(val => {
                              return (
                                 <div className='flex flex-col items-center mr-12 mb-10'>
                                    <div className='flex h-90 w-90 rounded-full  items-center justify-center mb-3' style={{ backgroundColor: val.bg }}>
                                       <img src={val.icon} />
                                    </div>
                                    <p className='opacity-70 font-semibold text-lg'> {val.text} </p>
                                 </div>
                              )
                           })}
                        </div>
                     </>
                  } />
               <ProfileCard className='mt-53 lg:h-140 lg:order-3 lg:mt-0'
                  body={
                     <>
                        <p className='text-primary font-bold lg:text-21 text-center mb-10'>Interest</p>
                        <div className='flex overflow-x-auto scrollbar-content'>
                           {interests.map(val => {
                              return (
                                 <div className='flex flex-col items-center mr-12 mb-10'>
                                    <div className='flex h-90 w-90 rounded-full  items-center justify-center mb-3' style={{ backgroundColor: val.bg }}>
                                       <img src={val.icon} />
                                    </div>
                                    <p className='opacity-70 font-semibold text-sm whitespace-nowrap'> {val.text} </p>
                                 </div>
                              )
                           })}
                        </div>
                     </>
                  } />

                  <div>
                     score 1
                  </div>
                  <div>
                     score 2
                  </div>
            </div>

         </div>
      </div>
   )
}
