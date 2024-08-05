import PageHeader from '../../components/PageHeader/PageHeader';
import BottomTabNav from '../../components/BottomTabNav/BottomTabNav';
import * as s from './ChatListStyled';
import { useState, useEffect } from 'react';
import SingleChat from '../../components/ChatList/SingleChat/SingleChat';
import NoContent from '../../components/NoContent/NoContent';
import Loading from '../../components/Loading/Loading';
const ChatList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentMode, setCurrentMode] = useState('accompany');
  const [isAccompanyChat, setIsAccompanyChat] = useState([]);
  const [isTradeChat, setIsTradeChat] = useState([]);

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
      <Loading />
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

      {currentMode === 'accompany' ? (
        isAccompanyChatEmpty ? (
          <NoContent
            content="채팅 내역"
            style={{ paddingBottom: '10rem' }}
          />
        ) : (
          <s.ChatListWrapper>
            <SingleChat
              nickName="동행"
              time="2023"
              message="혹시 8월 중 며칠 정도에 출발하실 예정이신가요?ddddddddd"
            />
            <s.Line />
          </s.ChatListWrapper>
        )
      ) : isTradeChatEmpty ? (
        <s.ChatListWrapper>
          <SingleChat
            nickName="물품거래"
            time="2023"
            message="혹시 8월 중 며칠 정도에 출발하실 예정이신가요?ddddddddd"
          />
          <s.Line />
        </s.ChatListWrapper>
      ) : (
        <NoContent content="채팅 내역" />
      )}

      <BottomTabNav />
    </s.ChatListLayout>
  );
};

export default ChatList;
