import React, { useState, useEffect } from 'react';
import * as s from './ChatInputStyled';

const ChatInput = () => {
  const [message, setMessage] = useState('');

  const messageInputChange = (e) => {
    setMessage(e.target.value);
  };

  // const onSubmit =()=>{

  // }
  return (
    <s.InputField>
      <s.SubmitForm>
        <s.TextInputContainer>
          <s.TextInput
            onChange={messageInputChange}
            value={message}
          />
          <s.SendButton />
        </s.TextInputContainer>
      </s.SubmitForm>
    </s.InputField>
  );
};

export default ChatInput;
