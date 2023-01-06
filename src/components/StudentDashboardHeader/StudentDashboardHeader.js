import React, { useState } from "react";
import explore from "./../../assets/images/explore-bg.png";
import styles from "./StudentDashboardHeader.module.css";
import TutorItem from "../TutorItem/TutorItem";
import { useLazyGetSettingsQuery, useLazyGetSingleSessionQuery, useLazyGetStudentFeedbackQuery } from "../../app/services/session";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLazyGetTutorDetailsQuery } from "../../app/services/users";
import ImageSlideshow from "../ImageSlideshow/ImageSlideshow";

const StudentDashboardHeader = () => {
   const [subject, setSubject] = useState("Maths");
   const [slot, setSlot] = useState("Jun 20, 2022 - Jul 30, 2022 ");
   const [fetchFeedbacks, fetchFeedbacksResp] = useLazyGetStudentFeedbackQuery()
   const [feedbacks, setFeedbacks] = useState([])
   const [allFeedbacks, setAllFeedbacks] = useState([])
   const { id } = useSelector(state => state.user)
   const [images, setImages] = useState([])
   const [fetchSettings, fetchSettingsResp] = useLazyGetSettingsQuery()

   const [getUserDetail, userDetailResp] = useLazyGetTutorDetailsQuery()
   const [getSession, getSessionResp] = useLazyGetSingleSessionQuery()

   // console.log(id);
   useEffect(() => {
      fetchFeedbacks({ id })
         .then(({ error, data }) => {
            if (error) {
               console.log(error)
               return
            }
            data.data.feedback.map(feedback => {
               getUserDetail({ id: feedback.tutorId })
                  .then(res => {
                     const tutor = res.data.data.user
                     getSession(feedback.sessionId)
                        .then(res => {
                           const session = res.data.data.session
                           setFeedbacks(prev => {
                              let obj = {
                                 ...feedback,
                                 tutorName: `${tutor.firstName} ${tutor.lastName}`,
                                 service: session.service
                              }
                              let allFeedbacks = [...prev,
                              { ...obj }
                              ]
                              return allFeedbacks.sort(function (a, b) {
                                 return new Date(b.updatedAt) - new Date(a.updatedAt);
                              });
                           })
                        })
                  })
            })
         })
   }, [])

   useEffect(() => {
      fetchSettings()
         .then(res => {
            setImages(res.data.data.setting.offerImages)
         })
   }, [])

   useEffect(() => {
      let tempdata = []
      let tempsessions = []
      feedbacks.map(feedback => {
         if (tempsessions.includes(feedback.sessionId)) {
            return
         } else {
            tempdata.push(feedback)
            tempsessions.push(feedback.sessionId)
         }
      })
      setAllFeedbacks(tempdata)
   }, [feedbacks])

   console.log(images);
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
      <div className="flex h-[250px] max-w-[600px] relative" id={styles.StudentDashboardHeader}>
         <div className="w-full flex-1 relative h-full flex rounded-lg items-center px-2 pr-4 overflow-hidden"
            id={styles.exploreBgDisable}
            style={{ position: 'absolute', top: '0', left: '0' }} >
            {
               images.length >= 1 &&
               <ImageSlideshow images={images} text='text' />
            }
         </div>
      </div>
   );
};

export default StudentDashboardHeader;
