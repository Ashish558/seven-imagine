import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useLazyGetParentLedgerQuery } from '../../app/services/dashboard'
import PrimaryButton from '../../components/Buttons/PrimaryButton'
import SingleLedger from './SingleLedger/SingleLedger'

const headers = [
   'ID', 'Title', 'Date', 'Amount Paid', 'Balance Change', 'Available Credit'
]
export default function Ledger() {

   const [fetchLedgers, ledgerResp] = useLazyGetParentLedgerQuery()
   const [ledgers, setLedgers] = useState([])
   const [searchParams, setSearchParams] = useSearchParams();
   const navigate = useNavigate()

   // console.log(searchParams.get('status'));

   useEffect(() => {
      fetchLedgers()
         .then(res => {
            let temp = res.data.data.ledger.map(item => ({ ...item, isOpen: false }))
            setLedgers(temp)
         })
   }, [])

   useEffect(() => {
      if (searchParams.get('status')) {
         if (searchParams.get('status') === 'paid') {
            alert('Payment Successful')
            navigate('/ledger')
            // searchParams.delete('status')
            // searchParams.delete('parentId')
         } else {
            alert('Payment not successful')
            navigate('/ledger')
            // searchParams.delete('status')
            // searchParams.delete('parentId')
         }
      }
   }, [])

   const toggleOpen = _id => {
      let temp = ledgers.map(item => {
         return item._id === _id ? { ...item, isOpen: !item.isOpen } : { ...item }
      })
      setLedgers(temp)
   }

   return (
      <div className='lg:ml-pageLeft bg-lightWhite min-h-screen pb-51'>
         <div className='lg:px-5 lg:pt-10'>

            <div className="flex justify-between items-center">
               <p className="font-bold text-4xl text-primary-dark">
                  Ledger
               </p>
               <PrimaryButton children='Pay Now:  $ 2600' />
            </div>

            <div className='grid grid-cols-6 mt-[43px]'>
               {headers.map(head => {
                  return <div className='bg-primary py-[22px] text-white text-center px-4'> <p> {head} </p> </div>
               })}
               {
                  ledgers.map(ledger => {
                     return <SingleLedger key={ledger._id} {...ledger} toggleOpen={toggleOpen} />
                  })
               }
            </div>

         </div>
      </div>
   )
}
