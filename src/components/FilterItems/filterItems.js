import React from 'react'
import CrossIcon from '../../assets/icons/cross.svg'
import styles from './style.module.css'

export default function FilterItems({ data, setData }) {


   return (
      <div className='flex items-center'>
         {data.map((data, idx) => {
            return (
               <div key={idx} className={`mr-3 bg-primaryLight py-1.5 px-3 rounded-10 group ${styles.filterItem}`}>
                  <p className='text-lightGray'>
                     {data}
                  </p>
                  <img className={styles.icon} src={CrossIcon} />
               </div>
            )
         })}
      </div>
   )
}
