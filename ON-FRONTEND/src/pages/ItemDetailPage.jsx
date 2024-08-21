import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from 'axios';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import ItemDetailPageHeader from "../components/ItemDetailPageHeader";
import NearItemList from '../components/NearbyItemList';

import compas from "../assets/images/compasIcon.svg";
import icon from "../assets/images/profileIcon.svg";
import noImage from "../assets/images/noImage.jpg";

import {GET_SPECIFIC_ITEM, GET_NEARBY_ITEM, GET_MARKET_ROOMID} from '../api/urls'
import { getData, postData} from '../api/Functions';

const serverAddress = import.meta.env.VITE_SERVER_ADDRESS;


function ItemDetailPage() {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user.user);
  const { marketPostId } = useParams();

  const [items, setItems] = useState([]);
  const [nearitems, setNearitems] = useState([]);
  const [receiverId, setReceiverId] = useState(null);
  const [roomId, setRoomId] = useState(null);


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await getData(
          GET_SPECIFIC_ITEM(marketPostId),
          {
            Authorization: `Bearer ${localStorage.getItem('AToken')}`,
          }
        );
        if (response) {
          setItems([response.data]);
          setReceiverId(response.data.userId); // Extract and set receiverId
          console.log(response.data);
        }
      } catch (error) {
        console.error('물품 상세 페이지 정보를 불러오는 중 오류 발생:', error);
      }
    };

    fetchItems();
  }, [marketPostId]);
  

  useEffect(() => {
    const fetchNearitems = async () => {
      try {
        const response = await getData(
          GET_NEARBY_ITEM(marketPostId),
          {
            Authorization: `Bearer ${localStorage.getItem('AToken')}`,
          }
        );
        if (response) {
          setNearitems(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.error('근처 물품 정보를 불러오는 중 오류 발생:', error);
      }
    };

    fetchNearitems();
  }, [marketPostId]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const handleChatButtonClick = async () => {
    if (!receiverId || !marketPostId) {
      console.error('Receiver ID or Market Post ID is missing.');
      return;
    }
  
    try {
      const response = await axios.post(
        `${serverAddress}/api/v1/chat/request`,
        {
          chatType: 'MARKET',
          receiverId: receiverId,
          postId: marketPostId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('AToken')}`,
          },
        }
      );
  
      if (response.data.inSuccess) {
        const roomId = response.data.result.roomId;
        setRoomId(roomId);
        navigate(`/chat/trade/${roomId}`); // Redirect to chat room
      } else {
        console.error('Failed to create chat room:', response.data.message);
      }
    } catch (error) {
      console.error('Error sending chat request:', error);
    }
  };
  

  return (
    <>
      <ItemDetailPageHeader />
      <Space />
      <ContentContainer>
        {items && items.map((item, index) => {
          const imageUrls = item.imageUrls && item.imageUrls.length > 0 
            ? item.imageUrls 
            : [noImage];
          
          const isSingleImage = imageUrls.length === 1;

          return (
            <React.Fragment key={index}>
              {isSingleImage ? (
                <SingleImage src={imageUrls[0]} alt={`Image ${index + 1}`} />
              ) : (
                <Slider {...settings}>
                  {imageUrls.map((url, idx) => (
                    <ItemImage key={idx} src={url} alt={`Slide ${idx + 1}`} />
                  ))}
                </Slider>
              )}
              <InfoContainer>
                <Title>{item.title}</Title>
                <State>{item.dealType === 'DIRECT' ? '직거래' : '택배거래'} | {item.dealStatus === 'AWAIT' ? '거래 가능' : '거래 완료'}</State><br />
                <Price>{item.share ? '나눔' : `₩ ${item.cost}`}</Price>
                <Information>{item.content}</Information>
                <GrayLine /><br />
                <Seller>판매자 정보</Seller><br />
                <SellerInfo>
                  <Place><Image src={compas} alt="compas" style={{ marginRight: "5px" }} />{item.currentCountry} {item.currentLocation}</Place>
                  <User><Image src={icon} alt="profile" style={{ marginRight: "5px" }} />{item.nickname}</User>
                </SellerInfo>
                <Nearby><Blue>주변</Blue> 중고거래글</Nearby>
              </InfoContainer>
              <NearItemList nearitems={nearitems} />
            </React.Fragment>
          );
        })}
      </ContentContainer>
      <BottomTabLayout>
        <ChatButton onClick={handleChatButtonClick}>
          채팅으로 거래하기
        </ChatButton>
      </BottomTabLayout>
    </>
  );
}

export default ItemDetailPage;


const Space = styled.div`
  margin-top: 7vh;
`;

const ContentContainer = styled.div`
  max-height: calc(100vh - 7vh - 87px); /* Space + BottomTabLayout의 높이를 고려하여 설정 */
  overflow-y: auto;
`;

const ItemImage = styled.img`
  width: 100%;
`;

const SingleImage = styled.img`
  width: 100%;
  height: auto; /* 이미지 높이를 자동으로 조절 */
`;

const InfoContainer = styled.div`
  width: 100%;
  padding: 20px 20px; 
  box-sizing: border-box;
  text-align: left;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 1vh;
`;

const State = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: #7A7A7A;
`;

const Price = styled.p`
  font-weight: 600;
  font-size: 30px;
  color: #3E73B2;
`;

const Information = styled.div`
  margin: 2em 0;
  color: #2D2D2D;
  white-space: pre-wrap;
`;

const GrayLine = styled.div`
  border-top: 1px solid #DFDFDF;
`;

const Seller = styled.p`
  font-size: 19px;
  color: #464646;
  font-weight: 600;
`;

const SellerInfo = styled.div`
  height: 2.5em;
  background: #D6EBFF;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: left;
  margin-bottom: 2em;
  color: #7A7A7A;
`;

const Place = styled.p`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin: 10px;
  white-space: nowrap; /* 줄 바꿈 없이 한 줄로 표시 */
  overflow: hidden; /* 넘치는 텍스트를 숨깁니다 */
  text-overflow: ellipsis; /* 넘치는 텍스트를 '...'으로 표시 */
`;

const User = styled.p`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin: 10px;
  white-space: nowrap; /* 줄 바꿈 없이 한 줄로 표시 */
  overflow: hidden; /* 넘치는 텍스트를 숨깁니다 */
  text-overflow: ellipsis; /* 넘치는 텍스트를 '...'으로 표시 */
`;

const Image = styled.img`
  width: 1.5em;
  height: 1.5em;
`;

const ChatButton = styled.div`
  width: 22em;
  height: 3em;
  border-radius: 10px;
  background: ${(props) => props.theme.blueGra};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  color: white;
`;

const BottomTabLayout = styled.div`
  width: 100%;
  max-width: 480px;
  height: 87px;
  position: fixed;
  bottom: 0;
  border-radius: 14px 14px 0px 0px;
  border: 1px solid white;
  background: #ffffff;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0px;
  box-shadow: 0px -1px 4px 0px #e2e2e2;
`;

const Nearby = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: #363636;
`;

const Blue = styled.span`
  color: #3E73B2;
`;
