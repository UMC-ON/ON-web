import styled from 'styled-components';
import theme from '../../styles/theme';

export const ChatHeaderLayout = styled.div`
  width: 100%;
  max-width: 480px;
  height: 61px;
  position: fixed;
  z-index: 2;
  display: flex;
  top: 0;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
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

export const CompleteBtn = styled.div`
  position: fixed;
  right: 1.81rem;
  display: flex;
  width: 3.9375rem;
  height: 1.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  color: #fff;
  font-family: Inter;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.015rem;
  background: ${theme.purpleGra};
`;
