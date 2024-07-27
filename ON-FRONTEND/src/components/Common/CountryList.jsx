import styled from 'styled-components';

const CountryList = ({ setOptionVisible }) => {
  const ListButton = ({ text }) => {
    return <button onClick={setOptionVisible}>{text}</button>;
  };
  return (
    <>
      <StyledList>
        <ListButton text="미국" />
      </StyledList>
      <StyledList>
        <ListButton text="캐나다" />
      </StyledList>
      <StyledList>
        <ListButton text="영국" />
      </StyledList>
      <StyledList>
        <ListButton text="프랑스" />
      </StyledList>
      <StyledList>
        <ListButton text="독일" />
      </StyledList>
      <StyledList>
        <ListButton text="스위스" />
      </StyledList>
      <StyledList>
        <ListButton text="스웨덴" />
      </StyledList>
      <StyledList>
        <ListButton text="이탈리아" />
      </StyledList>
      <StyledList>
        <ListButton text="네덜란드" />
      </StyledList>
      <StyledList>
        <ListButton text="스페인" />
      </StyledList>
      <StyledList>
        <ListButton text="포르투갈" />
      </StyledList>
      <StyledList>
        <ListButton text="오스트리아" />
      </StyledList>
      <StyledList>
        <ListButton text="벨기에" />
      </StyledList>
      <StyledList>
        <ListButton text="폴란드" />
      </StyledList>
      <StyledList>
        <ListButton text="덴마크" />
      </StyledList>
      <StyledList>
        <ListButton text="핀란드" />
      </StyledList>
      <StyledList>
        <ListButton text="일본" />
      </StyledList>
      <StyledList>
        <ListButton text="중국" />
      </StyledList>
      <StyledList>
        <ListButton text="대만" />
      </StyledList>
      <StyledList>
        <ListButton text="호주" />
      </StyledList>
      <StyledList>
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
    background: linear-gradient(135deg, #c2c7ff 0%, #ad99ff 100%);
    color: white;
  }
`;
