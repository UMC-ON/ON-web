import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import informationIcon from '../assets/images/information_icon.svg';
import writeIcon from '../assets/images/write_icon.svg';
import companyIcon from '../assets/images/company_icon.svg';
import rightIcon from '../assets/images/right_arrow.svg';
import infoCircleIcon from '../assets/images/infoCircleIcon.svg';
import freeCircleIcon from '../assets/images/freeCircleIcon.svg';
import accompanyCircleIcon from '../assets/images/accompanyCircleIcon.svg';
import cloudImg from '../assets/images/cloudImage.svg';

import BottomTabNav from '../components/BottomTabNav/BottomTabNav';
import NavBar from '../components/NavBar/NavBar';
import CommunityHomeList from '../components/CommunityHomeList';

import { getData } from '../api/Functions';
import { GET_RECENT_POST_OF } from '../api/urls';

const ifData = [
  {
    title: '[🇩🇪 독일 교환학생 준비] Ep 1. 테아민 잡기',
    createdAt: '2023-08-10T03:27:15.576Z',
    commentCount: 1,
    content:
      '따끈하다 못해 뜨거운 테아민 예약 후기입니닷😉 독일로 교환학생을 앞두고 있는 사람이라면!!!! 반드시 알아야 하는 테아민 예약! 저는 3개월 만에 학기가 끝나는 학교로 가지만, 이후 보다 편안하고 안전한(?) 유럽 여행을 위해 비자를 발급받으려 합니다!',
  },
  {
    title: '[🇩🇪 독일 교환학생 준비] Ep 1. 테아민 잡기',
    createdAt: '2024-08-19T03:27:15.576Z',
    commentCount: 1,
    content:
      '따끈하다 못해 뜨거운 테아민 예약 후기입니닷😉 독일로 교환학생을 앞두고 있는 사람이라면!!!! 반드시 알아야 하는 테아민 예약! 저는 3개월 만에 학기가 끝나는 학교로 가지만, 이후 보다 편안하고 안전한(?) 유럽 여행을 위해 비자를 발급받으려 합니다!',
  },
  {
    title: '[🇩🇪 독일 교환학생 준비] Ep 1. 테아민 잡기',
    createdAt: '2024-08-10T03:27:15.576Z',
    commentCount: 1,
    content:
      '따끈하다 못해 뜨거운 테아민 예약 후기입니닷😉 독일로 교환학생을 앞두고 있는 사람이라면!!!! 반드시 알아야 하는 테아민 예약! 저는 3개월 만에 학기가 끝나는 학교로 가지만, 이후 보다 편안하고 안전한(?) 유럽 여행을 위해 비자를 발급받으려 합니다!',
  },
  {
    title: '[🇩🇪 독일 교환학생 준비] Ep 1. 테아민 잡기',
    createdAt: '2024-08-19T13:12:15.576Z',
    commentCount: 1,
    content:
      '따끈하다 못해 뜨거운 테아민 예약 후기입니닷😉 독일로 교환학생을 앞두고 있는 사람이라면!!!! 반드시 알아야 하는 테아민 예약! 저는 3개월 만에 학기가 끝나는 학교로 가지만, 이후 보다 편안하고 안전한(?) 유럽 여행을 위해 비자를 발급받으려 합니다!',
  },
];

const freeData = [
  {
    title: '[🇩🇪 독일 교환학생 준비] Ep 1. 테아민 잡기',
    createdAt: '2024-08-18T13:27:15.576Z',
    commentCount: 1,
    content:
      '따끈하다 못해 뜨거운 테아민 예약 후기입니닷😉 독일로 교환학생을 앞두고 있는 사람이라면!!!! 반드시 알아야 하는 테아민 예약! 저는 3개월 만에 학기가 끝나는 학교로 가지만, 이후 보다 편안하고 안전한(?) 유럽 여행을 위해 비자를 발급받으려 합니다!',
  },
  {
    title: '[🇩🇪 독일 교환학생 준비] Ep 1. 테아민 잡기',
    createdAt: '2024-08-19T03:27:15.576Z',
    commentCount: 1,
    content:
      '따끈하다 못해 뜨거운 테아민 예약 후기입니닷😉 독일로 교환학생을 앞두고 있는 사람이라면!!!! 반드시 알아야 하는 테아민 예약! 저는 3개월 만에 학기가 끝나는 학교로 가지만, 이후 보다 편안하고 안전한(?) 유럽 여행을 위해 비자를 발급받으려 합니다!',
  },
  {
    title: '[🇩🇪 독일 교환학생 준비] Ep 1. 테아민 잡기',
    createdAt: '2024-08-19T03:27:15.576Z',
    commentCount: 1,
    content:
      '따끈하다 못해 뜨거운 테아민 예약 후기입니닷😉 독일로 교환학생을 앞두고 있는 사람이라면!!!! 반드시 알아야 하는 테아민 예약! 저는 3개월 만에 학기가 끝나는 학교로 가지만, 이후 보다 편안하고 안전한(?) 유럽 여행을 위해 비자를 발급받으려 합니다!',
  },
  {
    title: '[🇩🇪 독일 교환학생 준비] Ep 1. 테아민 잡기',
    createdAt: '2024-08-19T03:27:15.576Z',
    commentCount: 1,
    content:
      '따끈하다 못해 뜨거운 테아민 예약 후기입니닷😉 독일로 교환학생을 앞두고 있는 사람이라면!!!! 반드시 알아야 하는 테아민 예약! 저는 3개월 만에 학기가 끝나는 학교로 가지만, 이후 보다 편안하고 안전한(?) 유럽 여행을 위해 비자를 발급받으려 합니다!',
  },
];

const accompanyData = [
  {
    title: '[🇩🇪 독일 교환학생 준비] Ep 1. 테아민 잡기',
    createdAt: '2024-08-19T03:27:15.576Z',
    content:
      '따끈하다 못해 뜨거운 테아민 예약 후기입니닷😉 독일로 교환학생을 앞두고 있는 사람이라면!!!! 반드시 알아야 하는 테아민 예약! 저는 3개월 만에 학기가 끝나는 학교로 가지만, 이후 보다 편안하고 안전한(?) 유럽 여행을 위해 비자를 발급받으려 합니다!',
  },
  {
    title: '[🇩🇪 독일 교환학생 준비] Ep 1. 테아민 잡기',
    createdAt: '2024-08-19T03:27:15.576Z',
    content:
      '따끈하다 못해 뜨거운 테아민 예약 후기입니닷😉 독일로 교환학생을 앞두고 있는 사람이라면!!!! 반드시 알아야 하는 테아민 예약! 저는 3개월 만에 학기가 끝나는 학교로 가지만, 이후 보다 편안하고 안전한(?) 유럽 여행을 위해 비자를 발급받으려 합니다!',
  },
  {
    title: '[🇩🇪 독일 교환학생 준비] Ep 1. 테아민 잡기',
    createdAt: '2024-08-19T03:27:15.576Z',
    content:
      '따끈하다 못해 뜨거운 테아민 예약 후기입니닷😉 독일로 교환학생을 앞두고 있는 사람이라면!!!! 반드시 알아야 하는 테아민 예약! 저는 3개월 만에 학기가 끝나는 학교로 가지만, 이후 보다 편안하고 안전한(?) 유럽 여행을 위해 비자를 발급받으려 합니다!',
  },
  {
    title: '[🇩🇪 독일 교환학생 준비] Ep 1. 테아민 잡기',
    createdAt: '2024-08-19T03:27:15.576Z',
    content:
      '따끈하다 못해 뜨거운 테아민 예약 후기입니닷😉 독일로 교환학생을 앞두고 있는 사람이라면!!!! 반드시 알아야 하는 테아민 예약! 저는 3개월 만에 학기가 끝나는 학교로 가지만, 이후 보다 편안하고 안전한(?) 유럽 여행을 위해 비자를 발급받으려 합니다!',
  },
];


function CommunityHomePage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/accompany');
  }

  function goToGeneralPost() {
    navigate("/community/general/post");
  }

  function goToInfoPost() {
    navigate("/community/info/post");
  }

  const [infoData, setInfoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(GET_RECENT_POST_OF('INFO'),{
          Authorization: `${localStorage.getItem('grantType')} ${localStorage.getItem('AToken')}`,
        }); 
        setInfoData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, []); 

  return (
    <>
      <NavBar />
      <Space />

      <RoundContainer>
        <Container>
          <Button onClick={goToInfoPost}>
            <Icon
              src={informationIcon}
              alt="Information Icon"
            />
            <SubText>정보글</SubText>
            <SubText>쓰기</SubText>
          </Button>
          <Button onClick={goToGeneralPost}>
            <Icon
              src={writeIcon}
              alt="Write Icon"
            />
            <SubText>자유글</SubText>
            <SubText>쓰기</SubText>
          </Button>
          <Button onClick={handleClick}>
            <Icon
              src={companyIcon}
              alt="Company Icon"
            />
            <SubText>동행</SubText>
            <SubText>구하기</SubText>
          </Button>
        </Container>
      </RoundContainer>

      <SmallSpace />

      <FlexContainer onClick={() => navigate('/community/info')}>
        <Span>
          <RoundIcon src={infoCircleIcon} />
          <MiddleText spacing="1vh">정보 커뮤니티</MiddleText>
        </Span>
        <RightIcon src={rightIcon} />
      </FlexContainer>
      <Shadow>
        <CommunityHomeList bgcolor='rgba(191, 216, 229, 0.6)' datas={infoData} />
      </Shadow>

      <SmallSpace />

      <FlexContainer onClick={() => navigate('/community/general')}>
        <Span>
          <RoundIcon src={freeCircleIcon} />
          <MiddleText spacing="1vh">자유 커뮤니티</MiddleText>
        </Span>
        <RightIcon src={rightIcon} />
      </FlexContainer>
      <Shadow>
        <CommunityHomeList bgcolor='rgba(203, 205, 233, 0.6)' datas={freeData} />
      </Shadow>

      <SmallSpace />

      <FlexContainer onClick={() => navigate('/accompany')}>
        <Span>
          <RoundIcon src={accompanyCircleIcon} />
          <MiddleText spacing="1vh">동행 구하기</MiddleText>
        </Span>
        <RightIcon src={rightIcon} />
      </FlexContainer>
      <Shadow>
        <CommunityHomeList bgcolor='rgba(208, 214, 218, 0.6)' datas={accompanyData} />
      </Shadow>

      <Space />

      <BottomBanner src={cloudImg} />
      <BottomBanner src={cloudImg} />
      <BottomBanner src={cloudImg} />

      <BigSpace />

      <BottomTabNav />
    </>
  );
}

export default CommunityHomePage;

const BigSpace = styled.div`
  margin-top: 15vh;
`;

const BottomBanner = styled.img`
  width: 90%;
  margin-bottom: 0.5vh;
`;

const Shadow = styled.div`
  filter: drop-shadow(10px 10px 10px rgba(62, 115, 178, 0.15));
`;

const Span = styled.span`
  display: flex;
  align-items: center;
  padding-left: 1.2vh;
`;

const FlexContainer = styled.div`
  margin-top: 1.5rem;
  margin-right: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 1vh;
`;

const RightIcon = styled.img`
  width: 15px;
  height: 15px;
`;

const RoundIcon = styled.img`
  width: 50px;
`;

const MiddleText = styled.div`
  color: #3e73b2;
  margin-right: '0';
  margin-left: 10px;
  font-weight: bold;
  font-family: 'Inter-Regular';
  font-size: 1.4em;
`;

const Space = styled.div`
  margin-top: 7vh;
`;

const SmallSpace = styled.div`
  margin-top: 5vh;
`;

const SubText = styled.div`
  color: #838383;
  font-family: 'Inter-Regular';
  font-size: 0.8em;
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
  margin-top: 1vh;
  margin-bottom: 1vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3vh;
`;

const RoundContainer = styled.div`
  width: 100%;
  border-bottom: 1.5px solid #d9d9d9;
  border-top: 1.5px solid #d9d9d9;
  margin-bottom: 1vh;
  border-radius: 0 0 40px 40px;
  box-shadow: 0 4px 8px rgba(86, 150, 217, 0.25);
`;
