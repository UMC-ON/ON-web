import * as s from './ChatBubbleStyled';

const ReceivedChatBubble = ({ color, text }) => {
  return (
    <s.ReceivedChatContainer color={color}>
      <s.Text>{text} </s.Text>
    </s.ReceivedChatContainer>
  );
};

export default ReceivedChatBubble;
