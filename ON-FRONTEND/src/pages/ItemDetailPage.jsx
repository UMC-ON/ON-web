import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import ItemDetailPageHeader from "../components/ItemDetailPageHeader";
import ItemList from '../components/ItemList';

import compas from "../assets/images/compasIcon.svg";
import icon from "../assets/images/profileIcon.svg";

// 환경 변수에서 액세스 토큰을 가져옵니다.
const accessToken = import.meta.env.VITE_accessToken;

function ItemDetailPage() {
    const navigate = useNavigate();
    const { marketPostId } = useParams(); // URL에서 marketPostId를 가져옵니다.

    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
          try {
            const response = await axios.get(`https://13.209.255.118.nip.io/api/v1/market-post/${marketPostId}`, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });
            setItems([response.data]); // 응답 데이터를 배열로 설정합니다.
            if (response.data) {
                console.log(response.data);
            }
          } catch (error) {
            console.error('물품 상세 페이지 정보를 불러오는 중 오류 발생:', error);
          }
        };
    
        fetchItems();
      }, [marketPostId]); // marketPostId가 변경될 때마다 데이터를 다시 가져옵니다.

    return(
        <>
            <ItemDetailPageHeader />
            <Space />
            <ContentContainer>
                {items && items.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <ItemImage src={item.imageUrls[0]} alt={item.title} />
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <State>{item.dealType} | {item.dealStatus}</State><br/>
                                <Price>{item.share ? '나눔' : `₩ ${item.cost}`}</Price>
                                <Information>{item.content}</Information>
                                <GrayLine /><br/>
                                <Seller>판매자 정보</Seller><br/>
                                <SellerInfo>
                                <Place><Image src={compas} alt="compas" style={{ marginRight: "5px" }} />{item.currentCountry} {item.currentLocation}</Place>
                                <User><Image src={icon} alt="profile" style={{ marginRight: "5px" }} />{item.nickname}</User>
                                </SellerInfo>
                                <Nearby><Blue>주변</Blue> 중고거래글</Nearby>
                            </InfoContainer>
                            <ItemList items={items}/>
                        </React.Fragment>
                        
                    );
                })}
                
            </ContentContainer>
            <BottomTabLayout>
                <ChatButton>
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
`

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
    height: 2em;
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
`;

const User = styled.p`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin: 10px;
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
