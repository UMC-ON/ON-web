import * as s from './SignUpStyled';
import styled from 'styled-components';
import groupLogo from '../../assets/images/groupLogo.svg';
import { useNavigate } from 'react-router-dom';
import { UserList } from '../../components/Common/TempDummyData/PostList';
import { setUser } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
const SignInPage = () => {
  const nav = useNavigate();
  const inputValue = useRef({ email: '', password: '' });

  const onChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    inputValue.current = { ...inputValue.current, [name]: value };
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = UserList.filter(
      (user) => user.email === inputValue.current.email,
    )[0];
    console.log(user.password === inputValue.current.password);
    if (user && inputValue.current.password === user.password) {
      dispatch(setUser(user));
      return nav('/');
    }
    return alert('아이디나 비밀번호가 일치하지 않습니다.');
  };

  console.log(UserList);
  console.log(inputValue.current);
  return (
    <>
      <form
        action="#"
        onSubmit={handleSubmit}
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
