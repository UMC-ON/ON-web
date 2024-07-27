import styled from 'styled-components';
import theme from '../../styles/theme';

export const PageHeaderLayout = styled.div`
  width: 100%;
  max-width: 480px;
  height: 61px;
  position: fixed;
  z-index: 2;
  display: flex;
  top: 0;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: solid ${theme.lightGray};
  border-width: 0.5px 0;
  box-sizing: border-box;
  padding: 0 17px 0 17px;
`;
export const BackButton = styled.div`
  position: absolute;
  left: 17px;
`;
export const PageName = styled.p`
  text-align: center;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
