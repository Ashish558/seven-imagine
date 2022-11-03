import React from 'react'

export default function FilterItems({ data, setData }) {


   return (
      <div className='flex items-center'>
         {data.map((data, idx) => {
            return (
               <div key={idx} className='mr-3 bg-primaryLight py-1.5 px-3 rounded-10'>
                  <p className='text-lightGray'>
                     {data}
                  </p>
               </div>
            )
         })}
      </div>
   )
}
