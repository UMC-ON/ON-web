import styled from 'styled-components';
import React from 'react';

import PageHeader from '../components/PageHeader/PageHeader';
import ItemList from '../components/ItemList';

import item from "../assets/images/item.svg";
import icon from "../assets/images/item_icon.svg";
import nothing from "../assets/images/no_content.svg";

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
        price: '나눔'
    },        
];

function ScrapList() {
    const noItems = items.length === 0;

    return (
        <>
            <PageHeader pageName={'스크랩한 물품'}></PageHeader>
            <Space /><br/><br/>
            {noItems ? (
                <NoContentWrapper>
                    <NoContentContainer>
                        <NoContentImage src={nothing} alt="No content" />
                    </NoContentContainer><br/><br/>
                    <NoContentMessage>앗, 스크랩한 내역이 없어요!</NoContentMessage>
                </NoContentWrapper>
            ) : (
                <>
                    <ItemList items={items} />
                    <LastItemMessage>마지막 물품입니다.</LastItemMessage>
                </>
            )}
        </>
    )
}

export default ScrapList;

const Space = styled.div`
  margin-top: 7vh;
`;

const LastItemMessage = styled.div`
  text-align: center;
  margin: 20px;
  color: #B8B8B8;
  font-size: 10px;
`;

const NoContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
`;

const NoContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoContentImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const NoContentMessage = styled.p`
  font-size: 14px;
  color: #B8B8B8;
`;
