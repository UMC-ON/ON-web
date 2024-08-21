import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import arrowIcon from '../assets/images/bottomArrow.svg';
import search_icon from '../assets/images/search_icon.svg';
import pencilImg from '../assets/images/pencilIcon.svg';
import whiteCloseIcon from '../assets/images/whiteCloseIcon.svg';

import SellPageHeader from '../components/SellPageHeader';
import ItemList from '../components/ItemList';
import TransactionPicker from "../components/TransactionPicker";
import SelectCountry from './SelectCountry/SelectCountry.jsx';
import SellPageCountrySelect from '../components/SellPageCountrySelect.jsx';
import { getData } from '../api/Functions';
import { GET_FILTER_ITEM, GET_ITEM_SEARCH } from '../api/urls';

function SellPage() {
  const [showAvailable, setShowAvailable] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState('');
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [tempTransaction, setTempTransaction] = useState(''); 
  const [showCountry, setShowCountry] = useState(false);
  const [country, setCountry] = useState(null);
  const [isCountryClicked, setIsCountryClicked] = useState(false);
  const [items, setItems] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState(''); // 검색어 상태 추가

  const navigate = useNavigate();
  const serverAddress = import.meta.env.VITE_SERVER_ADDRESS;
  

  // Fetch items based on filters
  const fetchItems = async (dealType = '', currentCountry = '') => {
    try {
      const params = {};

      if (dealType) params.dealType = dealType === '직거래' ? 'DIRECT' : 'DELIVERY';
      if (currentCountry) params.currentCountry = currentCountry;
      params.dealStatus = showAvailable ? 'AWAIT' : '';

      const response = await getData(
        GET_FILTER_ITEM, {
        Authorization: `Bearer ${localStorage.getItem('AToken')}`,
      }, params);

      if (response) {
        setItems(response.data);
      }
    } catch (error) {
      console.error('필터링 중 오류 발생:', error);
    }
  };

  // Fetch search results
  const fetchSearchResults = async () => {
    try {
      const params = {
        keyword: searchKeyword, // 검색어를 쿼리 스트링으로 전달
      };

      const response = await getData(
        GET_ITEM_SEARCH, {
        Authorization: `Bearer ${localStorage.getItem('AToken')}`,
      }, params);

      if (response) {
        setItems(response.data);
      }
    } catch (error) {
      console.error('검색 중 오류 발생:', error);
    }
  };

  // UseEffect to fetch items when filters change
  useEffect(() => {
    fetchItems(selectedTransaction, country);
  }, [selectedTransaction, country, showAvailable]);

  const resetCountryClick = () => {
    setIsCountryClicked(false);
    setCountry(null);
  };

  const handleGetCountry = (country) => {
    setCountry(country);
    setIsCountryClicked(true);
    setShowCountry(false);
  };

  const handleCountryClick = () => {
    setShowCountry(!showCountry);
  };

  const handleResetTransaction = () => {
    setSelectedTransaction('');
    setTempTransaction('');
    setIsPickerVisible(false);
  };

  const togglePickerVisibility = () => {
    if (selectedTransaction) {
      handleResetTransaction();
    } else {
      setIsPickerVisible(!isPickerVisible);
      if (!isPickerVisible) {
        setTempTransaction(selectedTransaction);
      }
    }
  };

  const handleTransactionChange = (transaction) => {
    setTempTransaction(transaction);
  };

  const handleApply = () => {
    setSelectedTransaction(tempTransaction);
    setIsPickerVisible(false);
  };

  const handleCheckClick = () => {
    setShowAvailable(!showAvailable);
  };

  const goPost = () => {
    navigate('./post');
  };

  return (
    <>
      <SellPageHeader pageName={'거래하기'} />
      <Space /><br />
      <SearchContainer>
        <Search
          placeholder='국가 / 물품으로 검색해 보세요.'
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          onKeyPress={(e) => { if (e.key === 'Enter') e.preventDefault(); }} // 엔터키 동작 막기
        />
        <SearchIcon src={search_icon} onClick={fetchSearchResults} /> {/* 검색 아이콘 클릭 시 검색 요청 */}
      </SearchContainer>
      <br /><br />
      <FlexContainer>
        <Span>
          <SellPageCountrySelect
            countryClick={handleCountryClick}
            country={country}
            isCountryClicked={isCountryClicked}
            updateIsCountryClicked={resetCountryClick}
          />
          {showCountry &&
            <SelectCountry closeModal={handleCountryClick} getCountry={handleGetCountry} />
          }
          <GreyPicker onClick={togglePickerVisibility} selected={!!selectedTransaction}>
            {selectedTransaction || '거래방식'}
            <Icon
              src={selectedTransaction ? whiteCloseIcon : arrowIcon}
              onClick={(e) => {
                if (selectedTransaction) {
                  e.stopPropagation();
                  handleResetTransaction();
                } else {
                  togglePickerVisibility();
                }
              }}
            />
          </GreyPicker>
          <Available>
            <Check onClick={handleCheckClick} checked={showAvailable} />
            <span>거래 가능 물품만 보기</span>
          </Available>
        </Span>
      </FlexContainer><br />
      <ItemList items={items} />
      <WriteButton onClick={goPost}>
        <img src={pencilImg} alt="pencil icon" />
        글쓰기
      </WriteButton>

      <TransactionPicker
        isVisible={isPickerVisible}
        tempTransaction={tempTransaction}
        onTempTransactionChange={handleTransactionChange}
        onApply={handleApply}
        onClose={() => setIsPickerVisible(false)}
      />
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
  resize: none;
`;

const SearchIcon = styled.img`
  position: absolute;
  right: 30px;
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
  background: ${({ selected }) => selected 
    ? 'linear-gradient(135deg, #C2C7FF, #AD99FF)' 
    : '#E8E8E8'};
  font-family: 'Inter-Regular';
  font-size: 0.8em;
  padding: 3px;
  border-radius: 18px;
  padding-left: 8px;
  padding-right: 8px;
  margin-right: 8px;
  color: ${({ selected }) => selected ? '#FFFFFF' : '#363636'};
`;

const Available = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #7A7A7A;
  margin-left: 14vw;
  margin-left: 60px;
`;

const Check = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid transparent;
  background: ${({ checked }) => checked 
    ? "#C2C7FF" 
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
  background: linear-gradient(135deg, #D6EBFF, #C2C7FF);
  color: white;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  z-index: 2;
  border: 1px solid #CCCCCC;
`;