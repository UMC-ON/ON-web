import React from 'react';
import styled from 'styled-components';

import bubbleIcon from '../assets/images/bubble.svg'
import freeImg from '../assets/images/free_container.svg';
import infoStripe from '../assets/images/infoStripe.svg';
import freeStripe from '../assets/images/freeStripe.svg';

import { showDate } from '../components/Common/InfoExp';

const FreeCommunityCardList = ({ cards }) => {
  return (
    <div>
      {cards.map((card, index) => (
        <FreeContainer key={index}>
          <PaddingTop/>
          <Stripe $blue={false}>
            <TextTopLeft>{card.title}</TextTopLeft>
            <TextTopRight>{card.postTime}</TextTopRight>
          </Stripe>
          <TextContainer>
            <TextMiddle2>{card.content}
            </TextMiddle2>
            <InlineTextContainer>
              <MarginLeft/>
              <TextBottomLeft>{card.writer}</TextBottomLeft>
              <IconBottomLeft src={bubbleIcon}></IconBottomLeft>
              <TextBottomLeft2>{card.commentCount}</TextBottomLeft2>
            </InlineTextContainer>
          </TextContainer>
      </FreeContainer>
      ))}
    </div>
  );
};

export default FreeCommunityCardList;

const FreeContainer = styled.div`
  background-image: url(${freeImg});
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  width: 340px; 
  height: 130px; 
  margin: 0 auto;
  margin-bottom: 10px;
  filter: drop-shadow(8px 8px 8px rgba(0, 0, 0, 0.1));
`;

const PaddingTop = styled.div`
  padding-top: 13px;
`;

const Stripe = styled.div`
  background-image: ${props => props.$blue ? `url(${infoStripe})` : `url(${freeStripe})`};
  display: flex;
  justify-content: space-between;
  width: 340px; 
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
`;

const TextTopLeft = styled.div`
  color: #363636;
  font-size: 0.9em;
  font-weight: bold;
  text-align: left;
  padding: 5px;
  padding-left: 20px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextMiddle2 = styled.div`
  color: #838383;
  font-size: 0.8em;
  text-align: left;
  line-height: 1.3em;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding-left: 12px;
  padding-top: 5px;
  width: 280px;
  margin: 5px;
  margin-bottom: 0px;
    height: 4em;
`;


const InlineTextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  margin-left: 3px;
`;

const TextBottomLeft = styled.div`
  color: #7A7A7A;
  font-size: 0.7em;
  top: 13.8vh;
  left: 2.5vh;
  text-align: right;
`;

const IconBottomLeft = styled.img`
  margin-left: 10px;
`;

const TextBottomLeft2 = styled.div`
  color: #ffffff;
  font-size: 0.7em;
  margin-left: 3px;
`;

const MarginLeft = styled.div`
  margin-left: 5px;
`;

const TextTopRight = styled.div`
  color: #7A7A7A;
  font-size: 0.8em;
  text-align: right;
  padding: 5px;
  padding-right: 15px;
`;