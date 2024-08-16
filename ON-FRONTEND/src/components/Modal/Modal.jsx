import styled from 'styled-components';

import planeIcon from '../../assets/images/plane_icon.svg';
import closeIcon from '../../assets/images/close_button.svg';
//type은 신청 모달인지, 안내 모달인지!
//신청 모달: "BUTTON" 안내 모달: "NORMAL"=>기본은 NORMAL

function Modal({
  closeModal = () => {}, //모달 setState 함수 전달해주세요.
  title = '', //title, content,buttonText 모두 pre 태그 사용했기 때문에 html 내에서 줄바꿈 하시면 자동 반영됩니다.
  content = '',
  onExitModal = () => {}, //혹시 모달을 닫았을 때 navigate등 특정 함수를 실행시키고 싶다면 전달
  type = 'NORMAL', //여기서부터 아래 3가지 props는 type="BUTTON"일때 전달해주세요.
  onBtnClick = () => {}, //버튼 클릭 시 실행할 함수 전달. 다음 모달을 열려면 현재 모달을 닫는 함수와 다음 모달을 여는 함수를 함께 전달해주세요.
  buttonText = '', //버튼에 들어갈 텍스트
}) {
  return (
    <Box>
      <ModalContent>
        <Close
          src={closeIcon}
          onClick={() => {
            closeModal();
            onExitModal();
          }}
        />
        <Icon src={planeIcon} />

        <ModalTitle>{title}</ModalTitle>

        <Space style={{ marginBottom: '3rem' }} />

        <ModalText>{content}</ModalText>

        {type === 'BUTTON' && <Space />}

        {type === 'BUTTON' && (
          <BlueButton onClick={onBtnClick}>
            <pre style={{ whiteSpace: 'pre-line' }}>{buttonText}</pre>
          </BlueButton>
        )}
      </ModalContent>
    </Box>
  );
}

export default Modal;

const Space = styled.div`
  margin-bottom: 2rem;
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
  align-content: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  color: black;
  box-sizing: border-box;
  background: white;
  padding: 1.7rem 1.2rem;
  border-radius: 4px;
  width: 16.6875rem;
  min-height: 19.4375rem;
  height: auto;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.05);
`;

const ModalTitle = styled.pre`
  font-size: 1.3em;
  font-weight: bold;

  color: ${(props) => props.$color || 'black'};
  margin-bottom: 0.5vh;
  text-align: center;
  white-space: pre-line;
`;

const ModalText = styled.pre`
  font-size: 0.8em;
  margin-bottom: 0.5vh;
  text-align: center;
  white-space: pre-line;
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
  min-height: 50px;
  height: auto;
  padding: 15px 26px;
  background: linear-gradient(135deg, #d6ebff, #c2c7ff);
  color: white;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
