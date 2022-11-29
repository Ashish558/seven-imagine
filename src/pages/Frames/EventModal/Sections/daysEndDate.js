import React from 'react'
import Checkbox from '../../../../components/Checkbox/Checkbox';
import InputField from '../../../../components/InputField/inputField';


export default function DaysEndDate({ days, setDays, data, setData }) {

   const handleDayChange = id => {
      let tempdays = days.map(day => {
         return day.id === id
            ? { ...day, checked: !day.checked }
            : { ...day };
      });
      setDays(tempdays);
   };

   return (
      <div className="flex mb-14">
         <div className="mr-8">
            <p className="font-medium text-primary-60 mb-1">
               Repeat every week on
            </p>
            <div className="flex">
               {days.map((day, idx) => {
                  return (
                     <Checkbox
                        key={idx}
                        id={day.id}
                        body={day.text}
                        bodyClassName={`font-medium flex ${day.checked ? ' bg-primary text-white' : 'bg-lightWhite'} mr-1.4 justify-center items-center text-lg w-56 h-56 rounded-10`}
                        checked={day.checked}
                        onChange={handleDayChange}
                     />
                  );
               })}
            </div>
         </div>
         <InputField
            label="End Date"
            labelClassname="ml-3"
            parentClassName="w-full self-end"
            type="date"
            inputContainerClassName="bg-lightWhite border-0 font-medium pr-3 pt-4 pb-4"
            inputClassName="bg-transparent appearance-none font-medium"
            value={data.endDate}
            onChange={(e) =>
               setData({
                  ...data,
                  endDate: e.target.value,
               })
            }
         />
      </div>
   )
}
