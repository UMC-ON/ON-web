import { useState } from 'react';
import * as s from './FilterButtonStyled';
import ButtonStyleList from './ButtonStyleList';

const FilterButton = ({ color1, color2, myList, placeholder }) => {
  const [isOptionVisible, setOptionVisible] = useState(false);
  const [currentValue, setCurrentValue] = useState(placeholder);
  const clickHandler = (e) => {
    setOptionVisible(!isOptionVisible);
    const { innerText } = e.target;
    setCurrentValue(innerText);
  };
  return (
    <>
      <s.Wrapper>
        <s.FilterSelectionButton
          onClick={() => {
            setOptionVisible((prev) => !prev);
          }}
        >
          {currentValue}
        </s.FilterSelectionButton>

        <s.FilterList show={isOptionVisible.toString()}>
          <ButtonStyleList
            setOptionVisible={clickHandler}
            color1={color1}
            color2={color2}
            myList={myList}
          />
        </s.FilterList>
      </s.Wrapper>
      <s.DarkBackground
        onClick={() => {
          setOptionVisible((prev) => !prev);
        }}
        show={isOptionVisible.toString()}
      />
    </>
  );
};

export default FilterButton;
