import React, { useState } from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from './style.module.css'
import CircleInactive from '../../assets/Slider/circle-inactive.svg'
import CircleActive from '../../assets/Slider/circle-active.svg'

export default function ImageSlider({ images, className, pagination }) {

   const [activeIndex, setActiveIndex] = useState(0)

   // useEffect(() => {

   // }, [])
   return (
      <div className={`${styles.carousel} overflow-hidden`}>
         <div className={`${styles.carousel} ${className ? className : ''}`} >
   
            {images.map((image, idx) => {
               return (
                  <div className={`${styles.item}
                ${idx === activeIndex ? styles.active : idx < activeIndex ? styles.previous : styles.inactive} w-full`} >
                     <img src={image} className='w-full' />
                  </div>
               )
            })}

         </div>
         {
            pagination &&
            <div className={styles.pagination} >
               <div className='flex items-center justify-center'>
                  {[...Array(images.length)].map((x, i) =>
                     <div className='mr-[18px] cursor-pointer' >
                        <img src={i === activeIndex ? CircleActive : CircleInactive} 
                        onClick={()=> setActiveIndex(i) } />
                     </div>
                  )}
               </div>
            </div>
         }
      </div>

   )
}
