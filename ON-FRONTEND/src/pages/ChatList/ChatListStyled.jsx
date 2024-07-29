import styled from 'styled-components';
import theme from '../../styles/theme';

export const ChatListLayout = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 480px;
  display: flex;
  box-sizing: border-box;
  padding: 61px 0px 0px;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`;

export const ModeContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 1.12rem 0 2rem 0;
  padding-left: 1.5rem;
  box-sizing: border-box;
  align-content: flex-start;
`;

export const ModeButton = styled.div`
  width: 5.0625rem;
  height: 2.125rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  border: 1px solid #c2c7ff;
  color: #ad99ff;
  text-align: center;
  font-family: Inter;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.125rem;
  margin-right: 0.5rem;

  background: ${(props) => (props.$active ? props.theme.purpleGra : 'none')};
  color: ${(props) => (props.$active ? '#fff' : '#ad99ff')};

  &:active {
    background: ${(props) => props.theme.purpleGra};
    color: #fff;
  }
`;

export const ChatListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const Line = styled.div`
  width: 100%;
  border-top: 1px solid black;
  transform: scaleY(0.1);
`;
