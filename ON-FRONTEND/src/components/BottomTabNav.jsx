import { NavLink, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import * as s from './BottomTabNavStyled.jsx';

const BottomTabNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <s.BottomTabLayout>
      {/*홈 버튼*/}
      <s.IconContainer>
        <s.Icon
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="24"
          viewBox="0 0 23 24"
          fill="current"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.0527 0.488142C10.8042 -0.162714 11.9198 -0.162714 12.6713 0.488143L22.0293 8.59239C23.4291 9.80466 22.5717 12.1042 20.72 12.1042H20.362V21.3542C20.362 22.4588 19.4666 23.3542 18.362 23.3542L14.362 23.3542V15.3542C14.362 14.802 13.9143 14.3542 13.362 14.3542H9.362C8.80971 14.3542 8.362 14.802 8.362 15.3542V23.3542L4.36199 23.3542C3.25742 23.3542 2.36199 22.4588 2.36199 21.3542V12.1042H2.00401C0.152235 12.1042 -0.705103 9.80466 0.694704 8.59239L10.0527 0.488142Z"
            fill="current"
          />
        </s.Icon>
        <s.IconTag>홈</s.IconTag>
      </s.IconContainer>
      {/*커뮤니티 버튼*/}
      <s.IconContainer>
        <s.Icon
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="current"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.5638 1.03806C18.515 0.0867791 20.0574 0.0867794 21.0086 1.03806C21.9599 1.98933 21.9599 3.53166 21.0086 4.48294L16.9896 8.50198L19.9887 17.4993C20.086 17.7911 20.01 18.1128 19.7926 18.3302L18.5862 19.5366C18.2127 19.9102 17.5876 19.8332 17.3158 19.3802L13.1141 12.3775L8.95155 16.54C8.85668 16.6349 8.75593 16.7203 8.65047 16.7963L9.86701 19.4726C10.0071 19.7808 9.9413 20.1434 9.70197 20.3828L8.63176 21.453C8.23089 21.8539 7.55302 21.7309 7.31843 21.2148L5.29138 16.7553L0.831858 14.7283C0.315753 14.4937 0.192834 13.8158 0.593706 13.4149L1.66392 12.3447C1.90325 12.1054 2.26593 12.0396 2.57406 12.1797L5.25044 13.3962C5.32639 13.2908 5.4118 13.19 5.50667 13.0951L9.66923 8.93259L2.66645 4.73092C2.21349 4.45915 2.13654 3.83404 2.51006 3.46052L3.71645 2.25413C3.93392 2.03666 4.2556 1.96072 4.54737 2.05798L13.5447 5.0571L17.5638 1.03806Z"
            fill="current"
          />
        </s.Icon>
        <s.IconTag>커뮤니티</s.IconTag>
      </s.IconContainer>
      {/*물품거래 버튼*/}
      <s.IconContainer>
        <s.Icon
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="current"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 2C0 0.895431 0.895431 0 2 0H20C21.1046 0 22 0.895431 22 2C22 3.10457 21.1046 4 20 4H2C0.89543 4 0 3.10457 0 2Z"
            fill="current"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 6C0.895431 6 0 6.89543 0 8V20C0 21.1046 0.89543 22 2 22H20C21.1046 22 22 21.1046 22 20V8C22 6.89543 21.1046 6 20 6H2ZM6.5 8C5.67157 8 5 8.67157 5 9.5C5 10.3284 5.67157 11 6.5 11H15.5C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8H6.5Z"
            fill="current"
          />
        </s.Icon>
        <s.IconTag>물품거래</s.IconTag>
      </s.IconContainer>

      {/*채팅 버튼*/}
      <NavLink to="/chat">
        <s.IconContainer className={currentPath === '/chat' ? 'active' : ''}>
          <s.Icon
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="current"
          >
            <path
              d="M20.6922 14.0072C22.3293 12.5196 23.3327 10.5141 23.3327 8.30769C23.3327 3.71948 18.9933 0 13.6404 0C8.36283 0 4.07043 3.61555 3.95068 8.11454C5.69456 7.07257 7.81501 6.46154 10.102 6.46154C15.3782 6.46154 19.7682 9.71385 20.6922 14.0072Z"
              fill="current"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.7174 15.6924C19.7174 20.2806 15.378 24.0001 10.0251 24.0001C10.0054 24.0001 9.9857 24.0001 9.96604 24C9.96207 24.0001 9.95809 24.0001 9.95408 24.0001H0.500731C-0.0296814 24.0001 -0.195089 23.2829 0.281746 23.0506L3.22832 21.6151C1.44104 20.108 0.332764 18.0112 0.332764 15.6924C0.332764 11.1042 4.67216 7.38477 10.0251 7.38477C15.378 7.38477 19.7174 11.1042 19.7174 15.6924ZM11.3328 15.5001C11.3328 16.3286 10.6612 17.0001 9.83276 17.0001C9.00433 17.0001 8.33276 16.3286 8.33276 15.5001C8.33276 14.6717 9.00433 14.0001 9.83276 14.0001C10.6612 14.0001 11.3328 14.6717 11.3328 15.5001ZM5.83276 17.0001C6.66119 17.0001 7.33276 16.3286 7.33276 15.5001C7.33276 14.6717 6.66119 14.0001 5.83276 14.0001C5.00433 14.0001 4.33276 14.6717 4.33276 15.5001C4.33276 16.3286 5.00433 17.0001 5.83276 17.0001ZM15.3328 15.5001C15.3328 16.3286 14.6612 17.0001 13.8328 17.0001C13.0043 17.0001 12.3328 16.3286 12.3328 15.5001C12.3328 14.6717 13.0043 14.0001 13.8328 14.0001C14.6612 14.0001 15.3328 14.6717 15.3328 15.5001Z"
              fill="current"
            />
          </s.Icon>
          <s.IconTag>채팅</s.IconTag>
        </s.IconContainer>
      </NavLink>
      {/*나의일기 버튼*/}
      <s.IconContainer>
        <s.Icon
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="current"
        >
          <path
            d="M2 4.59375V21H18.4062"
            stroke="#CCCCCC"
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.67663 0C6.26842 0 5.9375 0.33092 5.9375 0.73913V16.2609C5.9375 16.6691 6.26842 17 6.67663 17H22.1984C22.6066 17 22.9375 16.6691 22.9375 16.2609V0.73913C22.9375 0.33092 22.6066 0 22.1984 0H6.67663ZM9.71528 4.40741C9.36754 4.40741 9.08565 4.6893 9.08565 5.03704C9.08565 5.38477 9.36754 5.66667 9.71528 5.66667H19.1597C19.5075 5.66667 19.7894 5.38477 19.7894 5.03704C19.7894 4.6893 19.5075 4.40741 19.1597 4.40741H9.71528ZM9.08565 8.18518C9.08565 7.83745 9.36754 7.55556 9.71528 7.55556H19.1597C19.5075 7.55556 19.7894 7.83745 19.7894 8.18518C19.7894 8.53292 19.5075 8.81481 19.1597 8.81481H9.71528C9.36754 8.81481 9.08565 8.53292 9.08565 8.18518ZM9.71528 10.7037C9.36754 10.7037 9.08565 10.9856 9.08565 11.3333C9.08565 11.6811 9.36754 11.963 9.71528 11.963H16.0116C16.3593 11.963 16.6412 11.6811 16.6412 11.3333C16.6412 10.9856 16.3593 10.7037 16.0116 10.7037H9.71528Z"
            fill="current"
          />
        </s.Icon>
        <s.IconTag>나의일기</s.IconTag>
      </s.IconContainer>
    </s.BottomTabLayout>
  );
};

export default BottomTabNav;
