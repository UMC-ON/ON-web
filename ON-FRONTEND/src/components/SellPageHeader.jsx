import { NavLink, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

import ToBookmark from "../assets/images/ToBookmark.svg";

const PageHeader = ({ pageName, color = `${theme.title}` }) => {
  const navigate = useNavigate();

  const goBookmark = () => {
    navigate('/scrap');
  };

  const onClickBackButton = () => {
    navigate(-1);
  };
  return (
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
      <PageName style={{ color: `${color}` }}>{pageName}</PageName>
      <Bookmark src = {ToBookmark} onClick={goBookmark} />
    </PageHeaderLayout>
  );
};

export default PageHeader;

const PageHeaderLayout = styled.div`
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
const BackButton = styled.div`
  position: absolute;
  left: 17px;
`;
const PageName = styled.p`
  text-align: center;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Bookmark = styled.img`
    position: relative;
    left: 120px;
`