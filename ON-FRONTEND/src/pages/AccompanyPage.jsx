import styled from 'styled-components';
import React, { useState } from 'react';
import moment from 'moment';

import AccompanyHomeComponent from '../components/AccompanyHomeComponent';
import DateRangePicker from '../components/CompanyCalendar/CompanyCalendar.jsx';
import closeIcon from '../assets/images/close_button.svg';
import GenderChoice from '../components/GenderChoice.jsx';
import SelectCountry from './SelectCountry/SelectCountry.jsx';

function AccompanyPage() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [isDateClicked, setIsDateClicked] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);

    const [showGender, setShowGender] = useState(false);
    const [gender, setGender] = useState(null);
    const [isGenderClicked, setIsGenderClicked] = useState(false);

    const [showCountry, setShowCountry] = useState(false);
    const [country, setCountry] = useState(null);
    const [isCountryClicked, setIsCountryClicked] = useState(false);

    const handleIsDateClickedChange = () => {
      setIsDateClicked(false);
      setStartDate(null);
      setEndDate(null);
    };

    const resetGenderClick = () => {
      setIsGenderClicked(false);
      setGender(null);
    };

    const resetCountryClick = () => {
      setIsCountryClicked(false);
      setCountry(null);
    };

    const handleResetAll = () => {
      handleIsDateClickedChange();
      resetGenderClick();
      resetCountryClick();
    };

    const handleApplyClick = (start, end) => {
      setStartDate(moment(start).format('MM/DD'));
      setEndDate(moment(end).format('MM/DD'));
      setIsDateClicked(true);
      setShowCalendar(false);
    };

    const handleGetGender = (gender) => {
      setGender(gender);
      setIsGenderClicked(true);
      setShowGender(false);
    };

    const handleGetCountry = (country) => {
      setCountry(country);
      setIsCountryClicked(true);
      setShowCountry(false);
    };

    const handleCalendarClick = () => {
      setShowCalendar(!showCalendar);
    };

    const handleGenderClick = () => {
      setShowGender(!showGender);
    };

    const handleCountryClick = () => {
      setShowCountry(!showCountry);
    };

    return (
      <>
        <AccompanyHomeComponent
          startDate={startDate}
          endDate={endDate}
          isDateClicked={isDateClicked}
          calendarClick={handleCalendarClick}
          updateIsDateClicked={handleIsDateClickedChange}
          genderClick={handleGenderClick}
          gender={gender}
          isGenderClicked={isGenderClicked}
          updateIsGenderClicked={resetGenderClick}
          countryClick={handleCountryClick}
          country={country}
          isCountryClicked={isCountryClicked}
          updateIsCountryClicked={resetCountryClick}
          updateEverything={handleResetAll}
        />
        
        {showCalendar && 
          <>
            <Overlay onClick={handleCalendarClick} />
            <BottomTabLayout $height="53vh">
              <TopHeader>
                날짜
              </TopHeader>
              <Close src={closeIcon} onClick={handleCalendarClick} />
              <DateRangePicker onApply={handleApplyClick} />
            </BottomTabLayout>
          </>
        }

        {showGender && 
          <>
            <Overlay onClick={handleGenderClick} />
            <BottomTabLayout>
              <Close src={closeIcon} onClick={handleGenderClick} />
              <GenderChoice getGender={handleGetGender}/>
            </BottomTabLayout>
          </>
        }

        {showCountry &&
          <SelectCountry closeModal={handleCountryClick} getCountry={handleGetCountry}/>
        }
      </>
    );
}

export default AccompanyPage;

const TopHeader = styled.div`
  font-size: 12px;
  color: #CCCCCC;
  position: absolute;
  top: 20px;
  left: 20px;
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
