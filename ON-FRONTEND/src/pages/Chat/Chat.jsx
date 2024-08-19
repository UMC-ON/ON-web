import { useState, useEffect } from 'react';
import * as s from './ChatStyled';
import ChatHeader from '../../components/Chat/ChatHeader';
import AccompanyChatInfo from '../../components/Chat/AccompanyChatInfo';
import SentChatBubble from '../../components/Chat/SentChatBubble';
import ReceivedChatBubble from '../../components/Chat/ReceivedChatBubble';
import ChatInput from '../../components/Chat/ChatInput';
import BlueBackground from '../../assets/images/chat_background_blue.svg';
import PurpleBackground from '../../assets/images/chat_background_purple.svg';

const Chat = () => {
  //채팅을 시작한 사람 chat_user_one -> 보라색 배경
  const [user, setUser] = useState(2); //빈칸으로 수정 필요
  //인포 백그라운드, 채팅 버블 색상
  const [defaultColor, setDefaultColor] = useState('');
  //글씨, 헤더 색상
  const [pointColor, setPointColor] = useState('');

  //데이터 받아오는 함수
  useEffect(() => {
    //본인이 채팅을 시작했다면
    if (user === 1) {
      setDefaultColor('rgba(194, 199, 255, 1)');
      setPointColor('rgba(173, 153, 255, 1)');
    } else if (user === 2) {
      setDefaultColor('rgba(217, 236, 255, 1)');
      setPointColor('rgba(132, 180, 255, 1)');
    }
  }, []);
  //  {user === 1 ? (backgroundImageUrl={BlueBackground}) : (backgroundImageUrl={BlueBackground}) }
  return (
    <s.ChatLayout>
      <ChatHeader
        receiver="루이"
        pointColor={pointColor}
        user={user}
      />
      <AccompanyChatInfo
        user={user}
        // userName={}
        defaultColor={defaultColor}
        pointColor={pointColor}
      />
      <s.ChatWrapper>
        <SentChatBubble
          color={defaultColor}
          text="text example senttext example senttext example sent"
        />
        <ReceivedChatBubble
          color={defaultColor}
          text="text example received"
        />
      </s.ChatWrapper>{' '}
      {user === 1 ? (
        <s.Background backgroundImageUrl={PurpleBackground} />
      ) : (
        <s.Background backgroundImageUrl={BlueBackground} />
      )}
      <ChatInput />
    </s.ChatLayout>
  );
};

export default Chat;
