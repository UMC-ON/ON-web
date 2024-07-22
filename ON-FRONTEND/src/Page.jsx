import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import styled from "styled-components";
import './App.css';

function Page() {
  
    return (
      <ThemeProvider theme = {theme}>
        <Test>test</Test>
      </ThemeProvider>
    );
  }
  
  export default Page;

  const Test = styled.p`
    color: ${(props) => props.theme.lightBlue};
    font-family: "BalooBhai-Regular";`
  