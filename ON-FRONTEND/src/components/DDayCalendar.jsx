// DDayCalendarComponent.jsx
import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import ko from 'date-fns/locale/ko';

const DDayCalendarComponent = ({ selectedDate, handleDateChange, setCalendarOpen, datePickerRef }) => {
  return (
    <DDayCalendar>
      <DatePickerWrapper>
        <DatePicker
          showPopperArrow={false}
          locale={ko}
          className='inputDate'
          placeholderText={'날짜 설정'}
          ref={datePickerRef}
          selected={selectedDate}
          onChange={handleDateChange}
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



// import React from 'react';
// import styled from 'styled-components';
// import DatePicker from 'react-datepicker';
// import moment from 'moment';
// import ko from 'date-fns/locale/ko';
// import axios from 'axios';

// const DDayCalendarComponent = ({ selectedDate, handleDateChange, setCalendarOpen, datePickerRef }) => {

//   const handleDateSelection = async (date) => {
//     // 날짜가 변경될 때마다 부모 컴포넌트에 변경 사항을 전달
//     handleDateChange(date);

//     // 서버에 POST 요청 보내기
//     try {
//       const response = await axios.post('/api/v1/diary/startdate', {
//         startDate: moment(date).format('YYYY-MM-DD'),
//       });

//       console.log('서버 응답:', response.data);
//     } catch (error) {
//       console.error('날짜 저장 중 오류 발생:', error);
//     }
//   };

//   return (
//     <DDayCalendar>
//       <DatePickerWrapper>
//         <DatePicker
//           showPopperArrow={false}
//           locale={ko}
//           className='inputDate'
//           placeholderText={'날짜 설정'}
//           ref={datePickerRef}
//           selected={selectedDate}
//           onChange={handleDateSelection} // 날짜 선택 시 처리
//           dateFormat="yyyy-MM-dd"
//           renderCustomHeader={({
//             date,
//             decreaseMonth,
//             increaseMonth,
//           }) => (
//             <HeaderContainer>
//               <Arrow onClick={decreaseMonth}>{'<'}</Arrow>
//               <HeaderDate>{moment(date).format('YYYY.MM')}</HeaderDate>
//               <Arrow onClick={increaseMonth}>{'>'}</Arrow>
//             </HeaderContainer>
//           )}
//           popperModifiers={{
//             offset: {
//               enabled: true,
//               offset: '0px, 10px',
//             },
//           }}
//           onClickOutside={() => setCalendarOpen(false)}
//         />
//       </DatePickerWrapper>
//     </DDayCalendar>
//   );
// };

// export default DDayCalendarComponent;


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
