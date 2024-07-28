import styled from 'styled-components';
import theme from '../../styles/theme';
import grayArrow from '../../assets/images/grayArrow.svg';
import radioButton_checked from '../../assets/images/radioButton_checked.svg';

export const FormPage = styled.section`
  background-color: rgb(250, 250, 250);
  box-sizing: border-box;
  height: auto;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  & .margin_bottom_40 {
    margin-bottom: 2.5rem;
  }
`;

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;

export const TitleSection = styled.section`
  width: calc(100% - 3.25rem);
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 1.25rem 1.625rem;
  & > .on_exp {
    color: black;
    opacity: 64%;
    font-size: 0.875rem;
  }
`;
export const Logo = styled.img`
  object-fit: contain;
  width: 93px;
  height: 56px;
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
export const ContentSection = styled.section`
  text-align: left;
  margin: 0 1.625rem;
  width: calc(100% - 3.25rem);
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
  color: black;
  font-family: Inter;
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
    background: url(${radioButton_checked}) no-repeat center;
  }
`;

export const ButtonSection = styled.section`
  width: calc(100% - 2.75rem);
  margin: 1.625rem 1.375rem;
`;

export const PurpleButton = styled.button`
  display: flex;
  width: 308px;
  height: 59px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  margin: 0 0.6rem;
  border-radius: 16px;
  background: #c2c7ff;
  color: white;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  &:focus {
    border: none;
    outline: none;
  }
`;
export const StyledFieldSet = styled.fieldset`
  & > label {
    display: inline-block;
    width: 100%;
  }
  & > label .required::after {
    content: '*';
    color: #c2c7ff;
  }
`;
export const InputWrapper = styled.div`
  border-bottom: 1px solid #b0b0b0;
  display: flex;
  justify-content: space-between;
`;

export const TransparentInput = styled.input`
  color: black;
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
`;
export const TwoColumnWrapper = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    width: calc((100%) / 2.5);
    flex: auto;
  }
`;

export const StyledComboBox = styled.select`
  color: black;
  height: 2.063rem;
  padding: 0.25rem;
  margin-top: 0.2rem;
  display: block;
  width: 100%;
  outline: none;
  border: none;
  appearance: none;
  background: url(${grayArrow}) no-repeat right;
  border-bottom: 1px solid #b0b0b0;
`;

export const CenterContainer = styled.div`
  width: 100%;
  height: auto;
  margin: calc(100% / 25) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
