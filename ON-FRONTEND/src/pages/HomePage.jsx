import styled from 'styled-components';
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardList from '../components/CardList';

import schoolIcon from '../assets/images/school_icon.svg';
import migrationIcon from '../assets/images/migration_icon.svg';
import companyIcon from '../assets/images/company_icon.svg';
import informationIcon from '../assets/images/information_icon.svg';
import writeIcon from '../assets/images/write_icon.svg';
import diaryIcon from '../assets/images/diary_icon.svg';
import bannerimg from '../assets/images/home_banner.svg';
import londonImg from '../assets/images/london_gallery.svg';
import rightIcon from '../assets/images/right_arrow.svg';
import marketImg from '../assets/images/borough_market.svg';


import BottomTabNav from '../components/BottomTabNav/BottomTabNav';
import NavBar from '../components/NavBar/NavBar';
import screenshotImg from '../assets/images/screenshot.svg'
import CardAccompanyList from '../components/CardAccompanyList';
import InfoCommunityCardList from '../components/InfoCommunityCardList';
import FreeCommunityCardList from '../components/FreeCommunityCardList';


const images = [bannerimg, bannerimg, bannerimg, bannerimg, bannerimg];

const cards = [
  {
    image: londonImg,
    place: '영국',
    name: '버로우 마켓',
    description: '런던에서 가장 오래된 마켓',
    label: '영국으로 함께 떠날 동행 구하기'
  },
  {
    image: londonImg,
    place: '영국',
    name: '버로우 마켓',
    description: '런던에서 가장 오래된 마켓',
    label: '영국으로 함께 떠날 동행 구하기'
  },
  {
    image: londonImg,
    place: '영국',
    name: '버로우 마켓',
    description: '런던에서 가장 오래된 마켓',
    label: '영국으로 함께 떠날 동행 구하기'
  },
  {
    image: londonImg,
    place: '영국',
    name: '버로우 마켓',
    description: '런던에서 가장 오래된 마켓',
    label: '영국으로 함께 떠날 동행 구하기'
  },
  {
    image: londonImg,
    place: '영국',
    name: '버로우 마켓',
    description: '런던에서 가장 오래된 마켓',
    label: '영국으로 함께 떠날 동행 구하기'
  }
];

const accompanycards = [
  {
    image: marketImg,
    title: '8/2 버로우 마켓 동행하실 분 구해요!',
    id: 'wjdscl',
    age: '20대',
    gender: '여',
    date: '8/2',
    people: '(1/4)',
    place: '런던 버로우 마켓',
  },
  {
    image: marketImg,
    title: '8/2 버로우 마켓 동행하실 분 구해요!',
    id: 'wjdscl',
    age: '20대',
    gender: '여',
    date: '8/2',
    people: '(1/4)',
    place: '런던 버로우 마켓',
  },
  {
    image: marketImg,
    title: '8/2 버로우 마켓 동행하실 분 구해요!',
    id: 'wjdscl',
    age: '20대',
    gender: '여',
    date: '8/2',
    people: '(1/4)',
    place: '런던 버로우 마켓',
  },
];

const bluecards = [
  {
    title: '[🇬🇧 킹칼] 한 학기 교환 비용 정리',
    time: '5:38 PM',
    body: '따끈하다 못해 뜨거운 테아민 예약 후기입니닷😉 독일로 교환학생을 앞두고 있는 사람이라면!!!! 반드시 알아야 하는 테아민 예약!',
    id: '익명',
    comment: 1,
    image: screenshotImg,
  },
  {
    title: '[🇬🇧 킹칼] 한 학기 교환 비용 정리',
    time: '5:38 PM',
    body: '따끈하다 못해 뜨거운 테아민 예약 후기입니닷😉 독일로 교환학생을 앞두고 있는 사람이라면!!!! 반드시 알아야 하는 테아민 예약!',
    id: '익명',
    comment: 1,
    image: screenshotImg,
  },
];

const purplecards = [
  {
    title: '독일 방문학생 갈 때 어학점수',
    time: '5:38 PM',
    body: '독일 방문학생 갈 때 어학점수 어느 정도 나와야 할까요? 가장 가고 싶은 학교는 프푸응과대입니다. 저는 3개월 만에 학기가 끝나는 학교로 가지만, 이후 보다 편안하고 안전한(?) 유럽 여행을 위해 비자를 발급받으려 합니다!',
    id: '익명',
    comment: 1,
  },
  {
    title: '독일 방문학생 갈 때 어학점수',
    time: '5:38 PM',
    body: '독일 방문학생 갈 때 어학점수 어느 정도 나와야 할까요? 가장 가고 싶은 학교는 프푸응과대입니다. 저는 3개월 만에 학기가 끝나는 학교로 가지만, 이후 보다 편안하고 안전한(?) 유럽 여행을 위해 비자를 발급받으려 합니다!',
    id: '익명',
    comment: 1,
  },
];


function HomePage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlers = useSwipeable({
      onSwipedLeft: () => setCurrentSlide((prev) => (prev + 1) % images.length),
      onSwipedRight: () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length),
      preventDefaultTouchmoveEvent: true,
      trackMouse: true
    });
  
    const goToSlide = (index) => {
      setCurrentSlide(index);
    };

    const navigate = useNavigate();

    function goToAccompany() {
      navigate("/accompany");
    }

    function goToGeneralPost() {
      navigate("/community/general/post");
    }

    function goToInfoPost() {
      navigate("/community/info/post");
    }

    function goToInfoCommunity() {
      navigate("/community/info");
    }

    function goToGeneralCommunity() {
      navigate("/community/general");
    }

    function goToAccompany() {
      navigate("/accompany");
    }

    function goToDiary() {
      navigate("/diary");
    }

    function goToCollege() {
      window.location.href = "https://www.kcl.ac.uk/";
    }

    function goToMigration() {
      window.location.href = "https://www.gov.uk/government/organisations/uk-visas-and-immigration";
    }

    return (
      <>
        <NavBar></NavBar>
        <Space></Space>
        <BigContainer>
            <LeftContainer>
                <SubText>나의 교환교</SubText>
            </LeftContainer>
            <LeftContainer>
                <BigText spacing="1vh">영국,</BigText>
                <BigText color="#3E73B2">King's College London</BigText>
            </LeftContainer>

            <Container>
                <Button onClick={goToCollege}>
                    <Icon src={schoolIcon} alt="School Icon" />
                    <SubText>교환교</SubText>
                    <SubText>홈페이지</SubText>
                </Button>
                <Button onClick={goToMigration}>
                    <Icon src={migrationIcon} alt="Migration Icon" />
                    <SubText>영국</SubText>
                    <SubText>이민국</SubText>
                </Button>
                <Button onClick={goToAccompany}>
                    <Icon src={companyIcon} alt="Company Icon" />
                    <SubText>동행</SubText>
                    <SubText>구하기</SubText>
                </Button>
            </Container>
            <Container>
                <Button onClick={goToInfoPost}>
                    <Icon src={informationIcon} alt="Information Icon" />
                    <SubText>정보글</SubText>
                    <SubText>쓰기</SubText>
                </Button>
                <Button onClick={goToGeneralPost}>
                    <Icon src={writeIcon} alt="Write Icon" />
                    <SubText>자유글</SubText>
                    <SubText>쓰기</SubText>
                </Button>
                <Button onClick={goToDiary}>
                    <Icon src={diaryIcon} alt="Diary Icon" />
                    <SubText>일기</SubText>
                    <SubText>쓰기</SubText>
                    {/* <SubText>&nbsp; &nbsp;</SubText> */}
                </Button>
            </Container>

            <SliderContainer {...handlers}>
                <SliderWrapper currentSlide={currentSlide}>
                    {images.map((image, index) => (
                        <Slide key={index} style={{ backgroundImage: `url(${image})` }} />
                    ))}
                </SliderWrapper>
            </SliderContainer>
            <DotContainer>
                {images.map((_, index) => (
                <Dot key={index} active={index === currentSlide} onClick={() => goToSlide(index)} />
                ))}
            </DotContainer>
          </BigContainer>

          <BlueContainer>

            <BigContainer>
                <LeftContainer>
                <MiddleText spacing="1vh">나를 위한</MiddleText>
                <MiddleText color="#3E73B2">런던 근교 여행지</MiddleText>
                </LeftContainer>
            </BigContainer>

            <CardList selectedCountry={'영국'}/>
          </BlueContainer>

          <FlexContainer onClick={goToInfoCommunity}>
              <MiddleText spacing="1vh">최신 정보글</MiddleText>
              <RightIcon src={rightIcon}></RightIcon>
          </FlexContainer>

          <InfoCommunityCardList cards={bluecards}/>

          <Space></Space>
          <Space></Space>

          <FlexContainer onClick={goToGeneralCommunity}>
              <MiddleText spacing="1vh">최신 자유글</MiddleText>
              <RightIcon src={rightIcon}></RightIcon>
          </FlexContainer>

          <FreeCommunityCardList cards={purplecards}/>
          

          <Space></Space>
          <Space></Space>

          <FlexContainer onClick={goToAccompany}>
              <MiddleText spacing="1vh">내 주변 동행글</MiddleText>
              <RightIcon src={rightIcon}></RightIcon>
          </FlexContainer>

          <CardAccompanyList cards={accompanycards}></CardAccompanyList>

          <BigSpace/>


          <BottomTabNav></BottomTabNav>
        </>
    );
}

export default HomePage;

const FlexContainer = styled.div`
  margin-top: 1.5rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  padding: 10px; 
`;

const RightIcon = styled.img`
  width: 15px; 
  height: 15px; 
`;

const Space = styled.div`
  margin-top: 7vh;
`;

const BigSpace = styled.div`
  margin-top: 15vh;
`;

const BigContainer = styled.div`
    padding: 1.5rem;
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const SubText = styled.div`
  color: #838383;
  font-family: 'Inter-Regular';
  font-size: 0.8em;
`;

const BigText = styled.div`
  margin-top: 1vh;
  color: ${props => props.color || '#000000'};
  margin-right: ${props => props.spacing || '0'};
  font-weight: bold;
  font-family: 'Inter-Regular';
  font-size: 1.38em;
  margin-bottom: 3.5vh;
`;

const MiddleText = styled.div`
  color: ${props => props.color || '#000000'};
  margin-right: ${props => props.spacing || '0'};
  font-weight: bold;
  font-family: 'Inter-Regular';
  font-size: 1.2em;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  width: 6rem;
`;

const Icon = styled.img`
  width: 5vh; 
  height: 5vh; 
  margin-bottom: 1vh;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3vh;
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  margin-top: 4vh;
  overflow: hidden;
`;

const SliderWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['currentSlide'].includes(prop)
})`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: ${props => `translateX(-${props.currentSlide * 100}%)`};
`;

const Slide = styled.div`
  min-width: 100%;
  height: 100px;
  background-size: cover;
  background-position: center;
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1vh;
`;

const Dot = styled.div.withConfig({
  shouldForwardProp: (prop) => !['active'].includes(prop)
})`
  width: ${props => (props.active ? '8px' : '5px')};
  height: ${props => (props.active ? '8px' : '5px')};
  margin: ${props => (props.active ? '0 5px' : '2px 5px')};
  border-radius: 50%;
  background-color: ${props => (props.active ? '#9D9AB1' : '#6EBAFF')};
  opacity: ${props => (props.active ? '1' : '0.5')};
  cursor: pointer;
`;

const BlueContainer = styled.div`
  margin-top: 1vh;
  width: 100%;
  background-color: #f8fcfc;
  border-bottom: 1.5px solid #d9d9d9;
  border-top: 1.5px solid #d9d9d9;
  margin-bottom: 1vh;
`;
