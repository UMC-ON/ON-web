import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as s from './SingleChatStyled';

const SingleTradeChat = ({
  nickName,
  time,
  message,
  img,
  senderName,
  roomId,
}) => {
  const navigate = useNavigate();

  return (
    <s.SingleChatContainer
      onClick={() =>
        navigate(`/chat/trade/${roomId}`, {
          state: { roomId: roomId, senderName: senderName },
        })
      }
    >
      <s.TradePicture
        src={img}
        alt="no img"
      />
      <s.Nickname>{nickName}</s.Nickname>
      <s.Time>{time}</s.Time>
      <s.Message>{message}</s.Message>
    </s.SingleChatContainer>
  );
};

export default SingleTradeChat;
