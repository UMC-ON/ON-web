import styled from 'styled-components';
import theme from '../../styles/theme';

export const MyPageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 480px;
  display: flex;
  box-sizing: border-box;
  padding: 61px 0px 0px;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`;

export const MyPosts = styled.div`
  background: linear-gradient(
    135deg,
    rgba(214, 235, 255, 0.3) 0%,
    rgba(194, 199, 255, 0.3) 100%
  );
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  flex-shrink: 0;
  padding-left: 5%;
  margin: 21px 0;
  span {
    color: #000;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-right: 11px;
  }
`;

export const MyInfoTitle = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const MyInfoWrapper = styled.article`
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const InfoContainer = styled.section`
  display: grid;
  grid-template-areas:
    'header edit'
    'textbox textbox';
  place-items: center start;
  grid-template-columns: auto 1fr;
  margin: 1rem 0;
  gap: 5px;
`;

export const Title = styled.p`
  grid-area: header;
  color: #000;
  font-family: Inter;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  justify-self: start;
`;

export const EditBtn = styled.div`
  grid-area: edit;
  width: 1.5625rem;
  height: 1rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #d9d9d9;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 0.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
`;
export const TextInput = styled.input`
  grid-area: textbox;
  width: 100%;
  height: 2rem;
  border: none;
  border-bottom: solid #b0b0b0 1px;
  background: none;
  color: #838383;
  font-family: Inter;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  ::placeholder {
    color: #838383;
    font-family: Inter;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const SchoolNameSpan = styled.span`
  position: absolute;
  visibility: hidden;
  white-space: pre;
  font-family: Inter;
  font-size: 0.75rem;
  font-weight: 400;
`;

export const SchoolNameInput = styled.input`
  min-width: 0;
  height: 2rem;
  border: none;
  background: none;
  color: #838383;
  font-family: Inter;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  ::placeholder {
    color: #838383;
    font-family: Inter;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const SchoolNameBox = styled.div`
  grid-area: textbox;
  height: 2rem;
  width: 100%;
  border: none;
  border-bottom: 1px solid #b0b0b0;
  display: flex;
  justify-content: space-between;
`;

export const VerifyButton = styled.div`
  width: 2.44794rem;
  height: 1rem;
  margin-left: 10px;
  flex-shrink: 0;
  border-radius: 0.375rem;
  background: ${theme.purpleGra};
  text-align: center;
  color: white;
  font-family: Inter;
  font-size: 0.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
  align-self: center;
`;

export const TypeRadio = styled.input.attrs({ type: 'radio' })`
  vertical-align: middle;
  appearance: none;
  width: 0.75rem;
  height: 0.75rem;
  flex-shrink: 0;
  border: 0.5px solid #cfcfcf;
  border-radius: 40%;
  margin: 0 1px;
  &:checked {
    background: ${theme.purpleGra};
  }
`;
export const TypeLabel = styled.label`
  color: #b2b2b2;
  font-family: Inter;
  font-size: 0.5625rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin: 0 1px;
`;

export const RadioBox = styled.div`
  height: 0.75rem;
  align-self: center;
  display: flex;
  align-items: flex-start;
  justify-self: end;
`;

export const Country = styled.div`
  margin-left: 0.44rem;
  width: 2.6875rem;
  height: 1.5rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: ${theme.blueGra};
  color: #fff;
  font-family: Inter;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
`;

export const InfoBox = styled.div`
  grid-area: textbox;
  height: 2rem;
  width: 100%;
  border: none;
  border-bottom: 1px solid #b0b0b0;
  display: flex;
  align-items: flex-end;
  padding-bottom: 0.37rem;
  box-sizing: border-box;
  span {
    color: #838383;
    font-family: Inter;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const Background = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 152px;
`;
