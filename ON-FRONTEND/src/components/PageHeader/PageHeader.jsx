import { NavLink, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import * as s from './PageHeaderStyled.jsx';

const PageHeader = ({ pageName }) => {
  const navigate = useNavigate();

  const onClickBackButton = () => {
    navigate(-1);
  };
  return (
    <s.PageHeaderLayout>
      <s.BackButton onClick={onClickBackButton}>
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
      </s.BackButton>
      <s.PageName>{pageName}</s.PageName>
    </s.PageHeaderLayout>
  );
};

export default PageHeader;
