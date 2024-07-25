import styled from 'styled-components';
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import schoolIcon from '../assets/images/school_icon.png';
import migrationIcon from '../assets/images/migration_icon.png';
import companyIcon from '../assets/images/company_icon.png';
import informationIcon from '../assets/images/information_icon.png';
import writeIcon from '../assets/images/write_icon.png';
import diaryIcon from '../assets/images/diary_icon.png';
import bannerimg from '../assets/images/home_banner.png';

const images = [bannerimg, bannerimg, bannerimg, bannerimg, bannerimg];

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

    return (
      <>
        <BigContainer>
            <LeftContainer>
                <SubText>나의 교환교</SubText>
            </LeftContainer>
            <LeftContainer>
                <BigText spacing="1vh">영국,</BigText>
                <BigText color="#3E73B2">King's College London</BigText>
            </LeftContainer>

            <Container>
                <Button>
                    <Icon src={schoolIcon} alt="School Icon" />
                    <SubText>교환교</SubText>
                    <SubText>홈페이지</SubText>
                </Button>
                <Button>
                    <Icon src={migrationIcon} alt="Migration Icon" />
                    <SubText>영국</SubText>
                    <SubText>이민국</SubText>
                </Button>
                <Button>
                    <Icon src={companyIcon} alt="Company Icon" />
                    <SubText>동행</SubText>
                    <SubText>구하기</SubText>
                </Button>
            </Container>
            <Container>
                <Button>
                    <Icon src={informationIcon} alt="Information Icon" />
                    <SubText>정보글</SubText>
                    <SubText>쓰기</SubText>
                </Button>
                <Button>
                    <Icon src={writeIcon} alt="Write Icon" />
                    <SubText>자유글</SubText>
                    <SubText>쓰기</SubText>
                </Button>
                <Button>
                    <Icon src={diaryIcon} alt="Diary Icon" />
                    <SubText>일기쓰기</SubText>
                    <SubText>&nbsp; &nbsp;</SubText>
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


          </BlueContainer>
        </>
    );
}

export default HomePage;

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
  font-size: 1.4em;
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
  height: 20vh;
  background-color: #f8fcfc;
  border-bottom: 1.5px solid #d9d9d9;
  border-top: 1.5px solid #d9d9d9;
`;
