import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../style.module.css'

import ProfileCard from '../../../components/ProfileCard/ProfileCard'
import ProfileImg from '../../../assets/images/profile.png'
import EditIcon from '../../../assets/icons/edit.svg'
import MailIcon from '../../../assets/icons/mail.svg'
import WhatsappIcon from '../../../assets/icons/whatsapp.svg'
import EditableText from '../../../components/EditableText/EditableText'
 
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

export default function ParentProfile() {

   const navigate = useNavigate()

   return (
      <div className='lg:ml-pageLeft bg-lightWhite min-h-screen pb-51'>
         <div className='lg:px-5 lg:pt-10'>

            <div className={styles.profileCard}>
               <div className='rounded-t-40 bg-lightWhite lg:bg-transparent flex flex-col items-center relative'>
                  <div className={styles.imgContainer}>
                     <img src={ProfileImg} />
                  </div>
                  <div className='flex items-center mt-67 lg:mt-4'>
                     <p className='text-primary text-center font-bold text-21 lg:text-40 lg:text-white'>
                        Phill Brown
                     </p>
                     <img src={EditIcon} className='ml-4 lg:ml-6' />
                  </div>
               </div>
            </div>

            <div className='lg:inline-grid grid-cols-3 grid-rws-3 lg:mt-10 gap-8 lg:pl-3'>

               <ProfileCard className='mt-53 lg:h-140 lg:order-3 lg:mt-0'
                  title={
                     <EditableText text='Contact'
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

               <ProfileCard className='py-6 lg:h-140 px-4 mt-3 lg:order-4 lg:mt-0'
                  body={
                     <div className='flex justify-center'>
                        <div className='flex flex-1 flex-col mr-8'>
                           <p className='text-primary text-center font-bold flex lg:text-21 whitespace-nowrap'>
                              Birth year
                              <img src={EditIcon} className='ml-4' />
                           </p>
                           <p className='mt-1 font-medium text-sm lg:mt-6 lg:opacity-60'>1984</p>
                        </div>
                        <div className='flex flex-1 flex-col'>
                           <p className='text-primary text-center font-bold flex lg:text-21'>
                              Industry
                              <img src={EditIcon} className='ml-4' />
                           </p>
                           <p className='mt-1 font-medium text-sm lg:mt-6 lg:opacity-60'>Medical</p>
                        </div>
                     </div>
                  } />

               <ProfileCard
                  className='mt-6 lg:h-140 lg:order-5 lg:mt-0'
                  title={
                     <EditableText text='Residential Address'
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
                  className='mt-4 lg:h-140 lg:order-2 lg:mt-0'
                  body={
                     <div className='flex'>
                        <div className='flex-1 lg:mr-12'>
                           <EditableText text='Time Zone' className='lg:text-21 whitespace-nowrap' />
                           <p className='font-medium text-sm mt-2 lg:mt-6 lg:opacity-60'>
                              IST (GMT+5:30)
                           </p>
                        </div>
                        <div className='flex-1'>
                           <p className='text-primary font-bold lg:text-21'>Subscription</p>
                           <p className='text-sm font-medium mt-2 lg:mt-6 lg:opacity-60'>3 Months Trial</p>
                        </div>
                     </div>
                  }
               />
               <ProfileCard
                  className='mb-5 row-span-3 lg:order-1'
                  body={
                     <div className='flex py-49 lg:flex-col scrollbar-content overflow-x-auto lg:py-0'>
                        <p className='hidden lg:block text-21 text-primary font-bold text-center mb-10'>
                           Associated Students
                        </p>
                           {students.map(student => {
                              return (
                                 <div className='flex even:border-r lg:even:border-r-0 flex-col items-center px-10 lg:mb-10'>
                                    <div className={styles.studentImageContainer}>
                                       <img src={student.image} />
                                    </div>
                                    <div className='text-primary font-bold text-lg whitespace-nowrap mt-6 font-inter underline underline-offset-8'
                                    onClick={()=>navigate('/profile/student/12')}>
                                       {student.name}
                                    </div>
                                 </div>
                              )
                           })}
                     </div>
                  }
               />
            </div>

         </div>
      </div>
   )
}
