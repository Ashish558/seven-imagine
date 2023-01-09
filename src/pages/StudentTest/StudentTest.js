import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLazyGetAssignedTestQuery, useLazyGetTestDetailsQuery, useLazyGetTestResponseQuery } from "../../app/services/test";
import { useLazyGetUserDetailQuery } from "../../app/services/users";
import Modal from "../../components/Modal/Modal";
import Table from "../../components/Table/Table";
import { getFormattedDate } from "../../utils/utils";

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
   const [user, setUser] = useState({})
   const [associatedStudents, setAssociatedStudents] = useState([]);
   const [selectedStudent, setSelectedStudent] = useState(null)

   const [getTest, getTestResp] = useLazyGetAssignedTestQuery()
   const [getTestDetails, getTestDetailsResp] = useLazyGetTestDetailsQuery()
   const [getResponse, getResponseRes] = useLazyGetTestResponseQuery()
   const [getUserDetail, userDetailResp] = useLazyGetUserDetailQuery()

   const [assignedTestDetails, setassignedTestDetails] = useState([])
   const [allTests, setAllTests] = useState([])
   const [testDetails, setTestDetails] = useState([])

   const { role: persona, id } = useSelector(state => state.user)

   useEffect(() => {
      getResponse({ id: '63b567682cbfe817fe551afb' })
         .then(res => {
            console.log(res.data);
         })
   }, [])

   useEffect(() => {
      getTest()
         .then(res => {
            console.log('all-assigned-tests', res.data.data.test);
            res.data.data.test.map(test => {
               setassignedTestDetails(prev => {
                  let assignedOn = new Date(test.createdAt)
                  let obj = {
                     testName: 'test',
                     assignedOn: getFormattedDate(assignedOn),
                     dueDate: test.dueDate,
                     duration: test.timeLimit,
                     status: 0,
                     scores: 'V720 M650 | C1370	',
                     _id: test._id,
                     testId: test.testId,
                     isCompleted: test.isCompleted
                  }
                  let allTests = [...prev, { ...obj }]
                  return allTests.sort(function (a, b) {
                     return new Date(b.updatedAt) - new Date(a.updatedAt);
                  });
               })
            })

            if (res.data.data.test.length === 0) return
            res.data.data.test.map(test => {
               getTestDetails(test.testId)
                  .then(resp => {
                     // console.log('testdata', resp.data.data)
                  })
            })
         })
   }, [])

   useEffect(() => {
      if (assignedTestDetails.length === 0) return
      assignedTestDetails.map(item => {
         getTestDetails(item.testId)
            .then(resp => {
               setAllTests(prev => {
                  let obj = {
                     ...item,
                     testName: resp.data.data.test.testName,
                  }
                  let allTests = [...prev, { ...obj }]
                  return allTests.sort(function (a, b) {
                     return new Date(b.updatedAt) - new Date(a.updatedAt);
                  });
               })

            })
      })
   }, [assignedTestDetails])

   useEffect(() => {
      getUserDetail({ id })
         .then(res => {
            // console.log('response', res.data.data);
            setUser(res.data.data.user)
            setAssociatedStudents([])
            res.data.data.user.assiginedStudents.map((student, idx) => {
               getUserDetail({ id: student })
                  .then(res => {
                     setAssociatedStudents(prev => [...prev, {
                        _id: res.data.data.user._id,
                        name: `${res.data.data.user.firstName} ${res.data.data.user.lastName}`,
                        photo: res.data.data.user.photo ? res.data.data.user.photo : '/images/default.jpeg',
                        selected: idx === 0 ? true : false
                     }])
                  })
            })

         })
   }, [])

   const handleStudentChange = item => {
      // console.log(item);
      let tempdata = associatedStudents.map(student => {
         if (student._id === item._id) {
            return { ...student, selected: true }
         } else {
            return { ...student, selected : false }
         }
      })
      setAssociatedStudents(tempdata)
   }

   useEffect(() => {
      console.log(selectedStudent);
   }, [selectedStudent])
   // console.log(allTests);
   // console.log(associatedStudents);

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
                     <div className="flex flex-col items-center justify-end">
                        {parentTestInfo.map(item => {
                           return <div className="flex items-center mb-[20px]">
                              <div className="w-[20px] h-[20px] rounded-full mr-[20px]" style={{ backgroundColor: item.bg }}></div>
                              <div className="font-semibold w-[90px]"> {item.text} </div>
                           </div>
                        })}
                     </div>
                  ) : persona === 'parent' &&
                  <div className="pl-4">
                     <div className="flex items-center justify-end">
                        {parentTestInfo.map(item => {
                           return <>
                              <div className="w-[20px] h-[20px] rounded-full mr-[20px]" style={{ backgroundColor: item.bg }}></div>
                              <div className="mr-[20px] font-semibold"> {item.text} </div>
                           </>
                        })}
                     </div>
                     <div className="flex mt-[29px]">
                        {associatedStudents.map((student, idx) => {
                           return <div key={idx} className='border px-5 py-[7px] flex justify-center' onClick={() => handleStudentChange(student)} >
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
                     data={allTests}
                     tableHeaders={tableHeaders}
                     maxPageSize={10}
                     excludes={['_id']}
                  />
               </div>
            </div>
         </div>

      </>
   );
}
