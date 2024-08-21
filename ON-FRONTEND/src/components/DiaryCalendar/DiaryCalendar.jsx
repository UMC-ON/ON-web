import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import * as s from './DiaryCalendarStyled.jsx';

import diaryCheck from "../../assets/images/diaryCheck.svg";

export default function DiaryCalendar({ diaries, dateList }) {
  const [value, onChange] = useState(new Date());

  // 일기 작성 날짜 리스트 (백엔드에서 받아온 일기 날짜 리스트)

  // 각 날짜 타일에 컨텐츠 추가
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      // 날짜가 dayList에 포함된 경우 하트를 출력, 그렇지 않으면 기본 체크박스를 출력
      if (dateList.includes(moment(date).format('YYYY-MM-DD'))) {
        return <s.FullCheckbox><s.DiaryCheck src = {diaryCheck} /></s.FullCheckbox>;
      } else {
        return <s.EmptyCheckbox />;
      }
    }
    return null;
  };

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
        tileContent={tileContent}
      />
    </s.DiaryCalendar>
  );
}
