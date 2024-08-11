import styled from 'styled-components';
import lightBlueArrow from '../../assets/images/lightBlueArrow.svg';

export const PageContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: white;
  flex-direction: column;
  align-content: start;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;

export const FilterSection = styled.section`
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: start;
  justify-content: start;
  align-items: center;
  height: 54px;
  width: 100%;
  padding: 0 14px;
`;
export const FilterSelectionButton = styled.button`
  color: black;
  box-sizing: border-box;
  min-width: 69px;
  width: auto;
  height: 28px;
  padding: 5px 10px;
  padding-right: 30px;
  margin: 0 10px;
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
  top: 80%;
  left: 0;
  padding: 0px 0px 30px 24px;
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

export const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 70%;
  z-index: 3;
  display: ${(props) => (props.show === 'true' ? 'block' : 'none')};
`;

export const PostListSection = styled.section`
  width: 100%;
`;

export const SliderWrapper = styled.section`
  width: 100%;
  height: auto;
  margin: 3.81rem 0 1rem 0;
`;

export const WriteButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 93px;
  border-radius: 55px;
  border: none;
  width: 148px;
  height: 50px;
  padding: 15px 26px;
  flex-shrink: 0;
  background: linear-gradient(135deg, #c2c7ff, #ad99ff);
  color: white;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  z-index: 2;
  &:hover {
    outline: 1px solid #9279f8;
  }
  &:focus {
    outline: 1px solid #9279f8;
  }

  -webkit-tap-highlight-color: transparent;
`;
