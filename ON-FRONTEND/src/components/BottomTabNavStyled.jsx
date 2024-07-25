import styled from 'styled-components';
import theme from '../styles/theme';

export const BottomTabLayout = styled.div`
  width: 100%;
  max-width: 480px;
  height: 87px;
  position: fixed;
  bottom: 0;
  border-radius: 14px 14px 0px 0px;
  border: 1px solid white;
  background: #f7f7f7;
  z-index: 1;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 15px 32px 30px 32px;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  color: ${(props) =>
    props.className === 'active' ? theme.navActivate : theme.creamGray};
  fill: ${(props) =>
    props.className === 'active' ? theme.navActivate : theme.creamGray};
  &:active {
    color: ${theme.navActivate};
    fill: ${theme.navActivate};
  }
`;

export const Icon = styled.svg``;

export const IconTag = styled.p`
  text-align: center;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
