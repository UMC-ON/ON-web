import styled from 'styled-components';
import check from '../../assets/images/check.svg';
import { useRef } from 'react';
const DefaultCheckBox = ({
  before,
  after,
  wrapperStyle = {},
  checkBoxStyle = {},
  onChange = () => {},
  name = {},
}) => {
  let checked = useRef(false);
  return (
    <CheckBoxWrapper style={wrapperStyle}>
      <TextDiv>{before}</TextDiv>

      <StyledCheckBox
        type="checkBox"
        style={checkBoxStyle}
        name={name}
        onClick={() => {
          checked.current = !checked.current;
          onChange({
            target: {
              name: name,
              value: checked.current,
            },
          });
        }}
      />
      <TextDiv>{after}</TextDiv>
    </CheckBoxWrapper>
  );
};

export default DefaultCheckBox;

const CheckBoxWrapper = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;

  flex-wrap: nowrap;
  color: #b2b2b2;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.22px;

  height: 18px;
  width: auto;
`;
const StyledCheckBox = styled.input`
  appearance: none;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 2px solid ${(props) => props.style.color || '#bfd8e5'};
  padding: 0 4px;
  background-color: white;
  &:checked {
    background: url(${check}) no-repeat center white;
  }
`;

const TextDiv = styled.div`
  width: 100%;
  white-space: nowrap;
`;
