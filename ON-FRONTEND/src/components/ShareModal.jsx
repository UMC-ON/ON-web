import styled from 'styled-components';
import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';

import planeIcon from '../assets/images/plane_icon.svg';
import closeIcon from '../assets/images/close_button.svg';

  function ShareModal({ closeModal }) {
    const [copySuccess, setCopySuccess] = useState('');
    const linkToCopy = 'https://oncommunity.io';

    const location = useLocation();

    const handleCopyClick = () => {
      navigator.clipboard.writeText(window.location.href)
      .then(() => {
        setCopySuccess('링크가 복사되었습니다!');
      })
      .catch(err => {
        setCopySuccess('Failed to copy the link');
        console.error('Failed to copy: ', err);
      });
    };

    return (
      <Box>
        <ModalContent>
          <Close src={closeIcon} onClick={closeModal} />
          <Icon src={planeIcon} />
  
          <ModalTitle>링크 공유하기</ModalTitle>
          <RoundContainer>
            <LinkText>{window.location.href}</LinkText>
            <PurpleButton onClick={handleCopyClick}>복사</PurpleButton>
          </RoundContainer>
          {copySuccess && <SuccessText>{copySuccess}</SuccessText>}
          <Space/>
  
          <ModalText>위 링크를 복사하여</ModalText>
          <ModalText>주위 사람들에게 동행글을 알려보세요.</ModalText>
  
          <Space />
        </ModalContent>
      </Box>
    );
  }

  export default ShareModal;
  
  
  const Space = styled.div`
    margin-bottom: 3vh;
  `;
  
  const Left = styled.span`
    display: flex;
    justify-content: center;
  `;
  
  const Icon = styled.img`
    width: 80px;
    height: 80px;
    margin-bottom: 3vh;
  `;
  
  const Box = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  
  const ModalContent = styled.div`
    background: white;
    padding: 24px 16px;
    border-radius: 4px;
    width: 65%;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    position: relative;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.05);
  `;
  
  const ModalTitle = styled.div`
    font-size: 1.3em;
    font-weight: bold;
    color: ${props => props.$color || 'black'};
    margin-bottom: 0.5vh;
  `;
  
  const ModalText = styled.div`
    font-size: 0.8em;
    margin-bottom: 0.5vh;
    color: ${props => props.$color || 'black'};
  `;

  const LinkText = styled.div`
    font-size: 0.3em;
    margin-bottom: 0.5vh;
    color: #b0b0b0;
    text-decoration: underline;
`;

  const SuccessText = styled.div`
    font-size: 0.7em;
    color: #b0b0b0;
  `;
  
  const Close = styled.img`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  `;

  const PurpleButton = styled.button`
    border-radius: 20px;
    background: linear-gradient(to right bottom, #C2C7FF, #AD99FF);
    font-size: 0.7em;
    color: white;
    margin: 0;
    padding: 4px 5px;
  `;

  const RoundContainer = styled.div`
    margin: 0 auto;
    width: 90%;
    padding: 2px;
    border-radius: 10px;
    border: 1px solid #B0B0B0;
    margin-top: 20px;
    display: flex;
    padding-left: 15px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    align-items: center;
`;