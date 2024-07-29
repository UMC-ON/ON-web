import { useState, useRef, useEffect } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import * as s from './MyPageStyled';

const MyPage = () => {
  const [editSchoolName, setEditSchoolName] = useState(false);
  const [schoolName, setSchoolName] = useState("King's College");
  const [originalSchoolName, setOriginalSchoolName] = useState('');

  const [editLink, setEditLink] = useState(false);
  const [link, setLink] = useState('https://www.kcl.ac.uk/');
  const [originalLink, setOriginalLink] = useState('');

  const [editNickname, setEditNickname] = useState(false);
  const [nickname, setNickname] = useState('루이');
  const [originalNickname, setOriginalNickname] = useState('');

  const inputRef = useRef(null);
  const spanRef = useRef(null);
  const [inputWidth, setInputWidth] = useState('auto');
  // useEffect(() => {
  //   // Fetch the data from the backend when the component mounts
  //   const fetchSchoolName = async () => {
  //     // Replace with your actual fetch call
  //     const response = await fetch('/api/school-name'); // example endpoint
  //     const data = await response.json();
  //     setSchoolName(data.schoolName);
  //     setOriginalSchoolName(data.schoolName);
  //   };
  //   fetchSchoolName();
  // }, []);

  const clickEditSchoolName = () => {
    setEditSchoolName(!editSchoolName);
    if (!editSchoolName) {
      setSchoolName(originalSchoolName);
    }
  };

  useEffect(() => {
    if (spanRef.current) {
      setInputWidth(`${spanRef.current.offsetWidth}px`);
    }
  }, [schoolName]);

  const clickEditLink = () => {
    setEditLink(!editLink);
    if (!editLink) {
      setLink(originalLink);
    }
  };

  const clickEditNickname = () => {
    setEditNickname(!editNickname);
    if (!editNickname) {
      setNickname(originalNickname);
    }
  };

  return (
    <s.MyPageLayout>
      <PageHeader pageName="마이페이지" />
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

      <s.MyInfoTitle>개인정보</s.MyInfoTitle>
      <s.MyInfoWrapper>
        <form
          method="post"
          name="info"
        >
          <s.InfoContainer>
            <s.Title>나의 파견교</s.Title>
            {!editSchoolName ? (
              <s.EditBtn onClick={clickEditSchoolName}>수정</s.EditBtn>
            ) : (
              <p onClick={clickEditSchoolName}>수정중</p>
            )}
            <s.SchoolNameBox>
              <div style={{ display: 'flex' }}>
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

                <s.VerifyButton>인증하기</s.VerifyButton>
              </div>
              <s.RadioBox>
                <s.TypeRadio
                  type="radio"
                  disabled={!editSchoolName}
                  id="exchange"
                  name="type"
                />
                <s.TypeLabel id="exchange">교환</s.TypeLabel>
                <s.TypeRadio
                  type="radio"
                  disabled={!editSchoolName}
                  id="visit"
                  name="type"
                />
                <s.TypeLabel id="visit">방문</s.TypeLabel>
              </s.RadioBox>
            </s.SchoolNameBox>
          </s.InfoContainer>

          <s.InfoContainer>
            <s.Title>파견교 홈페이지 링크</s.Title>
            {!editLink ? (
              <s.EditBtn onClick={clickEditLink}>수정</s.EditBtn>
            ) : (
              <p onClick={clickEditLink}>수정중</p>
            )}
            <s.TextInput
              disabled={!editLink}
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder={link}
            />
          </s.InfoContainer>

          <div style={{ display: 'flex', margin: '2rem 0' }}>
            <s.Title>파견교 소재 국가</s.Title>
            <s.Country>영국</s.Country>
          </div>
          <s.InfoContainer>
            <s.Title>Email</s.Title>
            <s.InfoBox>
              <span>sjhan0814@gmial.com</span>
            </s.InfoBox>
          </s.InfoContainer>

          <s.InfoContainer>
            <s.Title>이름</s.Title>
            <s.InfoBox>
              <span>한서정</span>
            </s.InfoBox>
          </s.InfoContainer>

          <s.InfoContainer>
            <s.Title>전화번호</s.Title>
            <s.InfoBox>
              <span>010-1111-1111</span>
            </s.InfoBox>
          </s.InfoContainer>

          <s.InfoContainer style={{ paddingBottom: '2rem' }}>
            <s.Title>닉네임</s.Title>
            {!editNickname ? (
              <s.EditBtn onClick={clickEditNickname}>수정</s.EditBtn>
            ) : (
              <p onClick={clickEditNickname}>수정중</p>
            )}
            <s.TextInput
              disabled={!editNickname}
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
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
