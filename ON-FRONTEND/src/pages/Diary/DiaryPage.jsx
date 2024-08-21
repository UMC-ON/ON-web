import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

import BottomTabNav from '../../components/BottomTabNav/BottomTabNav';
import DiaryCalendar from '../../components/DiaryCalendar/DiaryCalendar';
import PageHeader from '../../components/PageHeader/PageHeader';
import DailyDiary from "../../components/DailyDiary";
import DDayCalendar from '../../components/DDayCalendar.jsx';
import DailyDiaryCalendar from "../../components/DailyDiaryCalendar/DailyDiaryCalendar.jsx";

import styled from 'styled-components';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DiaryPage.css';
import ko from "date-fns/locale/ko";
import closeIcon from '../../assets/images/close_button.svg';
import plus_button from '../../assets/images/addButton.svg';

const serverAddress = import.meta.env.VITE_SERVER_ADDRESS;

const Diary = () => {
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [newDiaryVisible, setNewDiaryVisible] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [newDiaryContent, setNewDiaryContent] = useState('');
  const [diaries, setDiaries] = useState([]);
  const datePickerRef = useRef(null);

  useEffect(() => {
    const fetchDiaries = async () => {
      try {
        const response = await axios.get(`${serverAddress}/api/v1/diary/list`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('AToken')}`,
          },
        });
        setDiaries(response.data.result);
        console.log(response.data.result);
      } catch (error) {
        console.error('다이어리 목록을 가져오는 중 오류 발생:', error);
      }
    };
    fetchDiaries();
  }, []);

  useEffect(() => {
    const storedDate = localStorage.getItem('selectedDate1');
    if (storedDate) {
      setSelectedDate1(moment(storedDate, 'YYYY-MM-DD').toDate());
    }
  }, []);

  const handleDateChange1 = async (date) => {
    setSelectedDate1(date);
    setCalendarOpen(false);

    const formattedDate = moment(date).format('YYYY-MM-DD'); // 날짜를 서버에서 요구하는 형식으로 변환

    // 로컬 스토리지에 날짜 저장
    localStorage.setItem('selectedDate1', formattedDate);

    try {
      const response = await axios.post(
        `${serverAddress}/api/v1/diary/startdate`,
        { startDate: formattedDate },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('AToken')}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('서버 응답:', response.data);
    } catch (error) {
      console.error('서버로 날짜 전달 중 오류 발생:', error);
    }
  };

  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
    setShowDatePicker(false); // 달력 닫기
    setNewDiaryVisible(true); // 날짜 선택 후 일기 작성 컨테이너 보이기
  };

  const handleAddDiaryClick = () => {
    setShowDatePicker(true); // 달력을 엽니다.
    setNewDiaryVisible(false); // 일기 작성 컨테이너는 숨깁니다.
  };

  const handleCalendarClick = () => {
    setShowDatePicker(false); // 달력을 숨깁니다.
  };

  const todayDate = moment().format('YYYY.MM.DD');

  const calculateDDay = (date) => {
    if (!date) return '';

    const startOfDay = moment().startOf('day');
    const selectedDay = moment(date).startOf('day');

    const diffDays = selectedDay.diff(startOfDay, 'days');

    if (diffDays === 0) {
      return '오늘';
    } else if (diffDays > 0) {
      return `D-${diffDays}`;
    } else {
      return `D+${Math.abs(diffDays)}`;
    }
  };

  const handleSaveDiary = async () => {
    const formattedDate = moment(selectedDate2).format('YYYY-MM-DD');
  
    try {
      const response = await axios.post(
        `${serverAddress}/api/v1/diary`,
        { 
          date: formattedDate, 
          content: newDiaryContent 
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('AToken')}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('일기 저장 응답:', response.data);
  
      // 저장 성공 후 페이지 새로 고침
      window.location.reload();
    } catch (error) {
      console.error('일기 저장 중 오류 발생:', error);
    }
  };
  

  return (
    <DiaryContainer>
      <PageHeader pageName="나의 일기" />
      <Content>
        <Information>
          <DDay>
            {selectedDate1 ? (
              <DDayText>{calculateDDay(selectedDate1)}</DDayText>
            ) : (
              <DDayCalendar
                selectedDate={selectedDate1}
                handleDateChange={handleDateChange1}
                setCalendarOpen={setCalendarOpen}
                datePickerRef={datePickerRef}
              />
            )}
          </DDay>
          <div>
            <RightContainer>
              <Today>{todayDate}</Today>
              <SubText>나의 교환교</SubText>
              <SchoolContainer>
                <BigText>영국,</BigText>
                <BigText style={{ color: "#3E73B2", marginLeft: "0.5em" }}>King’s College London</BigText>
              </SchoolContainer>
            </RightContainer>
          </div>
        </Information>
        <CalendarContainer>
          <DiaryCalendar diaries={diaries} />
        </CalendarContainer>
        <AddDiary onClick={handleAddDiaryClick}>
          <div>기록 남기기</div>
          <AddButton src={plus_button} />
        </AddDiary>

        {showDatePicker && (
          <BottomTabLayout $height="65vh">
            <TopHeader>
              날짜
            </TopHeader>
            <Close src={closeIcon} onClick={handleCalendarClick} />
            <DailyDiaryCalendar onApply={handleDateChange2} /> {/* DailyDiaryCalendar에만 적용되는 상태 */}
          </BottomTabLayout>
        )}

        {newDiaryVisible && (
          <NewDiaryContainer>
            <NewDiary 
              placeholder="오늘 하루는 어땠나요?"
              value={newDiaryContent}
              onChange={(e) => setNewDiaryContent(e.target.value)} // 사용자가 입력한 내용을 상태에 저장
            />
            <Save onClick={handleSaveDiary}>저장하기</Save>
          </NewDiaryContainer>
        )}

        <DailyDiary diaries={diaries} />
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
  font-family: 'Inter';
  overflow-y: auto; // 필요시 스크롤 허용
  position: relative; // 자식 요소가 absolute일 경우 기준이 될 수 있도록 설정
`;



const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-bottom: 100px; // BottomTabNav 컴포넌트와의 간격을 확보
`;

const Information = styled.div`
  width: 100%;
  height: 30vh;
  position: relative;
`;

const DatePickerWrapper = styled.div`
  position: fixed;  // 화면에 고정되도록 설정
  bottom: 0;  // 화면의 맨 아래에 위치하도록 설정
  left: 0;  // 화면의 왼쪽에 맞춤
  width: 100%;  // 전체 화면 너비를 차지하도록 설정
  background-color: white;  // 배경색 설정
  z-index: 1000;  // 다른 요소들 위에 나타나도록 우선순위 설정
  padding: 10px 0;  // 상하 패딩 추가
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);  // 그림자 추가로 상단에 약간의 분리감을 줌
  border-top: 1px solid #E0E0E0;  // 상단에 경계선 추가
  display: flex;
  justify-content: center;  // DatePicker를 중앙에 위치하도록 설정
`;

const DatePickerStyled = styled(DatePicker)`
  .react-datepicker {
    width: 100%;  // 달력 너비를 전체로 확장
    border: none;  // 테두리 제거
  }
  
  .react-datepicker__header {
    background-color: #f7f8fa;  // 헤더 배경색 변경
    border-bottom: 1px solid #eaeaea;  // 하단에 경계선 추가
  }
  
  .react-datepicker__day--selected {
    background-color: #3E73B2;  // 선택된 날짜 배경색 설정
    color: white;  // 선택된 날짜 텍스트 색상 설정
  }
  
  // 필요에 따라 추가적인 스타일을 설정
`;



const DDay = styled.div`
  position: absolute; // 부모 요소를 기준으로 위치 고정
  width: 130px;
  height: 130px;
  top: 30%; 
  left: 6%;
  font-size: 1.2em !important;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid #DCDFFF;
  z-index: 1; // 다른 요소들 위에 나타나도록 우선순위 설정
  background-color: white; // 필요시 배경색 설정
`;



const DDayText = styled.div`
  font-size: 45px;
  font-weight: 700;
  background: linear-gradient(90deg, #D6EBFF, #C2C7FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;


const Today = styled.div`
  background: ${props => props.theme.lightPurple};
  margin-top: 4em;
  width: 6em;
  height: 1.5em;
  border-radius: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Ensures left alignment for all children
  margin-top: 2.5em;
  margin-left: 11em; // Adjust this value as needed to achieve the desired spacing from the DDay component
`;

const SubText = styled.div`
  margin-top: 1em; // Adjust this value to add some spacing between Today and SubText
  margin-bottom: 0.5em;
`;

const SchoolContainer = styled.div`
  display: flex;
  flex-wrap: wrap; // Ensures that text will wrap if there's not enough space
`;

const BigText = styled.div`
  margin-top: 1vh;
  color: ${props => props.color || '#000000'};
  font-weight: bold;
  font-family: 'Inter-Regular';
  font-size: 1em;
  margin-bottom: 3.5vh;
  margin-left: ${props => props.spacing || '0'};
`;

const CalendarContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 0;
`;

const AddDiary = styled.div`
  width: 30%;
  height: 5vh;
  margin-left: 1.5em;
  margin-top: 1em;
  margin-bottom: 1em;
  background: ${props => props.theme.lightPurple};
  color: white;
  border-radius: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  cursor: pointer; // 클릭 가능하도록 커서 변경
`;

const AddButton = styled.img`
  width: 6vw;
  height: 3vh;
  margin-left: 0.5em;
`;

const NewDiaryContainer = styled.div`
  position: relative;
  width: 90%;
  margin: 10px auto;
`;

const NewDiary = styled.textarea`
  font-size: 14px;
  width: 89%;
  height: 10vh;
  border-radius: 15px;
  border: 0.5px solid ${props => props.theme.lightPurple};
  white-space: pre-wrap;
  text-align: left;
  display: flex;
  flex-direction: column;
  padding: 20px;
  &::placeholder {
    color: #B9B9B9;
    font-size: 13px;
  }
  outline: none;
  resize: none;
`;

const Save = styled.div`
  width: 70px;
  height: 20px;
  border-radius: 9px;
  background: ${props => props.theme.blueGra};
  color: white;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const BottomTabLayout = styled.div`
  width: 100%;
  max-width: 480px;
  height: ${props => props.$height || 'auto'};
  position: fixed;
  bottom: 0;
  border-radius: 14px 14px 0px 0px;
  border: 1px solid white;
  background: #ffffff;
  z-index: 10;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  box-sizing: border-box;
  box-shadow: 0px -1px 4px 0px #e2e2e2;
`;

const TopHeader = styled.div`
  font-size: 12px;
  color: #CCCCCC;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const Close = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;