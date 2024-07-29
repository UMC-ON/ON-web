import styled from 'styled-components';
import React, { useState } from 'react';

function CustomCheckbox({ checked, onChange }) {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <StyledCheckbox checked={checked} />
    </CheckboxContainer>
  );
}

export default CustomCheckbox;

const CheckboxContainer = styled.label`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  margin-top: 5px;
  margin-left: 15px;
  display: inline-block;
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 30%;
  border: 2px solid #BFD8E5;
  transition: all 150ms;
  position: relative;

  ${({ checked }) =>
    checked &&
    `
    border-color: #BFD8E5;
    background: white;
    
    &::after {
      content: '\\2713'; /* Unicode check mark character */
      position: absolute;
      top: 50%;
      left: 50%;
      width: 15px;
      height: 15px;
      font-size: 15px;
      color: #BFD8E5; 
      transform: translate(-50%, -50%);
      text-align: center;
      font-weight: bold;
    }
  `}
  
  /* Optional: Style for unchecked state */
  &:not(:checked) {
    /* You can also add styles for the unchecked state here if needed */
  }
`;
