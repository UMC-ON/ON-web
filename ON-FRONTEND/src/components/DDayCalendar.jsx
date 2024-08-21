import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import ko from 'date-fns/locale/ko';

const DDayCalendarComponent = ({ selectedDate, handleDateChange, setCalendarOpen, datePickerRef, userId }) => {
  const [storedDate, setStoredDate] = useState(null);

  useEffect(() => {
    // 저장된 날짜가 있을 때 dateChange 핸들러를 호출
    if (storedDate) {
      handleDateChange(storedDate);
    }
  }, [storedDate, handleDateChange]);

  const handleDateSelect = (date) => {
    setStoredDate(date);
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
  position: relative;
`;

const DatePickerWrapper = styled.div`
  .inputDate {
    width: 100%;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 4px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Arrow = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const HeaderDate = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
