import landingImg from '../../assets/images/landingImg.svg';
import landingLogo from '../../assets/images/landingLogo.svg';
import changedLandingLogo from '../../assets/images/changedLandingLogo.svg';
import gradientRec from '../../assets/images/gradientRecBlue.svg';

import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const nav = useNavigate();
  return (
    <>
      <LandingPageContainer>
        <Text>{`나만의 완벽한
      교환/방문 라이프를 키다`}</Text>
        <LogoImg />

        <ImgImg style={{ alignSelf: 'center' }} />

        <ButtonSection>
          <Button
            onClick={() => {
              nav('/signIn');
            }}
          >
            로그인
          </Button>
          <Button onClick={() => nav('/signUp')}>회원가입</Button>
        </ButtonSection>

        <GradientImg src={gradientRec} />
      </LandingPageContainer>
    </>
  );
};

export default LandingPage;

const LandingPageContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 0 2.5rem;
`;

const Text = styled.pre`
  color: #ccc;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.02rem;
  white-space: pre-line;
  text-align: left;
  position: absolute;
  bottom: 80%;
`;
const changeLogo = keyframes`
    0%{
        background-image: url(${landingLogo})
    }
        45%{
        background-image: url(${changedLandingLogo})}
        55%{
            background-image: url(${changedLandingLogo})}
        100%{
            background-image: url(${landingLogo});
        }
`;
const LogoImg = styled.div`
  background: url(${landingLogo}) no-repeat center;
  background-size: cover;
  width: 15.06269rem;
  height: 9.25rem;
  flex-shrink: 0;
  position: absolute;
  bottom: 59%;
  animation: ${changeLogo} 2.5s 0s infinite;
`;
const changeImg = keyframes`
    0%{
        width: 12.4375rem;
        height: 9.0625rem;
    }
    50%{
        width: 14.1875rem;
        height: 10.3125rem;
    }
    100%{
        width: 12.4375rem;
        height: 9.0625rem;
    }
`;
const ImgImg = styled.div`
  width: 12.4375rem;
  height: 9.0625rem;
  background-image: url(${landingImg});
  position: absolute;
  bottom: 32%;
  //animation: ${changeImg} 2.5s 0s infinite;
`;

const GradientImg = styled.img`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: '480px';
  pointer-events: none;
`;
const ButtonSection = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 10%;
  left: 0;
  z-index: 1;
`;

const Button = styled.button`
  width: 19rem;
  height: 3.25rem;
  flex-shrink: 0;
  border-radius: 1.875rem;
  background: linear-gradient(135deg, #c2c7ff 0%, #ad99ff 100%);
  box-shadow: 4px 4px 24px -1px rgba(0, 0, 0, 0.1);
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0.35rem 0;
`;
