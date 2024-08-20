import styled from 'styled-components';
import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import item from "../assets/images/item.svg";
import icon from "../assets/images/item_icon.svg";
import arrowIcon from '../assets/images/bottomArrow.svg';
import search_icon from '../assets/images/search_icon.svg';
import pencilImg from '../assets/images/pencilIcon.svg';
import whiteCloseIcon from '../assets/images/whiteCloseIcon.svg';

import SellPageHeader from '../components/SellPageHeader';
import ItemList from '../components/ItemList';
import TransactionPicker from "../components/TransactionPicker";
import SelectCountry from './SelectCountry/SelectCountry.jsx';
import SellPageCountrySelect from '../components/SellPageCountrySelect.jsx';

const accessToken = import.meta.env.VITE_accessToken;

function SellPage() {
  const [showAvailable, setShowAvailable] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState('');
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [tempTransaction, setTempTransaction] = useState('');  // 임시 선택 상태 추가
  const [showCountry, setShowCountry] = useState(false);
  const [country, setCountry] = useState(null);
  const [isCountryClicked, setIsCountryClicked] = useState(false);
  const [items, setItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const url = showAvailable
          ? 'https://13.209.255.118.nip.io/api/v1/market-post/available'
          : 'https://13.209.255.118.nip.io/api/v1/market-post';
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setItems(response.data);
      } catch (error) {
        console.error('판매 물품 목록을 불러오는 중 오류 발생:', error);
      }
    };

    fetchItems();
  }, [showAvailable]);

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
    setSelectedTransaction(''); // 거래방식 초기화
    setTempTransaction(''); // 임시 상태도 초기화
    setIsPickerVisible(false); // Picker 창 닫기
  };
  
  const togglePickerVisibility = () => {
    if (selectedTransaction) {
      handleResetTransaction();
    } else {
      setIsPickerVisible(!isPickerVisible);
      if (!isPickerVisible) {
        setTempTransaction(selectedTransaction);  // 초기 열기 시 임시 상태를 현재 선택된 값으로 설정
      }
    }
  };

  const handleTransactionChange = (transaction) => {
    setTempTransaction(transaction);  // 임시 상태에만 반영
  };

  const handleApply = () => {
    setSelectedTransaction(tempTransaction);  // 적용 시 선택된 거래 방식을 업데이트
    setIsPickerVisible(false);
  };

  const handleCheckClick = () => {
    setShowAvailable(!showAvailable);
  };

  // // 필터링된 아이템 목록
  // const filteredItems = items
  //   .filter(item => !showAvailable || item.now !== '거래완료')
  //   .filter(item => !selectedTransaction || item.how === selectedTransaction);

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
                  e.stopPropagation(); // 이벤트 버블링 방지
                  handleResetTransaction(); // 거래방식 초기화
                } else {
                  togglePickerVisibility(); // Picker 열기/닫기
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
        onTempTransactionChange={handleTransactionChange} // 이 함수가 onTempTransactionChange로 전달됩니다.
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