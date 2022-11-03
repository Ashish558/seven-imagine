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

const days = [
   'S', 'M', 'T', 'W', 'T', 'F', 'S'
]

export default function Calendar() {

   const calendarRef = useRef(null)
   // console.log(calendarRef.current)
   const [events, setEvents] = useState([])

   //change btn styles
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
      // const description = arg.event._def.extendedProps.description
      return (
         <div className='p-0.5 h-full'>
            <div className='bg-darkWhite h-full p-2 rounded-lg'>
               <p className='text-primary font-semibold text-sm'> {arg.event._def.title} </p>
               <p className='text-black opacity-60 text-xs'> {arg.timeText} </p>
            </div>
         </div>
      )

   }

   const handleDateClick = arg => {
      // console.log(arg)
      setEvents([...events, {
         id: 2,
         start: arg.dateStr,
         title: 'QWerrt',
         description: 'QWerfgfgsrt',
      }])
   }
   const handleDateSelect = arg => {

      const startDate = moment(arg.startStr);
      const timeEnd = moment(arg.endStr);
      const diff = timeEnd.diff(startDate);
      const diffDuration = moment.duration(diff);
      const minutes = diffDuration.minutes()
      const hours = diffDuration.hours()

      if (minutes === 0 && hours === 0) return
      if (minutes === 30 && hours === 0) return

      setEvents([...events, {
         id: 2,
         start: arg.startStr,
         end: arg.endStr,
         title: 'QWerrt',
         description: 'QWerfgfgsrt',
      }])
   }
   return (
      <div className='ml-pageLeft bg-lightWhite min-h-screen'>
         <div className='py-14 px-5 calendar flex'>
            <div className='p-2 pl-0'>
               <SimpleCalendar />
            </div>
            <div className='flex-1'>
               <FullCalendar
                  events={events}
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
   )
}
