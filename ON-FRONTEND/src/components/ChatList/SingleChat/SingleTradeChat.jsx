import { useState } from 'react';
import * as s from './SingleChatStyled';
const SingleTradeChat = ({ nickName, time, message, img }) => {
  return (
    <s.SingleChatContainer>
      <s.TradePicture src={img} />
      <s.Nickname>{nickName}</s.Nickname>
      <s.Time>{time}</s.Time>
      <s.Message>{message}</s.Message>
    </s.SingleChatContainer>
  );
};

export default SingleTradeChat;
