import React from 'react';
import styled from 'styled-components';


const CardList = ({ cards }) => {
  return (
    <CardListContainer>
      {cards.map((card, index) => (
        <CardContainer key={index}>
          <Card>
            <CardImage src={card.image}/>
            <BlueCard>
              <Left><CardDistance>{card.distance}</CardDistance></Left>
              <Left><CardName>{card.name}</CardName></Left>
              <Left><CardDescription>{card.description}</CardDescription></Left>
            </BlueCard>
          </Card>
        </CardContainer>
      ))}
    </CardListContainer>
  );
};

export default CardList;


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
  justify-content: space-between;
  width: 15vh; 
  height: auto; 
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardDistance = styled.h2`
  font-size: 0.3em;
  padding-top: 8px;
  padding-bottom: 5px;
  color: #ffffff;
`;

const CardName = styled.p`
  font-size: 0.8em;
  padding: 0px;
  font-weight: bold;
  padding-bottom: 14px;
  color: #ffffff;
`;

const CardDescription = styled.p`
  font-size: 0.3em;
  padding: 0px;
  padding-bottom: 13px;
  color: #ffffff;
`;

const BlueCard = styled.div`
  background-color: #698DB8;
`;

const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 1.2vh;
`;
