import styled from 'styled-components';

export const ChatLayout = styled.div`
  width: 100vw;
  max-width: 480px;
  display: flex;
  box-sizing: border-box;
  padding: 61px 0px 0px;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  bottom: 6.125px;
  z-index: 0;
  background-image: url(${(props) => props.$backgroundimageurl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;
  background-position-y: 100%;
`;

export const TradeBackground = styled.div`
  width: 100vw;
  height: 21.625rem;
  position: fixed;
  bottom: 0;
  z-index: 0;
  background: linear-gradient(
    180deg,
    rgba(110, 186, 255, 0) 0%,
    rgba(86, 150, 217, 0.1) 50%,
    rgba(62, 115, 178, 0.16) 100%
  );
`;

export const ChatWrapper = styled.div`
  z-index: 1;
  width: 100%;
  padding: 2.25rem 1.5rem 0 1.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 7rem;
`;

// SentChatWrapper - 전체 컨테이너
export const SentChatWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end; // 오른쪽 정렬
`;

// ReceivedChatWrapper - 전체 컨테이너
export const ReceivedChatWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start; // 왼쪽 정렬
`;

// ChatWrapper - 전체 채팅 레이아웃
export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
