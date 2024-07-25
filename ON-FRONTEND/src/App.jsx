import { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './styles/theme.js';

// 페이지, 컴포넌트 import
import NavBar from './components/NavBar/NavBar.jsx';
import MyPage from './pages/MyPage/MyPage.jsx';
import Notification from './pages/Notification/NotificationPage.jsx';
import Search from './pages/Search/SearchPage.jsx';
import BottomTabNav from './components/BottomTabNav/BottomTabNav.jsx';
import Chat from './pages/Chat/ChatPage.jsx';
import HomePage from './pages/HomePage.jsx';
import SignUp_TermsOfService from './pages/SignUp_SignIn/SignUp_TermsOfService.jsx';
import SignUp_UserInfo from './pages/SignUp_SignIn/SignUp_UserInfo.jsx';
import SignUp_UserInfo_Additional from './pages/SignUp_SignIn/SignUp_UserInfo_Additional.jsx';
import SignUp_UserInfo_School from './pages/SignUp_SignIn/SignUp_UserInfo_School.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route
          path="/signUp"
          element={<SignUp_TermsOfService />}
        />
        <Route
          path="/signUp/userInfo"
          element={<SignUp_UserInfo />}
        />
        <Route
          path="/signUp/userInfo_additional"
          element={<SignUp_UserInfo_Additional />}
        />

        <Route
          path="/signUp/userInfo_school"
          element={<SignUp_UserInfo_School />}
        />
        <Route
          path="/"
          element={<HomePage />}
        />
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
        <Route
          path="/chat"
          element={<Chat />}
        />
      </Routes>
      <BottomTabNav />
    </ThemeProvider>
  );
}

export default App;
