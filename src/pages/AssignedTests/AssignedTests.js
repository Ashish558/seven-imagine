import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import Table from "../../components/Table/Table";
import InputSelect from "../../components/InputSelect/InputSelect";

import AddIcon from "../../assets/icons/add.svg";
import SearchIcon from "../../assets/icons/search.svg";

import { tempTableData, studentsDataTable } from "./tempData";
import InputField from "../../components/InputField/inputField";
import axios from "axios";
import { BASE_URL } from "../../app/constants/constants";
import { useAssignTestMutation, useLazyGetTestsByNameQuery } from "../../app/services/test";
import { useLazyGetStudentsByNameQuery } from "../../app/services/session";
import InputSearch from "../../components/InputSearch/InputSearch";

const optionData = ["1", "2", "3", "4", "5"];
const timeLimits = [30, 40, 50]
const testData = ["SAT", "ACT"];

const tempTableHeaders = [
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

   const [tableData, setTableData] = useState([])
   const [tableHeaders, setTableHeaders] = useState([])

   const [assignTestModalActive, setAssignTestModalActive] = useState(false);
   const [resendModalActive, setResendModalActive] = useState(false);

   const persona = sessionStorage.getItem("role");

   const handleClose = () => setAssignTestModalActive(false);
   
   const [filterData, setFilterData] = useState({
      studentName: '',
      testName: '',
      tutor: '',
      status: '',
   })

   const [assignTest, assignTestResp] = useAssignTestMutation()

   const [modalData, setModalData] = useState({
      name: "",
      limit: "",
      date: "",
      test: "",
   });

   const [fetchStudents, studentResponse] = useLazyGetStudentsByNameQuery();
   const [students, setStudents] = useState([]);

   const [fetchTests, fetchTestsResp] = useLazyGetTestsByNameQuery()
   const [testsData, setTestsData] = useState([]);

   useEffect(() => {
      if (modalData.name.length > 2) {
         fetchStudents(modalData.name).then((res) => {
            // console.log(res.data.data)
            let tempData = res.data.data.students.map((student) => {
               return {
                  _id: student._id,
                  value: `${student.firstName} ${student.lastName}`,
               };
            });
            setStudents(tempData);
         });
      }
   }, [modalData.name]);

   useEffect(() => {
      if (modalData.test.length > 2) {
         fetchTests(modalData.test).then((res) => {
            let tempData = res.data.data.test.map((test) => {
               return {
                  _id: test._id,
                  value: test.testName,
                  testType: test.testType
               };
            });
            setTestsData(tempData);
         });
      }
   }, [modalData.test]);

   const handleResend = (item) => {
      console.log(item);
      setResendModalActive(true);
   };

   const handleResendTestSubmit = (item) => {
      setResendModalActive(false);
   };

   const handleAssignTestSubmit = () => {
      console.log(modalData)
      const body = {
         studentId: modalData.studentId,
         testId: modalData.testId,
         dueDate: modalData.date,
         timeLimit: modalData.limit,
      }
      assignTest(body)
         .then(res => {
            console.log(res.data.data.assign)
            setAssignTestModalActive(false)
         })

   }

   useEffect(() => {
      setTableData(tempTableData)
      setTableHeaders(tempTableHeaders)
   }, [])

   return (
      <>
         <div className="lg:ml-pageLeft bg-lightWhite min-h-screen">
            <div className="py-14 px-5">
               <div className="flex justify-between items-center">
                  <p className={`font-bold text-4xl text-primary-dark`}
                  // style={{ color: "#25335A" }}
                  >
                     Assigned Tests
                  </p>

                  <button
                     className="bg-primaryOrange flex items-center text-white font-semibold rounded-lg mr-55"
                     onClick={() => setAssignTestModalActive(true)}
                     style={{ padding: "17px 24px", fontSize: "18px" }}
                  >
                     Assign new test
                     <img src={AddIcon} className="ml-3" />
                  </button>

               </div>

               <div className="flex align-center mt-8">
                  <InputField
                     value={filterData.studentName}
                     IconRight={SearchIcon}
                     onChange={e => setFilterData({...filterData, studentName: e.target.value})}
                     optionData={optionData}
                     placeholder="Student Name"
                     inputContainerClassName="bg-white"
                     parentClassName="w-full mr-4"
                     type="text"
                  />
                  <InputField
                     value={filterData.testName}
                     IconRight={SearchIcon}
                     onChange={e => setFilterData({...filterData, testName: e.target.value})}
                     optionData={optionData}
                     placeholder="Test Name"
                     inputContainerClassName="bg-white"
                     parentClassName="w-full mr-4"
                     type="text"
                  />
                  <InputField
                     value={filterData.tutor}
                     onChange={e => setFilterData({...filterData, tutor: e.target.value})}
                     IconRight={SearchIcon}
                     parentClassName="w-full mr-4"
                     inputContainerClassName="bg-white"
                     optionData={optionData}
                     placeholder="Tutor Name"
                     type="text"
                  />
                  <InputSelect
                     value={filterData.status}
                     onChange={val => setFilterData({...filterData, status: val})}
                     optionData={optionData}
                     inputContainerClassName="bg-white"
                     placeholder="Completion Status"
                     parentClassName="w-full mr-4"
                     type="select"
                  />
               </div>

               <div className="mt-6">
                  <Table
                     onClick={{ handleResend }}
                     dataFor='assignedTests'
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
                  onClick: () => handleAssignTestSubmit(),
               }}
               handleClose={handleClose}
               body={
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 md:gap-x-3 gap-y-2 gap-y-4 mb-5">
                     <div>
                        <InputSearch
                           label="Student Name"
                           value={modalData.name}
                           onChange={(val) =>
                              setModalData({
                                 ...modalData,
                                 name: val.target.value,
                              })
                           }
                           optionData={students}
                           onOptionClick={(item) => {
                              setModalData({
                                 ...modalData,
                                 name: item.value,
                                 studentId: item._id
                              })
                           }}
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
                           optionData={timeLimits}
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
                        <InputSearch
                           optionData={testsData}
                           value={modalData.test}
                           onChange={(e) =>
                              setModalData({
                                 ...modalData,
                                 test: e.target.value,
                              })
                           }
                           onOptionClick={(item) => {
                              setModalData({
                                 ...modalData,
                                 test: item.value,
                                 testId: item._id
                              })
                           }}
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
                  onClick: () => handleResendTestSubmit(),
               }}
               handleClose={() => setResendModalActive(false)}
               classname={"max-w-567 mx-auto"}
            />
         )}
      </>
   );
}
