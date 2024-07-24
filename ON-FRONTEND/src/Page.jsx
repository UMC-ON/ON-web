import React from 'react';
import styled from 'styled-components';
import './App.css';

function Page() {
  return <Test>test</Test>;
}

export default Page;

const Test = styled.p`
  color: ${(props) => props.theme.lightBlue};
  font-family: 'BalooBhai-Regular';
`;
