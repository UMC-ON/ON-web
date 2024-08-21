import React from 'react';
import styled from 'styled-components';

import personIcon from '../assets/images/person_icon.svg';
import calendarIcon from '../assets/images/calendar_icon.svg';
import plusIcon from '../assets/images/plus_icon.svg';
import placeIcon from '../assets/images/place_icon.svg';
import defaultImg from '../assets/images/bannerDefault.svg';

import { useNavigate } from 'react-router-dom';


const CardAccompanyList = ({ color, cards }) => {
  function formatDateToMD(dateStr) {
    const dateObj = new Date(dateStr);
    
    const month = dateObj.getMonth() + 1; 
    const day = dateObj.getDate();
    
    return `${month}/${day}`;
  }

  const navigate = useNavigate();

  return (
    <CardListContainer>
  {(cards && cards.length > 0) ? (
    cards.map((card, index) => (
      <CardContainer key={index} onClick={() => {
        const id = card.postId ?? card.companyPostId;
        if (id) {
          window.location.href = `/accompany/detail/${id}`;
        }
      }}>
        <Card>
          {card.postImg ? (
            <CardImage src={card.postImg} />
          ) : (
            <CardImage src={defaultImg} />
          )}
          <GreyCard color={color}>
            <Left>
              <CardName>{card.title}</CardName>
            </Left>
            <Left>
              <CardIcon src={personIcon} />
              <SmallGreyText>{card.nickname}</SmallGreyText>
              <SmallGreyText>·</SmallGreyText>
              <SmallGreyText>{card.age}세</SmallGreyText>
              <SmallGreyText>·</SmallGreyText>
              {card.gender === 'FEMALE' ? (
                <SmallGreyText>여</SmallGreyText>
              ) : (
                <SmallGreyText>남</SmallGreyText>
              )}
            </Left>
            <Space />
            <Left>
              <CardIcon src={calendarIcon} />
              {card.startDate === card.endDate ? (
                <GreyText>{formatDateToMD(card.startDate)}</GreyText>
              ) : (
                <GreyText>
                  {formatDateToMD(card.startDate)}~{formatDateToMD(card.endDate)}
                </GreyText>
              )}
              <Padding />
              <CardIcon src={plusIcon} />
              <GreyText>{card.currentRecruitNumber}/{card.totalRecruitNumber}</GreyText>
            </Left>
            <Left>
              <CardIcon src={placeIcon} />
              <GreyText>{card.travelArea[0]}</GreyText>
            
              {card.travelArea[1] ? (
                <GreyText $left="0px">, {card.travelArea[1]}</GreyText>
              ) : null}
            </Left>
            <SmallSpace />
          </GreyCard>
        </Card>
      </CardContainer>
    ))
  ) : <></>}
</CardListContainer>
  );
};

export default CardAccompanyList;

const SmallSpace = styled.div`
  margin-top: 1vh;
`;

const Space = styled.div`
  margin-top: 2vh;
`;

const Padding = styled.div`
  padding-left: 3vh;
`;

const CardListContainer = styled.div`
  margin-top: 1vh;
  margin-left: 3vh;
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  padding-bottom: 3vh;
`;

const CardContainer = styled.div`
  display: inline-block; 
  margin: 0 0.8vh;
  min-width: 22vh;
`;

const Card = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 22vh; 
  height: 32vh; 
`;

const CardImage = styled.img`
  width: 100%;
  height: 18vh;        
  object-fit: cover;   
  aspect-ratio: 16/9;
  margin: 0;
  padding: 0;
  display: block;
`;

const CardIcon = styled.img`
  width: 14px;
  height: 14px;
`;

const CardName = styled.p`
  font-size: 1em;
  padding: 12px 0 7px 0;
  margin: 0;
  font-weight: bold;
  padding-top: 12px;
  padding-bottom: 7px;
  color: #363636;
  width: 80%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: left;
  line-height: 18px;
`;

const SmallGreyText = styled.p`
  font-size: 0.7em;
  padding-left: 6px;
  padding-top: 2px;
  padding-bottom: 13px;
  color: #7a7a7a;

  display: inline-block; 
  max-width: 40%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 0.02em;
`;

const GreyText = styled.p`
  font-size: 0.7em;
  padding-left: ${props => props.$left || "6px"};
  padding-top: 2px;
  padding-bottom: 9px;
  color: #7a7a7a;

`;

const GreyCard = styled.div`
  background-color: ${props => props.color || '#D0D6DA'};
  margin-top: 0;
  flex-grow: 1;
`;

const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 1.2vh;
`;
