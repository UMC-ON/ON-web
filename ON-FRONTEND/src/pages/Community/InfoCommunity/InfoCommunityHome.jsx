import CommunityHome from '../CommunityHome';
import Modal from '../../../components/Modal/Modal';
import { useState } from 'react';

const InfoCommunityHome = () => {
  const [isFirstModalOpen, setFirstModalOpen] = useState(true);
  const [isSecondModalOPen, setSecondModalOpen] = useState(false);
  return (
    <>
      <CommunityHome
        boardType="INFO"
        color1="#D6EBFF"
        color2="#C2C7FF"
      />
      {isFirstModalOpen && (
        <Modal
          closeModal={() => {
            setFirstModalOpen(false);
          }}
          title={
            <>
              <div style={{ color: '#84B4FF', display: 'inline' }}>제로</div>
              님께
              <br />
              동행을 신청하시나요?
            </>
          }
          content="첫번째 모달입니다.
          두번째 모달을 열려면 버튼을
          눌러주세요!"
          type="BUTTON"
          buttonText="다음"
          openNextModal={() => {
            setSecondModalOpen(true);
          }}
        />
      )}
      {isSecondModalOPen && (
        <Modal
          closeModal={() => {
            setSecondModalOpen(false);
          }}
          title="실험"
          content="두번째 모달입니다."
        />
      )}
    </>
  );
};

export default InfoCommunityHome;
