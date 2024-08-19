import * as s from './SingleChatStyled';

const SingleAccompanyChat = ({ nickName, time, message, img }) => {
  return (
    <s.SingleChatContainer>
      <s.AccompanyPicture src={img} />
      <s.Nickname>{nickName}</s.Nickname>
      <s.Time>{time}</s.Time>
      <s.Message>{message}</s.Message>
    </s.SingleChatContainer>
  );
};

export default SingleAccompanyChat;
