import React from 'react'
import ParentDashboard from '../ParentDashboard/ParentDashboard'

export default function Home() {

   const persona = sessionStorage.getItem('role')

   return (
      persona === 'parent' ?
         <ParentDashboard />
         :
         <div className='ml-pageLeft bg-lightWhite min-h-screen'>

         </div>
   )
}
