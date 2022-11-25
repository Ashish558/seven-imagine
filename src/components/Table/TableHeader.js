import React from 'react'

export function TableHeader({ header, dataFor }) {


   return (
      dataFor === 'assignedTestsStudents' ?
         <th className={`px-2 py-3 font-semibold opacity-60 bg-primaryDark text-white ${header === 'Full Name' || header === 'Name' ? 'text-left pl-7' : ''}
      `}
         > {header}
         </th>
         :
         <th className={`px-2 py-3 font-semibold opacity-60 ${header === 'Full Name' || header === 'Name' ? 'text-left pl-7' : ''}
       `}>
            {header}
         </th>
   )
}
