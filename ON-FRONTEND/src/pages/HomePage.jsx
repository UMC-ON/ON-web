import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
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

import { getData } from '../api/Functions';
import { GET_USER_INFO, GET_TWO_FREEPOST, GET_TWO_INFOPOST, GET_NEAR_ACCOMPANY } from '../api/urls';


const images = [bannerimg, bannerimg, bannerimg, bannerimg, bannerimg];


function HomePage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [userData, setUserData] = useState([]);
    const [infoData, setInfoData] = useState([]);
    const [freeData, setFreeData] = useState([]);
    const [accompanyData, setAccompanyData] = useState([]);

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

    useEffect(() => {
      const fetchData = async () => {
        try {
          const user_data = await getData(GET_USER_INFO,{
            Authorization: `${localStorage.getItem('grantType')} ${localStorage.getItem('AToken')}`,
          }); 
          setUserData([user_data.data.result]);
          console.log(user_data.data.result);
          
          const info_data = await getData(GET_TWO_INFOPOST,{
            Authorization: `${localStorage.getItem('grantType')} ${localStorage.getItem('AToken')}`,
          }); 
          setInfoData(info_data.data.result);
          // console.log("infoData");
          // console.log(info_data.data.result);

          const free_data = await getData(GET_TWO_FREEPOST,{
            Authorization: `${localStorage.getItem('grantType')} ${localStorage.getItem('AToken')}`,
          }); 
          setFreeData(free_data.data.result);

          const accom_data = await getData(GET_NEAR_ACCOMPANY,{
            Authorization: `${localStorage.getItem('grantType')} ${localStorage.getItem('AToken')}`,
          }); 
          setAccompanyData(accom_data.data.result);
          // console.log(accom_data.data.result);

        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData(); 
    }, []); 

    return (
      <>
        <NavBar></NavBar>
        <Space></Space>
        <BigContainer>
            {userData.map((card, index) => (
              <div key={index}>
              <LeftContainer>
                  <SubText>나의 교환교</SubText>
              </LeftContainer>
              <LeftContainer>
                  <BigText spacing="1vh">{card.country},</BigText>
                  <BigText color="#3E73B2">{card.dispatchedUniversity}</BigText>
              </LeftContainer>
              </div>
             ))}
            
            {userData.map((card, index) => (
            <Container key={index}>
                <Button onClick={goToCollege}>
                    <Icon src={schoolIcon} alt="School Icon" />
                    <SubText>교환교</SubText>
                    <SubText>홈페이지</SubText>
                </Button>
                <Button onClick={goToMigration}>
                    <Icon src={migrationIcon} alt="Migration Icon" />
                    <SubText>{card.country}</SubText>
                    <SubText>이민국</SubText>
                </Button>
                <Button onClick={goToAccompany}>
                    <Icon src={companyIcon} alt="Company Icon" />
                    <SubText>동행</SubText>
                    <SubText>구하기</SubText>
                </Button>
            </Container>
            ))}

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

          {userData.map((card, index) => (
            <BigContainer key={index}>
                <LeftContainer>
                <MiddleText spacing="1vh">나를 위한</MiddleText>
                <MiddleText color="#3E73B2">{card.country} 근교 여행지</MiddleText>
                </LeftContainer>
            </BigContainer>
          ))}

            <CardList selectedCountry={'영국'}/>
          </BlueContainer>

          <FlexContainer onClick={goToInfoCommunity}>
              <MiddleText spacing="1vh">최신 정보글</MiddleText>
              <RightIcon src={rightIcon}></RightIcon>
          </FlexContainer>

          <InfoCommunityCardList cards={infoData}/>

          <Space></Space>
          <Space></Space>

          <FlexContainer onClick={goToGeneralCommunity}>
              <MiddleText spacing="1vh">최신 자유글</MiddleText>
              <RightIcon src={rightIcon}></RightIcon>
          </FlexContainer>

          <FreeCommunityCardList cards={freeData}/>
          

          <Space></Space>
          <Space></Space>

          <FlexContainer onClick={goToAccompany}>
              <MiddleText spacing="1vh">내 주변 동행글</MiddleText>
              <RightIcon src={rightIcon}></RightIcon>
          </FlexContainer>

          <CardAccompanyList cards={accompanyData}></CardAccompanyList>

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
