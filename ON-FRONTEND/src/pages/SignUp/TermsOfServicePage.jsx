import styled from 'styled-components';
import groupLogo from '../../assets/images/groupLogo.svg';
import * as s from './SignUpStyled';
import { useNavigate } from 'react-router-dom';

const TermsOfServicePage = () => {
  const navigate = useNavigate();
  const nav = () => {
    navigate('/signUp/userInfo');
  };
  return (
    <s.FormPage>
      <s.SectionWrapper>
        <s.TitleSection>
          <s.Logo src={groupLogo} />
          <img />
          <div className="on_exp">교환/방문학생 정보공유 커뮤니티, ON </div>
        </s.TitleSection>

        <s.ContentSection>
          <s.BackButton
            onClick={() => {
              navigate(-1);
            }}
          >
            이전 단계
          </s.BackButton>
          <s.StyledH2 className="margin_bottom_40">Terms of Policy</s.StyledH2>
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
            때도 쓰인다. 어쩌고저쩌고 어어어ㅓ어어어 조금 더 적어야해
            테스트용으로 쓰이는 더미 텍스트다. 테스트용으로 쓰이는 더미
            텍스트다. 디자인을 할 때 가제로 쓰이고 레이아웃을 테스트할 때 든지
            프린트의 테스트, 기계 테스트, 폰트 테스트, 컨텐츠의 양을 측정할 때도
            쓰인다. 테스트용으로 쓰이는 더미 텍스트다. 테스트용으로 쓰이는 더미
            텍스트다. 디자인을 할 때 가제로 쓰이고 레이아웃을 테스트할 때 든지
            프린트의 테스트, 기계 테스트, 폰트 테스트, 컨텐츠의 양을 측정할 때도
            쓰인다. 테스트용으로 쓰이는 더미 텍스트다. 테스트용으로 쓰이는 더미
            텍스트다.
          </TermContent>
          <div className="radioBtn">
            <label style={{ color: 'black' }}>
              <s.RadioButton
                type="radio"
                name="termConsent"
              />
              비동의
            </label>
            <label style={{ color: 'black' }}>
              <s.RadioButton
                type="radio"
                name="termConsent"
              />
              동의
            </label>
          </div>
        </s.ContentSection>
      </s.SectionWrapper>

      <s.ButtonSection>
        <s.PurpleButton onClick={nav}>다음 단계</s.PurpleButton>
      </s.ButtonSection>
    </s.FormPage>
  );
};

export default TermsOfServicePage;

const Title = styled.div`
  font-family: 'BalooBhai-Regular';
  color: #87c3f8;
  font-size: 2.188rem;
  padding: 0.375rem 0;
`;

const TermContent = styled.div`
  color: black;
  overflow: auto;
  height: 17.625rem;
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
