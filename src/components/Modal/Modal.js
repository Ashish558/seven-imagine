import React from 'react'
import styles from './modal.module.css'
import CancelIcon from '../../assets/Modal/cancel.svg'

export default function Modal({ title, body, cancelBtn, primaryBtn, handleClose, classname }) {

   return (
      <div className={styles.modalContainer}>

         <div className='w-full p-1'>
            <div
               className={`w-full bg-white p-3 py-5 md:py-9.5 md:px-9.5 rounded-20 relative ${classname ? classname : ''}`}>
               <p className={`font-semibold text-xl text-center mb-4.5 text-textPrimaryDark`}>
                  {title}
               </p>
               {body}
               <div className='flex justify-center'>
                  {
                     cancelBtn &&
                     <button className='bg-secondaryLight rounded-md text-textGray py-4 px-12' onClick={handleClose} >
                        Cancel
                     </button>
                  }
                  {
                     primaryBtn &&
                     <button className='bg-primary rounded-md text-white py-4 px-12 ml-12' >
                        {primaryBtn.text}
                     </button>
                  }
               </div>
               <button className={styles.cancelBtn} >
                  <img  src={CancelIcon} onClick={handleClose} />
               </button>

            </div>
         </div>

         <div className={styles.modalOverlay}></div>
      </div>
   )
}
