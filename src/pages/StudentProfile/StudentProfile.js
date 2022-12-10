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
import SubjectSlider from '../../components/SubjectSlider/SubjectSlider'
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
const subjects1 = [
   {
      marks: 200,
      name: 'Verbal Score',
      bg: '#FEDCC3'
   },
   {
      marks: 300,
      name: 'Maths Score',
      bg: '#DACDFF'
   },
]

const subjects2 = [
   {
      marks: 200,
      name: 'Verbal',
      bg: '#FFCBCB'
   },
   {
      marks: 300,
      name: 'Maths',
      bg: '#A7EAF9'
   },
   {
      marks: 200,
      name: 'Verbal',
      bg: '#FFF38B'
   },
   {
      marks: 300,
      name: 'Maths',
      bg: '#A4FFA7'
   },
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
                        Joseph Brown
                     </p>
                  </div>
                  <div className='flex items-center text-white'>
                     <p className='font-semibold text-sm mr-4'>
                        11th Grade
                     </p>
                     <p className='font-semibold text-sm'>
                        Cambridge High School
                     </p>
                  </div>
               </div>
            </div>

            <div className='lg:grid px-2 grid-cols-12 grid-ros-6 lg:mt-10 gap-5 lg:pl-3'>

               <ProfileCard className='col-span-3 py-6 px-4 mt-3  lg:mt-0'
                  body={
                     <div className='flex justify-center flex-col'>
                        <div className='flex flex-1 flex-col mr-8'>
                           <p className='text-primary text-center font-bold flex lg:text-lg whitespace-nowrap mb-1.5'>
                              Birth year
                           </p>
                           <p className=' font-medium text-sm lg:opacity-60 mb-5'>1984</p>
                        </div>
                        <div className='flex flex-1 flex-col'>
                           <p className='text-primary text-center font-bold flex lg:text-lg mb-2'>
                              Subjects
                           </p>
                           <div className='grid grid-cols-2'>
                              {subjects.map(sub => {
                                 return <p className='mt-1 gap-1 font-medium text-sm lg:mt-2 lg:opacity-60'>{sub} </p>
                              })}
                           </div>
                        </div>
                     </div>
                  } />

               <div className='col-span-2 flex  justify-center items-center  scrollbar-content overflow-x-auto lg:py-5 bg-primary-light px-4 py-5 rounded-15'>
                  <div className='flex flex-col items-center'>
                     <p className='text-lg text-center text-primary font-semibold mb-5'>Associated Parent</p>
                     <div>
                        <img src={ProfileImg} />
                     </div>
                     <p className='font-bold text-21 mb-1'>Phil Brown</p>

                     <div className='flex items-center'>
                        <span className='text-xs font-semibold opacity-60 inline-block mr-1'>
                           View Profile
                        </span>
                        <img src={RightIcon} />
                     </div>

                  </div>

               </div>

               <div className='col-span-4 flex flex-col justify-between'>

                  <ProfileCard className='lg:mt-0 flex-1'
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

                  <ProfileCard className='mt-5 mt-auto flex-1'
                     title='PSAT / P-ACT Scores'
                     titleClassName='text-left'
                     body={
                        <div className='flex mt-5 lg:mt-5'>
                           <p className=' font-semibold  text-lg'>
                              V640 M660 | C1300
                           </p>
                        </div>
                     } />
               </div>

               <ProfileCard
                  className='col-span-3 mt-6 lg:mt-0'

                  body={
                     <div className='overflow-x-auto scrollbar-content'>
                        <div className='mb-6'>
                           <p className='text-primary font-bold text-lg'> Time Zone </p>
                           <p className='mt-1.5  font-medium text-sm whitespace-nowrap'>
                              IST (GMT+5:30)
                           </p>
                        </div>
                        <div className='mb-6'>
                           <p className='text-primary font-bold text-lg'> Subsciption </p>
                           <p className='mt-1.5 font-medium text-sm whitespace-nowrap'>
                              3 Months Trial
                           </p>
                        </div>
                        <div>
                           <p className='text-primary font-bold text-lg'> Accomodations </p>
                           <p className='mt-1.5 font-medium text-sm whitespace-nowrap'>
                              IST (GMT+5:30)
                           </p>
                        </div>
                     </div>
                  }
               />

               <ProfileCard className='mt-53 col-span-3 lg:mt-0'
                  body={
                     <>
                        <p className='text-primary font-bold lg:text-21 text-center mb-10'>Values</p>
                        <div className='flex flex-col row-span-2 overflow-x-auto scrollbar-content'>
                           {values.map(val => {
                              return (
                                 <div className='flex flex-col items-center mb-10'>
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

               <div className='col-span-6'>
                  <ProfileCard title='Offical SAT Scores'
                     titleClassName='text-left'
                     className='mt-53 lg:mt-0'
                     body={
                        <>
                           <SubjectSlider totalMarks={500} outOf={1600}
                              subjects={subjects1} title='Cumilative Score'
                           />
                        </>
                     } />
                  <ProfileCard title='Offical ACT Scores'
                     titleClassName='text-left'
                     className='mt-8 lg:mt-0'
                     body={
                        <>
                           <SubjectSlider totalMarks={26} outOf={36}
                              subjects={subjects2} title='Cumilative Score'
                           />
                        </>
                     } />
               </div>
               <ProfileCard className='mt-53 pb-0 col-span-3 lg:mt-0'
                  body={
                     <>
                        <p className='text-primary font-bold lg:text-21 text-center mb-10'>Interest</p>
                        <div className='flex flex-col overflow-x-auto scrollbar-content'>
                           {interests.map(val => {
                              return (
                                 <div className='flex flex-col items-center mb-10 last:mb-0'>
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


            </div>

         </div>
      </div>
   )
}
