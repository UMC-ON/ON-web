import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import ko from 'date-fns/locale/ko';

const DDayCalendarComponent = ({ selectedDate, handleDateChange, setCalendarOpen, datePickerRef }) => {
  const [storedDate, setStoredDate] = useState(() => {
    const savedDate = localStorage.getItem('dday-date');
    return savedDate ? new Date(JSON.parse(savedDate)) : null;
  });

  useEffect(() => {
    if (storedDate) {
      handleDateChange(storedDate);
    }
  }, [storedDate, handleDateChange]);

  const handleDateSelect = (date) => {
    localStorage.setItem('dday-date', JSON.stringify(date));
    handleDateChange(date);
  };

  return (
    <DDayCalendar>
      <DatePickerWrapper>
        <DatePicker
          showPopperArrow={false}
          locale={ko}
          className='inputDate'
          placeholderText={'날짜 설정'}
          ref={datePickerRef}
          selected={storedDate || selectedDate}
          onChange={handleDateSelect}
          dateFormat="yyyy-MM-dd"
          renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
          }) => (
            <HeaderContainer>
              <Arrow onClick={decreaseMonth}>{'<'}</Arrow>
              <HeaderDate>{moment(date).format('YYYY.MM')}</HeaderDate>
              <Arrow onClick={increaseMonth}>{'>'}</Arrow>
            </HeaderContainer>
          )}
          popperModifiers={{
            offset: {
              enabled: true,
              offset: '0px, 10px',
            },
          }}
          onClickOutside={() => setCalendarOpen(false)}
        />
      </DatePickerWrapper>
    </DDayCalendar>
  );
};

export default DDayCalendarComponent;




const DDayCalendar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 2;
  
  
`;

const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 2;
  .react-datepicker__day--outside-month {
  visibility: hidden;
  }
  

  .react-datepicker__header {
  background: white;
  border: none;
  };

  
  
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  background: white;
`;

const HeaderDate = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #3E73B2;
  margin: 0 4rem;
  
`;

const Arrow = styled.div`
  cursor: pointer;
  font-size: 18px;
`;
