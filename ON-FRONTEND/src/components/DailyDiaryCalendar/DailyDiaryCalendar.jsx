import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import ko from "date-fns/locale/ko";
import * as s from './DailyDiaryCalendarStyled.jsx';

const DateRangePicker = ({ onApply }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);  // 선택된 날짜를 상태로 저장
  };

  const handleApply = () => {
    if (selectedDate) {
      onApply(selectedDate);  // 선택된 날짜를 적용
    }
  };

  const today = moment().startOf('day').toDate();

  const handleReset = () => {
    setSelectedDate(null);  // 선택된 날짜 초기화
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
    <s.CompanyCalendar>
      <div className="date-range-picker">
        <div className='top-header'>
          <p style={{fontSize: "12px", color: "#CCCCCC", marginTop: "10px"}}></p>
        </div>
        <DatePicker
          locale={ko}
          selected={selectedDate}  // 선택된 날짜를 DatePicker에 전달
          onChange={handleDateChange}  // 날짜 선택 핸들러
          minDate={today}
          inline
          renderCustomHeader={renderCustomHeader}
        />
        <s.Controls>
          <s.ResetButton onClick={handleReset}>초기화</s.ResetButton>
          <s.ApplyButton disabled={!selectedDate} onClick={handleApply}>
            적용
          </s.ApplyButton>
        </s.Controls>
      </div>
    </s.CompanyCalendar>
  );
};

export default DateRangePicker;
