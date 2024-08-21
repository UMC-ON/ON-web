import { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import * as s from './MyPageStyled';
import theme from '../../styles/theme';

import { GET_CURRENT_INFO, PUT_NICKNAME, PUT_UNIV } from '../../api/urls';
import { getData, postData, putData } from '../../api/Functions';
import Loading from '../../components/Loading/Loading';

const MyPage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null); // 에러를 저장할 상태
  const [isLoading, setIsLoading] = useState(false);

  const [editSchoolName, setEditSchoolName] = useState(false);
  const [schoolName, setSchoolName] = useState('');
  const [originalSchoolName, setOriginalSchoolName] = useState('');

  const [editLink, setEditLink] = useState(false);
  const [link, setLink] = useState('');
  const [originalLink, setOriginalLink] = useState('');

  const [editNickname, setEditNickname] = useState(false);
  const [nickname, setNickname] = useState('');
  const [nicknameInput, setNicknameInput] = useState('');

  const inputRef = useRef(null);
  const spanRef = useRef(null);
  const [inputWidth, setInputWidth] = useState('auto');

  const navigate = useNavigate();
  //axios 연결 GET
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getData(
          GET_CURRENT_INFO,
          {
            Authorization: `${localStorage.getItem('grantType')} ${localStorage.getItem('AToken')}`,
          },
          {},
        );

        if (response) {
          console.log(response.data.result);
          setUserInfo(response.data.result);
          setSchoolName(response.data.result.dispatchedUniversity);
          setLink(response.data.result.universityUrl);
          setNickname(response.data.result.nickname);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // 추가: 상태가 업데이트된 후에 값이 제대로 설정되었는지 확인
  useEffect(() => {
    console.log('school name:', schoolName);
    console.log('link:', link);
    console.log('userInfo:', userInfo);
    console.log('nick:', nickname);
  }, [schoolName, link, userInfo, nickname]);

  const clickEditNickname = () => {
    if (!editNickname) {
      console.log('닉네임 수정 중');
    }
    setEditNickname(!editNickname);
  };

  useEffect(() => {
    console.log('수정 상태', editNickname);
  }, []);

  //   //수정하기
  // const clickEditSchoolName = () => {
  //   setEditSchoolName(!editSchoolName);
  //   if (!editSchoolName) {
  //     //수정중이 아닐 때
  //     setSchoolName(originalSchoolName);
  //   }
  // };

  // const clickEditLink = () => {
  //   setEditLink(!editLink);
  //   if (!editLink) {
  //     setLink(originalLink);
  //   }
  // };
  // //입력에 따라 인풋 길이 바꾸기
  // useEffect(() => {
  //   if (spanRef.current) {
  //     setInputWidth(`${spanRef.current.offsetWidth}px`);
  //   }
  // }, [schoolName]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <s.MyPageLayout>
      <PageHeader pageName="마이페이지" />
      <NavLink
        to="/mypage/mypost"
        style={{ width: '100%' }}
      >
        <s.MyPosts>
          <span>내 글 보기</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="20"
            viewBox="0 0 6 11"
            fill="none"
          >
            <path
              d="M1 9.57153L5.1142 6.04508C5.57981 5.64598 5.57981 4.92566 5.1142 4.52656L1 1.00011"
              stroke="black"
              strokeLinecap="round"
            />
          </svg>
        </s.MyPosts>
      </NavLink>

      <s.MyInfoTitle>개인정보</s.MyInfoTitle>
      <s.MyInfoWrapper>
        <form
          method="post"
          name="info"
        >
          <s.InfoContainer>
            <s.Title>파견교 정보를 수정하세요!</s.Title>
            <s.EditBtn
              onClick={() => navigate('./schoolAuth')}
              color={theme.lightGray}
            >
              수정
            </s.EditBtn>
          </s.InfoContainer>
          <s.InfoContainer>
            {/* -------------------------- 파견교 -------------------------- */}
            <s.Title>나의 파견교</s.Title>

            {userInfo?.userStatus === 'TEMPORARY' ||
            userInfo?.userStatus === 'NON_CERTIFIED' ||
            userInfo?.userStatus === 'DENIED' ? (
              <s.SchoolNameBox>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <s.SchoolNameInput
                    ref={inputRef}
                    disabled={!editSchoolName}
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    placeholder="파견교를 입력하세요"
                    style={{
                      width: inputWidth,
                    }}
                  />
                </div>
                <s.RadioBox>
                  <s.TypeRadio
                    type="radio"
                    disabled={!editSchoolName}
                    id="exchange"
                    name="type"
                  />
                  <s.TypeLabel htmlFor="exchange">교환</s.TypeLabel>
                  <s.TypeRadio
                    type="radio"
                    disabled={!editSchoolName}
                    id="visit"
                    name="type"
                  />
                  <s.TypeLabel htmlFor="visit">방문</s.TypeLabel>
                </s.RadioBox>
              </s.SchoolNameBox>
            ) : userInfo?.userStatus === 'AWAIT' ? (
              <s.SchoolNameBox>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <s.SchoolNameSpan ref={spanRef}>
                    {schoolName || '파견교를 입력하세요'}
                  </s.SchoolNameSpan>
                  <s.SchoolNameInput
                    ref={inputRef}
                    disabled={!editSchoolName}
                    value={schoolName}
                    placeholder={schoolName}
                    style={{
                      width: inputWidth,
                    }}
                  />
                  <s.VerifyButton>인증 대기중</s.VerifyButton>
                </div>
                <s.RadioBox>
                  <s.TypeRadio
                    type="radio"
                    disabled={!editSchoolName}
                    id="exchange"
                    name="type"
                  />
                  <s.TypeLabel htmlFor="exchange">교환</s.TypeLabel>
                  <s.TypeRadio
                    type="radio"
                    disabled={!editSchoolName}
                    id="visit"
                    name="type"
                  />
                  <s.TypeLabel htmlFor="visit">방문</s.TypeLabel>
                </s.RadioBox>
              </s.SchoolNameBox>
            ) : userInfo?.userStatus === 'ACTIVE' ? (
              <s.SchoolNameBox>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <s.SchoolNameSpan ref={spanRef}>
                    {schoolName || '파견교를 입력하세요'}
                  </s.SchoolNameSpan>
                  <s.SchoolNameInput
                    ref={inputRef}
                    disabled={!editSchoolName}
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    placeholder={schoolName}
                    style={{
                      width: inputWidth,
                    }}
                  />
                </div>
                <s.RadioBox>
                  <s.TypeRadio
                    type="radio"
                    disabled={!editSchoolName}
                    id="exchange"
                    name="type"
                  />
                  <s.TypeLabel htmlFor="exchange">교환</s.TypeLabel>
                  <s.TypeRadio
                    type="radio"
                    disabled={!editSchoolName}
                    id="visit"
                    name="type"
                  />
                  <s.TypeLabel htmlFor="visit">방문</s.TypeLabel>
                </s.RadioBox>
              </s.SchoolNameBox>
            ) : null}
          </s.InfoContainer>
          {/* -------------------------- 파견교 홈페이지 링크 -------------------------- */}
          <s.InfoContainer>
            <s.Title>파견교 홈페이지 링크</s.Title>

            <s.TextInput
              disabled={!editLink}
              value={
                link && link.length > 0
                  ? { link }
                  : '파견교 홈페이지 링크를 등록하세요'
              }
              placeholder={link}
            />
          </s.InfoContainer>

          <div style={{ display: 'flex', margin: '2rem 0' }}>
            <s.Title>파견교 소재 국가</s.Title>
            <s.Country>
              {userInfo?.country ? userInfo.country : '없음'}
            </s.Country>
          </div>
          <s.InfoContainer>
            <s.Title>Email</s.Title>
            <s.InfoBox>
              <span>{userInfo?.email ? userInfo.email : '없음'}</span>
            </s.InfoBox>
          </s.InfoContainer>

          <s.InfoContainer>
            <s.Title>이름</s.Title>
            <s.InfoBox>
              <span>김온</span>
            </s.InfoBox>
          </s.InfoContainer>

          <s.InfoContainer>
            <s.Title>전화번호</s.Title>
            <s.InfoBox>
              <span>{userInfo?.phone ? userInfo.phone : '없음'}</span>
            </s.InfoBox>
          </s.InfoContainer>

          <s.InfoContainer style={{ paddingBottom: '2rem' }}>
            <s.Title>닉네임</s.Title>
            {/* <s.EditBtn
              onClick={() => clickEditNickname}
              color={editNickname ? theme.blueGra : theme.lightGray}
            >
              {editNickname ? '완료' : '수정'}
            </s.EditBtn> */}
            <s.TextInput
              disabled={!editNickname}
              value={nickname}
              onChange={(e) => setNicknameInput(e.target.value)}
              placeholder={nickname}
            />
          </s.InfoContainer>
        </form>
      </s.MyInfoWrapper>
      <s.Background>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="390"
          height="152"
          viewBox="0 0 390 152"
          fill="none"
        >
          <path
            d="M0 40.5C162 196.5 326.06 206.799 390 0V226H0V40.5Z"
            fill="#B8E5FF"
            fillOpacity="0.15"
          />
        </svg>
      </s.Background>
    </s.MyPageLayout>
  );
};

export default MyPage;
