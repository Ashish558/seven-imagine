import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './simpleCalendar.css'
import moment from 'moment'

export default function SimpleCalendar() {
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  return (
    <>
      <Calendar
        value={dateState}
        onChange={changeDate}
        // useWeekdaysShort={true}
        // prevLabel={}
        // nextLabel={}
      />
      {/* <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p> */}
    </>
  )
}