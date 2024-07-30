import styled from 'styled-components';

const DefaultCheckBox = ({
  before,
  after,
  wrapperStyle = {},
  checkBoxStyle = {},
}) => {
  return (
    <CheckBoxWrapper style={wrapperStyle}>
      {before}
      <StyledCheckBox
        type="checkBox"
        style={checkBoxStyle}
      />
      {after}
    </CheckBoxWrapper>
  );
};

export default DefaultCheckBox;

const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;

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
  margin: 0 4px;
`;
