import React from 'react'

export default function DashboardCard({ className, data, header, subHeader }) {


   return (
      <div className={`max-w-[331px] py-[17px] px-[19px] flex flex-1 text-white rounded-20  first:mr-[30px] ${className}`}
      // style={{
      //    filter: 'drop-shadow(0px 6px 24px rgba(75, 189, 148, 0.5))'
      // }} 
      >

         <div className='self-stretch min-w-[100px] h-[100px] text-center bg-white/20 rounded-[15px] flex flex-col justify-center'>
            <p className={`font-bold leading-none ${data.titleClassName ? data.titleClassName : 'text-[48px]' }`}>
               {data.title}
            </p>
            <p className='text-2xl font-bold'>
               {data.subtitle}
            </p>
         </div>

         <div className='px-6'>
            <p className='pt-[13px] font-bold text-[27px]'>
               {header}
            </p>
            <p className='text-lg font-semibold'>
               {subHeader}
            </p>
         </div>

      </div>
   )
}
