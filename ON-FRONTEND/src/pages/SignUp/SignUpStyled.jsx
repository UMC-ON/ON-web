import styled from 'styled-components';
import theme from '../../styles/theme';
import grayArrow from '../../assets/images/grayArrow.svg';
import lightBlueArrow from '../../assets/images/lightBlueArrow.svg';
import radioButton_checked from '../../assets/images/radioButton_checked.svg';

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
export const StyledFieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
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
  width: auto;
  height: auto;
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
  padding: 0.75rem;
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

export const SchoolComboBox = styled.select`
  appearance: none;
  width: auto;
  border-radius: 0.8rem;
  outline: none;
  border: none;
  background: url(${lightBlueArrow}) no-repeat right 0.8rem center #f3f3f3;
  padding: 0.25rem 0.625rem;
  margin: 0.625rem 0;
  font-size: 0.75rem;
  color: #979797;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 1rem;
  }
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

export const GrayButton = styled.button`
  flex-shrink: 0;
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
  color: rgba(0, 0, 0, 0.49);
  font-family: 'Baloo Bhaina 2';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 153.846% */
  text-align: justify;
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
  box-sizing: border-box;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
`;
