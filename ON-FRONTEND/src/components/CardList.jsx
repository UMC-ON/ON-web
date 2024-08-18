import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import airplaneImg from '../assets/images/airplaneImg.svg';
import img1 from '../assets/images/travelimg/img1.png';
import img2 from '../assets/images/travelimg/img2.png';
import img3 from '../assets/images/travelimg/img3.png';
import img4 from '../assets/images/travelimg/img4.png';
import img5 from '../assets/images/travelimg/img5.png';
import img6 from '../assets/images/travelimg/img6.png';
import img7 from '../assets/images/travelimg/img7.png';
import img8 from '../assets/images/travelimg/img8.png';
import img9 from '../assets/images/travelimg/img9.png';
import img10 from '../assets/images/travelimg/img10.png';
import img11 from '../assets/images/travelimg/img11.png';
import img12 from '../assets/images/travelimg/img12.png';
import img13 from '../assets/images/travelimg/img13.png';
import img14 from '../assets/images/travelimg/img14.png';
import img15 from '../assets/images/travelimg/img15.png';
import img16 from '../assets/images/travelimg/img16.png';
import img17 from '../assets/images/travelimg/img17.png';
import img18 from '../assets/images/travelimg/img18.png';
import img19 from '../assets/images/travelimg/img19.png';
import img20 from '../assets/images/travelimg/img20.png';
import img21 from '../assets/images/travelimg/img21.png';
import img22 from '../assets/images/travelimg/img22.png';
import img23 from '../assets/images/travelimg/img23.png';
import img24 from '../assets/images/travelimg/img24.png';
import img25 from '../assets/images/travelimg/img25.png';
import img26 from '../assets/images/travelimg/img26.png';
import img27 from '../assets/images/travelimg/img27.png';
import img28 from '../assets/images/travelimg/img28.png';
import img29 from '../assets/images/travelimg/img29.png';
import img30 from '../assets/images/travelimg/img30.png';
import img31 from '../assets/images/travelimg/img31.png';
import img32 from '../assets/images/travelimg/img32.png';
import img33 from '../assets/images/travelimg/img33.png';
import img34 from '../assets/images/travelimg/img34.png';
import img35 from '../assets/images/travelimg/img35.png';
import img36 from '../assets/images/travelimg/img36.png';
import img37 from '../assets/images/travelimg/img37.png';
import { cities } from '../assets/cityDatabase';



const travels = [
  {
          "ID": "1",
          "continent": "아시아",
          "country": "일본",
          "tourist_attraction": "기후현 다카야마",
          "detail": "전통 목조건물이 남아있는 작은 마을",
          "img": img1
      },
      {
          "ID": "2",
          "continent": "아시아",
          "country": "대만",
          "tourist_attraction": "지우펀",
          "detail": "애니메이션의 배경이 된 아름다운 산골마을",
          "img": img2
      },
      {
          "ID": "3",
          "continent": "아시아",
          "country": "베트남",
          "tourist_attraction": "호이안",
          "detail": "옛스러움을 간직한 세계유산 마을",
          "img": img3
      },
      {
          "ID": "4",
          "continent": "아시아",
          "country": "태국",
          "tourist_attraction": "파이",
          "detail": "자연 속에서 힐링할 수 있는 작은 마을",
          "img": img4
      },
      {
          "ID": "5",
          "continent": "아시아",
          "country": "인도네시아",
          "tourist_attraction": "우붓",
          "detail": "발리의 예술과 문화를 느낄 수 있는 곳",
          "img": img5
      },
      {
          "ID": "6",
          "continent": "아시아",
          "country": "라오스",
          "tourist_attraction": "루앙프라방",
          "detail": "조용하고 평화로운 강변 마을",
          "img": img6
      },
      {
          "ID": "7",
          "continent": "아시아",
          "country": "말레이시아",
          "tourist_attraction": "쿠칭",
          "detail": "고양이의 도시, 조용한 리버 프론트",
          "img": img7
      },
      {
          "ID": "8",
          "continent": "아시아",
          "country": "중국",
          "tourist_attraction": "리장",
          "detail": "시간이 멈춘 듯한 아름다운 고대 도시",
          "img": img8
      },
      {
          "ID": "9",
          "continent": "아시아",
          "country": "몽골",
          "tourist_attraction": "테를지 국립공원",
          "detail": "끝없는 초원과 평화를 느낄 수 있는 곳",
          "img": img9
      },
      {
          "ID": "10",
          "continent": "아시아",
          "country": "네팔",
          "tourist_attraction": "포카라",
          "detail": "히말라야 산맥을 감상할 수 있는 아름다운 도시",
          "img": img10
      },
    
      {
          "ID": "11",
          "continent": "북미",
          "country": "캐나다",
          "tourist_attraction": "루넌버그",
          "detail": "그림 같은 어촌 마을",
          "img": img11
      },
      
      {
          "ID": "12",
          "continent": "북미",
          "country": "미국",
          "tourist_attraction": "새러토가 스프링스",
          "detail": "전통 스파와 예술이 살아있는 작은 도시",
          "img": img12
      },
      {
          "ID": "13",
          "continent": "북미",
          "country": "캐나다",
          "tourist_attraction": "토피노",
          "detail": "자연 속에서 서핑을 즐길 수 있는 곳",
          "img": img13
      },
      {
          "ID": "14",
          "continent": "북미",
          "country": "미국",
          "tourist_attraction": "오스틴",
          "detail": "독특한 문화와 음악이 넘치는 도시",
          "img": img14
      },
      {
          "ID": "15",
          "continent": "북미",
          "country": "캐나다",
          "tourist_attraction": "샬럿타운",
          "detail": "조용하고 평화로운 섬마을",
          "img": img15
      },
      {
          "ID": "16",
          "continent": "북미",
          "country": "미국",
          "tourist_attraction": "애슈빌",
          "detail": "예술과 자연이 조화를 이룬 곳",
          "img": img16
      },
      {
          "ID": "17",
          "continent": "북미",
          "country": "캐나다",
          "tourist_attraction": "퀘벡 시티",
          "detail": "유럽의 분위기를 느낄 수 있는 북미 도시",
          "img": img17
      },
      {
          "ID": "18",
          "continent": "오세아니아",
          "country": "뉴질랜드",
          "tourist_attraction": "아카로아",
          "detail": "프랑스의 흔적이 남아있는 작은 마을",
          "img": img18
      },
      {
          "ID": "19",
          "continent": "오세아니아",
          "country": "호주",
          "tourist_attraction": "비치워스",
          "detail": "역사적인 매력과 아름다운 자연을 즐길 수 있는 곳",
          "img": img19
      },
      {
          "ID": "20",
          "continent": "오세아니아",
          "country": "뉴질랜드",
          "tourist_attraction": "와나카",
          "detail": "거대한 호수와 산이 있는 평화로운 마을",
          "img": img20
      },
      {
          "ID": "21",
          "continent": "오세아니아",
          "country": "호주",
          "tourist_attraction": "멜버른 단데농",
          "detail": "울창한 숲과 예술가들의 마을",
          "img": img21
      },
      {
          "ID": "22",
          "continent": "오세아니아",
          "country": "뉴질랜드",
          "tourist_attraction": "넬슨",
          "detail": "예술과 와인이 유명한 해안 도시",
          "img": img22
      },
      {
          "ID": "23",
          "continent": "오세아니아",
          "country": "호주",
          "tourist_attraction": "브로큰 힐",
          "detail": "예술가들이 사랑하는 붉은 사막 마을",
          "img": img23
      },
      {
          "ID": "24",
          "continent": "오세아니아",
          "country": "뉴질랜드",
          "tourist_attraction": "피오르드랜드",
          "detail": "대자연의 위대함을 느낄 수 있는 지역",
          "img": img24
      },
      {
          "ID": "25",
          "continent": "오세아니아",
          "country": "호주",
          "tourist_attraction": "오렌지",
          "detail": "와인과 미식이 유명한 농촌 마을",
          "img": img25
      },
      {
          "ID": "26",
          "continent": "오세아니아",
          "country": "뉴질랜드",
          "tourist_attraction": "마틴버러",
          "detail": "와이너리가 많은 작은 마을",
          "img": img26
      },
      {
          "ID": "27",
          "continent": "오세아니아",
          "country": "호주",
          "tourist_attraction": "포트 더글라스",
          "detail": "열대 우림과 해변이 만나는 곳",
          "img": img27
      },
      {
          "ID": "28",
          "continent": "유럽",
          "country": "영국",
          "tourist_attraction": "버로우 마켓",
          "detail": "런던에서 가장 오래된 마켓",
          "img": img28
      },
      {
          "ID": "29",
          "continent": "유럽",
          "country": "바티칸",
          "tourist_attraction": "성베드로 대성당",
          "detail": "로마의 중심, 바티칸의 위엄",
          "img": img29
      },
      {
          "ID": "30",
          "continent": "유럽",
          "country": "이탈리아",
          "tourist_attraction": "토스카나 농장",
          "detail": "윈도우 배경에서 포도주 만들기",
          "img": img30
      },
      {
          "ID": "31",
          "continent": "유럽",
          "country": "프랑스",
          "tourist_attraction": "안시",
          "detail": "프랑스인이 가장 살고 싶은 중세도시",
          "img": img31
      },
      {
          "ID": "32",
          "continent": "유럽",
          "country": "튀르키예",
          "tourist_attraction": "카파도키아",
          "detail": "열기구를 타고 보는 장관",
          "img": img32
      },
      {
          "ID": "33",
          "continent": "유럽",
          "country": "이탈리아",
          "tourist_attraction": "시칠리아",
          "detail": "지중해 꿈의 여행지",
          "img": img33
      },
      {
          "ID": "34",
          "continent": "유럽",
          "country": "독일",
          "tourist_attraction": "하이델베르크",
          "detail": "역사와 자연이 어우러진 대학 도시",
          "img": img34
      },
      {
          "ID": "35",
          "continent": "유럽",
          "country": "프랑스",
          "tourist_attraction": "몽생미셸",
          "detail": "바다 위에 떠 있는 신비로운 수도원",
          "img": img35
      },
      {
          "ID": "36",
          "continent": "유럽",
          "country": "노르웨이",
          "tourist_attraction": "로포텐섬",
          "detail": "자연이 빚은 아름다운 섬 군락",
          "img": img36
      },
      {
          "ID": "37",
          "continent": "유럽",
          "country": "영국",
          "tourist_attraction": "타워브릿지",
          "detail": "런던의 상징적인 다리",
          "img": img37
      }
  
  ];


const CardList = ({ selectedCountry }) => {
  const [filteredTravels, setFilteredTravels] = useState([]);

  const getContinentForCountry = (countryName) => {
    const country = cities.find(c => c.country === countryName);
    return country ? country.continent : null;
  };

  const getRandomItems = (list, count) => {
    const shuffled = list.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const filterAndSelectTravels = (countryName) => {
    const continent = getContinentForCountry(countryName);
    if (!continent) return [];
  
    const filteredTravels = travels.filter(travel => travel.continent === continent);
    return getRandomItems(filteredTravels, 5);
  };

  function hasLastConsonantLetter(text) {
    return (text.charCodeAt(text.length - 1) - "가".charCodeAt(0)) % 28 !== 0;
  }

  const navigate = useNavigate();

  function goToAccompany() {
    navigate("/accompany");
  }


  useEffect(() => {
    setFilteredTravels(filterAndSelectTravels(selectedCountry));
  }, [selectedCountry]);

  return (
    <CardListContainer>
      {filteredTravels.map((card, index) => (
        <CardContainer key={index}>
          <Card onClick={goToAccompany}>
            <CardImage src={card.img}/>
              <CardContent>
              <Left><CardDistance>{card.country}</CardDistance></Left>
              <Left><CardName>{card.tourist_attraction}</CardName></Left>
              <Left><CardDescription>{card.detail}</CardDescription></Left>
              <Bottom>
                <CardLabel>{card.country}</CardLabel>
                <CardLabel>{hasLastConsonantLetter(card.country) ? "으로" : "로"}</CardLabel>
                <CardLabel>&nbsp;함께 떠날 동행 구하기</CardLabel>
                <Icon src={airplaneImg}/>
              </Bottom>
              </CardContent>
          </Card>
        </CardContainer>
      ))}
    </CardListContainer>
  );
};

export default CardList;

const Icon = styled.img`
  margin-left: 3px;
  margin-bottom: 8px;
`;


const CardListContainer = styled.div`
  margin-left: 2vh;
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  white-space: nowrap; 
  padding-bottom: 3vh;
`;

const CardContainer = styled.div`
  display: inline-block; 
  margin: 0 1.3vh;
  min-width: 15vh;
`;

const Card = styled.div`
background: white;
border-radius: 15px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
overflow: hidden;
text-align: center;
display: flex;
flex-direction: column;
width: 15vh;
height: 21vh;
`;

const CardImage = styled.img`
  width: 100%;        
  height: 12vh;        
  object-fit: cover;   
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1; 
  background-color: #698DB8;
`;

const CardDistance = styled.h2`
  font-size: 9px;
  padding: 8px 0 5px;
  color: #ffffff;
  margin: 0;
`;

const CardName = styled.p`
  font-size: 0.8em;
  padding: 0;
  font-weight: bold;
  padding-bottom: 4px;
  color: #ffffff;
  margin: 0;
`;

const CardDescription = styled.p`
  font-size: 7.5px;
  padding: 0;
  color: #ffffff;
  font-weight: semi-bold;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  text-align: left;
  margin: 0;
  margin-right: 1em;
`;


const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 0.5em;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0 0.5em;
  margin-top: auto;
`;

const CardLabel = styled.p`
  font-size: 7px;
  padding: 0;
  padding-bottom: 10px;
  color: #ffffff;
`;
