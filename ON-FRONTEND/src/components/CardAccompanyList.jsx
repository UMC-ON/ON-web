import React from 'react';
import styled from 'styled-components';

import personIcon from '../assets/images/person_icon.svg';
import calendarIcon from '../assets/images/calendar_icon.svg';
import plusIcon from '../assets/images/plus_icon.svg';
import placeIcon from '../assets/images/place_icon.svg';


const CardAccompanyList = ({ cards }) => {
  return (
    <CardListContainer>
      {cards.map((card, index) => (
        <CardContainer key={index}>
          <Card>
            <CardImage src={card.image}/>
            <GreyCard color={card.color}>
              <Left><CardName>{card.title}</CardName></Left>
              <Left>
                <CardIcon src={personIcon}/>
                <SmallGreyText>{card.id}</SmallGreyText>
                <SmallGreyText>·</SmallGreyText>
                <SmallGreyText>{card.age}</SmallGreyText>
                <SmallGreyText>·</SmallGreyText>
                <SmallGreyText>{card.gender}</SmallGreyText>
              </Left>
              <Space/>
              <Left>
                <CardIcon src={calendarIcon}/>
                <GreyText>{card.date}</GreyText>
                <Padding/>
                <CardIcon src={plusIcon}/>
                <GreyText>{card.people}</GreyText>
              </Left>
              <Left>
                <CardIcon src={placeIcon}/>
                <GreyText>{card.place}</GreyText>
              </Left>
              <SmallSpace/>
            </GreyCard>
          </Card>
        </CardContainer>
      ))}
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
  justify-content: space-between;
  width: 22vh; 
  height: auto; 
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardIcon = styled.img`
  width: 14px;
  height: 14px;
`;

const CardName = styled.p`
  font-size: 1em;
  padding: 0px;
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
  font-size: 0.3em;
  padding-left: 6px;
  padding-top: 2px;
  padding-bottom: 13px;
  color: #7a7a7a;
`;

const GreyText = styled.p`
  font-size: 0.7em;
  padding-left: 6px;
  padding-top: 2px;
  padding-bottom: 9px;
  color: #7a7a7a;
`;

const GreyCard = styled.div`
  background-color: ${props => props.color || '#D0D6DA'};
`;

const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 1.2vh;
`;
