import styled from 'styled-components';
import theme from '../../styles/theme';
import polygon3 from '../../assets/images/polygon3.png';

export const FormPage = styled.div`
  background-color: rgb(250, 250, 250);
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TitleSection = styled.section`
  position: fixed;
  top: 0;
  width: calc(100% - 3.25rem);
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 1.25rem 1.625rem;
  & > .on_exp {
    color: black;
    opacity: 64%;
    margin: 0.625rem 0;
    font-size: 0.875rem;
  }
`;
export const Logo = styled.img`
  object-fit: contain;
  width: 60px;
  height: 34px;
`;
export const ContentSection = styled.section`
  padding-top: 6.75rem;
  text-align: left;
  margin: 0 1.625rem;
  width: calc(100% - 3.25rem);
  & .back {
    font-size: 0.625rem;
    color: black;
    opacity: 64%;
  }
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

export const StyledH2 = styled.div`
  font-family: 'Inter-SemiBold';
  font-size: 1.563rem;
  font-weight: bold;
  margin: 0.75rem 0;
`;

export const RadioButton = styled.input`
  vertical-align: -0.188rem;
  appearance: none;
  border: max(2px, 0.1em) solid lightgray;
  border-radius: 50%;
  width: 1.25em;
  height: 1.25em;
  &:checked {
    background-color: ${(props) => props.theme.skyBlue};
  }
`;

export const ButtonSection = styled.div`
  position: fixed;
  bottom: 4rem;
  margin: 0 1.625rem;
  width: calc(100% - 3.25rem);
`;

export const PurpleButton = styled.button`
  height: 3.375rem;
  width: 19.25rem;
  padding: 0;
  margin: 0 0.563rem;
  background-color: ${(props) => props.theme.lightPurple};
  color: white;
  border-radius: 1.2rem;
  &:focus {
    outline: none;
  }
`;
export const StyledFieldSet = styled.fieldset`
  & > label {
    display: inline-block;
    width: 100%;
    margin-top: 2.5rem;
  }
`;
export const InputWrapper = styled.div`
  border-bottom: 1px solid #b0b0b0;
  display: flex;
  justify-content: space-between;
`;

export const TransparentInput = styled.input`
  height: 2rem;
  margin-top: 0.2rem;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0 0.06rem;
  flex: auto;
  &::placeholder {
    font-size: 0.75rem;
  }
`;

export const GrayButton = styled.button`
  background-color: #d0d0d0;
  color: white;
  font-size: 0.625rem;
  font-weight: lighter;
  border: none;
  border-radius: 8px;
  padding: 0.4rem 0.4rem;
  font-family: 'Inter-Regular';
  margin: 0.25rem 0.25rem;
  &:focus {
    outline: none;
  }
`;

export const Explanation = styled.div`
  opacity: 64%;
  font-size: 0.9rem;
  line-height: 1.1rem;
  text-align: justify;
  margin-bottom: 2.5rem;
`;
export const TwoColumnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  & > * {
    margin-top: 2.5rem;
    width: calc((100%) / 2);
    flex: auto;
  }
`;

export const StyledComboBox = styled.select`
  height: 2.063rem;
  padding: 0.25rem;
  margin-top: 0.2rem;
  display: block;
  width: 100%;
  outline: none;
  border: none;
  appearance: none;
  background: url(${polygon3}) no-repeat right;
  border-bottom: 1px solid #b0b0b0;
`;
