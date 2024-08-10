import { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import * as s from './MyPageStyled';
import theme from '../../styles/theme';

const MyPage = () => {
  const [editSchoolName, setEditSchoolName] = useState(false);
  const [schoolName, setSchoolName] = useState("King's College");
  const [originalSchoolName, setOriginalSchoolName] = useState('');

  const [editLink, setEditLink] = useState(false);
  const [link, setLink] = useState('https://www.kcl.ac.uk/');
  const [originalLink, setOriginalLink] = useState('');

  const [editNickname, setEditNickname] = useState(false);
  const [nickname, setNickname] = useState('ON');
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
      <NavLink
        to="/mypost"
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
            <s.Title>나의 파견교</s.Title>
            <s.EditBtn
              onClick={clickEditSchoolName}
              color={editSchoolName ? theme.blueGra : theme.lightGray}
            >
              {editSchoolName ? '완료' : '수정'}
            </s.EditBtn>
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
            <s.EditBtn
              onClick={clickEditLink}
              color={editLink ? theme.blueGra : theme.lightGray}
            >
              {editLink ? '완료' : '수정'}
            </s.EditBtn>
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
              <span>on@gmail.com</span> {/* 추후에 값 불러와서 넣어주기 */}
            </s.InfoBox>
          </s.InfoContainer>

          <s.InfoContainer>
            <s.Title>이름</s.Title>
            <s.InfoBox>
              <span>김온</span> {/* 추후에 값 불러와서 넣어주기 */}
            </s.InfoBox>
          </s.InfoContainer>

          <s.InfoContainer>
            <s.Title>전화번호</s.Title>
            <s.InfoBox>
              <span>010-1111-1111</span> {/* 추후에 값 불러와서 넣어주기 */}
            </s.InfoBox>
          </s.InfoContainer>

          <s.InfoContainer style={{ paddingBottom: '2rem' }}>
            <s.Title>닉네임</s.Title>
            <s.EditBtn
              onClick={clickEditNickname}
              color={editNickname ? theme.blueGra : theme.lightGray}
            >
              {editNickname ? '완료' : '수정'}
            </s.EditBtn>
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
