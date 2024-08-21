import * as s from './SignUpStyled';
import styled from 'styled-components';
import groupLogo from '../../assets/images/groupLogo.svg';
import { useNavigate } from 'react-router-dom';
import { UserList } from '../../components/Common/TempDummyData/PostList';
import { loginSuccess, loginFailure } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useRef, useState } from 'react';

import { GET_USER_INFO, SIGN_IN_URL } from '../../api/urls';
import { postData, getData } from '../../api/Functions';

const SignInPage = () => {
  //지금 편의를 위해 userInitialState가 너구리로 돼있어서 첫 렌더링시에 자꾸 useEffect 작동해서 막으려고 ㅠ
  const nav = useNavigate();
  const inputValue = useRef({ email: '', password: '' });

  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    inputValue.current = { ...inputValue.current, [name]: value };
  };

  const handleSubmitBE = async (e) => {
    e.preventDefault();
    try {
      const formData = JSON.stringify(inputValue.current);
      //서버에 로그인 요청
      const response = await postData(SIGN_IN_URL, formData);

      //로그인 성공
      if (response.data.inSuccess) {
        console.log('실행');
        console.log(response.data);
        //응답으로부터 토큰 받아오기
        const { grantType, accessToken, refreshToken } = response.data.result;
        console.log(`${grantType},${accessToken},${refreshToken}`);
        //현 사용자 정보 api호출
        const user = await getData(GET_USER_INFO, {
          Authorization: `Bearer ${accessToken}`,
        });
        console.log(user.data.result);
        //현 사용자와 로그인 상태 redux에 저장
        dispatch(
          loginSuccess(user.data.result, grantType, accessToken, refreshToken),
        );

        //유저 상태에 따른 조건부 네비게이팅
        if (user.data.result.userStatus === 'TEMPORARY') {
          nav('/signUp/credentials');
        } else {
          nav('/');
        }
      } else {
        //로그인 실패
        dispatch(loginFailure('Login failed. Please check your credentials.'));
      }
    } catch (error) {
      dispatch(loginFailure('Invalid email or password'));
    }

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
