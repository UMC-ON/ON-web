import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as s from './ChatStyled';
import ChatHeader from '../../components/Chat/ChatHeader';
import TradeChatInfo from '../../components/Chat/TradeChatInfo';
import SentChatBubble from '../../components/Chat/SentChatBubble';
import ReceivedChatBubble from '../../components/Chat/ReceivedChatBubble';
import ChatInput from '../../components/Chat/ChatInput';
import Loading from '../../components/Loading/Loading';

import { GET_TRADE_CHAT } from '../../api/urls';
import { getData } from '../../api/Functions';

const TradeChat = () => {
  const [user, setUser] = useState(); // 채팅을 시작한 사람(1은 현재 유저)
  const [defaultColor, setDefaultColor] = useState(''); // 채팅 버블의 기본 색상 설정
  const [currentUserId, setCurrentUserId] = useState(null); // 현재 유저의 ID 저장
  const [chatList, setChatList] = useState([]); // 채팅 메시지 리스트 저장
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 관리

  const location = useLocation();
  const navigate = useNavigate(); // useNavigate 훅 사용

  const { roomId, senderName } = location.state || {}; // URL에서 전달된 roomId와 senderName 가져오기

  const chatWrapperRef = useRef(null); // 채팅 메시지 영역에 대한 참조 생성
  const [isPolling, setIsPolling] = useState(true); // 폴링 동작 제어

  const [lastMessageIndex, setLastMessageIndex] = useState(null); // 마지막 메시지의 인덱스를 저장

  useEffect(() => {
    // 초기 채팅 데이터를 가져오는 함수
    const fetchTradeChat = async () => {
      setIsLoading(true);
      try {
        const response = await getData(
          GET_TRADE_CHAT(roomId),
          {
            Authorization: `${localStorage.getItem('grantType')} ${localStorage.getItem('AToken')}`,
          },
          { roomId: roomId },
        );

        if (response) {
          const chatData = response.data.result.chatList;
          setCurrentUserId(response.data.result.currentUserId);
          setChatList(chatData);

          // 첫 번째 채팅 메시지의 userId와 currentUserId 비교
          const firstChatUserId = chatData[0]?.userId;
          const currentUserId = response.data.result.currentUserId;

          if (firstChatUserId === currentUserId) {
            setUser(1); // 현재 유저가 첫 번째 메시지를 보낸 경우
            setDefaultColor('#C2C7FF'); // 보라색 배경
          } else {
            setUser(2); // 현재 유저가 첫 번째 메시지를 보내지 않은 경우
            setDefaultColor('#D1E2FF'); // 파란색 배경
          }

          // 마지막 메시지의 인덱스 저장
          if (chatData.length > 0) {
            setLastMessageIndex(chatData[chatData.length - 1].index); // 메시지의 고유 인덱스 사용
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTradeChat();
  }, [roomId]);

  // 롱폴링을 통한 새로운 메시지 가져오기
  const pollForNewMessages = async () => {
    try {
      const response = await getData(
        GET_TRADE_CHAT(roomId),
        {
          Authorization: `${localStorage.getItem('grantType')} ${localStorage.getItem('AToken')}`,
        },
        { roomId: roomId },
      );

      if (response) {
        const newChatList = response.data.result.chatList;

        // 새로운 메시지가 있는지 확인
        if (newChatList.length > 0) {
          const lastChatIndex = newChatList[newChatList.length - 1].index;

          // 새로운 메시지들만 필터링
          const newMessages = newChatList.filter(
            (chat) => chat.index > lastMessageIndex,
          );

          if (newMessages.length > 0) {
            setChatList((prevChatList) => [...prevChatList, ...newMessages]);

            // 새로운 메시지가 추가되었으므로 스크롤을 가장 밑으로 이동
            scrollToBottom();

            // 마지막 메시지 인덱스 업데이트
            setLastMessageIndex(lastChatIndex);
          }
        }
      }

      // 폴링을 계속 진행
      if (isPolling) {
        setTimeout(pollForNewMessages, 3000); // 3초 간격으로 서버에 요청 (간격은 필요에 따라 조정)
      }
    } catch (error) {
      console.error('Error polling for new messages:', error);
      // 에러 발생 시 일정 시간 후 다시 시도
      setTimeout(pollForNewMessages, 5000); // 5초 후 재시도
    }
  };
  const previousPath = useRef(location.pathname); // 이전 경로를 추적하기 위한 useRef

  useEffect(() => {
    // 경로가 변경되면 롱폴링 중단
    if (previousPath.current !== location.pathname) {
      setIsPolling(false);
    }

    // 롱폴링 시작
    if (isPolling) {
      pollForNewMessages();
    }

    // 경로 변경 시 이전 경로 업데이트
    previousPath.current = location.pathname;

    // 컴포넌트 언마운트 시 롱폴링 종료
    return () => {
      setIsPolling(false); // 폴링 중단
    };
  }, [isPolling, location.pathname]);

  // 새로운 메시지가 추가될 때 채팅 스크롤을 가장 밑으로 내리는 함수
  const scrollToBottom = () => {
    if (chatWrapperRef.current) {
      chatWrapperRef.current.scrollTop = chatWrapperRef.current.scrollHeight;
    }
  };

  // 새로운 메시지가 추가될 때 chatList 업데이트 및 스크롤 이동
  const addNewMessage = (newMessage) => {
    setChatList((prevChatList) => {
      const updatedChatList = [...prevChatList, newMessage];
      return updatedChatList;
    });

    // 스크롤을 가장 밑으로 이동
    scrollToBottom();

    // 새로운 메시지의 인덱스를 마지막 메시지 인덱스로 설정
    setLastMessageIndex(newMessage.index);
  };

  useEffect(() => {
    // 처음 렌더링 후 또는 chatList가 업데이트될 때 스크롤을 가장 밑으로 이동
    scrollToBottom();
  }, [chatList]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <s.ChatLayout>
      <ChatHeader
        receiver={senderName}
        pointColor="#fff"
        user={user}
        isAccompany={false}
      />
      <TradeChatInfo
        user={user}
        roomId={roomId}
      />
      <s.ChatWrapper ref={chatWrapperRef}>
        {' '}
        {/* chatWrapperRef를 s.ChatWrapper에 연결 */}
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
      <s.TradeBackground />
      <ChatInput
        roomId={roomId}
        currentUserId={currentUserId}
        addNewMessage={addNewMessage}
      />
    </s.ChatLayout>
  );
};

export default TradeChat;
