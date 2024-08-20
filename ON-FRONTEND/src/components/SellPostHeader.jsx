import { NavLink, useNavigate } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

import X from '../assets/images/dismiss.svg';

const SellPostHeader = ({ onSubmit }) => {

  const navigate = useNavigate();

  const onClickBackButton = () => {
    navigate(-1);
  };

  return (
    <>
      <PageHeaderLayout>
        <ExitButton src={X} onClick={onClickBackButton} />
        <PostButton onClick={onSubmit}>등록</PostButton> {/* 등록 버튼 클릭 시 onSubmit 호출 */}
      </PageHeaderLayout>
    </>
  );
};

export default SellPostHeader;

// 스타일드 컴포넌트
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

export const ExitButton = styled.img`
  position: absolute;
  left: 17px;
`;

export const PostButton = styled.div`
  position: absolute;
  right: 17px;
  border-radius: 20px;
  width: 4em;
  height: 2em;
  font-size: 14px;
  font-weight: 600;
  background: ${theme.blueGra};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
