import styled from 'styled-components';

const ButtonStyleList = ({ setOptionVisible, color1, color2, myList }) => {
  const ColoredButton = ({ color1, color2, text }) => {
    return (
      <StyledButton
        color1={color1}
        color2={color2}
        onClick={setOptionVisible}
      >
        {text}
      </StyledButton>
    );
  };
  return (
    <>
      {myList.map((content, index) => (
        <li key={index}>
          <ColoredButton
            color1={color1}
            color2={color2}
            text={content}
          />
        </li>
      ))}
      <li>
        <div style={{ height: '50px' }}></div>
      </li>
    </>
  );
};

export default ButtonStyleList;

const StyledButton = styled.button`
  display: flex;
  text-align: center;
  width: auto;
  min-height: 28px;
  height: auto;
  padding: 0 10px;
  margin: 5px 0;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  border: none;
  border-radius: 2rem;
  outline: none;
  font-size: 0.8rem;
  text-align: left;
  word-break: normal;
  background: linear-gradient(
    135deg,
    ${(props) => props.color1 || '#D6EBFF 0%'},
    ${(props) => props.color2 || '#a3abff 100%'}
  );
  color: black;
  -webkit-tap-highlight-color: transparent;
`;
