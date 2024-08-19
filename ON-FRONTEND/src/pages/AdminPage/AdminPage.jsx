import { useState, useEffect } from 'react';
import { AuthRequests } from '../../components/Common/TempDummyData/PostList';
import RequestItem from './RequestItem';
import * as s from './AdminPageStyled';
import { getData, postData } from '../../api/Functions';
import { GET_REQUESTS_OF } from '../../api/urls';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';

const AdminPage = () => {
  const [imgURL, setImgUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [requestList, setRequestList] = useState(null);
  const [permitStatus, setPermitStatus] = useState('AWAIT');
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

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await postData(
        GET_REQUESTS_OF(permitStatus),
        {},
        {
          Authorization: `${localStorage.getItem('grantType')} ${localStorage.getItem('AToken')}`,
        },
        { page: 0, size: 20, sort: 'DESC' },
      );
      if (response) {
        console.log(response.data.result.content);
        setRequestList(response.data.result.content);
        return response.data.result.content;
      }
    };
    fetchData();
    setIsLoading(false);
  }, [permitStatus]);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <s.Page>
      <div>관리자 페이지</div>
      <div
        style={{
          display: 'Flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.4rem',
        }}
      >
        <select
          style={{ color: 'black', justifySelf: 'start', width: 'auto' }}
          onChange={(e) => {
            setPermitStatus(e.target.value);
          }}
        >
          <option
            value="STATUS"
            disabled
            hidden
          >
            상태
          </option>
          <option value="AWAIT">AWAIT</option>
          <option value="ACTIVE">ACTIVE</option>
          <option value="DENIED">DENIED</option>
        </select>
      </div>
      <s.GridContainer style={{ padding: '1rem 0 ' }}>
        <s.KeepAllDiv width="2rem">요청 일자</s.KeepAllDiv>
        <s.WrapDiv width="3rem">이름</s.WrapDiv>
        <s.WrapDiv width="2rem">상태</s.WrapDiv>
        <s.KeepAllDiv width="2rem">파견 국가</s.KeepAllDiv>
        <s.WrapDiv width="4.5rem">파견교</s.WrapDiv>
        <s.WrapDiv width="3.4rem">이미지</s.WrapDiv>
        <s.WrapDiv width="2rem">승인</s.WrapDiv>
        <s.WrapDiv width="2rem">거절</s.WrapDiv>
      </s.GridContainer>

      {requestList && requestList.length > 0 ? (
        requestList.map((request, index) => {
          console.log('출력');
          return (
            <RequestItem
              key={index}
              userInfo={request}
              photoURL={request.uuidFileUrlList[0]}
              //requestDate={request.requestDate}
              imgShow={showImgModal}
            />
          );
        })
      ) : (
        <div style={{ padding: '5rem 0' }}>요청 내역이 없습니다.</div>
      )}
    </s.Page>
  );
};

export default AdminPage;
