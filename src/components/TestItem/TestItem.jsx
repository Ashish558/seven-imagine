import React from 'react';
import Stat from "./../../assets/icons/stat.svg"
import Download from "./../../assets/icons/download.png"

export const TestItem = ({ name, status, date, action, marks }) => {
  return (
    <div className='flex py-[8px] mb-2 last:mb-0'>
      <div className='w-1/2'>
        <h2 className='text-[18px] font-medium'>{name}</h2>
        <div className="flex gap-[12px]">
          <h5 className="text-xs opacity-60 font-semibold">{status}</h5>
          <h6 className="text-xs opacity-60 font-medium">{date}</h6>
        </div>
      </div>
      <div className='flex-1 ml-5'>
        <div className="flex gap-[12px]">
          <div className='flex items-center'>
            <div className='w-[24px]'>
            {status !== "Completed" ? <img src={Download} width="34px" alt="download" /> : <img src={Stat} width='34px' alt="Stat" />}
            </div>
          </div>

          {action === 'Start' && <div className="w-full font-bold bg-[#F6A429CC] px-2 py-2 text-center text-white rounded-[6px]">{action}</div>}
          {action === 'Continue' && <div className="w-full font-bold bg-[#32D583] px-2 py-2 text-center text-white rounded-[6px]">{action}</div>}
          {/* {status === 'Completed' && <div className="w-full bg-[#CBC0F5] px-[34px] py-[10px] text-center text-black rounded-[6px]">{marks}</div>} */}
        </div>
      </div>
    </div>
  )
}
