import styled from 'styled-components';

export const FormPage = styled.section`
  background-color: rgb(250, 250, 250);
  box-sizing: border-box;
  height: auto;
  min-height: 100vh;
  width: 100%;
  padding: 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
`;
export const TitleSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;

  & > .on_exp {
    color: black;
    opacity: 64%;
    font-size: 0.875rem;
  }
`;

export const ContentSection = styled.section`
  text-align: left;
  padding-top: 20px;
  width: 100%;
  & .radioBtn {
    display: flex;
    flex-direction: row;
    justify-content: end;
    margin: 1.875rem 0;
  }
  & .radioBtn > label {
    margin: 0 0.813rem;
  }
`;
export const BackButton = styled.button`
  border: none;
  border-radius: 0;
  border-bottom: 1px solid gray;
  font-size: 0.625rem;
  color: black;
  opacity: 64%;
  outline: none;
  background-color: transparent;
  padding: 0;
  &:focus {
    outline: none;
  }
  &:hover {
    outline: none;
  }
`;

export const StyledH2 = styled.div`
  color: black;
  font-family: Inter;
  font-size: 1.563rem;
  font-weight: bold;
  margin: 0.75rem 0;
`;

export const Explanation = styled.div`
  color: rgba(0, 0, 0, 0.49);
  font-family: 'Baloo Bhaina 2';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 153.846% */
  text-align: justify;
`;
export const Logo = styled.img`
  object-fit: contain;
  width: 93px;
  height: 56px;
`;
export const TwoColumnWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1.2rem;

  & > * {
    width: calc((100%) / 2.5);
    flex: auto;
  }
`;

export const CenterContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

export const TransparentInput = styled.input`
  width: 100%;
  color: black;
  height: 2rem;
  margin-top: 0.2rem;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0 0.06rem;

  &:invalid {
    background-color: #ffc0cb91;
  }

  &::placeholder {
    font-size: 0.75rem;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const InputWrapper = styled.div`
  color: black;
  width: 100%;
  border-bottom: 1px solid #b0b0b0;
  justify-content: center;
  margin-top: 40px;
  & > .required::after {
    content: '*';
    color: #c2c7ff;
  }
`;
export const ButtonSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 100%;
  padding: 5px 0;
`;
export const PurpleButton = styled.button`
  display: flex;
  width: 308px;
  height: 59px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 1.25rem;
  background: linear-gradient(135deg, #c2c7ff, #ad99ff);
  color: white;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  &:focus {
    border: none;
    outline: none;
  }
  opacity: ${(props) => (props.disabled ? '50%' : '100%')};
`;
