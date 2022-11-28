import React from 'react'
import styles from './style.module.css'

export default function CCheckbox({ checked, onChange, name }) {


   return (
      <div className={`${styles.container} `}
         onClick={onChange}>
         <input checked={checked} type='checkbox' name={name ? name : 'moods'} value='' />
         <span className={styles.checkmark}></span>
      </div>
   )
}
