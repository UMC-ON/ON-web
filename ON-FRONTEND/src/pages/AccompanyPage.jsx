import styled from 'styled-components';
import React, { useState } from 'react';

import PageHeader from '../components/PageHeader/PageHeader';
import DotInslideSlider from '../components/DotInsideSlider';

import bannerImg from '../assets/images/adBanner.svg';
import arrowIcon from '../assets/images/bottomArrow.svg';
import searchIcon from '../assets/images/searchIcon.svg';
import AccompanyList from '../components/AccompanyList';
import marketImg from '../assets/images/borough_market.svg';
import pencilImg from '../assets/images/pencil.svg';


import { useNavigate } from 'react-router-dom';
import { DiaryCalendar } from '../components/DiaryCalendar/DiaryCalendarStyled';
import BottomTabNav from '../components/BottomTabNav/BottomTabNav';

const images = [bannerImg, bannerImg, bannerImg, bannerImg, bannerImg];

const accompanyCards = [
  {
    image: marketImg,
    title: '🔥🔥8/2 버로우 마켓 동행하실 분 구해요!🔥🔥',
    date: '8/2',
    people: '(1/4)',
    place: '런던 버로우 마켓',
    description: '같이 시장 구경하면서 사진 찍으며 좋은 추억 남기고 싶으신 분들을 찾습니다!! 많은 관심 부탁드립니다',
    id: 'wjdscl',
    age: '20대',
    gender: '여',
  },
  {
    image: marketImg,
    title: '🔥🔥8/2 버로우 마켓 동행하실 분 구해요!🔥🔥',
    date: '8/2',
    people: '(1/4)',
    place: '런던 버로우 마켓',
    description: '같이 시장 구경하면서 사진 찍으며 좋은 추억 남기고 싶으신 분들을 찾습니다!! 많은 관심 부탁드립니다',
    id: 'wjdscl',
    age: '20대',
    gender: '여',
  },
  {
    image: marketImg,
    title: '🔥🔥8/2 버로우 마켓 동행하실 분 구해요!🔥🔥',
    date: '8/2',
    people: '(1/4)',
    place: '런던 버로우 마켓',
    description: '같이 시장 구경하면서 사진 찍으며 좋은 추억 남기고 싶으신 분들을 찾습니다!! 많은 관심 부탁드립니다',
    id: 'wjdscl',
    age: '20대',
    gender: '여',
  },
  {
    image: marketImg,
    title: '🔥🔥8/2 버로우 마켓 동행하실 분 구해요!🔥🔥',
    date: '8/2',
    people: '(1/4)',
    place: '런던 버로우 마켓',
    description: '같이 시장 구경하면서 사진 찍으며 좋은 추억 남기고 싶으신 분들을 찾습니다!! 많은 관심 부탁드립니다',
    id: 'wjdscl',
    age: '20대',
    gender: '여',
  },
  {
    image: marketImg,
    title: '🔥🔥8/2 버로우 마켓 동행하실 분 구해요!🔥🔥',
    date: '8/2',
    people: '(1/4)',
    place: '런던 버로우 마켓',
    description: '같이 시장 구경하면서 사진 찍으며 좋은 추억 남기고 싶으신 분들을 찾습니다!! 많은 관심 부탁드립니다',
    id: 'wjdscl',
    age: '20대',
    gender: '여',
  },
];

function AccompanyPage() {
   const [showCalendar, setShowCalendar] = useState(false);

   const calendarClick = () => {
    setShowCalendar(!showCalendar);
  };

    const navigate = useNavigate();
    const nav = () => {
      navigate('./post');
    };

    return (
      <>
        <PageHeader pageName={'동행 구하기'}></PageHeader>
        <Space/>

        <DotInslideSlider images={images}/>

        <SmallSpace/>

        <RoundContainer>
          <FlexContainer>
            <Span>
              <GreyPicker onClick={calendarClick}>
                날짜 
              <Icon src={arrowIcon}/>
              </GreyPicker>

              <GreyPicker>
                국가
              <Icon src={arrowIcon}/>
              </GreyPicker>
              <GreyPicker>
                성별
              <Icon src={arrowIcon}/>
              </GreyPicker>
            </Span>
            <Icon src={searchIcon} size={'25px'}/>
          </FlexContainer>
        </RoundContainer>

        <SmallSpace/>

        <AccompanyList datas={accompanyCards}/>

        <Space/>

        {showCalendar && <BottomTabNav />}

          <WriteButton>
            <img src={pencilImg} />
            <LeftPadding/>
            글 쓰기
          </WriteButton>

        </>
    );
}

export default AccompanyPage;

const Span = styled.span`
  display: flex;
  align-items: center; 
`;

const LeftPadding = styled.div`
  padding-left: 10px;
`;


const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  padding-left: 5px;
  padding-right: 5px;
`;

const Icon = styled.img`
  width: ${props => props.size || '10px'};
  height: ${props => props.size || '10px'};
  padding-left: 3px;
`;

const RoundContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 8px;
  border-radius: 18px;
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

const SmallSpace = styled.div`
  margin-top: 3vh;
`;

const Space = styled.div`
  margin-top: 7vh;
`;

const WriteButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; /* Center the content inside the button */
  position: fixed;
  bottom: 93px;
  left: 0;
  right: 0;
  margin: 0 auto; /* Center the button horizontally */
  border-radius: 55px;
  border: 1px solid #cccccc;
  width: 148px;
  height: 50px;
  padding: 15px 26px;
  flex-shrink: 0;
  background: linear-gradient(135deg, #D6EBFF, #C2C7FF);
  color: white;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  z-index: 2;
  &:hover {
    outline: 1px solid #9279f8;
  }
  &:focus {
    outline: 1px solid #9279f8;
  }

  -webkit-tap-highlight-color: transparent;
`;