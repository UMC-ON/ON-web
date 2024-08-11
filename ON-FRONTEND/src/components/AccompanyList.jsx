import styled from 'styled-components';
import React, { useState } from 'react';

import personIcon from '../assets/images/grey_person_icon.svg';
import calendarIcon from '../assets/images/grey_calendar_icon.svg';
import plusIcon from '../assets/images/grey_plus_icon.svg';
import placeIcon from '../assets/images/grey_place_icon.svg';


function AccompanyList({datas}) {

    return (
      <>
       {datas.map((data, index) => (
        <RoundContainer key={index}>
            <Image src={data.image}/>
            <TextContainer>
                <CardName>{data.title}</CardName>

                <Left>
                    <CardIcon src={calendarIcon} $top="1px"/>
                    <GreyText>{data.date}</GreyText>
                    <CardIcon src={plusIcon} $top="1px"/>
                    <GreyText>{data.people}</GreyText>
                    <CardIcon src={placeIcon} $top="1px"/>
                    <GreyText>{data.place}</GreyText>
                </Left>
                
                <Left>
                    <GreyMiddleText>{data.description}</GreyMiddleText>
                </Left>

                <Left>
                    <CardIcon src={personIcon} $top="2px"/>
                    <SmallGreyText>{data.id}</SmallGreyText>
                    <SmallGreyText>·</SmallGreyText>
                    <SmallGreyText>{data.age}</SmallGreyText>
                    <SmallGreyText>·</SmallGreyText>
                    <SmallGreyText>{data.gender}</SmallGreyText>
              </Left>
            </TextContainer>
            <Overlay $isClosed={data.isClosed} />
        </RoundContainer>
        ))}
      </>
    );
}

export default AccompanyList;

const Left = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const CardIcon = styled.img`
  width: 11px;
  height: 11px;
  padding-right: 3px;
  padding-top: ${props => props.$top || '0'};
`;

const GreyText = styled.p`
  font-size: 0.5em;
  padding-top: 2px;
  color: #7a7a7a;
  padding-right: 17px;
   display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;


const SmallGreyText = styled.p`
  font-size: 0.3em;
  padding-left: 6px;
  padding-top: 2px;
  padding-bottom: 13px;
  color: #7a7a7a;
`;

const GreyMiddleText = styled.p`
  font-size: 0.5em;
  color: #7a7a7a;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  // width: 20vh;
  line-height: 1.5vh;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 99%;
`;

const RoundContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 90%;
  border-radius: 20px;
  background: linear-gradient(90deg, #E7EBED, #FFFFFF);
  border: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  margin-bottom: 2vh;
`;

const Image = styled.img`
  width: 130px;
  height: 130px; 
  object-fit: cover; 
  object-position: center;
  border-radius: 20px;
  padding: 0;
`;

const TextContainer = styled.div`
  padding-left: 10px; 
  display: flex;
  height: 130px;
  flex-direction: column;
  box-sizing: border-box; 
  padding-right: 15px;
`;

const CardName = styled.p`
  font-size: 0.9em;
  padding: 0px;
  font-weight: bold;
  text-align: left;
  line-height: 17px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #363636;
  width: 98%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, rgba(208,214,218,0.5), rgba(231,235,237,0.5), rgba(255,255,255,0.5));
  display: ${(props) => (props.$isClosed ? 'block' : 'none')};
  border-radius: 20px;
  z-index: 10; 
`;

