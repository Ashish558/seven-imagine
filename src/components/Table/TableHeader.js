import React from 'react'

export function TableHeader({ header, dataFor }) {


   return (
      dataFor === 'assignedTestsStudents' || dataFor === 'invoice' ?
         <th className={`px-2 py-[23px] text-[16px] font-[500] bg-[#7152EB] text-white ${header === 'Full Name' || header === 'Name' ? 'text-left pl-7' : ''}
      `}
         > {header}
         </th>
         :
         <th className={`px-2 py-3 font-semibold opacity-60
         ${header === 'Full Name' || header === 'Name' || header === 'Student Name'  ? 'text-left pl-7' : ''}
         ${dataFor === 'allUsers' ? 'text-sm' : 'text-sm'}
       `}>
            {header}
         </th>
   )
}
