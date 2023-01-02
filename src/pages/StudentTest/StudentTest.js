import React, { useEffect, useState } from "react";
import { useLazyGetAssignedTestQuery, useLazyGetTestDetailsQuery } from "../../app/services/test";
import Modal from "../../components/Modal/Modal";
import Table from "../../components/Table/Table";

import { tempTableData, studentsDataTable } from "../AssignedTests/tempData";

const studentTableHeaders = [
   "Test Name",
   "Assigned on",
   "Due Date",
   "Duration",
   "Status",
   "Scores",
   " ",
];

const parentTestInfo = [
   {
      bg: '#CBC0F5',
      text: 'Not Started'
   },
   {
      bg: '#F6A429',
      text: 'Started'
   },
   {
      bg: '#32D583',
      text: 'Completed'
   },
]
const parentStudents = [
   {
      name: 'Sarina Darper',
      selected: true,
   },
   {
      name: 'Joseph Brown',
      selected: false,
   },
]

export default function StudentTest() {

   const [tableData, setTableData] = useState(studentsDataTable)
   const [tableHeaders, setTableHeaders] = useState(studentTableHeaders)

   const [getTest, getTestResp] = useLazyGetAssignedTestQuery()
   const [getTestDetails, getTestDetailsResp] = useLazyGetTestDetailsQuery()

   const [assignedTestDetails, setassignedTestDetails] = useState([])
   const [testDetails, setTestDetails] = useState([])

   const persona = localStorage.getItem("role");

   useEffect(() => {
      getTest('637663fe90241bf60305bd36')
         .then(res => {
            // console.log(res.data.data.test);
            res.data.data.test.map(test => {
               setassignedTestDetails([
                  ...assignedTestDetails,
                  {
                     testName: 'test',
                     assignedOn: '01-08-2022',
                     dueDate: test.dueDate,
                     duration: test.timeLimit,
                     status: 0,
                     scores: 'V720 M650 | C1370	',
                     _id: test._id,
                     testId: test.testId,
                     isCompleted: test.isCompleted
                  }
               ])
            })

            if (res.data.data.test.length === 0) return
            res.data.data.test.map(test => {
               getTestDetails(test.testId)
                  .then(resp => {
                     console.log(resp.data.data)
                  })
            })
         })
      // getTime('637663fe90241bf60305bd36')
      // .then(res => {
      //    console.log(res);
      // })
   }, [])
   return (
      <>
         <div className="lg:ml-pageLeft bg-lightWhite min-h-screen">
            <div className="py-14 px-5">
               <div className="flex justify-between items-center">
                  <p className={`font-bold text-[80px]`}
                     style={{ color: "#25335A" }} >
                     Tests
                  </p>
                  {persona === "student" ? (
                     <div className="flex flex-col items-center">
                        {parentTestInfo.map(item => {
                           return <div className="flex items-center mb-[20px]">
                              <div className="w-[20px] h-[20px] rounded-full mr-[20px]" style={{ backgroundColor: item.bg }}></div>
                              <div className="font-semibold w-[90px]"> {item.text} </div>
                           </div>
                        })}
                     </div>
                  ) : persona === 'parent' &&
                  <div>
                     <div className="flex items-center">
                        {parentTestInfo.map(item => {
                           return <>
                              <div className="w-[20px] h-[20px] rounded-full mr-[20px]" style={{ backgroundColor: item.bg }}></div>
                              <div className="mr-[20px] font-semibold"> {item.text} </div>
                           </>
                        })}
                     </div>
                     <div className="flex mt-[29px]">
                        {parentStudents.map(student => {
                           return <div key={student.name} className='border w-[230px] py-[7px] flex justify-center' >
                              <p className={`text-lg ${student.selected ? 'font-bold underline underline-offset-3' : ''}`}> {student.name} </p>
                           </div>
                        })}
                     </div>
                  </div>

                  }
               </div>

               <div className="mt-6">
                  <Table
                     dataFor='assignedTestsStudents'
                     data={assignedTestDetails}
                     tableHeaders={tableHeaders}
                     maxPageSize={10}
                  />
               </div>
            </div>
         </div>

      </>
   );
}