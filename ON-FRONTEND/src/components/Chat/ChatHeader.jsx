import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import * as s from './ChatHeaderStyled.jsx';
import theme from '../../styles/theme';

const ChatHeader = ({ user, receiver, pointColor, isAccompany }) => {
  const navigate = useNavigate();

  const onClickBackButton = () => {
    navigate(-1);
  };

  const pointColorOpacity = (e) => {
    return `${pointColor.replace('1)', ` ${e})`)}`;
  };

  const handleComplete = () => {}; //해당 함수 구현하기
  return (
    <s.ChatHeaderLayout color={pointColorOpacity(0.4)}>
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
            stroke={isAccompany ? '#fff' : '#7A7A7A'}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </s.BackButton>

      <s.PageName style={{ color: isAccompany ? '#ffffff' : '#ABB4FF' }}>
        {receiver}
      </s.PageName>

      {user === 2 && (
        <s.CompleteBtn onClick={handleComplete}>
          {isAccompany ? '모집 완료' : '거래 완료'}
        </s.CompleteBtn>
      )}
    </s.ChatHeaderLayout>
  );
};

export default ChatHeader;
