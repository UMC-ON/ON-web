import styled from 'styled-components';
import * as s from './SignUpStyled';
import on_logo from '../../assets/images/on_logo.svg';
import { useNavigate } from 'react-router-dom';

const SignUp_TermsOfService = () => {
  const navigate = useNavigate();
  const nav = () => {
    navigate('/signUp/userInfo');
  };
  return (
    <s.FormPage>
      <s.TitleSection>
        <s.Logo src={on_logo} />
        <img />
        <div className="on_exp">교환/방문학생 정보공유 커뮤니티, ON </div>
      </s.TitleSection>

      <s.ContentSection>
        <div className="back">
          <u>이전 단계</u>
        </div>
        <s.StyledH2>Terms of Policy</s.StyledH2>
        <TermContent>
          [제 1항 25조] 테스트용으로 쓰이는 더미 텍스트다. 테스트용으로 쓰이는
          더미 텍스트다. 디자인을 할 때 가제로 쓰이고 레이아웃을 테스트할 때
          든지 프린트의 테스트, 기계 테스트, 폰트 테스트, 컨텐츠의 양을 측정할
          때도 쓰인다. 테스트용으로 쓰이는 더미 텍스트다. 테스트용으로 쓰이는
          더미 텍스트다. 디자인을 할 때 가제로 쓰이고 레이아웃을 테스트할 때
          든지 프린트의 테스트, 기계 테스트, 폰트 테스트, 컨텐츠의 양을 측정할
          때도 쓰인다. 테스트용으로 쓰이는 더미 텍스트다. 테스트용으로 쓰이는
          더미 텍스트다. 디자인을 할 때 가제로 쓰이고 레이아웃을 테스트할 때
          든지 프린트의 테스트, 기계 테스트, 폰트 테스트, 컨텐츠의 양을 측정할
          때도 쓰인다. 어쩌고저쩌고 어어어ㅓ어어어 조금 더 적어야해 테스트용으로
          쓰이는 더미 텍스트다. 테스트용으로 쓰이는 더미 텍스트다. 디자인을 할
          때 가제로 쓰이고 레이아웃을 테스트할 때 든지 프린트의 테스트, 기계
          테스트, 폰트 테스트, 컨텐츠의 양을 측정할 때도 쓰인다. 테스트용으로
          쓰이는 더미 텍스트다. 테스트용으로 쓰이는 더미 텍스트다. 디자인을 할
          때 가제로 쓰이고 레이아웃을 테스트할 때 든지 프린트의 테스트, 기계
          테스트, 폰트 테스트, 컨텐츠의 양을 측정할 때도 쓰인다. 테스트용으로
          쓰이는 더미 텍스트다. 테스트용으로 쓰이는 더미 텍스트다.
        </TermContent>
        <div className="radioBtn">
          <label>
            <s.RadioButton
              type="radio"
              name="termConsent"
            />
            비동의
          </label>
          <label>
            <s.RadioButton
              type="radio"
              name="termConsent"
            />
            동의
          </label>
        </div>
      </s.ContentSection>
      <s.ButtonSection>
        <s.PurpleButton onClick={nav}>다음 단계</s.PurpleButton>
      </s.ButtonSection>
    </s.FormPage>
  );
};

export default SignUp_TermsOfService;

const Title = styled.div`
  font-family: 'BalooBhai-Regular';
  color: #87c3f8;
  font-size: 2.188rem;
  padding: 0.375rem 0;
`;

const TermContent = styled.div`
  overflow: auto;
  height: 17.625rem;
  width: calc(100%-2rem);
  margin: 0.313rem 0;
  padding: 1rem 1rem;
  line-height: 1.25rem;
  font-size: 0.75rem;
  text-align: justify;
  background-color: #e7e7e7;
  border-radius: 1.188rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;
