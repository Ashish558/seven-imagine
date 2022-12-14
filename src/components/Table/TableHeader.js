import React from 'react'

export function TableHeader({ header }) {


   return (
      <th className={`px-2 py-3 font-semibold opacity-60
       ${header === 'Full Name' || header === 'Name' ? 'text-left pl-7' : ''}
       `}
      > {header} </th>
   )
}
