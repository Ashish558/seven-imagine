import React from 'react'
import { useNavigate } from 'react-router-dom'
import ResendConfirmation from '../../assets/assignedTests/resendConfirmation.svg'
import UploadIcon from '../../assets/assignedTests/upload.svg'
import SuccessIcon from '../../assets/assignedTests/success.svg'
import FailIcon from '../../assets/assignedTests/fail.svg'
import YellowIcon from '../../assets/assignedTests/yellow.svg'
import RedIcon from '../../assets/assignedTests/red.svg'
import GreenIcon from '../../assets/assignedTests/green.svg'
import GrayIcon from '../../assets/assignedTests/gray.svg'

//can b made dynamic
export default function TableItem({ item, dataFor, onClick }) {

  const navigate = useNavigate()
  // console.log(onClick)

  const returnStatus = (status) => {
    return status === 0 ?
      <img className='first:mr-2' src={YellowIcon} /> :
      status === 1 ? <img className='first:mr-2' src={RedIcon} /> :
        status === 2 ? <img className='first:mr-2' src={GreenIcon} /> :
          status === 3 ? <img className='first:mr-2' src={GrayIcon} /> : <></>
  }

  return (
    <>
      {dataFor === 'allUsers' && (
        <tr className='odd:bg-white shadow-sm shadow-slate-200 even:bg-primaryWhite-300 rounded-2xl leading-8'>
          <td className='font-semibold px-1  min-w-14 py-4 text-primaryBlue text-left' >
            <span className='inline-block cursor-pointer pl-4' onClick={() => navigate(`/profile/213`)}>
              {item.name}
            </span>
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
          <td className='font-semibold px-1  min-w-14 py-4 text-primaryBlue text-left' >
            <span className='inline-block cursor-pointer pl-4'>
              {item.name}
            </span>
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
            <div className='flex items-center no-wrap justify-center'>
              {/* {item.status[0] && returnStatus(item.status[0])}
            {item.status[1] && returnStatus(item.status[1])} */}
              {returnStatus(item.status[0])}
              {returnStatus(item.status[1])}
            </div>
          </td>
          <td className='font-medium px-1  min-w-14 py-4'>
            {item.score}
          </td>
          <td className='font-medium px-1  min-w-14 py-4'>
            <button className='px-2.5 py-1.8 rounded-md flex items-center leading-none bg-primary text-white'
              onClick={() => navigate('/assigned-tests/student/321')}>
              Test details
            </button>
          </td>
          <td className='font-medium px-1 min-w-14 py-4'>
            <img src={ResendConfirmation} className='cursor-pointer' onClick={() => onClick.handleResend(item)} />
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
          <td className='font-medium px-1 py-4 text-right w-240'>
            <div className='flex justify-end'>
              <button className='flex bg-primaryOrange items-center leading-none text-white py-1.8 px-5 rounded'
                onClick={() => navigate('/all-tests/456')}>
                View Test 
              </button>
            </div>
          </td>
          <td className='font-medium px-1 text-right w-240 py-4'>
            <div className='flex'
              onClick={() => onClick.openRemoveTestModal(item)}
            >
              <button className='flex ml-6 bg-textGray-400 flex items-center items-center leading-none text-white py-1.8 px-5 rounded'>
                Remove
              </button>
            </div>
          </td>
        </tr>
      }

    </>

  )
}
