import React, {useState} from 'react';
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components';

const GenderChoice = ({ getGender }) => {
  const [gender, setGender] = useState(null);

  const setWoman = () => {
    setGender('여자');
  };

  const setMan = () => {
    setGender('남자');
  };

  const reset = () => {
    setGender(null);
  };

  const handleGender = () => {
    getGender(gender);
  };

  return (
    <Container>
      <Header>
        <p style={{ fontSize: "12px", color: "#CCCCCC", margin: "10px 0" }}>성별</p>
      </Header>
      <Center>
        <Button onClick={setWoman} $isActive={gender === '여자'}>여자</Button>
        <Button onClick={setMan} $isActive={gender === '남자'}>남자</Button>
      </Center>
      <ButtonWrapper>
        <ResetButton onClick={reset}>초기화</ResetButton>
        <ApplyButton disabled={!gender} onClick={handleGender}>적용</ApplyButton>
      </ButtonWrapper>
    </Container>
  );
};

export default GenderChoice;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 10px;
`;

const Header = styled.div`
  text-align: left;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  margin: auto; 
  margin-bottom: 30px; 
  margin-top: 40px;
`;

const Button = styled.button`
  padding: 10px;
  color: ${(props) => (props.$isActive ? '#FFFFFF' : '#363636')};
  border: 1px solid #C2C7FF;
  margin: 5px;
  width: 90%;
  background-color: ${(props) => (props.$isActive ? '#C2C7FF' : 'white')};
  outline: none;
  &:focus {
    outline: none;
  }
`;

const ButtonWrapper = styled.div` 
  display: flex;
  margin-bottom: 26px; 
  justify-content: space-between;
`;

const ResetButton = styled.button`
  background: none;
  border: none;
  color: #007BFF;
  font-size: 0.8em;
  cursor: pointer;
  margin-left: 1em;
`;

const ApplyButton = styled.button`
  background: ${(props) => (props.disabled ? '#E0E0E0' : '#C2C7FF')};
  color: ${(props) => (props.disabled ? 'black' : '#FFFFFF')};
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  width: 10em;
  margin-right: 1em;
`;
