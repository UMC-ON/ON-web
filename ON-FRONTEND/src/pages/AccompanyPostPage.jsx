import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import moment from 'moment';

import postIcon from '../assets/images/writepost_icon.svg';
import greyPlusButton from '../assets/images/greyPlusButton.svg';
import greyMinusButton from '../assets/images/greyMinusButton.svg';
import minusButton from '../assets/images/minusButton.svg';
import plusButton from '../assets/images/plusButton.svg';
import closeIcon from '../assets/images/close_button.svg';
import purplePlusButton from '../assets/images/purplePlusButton.svg';

import CustomCheckbox from '../components/CustomCheckBox';
import CameraBottom from '../components/CameraBottom';
import DateRangePicker from '../components/CompanyCalendar/CompanyCalendar.jsx';
import SelectCountry from './SelectCountry/SelectCountry.jsx';
import SelectCity from './SelectCity/SelectCity.jsx';


function AccompanyPostPage() {
    const [ageChecked, setAgeChecked] = useState(false);
    const [schoolChecked, setSchoolChecked] = useState(false);


    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [daysDifference, setDaysDifference] = useState(0);
    const [limitDays, setLimitDays] = useState(0);
    const [isDateClicked, setIsDateClicked] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [personValue, setPersonValue] = useState(0);

    const [showCountry, setShowCountry] = useState(false);
    const [country, setCountry] = useState(null);
    const [isCountryClicked, setIsCountryClicked] = useState(false);

    const [showCity, setShowCity] = useState(false);
    const [city, setCity] = useState(null);

    const [showCity2, setShowCity2] = useState(false);
    const [city2, setCity2] = useState(null);

    const [isCityClicked, setIsCityClicked] = useState(false);
    const [isCityClicked2, setIsCityClicked2] = useState(false);

    const minusSrc = (daysDifference == 0) ? greyMinusButton : minusButton;
    const plusSrc = (daysDifference == limitDays) ? greyPlusButton : plusButton;

    const handlePerson = (event) => {
      const newValue = event.target.value;
      if (!isNaN(newValue) && newValue.trim() !== '') {
        setPersonValue(parseInt(newValue, 10)); 
      } else {
        setPersonValue(0); 
      }
    };

    const handleChange = (event) => {
      const newValue = event.target.value;
      if (!isNaN(newValue) && newValue.trim() !== '') {
        if (newValue <= limitDays)
        {
          setDaysDifference(parseInt(newValue, 10)); 
        }
        else
        {
          setDaysDifference(limitDays);
        }
      } else {
        setDaysDifference(0); 
      }
    };

    const increaseDays = () => {
      if (daysDifference < limitDays)
      {
        setDaysDifference(daysDifference+1);
        console.log("Limit", limitDays);
        console.log("Days", daysDifference);
      }
    };

    const decreaseDays = () => {
      if (daysDifference > 0)
        {
          setDaysDifference(daysDifference-1);
          console.log("Limit", limitDays);
          console.log("Days", daysDifference);
        }
    };

    const handleApplyClick = (start, end) => {
      setStartDate(moment(start).format('YYYY/MM/DD'));
      setEndDate(moment(end).format('YYYY/MM/DD'));

      const startMoment = moment(start);
      const endMoment = moment(end);
      const difference = endMoment.diff(startMoment, 'days');
      setDaysDifference(difference+1);
      setLimitDays(difference+1);
      setIsDateClicked(true);
      setShowCalendar(false);
    };

    const handleGetCountry = (country) => {
      setCountry(country);
      setIsCountryClicked(true);
      setShowCountry(false);
    };

    const handleGetCity = (city) => {
      setCity(city);
      setIsCityClicked(true);
      setShowCity(false);
    };

    const handleGetCity2 = (city) => {
      setCity2(city);
      setIsCityClicked2(true);
      setShowCity2(false);
    };

    const checkAge = (e) => {
      setAgeChecked(e.target.checked);
    };

    const checkSchool = (e) => {
      setSchoolChecked(e.target.checked);
    };

    const navigate = useNavigate();

    const onClickBackButton = () => {
      navigate(-1);
    };

    const handleCalendarClick = () => {
      setShowCalendar(!showCalendar);
    };

    const handleCountryClick = () => {
      setShowCountry(!showCountry);
    };

    const handleCityClick = () => {
      setShowCity(!showCity);
    };

    const handleCityClick2 = () => {
      setShowCity2(!showCity2);
    };
    
    return (
      <>
        <RightContainer>
            <GreyButton onClick={onClickBackButton}>취소</GreyButton>
            <BlueButton>등록</BlueButton>
        </RightContainer>

        <LeftContainer>
            <Title>
                여행 동행 구하기
            </Title>
            <Left>
                <GreyText>
                    정보를 수정하려면 편집 버튼(
                </GreyText>
                <SmallIcon src={postIcon} $top="10px"/>
                <GreyText>
                    )을 눌러 입력해 주세요. 
                </GreyText>
            </Left>
        </LeftContainer>



        <BigContainer>
            <BlueContainer>
                <Left $bottom="5px">
                    <BlackText>나이 :</BlackText>
                    <BlackText $isChecked={ageChecked}>22세</BlackText>
                    <CustomCheckbox checked={ageChecked} onChange={checkAge} />
                    <GreyText $size="0.7rem" $left="5px" $top="10px">나이 비공개</GreyText>
                </Left>
                <Left $bottom="5px">
                    <BlackText>현재 국가 : </BlackText>
                    {!isCountryClicked && (
                      <CircleContainer onClick={handleCountryClick}>독일
                      <SmallIcon src={postIcon} $left="5px"/>
                      </CircleContainer>
                    )}
                    {isCountryClicked && (
                      <CircleContainer onClick={handleCountryClick}>{`${country}`}
                      <SmallIcon src={postIcon} $left="5px"/>
                      </CircleContainer>
                    )}
                </Left>
                <Left $bottom="5px">
                    <BlackText>파견교 : </BlackText>
                    <BlackText $isChecked={schoolChecked} $size="0.8rem">King's College London</BlackText>
                    <CustomCheckbox checked={schoolChecked} onChange={checkSchool} />
                    <GreyText $size="0.7rem" $left="5px" $top="10px">파견교 비공개</GreyText>
                </Left>
                <Left $bottom="5px">
                    <BlackText>모집 인원 : </BlackText>
                    <Input $width="12px" onChange={handlePerson} value={personValue}/>
                    <GreyText $left="3px">명</GreyText>
                </Left>
                <Left $bottom="5px">
                    <BlackText>여행 지역 : </BlackText>
                    {!isCityClicked && (
                      <PlusButton src={plusButton} onClick={handleCityClick}/>
                    )}
                    {isCityClicked && (
                      <>
                      <CircleContainer onClick={handleCityClick}>{`${city}`}
                      <SmallIcon src={postIcon} $left="5px"/>
                      </CircleContainer>
                        {!isCityClicked2 && (
                          <PlusButton src={plusButton} onClick={handleCityClick2}/>
                        )}
                        {isCityClicked2 && (
                          <CircleContainer onClick={handleCityClick2}>{`${city2}`}
                          <SmallIcon src={postIcon} $left="5px"/>
                          </CircleContainer>
                        )}
                      </>
                    )}
                </Left>
                <Left $bottom="5px">
                    <BlackText>예상 일정 : </BlackText>
                    {!isDateClicked && (
                      <PlusButton onClick={handleCalendarClick} src={plusButton}/>
                    )}
                    {isDateClicked && (
                      <>
                        <CircleContainer onClick={handleCalendarClick}>{`${startDate}`}</CircleContainer>
                        <GreyText $left="6px">~</GreyText>
                        <CircleContainer onClick={handleCalendarClick}>{`${endDate}`}</CircleContainer>
                        <GreyText $left="6px">사이</GreyText>
                      </>
                    )}
                </Left>
                    {isDateClicked && (
                      <Left>
                        <MarginLeft/>
                        <CircleButton src={minusSrc} onClick={decreaseDays}/>
                        <Input $width="20px" $left="8px" value={daysDifference.toString()} onChange={handleChange}/>
                        <CircleButton src={plusSrc} onClick={increaseDays}/>
                        <GreyText $left="6px">일</GreyText>
                      </Left>
                    )}
            </BlueContainer>
        </BigContainer>

        {showCalendar && 
          <>
            <Overlay onClick={handleCalendarClick} />
            <BottomTabLayout>
              <Close src={closeIcon} onClick={handleCalendarClick} />
              <TopHeader>
                날짜
              </TopHeader>
              <LabelText>여행 가고 싶은 기간을 설정해 주세요!</LabelText>
              <LabelText2>일정이 확정되지 않았다면 범위를 넓게 설정할 수 있어요.</LabelText2>
              <DateRangePicker onApply={handleApplyClick}/>
            </BottomTabLayout>
          </>
        }

        { showCountry &&
          <>
            <SelectCountry closeModal={handleCountryClick} getCountry={handleGetCountry}/>
          </>
        }

        { showCity &&
          <>
            <SelectCity closeModal={handleCityClick} getCity={handleGetCity}/>
          </>
        }

        { showCity2 &&
          <>
            <SelectCity closeModal={handleCityClick2} getCity={handleGetCity2}/>
          </>
        }

        <BigContainer>
            <Left>
                <Title $size="1.4rem">
                    제목
                </Title>
            </Left>
        </BigContainer>
        <GreyInput placeholder='제목을 입력해 주세요.' $height="2.5vh"/>

        <BigContainer>
            <Left>
                <Title $size="1.4rem">
                    요청사항
                </Title>
            </Left>
        </BigContainer>

        <GreyInput placeholder='요청사항과 동행인에게 하고 싶은 말을 적어주세요. ' $height="30vh"/>

        <Space/>
        <CameraBottom/>
      </>
    );
}

export default AccompanyPostPage;

const TopHeader = styled.div`
  font-size: 12px;
  color: #CCCCCC;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const LeftSpace = styled.section`
  margin-left: 27%;
`;

const Space = styled.section`
  margin-bottom: 10vh;
`;

const CircleContainer = styled.section`
  background: #868EE8;
  border-radius: 20px;
  font-size: 0.8rem;
  color: white;
  padding: 5px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-top: 5px;
  padding-left: 6px;
`;

const CircleContainer2 = styled.section`
  background: linear-gradient(to right bottom, #C2C7FF, #AD99FF);
  border-radius: 20px;
  font-size: 0.8rem;
  color: white;
  padding: 5px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-top: 5px;
  padding-left: 6px;
`;

const Input = styled.input`
    margin-left: ${props => props.$left || '10px'};
    border-radius: 5px;
    border: 1px solid #CABCCB;
    width: ${props => props.$width || '25px'};
    margin-top: 4px;
    height: 18px;
    color: #838383;
    font-size: 0.8rem;
    padding-left: 5px;
    font-family: Inter;
    background-color: white;
`;

const GreyInput = styled.textarea`
    border-radius: 10px;
    border: 1px solid #CABCCB;
    color: black;
    font-size: 1rem;
    padding: 10px;
    font-family: Inter;
    width: 83%;
    margin-top: 1vh;
    margin-bottom: 3vh;
    height: ${props => props.$height || 'auto'};
    background-color: white;
`;


const BigContainer = styled.section`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const SmallIcon = styled.img`
  padding-top: ${props => props.$top || '0'};
  padding-left: ${props => props.$left || '0'};
`;

const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: ${props => props.$bottom || '0'};
`;

const LeftContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1.5rem;
`;

const RightContainer = styled.div`
  margin-top: 3vh;
  display: flex;
  justify-content: flex-end;
`;



const GreyButton = styled.button`
  border-radius: 20px;
  background-color: #E4E4E4;
  color: white;
  text-align: center;
  font-family: Inter;
  font-size: 1em;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 8px;
`;


const BlueButton = styled.button`
  border-radius: 20px;
  background: linear-gradient(135deg, #C2C7FF, #AD99FF);
  color: white;
  font-family: Inter;
  font-size: 1em;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 20px;
`;

const BlueContainer = styled.div`
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(214,235,255,0.2), rgba(194,199,255,0.2));
  width: 100%;
  padding-top: 3vh;
  padding-bottom: 4vh;
  margin-bottom: 4vh;
`;

const Title = styled.div`
  color: black;
  font-family: Inter;
  font-size: ${props => props.$size || '1.563rem'};
  font-weight: bold;
`;

const GreyText = styled.div`
  color: ${props => props.$color || '#838383'};
  font-family: Inter;
  font-size: ${props => props.$size || '0.875rem'};
  margin-top: ${props => props.$top || '1vh'};
  margin-left: ${props => props.$left || '0'};
`;

const BlackText = styled.div`
  color: black;
  font-family: Inter;
  font-size: ${props => props.$size || '1rem'};
  padding-left: 1rem;
  margin-top: 0.5rem;
  text-decoration: ${({ $isChecked }) => ($isChecked ? 'line-through' : 'none')};
`;

const LabelText = styled.div`
  font-family: Inter;
  font-weight: bold;
  color: #3E73B2;
  position: absolute;
  top: 50px;
  left: 20px;
  font-size: 0.85em;
`;

const LabelText2 = styled.div`
  font-family: Inter;
  color: #7A7A7A;
  position: absolute;
  top: 67px;
  left: 20px;
  font-size: 0.85em;
`;

const PlusButton = styled.img`
  margin-top: 7px;
  margin-left: 7px;
`;


const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
`;

const Close = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const BottomTabLayout = styled.div`
  width: 100%;
  height: 59vh;
  max-width: 480px;
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


const CircleButton = styled.img`
  margin-left: 8px;
`;


const MarginLeft = styled.div`
  margin-left: 90px;
  margin-top: 30px;
`;