import styled from 'styled-components';

const SingleChat = ({ nickName, time, message }) => {
  return (
    <SingleChatContainer>
      <Picture />
      <Nickname>{nickName}</Nickname>
      <Time>{time}</Time>
      <Message>{message}</Message>
    </SingleChatContainer>
  );
};

export default SingleChat;

const SingleChatContainer = styled.div`
  display: grid;
  grid-template-areas:
    'pic nickname time'
    'pic message message';
  width: 100%;
  grid-template-columns: auto auto 1fr;
  place-items: center start;
  column-gap: 0.9rem;
  row-gap: 0.2rem;
  margin: 0.7rem 0;
`;

const Picture = styled.div`
  grid-area: pic;
  width: 3.125rem;
  height: 3.125rem;
  flex-shrink: 0;
  border: 1px solid #d9d9d9;
  border-radius: 50%;
  background: lightgray 50% / cover no-repeat;
`;
const Nickname = styled.span`
  grid-area: nickname;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const Time = styled.span`
  grid-area: time;
  color: #7b7b7b;
  font-family: Inter;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Message = styled.span`
  grid-area: message;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  color: #000;
  text-overflow: ellipsis;
  font-family: Inter;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
