import React, { useState, useRef } from 'react';
import BottomTabNav from '../../components/BottomTabNav/BottomTabNav';
import DiaryCalendar from '../../components/DiaryCalendar/DiaryCalendar';
import PageHeader from '../../components/PageHeader/PageHeader';
// import DailyDiary from '../../components/DailyDiary';
import styled from 'styled-components';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DiaryPage.css';
import plus_button from '../../assets/images/addButton.svg';

const Diary = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const datePickerRef = useRef(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setCalendarOpen(false); // 날짜 선택 후 달력 닫기
  };

  const handleDateClick = () => {
    setCalendarOpen(!calendarOpen); // 달력 열기/닫기 토글
  };

  const todayDate = moment().format('YYYY.MM.DD');

  const calculateDDay = (date) => {
    if (!date) return '';
    const dDay = Math.abs(moment(date).diff(moment(), 'days'));
    return dDay === 0 ? '오늘' : `D+${dDay}`;
  };

  return (
    <DiaryContainer>
      <PageHeader pageName="나의 일기" />
      <Content>
        <Information>
          <DDay>
            {selectedDate ? `${calculateDDay(selectedDate)}` : <DatePicker
                className='inputDate'
                placeholderText={'날짜 설정'} 
                ref={datePickerRef}
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
                popperModifiers={{
                  offset: {
                    enabled: true,
                    offset: '0px, 10px',
                  },
                }}
                onClickOutside={() => setCalendarOpen(false)}
              />}
          </DDay>
          <div>
            <Today>{todayDate}</Today>
            <RightContainer>
              <SubText>나의 교환교</SubText>
              <SchoolContainer>
                <BigText spacing="1vh">영국, </BigText>
                <BigText color="#3E73B2">King’s College London</BigText>
              </SchoolContainer>
            </RightContainer>
          </div>
        </Information>
        <CalendarContainer>
          <DiaryCalendar />
        </CalendarContainer>
        <AddDiary>
          <div>기록 남기기</div>
          <AddButton src={plus_button} />
        </AddDiary>
        <CustomDiv />
      </Content>
      <BottomTabNav />
    </DiaryContainer>
  );
};

export default Diary;

const DiaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const Information = styled.div`
  width: 100%;
  height: 30vh;
  position: relative;
`;

const DDay = styled.div`
  position: absolute;
  width: 130px;
  height: 130px;
  top: 30%;
  left: 6%;
  font-size: 1.2em !important;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid #DCDFFF; // 이후 border에 그라데이션 추가하기
`;

const Today = styled.div`
  background: ${props => props.theme.lightPurple};
  margin-top: 4em;
  width: 6em;
  height: 1.5em;
  border-radius: 30px;
  margin-left: 10em;
  margin-top: 6em;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightContainer = styled.div`
  margin-top: 1em;
`;

const SubText = styled.div`
  margin-left: 2em;
  margin-bottom: 0.5em;
`;

const SchoolContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 1em;
`;

const BigText = styled.div`
  margin-top: 1vh;
  color: ${props => props.color || '#000000'};
  margin-left: ${props => props.spacing || '0'};
  font-weight: bold;
  font-family: 'Inter-Regular';
  font-size: 1em;
  margin-bottom: 3.5vh;
`;

const CalendarContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const AddDiary = styled.div`
  width: 30%;
  height: 5vh;
  margin: 2em 0; /* 마진 변경 */
  margin-left: 1.5em;
  background: ${props => props.theme.lightPurple};
  color: white;
  border-radius: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
`;

const AddButton = styled.img`
  width: 6vw;
  height: 3vh;
  margin-left: 0.5em;
`;

const CustomDiv = styled.div`
  width: 300px;
  height: 300px;
  background-color: black;
  margin: 2em auto; /* 중앙 정렬을 위해 변경 */
`;

const DailyDiary = styled.div`
  width: 100vw;
  height: 30vh;
  background: black;
  position: relative;
  margin-top: 50%;
`;

/*
D-Day 로직에 문제 있음 -> 다음 달로 넘어가면 날짜 초기화됨, 수정 필요
버튼 + 일기쓰기 페이지 만들기
*/
