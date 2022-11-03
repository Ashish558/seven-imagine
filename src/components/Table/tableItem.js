import React from 'react'
import ResendConfirmation from '../../assets/assignedTests/resendConfirmation.svg'

//can b made dynamic
export default function TableItem({ item, dataFor }) {

   return (
      <>
         {dataFor === 'allUsers' && (
            <tr className='odd:bg-white rounded-2xl leading-10'>
               <td className='font-semibold px-1  min-w-14 py-4 text-primaryBlue' >
                  {item.name}
               </td>
               <td className='font-medium px-1  min-w-14 py-4'>
                  {item.userType}
               </td>
               <td className='font-medium px-1  min-w-14 py-4'>
                  {item.email}
               </td>
               <td className='font-medium px-1  min-w-14 py-4'>
                  {item.phone}
               </td>
               <td className='font-medium px-1  min-w-14 py-4'>
                  {item.assignedTutor}
               </td>
               <td className='font-medium px-1  min-w-14 py-4'>
                  {item.leadStatus}
               </td>
               <td className='font-medium px-1  min-w-14 py-4'>
                  {item.tutorStatus}
               </td>
               <td className='font-medium px-1  min-w-14 py-4'>
                  {item.services}
               </td>
            </tr>
         )}

         {dataFor === 'assignedTests' && (
            <tr className='odd:bg-white rounded-2xl leading-10'>
               <td className='font-medium px-1  min-w-14 py-4'>
                  {item.name}
               </td>
               <td className='font-medium px-1  min-w-14 py-4'>
                  {item.assigedOn}
               </td>
               <td className='font-medium px-1  min-w-14 py-4'>
                  {item.testName}
               </td>
               <td className='font-medium px-1  min-w-14 py-4'>
                  {item.duration}
               </td>
               <td className='font-medium px-1  min-w-14 py-4'>
                  {item.status}
               </td>
               <td className='font-medium px-1  min-w-14 py-4'>
                  {item.score}
               </td>
               <td className='font-medium px-1  min-w-14 py-4'>
                  <button className='p-2 py-2 rounded-md flex items-center leading-none bg-primary text-white'>
                     Test details
                  </button>
               </td>
               <td className='font-medium px-1 min-w-14 py-4'>
                  <img src={ResendConfirmation} />
               </td>
            </tr>

         )}
      </>

   )
}
