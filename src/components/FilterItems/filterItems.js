import React from 'react'
import CrossIcon from '../../assets/icons/cross.svg'
import styles from './style.module.css'

export default function FilterItems({ items, setData, onRemoveFilter, className }) {


   return (
      <div className='flex items-center'>
         {items.map((item, idx) => {
            return (
               <div key={idx} className={`mr-3 ${className ? className : ''} bg-primaryLight py-1.5 px-3 rounded-10 group ${styles.filterItem}`}>
                  <p className='text-lightGray'>
                     {item.text}
                  </p>
                  <img className={styles.icon} src={CrossIcon} onClick={()=> onRemoveFilter(item)} />
               </div>
            )
         })}
      </div>
   )
}
