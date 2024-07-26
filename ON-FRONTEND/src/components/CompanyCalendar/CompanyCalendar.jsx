import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from "moment";
import * as s from './CompanyCalendarStyled.jsx';


export default function MyApp() {
  const [value, onChange] = useState(new Date());
  // const [mark, setMark] = useState([]);
  // setMark("2024-07-24");
  return (
    <s.CompanyCalendar>
      <Calendar
        locale="kr"
        onChange={onChange}
        value={value}
        calendarType='hebrew'
        next2Label={null}
        prev2Label={null}
        showNeighboringMonth={false}
        formatDay={(locale, date) => moment(date).format("D")}
        formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")}
        formatYear={(locale, date) => moment(date).format("YYYY")}
      />
    </s.CompanyCalendar>
  );
}