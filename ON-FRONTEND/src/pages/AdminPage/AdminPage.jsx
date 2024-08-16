import { useState, useEffect } from 'react';
import { AuthRequests } from '../../components/Common/TempDummyData/PostList';
import RequestItem from './RequestItem';
import * as s from './AdminPageStyled';

const AdminPage = () => {
  const [imgURL, setImgUrl] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    if (isModalOpen) {
      setModalOpen(true);
    } else {
      setModalOpen((prev) => !prev);
    }
  }, [imgURL]);
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
    <s.Page>
      <div>관리자 페이지</div>
      <s.GridContainer>
        <s.KeepAllDiv width="2rem">승인 요청 일자</s.KeepAllDiv>
        <s.WrapDiv width="3rem">이름</s.WrapDiv>
        <s.WrapDiv width="1.5rem">id</s.WrapDiv>
        <s.KeepAllDiv width="2rem">파견 국가</s.KeepAllDiv>
        <s.WrapDiv width="4.5rem">파견교</s.WrapDiv>
        <s.WrapDiv width="3.4rem">이미지</s.WrapDiv>
        <s.WrapDiv width="2rem">승인</s.WrapDiv>
        <s.WrapDiv width="2rem">거절</s.WrapDiv>
      </s.GridContainer>

      {AuthRequests.map((request, index) => (
        <RequestItem
          key={index}
          userInfo={request.user}
          photoURL={request.photoURL}
          requestDate={request.requestDate}
          imgShow={showImgModal}
        />
      ))}
    </s.Page>
  );
};

export default AdminPage;
