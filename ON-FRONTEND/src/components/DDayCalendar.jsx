import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import ko from 'date-fns/locale/ko';

const DDayCalendarComponent = ({ selectedDate, handleDateChange, setCalendarOpen, datePickerRef, userId }) => {
  // 상태를 로컬 스토리지 대신 컴포넌트의 상태로 관리
  const [storedDate, setStoredDate] = useState(null);

  useEffect(() => {
    // 컴포넌트가 렌더링될 때 로컬 스토리지에서 날짜를 불러와 상태를 설정
    const savedDate = localStorage.getItem(`dday-date-${userId}`);
    if (savedDate) {
      setStoredDate(new Date(JSON.parse(savedDate)));
    }
  }, [userId]);

  useEffect(() => {
    // 저장된 날짜가 있을 때 dateChange 핸들러를 호출
    if (storedDate) {
      handleDateChange(storedDate);
    }
  }, [storedDate, handleDateChange]);

  const handleDateSelect = (date) => {
    setStoredDate(date);
    handleDateChange(date);

    // 선택된 날짜를 로컬 스토리지에 저장
    localStorage.setItem(`dday-date-${userId}`, JSON.stringify(date));
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

// Styled-components for DDayCalendar
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
