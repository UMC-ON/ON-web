import { useState } from 'react';
import * as s from './FilterButtonStyled';
import ButtonStyleList from './ButtonStyleList';

const FilterButton = ({
  color1,
  color2,
  myList,
  placeholder,
  setCurrentFilterValue,
}) => {
  const [isOptionVisible, setOptionVisible] = useState(false);
  const [currentText, setCurrentText] = useState(placeholder);
  const clickHandler = (e) => {
    setOptionVisible(!isOptionVisible);
    const innerText = e.target.country;
    setCurrentText(innerText);
    setCurrentFilterValue(e.target.value);
  };
  return (
    <>
      <s.Wrapper>
        <s.FilterSelectionButton
          onClick={() => {
            setOptionVisible((prev) => !prev);
          }}
        >
          {currentText}
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
