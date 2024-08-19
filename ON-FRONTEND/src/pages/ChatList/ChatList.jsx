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

const ChatList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentMode, setCurrentMode] = useState('accompany');
  const [isAccompanyChat, setIsAccompanyChat] = useState(['내용']);
  const [isTradeChat, setIsTradeChat] = useState(['임시내용']);

  const handleModeChange = (mode) => () => {
    if (currentMode !== mode) {
      setCurrentMode(mode);
    }
  };

  const isAccompanyChatEmpty = isAccompanyChat.length === 0;
  const isTradeChatEmpty = isTradeChat.length === 0;

  useEffect(() => {
    console.log('Current Mode:', currentMode);
  }, [currentMode]);

  useEffect(() => {
    console.log('Current ac:', isAccompanyChat);
  }, [currentMode]);

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
        isAccompanyChatEmpty ? (
          <NoContent
            content="채팅 내역"
            style={{ paddingBottom: '10rem' }}
          />
        ) : (
          <NavLink to="/chat">
            <s.ChatListWrapper>
              <SingleAccompanyChat
                img={img} //컨트리 넘겨줘야 함.
                nickName="동행"
                time="2023"
                message="혹시 8월 중 며칠 정도에 출발하실 예정이신가요?"
              />
              <s.Line />
            </s.ChatListWrapper>
          </NavLink>
        )
      ) : isTradeChatEmpty ? ( //물품거래
        <NoContent content="채팅 내역" />
      ) : (
        <NavLink to="/chat">
          <s.ChatListWrapper>
            <SingleTradeChat
              img={img}
              nickName="물품거래"
              time="2023"
              message="혹시 8월 중 며칠 정도에 출발하실 예정이신가요?"
            />
            <s.Line />
          </s.ChatListWrapper>
        </NavLink>
      )}

      <BottomTabNav />
    </s.ChatListLayout>
  );
};

export default ChatList;
