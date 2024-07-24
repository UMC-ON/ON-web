import styled from 'styled-components';
import theme from '../styles/theme';
import { NavLink } from 'react-router-dom';

export const NavbarLayout = styled.div`
  width: 100%;
  height: 61px;
  position: fixed;
  z-index: 5;
  display: flex;
  top: 0;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border: solid ${theme.lightGray};
  border-width: 0.5px 0;
  box-sizing: border-box;
  padding: 0 16px 0 27px;
`;

export const ComponentConatiner = styled.div`
  width: 120px;
  height: auto;
  max-height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  object-fit: contain;
  width: 60px;
  height: 34px;
`;
export const Item = styled.img`
  object-fit: contain;
  max-height: 24px;
  width: auto;
`;
