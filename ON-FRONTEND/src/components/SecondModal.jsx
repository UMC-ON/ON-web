import styled from 'styled-components';

import planeIcon from '../assets/images/plane_icon.svg';
import closeIcon from '../assets/images/close_button.svg';

  function SecondModal({ closeModal }) {
    return (
      <Box>
        <ModalContent>
          <Close src={closeIcon} onClick={closeModal} />
          <Icon src={planeIcon} />
  
          <ModalTitle>동행신청이</ModalTitle>
          <ModalTitle>완료되었습니다.</ModalTitle>
  
          <Space />
  
          <ModalText>채팅창이 만들어져</ModalText>
          <ModalText>제로님과 자유롭게 소통할 수 있습니다.</ModalText>
  
          <Space />
        </ModalContent>
      </Box>
    );
  }

  export default SecondModal;
  
  
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
  `;
  
  const Close = styled.img`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  `;
  
  const BlueButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border-radius: 10px;
    width: 200px;
    height: 50px;
    padding: 15px 26px;
    background: linear-gradient(135deg, #d6ebff, #c2c7ff);
    color: white;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  `;