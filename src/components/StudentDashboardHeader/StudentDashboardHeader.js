import React, { useState } from "react";
// import Chart from "../Chart/Chart";
import explore from "./../../assets/images/explore-bg.png";
import styles from "./StudentDashboardHeader.module.css";
import starGold from "./../../assets/icons/star-gold.png";
import starDark from "./../../assets/icons/star-dark.png";
import starLight from "./../../assets/icons/star-light.png";
import { TutorItem } from "../TutorItem/TutorItem";

const StudentDashboardHeader = () => {
   const [subject, setSubject] = useState("Maths");
   const [slot, setSlot] = useState("Jun 20, 2022 - Jul 30, 2022 ");

   const tutors = [
      { name: "Shivam Shrivasaba", designation: "Subject Tutoring at 17:00 on Nov 21" },
      { name: "Rohit Ransore", designation: "{{Service}} on MM/DD/YY HH:MM" },
      { name: "Shivam Shrivasaba", designation: "Subject Tutoring at 17:00 on Nov 21" },
      { name: "Rohit Ransore", designation: "{{Service}} on MM/DD/YY HH:MM" },
      { name: "Shivam Shrivasaba", designation: "Subject Tutoring at 17:00 on Nov 21" },
      { name: "Rohit Ransore", designation: "{{Service}} on MM/DD/YY HH:MM" },
      { name: "Shivam Shrivasaba", designation: "Subject Tutoring at 17:00 on Nov 21" },
      { name: "Rohit Ransore", designation: "{{Service}} on MM/DD/YY HH:MM" },
   ]

   return (
      <div className="flex h-[250px]" id={styles.StudentDashboardHeader}>
         <div id={styles.admissionExpert} className="w-3/5">
            <div className="flex">
               <div className="w-1/2 flex items-center">
                  <h1>This fall get help from our Admission Experts.</h1>
               </div>

               <div className="w-1/2 items-center">
                  <img src={explore} className='w-full object-contain' alt="" />
               </div>
            </div>
         </div>
         <div className="w-2/5 bg-white rounded-[20px] p-[22px] pr-0 h-[100%]">
            <div className="overflow-y-scroll h-[100%] pr-[22px]" id={styles.tutorList}>
               {tutors.map(({ name, designation }) => <TutorItem tutorName={name} designation={designation} />)}
            </div>
         </div>
      </div>
   );
};

export default StudentDashboardHeader;
