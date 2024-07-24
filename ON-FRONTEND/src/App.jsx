import { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './styles/theme.js';
import Page from './Page.jsx';

// 페이지, 컴포넌트 import
import NavBar from './components/NavBar.jsx';
import MyPage from './pages/MyPage.jsx';
import Notification from './pages/Notification.jsx';
import Search from './pages/Search.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route
          path="/mypage"
          element={<MyPage />}
        />
        <Route
          path="/notification"
          element={<Notification />}
        />
        <Route
          path="/search"
          element={<Search />}
        />
      </Routes>
      <Page />
    </ThemeProvider>
  );
}

export default App;
