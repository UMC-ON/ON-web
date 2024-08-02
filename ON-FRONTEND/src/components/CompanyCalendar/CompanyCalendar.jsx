import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import ko from "date-fns/locale/ko";
import X from "../../assets/images/X.svg";
import * as s from './CompanyCalendarStyled.jsx';

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [calendarOpen, setCalendarOpen] = useState(true);

  const CalendarClose = () => {
    setCalendarOpen(!calendarOpen);
  };

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const today = moment().startOf('day').toDate();

  const handleReset = () => {
    setStartDate(null);
    setEndDate(null);
  };

  const renderCustomHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }) => (
    <s.CalendarHeader>
      <s.HeaderButton onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
        {"<"}
      </s.HeaderButton>
      <s.HeaderTitle>
        {moment(date).format('YYYY.MM')}
      </s.HeaderTitle>
      <s.HeaderButton onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
        {">"}
      </s.HeaderButton>
    </s.CalendarHeader>
  );

  return (
    <>
    {calendarOpen && (
      <s.CompanyCalendar>
      <div className="date-range-picker">
        <div className='top-header'>
          <p style={{fontSize: "12px", color: "#CCCCCC", marginTop: "10px"}}>날짜</p>
          {/* <img src={X} className='dismiss' onClick={CalendarClose} /> */}

        </div>
        <DatePicker
          locale={ko}
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          minDate={today}
          selectsRange
          inline
          renderCustomHeader={renderCustomHeader}
        />
        {/* {startDate && endDate && (
          <div className="selected-date-range">
            {moment(startDate).format('MM/DD')} - {moment(endDate).format('MM/DD')}
          </div>
        )} */}
        <div className="controls">
          <s.ResetButton onClick={handleReset}>초기화</s.ResetButton>
          <s.ApplyButton disabled={!startDate || !endDate}>
            적용
          </s.ApplyButton>
        </div>
      </div>
    </s.CompanyCalendar>
    )}
    </>
    
  );
};

export default DateRangePicker;

/*
날짜 버튼이랑 달력 X버튼이랑 찝힘
그래서 회색 배경도 X버튼 누르면 안 없어짐
그냥 X 버튼을 없애는게 나을까?
*/