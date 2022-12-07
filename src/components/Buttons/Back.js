import React from 'react'
import { useNavigate } from 'react-router-dom'
import BackIcon from '../../assets/assignedTests/back.svg'
import SecondaryButton from './SecondaryButton'

export default function BackBtn({to}) {

   const navigate = useNavigate()

   return (
      <SecondaryButton
         className='flex items-center pl-3 pr-3 py-2.5'
         onClick={() => navigate(to)}
         children={
            <>
               <img src={BackIcon} className='mr-2' />
               <span>
                  Back
               </span>
            </>
         } />
   )
}
