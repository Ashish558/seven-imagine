import React from 'react'
import styles from './style.module.css'

export default function NumericSteppers({ totalSteps, currentStep }) {


   return (
      <div className='mt-6 mb-120 flex'>
         {[...Array(totalSteps)].map((x, i) =>
            <button key={i} className={`w-9 h-9 border border-primary rounded-full mr-7 font-bold
             ${i + 1 < currentStep ? 'bg-primary text-white' : ''} 
             ${i + 1 === currentStep ? 'before:hidden bg-white border-3 border-primary text-primary' : ''} 
             ${i + 1 > currentStep ? 'opacity-50 before:hidden text-primary bg-white' : ''} 
             transition 
             ${styles.line} `}
            // onClick={() => handleClick(i + 1)}
            >
               {i + 1}
            </button>
         )}
      </div>
   )
}
