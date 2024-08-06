import styled from 'styled-components';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import item from "../assets/images/item.svg";
import icon from "../assets/images/item_icon.svg";
import arrowIcon from '../assets/images/bottomArrow.svg';
import search_icon from '../assets/images/search_icon.svg';
import pencilImg from '../assets/images/pencilIcon.svg';

import PageHeader from '../components/PageHeader/PageHeader';
import ItemList from '../components/ItemList';

const items = [
    {
        image: item,
        title: '작은 냄비',
        time: '10분 전',
        how: '직거래',
        now: '거래가능',
        where: '독일 베를린',
        icon: icon,
        nickname: '루이',
        id: 'fndl333',
        price: '나눔'
    },
    {
        image: item,
        title: '작은 냄비',
        time: '10분 전',
        how: '직거래',
        now: '거래가능',
        where: '독일 베를린',
        icon: icon,
        nickname: '루이',
        id: 'fndl333',
        price: '나눔'
    },    
    {
        image: item,
        title: '작은 냄비',
        time: '10분 전',
        how: '직거래',
        now: '거래가능',
        where: '독일 베를린',
        icon: icon,
        nickname: '루이',
        id: 'fndl333',
        price: '나눔'
    },    
    {
        image: item,
        title: '작은 냄비',
        time: '10분 전',
        how: '직거래',
        now: '거래가능',
        where: '독일 베를린',
        icon: icon,
        nickname: '루이',
        id: 'fndl333',
        price: '나눔'
    },
    {
        image: item,
        title: '작은 냄비',
        time: '10분 전',
        how: '직거래',
        now: '거래가능',
        where: '독일 베를린',
        icon: icon,
        nickname: '루이',
        id: 'fndl333',
        price: '나눔'
    },
    {
        image: item,
        title: '작은 냄비',
        time: '10분 전',
        how: '직거래',
        now: '거래가능',
        where: '독일 베를린',
        icon: icon,
        nickname: '루이',
        id: 'fndl333',
        price: '5000'
    },        
];

function SellPage() {
  const navigate = useNavigate();
  const goPost = () => {
    navigate('./post');
  };

  return (
    <>
      <PageHeader pageName={'거래하기'} />
      <Space /><br />
      <SearchContainer>
        <Search placeholder='국가 / 물품으로 검색해 보세요.' />
        <SearchIcon src={search_icon} />
      </SearchContainer>
      <br /><br />
      <FlexContainer>
        <Span>
          <GreyPicker>
            국가 
            <Icon src={arrowIcon} />
          </GreyPicker>
          <GreyPicker>
            거래 여부
            <Icon src={arrowIcon} />
          </GreyPicker>
          <GreyPicker>
            거래 방식
            <Icon src={arrowIcon} />
          </GreyPicker>
        </Span>
      </FlexContainer><br />
      <ItemList items={items} />
      <WriteButton onClick={goPost}>
        <img src={pencilImg} alt="pencil icon" />
        글쓰기
      </WriteButton>
    </>
  );
}

export default SellPage;

const Space = styled.div`
  margin-top: 7vh;
`;

const SmallSpace = styled.div`
  margin-top: 3vh;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 96%;
  margin: 0 auto;
`;

const Search = styled.textarea`
  margin: 0 auto;
  width: 90%;
  padding: 8px;
  border-radius: 18px;
  color: #838383;
  height: 15px;
  display: flex;
  align-items: center;
  margin-left: 1em;
  box-shadow: 0 4px 8px rgba(134, 142, 232, 0.3); /* #868EE8 with 30% opacity */
  border: 0.1px rgba(255, 255, 255, 0.1);
  outline: none;
`;


const SearchIcon = styled.img`
  position: absolute;
  right: 20px; // Adjust the value to position the icon correctly
  top: 50%;
  transform: translateY(-50%);
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  margin-left: 1em;
`;

const Span = styled.span`
  display: flex;
  align-items: center; 
`;

const GreyPicker = styled.button`
  background-color: #E8E8E8;
  font-family: 'Inter-Regular';
  font-size: 0.8em;
  padding: 3px;
  border-radius: 18px;
  padding-left: 8px;
  padding-right: 8px;
  margin-right: 8px;
  color: #363636;
`;

const Icon = styled.img`
  padding-left: 3px;
`;

const WriteButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 70px;
  left: 50%; /* 화면의 가로 중앙에 배치 */
  transform: translateX(-50%); /* 자신의 너비의 50%만큼 왼쪽으로 이동 */
  border-radius: 55px;
  border: none;
  width: 148px;
  height: 50px;
  padding: 15px 26px;
  flex-shrink: 0;
  background: linear-gradient(135deg, #c2c7ff, #ad99ff);
  color: white;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  z-index: 2;
  border: 1px solid #CCCCCC;
`;
