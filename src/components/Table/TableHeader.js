import React, { useEffect, useState } from 'react'
import { useLazyGetSettingsQuery } from '../../app/services/session';
import InputSelect from '../InputSelect/InputSelect';

export function TableHeader({ header, dataFor }) {

   const [fetchSettings, settingsResp] = useLazyGetSettingsQuery()
   const [settings, setSettings] = useState({
      leadStatus: []
   })
   
   useEffect(() => {
      fetchSettings()
      .then(res=>{
         setSettings(res.data.data.setting)
      })
   }, [])

   return (
      dataFor === 'assignedTestsStudents' || dataFor === 'invoice' ?
         <th className={`px-2 py-[16px] text-[16px] font-[500] bg-[#7152EB] text-white ${header === 'Full Name' || header === 'Name' ? 'text-left pl-7' : ''}
      `}
         > {header}
         </th>
         : dataFor === 'allUsers' && header === 'Lead Status' ?
            <>
               <InputSelect value='Lead Status' optionData={settings.leadStatus} inputContainerClassName='min-w-[100px] pt-3 pb-3 pr-0 pl-0 text-left'
                  optionClassName='font-semibold opacity-60 text-sm'
                  labelClassname='hidden' />
            </> :
            <th className={`px-2 py-3 font-semibold opacity-60 ${header === 'Full Name' || header === 'Name' || header === 'Student Name' ? 'text-left pl-7' : ''} ${dataFor === 'allUsers' ? 'text-sm' : 'text-sm'}
       `}>
               {header}
            </th>
   )
}
