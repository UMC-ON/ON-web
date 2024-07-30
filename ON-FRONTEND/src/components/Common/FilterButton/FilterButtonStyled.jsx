export const Wrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  margin: 0 5px;
  white-space: nowrap; //부모요소 넘어갈 수 있도록...근데 너무 긴 텍스트는 화면 밖으로 나감 ㅠㅠ 해결하기
`;

export const FilterSelectionButton = styled.button`
  color: black;
  box-sizing: border-box;
  width: auto;
  height: 28px;
  padding: 5px 10px;
  padding-right: 30px;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  border: none;
  border-radius: 2rem;
  outline: none;
  font-size: 0.8rem;
  text-align: left;
  background: url(${lightBlueArrow}) no-repeat right 0.8rem center #f0f0f0;
  &:focus {
    outline: 1px solid gray;
  }
  -webkit-tap-highlight-color: transparent;
`;
export const FilterList = styled.ul`
  box-sizing: border-box;
  position: absolute;
  top: 120%;

  display: ${(props) => (props.show === 'true' ? 'flex' : 'none')};
  flex-direction: column;
  align-items: start;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  height: 300px;
  width: auto;
  mask-image: linear-gradient(to top, transparent 5%, white 25%, white 75%);
  z-index: 4;
`;
import styled from 'styled-components';
import lightBlueArrow from '../../../assets/images/lightBlueArrow.svg';

export const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 480px;
  height: 100vh;
  background-color: black;
  opacity: 70%;
  z-index: 3;
  display: ${(props) => (props.show === 'true' ? 'block' : 'none')};
`;

export const PostListSection = styled.section`
  width: 100%;
`;
