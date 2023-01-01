import React, { useEffect, useState } from "react";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import SecondaryButton from "../../../components/Buttons/SecondaryButton";
import InputField from "../../../components/InputField/inputField";
import InputSelect from "../../../components/InputSelect/InputSelect";
import styles from "../EventModal/style.module.css";

const grades = ["A", "B", "C"];

export default function SelectServices({
   setFrames,
   persona,
   setcurrentStep,
   services,
   setServices,
   setOtherDetails,
   otherDetails,
}) {
   const handleCheckboxChange = (text, arr, setValue) => {
      const temp = arr.map((topic) => {
         return topic.text === text
            ? { ...topic, checked: !topic.checked }
            : { ...topic };
      });
      setValue(temp);
   };

   const handleSubmit = () => {
      if (persona === "parent") {
         setFrames((prev) => {
            return { ...prev, services: false, userDetails: true };
         });
      } else {
         setFrames((prev) => {
            return { ...prev, services: false, questions: true };
         });
      }
   };

   useEffect(() => {
      if (persona === "parent") {
         setcurrentStep(3);
      } else {
         setcurrentStep(4);
      }
   }, []);

   const handleBack = () => {
      if (persona === "parent") {
         setFrames((prev) => {
            return { ...prev, services: false, selectPersona: true };
         });
      } else {
         setFrames((prev) => {
            return { ...prev, services: false, userDetails: true };
         });
      }
   };

   return (
      <div className="mt-5 mb-7">
         <div className="">
            <p className="font-medium mb-7">
               What service are you seeking?
               <span className="text-primaryRed inline-block pl-1">*</span>
            </p>

            <div className="inline-grid grid-cols-2 mb-10">
               {services.map((item, idx) => {
                  return (
                     <div
                        key={idx}
                        className="flex mb-6 mr-6"
                        onClick={() =>
                           handleCheckboxChange(
                              item.text,
                              services,
                              setServices
                           )
                        }
                     >
                        <div className={`${styles.container} `}>
                           <input
                              checked={item.checked}
                              type="checkbox"
                              name="moods"
                              value=""
                           />
                           <span class={styles.checkmark}></span>
                        </div>
                        <p className="font-medium opacity-90 text-sm whitespace-nowrap">
                           {item.text}
                        </p>
                     </div>
                  );
               })}
               <div className="row-span-2">
                  <InputField
                     labelClassname="hidden"
                     placeholder="Tell us more (char limit)"
                     inputContainerClassName="pt-1.8 pb-1.8 px-2.5 border"
                  />
               </div>
            </div>
            <InputField
               label="School Name"
               labelClassname="ml-3"
               placeholder=""
               parentClassName="w-full mr-4 mb-5"
               inputContainerClassName="pt-3 pb-3 border"
               inputClassName="bg-transparent"
               type="text"
               value={otherDetails.schoolName}
               onChange={(e) =>
                  setOtherDetails({
                     ...otherDetails,
                     schoolName: e.target.value,
                  })
               }
            />

            <InputSelect
               value={otherDetails.grade}
               label="Grade"
               labelClassname="ml-3"
               onChange={(val) =>
                  setOtherDetails({ ...otherDetails, grade: val })
               }
               optionData={grades}
               inputContainerClassName="pt-3 pb-3 font-medium pr-3 bg-transparent border"
               inputClassName="appearance-none font-medium"
               placeholder="Select"
               parentClassName="w-full max-w-150"
               type="select"
            />

            <div className="flex items-center mt-12">
               <SecondaryButton
                  children="Back"
                  className="text-lg pt-3 pb-3 text-white mr-6 w-140"
                  onClick={handleBack}
               />
               <PrimaryButton
                  children="Next"
                  className="text-lg pt-3 pb-3 font-semibold text-white mr-6 w-140"
                  onClick={() => handleSubmit()}
               />
            </div>
         </div>
      </div>
   );
}
