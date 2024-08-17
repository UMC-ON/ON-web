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
    </>
  );
};

export default InfoCommunityHome;
