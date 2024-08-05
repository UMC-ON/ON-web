import styled from 'styled-components';
import React, {useState} from 'react';

import detailImg from '../assets/images/accompany_img.svg';
import profileImg from '../assets/images/profile_img.jpeg';
import coordinateIcon from '../assets/images/coordinate_icon.svg';

import calendarIcon from '../assets/images/black_calendar_icon.svg';
import placeIcon from '../assets/images/black_place_icon.svg';
import plusIcon from '../assets/images/black_plus_icon.svg';
import marketImg from '../assets/images/borough_market.svg';

import CardAccompanyList from '../components/CardAccompanyList';
import AccompanyHeader from '../components/AccompanyHeader';
import FirstModal from '../components/FirstModal';
import SecondModal from '../components/SecondModal';

const accompanycards = [
  {
    image: marketImg,
    color: '#c5d3e0',
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
    color: '#c5d3e0',
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
    color: '#c5d3e0',
    title: '8/2 버로우 마켓 동행하실 분 구해요!',
    id: 'wjdscl',
    age: '20대',
    gender: '여',
    date: '8/2',
    people: '(1/4)',
    place: '런던 버로우 마켓',
  },
];


function AccompanyDetailPage() {

  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const openFirstModal = () => {
    console.log("First modal opened");
    setIsFirstModalOpen(true);
  };

  const closeFirstModal = () => {
    console.log("First modal closed");
    setIsFirstModalOpen(false);
  };

  const openSecondModal = () => {
    console.log("Second modal opened");
    setIsSecondModalOpen(true);
  };

  const closeSecondModal = () => {
    console.log("Second modal closed");
    setIsSecondModalOpen(false);
  };

  const handleBlueButtonClick = () => {
    closeFirstModal();
    openSecondModal();
  };


    return (
      <>
        <AccompanyHeader/>
        <Space/>
        <BannerContainer>
          <BannerImg src={detailImg} alt="Banner" />
          <GradientOverlay />
          <ProfileTextContainer>
            <ProfileImg src={profileImg} alt="Profile" />
            <TextContainer>
              <Left>
                <BigText>제로</BigText>
                <GreyText $left="8px">(20대/여)</GreyText>
              </Left>
              <Left>
                <SmallIcon src={coordinateIcon}/>
                <GreyText $size="0.9em">영국 런던</GreyText>
              </Left>
            </TextContainer>
          </ProfileTextContainer>
        </BannerContainer>

        <BlueContainer>
          <BigText $size="1.3em">🔥🔥8/2 버로우 마켓 동행하실 분 구해요!!🔥🔥</BigText>
          <Left><GreyText>24.08.05 5:38 PM</GreyText></Left>
        </BlueContainer>

        <BodyText>
          같이 시장 구경하면서 사진 찍으며 좋은 추억 남기고 싶으신 분들을 찾습니다!! 구경은 하고 싶은데, 그동안
          혼자라서 고민하셨던 분들 대환영입니다!😄
        </BodyText>

        <PurpleContainer>
          <FlexContainer>
            <Row>
              <RowText><BlackIcon src={calendarIcon}/>희망일정</RowText>
              <RowText><BlackIcon src={placeIcon}/>장소</RowText>
              <RowText><BlackIcon src={plusIcon}/>모집 인원</RowText>
            </Row>
            <Row>
              <RowText $size="0.9em" $weight="normal" $color="#7a7a7a">
                8/2 당일치기
              </RowText>
              <RowText $size="0.9em" $weight="normal" $color="#7a7a7a">
                런던 버로우 마켓
              </RowText>
              <RowText $size="0.9em" $weight="normal" $color="#7a7a7a">
                (1/4)
              </RowText>
            </Row>
          </FlexContainer>
        </PurpleContainer>

        <Left>
        <LittleButton>이 게시물 신고하기</LittleButton>
        </Left>

        <Line/>

        <BigContainer>
            <LeftContainer>
            <MiddleText color="#3E73B2" spacing="1vh">비슷한</MiddleText>
            <MiddleText>동행글 추천</MiddleText>
            </LeftContainer>
        </BigContainer>

        <CardAccompanyList cards={accompanycards}></CardAccompanyList>
        <Space/>

        <BottomTabLayout>
          <GreyButton>채팅 문의</GreyButton>
          <BlueButton onClick={openFirstModal}>동행 신청</BlueButton>
        </BottomTabLayout>

        {isFirstModalOpen && (
        <FirstModal closeModal={closeFirstModal} openNextModal={handleBlueButtonClick} />
        )}
        {isSecondModalOpen && <SecondModal closeModal={closeSecondModal} />}

      </>
    );
}

export default AccompanyDetailPage;

const BlueContainer = styled.div`
  margin: 0 auto;
  margin-top: 13vh;
  background: rgb(110, 186, 255, 0.2);
  border-radius: 10px;
  padding: 15px;
  width: 83%;
  border: 1px solid #DFDFDF;
  margin-bottom: 2vh;
`;

const Left = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const BlackIcon = styled.img`
  width: 15px;
  height: 15px;
  padding-right: 5px;
`;


const SmallIcon = styled.img`
  width: 15px;
  height: 15px;
  padding-top: 11px;
  margin-right: 5px;
`;


const Space = styled.div`
  margin-top: 10vh;
`;

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: inline-block;
`;

const BannerImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, #363636, transparent);
  opacity: 0.7; 
`;

const ProfileTextContainer = styled.div`
  position: absolute;
  bottom: -35%; 
  left: 5%; 
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.img`
  border-radius: 100px;
  width: 12vh;
  height: 12vh; 
  object-fit: cover; 
  object-position: center;
  border: 1px solid #D9D9D9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
`;

const TextContainer = styled.div`
  margin-left: 1em;
  margin-top: 1.5em;
`;

const BigText = styled.p`
  color: black; 
  margin: 0;
  pading-top: 0px;
  font-size: ${props => props.$size || '1.5em'};
  font-weight: bold;
  text-align: left;
  line-height: 3vh;
`;

const GreyText = styled.p`
  font-size:${props => props.$size || '0.7em'};
  color: #7a7a7a;
  padding-top: 0.8em;
  padding-left: ${props => props.$left || ''};
`;

const BodyText = styled.p`
  color: black; 
  line-height: 2.5vh;
  margin: 0 auto;
  width: 80%;
  text-align: left;
  font-size: 0.9em;
  margin-bottom: 5vh;
`;

const PurpleContainer = styled.div`
  width: 100%;
  background-color: #f8fcfc;
  border-bottom: 1px solid #d9d9d9;
  border-top: 1px solid #d9d9d9;
  margin-bottom: 1vh;
  background: rgb(194, 199, 255, 0.2);
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const RowText = styled.div`
  flex: 1;
  text-align: center; 
  padding: 10px;
  color: ${props => props.$color || 'black'};
  font-weight: ${props => props.$weight || 'bold'};
  font-size: ${props => props.$size || '1em'};
`;

const LittleButton = styled.button`
  font-size: 0.7em;
  color: #7a7a7a;
  margin-left: 25px;
  background: rgb(110, 186, 255, 0);
  margin-bottom: 4vh;
`;

const Line = styled.div`
  border-top: 1px solid #d9d9d9;
  width: 25%;
  margin-left: 30px;
  margin-bottom: 5vh;
`;

const BigContainer = styled.div`
  padding-left: 1.5rem;
  padding-bottom: 0.7rem;
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const MiddleText = styled.div`
  color: ${props => props.color || '#000000'};
  margin-right: ${props => props.spacing || '0'};
  font-weight: bold;
  font-family: 'Inter-Regular';
  font-size: 1.2em;
`;

const BottomTabLayout = styled.div`
  width: 100%;
  max-width: 480px;
  height: 87px;
  position: fixed;
  bottom: 0;
  border-top:  1px solid #DFDFDF;
  background: #ffffff;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 20px 20px;
`;

const GreyButton = styled.button`
  align-items: center;
  justify-content: center; 
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 10px;
  width: 148px;
  height: 50px;
  padding: 15px 26px;
  background-color: #d9d9d9;
  color: white;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  z-index: 2;
`;


const BlueButton = styled.button`
  align-items: center;
  justify-content: center; 
  left: 0;
  right: 0;
  margin: 0 auto; 
  border-radius: 10px;
  width: 148px;
  height: 50px;
  padding: 15px 26px;
  background: linear-gradient(135deg, #D6EBFF, #C2C7FF);
  color: white;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  z-index: 2;
`;
