import React from 'react';
import styled from 'styled-components';

import americaIcon from '../assets/images/countryIcon/america.svg';
import austrailaIcon from '../assets/images/countryIcon/austrailia.svg';
import autriaIcon from '../assets/images/countryIcon/austria.svg';
import basicIcon from '../assets/images/countryIcon/basic.svg';
import belgiumIcon from '../assets/images/countryIcon/belgium.svg';
import canadaIcon from '../assets/images/countryIcon/canada.svg';
import chinaIcon from '../assets/images/countryIcon/china.svg';
import denmarkIcon from '../assets/images/countryIcon/denmark.svg';
import englandIcon from '../assets/images/countryIcon/england.svg';
import finlandIcon from '../assets/images/countryIcon/finland.svg';
import franceIcon from '../assets/images/countryIcon/france.svg';
import germanyIcon from '../assets/images/countryIcon/germany.svg';
import italyIcon from '../assets/images/countryIcon/italy.svg';
import japanIcon from '../assets/images/countryIcon/japan.svg';
import newzealandIcon from '../assets/images/countryIcon/newzealand.svg';
import polandIcon from '../assets/images/countryIcon/poland.svg';
import portugalIcon from '../assets/images/countryIcon/portugal.svg';
import singaporeIcon from '../assets/images/countryIcon/singapore.svg';
import spainIcon from '../assets/images/countryIcon/spain.svg';
import swedenIcon from '../assets/images/countryIcon/sweden.svg';
import swissIcon from '../assets/images/countryIcon/swiss.svg';
import taiwanIcon from '../assets/images/countryIcon/taiwan.svg';


const countryIcons = {
  "기본": basicIcon,
  "미국": americaIcon,
  "호주": austrailaIcon,
  "오스트리아": autriaIcon,
  "벨기에": belgiumIcon,
  "캐나다": canadaIcon,
  "중국": chinaIcon,
  "덴마크": denmarkIcon,
  "영국": englandIcon,
  "핀란드": finlandIcon,
  "프랑스": franceIcon,
  "독일": germanyIcon,
  "이탈리아": italyIcon,
  "일본": japanIcon,
  "뉴질랜드": newzealandIcon,
  "폴란드": polandIcon,
  "포르투갈": portugalIcon,
  "싱가포르": singaporeIcon,
  "스페인": spainIcon,
  "스웨덴": swedenIcon,
  "스위스": swissIcon,
  "대만": taiwanIcon,
};

const CountryIcon = ({ country }) => {
    const source = countryIcons[country] || basicIcon;

    return <ProfileImg src={source}/>;
};

export default CountryIcon;

const ProfileImg = styled.img`
  border-radius: 100px;
  width: 12vh;
  height: 12vh; 
  object-fit: cover; 
  object-position: center;
  // border: 1px solid #D9D9D9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
`;