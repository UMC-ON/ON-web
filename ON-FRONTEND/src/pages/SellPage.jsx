import styled from 'styled-components';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import item from "../assets/images/item.svg";
import icon from "../assets/images/item_icon.svg";
import arrowIcon from '../assets/images/bottomArrow.svg';
import search_icon from '../assets/images/search_icon.svg';
import pencilImg from '../assets/images/pencilIcon.svg';

import SellPageHeader from '../components/SellPageHeader';
import ItemList from '../components/ItemList';
import TransactionPicker from "../components/TransactionPicker";

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
        title: '체크하면 안나와야됨',
        time: '10분 전',
        how: '직거래',
        now: '거래완료',
        where: '독일 베를린',
        icon: icon,
        nickname: '루이',
        id: 'fndl333',
        price: '5000'
    },        
];

function SellPage() {
  const [showAvailable, setShowAvailable] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState('');
  const [isPickerVisible, setIsPickerVisible] = useState(false); // Picker의 가시성 상태

  const navigate = useNavigate();

  const handleCheckClick = () => {
    setShowAvailable(!showAvailable);
  };

  const handleTransactionChange = (transaction) => {
    setSelectedTransaction(transaction);
    setIsPickerVisible(false); // 선택 후 Picker 숨기기
  };

  const togglePickerVisibility = () => {
    setIsPickerVisible(!isPickerVisible);
  };

  const filteredItems = items
    .filter(item => !showAvailable || item.now !== '거래완료')
    .filter(item => !selectedTransaction || item.how === selectedTransaction);

  const goPost = () => {
    navigate('./post');
  };

  return (
    <>
      <SellPageHeader pageName={'거래하기'} />
      <Space /><br />
      <SearchContainer>
        <Search placeholder='국가 / 물품으로 검색해 보세요.' />
        <SearchIcon src={search_icon} />
      </SearchContainer>
      <br /><br />
      <FlexContainer>
        <Span>
          <GreyPicker onClick={togglePickerVisibility}>
            거래방식 
            <Icon src={arrowIcon} />
          </GreyPicker>
          <GreyPicker>
            국가
            <Icon src={arrowIcon} />
          </GreyPicker>
          <Available>
            <Check onClick={handleCheckClick} checked={showAvailable} />
            <span>거래 가능 물품만 보기</span>
          </Available>
        </Span>
      </FlexContainer><br />
      <ItemList items={filteredItems} />
      <WriteButton onClick={goPost}>
        <img src={pencilImg} alt="pencil icon" />
        글쓰기
      </WriteButton>

      {/* 거래방식 선택 Picker 표시
      {isPickerVisible && (
        <PickerOverlay>
          <PickerContainer>
            <PickerHeader>
              <Title>거래방식</Title>
              <CloseButton onClick={() => setIsPickerVisible(false)}>×</CloseButton>
            </PickerHeader>
            <ButtonContainer>
              <PickerButton
                selected={selectedTransaction === '직거래'}
                onClick={() => handleTransactionChange('직거래')}
              >
                직거래
              </PickerButton>
              <PickerButton
                selected={selectedTransaction === '택배거래'}
                onClick={() => handleTransactionChange('택배거래')}
              >
                택배거래
              </PickerButton>
            </ButtonContainer>
            <ActionContainer>
              <ResetButton onClick={() => setSelectedTransaction('')}>
                초기화
              </ResetButton>
              <ApplyButton
                disabled={!selectedTransaction}
                onClick={() => setIsPickerVisible(false)}
              >
                적용
              </ApplyButton>
            </ActionContainer>
          </PickerContainer>
        </PickerOverlay>
      )} */}
    </>
  );
}

export default SellPage;

const Space = styled.div`
  margin-top: 7vh;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 96%;
  margin: 0 auto;
`;

const Bookmark = styled.img`
  z-index: 3;

`

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
  box-shadow: 0 4px 8px rgba(134, 142, 232, 0.3);
  border: 0.1px rgba(255, 255, 255, 0.1);
  outline: none;
`;

const SearchIcon = styled.img`
  position: absolute;
  right: 20px;
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

const Available = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #7A7A7A;
  margin-left: 14vw;
  width: 160px;
`;

const Check = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid transparent;
  background: ${({ checked }) => checked 
    ? "linear-gradient(135deg, #c2c7ff, #ad99ff)" 
    : "#E8E8E8"};
  margin-right: 5px;
  cursor: pointer;
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
  left: 50%;
  transform: translateX(-50%);
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

const PickerOverlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PickerContainer = styled.div`
  background-color: #FFFFFF;
  border-radius: 20px;
  width: 90%;
  max-width: 400px;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const PickerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  line-height: 24px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PickerButton = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #A7A7A7;
  background-color: ${({ selected }) => selected ? '#E5E6FF' : '#FFFFFF'};
  color: ${({ selected }) => selected ? '#5F5FD9' : '#000000'};
  cursor: pointer;

  &:hover {
    background-color: #E5E6FF;
  }
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ResetButton = styled.button`
  background: none;
  border: none;
  color: #5F5FD9;
  cursor: pointer;
`;

const ApplyButton = styled.button`
  background-color: #5F5FD9;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
`;
