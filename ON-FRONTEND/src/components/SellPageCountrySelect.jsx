import React from 'react';
import styled from 'styled-components';


import arrowIcon from '../assets/images/bottomArrow.svg';
import whiteCloseIcon from '../assets/images/whiteCloseIcon.svg';

function SellPageCountrySelect({ countryClick, country, isCountryClicked, updateIsCountryClicked }) {

    const resetCountry = () => {
        updateIsCountryClicked();
    };

  return (
    <>
      <GreyPicker $isCountryClicked={isCountryClicked}>
        <span onClick={countryClick}>
        {country ? `${country}` : '국가'}
        {!isCountryClicked && (
            <Icon src={arrowIcon} />
        )}
        </span>
        {isCountryClicked && (
            <Icon src={whiteCloseIcon} onClick={resetCountry}/>
        )}
      </GreyPicker>
    </>
  );
}

export default SellPageCountrySelect;


const GreyPicker = styled.div`
  background-color: #E8E8E8;
  font-family: 'Inter-Regular';
  font-size: 0.8em;
  padding: 5px;
  border-radius: 18px;
  padding-left: 8px;
  padding-right: 8px;
  margin-right: 8px;
  margin-left: 2px;
  color: ${props => props.$isCountryClicked ? '#FFFFFF' : '#363636'};
  background: ${props => props.$isCountryClicked ?  'linear-gradient(135deg, #C2C7FF, #AD99FF);' : ''};
`;

const Icon = styled.img`
  padding-left: 3px;
`;