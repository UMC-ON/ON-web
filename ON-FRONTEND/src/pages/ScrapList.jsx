import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import PageHeader from '../components/PageHeader/PageHeader';
import ScrapListComponent from '../components/ScrapListComponent';

import nothing from "../assets/images/no_content.svg";

const serverAddress = import.meta.env.VITE_SERVER_ADDRESS;

import { getData } from '../api/Functions';
import { GET_SCRAP } from '../api/urls';

function ScrapList() {
    const [items, setItems] = useState([]);
    let userInfo = useSelector((state) => state.user.user);

    useEffect(() => {
        if (userInfo) {
          const fetchItems = async () => {
            try {
              const response = await getData(
                GET_SCRAP(userInfo.id), 
                {
                  Authorization: `Bearer ${localStorage.getItem('AToken')}`,
                }
              );
    
              if (response?.data) {
                setItems(response.data);
                console.log(response.data);
              }
            } catch (error) {
              console.error('스크랩 물품 목록을 불러오는 중 오류 발생:', error);
            }
          };
    
          fetchItems();
        }
      }, [userInfo]);

    return (
        <>
            <PageHeader pageName={'스크랩한 물품'} />
            <Space /><br /><br />
            {items.length === 0 ? (
                <NoContentWrapper>
                    <NoContentContainer>
                        <NoContentImage src={nothing} alt="No content" />
                    </NoContentContainer><br /><br />
                    <NoContentMessage>앗, 스크랩한 내역이 없어요!</NoContentMessage>
                </NoContentWrapper>
            ) : (
                <>
                    <ScrapListComponent items={items} />
                    <LastItemMessage>마지막 물품입니다.</LastItemMessage>
                </>
            )}
        </>
    );
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
