import React from 'react'
import InputField from '../../../../components/InputField/inputField';
import InputSelect from '../../../../components/InputSelect/InputSelect';
import { convertTime12to24, tConvert } from '../../../../utils/utils';


const timeZones = ["IST"];

export default function DateAndTimeInput({ data, setData }) {


   return (
      <div className="flex mb-6">
         <InputField
            parentClassName="w-full mr-6"
            label="Date"
            labelClassname="ml-3"
            inputContainerClassName="bg-lightWhite border-0"
            inputClassName="bg-transparent appearance-none"
            value={data.date}
            type="date"
            onChange={(e) =>
               setData({ ...data, date: e.target.value })
            }
         />

         <InputField
            label="Time"
            labelClassname="ml-3"
            parentClassName="w-full max-w-120"
            type="time"
            inputContainerClassName="bg-lightWhite border-0 font-medium pr-3"
            inputClassName="bg-transparent appearance-none font-medium"
            value={convertTime12to24(
               `${data.time.start.time} ${data.time.start.timeType}`
            )}
            onChange={(e) =>
               setData({
                  ...data,
                  time: { ...data.time, start: tConvert(e.target.value) }
               })
            }
         />
         <span className="self-end mb-4 mx-4 font-medium">
            -
         </span>
         <InputField
            parentClassName="w-full max-w-120"
            type="time"
            inputContainerClassName="bg-lightWhite border-0 font-medium pr-3"
            inputClassName="bg-transparent appearance-none font-medium"
            value={convertTime12to24(
               `${data.time.end.time} ${data.time.end.timeType}`
            )}
            onChange={(e) => {
               setData({
                  ...data, time: { ...data.time, end: tConvert(e.target.value) },
               });
            }}
         />
         <InputSelect
            value={data.timeZone}
            onChange={(val) =>
               setData({ ...data, timeZone: val })
            }
            optionData={timeZones}
            inputContainerClassName="bg-lightWhite border-0 font-medium pr-3"
            inputClassName="bg-transparent appearance-none font-medium"
            placeholder="Time Zone"
            parentClassName="w-full mr-4 ml-8"
            type="select"
         />
      </div>
   )
}
