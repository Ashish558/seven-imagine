import React from 'react'
import styles from './style.module.css'
import ProfileImg from '../../assets/images/profile.png'
import CameraIcon from '../../assets/profile/camera.svg'
import { useRef } from 'react'

export default function ProfilePhoto({ src, handleChange }) {

   const inputref = useRef()

   return (
      <div className={styles.imgContainer}>
         <img src={src} />
         <input ref={inputref} type="file" name="myImage" className='hidden' accept="image/*" />
         <div className={styles.cameraIcon} onClick={() => inputref.current.click()}
            onChange={e => handleChange(e.target.files[0]) } >
            <img src={CameraIcon} />
         </div>
      </div>
   )
}