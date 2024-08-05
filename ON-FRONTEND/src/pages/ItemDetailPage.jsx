import styled from "styled-components";
import React from 'react';

import ItemDetailPageHeader from "../components/ItemDetailPageHeader";
import ItemList from '../components/ItemList';

import keyboard from "../assets/images/keyboard.svg";
import compas from "../assets/images/compasIcon.svg";
import icon from "../assets/images/profileIcon.svg";
import item from "../assets/images/item.svg";

const items = [
    {
        image: item,
        title: '작은 냄비',
        time: '10분 전',
        how: '직거래',
        now: '거래가능',
        where: '독일 베를린',
        icon: icon,
        nickname: '루이',
        id: 'fndl333',
        price: '나눔'
    },
    {
        image: item,
        title: '작은 냄비',
        time: '10분 전',
        how: '직거래',
        now: '거래가능',
        where: '독일 베를린',
        icon: icon,
        nickname: '루이',
        id: 'fndl333',
        price: '나눔'
    },    
    {
        image: item,
        title: '작은 냄비',
        time: '10분 전',
        how: '직거래',
        now: '거래가능',
        where: '독일 베를린',
        icon: icon,
        nickname: '루이',
        id: 'fndl333',
        price: '나눔'
    },    
    {
        image: item,
        title: '작은 냄비',
        time: '10분 전',
        how: '직거래',
        now: '거래가능',
        where: '독일 베를린',
        icon: icon,
        nickname: '루이',
        id: 'fndl333',
        price: '나눔'
    },
    {
        image: item,
        title: '작은 냄비',
        time: '10분 전',
        how: '직거래',
        now: '거래가능',
        where: '독일 베를린',
        icon: icon,
        nickname: '루이',
        id: 'fndl333',
        price: '나눔'
    },
    {
        image: item,
        title: '작은 냄비',
        time: '10분 전',
        how: '직거래',
        now: '거래가능',
        where: '독일 베를린',
        icon: icon,
        nickname: '루이',
        id: 'fndl333',
        price: '5000'
    },        
];



function ItemDetailPage() {
    const detail = [
        {
          image: keyboard,
          title: '블루투스 키보드',
          how: '택배거래',
          now: '거래가능',
          price: '5,000',
          info: '여기서는 학교 다닐 때 아이패드로 필기하는 것보다, 타자 치는 게 더 편한 것 같아서 구매한 키보드입니다. \n애플 제품들이랑만 호환 가능해요. 참고 부탁드려요 :) \n\n제가 당장 이번 주말부터 여행 일정이 있어서, 택배로만 거래 가능하고 쿨거시 에눌해 드립니다.',
          place: '독일 베를린',
          nickname: '루이',
          id: 'fndl333',
        },
    ];

    const itemDetail = detail[0]; // 첫 번째 항목을 선택합니다.

    return(
        <>
            <ItemDetailPageHeader />
            <Space />
            <ContentContainer>
                <ItemImage src={itemDetail.image} alt={itemDetail.title} />
                <InfoContainer>
                    <Title>{itemDetail.title}</Title>
                    <State>{itemDetail.how} | {itemDetail.now}</State><br/>
                    <Price>{itemDetail.price === '나눔' ? itemDetail.price : `₩ ${itemDetail.price}`}</Price>
                    <Information>{itemDetail.info}</Information>
                    <GrayLine /><br/>
                    <Seller>판매자 정보</Seller><br/>
                    <SellerInfo>
                        <Place><Image src={compas} alt="compas" style= {{marginRight: "5px"}} />{itemDetail.place}</Place>
                        <User><Image src={icon} alt="profile" style= {{marginRight: "5px"}} />{itemDetail.nickname}({itemDetail.id})</User>
                    </SellerInfo>
                    <Nearby><span style={{color: '#3E7B2'}}>주변</span> 중고거래글</Nearby><br/>
                    <ItemList items={items}/>
                </InfoContainer>
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
    padding: 20px 26px; 
    box-sizing: border-box;
    margin-bottom: 2vh;
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
`
