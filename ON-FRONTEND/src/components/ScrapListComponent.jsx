import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import compas from "../assets/images/compasIcon.svg";
import profile from "../assets/images/profileIcon.svg";
import empty_star from "../assets/images/empty_star.svg";
import filled_star from "../assets/images/filled_star.svg";

const accessToken = import.meta.env.VITE_accessToken;

const ScrapList = ({ items }) => {
  const navigate = useNavigate();

  return (
    <>
      {items && items.map((item, index) => {
        const isCompleted = item.marketPost.dealStatus === "COMPLETE";
        return (
          <ItemDiv key={index} isCompleted={isCompleted}>
            <Photo src={item.marketPost.imageUrls[0]} />
            <Information>
              <StarContainer
                marketPostId={item.marketPost.marketPostId}
                isFilled={item.isScrapped}
              />
              <Description onClick={() => navigate(`./${item.marketPostId}`)}>
                <Title>{item.marketPost.title} | <Time>{item.marketPost.marketPostId}</Time></Title><br/>
                <State how={item.marketPost.dealType} now={item.marketPost.dealStatus} isCompleted={isCompleted} />
                <LocationAndUser>
                  <Place><Compas src={compas} />{item.marketPost.currentCountry} {item.marketPost.currentLocation}</Place>
                  <User><Profile src={profile} />{item.marketPost.nickname}</User>
                </LocationAndUser>
                <Price>{item.share ? '나눔' : `₩ ${item.marketPost.cost}`}</Price>
              </Description>
            </Information>
          </ItemDiv>
        );
      })}
    </>
  );
};

const StarContainer = ({ marketPostId, isFilled }) => {
  const [isStarFilled, setIsStarFilled] = React.useState(isFilled);

  const toggleStar = async () => {
    try {
      if (isStarFilled) {
        // 스크랩 취소 요청
        await axios.delete(`https://13.209.255.118.nip.io/api/v1/scrap/10/${marketPostId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
      } else {
        // 스크랩 등록 요청
        await axios.post(
          `https://13.209.255.118.nip.io/api/v1/scrap`, 
          {
            marketPostId: marketPostId, // 실제로 스크랩하려는 `marketPostId`를 사용
            userId: 10
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
      }
      setIsStarFilled(!isStarFilled);
      console.log({marketPostId});
    } catch (error) {
      console.error('스크랩 처리 중 오류 발생:', error);
    }
  };

  return (
    <Star
      src={isStarFilled ? filled_star : empty_star}
      onClick={toggleStar}
    />
  );
};



export default ScrapList;



const ItemDiv = styled.div`
  margin: 0 auto;
  width: 90%;
  border-radius: 20px;
  background: linear-gradient(90deg, #E7EBED, #FFFFFF);
  border: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  margin-bottom: 1vh;
  position: relative;
  text-align: left;
  opacity: ${({ isCompleted }) => isCompleted ? 0.5 : 1}; /* 거래완료 시 불투명도 조절 */
`;

const Star = styled.img`
  width: 1.2em;
  height: 1.2em;
  margin: 0.5em;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;

const Photo = styled.img`
  width: 16vh;
  height: 16vh;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  padding: 0;
`;

const Information = styled.div`
  padding-left: 10px;
  display: flex;
  height: 16vh;
  flex-direction: column;
  box-sizing: border-box;
  padding-right: 15px;
`;

const Description = styled.div`
  padding: 1em;
  height: 60%;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #363636;
`;

const Time = styled.span`
  color: #7A7A7A;
  font-size: 0.6em;
`;

const StateWrapper = styled.p`
  color: #7A7A7A;
  font-size: 0.7em;
  margin-bottom: 5px;
`;

const StyledNow = styled.span`
  color: ${({ theme, isCompleted }) => isCompleted ? theme.lightPurple : '#7A7A7A'};
`;

const State = ({ how, now, isCompleted }) => (
  <StateWrapper>
    {how} | <StyledNow isCompleted={isCompleted}>{now}</StyledNow>
  </StateWrapper>
);

const Price = styled.p`
  font-size: 19px;
  font-weight: 600;
  color: #3E73B2;
`;

const Compas = styled.img`
  width: 1.2em;
  height: 1.2em;
  margin-right: 2px;
`;

const Place = styled.p`
  font-size: 0.7em;
  display: flex;
  align-items: center;
  margin-right: 10px;
  color: #838383;
`;

const Profile = styled.img`
  width: 1.2em;
  height: 1.2em;
  margin-right: 2px;
`;

const User = styled.p`
  font-size: 0.7em;
  display: flex;
  align-items: center;
  color: #838383;
`;

const LocationAndUser = styled.div`
  display: flex;
  align-items: center;
  width: 11em;
  margin-bottom: 1.5vh;
`;

const Space = styled.div`
  height: 3em;
`;
