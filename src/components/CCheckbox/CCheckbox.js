import React from 'react'
import styles from './style.module.css'

export default function CCheckbox({ checked, onChange }) {


   return (
      <div className={`${styles.container} `}
         onClick={onChange}>
         <input checked={checked} type='checkbox' name='moods' value='' />
         <span className={styles.checkmark}></span>
      </div>
   )
}
