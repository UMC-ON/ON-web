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



// import styled from 'styled-components';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// import PageHeader from '../components/PageHeader/PageHeader';
// import ItemList from '../components/ItemList';

// import nothing from "../assets/images/no_content.svg";

// function ScrapList() {
//     const [items, setItems] = useState([]);
//     const [loading, setLoading] = useState(true); // 로딩 상태를 추가합니다.
//     const userId = 123; // 임의의 userId를 설정합니다.

//     useEffect(() => {
//         const fetchScrappedItems = async () => {
//             try {
//                 const response = await axios.get(`/api/v1/scraps/${userId}`);
//                 setItems(response.data); // API 응답 데이터를 상태에 설정합니다.
//             } catch (error) {
//                 console.error('스크랩한 물품을 가져오는 중 오류 발생:', error);
//             } finally {
//                 setLoading(false); // 로딩 상태를 종료합니다.
//             }
//         };

//         fetchScrappedItems();
//     }, [userId]);

//     const noItems = !loading && items.length === 0;

//     return (
//         <>
//             <PageHeader pageName={'스크랩한 물품'}></PageHeader>
//             <Space /><br/><br/>
//             {loading ? (
//                 <LoadingMessage>로딩 중...</LoadingMessage>
//             ) : noItems ? (
//                 <NoContentWrapper>
//                     <NoContentContainer>
//                         <NoContentImage src={nothing} alt="No content" />
//                     </NoContentContainer><br/><br/>
//                     <NoContentMessage>앗, 스크랩한 내역이 없어요!</NoContentMessage>
//                 </NoContentWrapper>
//             ) : (
//                 <>
//                     <ItemList items={items} />
//                     <LastItemMessage>마지막 물품입니다.</LastItemMessage>
//                 </>
//             )}
//         </>
//     )
// }

// export default ScrapList;

// const Space = styled.div`
//   margin-top: 7vh;
// `;

// const LastItemMessage = styled.div`
//   text-align: center;
//   margin: 20px;
//   color: #B8B8B8;
//   font-size: 10px;
// `;

// const NoContentWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 60vh;
// `;

// const NoContentContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const NoContentImage = styled.img`
//   max-width: 100%;
//   max-height: 100%;
// `;

// const NoContentMessage = styled.p`
//   font-size: 14px;
//   color: #B8B8B8;
// `;

// const LoadingMessage = styled.div`
//   text-align: center;
//   margin: 20px;
//   color: #B8B8B8;
//   font-size: 14px;
// `;
