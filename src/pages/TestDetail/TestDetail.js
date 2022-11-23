import React, { useEffect, useState } from "react";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import BackIcon from "../../assets/assignedTests/back.svg";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
// import styles from './style.module.css'
// import { tableData } from './tempData'
import Table from "../../components/Table/Table";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const subjects = [
   { text: "English", selected: true },
   { text: "Mathematics", selected: false },
   { text: "Reading", selected: false },
   { text: "Science", selected: false },
];

const tableHeaders = [
   "Q No.",
   "Correct Answer",
   "Student Response",
   "Accuracy",
   "Concept",
   "Strategy",
   "Time",
   "Solution",
];

export default function TestDetail() {
   const [testData, setTestData] = useState([]);
   const navigate = useNavigate();

   // console.log(window.location.pathname.split("/")[2]);

   axios
      .get(
         `https://sevenimagine.herokuapp.com/api/test/${window.location.pathname.split("/")[2]
         }`
      )
      .then((res) => {
         setTestData(res.data.data.test);
      });

   // console.log(testData);

   return (
      <div className="ml-pageLeft bg-lightWhite min-h-screen">
         <div className="py-14 px-5">
            <div className="px-0">
               <div className="">
                  <SecondaryButton
                     className="flex items-center pl-2 pr-5 py-2.5"
                     onClick={() => navigate("/all-tests")}
                     children={
                        <>
                           <img src={BackIcon} className="mr-2" />
                           <span>Back</span>
                        </>
                     }
                  />
                  <p className="mt-6 text-textPrimaryDark text-4xl font-bold">
                     {testData.testName}
                  </p>

                  <div className="grid max-w-840 gap-y-2 mt-2">
                     <div>
                        <p className="inline-block w-138 font-semibold opacity-60">
                           {" "}
                           Created on
                        </p>
                        <span className="inline-block mr-4">:</span>
                        <p className="inline-block w-138 font-semibold ml-7">
                           {testData.createdAt?.split("T")[0]}
                        </p>
                     </div>
                     <div>
                        <p className="inline-block w-138 font-semibold opacity-60">
                           {" "}
                           Updated on{" "}
                        </p>
                        <span className="inline-block mr-4">:</span>
                        <p className="inline-block w-138 font-semibold ml-7">
                           {" "}
                           {testData.updatedAt?.split("T")[0]}
                        </p>
                     </div>
                     <div>
                        <p className="inline-block w-138 font-semibold opacity-60">
                           {" "}
                           Name{" "}
                        </p>
                        <span className="inline-block mr-4">:</span>
                        <p className="inline-block w-138 font-semibold ml-7">
                           {" "}
                           {testData.testName}
                        </p>
                     </div>
                     <div>
                        <p className="inline-block w-138 font-semibold opacity-60">
                           {" "}
                           Type{" "}
                        </p>
                        <span className="inline-block mr-4">:</span>
                        <p className="inline-block w-138 font-semibold ml-7">
                           {" "}
                           {testData.testType}
                        </p>
                     </div>
                  </div>

                  <div>
                     <p className="text-2xl text-textPrimaryDark my-7 font-bold">
                        Sections
                     </p>
                     <div className="grid max-0 gap-y-1 mt-2">
                        <div className="mb-2">
                           <p className="inline-block w-138 font-semibold opacity-60">
                              {" "}
                              Section
                           </p>
                           <div className="inline-block w-120 font-semibold opacity-60">
                              Time
                           </div>
                           <p className="inline-block w-138 font-semibold opacity-60 text-center">
                              {" "}
                              Total Questions
                           </p>
                        </div>
                        {testData.sections?.map((section) => (
                           <div>
                              <p className="inline-block w-138 font-semibold">
                                 {" "}
                                 {section.name}
                              </p>
                              <div className="inline-block w-120 font-semibold">
                                 {section.time} mins
                              </div>
                              <p className="inline-block w-138 font-semibold text-center">
                                 {" "}
                                 {section.totalQuestions}
                              </p>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               <div className="mt-6 flex justify-between items-end">
                  <div>
                     {subjects.map((item, idx) => {
                        return (
                           <PrimaryButton
                              children={item.text}
                              className={`py-2 px-0 mr-7 font-semibold w-160 ${item.selected
                                    ? ""
                                    : "bg-secondaryLight text-textGray"
                                 }`}
                           />
                        );
                     })}
                  </div>
               </div>

               <div className="mt-4">
                  {/* <Table dataFor='tests' data={testData} tableHeaders={tableHeaders} maxPageSize={10} /> */}
               </div>
            </div>
         </div>
      </div>
   );
}
