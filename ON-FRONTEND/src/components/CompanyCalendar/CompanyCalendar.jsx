import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import ko from "date-fns/locale/ko";
import * as s from './CompanyCalendarStyled.jsx';

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const today = moment().startOf('day').toDate();

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
        {startDate && endDate && (
          <div className="selected-date-range">
            {moment(startDate).format('MM/DD')} - {moment(endDate).format('MM/DD')}
          </div>
        )}
      </div>
    </s.CompanyCalendar>
  );
};

export default DateRangePicker;
