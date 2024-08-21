import styled from 'styled-components';
import theme from '../../styles/theme';

export const InputField = styled.article`
  width: 100%;
  height: 6.125rem;
  flex-shrink: 0;
  position: fixed;
  bottom: 0;
  border-radius: 0.9375rem 0.9375rem 0rem 0rem;
  border: 1px solid #dfdfdf;
  background: #fff;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  box-sizing: border-box;
  z-index: 2;
`;

export const SubmitForm = styled.form`
  width: 90%;
`;

export const TextInputContainer = styled.div`
  height: 2rem;
  width: 90%;
  border: 0;
  position: relative;
  box-sizing: border-box;
  resize: none;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
  column-gap: 0.5rem;
  align-content: center;
`;

export const TextInput = styled.textarea`
  width: 100%;
  height: 2rem;
  border-radius: 0.875rem;
  background: #f6f6f6;
  border: 0;
`;

export const SendButton = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: ${theme.blueGra};
  right: 0;
`;
