import React from 'react';
import styled from 'styled-components';

import postIcon from '../assets/images/writepost_icon.svg';
import whiteCloseIcon from '../assets/images/whiteCloseIcon.svg';

import theme from '../styles/theme';

function SellPostCitySelect({ cityClick, city, isCityClicked, updateIsCityClicked }) {

    const resetCity= () => {
        updateIsCityClicked();
    };

  return (
    <>
      <GreyPicker $isCityClicked={isCityClicked}>
        <span onClick={cityClick}>
        {city ? `${city}` : '도시'}
        {!isCityClicked && (
            <Icon src={postIcon} />
        )}
        </span>
        {isCityClicked && (
            <Icon src={whiteCloseIcon} onClick={resetCity}/>
        )}
      </GreyPicker>
    </>
  );
}

export default SellPostCitySelect;


const GreyPicker = styled.div`
  background: ${theme.purpleGra};
  font-family: 'Inter-Regular';
  font-size: 0.8em;
  padding: 5px;
  border-radius: 18px;
  padding-left: 8px;
  padding-right: 8px;
  margin-right: 8px;
  margin-left: 2px;
  color: white;
  background: ${props => props.$isCityClicked ?  'linear-gradient(135deg, #C2C7FF, #AD99FF);' : ''};
  height: 1.5em;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  padding-left: 5px;
`;