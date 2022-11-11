import React from 'react'

export default function ProfileCard({title, className, body}) {


   return (
      <div className={`rounded-2xl shadow-white py-6 px-8 bg-white ${className ? className : ''}`}>
         <p className='text-primary text-center font-semibold text-21'>
            {title}
         </p>
            {body && body}
      </div>
   )
}
