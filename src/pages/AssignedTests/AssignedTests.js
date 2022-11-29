import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Table from "../../components/Table/Table";
import InputSelect from "../../components/InputSelect/InputSelect";

import AddIcon from "../../assets/icons/add.svg";
import SearchIcon from "../../assets/icons/search.svg";

import { tableData, studentsDataTable } from "./tempData";
import InputField from "../../components/InputField/inputField";
import axios from "axios";
import { BASE_URL } from "../../app/constants/constants";

const optionData = ["1", "2", "3", "4", "5"];
const testData = ["SAT", "ACT"];

const tableHeaders = [
   "Name",
   "Assigned on",
   "Test Name",
   "Duration",
   "Status",
   "Scores",
   "",
   "",
];

const studentTableHeaders = [
   "Test Name",
   "Assigned on",
   "Due Date",
   "Duration",
   "Status",
   "Scores",
   "",
];

export default function AssignedTests() {
   const [filterData, setFilterData] = useState([
      "Student",
      "Parent",
      "Active",
   ]);
   const [studentsData, setStudentsData] = useState(studentsDataTable);
   const [assignTestModalActive, setAssignTestModalActive] = useState(false);
   const [resendModalActive, setResendModalActive] = useState(false);
   const persona = sessionStorage.getItem("role");
   const handleClose = () => setAssignTestModalActive(false);

   const [studentName, setStudentName] = useState("");
   const [testName, setTestName] = useState("");
   const [tutor, setTutor] = useState("");
   const [status, setStatus] = useState("");
   const [id, setId] = useState("");

   const updateStudentName = (val) => setStudentName(val);
   const updateTestName = (val) => setTestName(val);
   const updateTutor = (val) => setTutor(val);
   const updateStatus = (val) => setStatus(val);

   const [modalData, setModalData] = useState({
      name: "",
      limit: "",
      date: "",
      test: "",
   });

   const handleResend = (item) => {
      console.log(item);
      setResendModalActive(true);
   };

   const assignTest = () => {
      // console.log("userId");
      const newTest = new FormData();
      newTest.append("studentId", localStorage.getItem("userId"));
      newTest.append("testId", modalData.test);
      newTest.append("timeLimit", modalData.limit);
      newTest.append("dueDate", modalData.date);

      console.log(modalData.name);

      axios
         .get(`${BASE_URL}api/test?search=tes`)
         .then((res) => console.log(res.data));
   };

   return (
      <>
         <div className="lg:ml-pageLeft bg-lightWhite min-h-screen">
            <div className="py-14 px-5">
               <div className="flex justify-between items-center">
                  <p
                     className="font-bold text-4xl"
                     style={{ color: "#25335A" }}
                  >
                     Assigned Tests
                  </p>
                  {persona === "student" ? (
                     <button
                        className="bg-primaryOrange py-3.5 px-6 flex items-center text-white font-semibold rounded-lg mr-55"
                        // onClick={() => setAssignTestModalActive(true)}
                     >
                        Start Test
                        <img src={AddIcon} className="ml-3" />
                     </button>
                  ) : (
                     <button
                        className="bg-primaryOrange flex items-center text-white font-semibold rounded-lg mr-55"
                        onClick={() => setAssignTestModalActive(true)}
                        style={{ padding: "17px 24px", fontSize: "18px" }}
                     >
                        Assign new test
                        <img src={AddIcon} className="ml-3" />
                     </button>
                  )}
               </div>
               <div className="flex align-center mt-8">
                  <InputField
                     value={studentName}
                     IconRight={SearchIcon}
                     onChange={updateStudentName}
                     optionData={optionData}
                     placeholder="Student Name"
                     inputContainerClassName="bg-white"
                     parentClassName="w-full mr-4"
                     type="text"
                  />
                  <InputField
                     value={testName}
                     IconRight={SearchIcon}
                     onChange={updateTestName}
                     optionData={optionData}
                     placeholder="Test Name"
                     inputContainerClassName="bg-white"
                     parentClassName="w-full mr-4"
                     type="text"
                  />
                  <InputField
                     value={tutor}
                     onChange={updateTutor}
                     IconRight={SearchIcon}
                     parentClassName="w-full mr-4"
                     inputContainerClassName="bg-white"
                     optionData={optionData}
                     placeholder="Tutor Name"
                     type="text"
                  />
                  <InputSelect
                     value={status}
                     onChange={updateStatus}
                     optionData={optionData}
                     placeholder="Completion Status"
                     parentClassName="w-full mr-4"
                     type="select"
                  />
               </div>

               <div className="mt-6">
                  <Table
                     onClick={{ handleResend }}
                     dataFor="assignedTests"
                     data={tableData}
                     tableHeaders={tableHeaders}
                     maxPageSize={10}
                  />
               </div>
            </div>
         </div>
         {assignTestModalActive && (
            <Modal
               title="Assign New Test"
               cancelBtn={true}
               cancelBtnClassName="max-w-140"
               primaryBtn={{
                  text: "Assign",
                  className: "max-w-140",
                  onClick: () => setResendModalActive(true),
               }}
               handleClose={handleClose}
               body={
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 md:gap-x-3 gap-y-2 gap-y-4 mb-5">
                     <div>
                        <InputField
                           label="Student Name"
                           value={modalData.name}
                           onChange={(val) =>
                              setModalData({
                                 ...modalData,
                                 name: val.target.value,
                              })
                           }
                           optionData={optionData}
                           parentClassName="w-full mr-4"
                           labelClassname="ml-2 mb-0.5"
                           inputContainerClassName="px-5 bg-primary-50 border-0"
                           inputClassName="bg-transparent"
                           placeholder="Student Name"
                           type="select"
                        />
                     </div>
                     <div>
                        <InputSelect
                           label="Time Limit"
                           value={modalData.limit}
                           onChange={(val) =>
                              setModalData({
                                 ...modalData,
                                 limit: val,
                              })
                           }
                           optionData={optionData}
                           parentClassName="w-full mr-4"
                           labelClassname="ml-2 mb-0.5"
                           inputContainerClassName="px-5 bg-primary-50 border-0"
                           inputClassName="bg-transparent"
                           placeholder="Select Time Limit"
                           type="select"
                        />
                     </div>
                     <div>
                        <InputField
                           label="Due Date"
                           value={modalData.date}
                           onChange={(val) =>
                              setModalData({
                                 ...modalData,
                                 date: val.target.value,
                              })
                           }
                           parentClassName="w-full mr-4"
                           labelClassname="ml-2 mb-0.5"
                           inputContainerClassName="px-5 bg-primary-50 border-0"
                           inputClassName="bg-transparent"
                           optionData={optionData}
                           placeholder="Date"
                           type="date"
                        />
                     </div>
                     <div>
                        <InputSelect
                           optionData={testData}
                           value={modalData.test}
                           onChange={(val) =>
                              setModalData({
                                 ...modalData,
                                 test: val,
                              })
                           }
                           label="Test"
                           placeholder="Type Test Name"
                           parentClassName="w-full mr-4"
                           labelClassname="ml-2 mb-0.5"
                           inputContainerClassName="px-5 bg-primary-50 border-0"
                           inputClassName="bg-transparent"
                           type="select"
                        />
                     </div>
                  </div>
               }
               classname={"max-w-840 mx-auto"}
            />
         )}
         {resendModalActive && (
            <Modal
               title={
                  <span className="leading-10">
                     Are you sure <br />
                     you want to resend the test ?
                  </span>
               }
               titleClassName="mb-12 leading-10"
               cancelBtn={true}
               cancelBtnClassName="max-w-140"
               primaryBtn={{
                  text: "Assign",
                  className: "max-w-140",
                  onclick: assignTest,
               }}
               handleClose={() => setResendModalActive(false)}
               classname={"max-w-567 mx-auto"}
            />
         )}
      </>
   );
}
