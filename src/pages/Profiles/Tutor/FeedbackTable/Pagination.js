import React from 'react'

export default function Pagination({ currentPage, setCurrentPage, totalPages }) {

   const handleClick = size => setCurrentPage(size)
   
   return (
      <div className='flex justify-center mt-5'>
         {[...Array(totalPages)].map((x, i) =>
            <button key={i} className={`w-[38.12px] h-[38.12px] border border-primary rounded-full mr-7
             ${i + 1 === currentPage ? 'bg-primary text-white' : 'text-primary'}`}
               onClick={()=> handleClick(i+1)}
            >
               {i + 1}
            </button>
         )}

      </div>
   )
}
