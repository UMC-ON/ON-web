import styled from 'styled-components';
import * as s from './SignUpStyled';
import on_logo from '../../assets/images/on_logo.svg';
import { useNavigate } from 'react-router-dom';

const SignUp_UserInfo_Additional = () => {
  const navigate = useNavigate();
  const nav = () => {
    navigate('/signUp/userInfo_school');
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
        <s.StyledH2>추가 정보 입력</s.StyledH2>
        <s.Explanation>
          On 커뮤니티는 이용자의 안전한 여행을 위해, 여행 동행 구하기 서비스의
          경우 신원이 보장된 사용자만 이용할 수 있도록 규정하고 있습니다. 이에
          따라 추가 정보를 선택적으로 입력받고 있습니다.{' '}
        </s.Explanation>
        <s.StyledFieldSet>
          <label>
            이름
            <s.InputWrapper>
              <s.TransparentInput placeholder="본명으로 작성해 주세요" />
            </s.InputWrapper>
          </label>
          <s.TwoColumnWrapper>
            <label>
              나이
              <s.InputWrapper>
                <s.TransparentInput placeholder="숫자만 입력해주세요" />
              </s.InputWrapper>
            </label>
            <EmptyDiv></EmptyDiv>
            <label>
              성별
              <s.StyledComboBox defaultValue={'none'}>
                <option
                  value="none"
                  hidden
                ></option>
                <option value="M">남자</option>
                <option value="F">여자</option>
                <option value="E">기타</option>
              </s.StyledComboBox>
            </label>
          </s.TwoColumnWrapper>
          <label>
            전화번호
            <s.InputWrapper>
              <s.TransparentInput placeholder="숫자만 입력해주세요" />
              <div>
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
        </s.StyledFieldSet>
      </s.ContentSection>
      <s.ButtonSection>
        <s.TwoColumnWrapper>
          <SkipButton onClick={nav}>건너뛰기</SkipButton>
          <s.PurpleButton onClick={nav}>입력완료</s.PurpleButton>
        </s.TwoColumnWrapper>
      </s.ButtonSection>
    </s.FormPage>
  );
};

export default SignUp_UserInfo_Additional;

const EmptyDiv = styled.div`
  width: calc(100% / 13);
`;

const SkipButton = styled(s.PurpleButton)`
  background-color: #d7dff4;
`;
