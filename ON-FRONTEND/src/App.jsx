import { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Page from './Page';
import './assets/fonts/font.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Page />
    </ThemeProvider>
  );
}

export default App;
