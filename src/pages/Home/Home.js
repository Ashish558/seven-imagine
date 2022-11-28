import React from 'react'
import ParentDashboard from '../ParentDashboard/ParentDashboard'
import StudentDashboard from '../StudentDashboard/StudentDashboard'

export default function Home() {

   const persona = sessionStorage.getItem('role')

   return (
      persona === 'parent' ?
         <ParentDashboard />
         :
         persona === 'student' ?
         <StudentDashboard /> 
         :
         <div className='ml-pageLeft bg-lightWhite min-h-screen'>

         </div>
   )
}
