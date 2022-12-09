import React, { useState } from 'react'
import InputField from '../../components/InputField/inputField';
import InputSelect from "../../components/InputSelect/InputSelect";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import inputStyle from "../Signup/signup.module.css";
import Table from '../../components/Table/Table';
import { tableData } from './tempdata';

const options = ['option1', 'option2']

const tableHeaders = [
   "Client Name",
   "Current Bal.",
   "Invoice ID",
   "Create Date",
   "Status",
   "Paid On",
   "Type",
   "Amt. Due",
   "Bal. Credit(ed)",
];

export default function Invoice() {
   const [invoiceData, setInvoiceData] = useState({
      clientName: '',
      invoiceType: '',
      amountDue: '',
      balance: '',
      description: '',
   })
   return (
      <>

         <div className='lg:ml-pageLeft bg-lightWhite min-h-screen px-8 pt-[30px] pb-[50px]'>
            <div className=''>
               <p className='font-bold text-4xl mb-[30px] text-[#25335A]'> Invoice </p>
               <div className='flex'>
                  <div className='grid grid-cols-2 flex-1 gap-[18px] mr-5'>

                     <InputSelect
                        label="Client Name"
                        labelClassname="ml-2 mb-1.2"
                        optionData={options}
                        placeholder="Select Test Type"
                        inputContainerClassName="bg-white border pt-2.5 pb-2.5"
                        parentClassName="w-full"
                        inputClassName='bg-transparent'
                        type="select"
                        value={invoiceData.clientName}
                        onChange={(val) =>
                           setInvoiceData({
                              ...invoiceData,
                              clientName: val,
                           })
                        }
                     />
                     <InputField
                        parentClassName="relative"
                        label="Amount Due"
                        labelClassname="ml-2 mb-1.2"
                        inputContainerClassName="relative border bg-white border pt-2.5 pb-2.5"
                        inputClassName="ml-10"
                        inputLeftField={
                           <div className={`relative z-5000 flex items-center justify-center ${inputStyle.phoneNumberField}`}
                              style={{ width: '50px' }} >
                              <div className='flex items-center justify-center ' >
                                 <p> $ </p>
                              </div>
                           </div>

                        }
                        value={invoiceData.amountDue}
                        onChange={(e) => setInvoiceData({ ...invoiceData, amountDue: e.target.value, })}
                     />
                     <InputSelect
                        label="Invoice Type"
                        labelClassname="ml-2 mb-1.2"
                        optionData={options}
                        placeholder="Select Test Type"
                        inputContainerClassName="bg-white border pt-2.5 pb-2.5"
                        parentClassName="w-full"
                        inputClassName='bg-transparent'
                        type="select"
                        value={invoiceData.invoiceType}
                        onChange={(val) =>
                           setInvoiceData({
                              ...invoiceData,
                              invoiceType: val,
                           })
                        }
                     />
                     <InputField
                        parentClassName="relative"
                        label="Amount Due"
                        labelClassname="ml-2 mb-1.2"
                        inputContainerClassName="relative border bg-white border pt-2.5 pb-2.5"
                        inputClassName="ml-10"
                        inputLeftField={
                           <div className={`relative z-5000 flex items-center justify-center ${inputStyle.phoneNumberField}`}
                              style={{ width: '50px' }} >
                              <div className='flex items-center justify-center ' >
                                 <p> $ </p>
                              </div>
                           </div>

                        }
                        value={invoiceData.balance}
                        onChange={(e) => setInvoiceData({ ...invoiceData, balance: e.target.value, })}
                     />

                  </div>
                  <div className='flex-1 flex items-start'>
                     <div className='flex flex-1 flex-col self-stretch'>
                        <label className='font-semibold ml-2 mb-1.2'> Invoice Description </label>
                        <textarea
                           placeholder="Session Notes"
                           value={invoiceData.description}
                           onChange={(e) =>
                              setInvoiceData({ ...invoiceData, description: e.target.value })
                           }
                           rows={3}
                           className="resize-none scrollbar-content scrollbar-vertical bg-white flex-1 border w-full outline-0 px-5 py-4 rounded-10"
                        ></textarea>
                     </div>
                     <div className='ml-4 mt-[30px]'>
                        <PrimaryButton children='Create' className='pt-2.5 pb-2.5' />
                     </div>
                  </div>
               </div>
               <div className="mt-10">
                  <Table
                     dataFor='invoice'
                     data={tableData}
                     tableHeaders={tableHeaders}
                     maxPageSize={10}
                  />
               </div>
            </div>
         </div>
      </>
   )
}
