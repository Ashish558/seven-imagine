import React from 'react';
import starGold from "./../../assets/icons/star-gold.png";
import starDark from "./../../assets/icons/star-dark.png";
import starLight from "./../../assets/icons/star-light.png";

export const TutorItem = ({tutorName, designation}) => {
  return (
      <div>
         <h2 className='text-[18px] text-black mx-0'>{tutorName}</h2>
         <h6 className='text-[#0671E0] text-[12px] mb-[6px]'>{designation}</h6>
         <div className="flex gap-[8px]">
            <img src={starGold} alt="starGold" className='w-[21px]' />
            <img src={starGold} alt="starGold" className='w-[21px]' />
            <img src={starGold} alt="starGold" className='w-[21px]' />
            <img src={starGold} alt="starGold" className='w-[21px]' />
            <img src={starDark} alt="starDark" className='w-[21px]' />
         </div>

         <hr className='mt-[13px] mb-[17px]' />
      </div>
  )
}
