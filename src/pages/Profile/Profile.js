import React from 'react'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import styles from './style.module.css'

import ProfileImg from '../../assets/images/profile.png'
import EditIcon from '../../assets/icons/edit.svg'
import MailIcon from '../../assets/icons/mail.svg'
import WhatsappIcon from '../../assets/icons/whatsapp.svg'
import EditableText from '../../components/EditableText/EditableText'

export default function Profile() {


   return (
      <div className='lg:ml-pageLeft bg-lightWhite min-h-screen'>
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

            <ProfileCard className='mt-53' title='Contact'
               body={
                  <div className='flex justify-center mt-5'>
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
            <ProfileCard className='py-6 px-4 mt-3'
               body={
                  <div className='flex justify-center'>
                     <div className='flex flex-1 flex-col mr-8'>
                        <p className='text-primary text-center font-bold flex'>
                           Birth year
                           <img src={EditIcon} className='ml-4' />
                        </p>
                        <p className='mt-1 font-medium text-sm'>1984</p>
                     </div>
                     <div className='flex flex-1 flex-col'>
                        <p className='text-primary text-center font-bold flex'>
                           Industry
                           <img src={EditIcon} className='ml-4' />
                        </p>
                        <p className='mt-1 font-medium text-sm'>Medical</p>
                     </div>
                  </div>
               } />

            <ProfileCard
               className='mt-6'
               title={
                  <EditableText text='Residential Address' className='text-base' />
               }
               body={
                  <div className='overflow-x-auto scrollbar-content pb-7'>
                     <p className='mt-2 font-medium text-sm whitespace-nowrap	'>
                        1315 N State St, Ukiah, California,Postal Code-0101010 1
                     </p>
                  </div>
               }
            />

            <ProfileCard
               className='mt-4'

               body={
                  <div className='flex'>
                     <div className='flex-1'>
                        <EditableText text='Time Zone' />
                        <p className='font-medium text-sm mt-2'>
                           IST (GMT+5:30)
                        </p>
                     </div>
                     <div className='flex-1'>
                        <p className='text-primary font-bold'>Subscription</p>
                        <p className='text-sm font-medium mt-2'>3 Months Trial</p>
                     </div>
                  </div>
               }
            />
            <ProfileCard
               body={
                  <div>
                     
                  </div>
               }
            />

         </div>
      </div>
   )
}
