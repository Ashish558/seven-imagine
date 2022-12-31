import React, { useEffect, useState } from 'react'
import { useLazyGetSingleSessionQuery } from '../../../app/services/session'
import ArrowIcon from '../../../assets/Dashboard/arrow.svg'
import { getFormattedDate } from '../../../utils/utils'

export default function SingleLedger({ _id, invoiceId, sessionId, title, Date, amountPaid, balanceChange, newBalance, isOpen, toggleOpen }) {


   const [tutorName, setTutorName] = useState('')
   const [studentName, setStudentName] = useState('')
   const [sessionDetails, setSessionDetails] = useState({})
   const [fetchSession, fetchSessionResponse] = useLazyGetSingleSessionQuery()

   useEffect(() => {
      let names = title.split('<>')
      if (names.length > 1) {
         setTutorName(names[0])
         setStudentName(names[1])
      }
   }, [])

   useEffect(() => {
      if (!sessionId) return
      fetchSession(sessionId)
         .then(res => {
            const { start, end } = res.data.data.session.time
            const timeStr = `${start.time} ${start.timeType} - ${end.time} ${end.timeType} `
            setSessionDetails({ ...res.data.data.session, timeStr });
         })
   }, [])
   const { service, total_hours, timeStr, sessionNotes } = sessionDetails

   return (
      <>
         <div className='text-center py-[16px] px-3'>
            {`${_id.slice(-10)}`}
         </div>
         <div className='text-center  py-[16px] px-3'>
            {title}
         </div>
         <div className='text-center  py-[16px] px-3'>
            {getFormattedDate(Date)}
         </div>
         <div className='text-center  py-[16px] px-3'>
            $ {amountPaid}
         </div>
         <div className='text-center  py-[16px] px-3'>
            $ {balanceChange}
         </div>
         <div className='text-left flex justify-center items-center py-[16px] px-3'>
            $ {newBalance}
            <img src={ArrowIcon}
               onClick={() => toggleOpen(_id)}
               className={`ml-[41px] inline-block ease-out duration-100 ${isOpen ? 'rotate-180' : ''}`} />
         </div>

         {isOpen &&
            <>
               {/* <div></div> */}
               <div className={`col-span-6 bg-primaryWhite-400 py-4  ease-out duration-100 ${isOpen} `}>
                  <div className='inline-grid grid-cols-6 px-[200px] grid-flow'>
                     {/* <div className='flex items-center'> */}
                     <div className='font-bold mx-1 py-6' > Student </div>
                     <div className='py-6 opacity-80'> {studentName !== '' ? studentName : '-'} </div>
                     {/* </div> */}
                     {/* <div className='flex items-center'> */}
                     <div className='font-bold mx-1 py-6'> Tutor </div>
                     <div className='py-6 opacity-80'> {tutorName !== '' ? tutorName : '-'} </div>
                     {/* </div> */}
                     {/* <div className='flex items-center'>   */}
                     <div className='font-bold mx-1 py-6'> Service </div>
                     <div className='py-6 opacity-80'> {service ? service : '-'} </div>
                     {/* </div> */}
                     {/* <div className='py-6'> Student </div> */}
                     <div className='font-bold mx-1 py-6' > Session Duration </div>
                     <div className='py-6 opacity-80'>
                        {total_hours ? `${total_hours} ${total_hours === 1 ? 'hour' : 'hours'}` : '-'}
                     </div>

                     <div className='font-bold mx-1 py-6' > Time </div>
                     <div className='py-6 opacity-80'> {timeStr ? timeStr : '-'} </div>

                     <div className='font-bold mx-1 py-6' > Hourly Rate </div>
                     <div className='py-6 opacity-80'> {service ? '-' : '-'} </div>

                     <div className='font-bold mx-1 pt-3' > Session Notes </div>
                     <div className='col-span-5 pl-4 pt-3 opacity-80'>
                        {sessionNotes ? sessionNotes : '-'}
                     </div>

                  </div>
               </div>
            </>
         }
      </>
   )
}
