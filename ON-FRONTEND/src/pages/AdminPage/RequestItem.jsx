import * as s from './AdminPageStyled';
import { useState } from 'react';

const RequestItem = ({ userInfo, photoURL, requestDate }) => {
  console.log(requestDate);
  const [imgURL, setImgUrl] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const showImgModal = (url) => {
    if (!isModalOpen) {
      //모달 닫혀있는데 이미지 보기 누른 경우
      setImgUrl(url);
      setModalOpen(true);
    } else {
      //모달창 열린 경우
      if (imgURL !== url) {
        //이미지 보고 있다가 다른 이미지 보기 클릭
        setImgUrl(url); //url만 바꿔준다
      } else {
        //보고 있던 항목의 이미지 보기를 다시 누른 경우
        setModalOpen(false);
      }
    }
  };
  return (
    <>
      <s.GridContainer style={{ border: '1px solid black' }}>
        <s.WrapDiv width="2rem">
          {requestDate.getMonth() + 1}/{requestDate.getDate()}
        </s.WrapDiv>
        <s.WrapDiv width="3rem">{userInfo.name}</s.WrapDiv>
        <s.WrapDiv width="2rem">{userInfo.userState}</s.WrapDiv>
        <s.WrapDiv width="2rem">{userInfo.country}</s.WrapDiv>
        <s.KeepAllDiv width="4.5rem">
          {userInfo.dispatchedUniversity}
        </s.KeepAllDiv>
        <s.StyledBtn
          onClick={() => {
            showImgModal(photoURL);
          }}
        >
          이미지
        </s.StyledBtn>
        <s.StyledBtn>승인</s.StyledBtn>
        <s.StyledBtn>거절</s.StyledBtn>
      </s.GridContainer>
      {isModalOpen && <s.Image src={imgURL} />}
    </>
  );
};

export default RequestItem;
