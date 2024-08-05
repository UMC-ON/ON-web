import React, { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

import compas from "../assets/images/compasIcon.svg";
import profile from "../assets/images/profileIcon.svg";
import empty_star from "../assets/images/empty_star.svg";
import filled_star from "../assets/images/filled_star.svg";


const Item = ({ items }) => {

  const navigate = useNavigate();
    const goDetail = () => {
      navigate('./id');
    };
  
  return (
    <>
      {items && items.map((item, index) => (
        <ItemDiv key={index}>
          <Photo src={item.image} />
          <Information>
            <StarContainer />
            <Description onClick={goDetail}>
              <Title>{item.title} | <Time>{item.time}</Time></Title>
              <State>{item.how} | {item.now}</State>
              <LocationAndUser>
                <Place><Compas src={compas} />독일 베를린</Place>
                <User><Profile src={profile} />루이(fndl333)</User>
              </LocationAndUser><br/>
              <Price>{item.price === '나눔' ? item.price : `₩ ${item.price}`}</Price>
            </Description>
          </Information>
        </ItemDiv>
      ))}
    </>
  );
};

const StarContainer = () => {
  const [isFilled, setIsFilled] = useState(false);

  const toggleStar = () => {
    setIsFilled(!isFilled);
  };

  return (
    <Star
      src={isFilled ? filled_star : empty_star}
      onClick={toggleStar}
    />
  );
};

export default Item;

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

const State = styled.p`
  color: #7A7A7A;
  font-size: 0.7em;
  margin: 10px 0px;
`;

const Price = styled.p`
  font-size: 19px;
  font-weight: 600;
  color: #3E73B2;
`;

const Compas = styled.img`
  width: 1.2em;
  height: 1.2em;
`;

const Place = styled.p`
  font-size: 0.7em;
  display: flex;
  align-items: center;
  margin-right: 10px;
  color: #838383
`;

const Profile = styled.img`
  width: 1.2em;
  height: 1.2em;
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
  margin-bottom: 10px;
  width: 11em;
`;

const Space = styled.div`
  height: 3em;
`;
