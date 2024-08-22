import * as s from './SingleChatStyled';
import { useNavigate } from 'react-router-dom';
import defaultImg from '../../../assets/images/country_flag/default.svg';

const SingleAccompanyChat = ({
  nickName,
  time,
  message,
  img,
  roomId,
  senderName,
}) => {
  const navigate = useNavigate();

  return (
    <s.SingleChatContainer
      onClick={() =>
        navigate(`/chat/accompany/${roomId}`, {
          state: { roomId: roomId, senderName: senderName },
        })
      }
    >
      <s.AccompanyPicture
        src={defaultImg}
        alt="no img"
      />
      <s.Nickname>{nickName}</s.Nickname>
      <s.Time>{time}</s.Time>
      <s.Message>{message}</s.Message>
    </s.SingleChatContainer>
  );
};

export default SingleAccompanyChat;
