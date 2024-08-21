import PageHeader from '../../components/PageHeader/PageHeader';
import BottomTabNav from '../../components/BottomTabNav/BottomTabNav';
import * as s from './ChatListStyled';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import SingleAccompanyChat from '../../components/ChatList/SingleChat/SingleAccompanyChat';
import SingleTradeChat from '../../components/ChatList/SingleChat/SingleTradeChat';
import NoContent from '../../components/NoContent/NoContent';
import Loading from '../../components/Loading/Loading';
import img from '../../assets/images/country_flag/000.svg';

import { GET_TRADE_LIST, GET_ACCOMPANY_LIST } from '../../api/urls';
import { getData } from '../../api/Functions';

const ChatList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentMode, setCurrentMode] = useState('accompany');
  const [accompanyChatResult, setAccompanyChatResult] = useState([]);
  const [tradeChatResult, setTradeChatResult] = useState([]);

  //채팅 모드 바꾸는 함수
  const handleModeChange = (mode) => () => {
    if (currentMode !== mode) {
      setCurrentMode(mode);
    }
  };

  useEffect(() => {
    console.log('Current Mode:', currentMode);
  }, [currentMode]);

  useEffect(() => {
    console.log('Current ac:', accompanyChatResult);
  }, [currentMode]);

  //채팅 존재 여부 확인 변수
  const isAccompanyChatEmpty = accompanyChatResult.length === 0;
  const isTradeChatEmpty = tradeChatResult.length === 0;

  //axios 동행 구하기
  useEffect(() => {
    const fetchAccompanyChat = async () => {
      setIsLoading(true);
      try {
        const response = await getData(
          GET_ACCOMPANY_LIST,
          {
            Authorization: `${localStorage.getItem('grantType')} ${localStorage.getItem('AToken')}`,
          },
          {},
        );

        if (response) {
          console.log(response.data.result);
          console.log(response.data.result.roomList);
          setAccompanyChatResult(response.data.result.roomList);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAccompanyChat();
  }, [currentMode === 'accompany']);

  //axios 물품 거래
  useEffect(() => {
    const fetchTradeChat = async () => {
      setIsLoading(true);
      try {
        const response = await getData(
          GET_TRADE_LIST,
          {
            Authorization: `${localStorage.getItem('grantType')} ${localStorage.getItem('AToken')}`,
          },
          {},
        );

        if (response) {
          console.log(response.data.result);
          console.log(response.data.result.roomList);
          setTradeChatResult(response.data.result.roomList);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTradeChat();
  }, [currentMode === 'trade']);

  //콘솔 출력 함수들
  useEffect(() => {
    console.log('trade chat: ', tradeChatResult);
  }, [tradeChatResult]);

  useEffect(() => {
    console.log('acc chat: ', accompanyChatResult);
  }, [accompanyChatResult]);

  return (
    <s.ChatListLayout>
      <PageHeader pageName="채팅" />
      {/*위쪽 버튼*/}
      <s.ModeContainer>
        <s.ModeButton
          onClick={handleModeChange('accompany')}
          $active={currentMode === 'accompany'}
        >
          동행 구하기
        </s.ModeButton>
        <s.ModeButton
          onClick={handleModeChange('trade')}
          $active={currentMode === 'trade'}
        >
          물품거래
        </s.ModeButton>
      </s.ModeContainer>

      {isLoading ? (
        <Loading />
      ) : currentMode === 'accompany' ? ( //동행 구하기
        <>
          {accompanyChatResult && accompanyChatResult.length > 0 ? (
            accompanyChatResult.map((data) => (
              <s.ChatListWrapper>
                <SingleAccompanyChat
                  key={data.roomId}
                  roomId={data.roomId}
                  img={data.location}
                  nickName={data.senderName}
                  time={data.lastChatTime !== null ? data.lastChatTime : ''}
                  message={
                    data.lastMessage !== null
                      ? data.lastMessage
                      : '채팅을 시작해보새요!'
                  }
                  senderName={data.senderName}
                />
                <s.Line />
              </s.ChatListWrapper>
            ))
          ) : (
            <NoContent
              content="채팅 내역"
              style={{ paddingBottom: '10rem' }}
            />
          )}
        </>
      ) : (
        //물품거래
        <>
          {tradeChatResult && tradeChatResult.length > 0 ? (
            tradeChatResult.map((data) => (
              <s.ChatListWrapper>
                <SingleTradeChat
                  key={data.roomId}
                  roomId={data.roomId}
                  img={data.profileImg}
                  nickName={data.senderName}
                  time={data.lastChatTime !== null ? data.lastChatTime : ''}
                  message={
                    data.lastMessage !== null
                      ? data.lastMessage
                      : '새로운 채팅을 시작해보새요!'
                  }
                  senderName={data.senderName}
                />
                <s.Line />
              </s.ChatListWrapper>
            ))
          ) : (
            <NoContent
              content="채팅 내역"
              style={{ paddingBottom: '10rem' }}
            />
          )}
        </>
      )}

      <BottomTabNav />
    </s.ChatListLayout>
  );
};

export default ChatList;
