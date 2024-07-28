import styled from 'styled-components';
import React from 'react';

import bubbleIcon from '../assets/images/greybubble.svg';

function CommunityHomeList({ datas }) {
  return (
    <>
      {datas.map((data, index) => (
        <Container key={index} radius={data.radius} color={data.color}>
          <FlexContainer>
            <TextTopLeft>{data.title}</TextTopLeft>
            <Span>
                <SmallGreyText>{data.date}</SmallGreyText>
                {data.comment && (
                    <>
                    <IconTopLeft src={bubbleIcon} />
                    <SmallGreyText>{data.comment}</SmallGreyText>
                    </>
                )}
            </Span>
          </FlexContainer>
          <TextMiddle2>{data.content}</TextMiddle2>
        </Container>
      ))}
    </>
  );
}

export default CommunityHomeList;

const Container = styled.div`
  background: ${props => props.color || 'rgba(191, 216, 229, 0.6)'};
  width: 90%;
  height: 7.5vh;
  border-radius: ${props => props.radius || '0 0 0 0'};
  margin: 0 auto;
  border: 1px solid #ffffff;
  padding-top: 0.5vh;
`;

const TextTopLeft = styled.p`
  color: #363636;
  font-size: 1em;
  font-weight: bold;
`;

const TextMiddle2 = styled.p`
  color: #838383;
  font-size: 0.8em;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 70%;
  padding-left: 1vh;
`;

const SmallGreyText = styled.p`
  color: #7A7A7A;
  font-size: 0.5em;
  text-align: right;
`;

const Span = styled.span`
  display: flex;
  align-items: center;  /* Add this to center vertically */
  padding-left: 1.2vh;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;  /* This keeps items on left and right */
  align-items: center;  /* Add this to center vertically */
  padding: 10px; 
`;

const IconTopLeft = styled.img`
  padding-left: 8px;
  padding-right: 3px;
`;