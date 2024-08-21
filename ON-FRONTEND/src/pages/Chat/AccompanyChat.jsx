import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as s from './ChatStyled';
import ChatHeader from '../../components/Chat/ChatHeader';
import AccompanyChatInfo from '../../components/Chat/AccompanyChatInfo';
import SentChatBubble from '../../components/Chat/SentChatBubble';
import ReceivedChatBubble from '../../components/Chat/ReceivedChatBubble';
import ChatInput from '../../components/Chat/ChatInput';
import BlueBackground from '../../assets/images/chat_background_blue.svg';
import PurpleBackground from '../../assets/images/chat_background_purple.svg';
import Loading from '../../components/Loading/Loading';

import { GET_ACCOMPANY_CHAT } from '../../api/urls';
import { getData } from '../../api/Functions';

const AccompanyChat = () => {
  //채팅을 시작한 사람 1 -> 보라색 배경
  const [user, setUser] = useState();
  //인포 백그라운드, 채팅 버블 색상
  const [defaultColor, setDefaultColor] = useState('');
  //글씨, 헤더 색상
  const [pointColor, setPointColor] = useState('');
  //axios 결과
  //현재 유저 아이디
  const [currentUserId, setCurrentUserId] = useState(null);
  //채팅 말, 보낸 유저 아이디 담기
  const [chatList, setChatList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const { roomId, senderName } = location.state || {}; // Destructure selectedCountry from location.state
  useEffect(() => {
    console.log(roomId, senderName);
  }, []);

  //axios 동행 구하기
  useEffect(() => {
    const fetchAccompanyChat = async () => {
      setIsLoading(true);
      try {
        const response = await getData(
          GET_ACCOMPANY_CHAT(roomId),
          {
            Authorization: `${localStorage.getItem('grantType')} ${localStorage.getItem('AToken')}`,
          },
          { roomId: roomId },
        );

        if (response) {
          console.log(response.data.result);
          console.log(response.data.result.currentUserId);
          console.log(response.data.result.chatList);
          setCurrentUserId(response.data.result.currentUserId);
          setChatList(response.data.result.chatList);
          // 첫 번째 채팅 메시지의 userId와 currentUserId 비교
          const firstChatUserId = response.data.result.chatList[0]?.userId;
          const currentUserId = response.data.result.currentUserId;

          if (firstChatUserId === currentUserId) {
            setUser(1); // 현재 유저가 첫 번째 메시지를 보낸 경우
            setDefaultColor('rgba(194, 199, 255, 1)');
            setPointColor('rgba(173, 153, 255, 1)');
          } else {
            setUser(2); // 현재 유저가 첫 번째 메시지를 보내지 않은 경우
            setDefaultColor('rgba(217, 236, 255, 1)');
            setPointColor('rgba(132, 180, 255, 1)');
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAccompanyChat();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <s.ChatLayout>
      <ChatHeader
        receiver={senderName}
        pointColor={pointColor}
        user={user}
        isAccompany={true}
      />
      <AccompanyChatInfo
        user={user}
        roomId={roomId}
        userName={senderName}
        defaultColor={defaultColor}
        pointColor={pointColor}
      />
      <s.ChatWrapper>
        {chatList && chatList.length > 0 ? (
          chatList.map((data, index) => (
            <s.ChatContainer key={index}>
              {data.userId === currentUserId ? (
                <s.SentChatWrapper>
                  <SentChatBubble
                    color={defaultColor}
                    text={data.message}
                  />
                </s.SentChatWrapper>
              ) : (
                <s.ReceivedChatWrapper>
                  <ReceivedChatBubble
                    color={defaultColor}
                    text={data.message}
                  />
                </s.ReceivedChatWrapper>
              )}
            </s.ChatContainer>
          ))
        ) : (
          <></>
        )}
      </s.ChatWrapper>
      <s.Background
        $backgroundimageurl={user === 1 ? PurpleBackground : BlueBackground}
      />
      <ChatInput roomId={roomId} />
    </s.ChatLayout>
  );
};

export default AccompanyChat;
