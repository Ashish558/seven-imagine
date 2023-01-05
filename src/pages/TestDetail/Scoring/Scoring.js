import React from 'react'

export default function Scoring({ sectionsData }) {

   // console.log('sectionsData', sectionsData);
   const { test, answer, scale } = sectionsData

   const { subjects } = answer
 
   const getScore = (score, idx) => {
      let index = idx
      if(idx > subjects.length -1){
         index = index%subjects.length
      }
      let scale = subjects[index].scoreScale
      return score[scale]
   }

   return (
      <div className='flex flex-col text-center'>
         <div className='flex flex-1 flex-wrap'>
            {subjects.map(sub => {
               return (
                  <div className='px-2 opacity-60 w-[25%] pb-5'>
                     {sub.name}
                  </div>
               )
            })}
            {scale.score.map((score, idx) => {
               return (
                  <div className='px-2 opacity-60 w-[25%] pb-3'>
                     {getScore(score, idx)}
                  </div>
               )
            })}

         </div>

      </div>
   )
}
