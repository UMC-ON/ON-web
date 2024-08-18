import { useState, useEffect } from 'react';
import { AuthRequests } from '../../components/Common/TempDummyData/PostList';
import RequestItem from './RequestItem';
import * as s from './AdminPageStyled';
import { getData, postData } from '../../api/Functions';
import { GET_REQUESTS_OF } from '../../api/urls';
import axios from 'axios';

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

  const status = {
    ADMIN: 1, // 관리자

    ACTIVE: 2, // 교환/파견교 관리자 인증 승인 완료
    AWAIT: 3, // 교환/파견교 관리자 인증 승인 대기
    DENIED: 4, // 교환/파견교 관리자 인증 승인 거절

    NON_CERTIFIED: 5, // 교환/파견교 미정 선택

    TEMPORARY: 6,
  };

  const permitStatus = 'AWAIT';
  const url = `http://13.209.255.118:8080/api/v1/dispatch-certify/info/${permitStatus}`;

  const getPost = async (funcParamURL) => {
    return await axios.post(
      funcParamURL,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${localStorage.getItem('grantType')} ${localStorage.getItem('AToken')}`,
        },
        params: { page: 1, size: 20, sort: 'DESC' },
      },
    );
  };

  const fetchData = async () => {
    const response = await getPost(url);
    if (response) {
      console.log(response);
    }

    const res = await getData('/api/v1/user/current/info', {
      Authorization: `${localStorage.getItem('grantType')} ${localStorage.getItem('AToken')}`,
    });

    if (res) {
      console.log(res);
    }
  };
  fetchData();
  return (
    <s.Page>
      <div>관리자 페이지</div>
      <s.GridContainer>
        <s.KeepAllDiv width="2rem">요청 일자</s.KeepAllDiv>
        <s.WrapDiv width="3rem">이름</s.WrapDiv>
        <s.WrapDiv width="2rem">상태</s.WrapDiv>
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
