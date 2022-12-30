import React, { useEffect, useRef, useState } from "react";
import moment from "moment-timezone";
import momentOg from "moment";

import "./calendar.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import FullCalendar, { formatDate } from "@fullcalendar/react"; // must go before plugins
// import { Calendar } from '@fullcalendar/core';
import { toMoment } from '@fullcalendar/moment';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridWeek from "@fullcalendar/timegrid";

import LeftIcon from "../../assets/icons/left.svg";
import nextIcon from "../../assets/icons/right.svg";

import SimpleCalendar from "../../components/SimpleCalendar/SimpleCalendar";
import EventModal from "../Frames/EventModal/EventModal";
import InputSearch from "../../components/InputSearch/InputSearch";
import {
   useLazyGetSessionsQuery,
   useLazyGetTutorStudentsQuery,
   useLazyGetUsersByNameQuery,
} from "../../app/services/session";
import { convertDateToTimezone, convertTime12to24, formatAMPM, getFormattedDate, getLocalTimeZone, getStartDate } from "../../utils/utils";
import InputSelect from "../../components/InputSelect/InputSelect";
// import styles from "./calendar.css";
import momentTimezonePlugin from '@fullcalendar/moment-timezone';

const days = ["S", "M", "T", "W", "T", "F", "S"];
const students = [
   {
      name: "Joseph Brown",
      bg: "#51D294",
   },
   {
      name: "Joseph Brown",
      bg: "#C56DEE",
   },
   {
      name: "Joseph Brown",
      bg: "#6F7ADE",
   },
   {
      name: "Joseph Brown",
      bg: "#7DE94A",
   },
   {
      name: "Joseph Brown",
      bg: "#F6935A",
   },
];

// CST - "America/Indiana/Indianapolis"
//EST "America/New_York"
//MST - "America/North_Dakota/Beulah"

// const timeZones = [
//    'local',
//    'UTC-05:00',
//    'UTC-06:00',
//    'UTC-07:00',
//    'UTC-08:00',
//    'AST',
//    'EST',
//    'CST',
//    'MST',
//    'PST',
//    'AKST',
//    'HST',
// ]
const timeZones = [
   'Asia/Kolkata',
   // 'America/New_York',
   'US/Alaska',
   'US/Central',
   'US/Eastern',
   'US/Hawaii',
   'US/Mountain',
   'US/Pacific',
]
export default function Calendar() {
   const calendarRef = useRef(null);
   // console.log(calendarRef.current)
   const [events, setEvents] = useState([]);
   const [persona, setPersona] = useState("");
   // const [timeZones, setTimeZones] = useState(temptimeZones)
   const { id: sessionToEdit } = useParams()
   const [isEdited, setIsEdited] = useState(false)
   // console.log(sessionToEdit)

   const [eventModalActive, setEventModalActive] = useState(false);
   const [updateEventModalActive, setUpdateEventModalActive] = useState(false);
   const [defaultEventData, setDefaultEventData] = useState(null)

   const [fetchNames, namesResponse] = useLazyGetUsersByNameQuery();
   const [fetchUserSessions, fetchUserSessionsResponse] =
      useLazyGetSessionsQuery();
   const [fetchStudents, fetchStudentsResp] = useLazyGetTutorStudentsQuery();

   const [names, setNames] = useState([]);
   const [name, setName] = useState("");
   const [eventDetails, setEventDetails] = useState([]);

   const [students, setStudents] = useState([]);
   const [sessionToUpdate, setSessionToUpdate] = useState({});
   // const params = useParams()
   const [currentDate, setCurrentDate] = useState(new Date)
   const { isLoggedIn } = useSelector((state) => state.user);

   const [timeZone, setTimeZone] = useState('Asia/Kolkata')
   // console.log(moment.tz.zonesForCountry('US'))

   const [searchedUser, setSearchedUser] = useState({
      id: '',
      role: ''
   })

   const refetchSessions = () => {
      fetchSessions(searchedUser.id, searchedUser.role)
   }

   useEffect(() => {
      if (sessionStorage.getItem("role")) {
         setPersona(sessionStorage.getItem("role"));
      }
   }, []);

   const fetchSessions = (id, role) => {
      // console.log(id)
      setSearchedUser({ id, role })
      const url = `/api/session/${role}/${id}`;
      // console.log(url)
      fetchUserSessions(url).then((res) => {
         const tempEvents = res.data.data.session.map(session => {
            const time = session.time;
            const strtTime12HFormat = `${time.start.time} ${time.start.timeType}`;
            const startTime = convertTime12to24(
               `${time.start.time} ${time.start.timeType}`
            );
            const endTime = `${time.end.time} ${time.end.timeType}`;
            const startHours = parseInt(startTime.split(":")[0]);
            const startMinutes = parseInt(startTime.split(":")[1]);
            // const endHours = parseInt(endTime.split(":")[0]);
            // const endMinutes = parseInt(endTime.split(":")[1]);
            let startDate = new Date(session.date);
            // let startDate = new Date(session.date).toUTCString()
            startHours !== NaN && startDate.setHours(startHours);
            startMinutes !== NaN && startDate.setMinutes(startMinutes);
            let updatedDate = new Date(new Date(
               startDate.toLocaleString('en-US', {
                  timeZone: session.timeZone,
               }),
            ))
            return {
               ...session,
               updatedDate
            }
         })
         // setEventDetails(res.data.data.session);
         setEventDetails(tempEvents)
         // console.log(res.data.data.session)
         let tempSession = res.data.data.session.map((session) => {
            const time = session.time;
            // console.log(session);
            const strtTime12HFormat = `${time.start.time} ${time.start.timeType}`;
            const startTime = convertTime12to24(
               `${time.start.time} ${time.start.timeType}`
            );

            const startHours = parseInt(startTime.split(":")[0]);
            const startMinutes = parseInt(startTime.split(":")[1]);

            let startDate = new Date(session.date)
            // let startDate = new Date(session.date).toUTCString()
            startHours !== NaN && startDate.setHours(startHours);
            startMinutes !== NaN && startDate.setMinutes(startMinutes);

            var userTimezoneOffset = startDate.getTimezoneOffset() * 60000;

            getStartDate(startDate, userTimezoneOffset, session.timeZone)
            let up = getStartDate(startDate, userTimezoneOffset, session.timeZone)
            const startUtc = up.toUTCString()

            console.log('START DATE', startDate);
            console.log('START DATE UTC --', startUtc);

            const endTime12HFormat = `${time.end.time} ${time.end.timeType}`;
            const endTime = convertTime12to24(
               `${time.end.time} ${time.end.timeType}`
            );
            const endHours = parseInt(endTime.split(":")[0]);
            const endMinutes = parseInt(endTime.split(":")[1]);
            let endDate = new Date(session.date);
            endHours !== NaN && endDate.setHours(endHours);
            endMinutes !== NaN && endDate.setMinutes(endMinutes);

            const endDateUtc = getStartDate(endDate, userTimezoneOffset, session.timeZone)

            let eventObj = {
               id: session._id,
               title: session.tutorName,
               start: startUtc,
               endDate: endDateUtc,
               updatedDate: startUtc,
               updatedDateEnd: endDateUtc,
               description: `${strtTime12HFormat} - ${endTime12HFormat}`,
            };
            return eventObj;
         });
         const promiseState = async state => new Promise(resolve => {
            resolve(
               setEvents(tempSession)
            )
         })
         promiseState()
            .then(() => {
               parseEventDatesToTz()
            })

      });
   };

   useEffect(() => {
      if (persona == "student") {
         const userId = sessionStorage.getItem("userId");
         const role = sessionStorage.getItem("role");
         if (!userId) return;
         fetchSessions(userId, role);
      }
   }, [persona]);

   useEffect(() => {
      if (calendarRef.current) {
         const prevBtn = document.getElementsByClassName(
            "calendar-prevButton-custom"
         )[0].parentElement;
         if (prevBtn) prevBtn.classList.add("calendar-prev-button");
         const nextBtn = document.getElementsByClassName(
            "calendar-nextButton-custom"
         )[0].parentElement;
         if (nextBtn) nextBtn.classList.add("calendar-prev-button");
      }
   }, []);

   const getDayHeaders = (arg) => {
      let text = arg.text.split(" ");
      return (
         <div
            className={`p-[10px] rounded-7 ${arg.isToday ? "bg-primary border" : ""
               }  `}
         >
            <p
               className={`${arg.isToday ? "text-primaryWhite-900" : ""
                  } text-sm font-semibold
                   ${arg.isPast ? "text-[#BEC2CE]" : arg.isFuture ? 'text-primary-60' : ''} `}
            >
               {days[arg.date.getDay()]}
            </p>
            <p
               className={`${arg.isToday ? "text-primaryWhite-900" : ""
                  } text-2xl font-bold font-inter
                   ${arg.isPast ? "text-[#BEC2CE]" : arg.isFuture ? 'text-primary-dark' : ''
                  }`}
            >
               {text[1]}
            </p>
         </div>
      );
   };

   const handlePrevClick = (arg) => {
      const calendarAPI = calendarRef?.current?.getApi();
      calendarAPI?.prev();
   };

   const handleNextClick = (arg) => {
      // console.log(arg)
      const calendarAPI = calendarRef?.current?.getApi();
      calendarAPI?.next();
   };
   const eventContent = (arg) => {
      // console.log(arg)
      // console.log(new Date(arg.event._instance.range.start).getHours())
      let m = moment.tz(`${arg.event.start}`, "America/Los_Angeles").format();
      // console.log(new Date(m).getHours())
      // console.log(new Date(m).getMinutes())
      // console.log(moment.tz(`${arg.event.start}`, timeZone).format())

      let title = ''
      const description = arg.event._def.extendedProps.description;
      return (
         <div className="p-0.5 h-full">
            <div className="bg-darkWhite h-full p-2 rounded-lg">
               <p className="text-primary font-semibold text-sm">
                  {" "}
                  {arg.event._def.title}{" "}
               </p>
               {/* <p className='text-black opacity-60 text-xs'> {arg.timeText} </p> */}
               <p className="text-black opacity-60 text-xs">
                  {" "}
                  {description}{" "}
               </p>
            </div>
         </div>
      );
   };

   const handleDateClick = (arg) => {
      // console.log(arg)
      setDefaultEventData({ date: arg.date })
      if (persona === "admin" || persona === "tutor") {
         setEventModalActive(true);
      }
      // console.log(arg)
      // setEvents([...events, {
      //    id: 2,
      //    start: arg.dateStr,
      //    title: 'QWerrt',
      //    description: 'QWerfgfgsrt',
      // }])
   };

   const handleDateSelect = (arg) => {
      // setEventModalActive(true)
      // const startDate = moment(arg.startStr);
      // const timeEnd = moment(arg.endStr);
      // const diff = timeEnd.diff(startDate);
      // const diffDuration = moment.duration(diff);
      // const minutes = diffDuration.minutes()
      // const hours = diffDuration.hours()
      // if (minutes === 0 && hours === 0) return
      // if (minutes === 30 && hours === 0) return
      // setEvents([...events, {
      //    id: 2,
      //    start: arg.startStr,
      //    end: arg.endStr,
      //    title: 'QWerrt',
      //    description: 'QWerfgfgsrt',
      // }])
   };

   useEffect(() => {
      if (name.length > 2) {
         fetchNames(name).then((res) => {
            // console.log(res.data.data.user)
            let tempData = res.data.data.user.map((user) => {
               return {
                  _id: user._id,
                  value: `${user.firstName} ${user.lastName}`,
                  role: user.role,
                  ...user,
               };
            });
            setNames(tempData);
         });
      }
   }, [name]);

   useEffect(() => {
      const userId = sessionStorage.getItem("userId");
      if (persona === "tutor") {
         fetchStudents(userId).then((res) => {
            setEventDetails(res.data.data.session);
            // console.log(res.data.data);
            let tempSession = res.data.data.session.map((session) => {
               const time = session.time;
               // console.log(session);
               const strtTime12HFormat = `${time.start.time} ${time.start.timeType}`;
               const startTime = convertTime12to24(
                  `${time.start.time} ${time.start.timeType}`
               );
               const startHours = parseInt(startTime.split(":")[0]);
               const startMinutes = parseInt(startTime.split(":")[1]);
               let startDate = new Date(session.date)
               // let startDate = new Date(session.date).toUTCString()
               startHours !== NaN && startDate.setHours(startHours);
               startMinutes !== NaN && startDate.setMinutes(startMinutes);
               var userTimezoneOffset = startDate.getTimezoneOffset() * 60000;
               getStartDate(startDate, userTimezoneOffset, session.timeZone)
               let up = getStartDate(startDate, userTimezoneOffset, session.timeZone)
               const startUtc = up.toUTCString()
               // console.log('START DATE', startDate);
               // console.log('START DATE UTC --', startUtc);
               const endTime12HFormat = `${time.end.time} ${time.end.timeType}`;
               const endTime = convertTime12to24(
                  `${time.end.time} ${time.end.timeType}`
               );
               const endHours = parseInt(endTime.split(":")[0]);
               const endMinutes = parseInt(endTime.split(":")[1]);
               let endDate = new Date(session.date);
               endHours !== NaN && endDate.setHours(endHours);
               endMinutes !== NaN && endDate.setMinutes(endMinutes);
               const endDateUtc = getStartDate(endDate, userTimezoneOffset, session.timeZone)
               let eventObj = {
                  id: session._id,
                  title: session.tutorName,
                  start: startUtc,
                  endDate: endDateUtc,
                  updatedDate: startUtc,
                  updatedDateEnd: endDateUtc,
                  description: `${strtTime12HFormat} - ${endTime12HFormat}`,
               };
               return eventObj;
            });

            const promiseState = async state => new Promise(resolve => {
               resolve(
                  setEvents(tempSession)
               )
            })
            promiseState()
               .then(() => {
                  parseEventDatesToTz()
               })

            const arrayUniqueByKey = [
               ...new Map(
                  res.data.data.session.map((item) => [
                     item["studentId"],
                     item,
                  ])
               ).values(),
            ];
            // console.log(arrayUniqueByKey);

            let tempstudents = arrayUniqueByKey.map((item) => {
               return {
                  studentId: item.studentId,
                  studentName: item.studentName,
               };
            });
            setStudents(tempstudents);
         });
      }
   }, [persona]);

   const handleEventClick = (info) => {
      const session = eventDetails.find(
         (e) => e._id === info.event._def.publicId
      );
      if (persona === "admin" || persona === "tutor") {
         setUpdateEventModalActive(true);
         setSessionToUpdate(session);
      }
   };

   useEffect(() => {
      if (!sessionToEdit) return
      if (eventDetails.length === 0) return
      if (isEdited === true) return

      setIsEdited(true)
      const session = eventDetails.find(
         (e) => e._id === sessionToEdit
      );
      // console.log(session);
      if (persona === "admin" || persona === "tutor") {
         setUpdateEventModalActive(true);
         setSessionToUpdate(session);
      }
   }, [sessionToEdit, eventDetails])

   useEffect(() => {
      // console.log(calendarRef.current.getApi())
      calendarRef.current.getApi().gotoDate(currentDate)
      // calendarRef.current.gotoDate(currentDate)
   }, [currentDate])

   moment.tz.setDefault('Etc/UTC')

   const parseEventDatesToTz = () => {
      setEvents(prev => {
         return prev.map(item => {
            let updatedDate = new Date(item.updatedDate).toLocaleString('en-US', { timeZone })
            let updatedDateEnd = new Date(item.updatedDateEnd).toLocaleString('en-US', { timeZone })
            console.log('DATE UPDATED ==', new Date(updatedDate))
            return {
               ...item,
               start: new Date(updatedDate),
               // description: `${formatAMPM(startarg)}-${formatAMPM(endarg)}`
               description: `${formatAMPM(new Date(updatedDate))}-${formatAMPM(new Date(updatedDateEnd))}`
            }
         })
      })
   }

   useEffect(() => {
      if (calendarRef.current === null) return
      if (calendarRef.current === undefined) return
      parseEventDatesToTz()

      // document.getElementById('calendarContainer').refetchEvents()
      // calendarRef.refetchEvents()
      // calendarRef.current.gotoDate('')
      // calendarRef.current.setOption('timeZone', timeZone)
   }, [timeZone, events.length])

   // console.log(events);
   // console.log(eventDetails);

   return (
      <>
         <div className="lg:ml-pageLeft bg-lightWhite min-h-screen">
            <div className="py-14 pl-5 calendar flex">
               <div className="p-10 pl-0 pr-0 w-[280px] mr-[10px]">
                  <div className="w-[280px]" >
                     <SimpleCalendar currentDate={currentDate} setCurrentDate={setCurrentDate} />
                  </div>
                  {persona === "parent" || persona === "tutor" ? (
                     <div className="mt-10 pr-4">
                        <p className="text-primaryDark text-21 font-semibold mb-8 ml-2">
                           {" "}
                           Student Name{" "}
                        </p>
                        <div>
                           {students.map((student) => {
                              return (
                                 <div
                                    key={student.studentId}
                                    className="p-4 mb-4 rounded-10 flex justify-between items-center border bg-white"
                                 >
                                    <p className="font-medium">
                                       {student.studentName}
                                    </p>
                                    <div
                                       className="student-circle"
                                       style={{
                                          backgroundColor:
                                             '#51D294',
                                       }}
                                    ></div>
                                 </div>
                              );
                           })}
                        </div>
                     </div>
                  ) : persona === "student" ? (
                     <></>
                  ) : (
                     <div>
                        <InputSearch
                           // IconRight={SearchIcon}
                           placeholder="Type Name"
                           parentClassName="w-full mr-4 mt-5"
                           inputContainerClassName="bg-white shadow"
                           type="select"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           optionData={names}
                           onOptionClick={(item) => {
                              setName(item.value);
                              fetchSessions(item._id, item.role);
                           }}
                        />
                     </div>
                  )}
               </div>
               <div className="flex-1 w-4/5 relative" id="calendarContainer">
                  <FullCalendar
                     events={events}
                     // timeZone='UTC'
                     // timeZone={timeZone === getLocalTimeZone() ? 'local' : timeZone}
                     // timeZone={timeZone === 'IST' ? 'local' : timeZone }
                     eventClick={(info) => handleEventClick(info)}
                     ref={calendarRef}
                     plugins={[
                        timeGridPlugin,
                        timeGridWeek,
                        interactionPlugin,
                        // momentTimezonePlugin
                     ]}
                     firstDay={1}
                     customButtons={{
                        prevButton: {
                           text: (
                              <span className="calendar-prevButton-custom" >
                                 <img src={LeftIcon} />
                              </span>
                           ),
                           click: handlePrevClick,
                        },
                        nextButton: {
                           text: (
                              <span className="calendar-nextButton-custom">
                                 <img src={nextIcon} />
                              </span>
                           ),
                           click: handleNextClick,
                        },
                     }}
                     eventContent={eventContent}
                     initialView="timeGridWeek"
                     allDaySlot={false}
                     headerToolbar={{
                        start: "prevButton title nextButton",
                        end: "",
                     }}
                     titleFormat={{
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                     }}
                     expandRows={true}
                     contentHeight={"100%"}
                     dayHeaderFormat={{
                        day: "2-digit",
                        month: "narrow",
                     }}
                     dayHeaderContent={getDayHeaders}
                     selectable={true}
                     // select={handleDateClick}
                     dateClick={handleDateClick}
                     select={handleDateSelect}
                     // titleFormat={{
                     //    month: ''
                     // }}
                     selectOverlap={false}
                     defaultTimedEventDuration="01:00"
                  />
                  <div className="" style={{ position: "absolute", top: '00px', right: '40px' }}>
                     <InputSelect value={timeZone == 'local' ? getLocalTimeZone() : timeZone.substring(0, 20)}
                        //  optionData={['local', 'America/New_York']}
                        // optionData={['Asia/Calcutta', ...moment.tz.zonesForCountry('US')]}
                        // optionData={['Asia/Calcutta', ...moment.tz.zonesForCountry('US')]}
                        optionData={timeZones}
                        onChange={val => setTimeZone(val)}
                        parentClassName='w-[250px]'
                        inputContainerClassName='text-primaryDark font-bold text-'
                     />
                  </div>
               </div>
            </div>
         </div>
         {eventModalActive && (
            <EventModal
               defaultEventData={defaultEventData}
               setEventModalActive={setEventModalActive}
               persona={persona}
               refetchSessions={refetchSessions}
            />
         )}
         {updateEventModalActive && (
            <EventModal
               setEventModalActive={setUpdateEventModalActive}
               persona={persona}
               isUpdating={true}
               sessionToUpdate={sessionToUpdate}
               refetchSessions={refetchSessions}
            />
         )}
      </>
   );
}
