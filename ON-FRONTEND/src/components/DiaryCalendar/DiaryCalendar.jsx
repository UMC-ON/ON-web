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
        tileContent={({ date, view }) => { // 날짜 타일에 컨텐츠 추가하기 (html 태그)
          // 추가할 html 태그를 변수 초기화
          let html = ["2024-07-30", "2024-07-23"];
          // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
          if (html.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            return (
              <>
                <div className="flex justify-center items-center absoluteDiv">
                  🥰
                </div>
              </>
            );
          } /*else {
            return (
              <>
                <div>
                  <input className= 'check' type = "checkbox"></input>
                </div>
              </>
            )
          }*/
          // 무조건 체크박스가 나오도록 설정해서 연도, 월 선택할 때도 밑에 체크박스가 뜸. 수정할 필요 있음.
          // 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
        }}
      />
    </s.DiaryCalendar>
  );
}