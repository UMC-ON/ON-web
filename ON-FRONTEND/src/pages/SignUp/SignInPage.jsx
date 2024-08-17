import * as s from './SignUpStyled';
import styled from 'styled-components';
import groupLogo from '../../assets/images/groupLogo.svg';
import { useNavigate } from 'react-router-dom';
import { UserList } from '../../components/Common/TempDummyData/PostList';
import { setUser, signInUser } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { current } from '@reduxjs/toolkit';
import { GET_USER_STATUS, SIGN_IN_URL } from '../../api/urls';
import { postData, getData } from '../../api/Functions';

const SignInPage = () => {
  const didMount = useRef(0); //백에 연결하기 전에 임시로...
  //지금 편의를 위해 userInitialState가 너구리로 돼있어서 첫 렌더링시에 자꾸 useEffect 작동해서 막으려고 ㅠ
  const nav = useNavigate();
  const inputValue = useRef({ email: '', password: '' });

  const currentUser = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const onChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    inputValue.current = { ...inputValue.current, [name]: value };
  };
  // useEffect(() => {
  //   if (didMount.current === 2) {
  //     if (currentUser && currentUser.userState === 'TEMPORARY') {
  //       console.log('실행');
  //       return nav('/signUp/credentials');
  //     } else if (currentUser) {
  //       return nav('/');
  //     }
  //   } else {
  //     didMount.current++;
  //     console.log('렌더링');
  //     console.log(currentUser);
  //   }
  // }, [currentUser]);

  const handleSubmitFE = (e) => {
    e.preventDefault();
    const user = UserList.filter(
      (user) => user.email === inputValue.current.email,
    )[0];
    if (user && inputValue.current.password === user.password) {
      //여기까지가 백에서 해줄 일..true반환시
      /////토큰 저장/////
      dispatch(setUser(user)); //FE:로그인 성공 시 유저 세팅
    } else {
      alert('아이디나 비밀번호가 일치하지 않습니다.');
    }
  };

  const handleSubmitBE = async (e) => {
    e.preventDefault();
    const formData = JSON.stringify(inputValue.current);
    const response = await postData(SIGN_IN_URL, formData);
    if (response) {
      console.log('실행');
      console.log(response.data);
      localStorage.setItem('grantType', response.data.result.grantType);
      localStorage.setItem('AToken', response.data.result.accessToken);
      localStorage.setItem('RToken', response.data.result.refreshToken);
      const res = await getData(GET_USER_STATUS, {
        Authorization: `${localStorage.getItem('grantType')} ${localStorage.getItem('AToken')}`,
      });
      console.log(res.data); //지우기.... USERSTATE 확인, 조건부 네비게이트
      if (res.data.result === 'TEMPORARY') {
        nav('/signUp/credentials');
      } else {
        nav('/');
      }
    } //로그인 성공/실패 확인 함수

    //const request = fetchData();
  };

  return (
    <>
      <form
        action="#"
        onSubmit={handleSubmitBE}
      >
        <s.FormPage>
          <s.SectionWrapper>
            <s.TitleSection>
              <s.Logo src={groupLogo} />
              <div className="on_exp">교환/방문학생 정보공유 커뮤니티, ON </div>
            </s.TitleSection>
            <s.ContentSection>
              <s.StyledH2>로그인하기</s.StyledH2>

              <s.InputWrapper>
                <LittleTitle>Email</LittleTitle>
                <s.TransparentInput
                  name="email"
                  onChange={onChangeHandler}
                />
              </s.InputWrapper>
              <s.InputWrapper>
                <LittleTitle>Password</LittleTitle>
                <s.TransparentInput
                  type="password"
                  name="password"
                  onChange={onChangeHandler}
                />
              </s.InputWrapper>
            </s.ContentSection>
            <SignInBtn type="submit">Log in</SignInBtn>
            <OptionSection>
              <div
                style={{ flexShrink: 0 }}
                onClick={() => nav('/signUp')}
              >
                Sign Up
              </div>
              <FindSection>
                <div>Find Email</div>
                <div>Find Password</div>
              </FindSection>
            </OptionSection>
          </s.SectionWrapper>
        </s.FormPage>
      </form>
    </>
  );
};

export default SignInPage;

const LittleTitle = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SignInBtn = styled.button`
  border-radius: 1.25rem;
  background: linear-gradient(90deg, #d6ebff 0%, #d7d9ff 100%);
  width: 19.25rem;
  height: 2.625rem;
  flex-shrink: 0;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  padding: 0;
  margin: 1.75rem 0;
`;

const OptionSection = styled.div`
  box-sizing: border-box;
  width: 19.25rem;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  color: #000;
  font-family: Inter;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const FindSection = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 1.6rem;
`;
