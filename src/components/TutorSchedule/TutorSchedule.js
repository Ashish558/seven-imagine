import React from 'react'

export default function TutorSchedule({ header, studentName, date, time, timeZone }) {


   return (
      <div className='flex justify-between bg-[#D9D9D9]/20 rounded-[15px] mb-6 py-[30px] px-[43px]'>

         <div className='flex flex-col'>
            <p className='text-primary text-2xl font-bold mb-4'> {header} </p>
            <p> With {studentName} </p>
         </div>
         <div className='flex flex-col justify-center'>
            <p className='text-sm font-semibold mb-7'> {date} </p>
            <p className='text-sm font-semibold'> {time} {timeZone} </p>
         </div>
         <div className='flex flex-col justify-center'>
            <button className='bg-[#DFDFDF]  font-semibold text-sm rounded-[6px] px-4 py-[10px] text-black mb-[7px]'>
               Edit Session
            </button>
            <button className='bg-primaryOrange font-semibold text-sm rounded-[6px] px-4 py-[10px] text-white'>
            Meeting Link
            </button>
         </div>

      </div>
   )
}
