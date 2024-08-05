import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from "moment";
import * as s from './DiaryCalendarStyled.jsx';

export default function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <s.DiaryCalendar>
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
        tileContent={({ date, view }) => {
          // view가 'month'일 때만 체크박스 모양 div를 추가
          if (view === 'month') {
            return (
              <s.Checkbox />
            );
          }
          return null;
        }}
      />
    </s.DiaryCalendar>
  );
}
