import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./simpleCalendar.css";
import moment from "moment";

export default function SimpleCalendar({currentDate, setCurrentDate }) {

    const changeDate = (e) => {
        setCurrentDate(e);
    };
    return (
        <>
            <Calendar value={currentDate} onChange={changeDate}
                // formatWeekday={day => 'd'}
                // formatShortWeekday={day => `${day}`}
                formatShortWeekday={(locale, value) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][value.getDay()]
                }
            // formatDay={day => console.log(day)}
            // formatShortWeekday
            // formatDay={day => console.log(day)}
            />
            {/* <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p> */}
        </>
    );
}
