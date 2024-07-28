import styled from 'styled-components';

const CountryList = ({ setOptionVisible, color1, color2 }) => {
  const ListButton = ({ text }) => {
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
      <StyledList>
        <ListButton
          text="미국"
          color1={color1}
          color2={color2}
        />
      </StyledList>
      <StyledList>
        <ListButton
          text="캐나다"
          color1={color1}
          color2={color2}
        />
      </StyledList>
      <StyledList>
        <ListButton
          text="영국"
          color1={color1}
          color2={color2}
        />
      </StyledList>
      <StyledList>
        <ListButton
          text="프랑스"
          color1={color1}
          color2={color2}
        />
      </StyledList>
      <StyledList>
        <ListButton
          text="독일"
          color1={color1}
          color2={color2}
        />
      </StyledList>
      <StyledList>
        <ListButton
          text="스위스"
          color1={color1}
          color2={color2}
        />
      </StyledList>
      <StyledList>
        <ListButton
          text="스웨덴"
          color1={color1}
          color2={color2}
        />
      </StyledList>
      <StyledList>
        <ListButton
          text="이탈리아"
          color1={color1}
          color2={color2}
        />
      </StyledList>
      <StyledList>
        <ListButton
          text="네덜란드"
          color1={color1}
          color2={color2}
        />
      </StyledList>
      <StyledList>
        <ListButton
          text="스페인"
          color1={color1}
          color2={color2}
        />
      </StyledList>
      <StyledList>
        <ListButton
          text="포르투갈"
          color1={color1}
          color2={color2}
        />
      </StyledList>
      <StyledList>
        <ListButton
          text="오스트리아"
          color1={color1}
          color2={color2}
        />
      </StyledList>
      <StyledList>
        <ListButton
          text="벨기에"
          color1={color1}
          color2={color2}
        />
      </StyledList>
      <StyledList>
        <ListButton
          text="폴란드"
          color1={color1}
          color2={color2}
        />
      </StyledList>
      <StyledList>
        <ListButton
          text="덴마크"
          color1={color1}
          color2={color2}
        />
      </StyledList>
      <StyledList>
        <ListButton
          text="핀란드"
          color1={color1}
          color2={color2}
        />
      </StyledList>
      <StyledList>
        <ListButton
          text="일본"
          color1={color1}
          color2={color2}
        />
      </StyledList>
      <StyledList>
        <ListButton
          text="중국"
          color1={color1}
          color2={color2}
        />
      </StyledList>
      <StyledList>
        <ListButton
          text="대만"
          color1={color1}
          color2={color2}
        />
      </StyledList>
      <StyledList>
        <ListButton
          text="호주"
          color1={color1}
          color2={color2}
        />
      </StyledList>
      <StyledList
        color1={color1}
        color2={color2}
      >
        <ListButton text="뉴질랜드" />
      </StyledList>
    </>
  );
};
export default CountryList;

const StyledList = styled.li`
  & > button {
    display: flex;
    text-align: center;
    width: auto;
    height: 28px;
    padding: 10px;
    margin: 5px 0;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;
    border: none;
    border-radius: 2rem;
    outline: none;
    font-size: 0.8rem;
    text-align: left;
    background: ${(props) => {
      `linear-gradient(135deg, ${props.color1},${props.color2}) ` ||
        'linear-gradient(135deg,#D6EBFF,#C2C7FF)';
    }};
    color: white;
    -webkit-tap-highlight-color: transparent;
  }
`;

const StyledButton = styled.button`

display: flex;
    text-align: center;
    width: auto;
    height: 28px;
    padding: 10px;
    margin: 5px 0;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;
    border: none;
    border-radius: 2rem;
    outline: none;
    font-size: 0.8rem;
    text-align: left;
    background: ${(props) => {
      `linear-gradient(
          135deg, ${props.color1},${props.color2}) ` ||
        'linear-gradient(135deg,#D6EBFF,#C2C7FF)';
    }};
    color: white;
    -webkit-tap-highlight-color: transparent;
  }
  
`;
