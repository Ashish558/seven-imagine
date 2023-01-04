import React, { useEffect, useState } from "react";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import BackIcon from "../../assets/assignedTests/back.svg";
import AddIcon from "../../assets/icons/add.svg";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
// import styles from './style.module.css'
// import { tableData } from './tempData'
import Table from "../../components/Table/Table";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../app/constants/constants";
import { useLazyGetSectionsQuery } from "../../app/services/test";
import AllTestDetail from "../../components/AllTestDetail/AllTestDetail";

const subjects = [
   { text: "English", selected: true },
   { text: "Mathematics", selected: false },
   { text: "Reading", selected: false },
   { text: "Science", selected: false },
];

// const tableHeaders = [
//    "Q No.",
//    "Correct Answer",
//    "Student Response",
//    "Accuracy",
//    "Concept",
//    "Strategy",
//    "Time",
//    "Solution",
// ];
const tableHeaders = [
   "Q No.",
   "Answer",
   "Concept",
   "Strategy",
   ""
];

export default function TestDetail() {
   const [testData, setTestData] = useState([]);
   const [sections, setSections] = useState([])
   const navigate = useNavigate();

   const { id } = useParams()
   // console.log(window.location.pathname.split("/")[2]);
   const [getSections, getSectionsResp] = useLazyGetSectionsQuery()

   useEffect(() => {
      axios.get(`${BASE_URL}api/test/${id}`)
         .then((res) => {
            console.log(res.data.data);
            setTestData(res.data.data.test);
         });
      getSections({ id })
         .then(res => {
            console.log(res.data);
         })
   }, [])

   console.log(testData);

   return (
      <div className="ml-pageLeft bg-lightWhite min-h-screen">
         <div className="py-14 px-5 flex">
            <div className="px-0 flex-1 pr-2">
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

                  <AllTestDetail testData={testData} />

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


               <div>

               </div>


            </div>

            <div className="flex-1 pl-2">
               <p className="text-2xl text-textPrimaryDark my-7 font-bold"> Questions by Section </p>
               <div className="mt-6 flex justify-between items-end">
                  <div>
                     {subjects.map((item, idx) => {
                        return (
                           <PrimaryButton
                              children={item.text}
                              className={`py-2.5 px-0 text-xs mr-4 font-semibold w-[120px] ${item.selected
                                 ? ""
                                 : "bg-secondaryLight text-textGray"
                                 }`}
                           />
                        );
                     })}
                  </div>
               </div>

               <div className="flex justify-between mt-7">
                  <PrimaryButton
                     children={<div className="flex items-center justify-center">
                        Add Pdf
                        <img src={AddIcon} className='w-6 ml-2' /> </div>}
                     className={`py-3.5 pl-6 pr-6 mr-4 font-medium text-textGray" }`}
                  />
                  <PrimaryButton
                     children={<div className="flex items-center justify-center">
                        Add new question
                        <img src={AddIcon} className='w-6 ml-2' /> </div>}
                     className={`py-3.5 pl-6 pr-6 mr-4 font-medium text-textGray" }`}
                  />
               </div>
               <div className="mt-4">
                  {/* <Table dataFor='tests'
                     data={testData}
                     tableHeaders
                     ={tableHeaders} maxPageSize={10} /> */}
               </div>
            </div>
         </div>
      </div>
   );
}
