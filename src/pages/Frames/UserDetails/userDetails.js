import React, { useEffect, useState } from "react";

import DownArrow from "../../../assets/icons/down-chevron.svg";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import SecondaryButton from "../../../components/Buttons/SecondaryButton";
import InputField from "../../../components/InputField/inputField";
import styles from "../../Signup/signup.module.css";
import { validateOtherDetails } from "../../Signup/utils/util";

export default function UserDetails({
   setFrames,
   persona,
   setcurrentStep,
   otherDetails,
   setOtherDetails,
   detailsError,
   setDetailsError,
   resetDetailsErrors
}) {


   const handleClick = () => {
      const result = validateOtherDetails(otherDetails)
      // console.log(result);
      const promiseState = async state => new Promise(resolve => {
         resolve(resetDetailsErrors())
      })

      promiseState()
         .then(() => {
            if (result.data !== true) {
               setDetailsError(prev => {
                  return {
                     ...prev,
                     [result.data]: result.message
                  }
               })
            } else {
               // return
               if (persona === "parent") {
                  setFrames((prev) => {
                     return { ...prev, userDetails: false, questions: true };
                  });
               } else {
                  setFrames((prev) => {
                     return { ...prev, userDetails: false, services: true };
                  });
               }
            }

         })
   };

   useEffect(() => {
      if (persona === "parent") {
         setcurrentStep(4);
      } else {
         setcurrentStep(3);
      }
   }, []);

   const handleBack = () => {
      if (persona === "parent") {
         setFrames((prev) => {
            return { ...prev, userDetails: false, services: true };
         });
      } else {
         setFrames((prev) => {
            return { ...prev, userDetails: false, selectPersona: true };
         });
      }
   };

   let personaText = persona === "parent" ? "Student" : "Parent";

   return (
      <div className="w-full">
         <div className="flex">
            <InputField
               placeholder="First Name"
               inputContainerClassName='pt-3 pb-3 border'
               parentClassName="mb-6 mr-5"
               required={persona === "student" ? true : false}
               label={`${personaText} First Name`}
               labelClassname="ml-2 mb-2"
               value={otherDetails.FirstName}
               onChange={(e) =>
                  setOtherDetails({
                     ...otherDetails,
                     FirstName: e.target.value,
                  })
               }
               error={detailsError.FirstName}
            />
            <InputField
               placeholder="Last Name"
               parentClassName="mb-6"
               inputContainerClassName='pt-3 pb-3 border'
               label={`${personaText} Last Name`}
               required={persona === "student" ? true : false}
               labelClassname="ml-2 mb-2"
               value={otherDetails.LastName}
               onChange={(e) =>
                  setOtherDetails({
                     ...otherDetails,
                     LastName: e.target.value,
                  })
               }
               error={detailsError.LastName}
            />
         </div>

         <InputField
            placeholder="Email address"
            parentClassName="mb-6"
            label={`${personaText} Email Address`}
            inputContainerClassName='pt-3 pb-3 border'
            required={persona === "student" ? true : false}
            labelClassname="ml-2 mb-2"
            value={otherDetails.Email}
            onChange={(e) =>
               setOtherDetails({ ...otherDetails, Email: e.target.value })
            }
            error={detailsError.Email}
         />
         <InputField
            placeholder="Phone Number"
            parentClassName="mb-6"
            label={`${personaText} Phone Number ${persona !== "parent" ? "(For tutor correspondence)" : ""
               } `}
            labelClassname="ml-2 mb-2"
            inputContainerClassName="pt-3 pb-3 relative border"
            inputClassName="ml-80"
            required={persona === "student" ? true : false}
            inputLeftField={
               <div className={styles.phoneNumberShort}>
                  <div className="flex-1 flex justify-center items-center font-medium">
                     +91
                     <img src={DownArrow} className="w-3 ml-3" />
                  </div>
               </div>
            }
            value={otherDetails.Phone}
            onChange={(e) =>
               setOtherDetails({ ...otherDetails, Phone: e.target.value })
            }
            error={detailsError.Phone}
         />

         <div className="flex items-center mt-120">
            <SecondaryButton
               children="Back"
               className="text-lg pt-3 pb-3 text-white mr-6 w-140"
               onClick={handleBack}
            />
            <PrimaryButton
               children="Next"
               className="text-lg pt-3 pb-3 font-semibold text-white mr-6 w-140"
               onClick={() => handleClick()}
            />
         </div>
      </div>
   );
}
