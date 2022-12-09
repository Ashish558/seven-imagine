import React, { useEffect, useRef, useState } from "react";
import InputField from "../../components/InputField/inputField";
import styles from "./signup.module.css";

import SelectPersona from "../Frames/SelectPersona/selectPersona";
import SelectServices from "../Frames/SelectServices/SelectServices";
import UserDetails from "../Frames/UserDetails/userDetails";
import Questions from "../Frames/Questions/Questions";
import SignupLast from "../Frames/SignupLast/SignupLast";
import SignupSuccessful from "../Frames/SignupSuccessful/SignupSuccessful";

import NumericSteppers from "../../components/NumericSteppers/NumericSteppers";
import CCheckbox from "../../components/CCheckbox/CCheckbox";

import DownArrow from "../../assets/icons/down-chevron.svg";

import selectStyles from "../../components/InputSelect/style.module.css"

import {
   useAddUserDetailsMutation,
   useSignupUserMutation,
} from "../../app/services/auth";
import { servicesSeeking } from "../Frames/SelectServices/data";
import { apQuestions, hearAboutUslist, motivesList } from "./data";
import { getCheckedString } from "../../utils/utils";
import InputSelect from "../../components/InputSelect/InputSelect";
import useOutsideAlerter from "../../useOutsideAlerter";

export default function Signup() {
   const [frames, setFrames] = useState({
      signupActive: true,
      selectPersona: false,
      services: false,
      userDetails: false,
      questions: false,
      signupLast: false,
      signupSuccessful: false,
   });

   const [values, setValues] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subscriptionCode: "",
      checked: false,
      userId: "",
   });

   const [otherDetails, setOtherDetails] = useState({
      schoolName: "",
      grade: "",
      FirstName: "",
      LastName: "",
      Email: "",
      Phone: "",
      aboutScore: "",
   });

   useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
   }, [frames])
   const [signupUser, signupUserResp] = useSignupUserMutation();
   const [addUserDetails, addUserDetailsResp] = useAddUserDetailsMutation();

   const [persona, setPersona] = useState("");
   const [currentStep, setcurrentStep] = useState(1);

   const [services, setServices] = useState(servicesSeeking);
   const [apCourses, setApCourses] = useState(apQuestions);
   const [motive, setMotive] = useState(motivesList);
   const [hearAboutUs, setHearAboutUs] = useState(hearAboutUslist);

   //temparory
   const [redirectLink, setRedirectLink] = useState("");
   const [numberPrefix, setNumberPrefix] = useState('+91')

   const handleClick = () => {
      let reqBody = {
         firstName: values.firstName,
         lastName: values.lastName,
         email: values.email,
      };
      signupUser(reqBody).then((res) => {
         console.log(res.data);
         setRedirectLink(res.data.link);
         setValues({ ...values, userId: res.data.userId });
         setFrames({
            ...frames,
            signupActive: false,
            selectPersona: true,
         });
      });
   };

   const addDetails = () => {
      const reqBody = {
         ...otherDetails,
         serviceSeeking: getCheckedString(services),
         apCourses: getCheckedString(apCourses),
         motive: getCheckedString(motive),
         hearAboutUs: getCheckedString(hearAboutUs),
         subscriptionCode: values.subscriptionCode,
         userType: persona,
      };
      addUserDetails({ userId: values.userId, body: reqBody }).then((res) => {
         console.log(res);
         window.open(redirectLink);
      });
   };


   const [selected, setSelected] = useState(false);
   const selectRef = useRef();
   useOutsideAlerter(selectRef, () => setSelected(false));

   useEffect(() => setSelected(false), [numberPrefix]);


   const props = { persona, setFrames, setcurrentStep };
   const valueProps = { values, setValues };
   const otherDetailsProps = { otherDetails, setOtherDetails };

   return (
      <div className="min-h-screen" id={styles.signUp}>
         <div className="grid grid-cols-2 min-h-screen">
            <div className="bg-primary"></div>
            <div className="flex items-center">
               <div className="w-full px-[120px] py-8">
                  <h1>
                     {frames.signupActive
                        ? "Sign Up"
                        : frames.setPassword
                           ? ""
                           : "Profile Details"}
                  </h1>

                  {currentStep > 1 && (
                     <NumericSteppers
                        totalSteps={6}
                        currentStep={currentStep}
                     />
                  )}

                  {frames.signupActive ? (
                     <>
                        <h6>Sign up with email address</h6>
                        <div className="flex">
                           <InputField
                              placeholder="First Name"
                              parentClassName="mb-6 mr-5"
                              label="First Name"
                              inputContainerClassName='border'
                              labelClassname="ml-2 mb-2"
                              value={values.firstName}
                              onChange={(e) =>
                                 setValues({
                                    ...values,
                                    firstName: e.target.value,
                                 })
                              }
                           />
                           <InputField
                              placeholder="Last Name "
                              parentClassName="mb-6"
                              label="Last Name"
                              labelClassname="ml-2 mb-2"
                              inputContainerClassName='border'
                              value={values.lastName}
                              onChange={(e) =>
                                 setValues({
                                    ...values,
                                    lastName: e.target.value,
                                 })
                              }
                           />
                        </div>

                        <InputField
                           placeholder="email@example.com"
                           parentClassName="mb-6"
                           label="Email Address"
                           inputContainerClassName='border'
                           value={values.email}
                           onChange={(e) =>
                              setValues({
                                 ...values,
                                 email: e.target.value,
                              })
                           }
                           labelClassname="ml-2 mb-2"
                        />
                        <InputField
                           placeholder="Phone Number"
                           parentClassName="mb-6 relative"
                           label="Phone Number (For tutor correspondence)"
                           labelClassname="ml-2 mb-2"
                           inputContainerClassName="relative border"
                           inputClassName="ml-80"
                           inputLeftField={
                              <div ref={selectRef}
                                 className={`${selected && "relative z-5000"} ${styles.phoneNumberField} `}
                                 onClick={() => setSelected(true)}
                              >
                                 <div
                                    className={`py-[16px] w-full px-2 pl-3 flex justify-center items-center rounded-10 relative cursor-pointer z-50`}
                                 >
                                    {
                                       <img
                                          src={DownArrow}
                                          className={selectStyles.downArrow}
                                          style={{right: '16px'}}
                                          alt="down-arrow"
                                          onClick={() => setSelected(!selected)}
                                       />
                                    }
                                    <div className="outline-0 relative font-medium mr-4" name={'nm'}>
                                       {numberPrefix}
                                    </div>
                                    {selected && (
                                       <div className={`scrollbar-content scrollbar-vertical ${selectStyles.options}`} style={{top : '100%' }} >
                                          {['+91', '+1'].map((option, idx) => {
                                             return (
                                                <div
                                                   className="outline-0 border-0 py-2 px-4"
                                                   key={idx}
                                                   onClick={() => setNumberPrefix(option) }
                                                >
                                                   {" "}
                                                   {option}{" "}
                                                </div>
                                             );
                                          })}
                                       </div>
                                    )}
                                 </div>
                              </div>

                           }
                           value={values.phone}
                           onChange={(e) =>
                              setValues({ ...values, phone: e.target.value, })}
                        />

                        <InputField
                           placeholder=""
                           parentClassName="mb-6"
                           label="Please enter the subscription code required to access Seven Square Learning and starting prep."
                           inputContainerClassName='border'
                           value={values.subscriptionCode}
                           onChange={(e) => setValues({ ...values, subscriptionCode: e.target.value })}
                           labelClassname="ml-2 mb-[11px]"
                        />

                        <div className="flex items-center">
                           <CCheckbox
                              checked={values.checked}
                              onChange={() => setValues({ ...values, checked: !values.checked })}
                           />
                           <label htmlFor="check">
                              I don't have one.
                           </label>
                        </div>

                        <button
                           disabled={
                              values.email === "" ? true : false
                           }
                           className="w-full bg-primaryDark disabled:bg-pink py-3 mt-12 rounded-10 text-white text-21 font-medium"
                           onClick={handleClick}
                        >
                           Submit
                        </button>
                     </>
                  ) : frames.selectPersona ? (
                     <SelectPersona {...props} setPersona={setPersona} />
                  ) : frames.services ? (
                     <SelectServices
                        {...props}
                        services={services}
                        setServices={setServices}
                        {...otherDetailsProps}
                        {...valueProps}
                     />
                  ) : frames.userDetails ? (
                     <UserDetails {...props} {...otherDetailsProps} />
                  ) : frames.questions ? (
                     <Questions
                        {...props}
                        {...otherDetailsProps}
                        apCourses={apCourses}
                        motive={motive}
                        setApCourses={setApCourses}
                        setMotive={setMotive}
                     />
                  ) : frames.signupLast ? (
                     <SignupLast
                        {...props}
                        hearAboutUs={hearAboutUs}
                        setHearAboutUs={setHearAboutUs}
                     />
                  ) : frames.signupSuccessful ? (
                     <SignupSuccessful
                        {...props}
                        addDetails={addDetails}
                     />
                  ) : (
                     ""
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}
