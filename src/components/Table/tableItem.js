import React from 'react'
import { useNavigate } from 'react-router-dom'
import ResendConfirmation from '../../assets/assignedTests/resendConfirmation.svg'
import UploadIcon from '../../assets/assignedTests/upload.svg'
import SuccessIcon from '../../assets/assignedTests/success.svg'
import FailIcon from '../../assets/assignedTests/fail.svg'

//can b made dynamic
export default function TableItem({ item, dataFor }) {

   const navigate = useNavigate()
   console.log(item)

   return (
      <>
         {dataFor === 'allUsers' ? (
            <tr className='odd:bg-white shadow-sm shadow-slate-200 even:bg-primaryWhite-300 rounded-2xl leading-10'>
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
         )
            :
            dataFor === 'assignedTests' ? (
               <tr className='odd:bg-white shadow-sm shadow-slate-200 even:bg-primaryWhite-300 rounded-2xl leading-10'>
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
                     <button className='p-2 py-2 rounded-md flex items-center leading-none bg-primary text-white'
                        onClick={() => navigate('/assigned-tests/student/321')}>
                        Test details
                     </button>
                  </td>
                  <td className='font-medium px-1 min-w-14 py-4'>
                     <img src={ResendConfirmation} />
                  </td>
               </tr>

            )
               :
               <tr className='odd:bg-white shadow-sm shadow-slate-200 even:bg-primaryWhite-300 rounded-2xl leading-10'>
                  {Object.keys(item).map((key, i) => (
                     // <li className="travelcompany-input" key={i}>
                     //    <span className="input-label">key: {i} Name: {item[key]}</span>
                     // </li>
                     key === 'Accuracy' ?
                        <td className='font-medium px-1  min-w-14 py-4'>
                           <div className='flex items-center justify-center'>
                              <img src={item[key] > 80 ? SuccessIcon : FailIcon} className='flex' />
                           </div>
                        </td>
                        :
                        <td className='font-medium px-1  min-w-14 py-4'>
                           {item[key]}
                        </td>
                  ))}
                  {dataFor === 'tests' &&
                     <td className='font-medium px-1 min-w-14 py-4 flex justify-center items-center'>
                        <button className='flex items-center'>
                           <span className='inline-block mr-3 text-textBlue'>
                              Upload Answer
                           </span>
                           <img src={UploadIcon} />
                        </button>

                     </td>
                  }
               </tr>
         }

      </>

   )
}
