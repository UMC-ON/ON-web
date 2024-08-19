import * as s from './ChatBubbleStyled';

const SentChatBubble = ({ color, text }) => {
  return (
    <s.SentChatContainer color={color}>
      <s.Text>{text} </s.Text>
    </s.SentChatContainer>
  );
};

export default SentChatBubble;
