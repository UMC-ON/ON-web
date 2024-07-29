import { NavLink, useNavigate } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

import shareIcon from '../assets/images/share_icon.svg';


const AccompanyHeader = () => {

  const navigate = useNavigate();

  const onClickBackButton = () => {
    navigate(-1);
  };

  return (
    <>
    <PageHeaderLayout>

    <BackButton onClick={onClickBackButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
          positions="fixed"
        >
          <path
            d="M8 2L1.8858 7.24074C1.42019 7.63984 1.42019 8.36016 1.8858 8.75926L8 14"
            stroke="#7A7A7A"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </BackButton>

      <RightButton src={shareIcon}/>

    </PageHeaderLayout>
    </>
  );
};

export default AccompanyHeader;


export const PageHeaderLayout = styled.div`
  width: 100%;
  max-width: 480px;
  height: 61px;
  position: fixed;
  z-index: 2;
  display: flex;
  top: 0;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: solid ${theme.lightGray};
  border-width: 0.5px 0;
  box-sizing: border-box;
  padding: 0 17px 0 17px;
`;

export const BackButton = styled.div`
  position: absolute;
  left: 17px;
`;

export const RightButton = styled.img`
  position: absolute;
  right: 17px;
`;