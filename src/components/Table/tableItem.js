import React from 'react'
import { useNavigate } from 'react-router-dom'
import ResendConfirmation from '../../assets/assignedTests/resendConfirmation.svg'
import UploadIcon from '../../assets/assignedTests/upload.svg'
import SuccessIcon from '../../assets/assignedTests/success.svg'
import FailIcon from '../../assets/assignedTests/fail.svg'

//can b made dynamic
export default function TableItem({ item, dataFor, openRemoveTestModal }) {

  const navigate = useNavigate()

  return (
    <>
      {dataFor === 'allUsers' && (
        <tr className='odd:bg-white shadow-sm shadow-slate-200 even:bg-primaryWhite-300 rounded-2xl leading-8'>
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
        <tr className='odd:bg-white shadow-sm shadow-slate-200 even:bg-primaryWhite-300 rounded-2xl leading-8'>
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
      )}

      {dataFor === 'tests' &&
        <tr className='odd:bg-white shadow-sm shadow-slate-200 even:bg-primaryWhite-300 rounded-2xl leading-7'>
          {Object.keys(item).map((key, i) => (
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
          <td className='font-medium px-1 min-w-14 py-4 flex justify-center items-center'>
            <button className='flex items-center'>
              <span className='inline-block mr-3 text-textBlue'>
                Upload Answer
              </span>
              <img src={UploadIcon} />
            </button>

          </td>
        </tr>
      }

      {dataFor === 'allTests' &&
        <tr className='odd:bg-white shadow-sm shadow-slate-200 even:bg-primaryWhite-300 rounded-2xl lead'>
          {Object.keys(item).map((key, i) => (
            <td className='font-medium px-1  min-w-14 py-4'>
              {item[key]}
            </td>
          ))}
          <td className='font-medium px-1 py-4 w-auto text-right'>
            <div className='flex justify-center'>
              <button className='flex bg-primaryOrange items-center text-white py-[5px] px-5 rounded'
              onClick={()=>navigate('/all-tests/456')}>
                View Test
              </button>
            </div>
          </td>
          <td className='font-medium px-1 text-right w-auto py-4'>
            <div className='flex justify-center' onClick={() => openRemoveTestModal(item)} >
              <button className='flex bg-textGray-400 flex items-center items-center text-white py-[5px] px-5 rounded'>
                Remove
              </button>
            </div>
          </td>
        </tr>
      }

    </>

  )
}
