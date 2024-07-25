import * as s from './SignUpStyled';
import on_logo from '../../assets/images/on_logo.svg';
import { useNavigate } from 'react-router-dom';

const SignUp_UserInfo = () => {
  const navigate = useNavigate();
  const nav = () => {
    navigate('/signUp/userInfo_additional');
  };
  return (
    <s.FormPage>
      <s.TitleSection>
        <s.Logo src={on_logo} />
        <div className="on_exp">교환/방문학생 정보공유 커뮤니티, ON </div>
      </s.TitleSection>
      <s.ContentSection>
        <div className="back">
          <u>이전 단계</u>
        </div>
        <s.StyledH2>정보 입력</s.StyledH2>
        <s.StyledFieldSet>
          <label>
            Email
            <s.InputWrapper>
              <s.TransparentInput />
              <div>
                <s.GrayButton>중복확인</s.GrayButton>
                <s.GrayButton>인증</s.GrayButton>
              </div>
            </s.InputWrapper>
          </label>
          <label>
            인증코드
            <s.InputWrapper>
              <s.TransparentInput />
              <div>
                <s.GrayButton>확인</s.GrayButton>
              </div>
            </s.InputWrapper>
          </label>
          <label>
            Password
            <s.InputWrapper>
              <s.TransparentInput type="password" />
            </s.InputWrapper>
          </label>
          <label>
            닉네임
            <s.InputWrapper>
              <s.TransparentInput />
            </s.InputWrapper>
          </label>
        </s.StyledFieldSet>
      </s.ContentSection>
      <s.ButtonSection>
        <s.PurpleButton onClick={nav}>다음단계</s.PurpleButton>
      </s.ButtonSection>
    </s.FormPage>
  );
};

export default SignUp_UserInfo;
