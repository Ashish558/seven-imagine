import React, { useEffect, useRef, useState } from 'react'
import moment from 'moment';
import './calendar.css'

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction';

import timeGridWeek from '@fullcalendar/timegrid'
import LeftIcon from '../../assets/icons/left.svg'
import nextIcon from '../../assets/icons/right.svg'
import SimpleCalendar from '../../components/SimpleCalendar/SimpleCalendar';
import InputField from '../../components/InputField/inputField';

import SearchIcon from '../../assets/icons/search.svg'
import { useParams } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import EventModal from '../Frames/EventModal/EventModal';
import InputSearch from '../../components/InputSearch/InputSearch';
import { useLazyGetSessionsQuery, useLazyGetTutorStudentsQuery, useLazyGetUsersByNameQuery } from '../../app/services/session';
import { convertTime12to24 } from '../../utils/utils';
import { useSelector } from 'react-redux';

const days = [
   'S', 'M', 'T', 'W', 'T', 'F', 'S'
]
const students = [
   {
      name: 'Joseph Brown',
      bg: '#51D294'
   },
   {
      name: 'Joseph Brown',
      bg: '#C56DEE'
   },
   {
      name: 'Joseph Brown',
      bg: '#6F7ADE'
   },
   {
      name: 'Joseph Brown',
      bg: '#7DE94A'
   },
   {
      name: 'Joseph Brown',
      bg: '#F6935A'
   },
]

export default function Calendar() {

   const calendarRef = useRef(null)
   // console.log(calendarRef.current)
   const [events, setEvents] = useState([])
   const [persona, setPersona] = useState('')

   const [eventModalActive, setEventModalActive] = useState(false)
   const [updateEventModalActive, setUpdateEventModalActive] = useState(false)

   const [fetchNames, namesResponse] = useLazyGetUsersByNameQuery()
   const [fetchUserSessions, fetchUserSessionsResponse] = useLazyGetSessionsQuery()
   const [fetchStudents, fetchStudentsResp] = useLazyGetTutorStudentsQuery()

   const [userSessions, setUserSessions] = useState([])
   const [names, setNames] = useState([])
   const [name, setName] = useState('')
   const [searchedUserId, setSearchedUserId] = useState('')
   const [eventDetails, setEventDetails] = useState([])

   const [students, setStudents] = useState([])
   const [sessionToUpdate, setSessionToUpdate] = useState({})
   // const params = useParams()

   const { isLoggedIn } = useSelector(state => state.user)
   // console.log(isLoggedIn)

   //change btn 
   useEffect(() => {
      if (sessionStorage.getItem('role')) {
         setPersona(sessionStorage.getItem('role'))
      }
   }, [])

   const fetchSessions = (id, role) => {
      // console.log(id)
      const url = `/api/session/${role}/${id}`
      // console.log(url)
      fetchUserSessions(url)
         .then(res => {
            setEventDetails(res.data.data.session)
            let tempSession = res.data.data.session.map(session => {
               const time = session.time
               const strtTime12HFormat = `${time.start.time} ${time.start.timeType}`
               const startTime = convertTime12to24(`${time.start.time} ${time.start.timeType}`)
               const endTime = `${time.end.time} ${time.end.timeType}`

               const startHours = parseInt(startTime.split(":")[0])
               const startMinutes = parseInt(startTime.split(":")[1])

               let startDate = new Date(session.date)
               startHours !== NaN && startDate.setHours(startHours)
               startMinutes !== NaN && startDate.setMinutes(startMinutes)

               let eventObj = {
                  id: session._id,
                  start: startDate,
                  title: session.tutorName,
                  description: `${strtTime12HFormat} - ${endTime}`,
               }
               return eventObj
            })
            setEvents(tempSession)
            // setEvents([...events, {
            //    id: session._id,
            //    start: startDate,
            //    title: 'tutorName',
            //    description: `${strtTime12HFormat} - ${endTime}`,
            // }])

         })
   }

   useEffect(() => {
      if (persona == 'student') {
         const userId = sessionStorage.getItem('userId')
         const role = sessionStorage.getItem('role')
         if (!userId) return
         fetchSessions(userId, role)
      }
   }, [persona])

   useEffect(() => {
      if (calendarRef.current) {
         const prevBtn = document.getElementsByClassName('calendar-prevButton-custom')[0].parentElement
         if (prevBtn) prevBtn.classList.add('calendar-prev-button')
         const nextBtn = document.getElementsByClassName('calendar-nextButton-custom')[0].parentElement
         if (nextBtn) nextBtn.classList.add('calendar-prev-button')
      }
   }, [])

   const getDayHeaders = arg => {
      let text = arg.text.split(' ')

      return (
         <div className={`px-3 py-1 rounded-7 ${arg.isToday ? 'bg-primary border' : ''}  `}>
            <p
               className={`${arg.isToday ? 'text-white ' : ''} text-sm font-semibold ${arg.isPast ? 'opacity-50' : ''} `}>
               {days[arg.date.getDay()]}
            </p>
            <p
               className={`${arg.isToday ? 'text-white' : ''} text-2xl font-bold font-inter ${arg.isPast ? 'opacity-50' : ''}`}>
               {text[1]}
            </p>
         </div>
      )
   }

   const handlePrevClick = arg => {
      // console.log(arg)
      const calendarAPI = calendarRef?.current?.getApi();
      calendarAPI?.prev();
   }

   const handleNextClick = arg => {
      // console.log(arg)
      const calendarAPI = calendarRef?.current?.getApi();
      calendarAPI?.next();
   }

   const eventContent = arg => {
      // console.log(arg)
      const description = arg.event._def.extendedProps.description
      return (
         <div className='p-0.5 h-full'>
            <div className='bg-darkWhite h-full p-2 rounded-lg'>
               <p className='text-primary font-semibold text-sm'> {arg.event._def.title} </p>
               {/* <p className='text-black opacity-60 text-xs'> {arg.timeText} </p> */}
               <p className='text-black opacity-60 text-xs'> {description} </p>
            </div>
         </div>
      )

   }


   const handleDateClick = arg => {
      if (persona === 'admin' || persona === 'tutor') {
         setEventModalActive(true)
      }
      // console.log(arg)
      // setEvents([...events, {
      //    id: 2,
      //    start: arg.dateStr,
      //    title: 'QWerrt',
      //    description: 'QWerfgfgsrt',
      // }])
   }

   const handleDateSelect = arg => {
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
   }

   useEffect(() => {
      if (name.length > 2) {
         fetchNames(name)
            .then(res => {
               // console.log(res.data.data.user)
               let tempData = res.data.data.user.map(user => {
                  return {
                     _id: user._id,
                     value: `${user.firstName} ${user.lastName}`,
                     role: user.role,
                     ...user
                  }
               })
               setNames(tempData)
            })
      }
   }, [name])

   useEffect(() => {
      const userId = sessionStorage.getItem('userId')
      if (persona === 'tutor') {
         fetchStudents(userId)
            .then(res => {
               setEventDetails(res.data.data.session)
               let tempSession = res.data.data.session.map(session => {
                  const time = session.time
                  const strtTime12HFormat = `${time.start.time} ${time.start.timeType}`
                  const startTime = convertTime12to24(`${time.start.time} ${time.start.timeType}`)
                  const endTime = `${time.end.time} ${time.end.timeType}`

                  const startHours = parseInt(startTime.split(":")[0])
                  const startMinutes = parseInt(startTime.split(":")[1])

                  let startDate = new Date(session.date)
                  startHours !== NaN && startDate.setHours(startHours)
                  startMinutes !== NaN && startDate.setMinutes(startMinutes)

                  let eventObj = {
                     id: session._id,
                     start: startDate,
                     title: session.studentName,
                     description: `${strtTime12HFormat} - ${endTime}`,
                  }
                  return eventObj
               })
               setEvents(tempSession)
               
               const arrayUniqueByKey = [...new Map(res.data.data.session.map(item =>
                  [item['studentId'], item])).values()];
              
                  let tempstudents = arrayUniqueByKey.map(item => {
                  return {
                     studentId: item.studentId, studentName: item.studentName
                  }
               })
               setStudents(tempstudents)
            })
      }
   }, [persona])

   const handleEventClick = info => {
      const session = eventDetails.find(e => e._id === info.event._def.publicId)
      if (persona === 'admin' || persona === 'tutor') {
         setUpdateEventModalActive(true)
         setSessionToUpdate(session)
      }
   }

   // console.log(students)
   return (
      <>
         <div className='lg:ml-pageLeft bg-lightWhite min-h-screen'>
            <div className='py-14 px-5 calendar flex'>
               <div className='p-2 pl-0'>
                  <SimpleCalendar />
                  {persona === 'parent' || persona === 'tutor' ?
                     <div className='mt-10 pr-4'>
                        <p className='text-primaryDark text-21 font-semibold mb-8 ml-2'> Student Name </p>
                        <div>
                           {students.map(student => {
                              return <div key={student.studentId} className='p-4 mb-4 rounded-10 flex justify-between items-center border bg-white'>
                                 <p className='font-medium'>
                                    {student.studentName}
                                 </p>
                                 <div className='student-circle' style={{ backgroundColor: student.bg }}>
                                 </div>
                              </div>
                           })}
                        </div>
                     </div>
                     : persona === 'student' ? <></> :
                        <div>
                           <InputSearch
                              // IconRight={SearchIcon}
                              placeholder='Type Name'
                              parentClassName='w-full mr-4 mt-5'
                              inputContainerClassName='bg-white shadow'
                              type='select'
                              value={name}
                              onChange={e => setName(e.target.value)}
                              optionData={names}
                              onOptionClick={item => {
                                 setName(item.value);
                                 fetchSessions(item._id, item.role)
                              }}
                           />
                        </div>

                  }
               </div>
               <div className='flex-1'>
                  <FullCalendar
                     events={events}
                     eventClick={info => handleEventClick(info)}
                     ref={calendarRef}
                     plugins={[timeGridPlugin, timeGridWeek, interactionPlugin]}
                     customButtons={{
                        prevButton: {
                           text: <span className='calendar-prevButton-custom'>
                              <img src={LeftIcon} />
                           </span>,
                           click: handlePrevClick
                        },
                        nextButton: {
                           text: <span className='calendar-nextButton-custom'>
                              <img src={nextIcon} />
                           </span>,
                           click: handleNextClick
                        },
                     }}
                     eventContent={eventContent}
                     initialView="timeGridWeek"
                     allDaySlot={false}
                     headerToolbar={{
                        start: 'prevButton title nextButton',
                        end: '',
                     }}
                     titleFormat={{
                        month: 'long',
                        year: 'numeric'
                     }}
                     expandRows={true}
                     contentHeight={3250}
                     dayHeaderFormat={{
                        day: '2-digit',
                        month: 'narrow'
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
                     defaultTimedEventDuration='01:00'
                  />
               </div>

            </div>
         </div>
         {
            eventModalActive && <EventModal setEventModalActive={setEventModalActive} persona={persona} />
         }
         {
            updateEventModalActive && <EventModal setEventModalActive={setUpdateEventModalActive}
               persona={persona}
               isUpdating={true}
               sessionToUpdate={sessionToUpdate} />
         }
      </>
   )
}
