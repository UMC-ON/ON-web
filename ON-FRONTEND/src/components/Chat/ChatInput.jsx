import React, { useState, useEffect } from 'react';
import * as s from './ChatInputStyled';
import { POST_CHAT } from '../../api/urls';
import axios from 'axios';
import Loading from '../Loading/Loading';

const ChatInput = ({ roomId, addNewMessage, currentUserId }) => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messageInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsLoading(true);
    try {
      const apiClient = axios.create({
        baseURL: 'http://13.209.255.118:8080/',
        headers: {
          'Content-Type': 'text/plain',
          Authorization: `${localStorage.getItem('grantType')} ${localStorage.getItem('AToken')}`,
        },
      });

      const response = await apiClient.post(POST_CHAT(roomId), message);

      if (response) {
        const newMessage = {
          userId: currentUserId,
          message: message,
        };
        addNewMessage(newMessage);
        setMessage('');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <s.InputField>
      <s.TextInputContainer>
        <s.TextInput
          onChange={messageInputChange}
          value={message}
          disabled={isLoading}
        />
        <s.SendButton
          disabled={isLoading}
          onClick={handleSendMessage}
        />
      </s.TextInputContainer>
    </s.InputField>
  );
};

export default ChatInput;
